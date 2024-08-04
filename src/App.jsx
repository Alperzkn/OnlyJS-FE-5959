import "./sass/style.scss";
import { Features } from "./sections/features/Features";
import { Footer } from "./sections/footer/Footer";
import { Hero } from "./sections/hero/Hero";
import { Navbar } from "./sections/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Footer></Footer>
    </>
  );
}

export default App;
