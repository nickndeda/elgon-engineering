const MapSection = () => {
  const directionsUrl = "https://google.com/maps/dir//Elgon+Engineering,+Kitale/";
  const embed = "https://www.google.com/maps?q=Elgon+Engineering,Kitale&z=15&output=embed";

  return (
    <section id="location" className="map-section section-pad">
      <div className="section-heading split-heading">
        <div>
          <p className="section-kicker">Location</p>
          <h2>Find Elgon Engineering in Kitale.</h2>
        </div>
        <p>Use directions before visiting the workshop or requesting a site callout.</p>
      </div>
      <div className="map-wrap">
        <iframe
          title="Elgon Engineering Location"
          src={embed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="map-actions">
        <a className="button secondary" href={directionsUrl} target="_blank" rel="noreferrer">Get directions</a>
        <div className="location-info">
          <strong>Elgon Engineering</strong>
          <div>Kitale, Kenya</div>
          <div><a href="tel:+254785468526">+254 785 468 526</a></div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
