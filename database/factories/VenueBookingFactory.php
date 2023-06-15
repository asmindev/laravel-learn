<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VenueBooking>
 */
class VenueBookingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'name' => $this->faker->name(),
            'user_id' => $this->faker->numberBetween(1, 10),
            'venue_id' => $this->faker->numberBetween(1, 10),
            'date' => $this->faker->date(),
            'start_time' => $this->faker->time('H:i'),
            'end_time' => $this->faker->time('H:i'),
            'price' => $this->faker->numberBetween(100000, 1000000),
            'status' => $this->faker->randomElement(['pending', 'approved', 'rejected']),
        ];
    }
}
