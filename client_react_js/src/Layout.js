// import "./styles.css";
import { useState, useEffect } from "react";
import Advantages from "./components/Advantages";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";
import Nav from "./components/Newnav";
import Price from "./components/Pricecard";
export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  return (
    <div className="App">

        <Nav />

      <div style={{paddingTop:"20px"}}> 
      {width < 500 && <Banner2 />}
      {width > 500 && <Banner />}
      </div>
      
      <Advantages />
      <div style={{display:"flex",flexFlow:"wrap",justifyContent:"center"}}>

            <div style={{width:"260px",display:"flex",justifyContent:"center"}}><Price mode="Basic Mode" price="0.00"/></div>
            <div style={{width:"260px",display:"flex",justifyContent:"center"}}><Price mode="Intermediate Mode" price="100.00"/></div>
            <div style={{width:"260px",display:"flex",justifyContent:"center"}}><Price mode="Advance Mode" price="200.00"/></div>

        </div>
      <Footer />
    </div>
  );
}
