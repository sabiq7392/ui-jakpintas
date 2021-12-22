// import { useState } from "react";

export default function Search() {
  const setActiveMenu = () => {
    const openMenu = document.querySelector('#openMenu');
    if (openMenu.classList.contains('active')) {
      openMenu.classList.remove('active');
      openMenu.setAttribute('aria-label', 'open menu')
    } else {
      openMenu.classList.add('active');
      openMenu.setAttribute('aria-label', 'close menu')
    }
  };

  return (
    <div className='position-relative p-4 my-bg-blue-dark my-rounded-md-bottom'>
      <div className='search-input gap-2 rounded-pill'>
        <button 
          id="openMenu"
          className='btn p-1' 
          aria-label='open menu'
          onClick={setActiveMenu}
        >
          <i className="bi bi-list" />
        </button>
        <input 
          type='search' 
          placeholder='Cari Kelurahan Disini' 
        />
        <button 
          id="searchButton"
          className='btn rounded-circle shadow' 
          type='button' 
          aria-label='cari kelurahan'
        >
          <i className="bi bi-search" />
        </button>
      </div>
    </div>
  );
}