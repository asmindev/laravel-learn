<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Venue>
 */
class VenueFactory extends Factory
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
            'slug' => $this->faker->slug(),
            'address' => $this->faker->address(),
            'description' => $this->faker->text(),
            'capacity' => $this->faker->numberBetween(10, 100),
            'price' => $this->faker->numberBetween(100000, 1000000),
            'open' => $this->faker->time(),
            'close' => $this->faker->time(),
            'contact' => $this->faker->phoneNumber(),
            'photo' => $this->faker->imageUrl(),
            'venue_category_id' => $this->faker->numberBetween(1, 2),
            'user_id' => $this->faker->numberBetween(1, 10),
        ];
    }
}
