import React, { useState } from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import '../components/Sidebar.css';






export default function SidebarItem({elm}) {
    const [opend,setOpend] = useState(true)
    const [opench,setOpench] = useState(false)

  if(elm.childrens){
    return (
<div className={opend?'sidebar-opened open item':'sidebar-opened item '}> 
      <div className='main-titls'> 
      <p onClick={() => setOpend(!opend)} className='main-titls'>
      {elm.title} <IoIosArrowDown className='cheveron-down toogle-btn'/></p>
      </div >
   
        
          {/* <div className={opench?'sidebar-opened1 open ':'sidebar-opened1 '} onClick={()=>setOpench(!opench) } > */}
            <div className={opench?'entamenu2 opend':'entamenu2non'}> 
               
               {elm.childrens.map((ch,index) =>  <SidebarItem key={index} elm={ch} onClick={() => setOpench(!opench)} /> )}
               </div> 
              
       </div>
        
    )
    
  } else return (
    <div className={opend?'sidebar-opened open item':'sidebar-opened  '} > 
      <div className='main-titls'> 
      <p className='items'>
      {elm.title }</p>
      </div>
     </div> 
  )

}