import React from "react";

const Contact = () => {
  return (
    <div className="contact-sec">
      <div className="contact-con">
        <form action="">
          <h3>Leave Reply</h3>
          <div>
            <input
              className="name"
              type="text"
              placeholder="Nick name:"
              required
            />
            <input
              className="email"
              type="text"
              placeholder="Email address:"
              required
            />
          </div>
          <input
            className="message"
            type="text"
            placeholder="Write a message:"
            required
          />
          <button type="submit">SUBMIT</button>
        </form>
        <div className="datas">
          <h3>Contact Info</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
          <p style={{ opacity: ".6" }}>Dambo dika,USA,road123</p>
          <p style={{ opacity: ".6" }}>dotsee@one.com</p>
          <p style={{ opacity: ".6" }}>+88 018 522-369 36</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
