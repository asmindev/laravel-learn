<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Venue;
use App\Models\VenueCategory;
use App\Models\VenueReview;
use App\Models\VenueBooking;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        VenueCategory::create([
            'name' => 'lapangan',
            'slug' => 'lapangan'
        ]);
        VenueCategory::create([
            'name' => 'gedung',
            'slug' => 'gedung'
        ]);

        // make 2 users. admin and provider
        User::factory()->count(10)->create();
        $admin = User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role' => 'admin',
        ]);
        $provider = User::factory()->create([
            'name' => 'Provider',
            'email' => 'provider@gmail.com',
            'role' => 'provider',
        ]);
        // make 10 venues
        Venue::factory()->count(10)->create([
            'open' => '08:00',
            'close' => '23:00',
            'user_id' => $provider->id,
        ]);
        VenueReview::factory(10)->create();
        VenueBooking::factory(10)->create();

        // make 10 users
    }
}
