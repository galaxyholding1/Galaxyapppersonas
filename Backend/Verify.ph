<?php

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (
        isset($_FILES['doc_face']) &&
        isset($_FILES['selfie'])
    ) {
        $doc_tmp = $_FILES['doc_face']['tmp_name'];
        $selfie_tmp = $_FILES['selfie']['tmp_name'];
        $video_tmp = isset($_FILES['video']) ? $_FILES['video']['tmp_name'] : null;

        $postData = [
            'doc_face' => new CURLFile($doc_tmp, 'image/jpeg', 'doc.jpg'),
            'selfie'   => new CURLFile($selfie_tmp, 'image/jpeg', 'selfie.jpg'),
        ];

        if ($video_tmp) {
            $postData['video'] = new CURLFile($video_tmp, 'video/mp4', 'video.mp4');
        }

        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => 'http://localhost:5000/verify',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $postData,
            CURLOPT_TIMEOUT => 30,
        ]);

        $response = curl_exec($ch);

        if (curl_errno($ch)) {
            echo json_encode(['error' => curl_error($ch)]);
        } else {
            echo $response;
        }

        curl_close($ch);
    } else {
        echo json_encode(['error' => 'Faltan archivos obligatorios']);
    }
} else {
    echo json_encode(['error' => 'Método no permitido']);
}
