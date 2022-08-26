import React from 'react';
import './error.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';

class ErrorPage extends React.Component {
  constructor() {
    super(<div />);
  }

  render() {
    return (
      <div id="errorPage">
        <Header />
        <main className="error">
          <h1>Error</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default ErrorPage;
