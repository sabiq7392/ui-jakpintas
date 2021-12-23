import gantiLokasi from '../../images/ganti-lokasi.png';

export default function KirimMasukkan() {
  return (
    <div id="menuPopUpKirimMasukkan" className="menu-pop-up-kirim-masukkan">
      <h2>Kirim Masukkan</h2>
      <form action="">
        <div className='d-grid gap-3'>
          <div className="d-grid">
            <label htmlFor="nama">Nama</label>
            <input 
              id="nama" 
              type="text" 
              placeholder="Ketik Nama Anda" 
              required
            />
          </div>
          <div className="d-grid">
            <label htmlFor="masukkanKontak">Kontak yang dapat dihubungi</label>
            <input 
              id="masukkanKontak" 
              type="text" 
              placeholder="Masukan kontak yang dapat dihubungi (no telepon/ handphone/ email)" 
              required 
            />
          </div>
          <div className="d-grid">
            <label htmlFor="pilihKategori">Kategori</label>
            <input 
              id="pilihKategori" 
              type="text" 
              placeholder="Pilih Kategori" 
              required 
            />
          </div>
          <div className="d-grid">
            <label htmlFor="lokasi">Lokasi</label>
            <input 
              id="lokasi" 
              type="text" 
              placeholder="Ketik alamat terkait informasi yang ingin disampaikan" 
              required 
            />

            <div className='map-ganti-lokasi mt-3'>
              <div className='overlay'>
                <button className='btn-ganti-lokasi btn border text-white' type='button'>
                  Update Lokasi di peta
                </button>
              </div>
              <img 
                src={gantiLokasi} 
                alt="Ganti Lokasi" 
                className='ganti-lokasi'
              />
            </div>
          </div>
          <div className="d-grid">
            <label htmlFor="informasiDisampaikan">Informasi yang ingin disampaikan</label>
            <input 
              id="informasiDisampaikan" 
              type="text" 
              placeholder="Ketik informasi yang ingin disampaikan" 
              required 
            />
          </div>
          <div className="d-grid">
            <label htmlFor="lampiranFoto">Lampiran foto/ dokumen terkait</label>
            <input 
              id="lampiranFoto" 
              type="text" 
              placeholder="Tambahkan lampiran foto/ dokumen terkait informasi yang ingin disampaikan" 
              required 
            />

            <button className='tambah-foto btn mt-3' type='button'>
              <i className="bi bi-camera-fill" />
              Tambahkan Foto
            </button>
          </div>
          <div className='d-flex gap-2 justify-content-end'>
            <button className='btn my-bg-turqoise-dark text-white'>Submit</button>
            <button className='btn my-bg-cyan text-white'>Batal</button>
          </div>
        </div>
      </form>
    </div>
  );
}