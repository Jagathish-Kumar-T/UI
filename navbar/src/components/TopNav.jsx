import React,{useState} from 'react'
import {NavLink} from 'react-router-dom';
import {FaBars} from 'react-icons/fa'
const TopNav = () => {
    const menuData = [
        {
         name:"Home",
         path:"/"
        },
        {
            name:"About",
            path:"/about"
        }, 
        {
            name:"Contact",
            path:"/contact"
        },
        {
            name:"Other",
            path:"/other"
        },
        {
            name:"Service",
            path:"/service"
        }
    ];
    const[show,setShow] = useState(false);
    const toggle=()=>setShow(!show)
  return (
    <div className='nav'>
        <div className="bars">
            <FaBars onClick={toggle}/>
        </div>
      <label className='logo'>Navbar</label>  
      <div className='menu' style={{left : show ? "-100%" : "0"}}>
        {
        menuData?.map((data,idx)=>
        <NavLink to={data.path} key={idx}>
       <div className="list_item">{data.name}</div>
        </NavLink>
        )
        }

      </div>
    </div>
  )
}

export default TopNav