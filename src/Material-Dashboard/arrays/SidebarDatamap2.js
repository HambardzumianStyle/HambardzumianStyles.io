import SidebarItem from "./SidebarItem"
import { sidebarData2 } from "./sidebarData2";
import SidebarItem2 from "./SidebarItem2";
import React from 'react'

export default function SidebarDatamap2() {
    
  return (
    <div className="sidebar"> {sidebarData2.map((elements,index) => <SidebarItem2 elm2={elements} key={index} />) } </div>
  )
}