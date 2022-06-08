import { useMediaQuery } from "@mui/material";
import React from "react";
import SEO from "../../theme-medical/seo";
import ImageComponent from "../common/Image";

const Header = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const srcLogo = isMobile ? "/images/logo-mobile.png" : "/images/logo.png";

    return (
        <>
            <SEO />
            <header>
                <div className="container">
                    <div className="logo">
                        <a href="/">
                            <ImageComponent src="images/logo.png" />
                        </a>
                    </div>

                    <nav className="webimenu">
                        <div className="menu-toggle">
                            <i className="fa fa-bars"> </i>
                        </div>
                        <ul className="ownmenu">
                            <li className="active">
                                <a href="/">Home</a>
                                <ul className="dropdown animated-3s fadeIn">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="index-1.html">Home Slider</a>
                                    </li>
                                    <li>
                                        <a href="index-2.html">Home 2</a>
                                    </li>
                                    <li>
                                        <a href="index-header.html">header 1</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/about-us">About us </a>
                                <ul className="dropdown animated-3s fadeIn">
                                    <li>
                                        <a href="/about-us">About</a>
                                    </li>
                                    <li>
                                        <a href="02-about-us-1.html">About 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="services.html">SERVICES </a>
                                <ul className="dropdown animated-3s fadeIn">
                                    <li>
                                        <a href="services.html">SERVICES</a>
                                    </li>
                                    <li>
                                        <a href="services-1.html">SERVICES 2</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="03-department.html">Department </a>
                            </li>
                            <li>
                                <a href="05-doctors.html">Gallery </a>
                                <ul className="dropdown animated-3s fadeIn">
                                    <li>
                                        <a href="gallery.html">GALLERY</a>
                                    </li>
                                    <li>
                                        <a href="gallery-2-col.html">GALLERY 2 col</a>
                                    </li>
                                    <li>
                                        <a href="gallery-3-col.html">GALLERY 3 col</a>
                                    </li>
                                    <li>
                                        <a href="gallery-4-col.html">GALLERY 4 col</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/">Pages</a>

                                <ul className="megamenu full-width animated-3s fadeIn">
                                    <li className="row nav-post">
                                        <div className="col-sm-6 boder-da-r">
                                            <ul>
                                                <li>
                                                    <a href="/">Home</a>
                                                </li>
                                                <li>
                                                    <a href="index-1.html">Home Slider</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home 2</a>
                                                </li>
                                                <li>
                                                    <a href="index-header.html">header 1</a>
                                                </li>
                                                <li>
                                                    <a href="appointment.html">Appointment</a>
                                                </li>
                                                <li>
                                                    <a href="/about-us">About</a>
                                                </li>
                                                <li>
                                                    <a href="02-about-us-1.html">About 2</a>
                                                </li>
                                                <li>
                                                    <a href="services.html">SERVICES</a>
                                                </li>
                                                <li>
                                                    <a href="services-1.html">SERVICES 2</a>
                                                </li>
                                                <li>
                                                    <a href="03-department.html">Department</a>
                                                </li>
                                                <li>
                                                    <a href="04-department-detail.html">
                                                        Department Detail
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">TEAM</a>
                                                </li>
                                                <li>
                                                    <a href="05-doctors.html">Doctors</a>
                                                </li>
                                                <li>
                                                    <a href="05-doctors-1.html">Doctors 2</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul>
                                                <li>
                                                    <a href="gallery.html">GALLERY</a>
                                                </li>
                                                <li>
                                                    <a href="gallery-2-col.html">GALLERY 2 col</a>
                                                </li>
                                                <li>
                                                    <a href="gallery-3-col.html">GALLERY 3 col</a>
                                                </li>
                                                <li>
                                                    <a href="gallery-4-col.html">GALLERY 4 col</a>
                                                </li>
                                                <li>
                                                    <a href="07-timetable.html">Timetable</a>
                                                </li>
                                                <li>
                                                    <a href="08-blog.html">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="09-blog-single.html">Blog Single</a>
                                                </li>
                                                <li>
                                                    <a href="10-shop.html">Shop</a>
                                                </li>
                                                <li>
                                                    <a href="11-product-detail.html">
                                                        Product Detail
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/contact">Contact</a>
                                                </li>
                                                <li>
                                                    <a href="shortcodes.html">Shortcodes</a>
                                                </li>
                                                <li>
                                                    <a href="coming-soon.html">Coming Soon</a>
                                                </li>
                                                <li>
                                                    <a href="404.html">404</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/contact">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};
export default Header;
