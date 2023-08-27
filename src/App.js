import Header from './components/Header';
import Home from './pages/Home';
import ExplorePathways from './pages/ExplorePathways';
import Techpaths from './pages/Techpaths';
import PreDefinedPath from './components/PreDefinedPath';
import pathwaysData from './data/pathwaysData.json';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/explore" element={<ExplorePathways/>} /> 
          <Route path="/techpaths" element={<Techpaths/>} /> 
          <Route path="/techpaths/:id" element={<PreDefinedPath pathways={pathwaysData.techPaths} />} />
          <Route path="/techpaths" render={() => <Techpaths pathways={pathwaysData.techPaths} />} />
          {/* Other routes */}
        </Routes>
      </Router>

    </>

  );
}

export default App;
