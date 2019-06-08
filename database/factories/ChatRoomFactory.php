<?php

use Faker\Generator as Faker;

$factory->define(App\ChatRoom::class, function (Faker $faker) {
    return [
        'name' => $faker->realText(10, 1),
    ];
});
