<?php

namespace App\Models;

use App\Models\User;
use App\Models\Venue;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class VenueReview extends Model
{
    use HasFactory;
    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
