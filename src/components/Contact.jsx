import React from "react";

const Contact = () => {
    return (
        <section style={contactStyle}>
            <h2>Contact</h2>
            <form style={formStyle}>
                <input type="text" placeholder="Your Name" style={inputStyle} />
                <input type="email" placeholder="Your Email" style={inputStyle} />
                <textarea placeholder="Your Message" style={textareaStyle}></textarea>
                <button type="submit" style={buttonStyle}>
                    Send
                </button>
            </form>
        </section>
    );
};

// Inline Styles for Contact
const contactStyle = {
    textAlign: "center",
    padding: "50px 20px",
    background: "#f4f4f4",
};

const formStyle = {
    maxWidth: "600px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
};

const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
};

const textareaStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px",
};

const buttonStyle = {
    padding: "10px 20px",
    background: "#3498db",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
};

export default Contact;
