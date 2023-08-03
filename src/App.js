
import './App.css';
import { Navbar } from './Navbar/Menu-Components/menu';
import { Sales } from './Navbar/Sales-by-country/Sales-by-country-components/img-text';
import { Requirement } from './Navbar/requirement/requirement';
import { Bookings } from './Navbar/Bookings/Bookings-users-revenue-followers';
import { DownImgText } from './Navbar/Down-ImgText/downImg';
import Sidebar from './Material-Dashboard/components/Sidebar';
import { useContext } from 'react';
import { MyColor } from './PopUp/components/PopUp';
import { useState } from 'react';


function App() {
  const [color,setColor]=useState("black")
  return (
    <>
      <MyColor.Provider>
      <div className='Matreial_Dashboard'>
      <Sidebar color={color}/>
      </div>
      </MyColor.Provider>

     <div className="App">  
    <Navbar color={color}/>
    <Sales/>
    <Requirement/>
    <Bookings/>
    <DownImgText/>

    </div>
    </>
   
  );
}

export default App;
