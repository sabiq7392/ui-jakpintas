// import { useState } from "react";

export default function SearchInputMenu() {
  const setActiveMenu = () => {
    const openMenu = document.querySelector('#openMenu');
    const searchInput = document.querySelector('#searchInput');
    const searchButton = document.querySelector('#searchButton');
    const infoLihatRencanaKota = document.querySelector('#infoLihatRencanaKota');
    const menu = document.querySelector('#menu');

    if (openMenu.classList.contains('active')) {
      openMenu.classList.remove('active');
      searchButton.classList.remove('d-none');
      infoLihatRencanaKota.classList.remove('d-none');
      menu.classList.add('d-none');
      menu.classList.remove('d-grid');

      openMenu.setAttribute('aria-label', 'open menu');
      searchInput.value = '';
    } else {
      openMenu.classList.add('active');
      searchButton.classList.add('d-none');
      infoLihatRencanaKota.classList.add('d-none');
      menu.classList.remove('d-none');
      menu.classList.add('d-grid');

      openMenu.setAttribute('aria-label', 'close menu');
      searchInput.value = 'Menu';
    }
  };

  return (
    <div className='position-relative p-4 my-bg-blue-dark my-rounded-md-bottom'>
      <div className='search-input-menu gap-2 rounded-pill'>
        <div className="skeleton-button">
          <button 
            id="openMenu"
            className='btn p-1' 
            type='button' 
            aria-label='open menu'
            onClick={setActiveMenu}
          >
            <i className="bi bi-list" />
          </button>
        </div>
        <input 
          id="searchInput"
          type='search' 
          placeholder='Cari Kelurahan Disini' 
        />
        <div className="skeleton-button">
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
      <div id="menu" className="menu">
          <a href="/" className="d-flex gap-3">
            <i className="bi bi-share" />
            Bagikan
          </a>
          <a href="/" className="d-flex gap-3">
            <i className="bi bi-pin-angle" />
            Sematkan Peta
          </a>
          <a href="/" className="d-flex gap-3">
            <i className="bi bi-keyboard" />
            Kirim Masukkan
          </a>
          <a href="/" className="d-flex gap-3">
            <i className="bi bi-printer" />
            Cetak
          </a>
          <a href="/" className="d-flex gap-3">
            <i className="bi bi-question-circle" />
            Bantuan
          </a>
        </div>
    </div>
  );
}