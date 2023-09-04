import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Service.css";

import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

import image1 from "../images/ServiceB.jpg";
const Service = () => {
    return (
        <div className="service">
            <div className="service-hero">
                <Nav />
                <div className="service-main-hero">
                    <h2>Nano Hertz</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid fuga illo a cupiditate totam excepturi est
                        quibusdam corporis. Voluptates, ex Lorem ipsum dolor sit
                        amet consectetur, adipisicing elit. Provident illo
                        suscipit recusandae omnis, fuga ut! .
                    </p>
                    <div className="hero-btn">
                        <Link to="/Contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="section-1-service">
                <div className="section-a">
                    IOT <br /> SERVICE
                </div>
                <div className="section-about-2">
                    <div className="section-b">
                        <h4> IoT Hardware Design</h4>
                        <p>
                            Crafting seamless experiences through thoughtful and
                            innovative design solutions.
                        </p>
                    </div>
                    <div className="section-c">
                        <h4> IoT Solution Consultation</h4>
                        <p>
                            Elevating our services through strategic insights
                            and captivating visual narratives.
                        </p>
                    </div>
                    <div className="section-d">
                        <h4>IoT Business Accelerator</h4>
                        <p>
                            Shaping narratives to engage, inform, and inspire
                            audiences effectively.
                        </p>
                    </div>
                    <div className="section-e">
                        <h4>Technical Support & Maintenance</h4>
                        <p>
                            Arranging visuals for clear communication across
                            mediums and platforms.
                        </p>
                    </div>
                </div>
            </section>
            <section className="section-2-service">
                <div className="section-a">
                    IOT <br /> SOLUTIONS
                </div>
                <div className="section-b">
                    <h4>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Laudantium, r adipisicing elit. Laudantium.r adipisicing
                        elit. Laudantium.
                    </h4>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Obcaecati illo tempora nemo distinctio at
                        voluptate vero pariatur perspiciatis quisquam eveniet,
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Ratione eaque adipisci odio explicabo architecto
                        quam id, quis at eius voluptate!
                    </p>
                    <Link to="/Book">
                        <span></span>Book a meeting
                        <span className="span-2">
                            <BsArrowUpRight />
                        </span>
                    </Link>
                </div>
            </section>
            <section className="section-3-service">
                <div className="section-a">
                    <div>
                        Lorem ipsum dolor sit amet,elit elit elit Accusamu
                        Lorem, ipsum dolor.
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Atque pariatur porro veniam soluta magni totam quae
                        mollitia itaque Lorem ipsum dolor sit amet. Lorem ipsum
                        dolor sit amet elit. natus Lorem ipsum dolor sit amet
                        elit. Fuga velit eius totam illo non eos esse sunt
                        aliquid.
                    </p>
                </div>
                <div className="section-b">
                    <img src={image1} alt="" />
                </div>
            </section>
            <section className="section-3-home">
                <div className="main-3">
                    <div className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repudiandae sint quaerat dignissimos tenetur
                        architecto? Tempora laudantium, ducimus veniam porro
                        quae natus hic. Asperiores aliquam, rerum temporibus
                        quia quisquam quasi perspiciatis.
                    </div>
                    <Link to="/About">
                        <div className="custom-btn btn-13">Contact Us</div>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Service;
