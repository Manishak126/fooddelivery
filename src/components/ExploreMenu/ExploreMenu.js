import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'
const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Explore our menu</h1>
        <p className='explore-menu-text'>Dive into a world of flavors with our carefully crafted menu. Whether you're craving a hearty meal, a light snack, or a sweet treat, we have something to satisfy every palate. Browse through our diverse selections and choose your favorite dishes to enjoy a delightful dining experience. </p>

        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="menuItem" />
                        <p>{item.menu_name}</p>
                    </div>
                )

            })}
        </div>
        <hr />
      
    </div>
  )
}

export default ExploreMenu

