import React from "react";

export default function Contact() {
  const [formValues, setFormValues] = React.useState({
    email: "",
    phone: "",
    textInfo: "",
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    alert("Submitted successfully!");
    setFormValues({
      email: "",
      phone: "",
      textInfo: "",
    });
  }
  function handleChange(event) {
    console.log(event.target.value);
    setFormValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    <div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Send us a message</h2>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="xyz123@gmail.com"
          onChange={handleChange}
          value={formValues.email}
          required
        />
        <label htmlFor="phone_no">Phone number:</label>
        <input
          type="text"
          name="phone"
          id="phone_no"
          placeholder="enter phone number"
          onChange={handleChange}
          value={formValues.phone}
          required
        />
        <label htmlFor="text-info">Leave a quick message:</label>
        <textarea
          name="textInfo"
          id="text-info"
          rows={4}
          cols={4}
          placeholder="message?"
          onChange={handleChange}
          value={formValues.textInfo}
        ></textarea>
        <div>
          <button className="btn-contact">Send</button>
        </div>
      </form>
    </div>
  );
}
