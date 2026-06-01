const MapSection = () => {
  const directionsUrl = "https://google.com/maps/dir//Elgon+Engineering,+Kitale/";
  const embed = "https://www.google.com/maps?q=Elgon+Engineering,Kitale&z=15&output=embed";

  return (
    <section id="location" className="map-section">
      <h2>Our Location</h2>
      <div className="map-wrap">
        <iframe
          title="Elgon Engineering Location"
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="map-actions">
        <a className="button ghost" href={directionsUrl} target="_blank" rel="noreferrer">Get Directions</a>
        <div className="location-info">
          <strong>Elgon Engineering</strong>
          <div>Kitale, Kenya</div>
          <div><a href="tel:+254722468526">+254 722 468 526</a></div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
