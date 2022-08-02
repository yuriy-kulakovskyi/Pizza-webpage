import React from 'react';
import './Menu.css';
import $ from 'jquery';

class Menu extends React.Component {
  constructor (props) {
    super(props);
    this.nameParam = "";
  }

  MouseEnter = props => {
    props.nameParam = props.target.outerText;
    $('#linkVal').css('opacity', '1');
    $('#linkVal').css('letter-spacing', "10px");
    $('#linkVal').text(props.nameParam);
  }

  MouseLeave = props => {
    props.nameParam = '';
    $('#linkVal').css('opacity', '0');
    $('#linkVal').css('letter-spacing', "100px");
    $('#linkVal').text(props.nameParam);
  }

  render() {
    return (
      <div className="burger-menu" id="menu">
        <div className='linkVal' id='linkVal'></div>
        <ul className="items-list">
          <li className="list-item">
            <h1 onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave} className="top-today item__link" id="top-today-link">top</h1>
          </li>
          <li className="list-item">
            <h1 onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave} className="products-link item__link" id="products-link">products</h1>
          </li>
          <li className="list-item">
            <h1 onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave} className="faq-link item__link" id="faq-link">faq</h1>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;