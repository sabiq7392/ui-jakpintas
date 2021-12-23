export default function Menu() {
  const setActive = ({ id }) => {
    const menuButtons = document.querySelectorAll('.menu-button');
    const menuPopUp = document.querySelector('#menuPopUp');
    menuButtons.forEach((menuButton) => {
      if (menuButton.id === id) {
        menuButton.classList.add('active');
        menuPopUp.classList.add('d-none');
      } else {
        menuButton.classList.remove('active');
      }
    });

    const menuButtonId = document.getElementById(id);

    if (menuButtonId.id === 'bagikan') {
      const menuPopUpBagikan = document.querySelector('#menuPopUpBagikan');
      if (menuPopUpBagikan.classList.contains('active')) {
        menuPopUpBagikan.classList.remove('active');
      } else {
        menuPopUpBagikan.classList.add('active');
      }
    }

    if (menuButtonId.id === 'sematkanPeta') {
      const menuPopUpSematkanPeta = document.querySelector('#menuPopUpSematkanPeta');
      if (menuPopUpSematkanPeta.classList.contains('active')) {
        menuPopUpSematkanPeta.classList.remove('active');
      } else {
        menuPopUpSematkanPeta.classList.add('active');
      }
    }

    if (menuButtonId.id === 'kirimMasukkan') {
      const menuPopUpKirimMasukkan = document.querySelector('#menuPopUpKirimMasukkan');
      if (menuPopUpKirimMasukkan.classList.contains('active')) {
        menuPopUpKirimMasukkan.classList.remove('active');
      } else {
        menuPopUpKirimMasukkan.classList.add('active');
      }
    } 

    if (menuButtonId.id === 'cetak') {
      const menuPopUpCetak = document.querySelector('#menuPopUpCetak');
      if (menuPopUpCetak.classList.contains('active')) {
        menuPopUpCetak.classList.remove('active');
      } else {
        menuPopUpCetak.classList.add('active');
      }
    }
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