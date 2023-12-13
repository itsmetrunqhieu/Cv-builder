import './Home.css';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function Home() {
    const imgStyle = {
        cursor: 'pointer',
    };

    useEffect(() => {
        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                console.log(entry);
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    
    const [scrollDirection, setScrollDirection] = useState('');

    useEffect(() => {
        let lastScroll = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll <= 0) {
                setScrollDirection('');
                return;
            }

            if (currentScroll > lastScroll && scrollDirection !== 'scroll-down') {
                setScrollDirection('scroll-down');
            } else if (currentScroll < lastScroll && scrollDirection !== 'scroll-up') {
                setScrollDirection('scroll-up');
            }

            lastScroll = currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollDirection]);

    return (
        <div className='home'>
            <div className={`home-header ${scrollDirection}`}>
                <Link to='/'>
                    <p className='cv-buider-name'>CV Builder</p>
                </Link>
                <ul className='nav'>
                    <li className='nav-li'><a href="#home" className='nav-text'>Home</a></li>
                    <li className='nav-li'><a href="#about" className='nav-text'>About</a></li>
                    <li className='nav-li'><a href="#log" className='nav-text'>Blog</a></li>
                    <li className='nav-li'><a href="#contact" className='nav-text'>Contact us</a></li>
                    <li className='nav-li'><a href="/login" className='nav-text'>Account</a></li>
                </ul>
                <img 
                    src='/Image/Home_Screen/Search_alt_light.svg'
                    className='icon-home'
                    alt='icon'
                    style={imgStyle}
                />
                <div className='part1-line'></div>
            </div>
            <div className='part1'>
                <div className='part1-main'>
                    <p className='online-text hidden'>Online CV for everyone</p>
                    <p className='easy-text hidden'>Easy, fast and effective way to build CV for your dream job</p>
                    <Link to="/create-cv-options">
                        <button className='create-button hidden' style={imgStyle}>
                            <p className='create-text'>CREATE MY CV</p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='part2'>
                <div className='part2-main'>
                    <p className='beautiful-text hidden'>Beautiful ready-to-use CV templates</p>
                    <p className='win-text hidden'>Win over employers and recruiters by using one of our elegant, professionally-designed CV templates.</p>
                </div>
            </div>

            <div className='part3'>
                <div className='part3-main'>
                    <p className='your-cv-text hidden'>Your CV in 3 steps</p>

                    <div className='step1 hidden'>
                        <p className='num'>1.</p>
                        <img
                            src='/Image/Home_Screen/part3-pic1.svg'
                            className='part3-pic'
                            alt='part3-pic1'
                        />
                        <p className='step-title'>Choose a template</p>
                        <p className='step-descrip'>Choose a suitable CV from our template library.</p>
                    </div>

                    <div className='step2 hidden'>
                        <p className='num'>2.</p>
                        <img
                            src='/Image/Home_Screen/part3-pic2.svg'
                            className='part3-pic'
                            alt='part3-pic2'
                        />
                        <p className='step-title'>Fill in your details</p>
                        <p className='step-descrip'>Customize your application through our easy-to-use CV builder.</p>
                    </div>

                    <div className='step3 hidden'>
                        <p className='num'>3.</p>
                        <img
                            src='/Image/Home_Screen/part3-pic3.svg'
                            className='part3-pic'
                            alt='part3-pic3'
                        />
                        <p className='step-title'>Download or share your CV</p>
                        <p className='step-descrip'>Send your outstanding CV to employers.</p>
                    </div>

                    <Link to="/create-cv-options">
                        <button className='create-button button-part3 hidden' style={imgStyle}>
                            <p className='create-text'>CREATE MY CV</p>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='part4'>
                <div className='part4-main'>
                    <p className='why-text hidden'>Why use OnlineCVbuilder to make your CV?</p>
                    <p className='using-text hidden'>Using our online editor gives you a 75% better chance of getting each job (and it just takes a few minutes!)</p>
                    <img
                        src='/Image/Home_Screen/part4-pic.svg'
                        className='part4-pic hidden'
                        alt='part4-pic'
                    />
                    <div className='quote1 hidden'>
                        <div className='part4-line'></div>
                        <p className='part4-title'>Great design and you save time!</p>
                        <p className='part4-descrip'>Quickly make stunning CV’s in just a few minutes</p>
                    </div>
                    <div className='quote2 hidden'>
                        <div className='part4-line'></div>
                        <p className='part4-title'>Follow expert tips and examples</p>
                        <p className='part4-descrip'>Writing your CV couldn’t be easier with our step-by-step guidance!</p>
                    </div>
                    <div className='quote3 hidden'>
                        <div className='part4-line'></div>
                        <p className='part4-title'>Wide range of proven templates</p>
                        <p className='part4-descrip'>Pick from a range of styles to make your CV shine!</p>
                    </div>
                    <div className='quote4 hidden'>
                        <div className='part4-line'></div>
                        <p className='part4-title'>Work on the go!</p>
                        <p className='part4-descrip'>Create, edit, and send CVs from your laptop, tablet or phone</p>
                    </div>
                    <Link to="/create-cv-options">
                        <button className='create-button button-part4 hidden' style={imgStyle}>
                            <p className='create-text'>CREATE MY CV</p>
                        </button>
                    </Link>
                </div>
            
                <div className='footer'>
                    <Link to="/">
                        <p className='cv-buider-name cv-buider-name-footer'>CV Builder</p>
                    </Link>
                    <ul className='nav'>
                        <li className='nav-li'><a href="#Terms & Conditions" className='nav-text'>Terms & Conditions</a></li>
                        <li className='nav-li'><a href="#Terms of use" className='nav-text'>Terms of use</a></li>
                        <li className='nav-li'><a href="#Privacy policy" className='nav-text'>Privacy policy</a></li>
                        <li className='nav-li'><a href="#Cookies policy" className='nav-text'>Cookies policy</a></li>
                    </ul>
                    <p className='copyright'>Copyright © 2023 CV Builder. All rights reserved</p>
                </div>
            </div>
        </div>
        
    );
}

export default Home;
