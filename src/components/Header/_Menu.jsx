export default function Menu() {
  const setActive = ({ id }) => {
    const menuButtons = document.getElementsByClassName('menu-button');
    const menuPopUp = document.querySelector('#menuPopUpAction');
    const filtered = (menuButton) => {
      if (menuButton.id === id) {
        menuButton.classList.add('active');
        menuPopUp.classList.add('d-none');
      } else {
        menuButton.classList.remove('active');
      }
    };

    [...menuButtons].filter((menuButton) => filtered(menuButton));

    const menuButtonId = document.getElementById(id);
    const menuPopUpBagikan = document.querySelector('#menuPopUpBagikan');
    const menuPopUpSematkanPeta = document.querySelector('#menuPopUpSematkanPeta');
    const menuPopUpKirimMasukkan = document.querySelector('#menuPopUpKirimMasukkan');
    const menuPopUpCetak = document.querySelector('#menuPopUpCetak');
    const menuPopUpInfoLokasi = document.querySelector('#menuPopUpInfoLokasi');

    const bagikan = () => {
      if (menuButtonId.id === 'bagikan') {
        if (menuPopUpBagikan.classList.contains('active')) {
          menuPopUpBagikan.classList.remove('active');
        } else {
          menuPopUpBagikan.classList.add('active');
        }
      } else {
        menuPopUpBagikan.classList.remove('active');
      }
    };

    bagikan();


    const sematkanPeta = () => {
      if (menuButtonId.id === 'sematkanPeta') {
        if (menuPopUpSematkanPeta.classList.contains('active')) {
          menuPopUpSematkanPeta.classList.remove('active');
        } else {
          menuPopUpSematkanPeta.classList.add('active');
        }
      } else {
        menuPopUpSematkanPeta.classList.remove('active');
      }
    };

    sematkanPeta();

    const kirimMasukkan = () => {
      if (menuButtonId.id === 'kirimMasukkan') {
        if (menuPopUpKirimMasukkan.classList.contains('active')) {
          menuPopUpKirimMasukkan.classList.remove('active');
        } else {
          menuPopUpKirimMasukkan.classList.add('active');
        }
      } else {
        menuPopUpKirimMasukkan.classList.remove('active');
      }
    };

    kirimMasukkan();

    const cetak = () => {
      if (menuButtonId.id === 'cetak') {
        if (menuPopUpCetak.classList.contains('active')) {
          menuPopUpCetak.classList.remove('active');
        } else {
          menuPopUpCetak.classList.add('active');
        }
      } else {
        menuPopUpCetak.classList.remove('active');
      }
    };

    cetak();

    const bantuan = () => {
      if (menuButtonId.id === 'bantuan') {
        if (menuPopUpInfoLokasi.classList.contains('active')) {
          menuPopUpInfoLokasi.classList.remove('active');
        } else {
          menuPopUpInfoLokasi.classList.add('active');
        }
      } else {
        menuPopUpInfoLokasi.classList.remove('active');
      }
    };

    bantuan();
  }

  return (
    <div id="menu" className="menu">
      <button 
        id="bagikan" 
        className="btn d-flex gap-3 menu-button" 
        onClick={() => setActive({ id: 'bagikan' })}
      >
        <i className="bi bi-share" />
        Bagikan
      </button>
      <button 
        id="sematkanPeta" 
        className="btn d-flex gap-3 menu-button"
        onClick={() => setActive({ id: 'sematkanPeta' })}
      >
        <i className="bi bi-pin-angle" />
        Sematkan Peta
      </button>
      <button 
        id="kirimMasukkan"
        className="btn d-flex gap-3 menu-button" 
        onClick={() => setActive({ id: 'kirimMasukkan' })}
      >
        <i className="bi bi-keyboard" />
        Kirim Masukkan
      </button>
      <button 
        id="cetak" 
        className="btn d-flex gap-3 menu-button"
        onClick={() => setActive({ id: 'cetak' })}
      >
        <i className="bi bi-printer" />
        Cetak
      </button>
      <button 
        id="bantuan" 
        className="btn d-flex gap-3 menu-button"
        onClick={() => setActive({ id: 'bantuan' })}
      >
        <i className="bi bi-question-circle" />
        Bantuan
      </button>
    </div>
  );
}