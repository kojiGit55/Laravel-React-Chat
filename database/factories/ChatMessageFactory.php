<?php

use Faker\Generator as Faker;

$factory->define(App\ChatMessage::class, function (Faker $faker) {
    return [
        'text' => $faker->realText(20, 1),
        'user_id' => $faker->numberBetween(1, 2),
        'room_id' => $faker->numberBetween(1, 10)
    ];
});
