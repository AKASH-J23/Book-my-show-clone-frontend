// import {Routes} from 'react-router-dom'
//Layout
// import DefaultLayout from "./layouts/default.layout.jsx";

//Components
// import Navbar from "./components/Navbar/Navbar.component.jsx";
//HOC
import DefaultHOC from "./HOC/Default.HOC.jsx";
import Temp from "./Temp.jsx";
import Herocarousel from "./components/HeroCarousel/Herocarousel.component.jsx";
import Navbar from "./components/Navbar/Navbar.component.jsx";

function App() {
  return(
    <>
      <DefaultHOC path='/' exact element={<Navbar/>} />
      <DefaultHOC path='/' exact element={<Herocarousel />} />
    </>
  );
}

export default App;
