import React from 'react';
import {
    NavLink,
    NavMenu,
    } from '../components/navElements';


export default function NavBar() {
  return (
    <>
        <div className='grid grid-cols-1 grid-rows-3'>
            <div className="flex flex-row basis-2 justify-center w-full h-auto my-3 card rounded-box">
                <p className="font-bold text-4xl text-green-500 absolute place-content-center place-items-center mt-4">퍼스널TEA</p>
            </div>
            <div className="flex-row w-full h-auto card place-content-end">
                <button className="btn btn-sm">Join us</button>
                <button className="btn btn-sm">Log In</button> 
            </div>
            <div>
            <hr />
            <div className="flex flex-row basis-2 justify-center h-auto w-full my-3 card rounded-box place-items-center">
                <NavMenu>
                    <NavLink to='/' activestyle="true" activeClassName='active'>HOME</NavLink>
                    <NavLink to='/myfeed' actiestyle="false">MY FEED</NavLink>
                    <NavLink to='/about' actiestyle="false">ABOUT</NavLink>
                </NavMenu>
                {/* <button className="btn btn-active" title="Home">Home</button>
                <button className="btn btn-active" title="My Feed">My Feed</button> */}
            </div>
            <hr />
        </div>
        </div>
    </>
  );
}
