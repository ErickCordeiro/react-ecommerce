import React, { useState } from "react"
import { Link } from "react-router-dom"
import Categories from "../../components/MainPage/Categories"

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const [showCategory, setShowCategory] = useState(false)

  const handleShowCategories = () => {
    setShowCategory(!showCategory);
  }

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex' style={{cursor: 'pointer', position: 'relative'}} onClick={handleShowCategories}>
            <span class='fa-solid fa-border-all'></span>
            <h4>
              Todas as Categorias <i className={showCategory? 'fa fa-chevron-up' : 'fa fa-chevron-down'}></i>
            </h4>
          </div>

          {showCategory &&
            <Categories />
          }

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li>
                <Link to='/'>Início</Link>
              </li>
              <li>
                <Link to='/produtos'>Lista de Produtos</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
