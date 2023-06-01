<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\VenueCategory::factory()->create([
            'name' => 'Lapangan',
            'slug' => 'lapangan',
        ]);

        \App\Models\VenueCategory::factory()->create([
            'name' => 'Gedung',
            'slug' => 'gedung',
        ]);

        \App\Models\User::factory()->create([
            "name" => "Admin",
            "username" => "admin",
            "phone_number" => "081234567890",
            "email" => "admin@gmail.com",
            "role" => "admin",
            "password" => bcrypt("admin123"),
        ]);
        \App\Models\User::factory()->create([
            "name" => "User",
            "username" => "user",
            "phone_number" => "081234567891",
            "email" => "user@gmail.com",
            "role" => "user",
            "password" => bcrypt("user123"),
        ]);
        // TODO: Venues
        \App\Models\Venue::factory()->create([
            'user_id' => 1,
            'venue_category_id' => 1,
            'slug' => 'venue-1',
            'name' => 'Venue 1',
            'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
            'address' => 'Jl. Venue 1',
            'capacity' => 100,
            'price' => 500,
            'open' => '09:00:00',
            'close' => '18:00:00',
            'photo' => 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'contact' => 'venue1@example.com',
        ]);
        \App\Models\Venue::factory()->create([
            'user_id' => 1,
            'venue_category_id' => 1,
            'slug' => 'venue-2',
            'name' => 'Venue 2',
            'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
            'address' => 'Jl. Venue 2',
            'capacity' => 100,
            'price' => 500,
            'open' => '09:00:00',
            'close' => '18:00:00',
            'photo' => 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'contact' => 'venue1@example.com',
        ]);
        \App\Models\Venue::factory()->create([
            'user_id' => 2,
            'venue_category_id' => 2,
            'slug' => 'venue-3',
            'name' => 'Venue 3',
            'description' => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?",
            'address' => 'Jl. Venue 3',
            'capacity' => 100,
            'price' => 500,
            'open' => '09:00:00',
            'close' => '18:00:00',
            'photo' => 'https://images.unsplash.com/photo-1643199121319-b3b5695e4acb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
            'contact' => 'venue1@example.com',
        ]);

        // TODO: Venue reviews
        \App\Models\VenueReview::factory()->create([
            'venue_id' => 2,
            'user_id' => 1,
            'rating' => 5,
            'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
        ]);
        \App\Models\VenueReview::factory()->create([
            'venue_id' => 2,
            'user_id' => 1,
            'rating' => 5,
            'comment' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio maxime animi iure sequi incidunt minima rem nesciunt non blanditiis?',
        ]);
        \App\Models\VenueBooking::factory()->create([
            'venue_id' => 2,
            'user_id' => 1,
            'name' => 'Futsal',
            'date' => '2023-06-02',
            'start_time' => '10:00:00',
            'end_time' => '12:00:00',
            "price" => 500,
            'status' => 'pending',
        ]);
        \App\Models\VenueBooking::factory()->create([
            'venue_id' => 2,
            'user_id' => 2,
            'name' => 'Balapan',
            'date' => '2023-06-02',
            'start_time' => '12:00:00',
            'end_time' => '14:00:00',
            "price" => 500,
            'status' => 'paid',
        ]);
        \App\Models\VenueBooking::factory()->create([
            'venue_id' => 1,
            'user_id' => 2,
            'name' => 'Camp',
            'date' => '2023-06-01',
            'start_time' => '12:00:00',
            'end_time' => '13:00:00',
            "price" => 500,
            'status' => 'paid',
        ]);
        \App\Models\VenueBooking::factory()->create([
            'venue_id' => 1,
            'user_id' => 2,
            'name' => 'Camp',
            'date' => '2023-06-01',
            'start_time' => '09:00:00',
            'end_time' => '10:00:00',
            "price" => 500,
            'status' => 'paid',
        ]);
        \App\Models\VenueBooking::factory()->create([
            'venue_id' => 1,
            'user_id' => 2,
            'name' => 'Camp',
            'date' => '2023-06-01',
            'start_time' => '14:00:00',
            'end_time' => '16:00:00',
            "price" => 500,
            'status' => 'paid',
        ]);
    }
}
