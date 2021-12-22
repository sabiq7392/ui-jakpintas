import JakPintasLogo from '../../images/logo_jakpintas.png';

export default function Header() {
  return (
    <header className='position-fixed my-bg-light my-rounded-md'>
      <div className='title'>
        <img src={JakPintasLogo} alt='Logo JakPintas' />
        <div className='d-flex flex-column text-center'>
          <h1 className='my-text-black font-commons-demi-bold'>
            Jakarta Peta Investasi
          </h1>
          <blockquote 
            className=''
          >
            "Smart City, Smart Province, Smart Indonesia"
          </blockquote>
        </div>
      </div>
      <div className='position-relative p-4 my-bg-blue-dark my-rounded-md-bottom'>
        <div className='search-input gap-2 rounded-pill'>
          <button 
            className='btn p-1' 
            aria-label='open menu'
          >
            <i className="bi bi-list" />
          </button>
          <input 
            type='search' 
            placeholder='Cari Kelurahan Disini' 
          />
          <button 
            className='btn rounded-circle shadow' 
            type='button' 
            aria-label='cari kelurahan'
          >
            <i className="bi bi-search" />
          </button>
        </div>
      </div>
    </header>
  );
}