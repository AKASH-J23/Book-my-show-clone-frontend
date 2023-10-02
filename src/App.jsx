import DefaultHOC from "./HOC/Default.HOC.jsx";
import HomePage from "./Pages/Home.page.jsx";

import Herocarousel from "./components/HeroCarousel/Herocarousel.component.jsx";
import Navbar from "./components/Navbar/Navbar.component.jsx";
import Movie from "./Pages/Movie.page.jsx";
function App() {
  return(
    <>
      <DefaultHOC path='/' exact element={<Navbar/>} />
      <DefaultHOC path='/' exact element={<Herocarousel />} />
      <DefaultHOC path='/' exact element={<HomePage />} />
      <DefaultHOC path='/movie/:id' exact element={<Movie />} />
    </>
  );
}

export default App;
