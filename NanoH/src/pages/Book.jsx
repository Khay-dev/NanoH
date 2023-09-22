import Nav from "../components/Nav";
import { useState } from "react";
import "../styles/Book.css";
const Book = () => {
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [email, setemail] = useState("");
    const [nation, setNation] = useState("");
    const [company, setCompany] = useState("");
    const [solution, setSolution] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="book">
            <Nav />
            <div className="section-1">
                <div className="section-a">
                    <span>Schedule a meeting with our team members.</span>
                    <p>
                        Use our convenient booking system to schedule a
                        consultation with our experts. Lets discuss your
                        project, goals, and how we can work together to shape
                        your IoT success.
                    </p>
                    <p>
                        Whether you are a startup, an established business, or
                        simply curious about IoT possibilities, our team is
                        eager to assist.
                    </p>
                    <p>
                        Whether you are exploring IoT solutions, need technical
                        support, or want to accelerate your business, we are
                        just a click away. Schedule a meeting today and lets
                        start the conversation.
                    </p>
                </div>
                <div className="section-b">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="First Name *"
                            name="First Name"
                            id="fname"
                            value={fName}
                            onChange={(e) => setFName(e.target.value)}
                        />
                        <input
                            placeholder="Last Name *"
                            name="Last Name"
                            id="lname"
                            value={lName}
                            onChange={(e) => setLName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email *"
                            name="Email"
                            id="email"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                        <input
                            id="nationality"
                            placeholder="Nationality*"
                            name="Nationality"
                            value={nation}
                            onChange={(e) => setNation(e.target.value)}
                        />
                        <input
                            id="company"
                            placeholder="Company*"
                            name="Company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                        />
                        <textarea
                            name="solution"
                            id="solution"
                            cols="35"
                            rows="8"
                            placeholder="Which Solutions Would You Like To Discuss*"
                            value={solution}
                            onChange={(e) => setSolution(e.target.value)}
                        ></textarea>
                        <button type="submit">Book</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Book;
