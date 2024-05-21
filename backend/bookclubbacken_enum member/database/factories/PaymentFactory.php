<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Member;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Payment>
 */
class PaymentFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $memberId=Member::all()->pluck("id");


        return [
            "member_id"=>fake()->randomElement($memberId),
            "amount"=>fake()->numberBetween(0, 100000),
            "paid_at"=>fake()->dateTimeBetween("-1 year")->format("Y-m-d-H-i-s"),
        ];
    }
}
