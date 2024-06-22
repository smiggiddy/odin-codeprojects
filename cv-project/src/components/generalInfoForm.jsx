import { useState } from "react";
import Input from "./input";

export default function GeneralInfoForm(props) {
  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const contactFormStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <>
      <div className="general-info-form">
        <form action="">
          <div style={contactFormStyle}>
            <h2 className="general-info-header">Personal Details</h2>
            <Input
              label={true}
              name="fullName"
              labelName="Full name"
              value={fullName}
              placeholder=""
              onChange={(e) => {
                setFullName(e.target.value);
                props.setBasicInfo({
                  ...props.basicInfo,
                  fullName: e.target.value,
                });
              }}
            />
            <Input
              label={true}
              name="location"
              labelName="Location"
              placeholder=""
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                props.setBasicInfo({
                  ...props.basicInfo,
                  location: e.target.value,
                });
              }}
            />
            <Input
              label={true}
              type="email"
              name="email"
              labelName="Email"
              placeholder=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                props.setBasicInfo({
                  ...props.basicInfo,
                  email: e.target.value,
                });
              }}
            />
            <Input
              type="text"
              label={true}
              labelName="Phone"
              placeholder=""
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                props.setBasicInfo({
                  ...props.basicInfo,
                  phone: e.target.value,
                });
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
