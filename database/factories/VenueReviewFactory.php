<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VenueReview>
 */
class VenueReviewFactory extends Factory
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
            'user_id' => $this->faker->numberBetween(1, 10),
            'venue_id' => $this->faker->numberBetween(1, 10),
            'rating' => $this->faker->numberBetween(1, 5),
            'comment' => $this->faker->text(),

        ];
    }
}
