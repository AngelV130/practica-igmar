<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Http;

class Recaptcha implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $response = Http::asForm()
        ->post('https://www.google.com/recaptcha/api/siteverify', [
            'secret'   => '6LdQ7F0pAAAAAHrAkIqUnsOvJHkw3-B2FrpUFpHi',
            'response' => $value,
        ])->json();

        if(!$response['success'])
            $fail("Verifique y vuelva a hacer el Captcha");
    }
}
