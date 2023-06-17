<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Venue;
use Illuminate\Http\Request;
use App\Http\Requests\StoreVenueRequest;
use App\Http\Requests\UpdateVenueRequest;
use \Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;


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
        if (!auth()->check()) {
            return redirect()->route('login');
        }
        if (auth()->user()->role === 'provider') {
            return Inertia::render('Venue/Create');
        } else {
            return Inertia::render('Error/403');
        }
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
        return to_route('dashboard.all-venues', ['flash' => ['success' => 'Venue created successfully']]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Venue $venue)
    {
        $venue->load('venueCategory', 'venueReviews.user', 'user', 'venueBookings.user');
        // if venue user role is penyedia
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
        // check the data photo if not start with http, if not add url
        if (!Str::startsWith($venue->photo, 'http')) {
            $venue->photo = Storage::url($venue->photo);
            $base_url = request()->getSchemeAndHttpHost();
            $venue->photo = str_replace('http://localhost', $base_url, $venue->photo);
        }

        return Inertia::render('Dashboard/Provider/EditVenue', [
            'data' => $venue
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVenueRequest $request, Venue $venue)
    {
        // remove created_at and updated_at from request
        $item = $request->except(['created_at', 'updated_at']);
        // check if photo is not null
        if ($request->hasFile('photo')) {
            // delete old photo
            Storage::delete($venue->photo);
            // store new photo
            $item['photo'] = $request->file('photo')->store('venues');
        }
        // change slug
        $item['slug'] = Str::slug($request->input('name'));
        // update venue
        $venue->update($item);
        // return to dashboard
        return redirect()->route('dashboard.all-venues')->with('success', 'Venue Berhasil diupdate');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Venue $venue)
    {
        // delete venue
        $venue->delete();
        // return to dashboard
        return back()->with('success', 'Venue Berhasil dihapus');
    }
}
