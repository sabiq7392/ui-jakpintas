import JakPintasLogo from '../../images/logo_jakpintas.png';
import SearchInputMenu from './_Search-Input-Menu';

export default function Header() {
  return (
    <header>
      <div className='my-bg-light my-rounded-md'>
        <div className='title'>
          <img src={JakPintasLogo} alt='Logo JakPintas' />
          <div className='d-flex flex-column text-center'>
            <h1 tabIndex={0} className='my-text-black font-commons-demi-bold'>
              Jakarta Peta Investasi
            </h1>
            <blockquote 
              className=''
            >
              "Smart City, Smart Province, Smart Indonesia"
            </blockquote>
          </div>
        </div>
        <SearchInputMenu />
      </div>
      <div id='infoLihatRencanaKota' className='info-lihat-rencana-kota'>
        <i className="bi bi-caret-down-fill"></i>
        <p className='m-0'>Lihat Rencana Kotam Interpolasi NJOP, Penggunaan Lahan Eksisting. Usaha Mikro Kecil</p>
      </div>
    </header>
  );
}