<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !valid_csrf_token($_POST['csrf_token'] ?? null)) {
    http_response_code(400);
    exit('Invalid logout request.');
}

$_SESSION = [];

if (ini_get('session.use_cookies')) {
    $cookie = session_get_cookie_params();
    setcookie(session_name(), '', time() - 42000, $cookie['path'], $cookie['domain'], $cookie['secure'], $cookie['httponly']);
}

session_destroy();
header('Location: auth.php?view=login');
exit;
