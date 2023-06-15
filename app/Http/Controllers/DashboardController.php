<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $user = auth()->user();
        if ($user->role === 'admin') {
            // get all users, venues, providers, users
            $users = User::with('venues')->get();
            return Inertia::render(
                'Dashboard/Admin/Index',
                [
                    'users' => $users
                ]
            );
        } else if ($user->role === 'provider') {
            $user = User::with('venues.venueBookings.user')->find($user->id);
            return Inertia::render('Dashboard/Provider/Index', [
                'data' => $user
            ]);
        } else if ($user->role === 'user') {
            $user = User::with('venueBookings.venue.venueCategory')->find($user->id);
            return Inertia::render('Dashboard/User/Index', [
                'data' => $user
            ]);
        } else {
            return Inertia::render('Error/403');
        }
    }
    public function allUsers()
    {
        $user = auth()->user();
        if ($user->role === 'admin') {
            $users = User::with('venues')->get();
            return Inertia::render(
                'Dashboard/Admin/AllUsers',
                [
                    'users' => $users
                ]
            );
        } else {
            return Inertia::render('Error/403');
        }
    }
    public function allVenues()
    {
        $user = auth()->user();
        if ($user->role === 'provider') {
            // $data = User::with('venues.venueBookings.user')->find($user->id);
            // venus has bookings, and bookings has user, also venues has category
            $data = User::with('venues.venueBookings.user', 'venues.venueCategory')->find($user->id);
            return Inertia::render('Dashboard/Provider/AllVenues', [
                'data' => $data
            ]);
        } else {
            return Inertia::render('Error/403');
        }
    }

    public function profile()
    {
        $user = auth()->user();
        if ($user->role === 'user') {
            $user = User::with('venueBookings.venue.venueCategory')->find($user->id);
            return Inertia::render('Dashboard/User/Profile', [
                'data' => $user
            ]);
        } else if ($user->role === 'provider') {
            $user = User::with('venues.venueBookings.user')->find($user->id);
            return Inertia::render('Dashboard/Provider/Profile', [
                'data' => $user
            ]);
        } else  if ($user->role === 'admin') {
            $users = User::with('venues')->get();
            return Inertia::render(
                'Dashboard/Admin/Profile',
                [
                    'users' => $users
                ]
            );
        } else {
            return Inertia::render('Error/403');
        }
    }
}
