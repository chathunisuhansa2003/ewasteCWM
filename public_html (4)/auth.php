<?php
declare(strict_types=1);
require_once __DIR__ . '/config.php';

if (is_logged_in()) {
    header('Location: carbon.php');
    exit;
}

$view = ($_GET['view'] ?? 'login') === 'signup' ? 'signup' : 'login';
$errors = [];
$success = '';
$name = '';
$email = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';
    $view = $action === 'signup' ? 'signup' : 'login';
    $email = strtolower(trim((string) ($_POST['email'] ?? '')));

    if (!valid_csrf_token($_POST['csrf_token'] ?? null)) {
        $errors[] = 'Your session expired. Please refresh the page and try again.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Please enter a valid email address.';
    }

    if ($action === 'signup') {
        $name = trim((string) ($_POST['name'] ?? ''));
        $password = (string) ($_POST['password'] ?? '');
        $confirmPassword = (string) ($_POST['confirm_password'] ?? '');

        if ($name === '' || strlen($name) < 2 || strlen($name) > 100) {
            $errors[] = 'Please enter your full name.';
        }
        if (strlen($password) < 8) {
            $errors[] = 'Password must contain at least 8 characters.';
        }
        if ($password !== $confirmPassword) {
            $errors[] = 'The passwords do not match.';
        }

        if (!$errors) {
            $check = db()->prepare('SELECT id FROM users WHERE email = ? LIMIT 1');
            $check->execute([$email]);

            if ($check->fetch()) {
                $errors[] = 'An account with this email already exists. Please sign in.';
            } else {
                $insert = db()->prepare(
                    'INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)'
                );
                $insert->execute([
                    $name,
                    $email,
                    password_hash($password, PASSWORD_DEFAULT),
                ]);

                $success = 'Registration successful. You can now sign in.';
                $view = 'login';
                $name = '';
            }
        }
    } elseif ($action === 'login') {
        $password = (string) ($_POST['password'] ?? '');

        if ($password === '') {
            $errors[] = 'Please enter your password.';
        }

        $attempts = (int) ($_SESSION['login_attempts'] ?? 0);
        $lastAttempt = (int) ($_SESSION['last_login_attempt'] ?? 0);
        if ($lastAttempt > 0 && (time() - $lastAttempt) >= 300) {
            $attempts = 0;
            $_SESSION['login_attempts'] = 0;
        }
        if ($attempts >= 5 && (time() - $lastAttempt) < 300) {
            $errors[] = 'Too many sign-in attempts. Please wait 5 minutes and try again.';
        }

        if (!$errors) {
            $query = db()->prepare(
                'SELECT id, full_name, email, password_hash FROM users WHERE email = ? LIMIT 1'
            );
            $query->execute([$email]);
            $user = $query->fetch();

            if ($user && password_verify($password, $user['password_hash'])) {
                session_regenerate_id(true);
                $_SESSION['customer_id'] = (int) $user['id'];
                $_SESSION['customer_name'] = (string) $user['full_name'];
                $_SESSION['customer_email'] = (string) $user['email'];
                $_SESSION['login_attempts'] = 0;
                unset($_SESSION['last_login_attempt']);
                header('Location: carbon.php');
                exit;
            }

            $_SESSION['login_attempts'] = $attempts + 1;
            $_SESSION['last_login_attempt'] = time();
            $errors[] = 'Incorrect email or password.';
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $view === 'signup' ? 'Create Account' : 'Customer Sign In'; ?> | Ceylon Waste Management</title>
    <link rel="stylesheet" href="auth.css">
</head>
<body>
  
    <main class="auth-page">
        <section class="auth-brand" aria-label="Ceylon Waste Management">
            <a href="index.html" class="brand-logo">
                <img src="images/logofull.png" alt="Ceylon Waste Management logo">
            </a>
            
 <a href="https://www.epr-srilanka.com"
   target="_blank"
   rel="noopener noreferrer"
   style="position:fixed; top:20px; right:20px; z-index:1000; display:inline-flex; align-items:center; gap:10px; max-width:calc(100vw - 40px); padding:12px 18px; background:#ffffff; color:#14532d; border:2px solid #14532d; border-radius:10px; box-shadow:0 4px 14px rgba(0,0,0,0.15); font-family:inherit; font-size:14px; font-weight:700; line-height:1.4; text-decoration:none; box-sizing:border-box;">
    <span aria-hidden="true"></span>
    Register to EPR Portal
</a>       
            
            
            <div class="brand-copy">
                <span class="eyebrow">Only EPR-registered users can access the Carbon Calculator.</span>
                <h1>EPR Registration Required</h1>
                <p>To access the Carbon Calculator, you must first register through the EPR Portal at www.eprs.lk. Once registered, enter your EPR registration number when creating your Carbon Calculator account.</p>
                <a href="https://www.epr-srilanka.com"
   class="epr-register-btn"
   target="_blank"
   rel="noopener noreferrer">
    Register on the EPR Portal
    <span aria-hidden="true">↗</span>
</a>
                <ul>
           <p style="margin:15px 0; color:#ffffff; font-size:14px; font-weight:700; line-height:1.7;">
    Before registering, please visit
    <a href="https://ewaste.lk/document.html"
       target="_blank"
       rel="noopener noreferrer"
       style="color:#ffffff; font-weight:700; text-decoration:underline;">
        documents
    </a>
    and review the registration guidelines.
</p>
                    <li>Already registered? Enter your existing EPR registration number to continue.</li>
                  
                  
                </ul>
                
                
           
       <br>
                <span class="eyebrow">Responsible e-waste recycling</span>
                
                <p>Create a free customer account to access the Carbon Calculator and estimate the emissions prevented through responsible recycling.</p>
                <ul>
                    <li>Calculate carbon savings by device type</li>
                    <li>View environmental equivalencies</li>
                    <li>See a clear category breakdown</li>
                </ul>
            </div>
            
            
           
            
            
            <a href="index.html" class="back-home">&larr; Back to website</a>
        </section>

        <section class="auth-panel">
            <div class="auth-card">
                <div class="auth-heading">
                    <span class="leaf-mark" aria-hidden="true">&#127793;</span>
                    <h2><?php echo $view === 'signup' ? 'Create your account' : 'Welcome back'; ?></h2>
                    <p><?php echo $view === 'signup' ? 'Register to use the Carbon Calculator.' : 'Sign in to open the Carbon Calculator.'; ?></p>
                </div>

                <div class="auth-tabs" aria-label="Account options">
                    <a href="auth.php?view=login" class="<?php echo $view === 'login' ? 'active' : ''; ?>">Sign In</a>
                    <a href="auth.php?view=signup" class="<?php echo $view === 'signup' ? 'active' : ''; ?>">Sign Up</a>
                </div>

                <?php if ($success): ?>
                    <div class="message success" role="status"><?php echo e($success); ?></div>
                <?php endif; ?>

                <?php if ($errors): ?>
                    <div class="message error" role="alert">
                        <?php foreach ($errors as $error): ?>
                            <p><?php echo e($error); ?></p>
                        <?php endforeach; ?>
                    </div>
                <?php endif; ?>

                <?php if ($view === 'signup'): ?>
                    <form method="post" action="auth.php?view=signup" class="auth-form">
                        <input type="hidden" name="action" value="signup">
                        <input type="hidden" name="csrf_token" value="<?php echo e(csrf_token()); ?>">

                        <label for="name">Full name</label>
                        <input id="name" name="name" type="text" value="<?php echo e($name); ?>" maxlength="100" autocomplete="name" placeholder="Enter your full name" required>

                        <label for="signup-email">Email address</label>
                        <input id="signup-email" name="email" type="email" value="<?php echo e($email); ?>" maxlength="190" autocomplete="email" placeholder="name@example.com" required>
                        
                         <label for="epr-registration-number">EPR Registration Number</label>
    <input id="epr-registration-number"
           name="epr_registration_number"
           type="text"
           value="<?php echo e($eprRegistrationNumber ?? ''); ?>"
           maxlength="100"
           placeholder="Enter your EPR registration number"
           required>
                        <label for="signup-password">Password</label>
                        <div class="password-field">
                            <input id="signup-password" name="password" type="password" minlength="8" autocomplete="new-password" placeholder="At least 8 characters" required>
                            <button type="button" class="toggle-password" data-target="signup-password">Show</button>
                        </div>

                        <label for="confirm-password">Confirm password</label>
                        <div class="password-field">
                            <input id="confirm-password" name="confirm_password" type="password" minlength="8" autocomplete="new-password" placeholder="Enter the password again" required>
                            <button type="button" class="toggle-password" data-target="confirm-password">Show</button>
                        </div>

                        <button type="submit" class="submit-btn">Create Account</button>
                    </form>
                <?php else: ?>
                    <form method="post" action="auth.php?view=login" class="auth-form">
                        <input type="hidden" name="action" value="login">
                        <input type="hidden" name="csrf_token" value="<?php echo e(csrf_token()); ?>">

                        <label for="login-email">Email address</label>
                        <input id="login-email" name="email" type="email" value="<?php echo e($email); ?>" maxlength="190" autocomplete="email" placeholder="name@example.com" required>

                        <label for="login-password">Password</label>
                        <div class="password-field">
                            <input id="login-password" name="password" type="password" autocomplete="current-password" placeholder="Enter your password" required>
                            <button type="button" class="toggle-password" data-target="login-password">Show</button>
                        </div>

                        <button type="submit" class="submit-btn">Sign In &amp; Calculate</button>
                    </form>
                <?php endif; ?>

                <p class="switch-copy">
                    <?php if ($view === 'signup'): ?>
                        Already registered? <a href="auth.php?view=login">Sign in</a>
                    <?php else: ?>
                        New customer? <a href="auth.php?view=signup">Create an account</a>
                    <?php endif; ?>
                </p>
            </div>
        </section>
    </main>
    <script src="auth.js"></script>
</body>
</html>
