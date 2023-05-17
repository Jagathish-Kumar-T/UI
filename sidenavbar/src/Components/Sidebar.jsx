import React,{useState} from 'react'
import {FaTh,FaUserAlt,FaRegChartBar,FaCommentAlt,
  FaShoppingBag,FaThList,FaBars
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
const Sidebar = ({children}) => {
  const menuItems = [
    {
     path:"/",
     name:"Dashboard",
     icon:<FaTh/>
    },
    {
      path:"/about",
      name:"About",
      icon:<FaUserAlt/>
     }, 
     {
      path:"/analytics",
      name:"Analytics",
      icon:<FaRegChartBar/>
     },
     {
      path:"/comment",
      name:"Comment",
      icon:<FaCommentAlt/>
     },
     {
      path:"/product",
      name:"Product",
      icon:<FaShoppingBag/>
     },
     {
      path:"/productlist",
      name:"Product List",
      icon:<FaThList/>
     },
  ]
  const[isOpen,setIsOpen] = useState(false);
  const toggle=()=>setIsOpen(!isOpen);
  return (
    <div className='container'>
      <div className="sidebar" style={{width: isOpen ? "300px" : "60px"}}>
        <div className="top_section">
          <h1 className='logo' style={{display: isOpen ? "block" : "none"}}>Logo</h1>
          <div className="bars" style={{marginLeft: isOpen ? "100px" : "0px",cursor:"pointer"}}><FaBars onClick={toggle}/>
          </div>
        </div>
      {
      menuItems?.map((data,idx)=>
      <NavLink to={data.path} key={idx} className="link" activeclassName="active">
      <div className="icon">{data.icon}</div>
      <div className="link_text" style={{display: isOpen ? "block" : "none"}}>{data.name}</div>
      </NavLink>)
      }
      </div>
      <main>{children}</main>
      </div>
  )
}

export default Sidebar