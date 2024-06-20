import { useState } from "react";

export default function GeneralInfo() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
    width: "30vw",
  };

  const mainStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div className="general-info section" style={mainStyle}>
      <div className="contact-info-form">
        <form action="">
          <div style={contactFormStyle}>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </form>
      </div>

      <div className="contact-info">
        <h1>{firstName + " " + lastName}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}
