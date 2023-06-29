import React from 'react';
import {
    NavLink,
    NavMenu,
    } from '../components/navElements';


export default function NavBar() {
  return (
    <>
    <div className='grid grid-rows grid-'>
        <div className="flex flex-row basis-2 justify-center w-full h-auto my-3 card rounded-box">
            <img src="images/logo.png" className='h-20 w-auto justify-center'></img>
        </div>
        <div className="flex-row w-full h-10 card place-content-end">
            {/* <button className="btn btn-sm">Join us</button> */}
        {/* <button className="btn btn-sm">Log In</button>  */}
        <NavLink to='/signup' actiestyle="false" className="btn btn-sm">SIGNUP</NavLink>
        <NavLink to='/login' actiestyle="false" className="btn btn-sm">LOGIN</NavLink>
        </div>
    </div>
    <div>
            <hr />
            <div className="flex flex-row basis-2 justify-center h-auto w-full my-3 card rounded-box place-items-center bg-white">
                <NavMenu>
                    <NavLink to='/' activestyle="true" activeClassName='active'>HOME</NavLink>
                    <NavLink to='/myfeed' actiestyle="false">MY FEED</NavLink>
                    <NavLink to='/textform' actiestyle="false">WRITE</NavLink> 
                    <NavLink to='/about' actiestyle="false">ABOUT</NavLink>
                </NavMenu>
            </div>
            <hr />
        </div>
    </>
  );
}
