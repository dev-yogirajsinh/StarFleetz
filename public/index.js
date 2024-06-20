<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-7 left d-flex justify-content-center align-items-center">
                <img class="logo img-fluid" src="images/logo.png" alt="Logo">
            </div>
            <div class="col-md-6 right d-flex flex-column justify-content-center bg-white">
                <form class="login-form" action="/login" method="POST">
                    <h2>Sign in</h2>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
    
                    <div class="options">
                        <label>
                            <input type="checkbox" name="remember" class="remember"> Remember Me
                        </label>
                        <a href="#" class="forgot">Forgot password?</a>
                    </div>
    
                    <button type="submit" class="submit">Sign In</button>
    
                    <p class="signup">Don't have an account? <a href="pages/signup.html">Sign up</a></p>
                </form>
                <div class="bottom">
                    <hr>
                    <footer>
                        <p>By proceeding, you agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy
                                Policy</a></p>
                        <div class="links">
                            <a href="#">Help</a>
                            <a href="#">Privacy</a>
                            <a href="#">Terms</a>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    </div>
</body>

</html>