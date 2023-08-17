import Nav from "../components/Nav";
import { Helmet } from "react-helmet";
import "../styles/Contact.css";
const Contact = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>H&W|Contact </title>
            </Helmet>
            <div className="contact">
                <div className="contact-hero">
                    <Nav />
                </div>
                <section className="section-main">
                    <div className="section-a">
                        <p>Get In</p>
                        <span>Touch</span>
                        <p>With Us</p>
                    </div>
                    <div className="section-b">
                        <div className=" part part1">
                            <span>
                                Plot 392 Ada George Off Location <br /> Port
                                Harcourt, Rivers State, Nigeria.
                            </span>
                        </div>
                        <div className="part part2">
                            <a href="tel: +234(0)000000000">+234890789890</a>
                        </div>
                        <div className="part part3">
                            <a href="mailto:info@nanohertz.com">
                                info@nanohertz.com
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
