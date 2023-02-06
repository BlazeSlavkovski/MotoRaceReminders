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
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/raceseries" element={<RaceSeriesPage/>}></Route>
        <Route path="/raceseries/races" element={<SpecificRacePage/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
