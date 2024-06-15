import { useState } from "react"


export default function ContactInfo() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }


  // function CustomInput({ placeholder, value, onChange }) {


  return (
    <>
      <div className="contact-form">
        <input placeholder='First Name' value={firstName} onChange={handleFirstNameChange} />
        <input placeholder='Last Name' value={lastName} onChange={handleLastNameChange} />
        <input placeholder='Email' value={email} onChange={(e => setEmail(e.target.value))} />
        <input placeholder='Phone Number' value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div className="contact-form-render">
        <h1>{firstName + ' ' + lastName}</h1>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </>
  )
}

