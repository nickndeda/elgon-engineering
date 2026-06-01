const WhatsAppButton = () => {
  const phone = "254785468526";
  const waUrl = `https://wa.me/${phone}`;

  return (
    <div className="contact-floater">
      <a className="contact-button call" href={`tel:+254785468526`} aria-label="Call Elgon Engineering" title="Call Elgon Engineering" data-tooltip="Call">
        <img src="/phone-call.png" alt="Call icon" />
      </a>
      <a className="contact-button whatsapp" href={waUrl} target="_blank" rel="noreferrer noopener" aria-label="Chat on WhatsApp" title="Chat on WhatsApp" data-tooltip="WhatsApp">
        <img src="/whatsapp.png" alt="WhatsApp icon" />
      </a>
      <a className="contact-button book" href="#booking" aria-label="Request Booking" title="Request Booking" data-tooltip="Book">
        <img src="/booking.jpg" alt="Book icon" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
