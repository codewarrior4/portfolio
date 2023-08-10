<script setup>
import {onMounted} from 'vue'

import AOS from 'aos';

onMounted(()=>{
    AOS.init();
})

</script>

<template>

    <header class="header-area">
        <div class="container">
            <div class="gx-row d-flex align-items-center justify-content-between">
                <router-link to="/" class="logo">
                    <span class="fw-bold text-light display-6">Adebayo </span>
                    <span class="fw-bold text-primary display-6">Mayowa </span>
                </router-link>

                <nav class="navbar">
                    <ul class="menu">
                        <li class="active"><router-link to="/">Home</router-link></li>
                        <li><router-link to="/about">About</router-link></li>
                        <li><router-link to="/works">Works</router-link></li>
                        <li><router-link to="/contact">Contact</router-link></li>
                    </ul>
                    <a href="/contact" class="theme-btn">Let's talk</a>
                </nav>

                <a href="/contact" class="theme-btn">Let's talk</a>

                <div class="show-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
    <section class="about-area">
        <div class="container">
            <div class="row">
                <div class="col-md-6" data-aos="zoom-in">
                    <div class="about-me-box shadow-box">
                        <a class="overlay-link" href="/about"></a>
                        <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                        <div class="img-box">
                            <img src="/assets/images/me.jpg" alt="About Me">
                        </div>
                        <div class="infos">
                            <h4>Fullstack Software Engineer</h4>
                            <h1>Adebayo Mayowa.</h1>
                            <p>Innovative Software Engineer | Former GDSC Lead | Team Leader | Driving Technological Solutions for Success .</p>
                            <a href="#" class="about-btn">
                                <img src="/assets/images/icon.svg" alt="Button">
                            </a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="about-credentials-wrap">
                        <div data-aos="zoom-in">
                            <div class="banner shadow-box">
                                <div class="marquee">
                                    <div>
                                        <span>LATEST WORK  <a href="https://coxwellhospital.com" target="_blank">COXWELL HOSPITAL</a> <img src="/assets/images/star1.svg" alt="Star"></span>
                                        <span>LATEST WORK <a href="https://strimafrica.com" target="_blank">StrimAfrica</a> <img src="/assets/images/star1.svg" alt="Star"></span>
                                    </div>
                                    </div>
                            </div>

                        </div>

                        <div class="gx-row d-flex gap-24">
                            <div data-aos="zoom-in">
                                <div class="about-crenditials-box info-box shadow-box h-full">
                                    <a class="overlay-link" href="/about"></a>
                                    <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                                    <img src="/assets/images/sign.png" alt="Sign">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="infos">
                                            <h4>more about me</h4>
                                            <h1>Credentials</h1>
                                        </div>

                                        <a href=".//about" class="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button">
                                        </a>

                                    </div>
                                </div>
                            </div>

                            <div data-aos="zoom-in">
                                <div class="about-project-box info-box shadow-box h-full">
                                    <a class="overlay-link" href="/works"></a>
                                    <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                                    <img src="/assets/images/my-works.png" alt="My Works">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div class="infos">
                                            <h4>SHOWCASE</h4>
                                            <h1>Projects</h1>
                                        </div>

                                        <a href="#" class="about-btn">
                                            <img src="/assets/images/icon.svg" alt="Button">
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="row mt-24">
                <div class="col-md-12">
                    <div class="blog-service-profile-wrap d-flex gap-24">
                        

                        <div data-aos="zoom-in"  class="col-md-6">
                            <div class="about-services-box info-box shadow-box h-full">
                                <a href="/service" class="overlay-link"></a>
                                <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                                <div class="icon-boxes">
                                    <i class="iconoir-camera"></i>
                                    <i class="iconoir-design-pencil"></i>
                                    <i class="iconoir-color-filter"></i>
                                    <i class="iconoir-dev-mode-phone"></i>
                                </div>
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="infos">
                                        <h4>specialization</h4>
                                        <h1>Services Offering</h1>
                                    </div>

                                    <a href="/service" class="about-btn">
                                        <img src="/assets/images/icon.svg" alt="Button">
                                    </a>

                                </div>
                            </div>
                        </div>

                        

                        <div class="col-md-6" data-aos="zoom-in">
                        
                            <div class="about-client-box info-box shadow-box">
                                <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                                <div class="clients d-flex align-items-start gap-24 justify-content-center">
                                    <div class="client-item">
                                        <h1>03</h1>
                                        <p>Years <br>Experience</p>
                                    </div>
    
                                    <div class="client-item">
                                        <h1>+15</h1>
                                        <p>CLIENTS <br>WORLDWIDE</p>
                                    </div>
    
                                    <div class="client-item">
                                        <h1>+20</h1>
                                        <p>Total <br>Projects</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                    </div>
                </div>
                
            </div>

            <div class="row mt-24">
                <div class="col-md-6" data-aos="zoom-in">
                    <div class="about-profile-box info-box shadow-box h-full">
                        <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                        <div class="inner-profile-icons shadow-box">
                            <a href="#">
                                <i class="iconoir-dribbble"></i>
                            </a>
                            <a href="#">
                                <i class="iconoir-twitter"></i>
                            </a>
                        </div>
                        <div class="d-flex align-items-center justify-content-between">
                            <div class="infos">
                                <h4>Stay with me</h4>
                                <h1>Profiles</h1>
                            </div>

                            <a href="/contact" class="about-btn">
                                <img src="/assets/images/icon.svg" alt="Button">
                            </a>

                        </div>
                    </div>
                </div>
                <div class="col-md-6" data-aos="zoom-in">
                        
                    <div class="about-contact-box info-box shadow-box">
                        <a class="overlay-link" href="contact"></a>
                        <img src="/assets/images/bg1.png" alt="BG" class="bg-img">
                        <img src="/assets/images/icon2.png" alt="Icon" class="star-icon">
                        <h1>Let's <br>work <span>together.</span></h1>
                        <a href="#" class="about-btn">
                            <img src="/assets/images/icon.svg" alt="Button">
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>