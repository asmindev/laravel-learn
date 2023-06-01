<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

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
        $email = $request->email;
        $password = $request->password;
        $remember = $request->remember;
        if (Auth::attempt(['email' => $email, 'password' => $password], $remember)) {
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
