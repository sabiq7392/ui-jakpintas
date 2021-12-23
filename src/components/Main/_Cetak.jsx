// import jakPintasLogo from '../../images/logo_jakpintas.png';
import gantiLokasi from '../../images/ganti-lokasi.png';

export default function Cetak() {
  return (
    <div id='menuPopUpCetak' className='menu-pop-up-cetak menu-pop-up'>
      <div className='preview'>
        <img 
          src={gantiLokasi} 
          alt="Jak Pintas Logo" 
          className='image-cetak'
        />

        <div>
          <h3>INFO LOKASI</h3>
          <div className='cetak-data'>
            <p>Daerah</p>
            <p>: PULO GEBANG, CAKUNG, JAKARTA TIMUR</p>
          </div>
          <div className='cetak-data'>
            <p>Koordinat</p>
            <p>: -6.20699943, 106.9567351</p>
          </div>
          <div className="cetak-data">
            <p>Luas Area</p>
            <p>: 662,99 ha</p>
          </div>
        </div>

        <div>
          <h3>INFO LOKASI</h3>
          <div className='cetak-data'>
            <p>Daerah</p>
            <p>: PULO GEBANG, CAKUNG, JAKARTA TIMUR</p>
          </div>
          <div className='cetak-data'>
            <p>Koordinat</p>
            <p>: -6.20699943, 106.9567351</p>
          </div>
          <div className="cetak-data">
            <p>Luas Area</p>
            <p>: 662,99 ha</p>
          </div>
        </div>

        <div>
          <h3>INFO LOKASI</h3>
          <div className='cetak-data'>
            <p>Daerah</p>
            <p>: PULO GEBANG, CAKUNG, JAKARTA TIMUR</p>
          </div>
          <div className='cetak-data'>
            <p>Koordinat</p>
            <p>: -6.20699943, 106.9567351</p>
          </div>
          <div className="cetak-data">
            <p>Luas Area</p>
            <p>: 662,99 ha</p>
          </div>
        </div>

        <div>
          <h3>INFO LOKASI</h3>
          <div className='cetak-data'>
            <p>Daerah</p>
            <p>: PULO GEBANG, CAKUNG, JAKARTA TIMUR</p>
          </div>
          <div className='cetak-data'>
            <p>Koordinat</p>
            <p>: -6.20699943, 106.9567351</p>
          </div>
          <div className="cetak-data">
            <p>Luas Area</p>
            <p>: 662,99 ha</p>
          </div>
        </div>

      </div>
      <div className='form-cetak'>
        <h2>Cetak</h2>
        <form action="">
          <div className='container-input'>
            <label htmlFor="">Destination</label>
            <input type="text" placeholder='HPEF06BF(HP Page)'/>
          </div>
          <div className='container-input'>
            <label htmlFor="">Pages</label>
            <input type="text" placeholder='All' />
          </div>
          <div className='container-input'>
            <label htmlFor="">Copies</label>
            <input type="number" placeholder='1' />
          </div>
          <div className='container-input'>
            <label htmlFor="">Layout</label>
            <input type="text" placeholder='portrait' />
          </div>
          <div className='container-input'>
            <label htmlFor="">Color</label>
            <input type="text" placeholder='Color' />
          </div>
          <hr />
          <div className='container-btn'>
            <button className='btn btn-more-setting'>More Setting</button>
            <div className='d-flex gap-2 justify-content-end'>
              <button className='btn my-bg-turqoise-dark text-white'>Submit</button>
              <button className='btn my-bg-cyan text-white'>Batal</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}