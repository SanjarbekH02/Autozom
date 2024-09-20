import React from 'react';
import Logo from '../../../public/img/logo.svg'
import './Footer.css'
import Instagram from '../../../public/img/instagram.png'
import Facebook from '../../../public/img/facebook.png'
import Youtube from '../../../public/img/youtube.jpg'

const Footer = () => {
    return (
        <div className='bg-slate-900 '>
            <div className="container mx-auto footer">
                <div className="footer-left">
                    <a href="#" className="footer-logo-link">
                        <img className='w-24 footer-logo' src={Logo} alt="logo image" />
                    </a>
                    <h2 className="text-4xl text-white pt-6 pb-6">LUXURY CAR RENTAL IN DUBAI</h2>
                    <p className="text-xl text-gray-600 pt-6 pb-14">Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure</p>
                    <a href="tel:+971527030189" className="text-white phone-btn">GET BOST OFFER</a>
                </div>
                <div className="footer-right">
                    <div className="footer-top">
                        <ul className="footer-list mb-6 me-6">
                            <h3 className="text-xl text-white">CARS</h3>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Suv</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Sport Cars</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Luxury Cars</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Convertible Cars</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Budget Cars</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">American Brands</a>
                            </li>
                            <li className="footer-item">
                                <a href="" className="footer-link text-slate-500">Muscle</a>
                            </li>
                        </ul>
                        <div className="footer-list mb-6 me-6">
                            <a href='#' className="text-white text-xl pb-14">BLOG</a>
                            <a href='#' className="text-white text-xl pb-14">SERVICES</a>
                            <a href='#' className="text-white text-xl">CONTACTS</a>
                            <p className="text-xl text-slate-500">Elite 3 Sports City, Dubai 26W8 24J, United Arab</p>
                            <p className="text-xl text-slate-500">Emirates</p>
                            <p className="text-xl text-slate-500">+971 52 7030189</p>
                            <p className="text-xl text-slate-500">Working hours: 24/7</p>

                        </div>

                        <div className="footer-list mb-6 me-6">
                            <a href='#' className="text-white text-xl">ABOUT US</a>
                            <a href="" className="text-xl text-slate-500">Our Time</a>
                            <a href="" className="text-xl text-slate-500 pb-24">FAQ</a>

                            <h3 className="text-xl text-white">Follow Us</h3>
                            <div className="footer-block">
                                <a href="">
                                    <img className='icon-img' src={Instagram} alt="img" />
                                </a>
                                <a href="">
                                    <img className='icon-img' src={Facebook} alt="img" />
                                </a>
                                <a href="">
                                    <img className='icon-img' src={Youtube} alt="img" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p className="text-xl text-slate-500">© 2024 Auto Zoom Car Rental. United Arab Emirates.</p>
                        <p className="text-xl text-slate-500">Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
