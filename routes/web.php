<?php

use App\Http\Controllers\AuthController;

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

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
Route::get('/', function () {
    $data = [
        [
            "id" => 1,
            "title" => "Malona",
            "slug" => "malona",
            "location" => "Kendari Permai",
            "price" => "Rp. 220.000",
            "category" => "hotel"
        ],
        [
            "id" => 2,
            "title" => "Mokodompit",
            "slug" => "mokodompit",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 1.000.000",
            "category" => "hotel"

        ],
        [
            "id" => 3,
            "title" => "Hotel Kubra",
            "slug" => "hotel-kubra",
            "location" => "Kendari Permai",
            "price" => "Rp. 220.000",
            "category" => "lapangan"
        ],
        [
            "id" => 4,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
            "category" => "hotel"
        ],
        [
            "id" => 5,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
            "category" => "lapangan"
        ],
        [
            "id" => 6,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
            "category" => "lapangan"
        ],
        [
            "id" => 7,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 8,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 9,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 10,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 11,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 12,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
        ],
        [
            "id" => 13,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
            "category" => "lapangan"
        ],
        [
            "id" => 14,
            "title" => "Hotel Kita",
            "slug" => "hotel-kita",
            "location" => "Universitas Halu Oleo",
            "price" => "Rp. 300.000",
            "category" => "lapangan"
        ]
    ];
    return Inertia::render('Home/index', [
        'data' => $data
    ]);
})->name('home');


Route::get('/auth/register', [AuthController::class, 'register_view'])->middleware('guest')->name('register');
Route::post('/auth/register', [AuthController::class, 'store'])->middleware('guest');
Route::get('/auth/login', [AuthController::class, 'login_view'])->middleware('guest')->name('login');
Route::post('/auth/login', [AuthController::class, 'login'])->middleware('guest');

Route::get('/auth/logout', [AuthController::class, 'logout'])->middleware('auth')->name('logout');

Route::get('/blog', [PostController::class, 'all']);


Route::get('/blog/{slug}', [PostController::class, 'detail']);
