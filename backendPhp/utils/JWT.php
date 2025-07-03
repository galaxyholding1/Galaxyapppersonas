<?php
// utils/JWT.php

require_once __DIR__ . '/../config/jwt_config.php';

class JWT
{
    public static function encode(array $payload): string
    {
        $header = json_encode(['alg' => 'HS256', 'typ' => 'JWT']);
        $body = json_encode($payload);

        $base64UrlHeader = rtrim(strtr(base64_encode($header), '+/', '-_'), '=');
        $base64UrlBody   = rtrim(strtr(base64_encode($body), '+/', '-_'), '=');
        $signature       = hash_hmac('sha256', "$base64UrlHeader.$base64UrlBody", JWT_SECRET, true);
        $base64UrlSignature = rtrim(strtr(base64_encode($signature), '+/', '-_'), '=');

        return "$base64UrlHeader.$base64UrlBody.$base64UrlSignature";
    }

    public static function decode(string $token): ?array
    {
        [$header, $payload, $signature] = explode('.', $token);
        $validSignature = rtrim(strtr(
            base64_encode(hash_hmac('sha256', "$header.$payload", JWT_SECRET, true)),
            '+/',
            '-_'
        ), '=');

        if (!hash_equals($signature, $validSignature)) return null;

        $payloadDecoded = json_decode(base64_decode($payload), true);
        if ($payloadDecoded['exp'] < time()) return null;

        return $payloadDecoded;
    }
}
