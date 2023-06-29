import React from 'react';
import { useState } from 'react';

import {
    NavLink,
    NavMenu,
} from '../components/navElements';


export default function NavBar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
      // 로그아웃 처리 로직 작성
      setIsLoggedIn(false);
    };
  

    return (
        <>
          <div className='grid grid-rows grid-'>
            <div className="flex flex-row basis-2 justify-center w-full h-auto my-3 card rounded-box">
              <img src="images/logo.png" className='h-20 w-auto justify-center'></img>
            </div>
            <div className="flex-row w-full h-10 card place-content-end">
              {/* <button className="btn btn-sm">Join us</button> */}
              {/* <button className="btn btn-sm">Log In</button> */}
              {isLoggedIn ? (
                <NavLink to='/' actiestyle="false" className="btn btn-sm mr-2" onClick={handleLogout}>
                  LOGOUT
                </NavLink>
              ) : (
                <>
                  <NavLink to='/signup' actiestyle="false" className="btn btn-sm mr-2">
                    SIGNUP
                  </NavLink>
                  <NavLink to='/login' actiestyle="false" className="btn btn-sm">
                    LOGIN
                  </NavLink>
                </>
              )}
            </div>
          </div>
          <div>
            <hr />
            <div className="flex flex-row basis-2 justify-center h-auto w-full my-3 card rounded-box place-items-center bg-white">
              <NavMenu>
                <NavLink to='/'>
                  HOME
                </NavLink>
                <NavLink to='/myfeed'>
                  MY FEED
                </NavLink>
                <NavLink to='/textform' activeStyle={{color : "red"}}>
                  WRITE
                </NavLink>
                <NavLink to='/about'>
                  ABOUT
                </NavLink>
              </NavMenu>
            </div>
            <hr />
          </div>
        </>
      );
}
