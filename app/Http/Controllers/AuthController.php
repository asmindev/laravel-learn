<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    public function login_view()
    {
        $token = csrf_token();
        return Inertia::render('Auth/Login', ['token' => $token]);
    }
    public function login(Request $request)
    {
        // login with username or email and password

        $credentials = $request->only('password');
        if (auth()->attempt(['username' => $request->input('username')] + $credentials) || auth()->attempt(['email' => $request->input('username')] + $credentials)) {
            $request->session()->regenerate();
            return redirect()->intended('/');
        }
        return back()->withErrors([
            'message' => 'The provided credentials do not match our records.',
        ]);
    }

    public function logout_view()
    {
        return Inertia::render('Auth/Logout');
    }

    public function logout(Request $request)
    {
        auth()->logout();
        $request->session()->invalidate();
        $request->session()->regenerate();
        return redirect()->route('login');
    }

    public function register_view()
    {
        $csrf_token = csrf_token();
        return Inertia::render('Auth/Register', ['token' => $csrf_token]);
    }
    public function store(Request $request)
    {

        $validateData = $request->validate([
            'phone_number' => 'required|unique:users',
            'username' => 'required|unique:users',
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'role' => 'required|in:admin,provider,tenant',
            'password' => 'required|confirmed',
        ], [
            'phone_number.required' => 'Phone number is required',
            'phone_number.unique' => 'Phone number is already taken',
            'username.required' => 'Username is required',
            'username.unique' => 'Username is already taken',
            'name.required' => 'Name is required',
            'email.required' => 'Email is required',
            'email.unique' => 'Email is already taken',
            'role.required' => 'Role is required',
            'role.in' => 'Role must be admin, provider, or tenant',
            'password.required' => 'Password is required',
            'password.confirmed' => 'Password confirmation is not match',
        ]);


        $validateData['password'] = bcrypt($request->password);
        $user = User::create($validateData);
        if ($user) {
            return redirect()->route('login')->with('success', 'User created successfully.');
        } else {
            return redirect()->route('register')->with('error', 'User created failed.');
        }
    }
}
