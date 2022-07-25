import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons'

export const Navbar = ({ setAuth, auth }) => {
    const menuList = ['Woman', 'Man', 'Infant', 'Child', 'Sale'];
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate()
    const gotToLogin = () => {
        navigate('/login')
    }
    const goToHome = () => {
        navigate('/')
    }
    const search = (e) => {
        if (e.key == "Enter") {
            let keyword = e.target.value
            console.log(keyword)
            navigate(`/?q=${keyword}`)
        }
    }
    const clickSearch = (searchValue) => {
        navigate(`/?q=${searchValue}`)
    }
    return (
        <div>
            <div>{auth ? ( //true면 
                <div>
                    <div className='login-button' onClick={() => setAuth(false)}>
                        <FontAwesomeIcon icon={faUser} className='login-icon' />
                        <div>Logout</div>
                    </div>
                </div>

            ) : ( //false면
                <div>
                    <div className='login-button' onClick={gotToLogin}>
                        <FontAwesomeIcon icon={faUser} className='login-icon' />
                        <div>Login</div>
                    </div>
                </div>
            )}
            </div>

            <div className='nav-section' onClick={goToHome}>
                <img width={100}
                    src='https://www2.hm.com/hm-logo.png'
                />
            </div>
   
            <div ßclassName='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(menu => <li>{menu}</li>)}
                    <span class="tooltiptext">not made yet</span>
                    <div className='search-box'>
                        <FontAwesomeIcon icon={faSearch} className='search-icon' onClick={() => clickSearch(searchValue)} />
                        <input type='text' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onKeyPress={(e) => search(e)} />
                    </div>
                </ul>
            </div>
        </div>
    )
}
