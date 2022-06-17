import React from "react";
import Header from "../../components/header";

const AboutScreen = () => {
    return (
        <>
            <div id="wrap">
                <Header
                    title={"Provide useful information on health and wellness<"}
                    description={"Provide useful information on health and wellness"}
                    keywords="Provide useful information on health and wellness"
                />

                <div className="content fix-nav-space">
                    <div className="about-us">
                        <div className="time-line-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-8">
                                        <h2>
                                            Hi, we are <span>Medikal</span> We care about your
                                            heath!
                                        </h2>

                                        <ul className="time-line">
                                            <li className="row">
                                                <div className="col-xs-3 text-right">
                                                    <h3>2009</h3>
                                                </div>
                                                <div className="col-xs-9">
                                                    <h6>
                                                        Nam liber tempor cum soluta nobis eleifend
                                                        option
                                                    </h6>
                                                    <p>
                                                        Claritas est etiam processus dynamicus, qui
                                                        sequitur mutationem consuetudium lectorum
                                                        sequitur mutationem consuetudium lectorum.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="row">
                                                <div className="col-xs-3 text-right">
                                                    <h3>2012</h3>
                                                </div>
                                                <div className="col-xs-9">
                                                    <h6>Duis autem vel eum iriure dolor </h6>
                                                    <p>
                                                        Eodem modo typi, qui nunc nobis videntur
                                                        parum clariqui sequitur.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="row">
                                                <div className="col-xs-3 text-right">
                                                    <h3>2014</h3>
                                                </div>
                                                <div className="col-xs-9">
                                                    <h6>Lobortis nisl ut aliquip </h6>
                                                    <p>
                                                        Investigationes demonstraverunt lectores
                                                        legere me lius quod ii legunt saepius qui
                                                        sequitur mutationem consuetudium lectorum.
                                                        quis nostrud exerci tation ullamcorper
                                                        suscipit lobortis nisl ut aliquip.
                                                    </p>
                                                </div>
                                            </li>

                                            <li className="row">
                                                <div className="col-xs-3 text-right">
                                                    <h3>2015</h3>
                                                </div>
                                                <div className="col-xs-9">
                                                    <h6>Velenit augue duis dolore </h6>
                                                    <p>
                                                        Ut wisi enim ad minim veniam, quis nostrud
                                                        exerci tation ullamcorper suscipit lobortis
                                                        nisl ut aliquip ex ea commodo consequat.
                                                        Eodem modo typi qui nunc nobis videntur
                                                        parum clari, fiant sollemnes in futurum.qui
                                                        sequitur mutationem consuetudium lectorum.
                                                    </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="gallery">
                        <div id="container">
                            <ul>
                                <li className="col-sm-6 item-mas">
                                    <img
                                        className="img-responsive"
                                        src="images/gallery-img-1.webp"
                                        alt=""
                                    />

                                    <div className="over-gallery">
                                        <div className="details">
                                            <h4>Emergency department</h4>
                                            <p>Nam liber tempor cum soluta </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-sm-3 item-mas">
                                    <img
                                        className="img-responsive"
                                        src="images/gallery-img-2.webp"
                                        alt=""
                                    />
                                    <div className="over-gallery">
                                        <div className="details">
                                            <h4>Emergency department</h4>
                                            <p>Nam liber tempor cum soluta </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-sm-3 item-mas">
                                    <img
                                        className="img-responsive"
                                        src="images/gallery-img-3.webp"
                                        alt=""
                                    />
                                    <div className="over-gallery">
                                        <div className="details">
                                            <h4>Emergency department</h4>
                                            <p>Nam liber tempor cum soluta </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-sm-3 item-mas">
                                    <img
                                        className="img-responsive"
                                        src="images/gallery-img-4.webp"
                                        alt=""
                                    />
                                    <div className="over-gallery">
                                        <div className="details">
                                            <h4>Emergency department</h4>
                                            <p>Nam liber tempor cum soluta </p>
                                        </div>
                                    </div>
                                </li>

                                <li className="col-sm-3 item-mas">
                                    <img
                                        className="img-responsive"
                                        src="images/gallery-img-5.webp"
                                        alt=""
                                    />
                                    <div className="over-gallery">
                                        <div className="details">
                                            <h4>Emergency department</h4>
                                            <p>Nam liber tempor cum soluta </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <div id="services" className="services-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 padding-r-80">
                                    <div className="tittle">
                                        <h2>Our Sevices</h2>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                                        sed diam ut laoreet.
                                    </p>
                                    <br />
                                    <p>
                                        Claritas est etiam processus dynamicus, lectorum. Mirum est
                                        notare quam est notare quam littera eodem modo.
                                    </p>
                                </div>

                                <div className="col-lg-8">
                                    <div className="services-slide">
                                        <div className="slide sec-ser">
                                            <i className="fa fa-tint"></i>
                                            <h6>Blood Bank</h6>
                                            <p>
                                                Cum sociis natoque penatibus et magnis dis
                                                parturient montesmus. Nunc finibus sit amet gravida.
                                            </p>
                                        </div>

                                        <div className="slide sec-ser">
                                            <i className="fa fa-stethoscope"></i>
                                            <h6>Full Stethoscope</h6>
                                            <p>
                                                Cum sociis natoque penatibus et magnis dis
                                                parturient montesmus. Nunc finibus sit amet gravida.
                                            </p>
                                        </div>

                                        <div className="slide sec-ser">
                                            <i className="fa fa-wheelchair"></i>
                                            <h6>For Disable</h6>
                                            <p>
                                                Cum sociis natoque penatibus et magnis dis
                                                parturient montesmus. Nunc finibus sit amet gravida.
                                            </p>
                                        </div>

                                        <div className="slide sec-ser">
                                            <i className="fa fa-heartbeat"></i>
                                            <h6>Heart Specialest</h6>
                                            <p>
                                                Cum sociis natoque penatibus et magnis dis
                                                parturient montesmus. Nunc finibus sit amet gravida.
                                            </p>
                                        </div>

                                        <div className="slide sec-ser">
                                            <i className="fa fa-user-md"></i>
                                            <h6>Exprienced Doctors</h6>
                                            <p>
                                                Cum sociis natoque penatibus et magnis dis
                                                parturient montesmus. Nunc finibus sit amet gravida.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section id="prople-says">
                        <div className="overlay">
                            <div className="container">
                                <div className="tittle tittle-2 ">
                                    <h3>what patients say about us</h3>
                                </div>
                                <div className="qou">
                                    <i className="fa fa-quote-left"></i>
                                    <i className="fa fa-quote-right"></i>
                                </div>
                                <div className="testi">
                                    <div className="testi-slide">
                                        <div className="item">
                                            <p>
                                                Excepteur sint cupidatat non proident, sunt ieserunt
                                                mollit anim id occaecat cupidatat non proident, sunt
                                                ieserunt mollit anim id est laborum. Sed ut
                                                perspiciatis unde omnis iste natus occaecat
                                                cupidatat nonerror
                                            </p>
                                            <div className="avatar">
                                                <img src="images/avatar-1.jpg" alt="" />
                                            </div>
                                            <h5>JHON CORNNER</h5>
                                            <span>Ophthalmology DEOARTMENT</span>
                                        </div>
                                        <div className="item">
                                            <p>
                                                Excepteur sint cupidatat non proident, sunt ieserunt
                                                mollit anim id occaecat cupidatat non proident, sunt
                                                ieserunt mollit anim id est laborum. Sed ut
                                                perspiciatis est laborum. Sed ut perspiciatis unde
                                                omnis iste natus occaecat cupidatat nonerror
                                            </p>
                                            <div className="avatar">
                                                <img src="images/avatar-2.jpg" alt="" />
                                            </div>
                                            <h5>CORNNER JHON </h5>
                                            <span>DENTAL DEOARTMENT</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};
export default AboutScreen;
