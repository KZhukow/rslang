import React from 'react';
import './glossary.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';

class GlossaryPage extends React.Component {
  constructor() {
    super(<div />);
  }

  render() {
    return (
      <div id="glossaryPage">
        <Header />
        <main className="glossary">
          <h1>Glossary</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default GlossaryPage;
