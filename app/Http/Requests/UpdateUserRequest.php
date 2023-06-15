<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
        $user_id = $this->route('user')->id;
        return [
            'name' => ['string', 'min:3', 'max:255'],
            'username' => ['string', 'min:3', 'max:255', Rule::unique('users')->ignore($user_id)],
            'email' => ['string', 'email', 'max:255', Rule::unique('users')->ignore($user_id)],
            'password' => ['string', 'min:3', 'max:255'],
            'profile_picture' => ['image', 'mimes:jpeg,png,jpg,gif,svg', 'max:11048'],
        ];
    }
}
