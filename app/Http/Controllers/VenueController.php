<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Venue;

class VenueController extends Controller
{
    public function views()
    {
        $token = csrf_token();
        return Inertia::render('Venue/index', ["csrf" => $token]);
    }
    public function detail($slug)
    {
        $venue = Venue::where('slug', $slug)->first();

        if (!$venue) {
            return Inertia::render('Error/404');
        }
        $venue->load('venueCategory', 'venueReviews.user', 'user', 'venueBookings.user');
        return Inertia::render('Venue/Detail', [
            'data' => $venue
        ]);
    }
    public function add_venue(Request $request)
    {
        $file_image = $request->file('photo');
        // validasi file
        $request->validate(
            [
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10048'
            ],
            [
                'photo.required' => 'Photo is required',
                'photo.image' => 'Photo must be an image',
                'photo.mimes' => 'Photo must be jpeg, png, jpg, gif, svg',
                'photo.max' => 'Photo max size is 2MB'
            ]
        );
        $file_name = $file_image->getClientOriginalName();
        $request->validate(
            [
                'name' => 'required',
                'description' => 'required',
                'address' => 'required',
                'price' => 'required',
                'category' => 'required'
            ],
            [
                'name.required' => 'Name is required',
                'description.required' => 'Description is required',
                'address.required' => 'Address is required',
                'price.required' => 'Price is required',
                'category.required' => 'Category is required'
            ]
        );

        $create = Venue::create([
            'name' => $request->name,
            'description' => $request->description,
            'address' => $request->address,
            'image' => $file_name,
            'price' => $request->price,
            'category' => $request->category
        ]);
        if (!$create) {
            return redirect()->back()->with('error', 'Failed to add venue');
        }
        return redirect()->back()->with('success', 'Venue added successfully');
    }
}
