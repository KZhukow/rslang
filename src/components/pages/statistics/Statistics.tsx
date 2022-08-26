import React from 'react';
import './statistics.css';
import Header from '../../global-componetns/header/Header';
import Footer from '../../global-componetns/footer/Footer';

class StatisticsPage extends React.Component {
  constructor() {
    super(<div />);
  }

  render() {
    return (
      <div id="statisticsPage">
        <Header />
        <main className="statistics">
          <h1>Statistics</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default StatisticsPage;
