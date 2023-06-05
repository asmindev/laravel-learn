<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Venue;
use Illuminate\Http\Request;
use App\Http\Requests\StoreVenueRequest;
use \Illuminate\Support\Str;

class VenueController extends Controller
{

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // check the auth user
        return Inertia::render('Venue/index');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVenueRequest $request)
    {
        $item = $request->all();
        $item['user_id'] = auth()->user()->id;
        $item['slug'] = Str::slug($request->name);
        $item['photo'] = $request->file('photo')->store('venues');
        Venue::create($item);
        return to_route('home');
    }

    /**
     * Display the specified resource.
     */
    public function show(Venue $venue)
    {
        $venue->load('venueCategory', 'venueReviews.user', 'user', 'venueBookings.user');
        return Inertia::render('Venue/Detail', [
            'data' => $venue
        ]);
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Venue $venue)
    {
        return $venue;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Venue $venue)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Venue $venue)
    {
        //
    }
}
