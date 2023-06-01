<?php

namespace App\Models;

use App\Models\VenuePhoto;
use App\Models\VenueReview;
use App\Models\VenueBooking;
use App\Models\VenueCategory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Venue extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function photos()
    {
        return $this->hasMany(VenuePhoto::class);
    }
    public function venueCategory()
    {
        return $this->belongsTo(VenueCategory::class);
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
