import './App.scss';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from './Pages/HomePage/HomePage';
import NotFound from './Pages/NotFound/NotFound';
import RaceSeriesPage from './Pages/RaceSeriesPage/RaceSeriesPage';
import SpecificRacePage from './Pages/SpecificRacePage/SpecificRacePage';
import FollowingPage from './Pages/FollowingPage/FollowingPage';
import FormulaOne from './Pages/FormulaOne/FormulaOne';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/raceseries" element={<RaceSeriesPage/>}/>
        <Route path="/raceseries/formulaone" element={<FormulaOne/>}/>
        <Route path="/raceseries/formulaone/:name" element={<SpecificRacePage/>}/>
        <Route path="/following" element={<FollowingPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
