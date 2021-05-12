<?php

namespace Database\Factories;

use App\Models\Product;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'user_id' => $this->faker->numberBetween(1,4),
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 99,999),
        ];
    }
}
