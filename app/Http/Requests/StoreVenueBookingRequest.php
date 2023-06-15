<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVenueBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            "user_id" => ["required", "exists:users,id"],
            "venue_id" => ["required", "exists:venues,id"],
            "start_time" => [
                "required",
                function ($attribute, $value, $fail) {
                    $currentTime = date('Y-m-d H:i:s', strtotime('+8 hours'));
                    $date = request()->input('date'); // Ubah 'date' sesuai dengan nama atribut tanggal Anda

                    if (!\DateTime::createFromFormat('Y-m-d', $value) && !\DateTime::createFromFormat('H:i', $value)) {
                        $fail('Start time must be a valid date time.');
                    }

                    if ($date == date('Y-m-d', strtotime('+8 hours'))) {
                        // Jika tanggal adalah hari ini
                        if (strtotime($value) <= strtotime($currentTime)) {
                            $fail('Start time must be greater than current time.');
                        }
                    }
                }
            ],
            "end_time" => ["required", function ($attribute, $value, $fail) {
                if ($value <= $this->start_time) {
                    $fail('End time must be greater than start time.');
                }
                if (!\DateTime::createFromFormat('Y-m-d', $value) && !\DateTime::createFromFormat('H:i', $value)) {
                    $fail('End time must be a valid date time.');
                }
                // set timezone to gmt +8 and if the end_time is within 1 hour from start_time, it will fail
                if (strtotime($value) < strtotime($this->start_time) + 3600) {
                    $fail('End time must be greater than start time.');
                }
            }],
            "date" => ["required", "date", "after_or_equal:today"],
            "name" => ["required", "string", "min:5"],
        ];
    }
}
