import MapBox from './_MapBox';
import MenuPopUp from './_Menu-Pop-Up';
import Bagikan from './_Bagikan';
import SematkanPeta from './_Sematkan-Peta';

export default function Main() {
  return (
    <main>
      <MapBox />
      <div className='container-button-right'>
        <div className='d-flex flex-column justify-content-between h-100'>
          <div className='d-flex gap-3'>
            <div className='d-flex flex-column gap-2'>
              <a href='/' className='btn btn-menu' aria-label='my profile'>
                <i className='bi bi-person-circle' />
              </a>
              <a href='/' className='btn btn-menu' aria-label=''>
                <i className='bi bi-bookmarks' />
              </a>
            </div>
          </div>
          <div className='d-flex flex-column gap-1 mb-5 my-bg-light shadow-default rounded-pill'>
            <button className='btn btn-menu' aria-label='zoom in'>
              <i className='bi bi-plus-lg' />
            </button>
            <button className='btn btn-menu' aria-label='zoom out'>
              <i className='bi bi-dash-lg' />
            </button>
            <button className='btn btn-menu' aria-label='compas'>
              <i className='bi bi-compass' />
            </button>
          </div>
        </div>
      </div>

      <MenuPopUp />
      <Bagikan />
      <SematkanPeta />

      <div className='pembagian-uang-wilayah'>
        <div className='box mb-5'>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p>Rp. 0 - 4 Milyar</p>
          </div>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p>Rp. 5 - 8 Milyar</p>
          </div>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p>Rp. 9 - 12 Milyar</p>
          </div>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p>Rp. 13 - 16 Milyar</p>
          </div>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p>Rp. 17 - 20 Milyar</p>
          </div>
          <div className='d-flex gap-1'>
            <div className='box-color' />
            <p> {'>'} Rp. 20 Milyar</p>
          </div>
        </div>
      </div>
    </main>
  );
}