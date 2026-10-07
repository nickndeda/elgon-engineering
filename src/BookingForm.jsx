import { useState } from "react";

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Electrical",
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
    const subject = `Quote Request: ${form.service} - ${form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email || "Not supplied"}`,
      `Phone: ${form.phone}`,
      `Service type: ${form.service}`,
      "",
      "Message:",
      form.message,
    ].join("\n");
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    const mailtoUrl = `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodedSubject}&body=${encodedBody}`;
    const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = mailtoUrl;
    } else {
      const gmailWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

      if (!gmailWindow) {
        window.location.href = gmailUrl;
      }
    }

    setSubmitted(true);
  }

  return (
    <section id="booking" className="booking-section">
      <p className="section-kicker">Quote request</p>
      <h2>Request a quote</h2>
      <p className="muted">Share the job type, site details and urgency. No payment is required.</p>

      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="row">
            <label>
              <span>Name</span>
              <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" placeholder="+254..." value={form.phone} onChange={handleChange} required />
            </label>
          </div>
          <div className="row">
            <label>
              <span>Service type</span>
              <select name="service" value={form.service} onChange={handleChange}>
                <option>Electrical</option>
                <option>Mechanical</option>
                <option>Precision engineering</option>
                <option>Maintenance and repairs</option>
                <option>Consulting</option>
              </select>
            </label>
            <label>
              <span>Email optional</span>
              <input name="email" type="email" placeholder="name@example.com" value={form.email} onChange={handleChange} />
            </label>
          </div>
          <label>
            <span>Message</span>
            <textarea name="message" placeholder="Tell us about the site, equipment, measurements, deadline or fault symptoms." value={form.message} onChange={handleChange} required />
          </label>

          <div className="actions">
            <button type="submit" className="button primary">Send quote request</button>
          </div>
        </form>
      ) : (
        <div className="booking-success">
          <p>Thank you. Your quote request was prepared in your mail client. Please confirm to send.</p>
        </div>
      )}
    </section>
  );
};

export default BookingForm;
