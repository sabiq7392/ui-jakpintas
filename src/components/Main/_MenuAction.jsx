export default function MenuAction() {
  return (
    <div id="menuPopUpAction" className="menu-pop-up-action">
      <div className="jenis-peta">
        <h2 tabIndex={0}>Jenis Peta</h2>
        <div className='d-grid gap-1'>
          <div className='box-jenis-peta'>
            <input type="radio" id='jenis-standart' defaultChecked/>
            <label htmlFor="jenis-standart">Standart</label>
          </div>
          <div className='box-jenis-peta'>
            <input type="radio" id='jenis-satelit' defaultChecked/>
            <label htmlFor="jenis-satelit">Satelit</label>
          </div>
          <div className='box-jenis-peta'>
            <input type="radio" id='jenis-jalan' defaultChecked/>
            <label htmlFor="jenis-jalan">Jalan</label>
          </div>
        </div>
      </div>
      <div className="container-btn-action">
        <a href="/" className="btn-action">
          <i className="bi bi-info-circle" />
          Bantuan
        </a>
        <a href="/" className="btn-action">
          <i className="bi bi-power" />
          Keluar
        </a>
      </div>
    </div>
  );
}