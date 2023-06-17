<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VenueController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route welcome
Route::get('/', [HomeController::class, 'index'])->name('home');


Route::get('/auth/register', [AuthController::class, 'register_view'])->middleware('guest')->name('register');
Route::post('/auth/register', [AuthController::class, 'store'])->middleware('guest');
Route::get('/auth/login', [AuthController::class, 'login_view'])->middleware('guest')->name('login');
Route::post('/auth/login', [AuthController::class, 'login'])->middleware('guest');

Route::get('/auth/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::resource('venue', VenueController::class);
Route::resource('booking', BookingController::class);
Route::resource('user', UserController::class)->except(['create', 'store', 'show']);
Route::get('/dashboard', [DashboardController::class, 'index'])->middleware('auth')->name('dashboard');
Route::get('/dashboard/all-venues', [DashboardController::class, 'allVenues'])->middleware('auth')->name('dashboard.all-venues');
Route::get('/dashboard/all-users', [DashboardController::class, 'allUsers'])->middleware('auth')->name('dashboard.all-users');
Route::get('/dashboard/profile', [DashboardController::class, 'profile'])->middleware('auth')->name('dashboard.profile');
Route::get('/dashboard/bookings', [DashboardController::class, 'booking'])->middleware('auth')->name('dashboard.booking');
// delete booking
