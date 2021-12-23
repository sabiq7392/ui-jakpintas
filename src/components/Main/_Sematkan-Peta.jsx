export default function SematkanPeta() {
  return (
    <div id="menuPopUpSematkanPeta" className="menu-pop-up-sematkan-peta">
      <h2>Sematkan Peta</h2>
      <address>
        <span>Daerah </span>
        <span>PULO GEBANG, CAKUNG, JAKARTA TIMUR</span>
      </address>
      <p>
        <span>Koordinat</span>
        <span>6.20699943, 106.9567351</span>
      </p>
      <div className="d-flex justify-content-between gap-3 mb-3">
        <a href="https://103.214.112.123/sip/9a3nm6BSkMQX5b4G8">
          iframe lorem ipsum dolor sit amet
        </a>
        <button className="btn">Salin HTML</button>
      </div>
      <iframe 
          title="PULO GEBANG, CAKUNG, JAKARTA TIMUR"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.75479413012!2d106.9444502362746!3d-6.205719096104899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698b7bd6aac3af%3A0xe2c873238ab0cb69!2sPulo%20Gebang%2C%20Kec.%20Cakung%2C%20Kota%20Jakarta%20Timur%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1640228109541!5m2!1sid!2sid" 
          style={{border: "0"}}
          loading="lazy">
      </iframe>
    </div>
  );
}