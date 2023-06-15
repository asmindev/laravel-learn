<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
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
            'name' => ['required', 'string', 'min:3', 'max:255'],
            'username' => ['required', 'unique:users', 'string', 'min:3', 'max:255'],
            'email' => ['required', 'unique:users', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:3', 'max:255'],
            'profile_picture' => ['required', 'image', 'mimes:jpeg,png,jpg,gif,svg', 'max:11048'],
        ];
    }
}
