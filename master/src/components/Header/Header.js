import React from 'react'
import burgerBtn from './img/sushi.png';
import './Header.css';
import $ from 'jquery';

const Header = () => {
  
  let opened = false;
  const burgerClick = (e) => {
    e.preventDefault();

    if (!opened) {
      opened = true;
      $("#menu").css('top', '0');
      $("section").css('display', 'none');
    } else if (opened) {
      opened = false;
      $("#menu").css('top', '-100vh');
      $("section").css('display', 'flex');
    }
  }

  return (
    <header className='header background'>
      <div className='light-and-dark-theme'>
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
        <i className="fas fa-moon"></i>
        <i className='fas fa-sun'></i>
        <div className='ball'></div>
        </label>
      </div>
      <div className='burger-btn' id='burger' onClick={burgerClick}>
        <img src={burgerBtn} alt='Burger button' />
      </div>
    </header>
  );
}

export default Header;