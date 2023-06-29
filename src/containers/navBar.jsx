import React from 'react';
import {
    NavLink,
    NavMenu,
    } from '../components/navElements';


export default function NavBar() {
  return (
    <>
        <div className="flex flex-col w-full bg-white">
            
            <div className="flex flex-row">
                <div className="basis-2/5 flex items-center">
                    <div className='mr-2'>About</div>
                    <div className=''>contact</div>
                </div>

                <div className="grid h-20 card rounded-box place-items-center ">
                    <div className="flex items-center font-bold text-4xl text-green-500">퍼스널TEA</div>
                </div>
                
                <div className="basis-1/6">
                    <button className="btn-xs btn-outline basis-1/6">Join us</button>
                    <button className="btn-xs btn-outline basis-1/6">Log In</button>
                </div>
            
            </div>
        </div>            
        <hr className='bg-white'/>
        <div className="flex flex-row basis-2 justify-center h-20 my-3 card rounded-box place-items-center bg-white">
            <NavMenu>
                <NavLink to='/' activestyle="true" activeClassName='active'>홈</NavLink>
                <NavLink to='/myfeed' actiestyle="false">나의 피드</NavLink>
                <NavLink to='/textForm' actiestyle="false">글쓰기</NavLink>
            </NavMenu>
            {/* <button className="btn btn-active" title="Home">Home</button>
            <button className="btn btn-active" title="My Feed">My Feed</button> */}
        </div>
        <hr className='bg-white'/>

        
    </>
  );
}
