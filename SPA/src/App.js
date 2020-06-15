import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <nav>
              <ul>
                {/*<li><a href="/">Start</a></li>
                <li><a href="/news">Aktualności</a></li>
                <li><a href="/contact">Kontakt</a></li>*/}

                <li><Link to="/">Start</Link></li>
                <li><Link to="/news">Aktualności</Link></li>
                <li><Link to="/contact">Kontakt</Link></li>
              </ul>
            </nav>
          </header>
          <section>
            Strona - witaj
      </section>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
