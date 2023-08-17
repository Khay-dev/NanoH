import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/Home.css";
import image1 from "../images/iot.jpg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
    const Services = [
        {
            Image: "Image",
            name: "lorem1",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, assumenda Lorem, ipsum dolor sit amet consectetur adipisicing elit.Corporis, assumenda.",
            id: crypto.randomUUID(),
        },
        {
            Image: "Image",
            name: "lorem2",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, assumenda Lorem, ipsum dolor sit amet consectetur adipisicing elit.Corporis, assumenda.",
            id: crypto.randomUUID(),
        },
        {
            Image: "Image",
            name: "lorem3",
            description:
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, assumenda Lorem, ipsum dolor sit amet consectetur adipisicing elit.Corporis, assumenda.",
            id: crypto.randomUUID(),
        },
    ];

    return (
        <div className="home">
            <Helmet>
                <meta charSet="utf-8" />
                <title> NanoHertz </title>
            </Helmet>
            <div className="hero">
                <Nav />
                <div className="main-hero">
                    <h2>Nano Hertz</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Blanditiis quia consectetur obcaecati amet
                        mollitia dignissimos, molestias impedit, soluta quod
                        maiores maxime .
                   </p>
                    <div className="hero-btn">
                        <Link to="/Contact">
                            <div className="custom-btn btn-13">Contact Us</div>
                        </Link>
                        <Link to="/About">
                            <div className="custom-btn btn-13">About Us</div>
                        </Link>
                    </div>
                </div>
            </div>
            <section className="section-1-home">
                <div className="section-1-a">
                    <div className="header">OUR IOT SERVICES</div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eos mollitia impedit ab consectetur cum nulla ipsa
                        quia delectus natus voluptas. Eos mollitia impedit ab
                        consectetur cum nulla ipsa quia delectus natus voluptas!
                        Eos mollitia impedit ab consectetur cum nulla ipsa quia
                        delectus natus voluptas!
                    </div>
                </div>
                <div className="section-1-c">
                    <Link to="/Service">
                        <div className="custom-btn btn-13">Read More</div>
                    </Link>
                </div>
                <div className="section-1-b">
                    {Services.map((service) => (
                        <div className="container" key={service.id}>
                            <div className="img">{service.Image}</div>
                            <div className="name">{service.name}</div>
                            <div className="descrip">{service.description}</div>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section-2-home">
                <div className="section-2-a">
                    <div className="title">Nano Hertz</div>
                    <div className="text">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Eius dolores corporis consequatur iste deserunt
                        rem, modi accusantium ratione voluptatum est voluptates
                        vero quae dolorem sequi Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vero cupiditate eius animi
                        optio sequi blanditiis qui doloribus? Cupiditate,
                        magnam.
                    </div>
                    <Link to="/About">
                        <div className="custom-btn btn-13">Read More</div>
                    </Link>
                </div>
                <div className="section-2-b">
                    <img src={image1} alt="pic" />
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

export default Home;
