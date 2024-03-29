import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Service.css";
import iotsolutionconsultation from "../images/service/people-working-marketing-agency.webp";
import techsupportandmaintain from "../images/service/pensive-black-female-engineer-hardhat-standing-warehouse-talking-cellphone-shelves-with-goods-background-copy-space-labor-communication-concept.webp";
import iotdevicedesign from "../images/service/home-automation-system-with-voiceactivated-features-smart-lighting-created-with-generative-ai_419341-9107.webp";
import iotbusinessacceleration from "../images/service/accounting-team-finance-ok_590464-85256.JPEG (1).webp";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

import image1 from "../images/ServiceB.webp";

import { Helmet } from "react-helmet";

const Service = () => {
    return (
        <div className="service">
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz|Service </title>
            </Helmet>
            <div className="service-hero">
                <Nav />
                <div className="service-main-hero">
                    <h2>Our Service</h2>
                    <p>
                        Our commitment to excellence, reliability, and tailored
                        solutions sets us apart. Join us on this transformative
                        journey as we shape the future of connectivity, one
                        innovation at a time.
                    </p>
                    <div className="hero-btn">
                        <Link to="/contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" aa ">
                IOT <br />
                SERVICES
            </div>
            <section className="section-1-service">
                <div className="section-about-2">
                    <div className="serv-flex">
                        <img
                            src={iotsolutionconsultation}
                            className="serv-img"
                        ></img>
                        <div className="section-c">
                            <h4> IoT Solution Consultation</h4>
                            <p>
                                Unlock the full potential of IoT with our expert
                                consultation service. We will guide you through
                                the complexities of IoT, helping you develop a
                                strategic roadmap tailored to your business
                                needs. Lets shape your IoT journey together.
                            </p>
                        </div>
                    </div>
                    <div className="serv-flex aaa">
                        <div className="section-c">
                            <h4> IoT Device Design</h4>
                            <p>
                                At NanoHertz-IoT Technologies, we specialize in
                                crafting cutting-edge IoT device solutions. Our
                                designs combine innovation and reliability to
                                ensure seamless connectivity for your IoT
                                device. Lets create the device that drives your
                                vision.
                            </p>
                        </div>
                        <img src={iotdevicedesign} className="ser-img"></img>
                    </div>

                    <div className="serv-flex">
                        <img
                            src={iotbusinessacceleration}
                            className="serv-img"
                        ></img>
                        <div className="section-c">
                            <h4>IoT Business Accelerator</h4>
                            <p>
                                Our IoT Business Accelerator service is designed
                                to fast-track your projects. From idea to
                                implementation, we provide the expertise and
                                resources to accelerate your IoT journey,
                                ensuring you reach your goals with efficiency
                                and agility.
                            </p>
                        </div>
                    </div>

                    <div className="serv-flex aaa">
                        <div className="section-c">
                            <h4>Technical Support & Maintenance</h4>
                            <p>
                                Our dedicated technical support and maintenance
                                services ensure your IoT infrastructure runs
                                seamlessly. We are here to keep your systems
                                up-to-date, secure, and optimized, so you can
                                focus on what matters.
                            </p>
                        </div>
                        <img
                            src={techsupportandmaintain}
                            className="ser-img"
                        ></img>
                    </div>
                </div>
            </section>
            <section className="section-2-service x">
                <div className="section-a">
                    IOT <br /> SOLUTIONS
                </div>
                <div className="section-b" id="secb">
                    <h4>Tailored IoT Solutions for Diverse Industries</h4>
                    <p>
                        NanoHertz-IoT Technologies offers customized IoT
                        solutions that span various industries, from agriculture
                        and smart homes to smart cities and beyond. Our
                        expertise adapts to your unique needs. Ready to explore
                        how IoT can transform your operations? Book a meeting
                        with us today, and lets unlock your IoT potential across
                        diverse sectors.
                    </p>
                    <Link to="/book" id="bookspantext">
                        <span></span>Book a meeting
                        <span className="span-2">
                            <BsArrowUpRight />
                        </span>
                    </Link>
                </div>
            </section>
            <section className="section-3-service">
                <div className="section-a">
                    <div>NanoHertz-IoT Custom Board</div>
                    <p id="boardptext">
                        Experience innovation at its core with our
                        custom-designed IoT boards. Crafted for performance,
                        reliability, and versatility, our IoT boards are the
                        foundation of your connectivity solutions. Explore how
                        our boards can power your IoT vision.
                    </p>
                </div>
                <div className="section-b">
                    <img src={image1} alt="" />
                </div>
            </section>
            <section className="section-3-home">
                <div className="main-3">
                    <div className="text">
                        We are not just engineers; we are innovators. Our team
                        is dedicated to pushing the boundaries of technology,
                        crafting solutions that redefine what is possible.
                    </div>
                    <Link to="/contact">
                        <div className="custom-btn btn-13">Contact Us</div>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Service;
