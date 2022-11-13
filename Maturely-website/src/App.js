import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PreTeen from './pages/PreTeen';
import Teen from './pages/Teen';
import Adult from './pages/Adult';
import Home from './pages/Home';
// import SimpleForm from './components/HeroSection/SimpleForm';
import Container from './components/Container/Container';
// import GoToTop from './GoToTop';
function App() {
  return (
    <div className="App overflow-hidden bg-[#081730]">
         <Router>
        <Routes>
          <Route path="/preteen" element={<PreTeen/>} >
          </Route>
          <Route path="/teen" element={<Teen/>} >
          </Route>
          <Route path="/adult" element={<Adult/>} >
          </Route>
          {/* <Route path="/simpleform">
            <SimpleForm />
          </Route> */}
          <Route path="/" exact element={<Home/>}>
          </Route>
          <Route path="/curriculum/:module_id" element={<Container/>}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
