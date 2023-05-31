<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\VenueController;

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

// venue controller
Route::get('/venue', [VenueController::class, 'views'])->name('venue')->middleware('auth');
Route::post('/venue', [VenueController::class, 'add_venue'])->middleware('auth');
Route::get('/venue/{slug}', [VenueController::class, 'detail'])->name('venue.detail');
