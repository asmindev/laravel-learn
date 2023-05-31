<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VenuePhoto extends Model
{
    use HasFactory;
    protected $fillable = [
        'venue_id',
        'file_name',
        'description'
    ];
    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
}
