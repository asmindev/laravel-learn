<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateVenueRequest extends FormRequest
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
            'name' => ['required', 'string', 'min:5'],
            'description' => ['required', 'string', 'min:20'],
            'address' => ['required', 'string'],
            'price' => ['required', 'numeric', 'min:10'],
            'venue_category_id' => ['required', 'exists:venue_categories,id'],
            'open' => ['required', 'date_format:H:i'],
            'close' => ['required', 'date_format:H:i'],
            'capacity' => ['required', 'numeric'],
            'photo' => ['nullable', 'image', 'max:10048'],
        ];
    }
}
