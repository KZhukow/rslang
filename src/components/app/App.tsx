import { Routes, Route } from 'react-router-dom';
import Layout from '../global-componetns/layout';
import AppMain from '../pages/main/main';
import Notfoundpage from '../pages/notFoundPage';
import AppStatistics from '../pages/statistics/AppStatistics';
import AppTutorial from '../pages/tutorial/tutorial';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AppMain />} />
        <Route path="statistics" element={<AppStatistics />} />
        <Route path="tutorial" element={<AppTutorial />} />
        <Route path="*" element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
}
export default App;
