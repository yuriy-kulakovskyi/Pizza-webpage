import React from 'react'
import burgerBtn from './img/sushi.png';
import './Header.css';
import $ from 'jquery';
import Theme from '../Theme/Theme';

export let theme = 'light';

class Header extends React.Component {
  constructor (state) {
    super(state);
    this.opened = false;
  }

  burgerClick = e => {
    e.preventDefault();

    if (!this.opened) {
      this.opened = true;
      $("#menu").css('top', '0');
      $("section").css('display', 'none');
    } else if (this.opened) {
      this.opened = false;
      $("#menu").css('top', '-100vh');
      $("section").css('display', 'flex');
    }
  }

  // Light/dark theme trigger
  Click = () => {
    if (theme === "light") {
      // main styles
      $(".background").css('background-color', "#111");
      $(".font").css('color', "#fff");
      $(".transparented").css('color', "rgba(255, 255, 255, .5)");
      $(".light-wrap").css('display', 'none');
      $(".dark-wrap").css('display', 'flex');
      $(".burger-menu").css("background-color", '#fff');
      $(".burger-menu h1").css("color", '#111');

      // arrow
      $("#arrow-down").css("display", "none");
      $("#arrow-down-light").css("display", "block");

      theme = "dark";
    } else if (theme === "dark") {
      // main styles
      $(".background").css('background-color', "#fff");
      $(".font").css('color', "#111");
      $(".transparented").css('color', "rgba(0, 0, 0, .5)");
      $(".light-wrap").css('display', 'flex');
      $(".dark-wrap").css('display', 'none');
      $(".burger-menu").css("background-color", '#111');
      $(".burger-menu h1").css("color", '#fff');

      // arrow
      $("#arrow-down").css("display", "block");
      $("#arrow-down-light").css("display", "none");

      theme = "light";
    }
  };

  render() {
    return (
      <header className='header background'>
        <Theme 
        clickMethod = {this.Click} />
        <div className='burger-btn' id='burger' onClick={this.burgerClick}>
          <img src={burgerBtn} alt='Burger button' />
        </div>
      </header>
    );
  }
}

export default Header;