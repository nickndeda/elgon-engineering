import React, { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Consultation",
    date: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const to = "info@elgonengineering.com";
    const subject = `Booking Request: ${form.service} — ${form.name}`;
    const body = `Name: ${form.name}%0D%0AEmail: ${form.email}%0D%0APhone: ${form.phone}%0D%0AService: ${form.service}%0D%0APreferred Date/Time: ${form.date}%0D%0A%0D%0AMessage:%0D%0A${form.message}`;

    // Open mail client with prefilled message. Replace with server endpoint when available.
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="booking" className="booking-section">
      <h2>Request a Booking</h2>
      <p className="muted">No payment required — we'll follow up by email.</p>

      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="row">
            <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Email address" value={form.email} onChange={handleChange} required />
          </div>
          <div className="row">
            <input name="phone" placeholder="Phone number" value={form.phone} onChange={handleChange} />
            <select name="service" value={form.service} onChange={handleChange}>
              <option>Consultation</option>
              <option>Engineering Services</option>
              <option>Maintenance Services</option>
            </select>
          </div>
          <input name="date" type="datetime-local" value={form.date} onChange={handleChange} />
          <textarea name="message" placeholder="Tell us about your requirements" value={form.message} onChange={handleChange} />

          <div className="actions">
            <button type="submit" className="primary">Send Request</button>
          </div>
        </form>
      ) : (
        <div className="booking-success">
          <p>Thank you. Your booking request was prepared in your mail client — please confirm to send.</p>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
