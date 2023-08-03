import React from 'react';
import '../styles/material.css';


const Material = ({showWindow}) =>{
    
     return (
       <>
         
         <div className="in_contnet_title_div">

           <h5 className="content_title">Material UI Configurator</h5>
           
           <button onClick={showWindow} className="contnetn_show_btn">
             x
           </button>
         </div>
         <div className="content_title_p">See our dashboard options.</div>
       </>
     );
}

export default Material;