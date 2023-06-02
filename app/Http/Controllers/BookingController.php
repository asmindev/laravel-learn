<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVenueBookingRequest;
use App\Http\Requests\UpdateVenueBookingRequest;
use App\Models\VenueBooking;
use App\Models\Venue;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVenueBookingRequest $request)
    {
        VenueBooking::create($request->all());
        // back to this page
    }

    /**
     * Display the specified resource.
     */
    public function show(VenueBooking $venueBooking)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VenueBooking $venueBooking)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVenueBookingRequest $request, VenueBooking $venueBooking)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VenueBooking $venueBooking)
    {
        //
    }
}
