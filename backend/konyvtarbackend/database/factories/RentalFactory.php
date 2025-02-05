<?php

namespace Database\Factories;
use App\Models\Book;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Date;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Rental>
 */
class RentalFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $bookId=Book::all()->pluck("id");
        $startDate=fake()->dateTimeBetween("-1 year")->format("Y-m-d");
        $endDate=fake()->date("Y-m-d", strtotime("+1 week"));
        return [
            "book_id"=>fake()->randomElement($bookId),
            "start_date"=>$startDate,
            "end_date"=>$endDate,

        ];
    }
}
