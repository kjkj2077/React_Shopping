import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'
export const Navbar = () => {
    const menuList = ['여성', 'Divided', '남성'
        , '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    return (
        <div>
            <div>
                <div className='login-button'>
                    <FontAwesomeIcon icon={faUser} />
                    <div><Link to ='/login'> 로그인 </Link></div>
                </div>
            </div>

            <div className='nav-section'>
                <img width={100}
                    src='https://www2.hm.com/hm-logo.png'
                />
            </div>

            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(menu => <li>{menu}</li>)}
                    <div className='search-box'> 
                        <FontAwesomeIcon icon={faSearch} />
                        <input type='text' />
                    </div>
                </ul>  
                {/* <div className='menu-search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' />
                </div> */}
            </div>
        </div>
    )
}
