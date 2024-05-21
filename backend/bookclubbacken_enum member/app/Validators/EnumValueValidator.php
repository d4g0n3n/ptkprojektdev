<?php

namespace App\Validators;

use Illuminate\Support\Facades\Validator;

class EnumValueValidator extends Validator
{
    public function validateEnum($attribute, $value, $parameters, $validator)
    {
        $allowedValues = $parameters;

        return in_array($value, $allowedValues);
    }
}
