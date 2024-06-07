import Header from './components/Header';
import Home from './pages/Home';
import ExplorePathways from './pages/ExplorePathways';
import Techpaths from './pages/Techpaths';
import PreDefinedPath from './components/PreDefinedPath';
import pathwaysData from './data/pathwaysData.json';
import PathInfoPage from './pages/PathInfoPage';
import Undefined from './pages/Undefined';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import UndefinedPathInfoPage from './components/DefinedPath';
import About from './pages/About'
import History from './pages/History'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/explore" element={<ExplorePathways/>} /> 
          <Route path="/techpaths" element={<Techpaths/>} /> 
          <Route path="/build" element={<Undefined/>} /> 
          <Route path="/undefinedpath" element={<UndefinedPathInfoPage/>} /> 

          <Route path="/techpaths/:id" element={<PreDefinedPath pathways={pathwaysData.techPaths} />} />
          <Route path="/pathinfo/:id" element={<PathInfoPage pathways={pathwaysData.techPaths} />} />
          <Route path="/techpaths" element={ <Techpaths pathways={pathwaysData.sciencePaths}/>} />
          <Route path="/sciencepaths" element ={<Techpaths pathways={pathwaysData.sciencePaths} />} />
          <Route path="/tech" element ={<Techpaths pathways={pathwaysData.techPaths} />} />
          <Route path="/art" element ={<Techpaths pathways={pathwaysData.artPaths} />} />
          <Route path="/maths" element ={<Techpaths pathways={pathwaysData.mathsPaths} />} />
          <Route path="/engineering" element ={<Techpaths pathways={pathwaysData.engineeringPaths} />} />
          <Route path="/about" element ={<About />}/>
          <Route path="/history" element ={<History />}/>


          
          {/* Other routes */}
        </Routes>
      </Router>
<Footer/>
    </>

  );
}

export default App;
