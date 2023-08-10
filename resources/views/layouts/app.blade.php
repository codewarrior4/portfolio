<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Adebayo Mayowa - Portfolio</title>

    @vite(['resources/css/app.css','resources/js/app.js'])
</head>
<body>

    <main class="main-homepage" id="app">

        <!-- Header -->
       

       <router-view></router-view>

        <!-- Footer -->
        <footer class="footer-area">
            <div class="container">
                <div class="footer-content text-center">
                    <a href="/" class="logo">
                        <img src="./assets/images/logo.svg" alt="Logo">
                    </a>
                    <ul class="footer-menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <p class="copyright">
                        &copy; All rights reserved by <router-link to="https//github.com/codewarrior4" target="_blank">Adebayo Mayowa</router-link>
                    </p>
                </div>
            </div>
        </footer>

    </main>
     
</body>
</html>