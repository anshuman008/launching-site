import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeroComp from "./HeroComp";
import Intro from "./components/Intro";
import Features from "./components/Features";
import WhatToExpect from "./components/WhatToExpect";
import PriceComp1 from "./components/PriceComp1";
import SimpleSlider from "./components/Slider";
import IntroPage from "./components/IntroPage";
import PianoFeaturePage from "./components/PianoFeaturePage";
import WhatMatters from "./components/WhatMatters";
import Footer from "./components/Footer";
import Products from "./components/Products";

function App() {

  return (
    <>
    
        <IntroPage/>
        <PianoFeaturePage/>
        <Features />
        <WhatMatters/>
      
        <WhatToExpect />
        <Products/>  
        <Footer/>
        {/* <PriceComp1 /> */}
    </>
  );
}

export default App;
