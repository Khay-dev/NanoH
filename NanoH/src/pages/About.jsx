import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/About.css";
import image1 from "../images/AboutB.jpg";
import image2 from "../images/AboutA.jpg";

const About = () => {
    return (
        <div className="about">
            <div className="about-hero">
                <Nav />
                <div className="about-main-hero">
                    <h2>Nano Hertz</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Aliquid fuga illo a cupiditate totam excepturi est
                        quibusdam corporis. Voluptates, ex Lorem ipsum dolor.
                    </p>
                    <div className="hero-btn">
                        <Link to="/Contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="section-2-about">
                <div className="section-a">
                    <div className="title">Nano Hertz</div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eius dolores corporis consequatur iste deserunt
                        rem, modi accusantium ratione voluptatum est voluptates
                        vero quae dolorem sequi Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vero cupiditate eius animi
                        optio sequi blanditiis qui doloribus? Cupiditate, magnam
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam, omnis.
                    </div>
                </div>
                <div className="section-b">
                    <img src={image1} alt="" />
                </div>
            </section>
            <section className="section-3-about">
                <div className="section-a">
                    <div className="text">
                        Our Mission at nanohertz is Lorem ipsum dolor sit amet
                        consectetur, adipisicing elit. Doloribus rerum incidunt
                        placeat doloremque minima ad voluptatibus eveniet
                        maiores possimus impedit dolores, necessitatibu.
                    </div>
                </div>
                <div className="section-b">
                    <div className="text">
                        Our vision at nano hertz ipsum dolor sit amet
                        consectetur adipisicing elit. Blanditiis obcaecati harum
                        ullam iusto sapiente eligendi nisi. Dolor, nam quidem.
                        Ducimus commodi porro hic reiciendis fugiat suscipit
                        ipsum neque alias quasi architecto quisquam, inventore
                        totam exercitationem nobis qui quia obcaecati ut nostrum
                        voluptatum repellendus, natus libero! Rerum explicabo ab
                        nemo quibusdam possimus. Doloribus voluptatibus
                        voluptate reiciendis qui aliquam minima iure in.
                    </div>
                </div>
            </section>
            <section className="section-4-about">
                <div className="section-a">
                    <img src={image2} alt="" />
                </div>
                <div className="section-b">
                    <div className="title">
                        Nano Hertz Lorem ipsum dolor sit amet sit amet sit amet
                    </div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eius dolores corporis consequatur iste deserunt
                        rem, modi accusantium ratione voluptatum est voluptates
                        vero quae dolorem sequi Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vero cupiditate eius animi
                        optio sequi blanditiis qui doloribus? Cupiditate, magnam
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dignissimos explicabo obcaecati ipsa ratione ducimus,
                        impedit velit porro at ipsam labore.
                    </div>
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

export default About;
