import { sidebarData } from './sidebarData'
import SidebarItem from '../arrays/SidebarItem'

export default function SlidebarDatamap() {

  return (
    <div className='sidebar'>
      {sidebarData.map((el,index) => <SidebarItem key={index} elm ={el}/> )}
    </div>
  )
}