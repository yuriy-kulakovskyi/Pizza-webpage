import React from 'react';
import './Home.css';
import arrow from './img/arrow.png';
import arrowLight from './img/Arrow-light.png';
import Cart from '../Cart/Cart';

class Home extends React.Component {
  render() {
    return (
      <section className='Home background'>
        <main className="home__main">
          <div className="main__logo"></div>
          <h1 className="main__info font">
            Найсмачніші суші і піца <br /> у твоєму місті
          </h1>
          <p className="main__subtitle transparented">
            обирайте страви, які вам подобаються <br /> про все інше ми подбаємо
          </p>
        </main>
  
        <footer className="home__footer">
          <div className="footer__info-wrap">
            <div className="arrow-down" id="arrow-changeSection">
              <div>
                <img src={arrow} alt="arrow-down" id="arrow-down" />
                <img src={arrowLight} alt="arrow-down" id="arrow-down-light" />
              </div>
            </div>
            <Cart />
          </div>
        </footer>
      </section>
    );

  }
}

export default Home;