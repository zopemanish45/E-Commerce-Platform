import { Button } from 'bootstrap'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// import { Button } from "../styles/Button"
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>

            <section class="contact-info">
                <div class="contact">
                    <i class="fa fa-phone-square-alt"></i>
                    <div class="contact-details">
                        <h4>Phone</h4>
                        <p>+01 123-456-4590</p>
                    </div>
                </div>
                <div class="contact">
                    <i class="fa-solid fa fa-envelope"></i>
                    <div class="contact-details">
                        <h4>Email</h4>
                        <p>Yourmail@gmail.com</p>
                    </div>
                </div>
                <div class="contact">
                    <i class="fa fa-map-marked-alt"></i>
                    <div class="contact-details">
                        <h4>Location</h4>
                        <p>800, Lorem Street, US</p>
                    </div>
                </div>
            </section>


            <footer>
                <section class="footer">
                    <div class="footer-elements about-us">
                        <h3 class="footer-heading">About US</h3>
                        <p class="footer-description">Integer cursus scelerisque ipsum idefficitur. Donec a dui fringilla,
                            gravidalorem ac, semper magna. Aeneanrhoncus ac lectus a interdum. Vivamussemper posuere dui, at
                            ornare turpisultrices sit amet. Nulla cursus lorem utnisi porta, ac eleifend arcu ultrices.</p>
                    </div>
                    <div class="footer-elements opening-hours">
                        <h3 class="footer-heading">Opening Hours</h3>
                        <p class="footer-description">
                            Monday : Closed
                        </p>
                        <p class="footer-description">
                            Tue-Wed : 09am - 10pm
                        </p>
                        <p class="footer-description">
                            Thu-Fri : 09am - 10pm
                        </p>
                        <p class="footer-description">
                            Sat-Sun : 09am - 10pm
                        </p>
                    </div>
                    <div class="footer-elements contact-information">
                        <h3 class="footer-heading">Contact Information</h3>
                        <p class="footer-description">
                            Ipsum Street, Lorem Tower, MO, Columbia, 508000
                        </p>
                        <p class="footer-description">
                            +01 2000 800 9999
                        </p>
                        <p class="footer-description">
                            info@admin.com
                        </p>

                    </div>
                    <div class="footer-elements">
                        <h3 class="footer-heading">Subscribe</h3>
                        <form action="">
                            <input class="email" type="email" placeholder='Email Address..' /> <br />
                            <button class="subscribe" type="submit">Subscribe</button>
                        </form>
                        <div class="social">
                            <a href="#"><i class=" fa fa-facebook"></i></a>
                            <a href="#"><i class=" fa fa-instagram"></i></a>
                            <a href="#"><i class=" fa fa-twitter"></i></a>
                            <a href="#"><i class=" fa fa-linkedin-in"></i></a>
                            <a href="#"><i class=" fa fa-google-plus-g"></i></a>
                        </div>

                    </div>
                </section>

                <div class="copy-right">
                    <p>All Rights Reserved.&copy; 2022 The Simple Emart</p>
                </div>

            </footer>






        </>
    )
}

export default Footer