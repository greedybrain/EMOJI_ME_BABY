import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Logout from '../../auth/Logout';
import Logo from './Logo';

const Header = () => {
     const state = useSelector(state => ({
          userData: state.authRed.userData,
          usersSavedEmojisLoading: state.emojisRed.usersSavedEmojisLoading
     }))
     const { userData } = state

     return ( 
          <header>
               <div className="logo-area-header">
                    <Logo />
               </div>
               <ul className="nav-btns">
                    {
                         userData.logged_in ?
                              <>
                                   <li className="favmojis nav-link">
                                        <Link to="#">
                                             <div className="loading-indicator-in-header">
                                                  <span className="heart-moji" role="img" aria-label="heart emoji">❤️</span>
                                                  <span className="save-count">{ userData.user.data.attributes.emojis.length }</span>
                                             </div>
                                        </Link>
                                   </li>
                                   <li className="username nav-link">
                                        <i className="fas fa-user user-icon"></i>
                                        {
                                             userData.user.data.attributes.username.slice(0, 1).toUpperCase() + userData.user.data.attributes.username.slice(1)
                                        }
                                   </li>
                                   <li className="logout-btn nav-link">
                                        <span role="img" aria-label="peace sign emoji">✌</span><Logout />
                                   </li>
                              </>
                              :
                              <>
                                   <li className="login-btn nav-link">
                                        <NavLink activeClassName="active" to="/login"><span role="img" aria-label="woman on computer emoji" className="nav-icon">👩‍💻</span> Login</NavLink>
                                   </li>
                                   <li className="signup-btn nav-link">
                                        <NavLink activeClassName="active" to="/signup"><span role="img" aria-label="woman raising hand" className="nav-icon">🙋🏽‍♂️</span> Signup</NavLink>
                                   </li>
                              </>

                    }
               </ul>
          </header>
     );
}

export default Header;