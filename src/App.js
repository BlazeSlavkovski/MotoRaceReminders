import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import RaceSeriesPage from './Pages/RaceSeriesPage/RaceSeriesPage';
import SpecificRacePage from './Pages/SpecificRacePage/SpecificRacePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/raceseries" element={<RaceSeriesPage/>}/>
        <Route path="/raceseries/races" element={<SpecificRacePage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
