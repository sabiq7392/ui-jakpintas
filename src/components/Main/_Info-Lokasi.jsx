import DiagramSatu from '../../images/diagram-1.png';

export default function InfoLokasi() {
  return (
    <div id="menuPopUpInfoLokasi" className="menu-pop-up-info-lokasi menu-pop-up">
      <h2>INFO LOKASI</h2>
      <div className='d-grid gap-3'>
        <div className='d-grid gap-2'>
          <div className="container-info-lokasi">
            <p>Daerah</p>
            <p>MENTENG DALAM, JAKARTA PUSAT</p>
          </div>
          <div className="container-info-lokasi">
            <p>Koordinat</p>
            <p>-6.20454001, 106.9544667</p>
          </div>
          <div className="container-info-lokasi">
            <p>Luas Area</p>
            <p>662.99 ha</p>
          </div>
        </div>

        <div className='usaha-mikro-kecil'>
          <h3>Usaha Mikro Kecil</h3>
          <p className='total'>Total Omzet: 20.000.000.000/bulan</p>
          <p className='pelaku'>Pelaku Isajaa: 5615 Orang</p>
          <img 
            src={DiagramSatu} 
            alt="Diagram"
            className='diagram-satu' 
          />
        </div>

        <div className='pendapatan-rata-rata'>
          <h3>Pendapatan Rata - Rata</h3>
          <div className='table-wrapper'>
            <table className='w-100'>
              <tbody>
                <tr>
                  <td className='text-center'>0 - 5 Jt: 17.870 Orang</td>
                  <td className='text-center'>6 - 1 Jt: 2.241 Orang</td>
                </tr>
                <tr>
                  <td className='text-center'>11 - 15 Jt: 0 Orang</td>
                  <td className='text-center'>6 - 10 Jt: 116 Orang</td>
                </tr>
                <tr>
                  <td className='text-center'>{'>'} 20 Jt: 55 Orang</td>
                  <td className='text-center'>N/A 17.912 Orang</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
          <div className='d-grid gap-2'>
          <div className="container-info-lokasi">
            <p>Daerah</p>
            <p>MENTENG DALAM, JAKARTA PUSAT</p>
          </div>
          <div className="container-info-lokasi">
            <p>Koordinat</p>
            <p>-6.20454001, 106.9544667</p>
          </div>
          <div className="container-info-lokasi">
            <p>Luas Area</p>
            <p>662.99 ha</p>
          </div>
        </div>
        <div className='zona-perumahan'>
          <h3>Zona Perumahan KDB Sedang - Tinggi</h3>
          <div className='d-grid gap-2'>
            <a href='https://www.google.com/'>Cari Kegiatan Usaha Disini ...</a>
            <a href="https://www.google.com/">Lokasi Usaha</a>
            <a href="httpss://ww.google.com/">Modal Usaha</a>
          </div>
        </div>
      </div>
    </div>
  );
}