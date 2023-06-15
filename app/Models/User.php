<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];
    public function venues()
    {
        return $this->hasMany(Venue::class);
    }
    public function venueReviews()
    {
        return $this->hasMany(VenueReview::class);
    }
    public function venueBookings()
    {
        return $this->hasMany(VenueBooking::class);
    }
}
