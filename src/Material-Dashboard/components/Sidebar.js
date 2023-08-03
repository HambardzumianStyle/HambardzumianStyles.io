
import '../components/Sidebar.css'
import img1 from '../imgs/logo-ct.png'
import img2 from '../imgs/Alice.jpg'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BiSolidDashboard} from 'react-icons/bi'
import { useState } from 'react'
import SlidebarDatamap from  '../arrays/SlidebarDatamap';
import SidebarDatamap2 from '../arrays/SidebarDatamap2';
import { useContext } from 'react'
import {useSelector,useDispatch} from "react-redux";
import { BG_KEY } from "../../PopUp/redux/bgRedux/bgReducer";
import { MyColor } from '../../PopUp/components/PopUp'

export default function Sidebar() {

const [open,setOpen] = useState(false)
const [open1,setOpen1] = useState(false)


let viewBg = useSelector((state) => {
  return state[BG_KEY];
});

let back=useContext(MyColor)
  return (
    
    <div className="dashboard2-main" >
      <div className='logo-div'>
            <img src={img1} className='img1'/> 
            <p className='name'>Otis Admin PRO</p>
        </div>
        <hr className='gic'/>

        <div className={open?'alice-div open item':'alice-div item'} > 
          <div className='alice-div2'> <img src={img2} className='alice'/>
          <p className='alice-p' onClick={() => {setOpen(!open)}}>&nbsp;  Brooklyn Alice <span> <IoIosArrowDown className='cheveron-down toogle-btn'/></span> </p> 
          </div>

           <div className='entamenu ' >
            
             <div  className='items' style={{backgroundColor:viewBg.color} }>
              
                   <p className='ent-p items'>M &nbsp; My Profile</p>  
                            
             </div>

             <div  className='items' style={{backgroundColor:viewBg.color} }>
                          <p className='ent-p items' >S &nbsp; Settings </p>      
             </div>
             <div  className='items'style={{backgroundColor:viewBg.color} }>
                         <p className='ent-p items'>L &nbsp; Logout </p>       
                               </div>

           </div>
      </div>
      <hr className='gic'/>

      <div className={open1?'dashboard open item':'dashboard item'}>
        <p className='dashboard-p' onClick={() => { 
          setOpen1(!open1)
        }} > 
          <BiSolidDashboard className='icon1'/>Dashboard <span> <IoIosArrowDown className='cheveron-down toogle-btn'/></span>
        </p>
        <div className='entamenu'>
        <div  className='items' style={{backgroundColor:viewBg.color} }>
             <p className='ent-p items '> &nbsp; A Analitics</p>                   
        </div>
        <div  className='items'style={{backgroundColor:viewBg.color} }>
        <p className='ent-p items'> &nbsp;S Sales</p>                   
        </div>
             </div>
        
      </div  >
     
      <div>  <p className='d-pages main-titls'>Pages</p></div>
      
     <div className='arr1'><SlidebarDatamap/></div>
     <hr className='gic' />
     <div>  <p className='d-pages main-titls'>Docs</p></div>
     <div className='arr1'><SidebarDatamap2/> </div>
     </div >
     
  )
}