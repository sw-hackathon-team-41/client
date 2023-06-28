import React from 'react';

function NavBar() {
  return (
    <>
        <div className="flex flex-col w-full">
            
            <div className="flex flex-row">
                <div className="basis-2/5    flex items-center">
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
            


            <hr />

            <div className="grid h-10 my-3 card rounded-box place-items-center">
                <div className="tabs">
                    <a className="tab-lg tab-bordered mr-20">Tab 1</a>
                    <a className="tab-lg tab-bordered tab-active">Tab 2</a>
                </div>
            </div>
            
            <hr />

        </div>
    </>
  );
}

export default NavBar;
