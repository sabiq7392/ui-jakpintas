import MapBox from './_MapBox';

export default function Main() {
  return (
    <main>
      <MapBox />
      <div className='container-button d-flex flex-column'>
        <a href='/' className='btn' aria-label='my profile'>
          <i className='bi bi-person-circle' />
        </a>
        <a href='/' className='btn' aria-label=''>
          <i className='bi bi-bookmarks' />
        </a>
        <button className='btn' aria-label='zoom in'>
          <i className='bi bi-plus' />
        </button>
        <button className='btn' aria-label='zoom out'>
          <i className='bi bi-dash' />
        </button>
        <button className='btn' aria-label='compas'>
          <i className='bi bi-compass' />
        </button>
      </div>
    </main>
  );
}