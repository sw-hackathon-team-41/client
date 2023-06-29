import React from 'react';

export default function NavBar() {
    const MyContext = React.createContext();

    function handleClick(value) {
        console.log(value);
        MyContext.Provider({ value: value });
      };
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
        </div>            
        <hr />
        <button  className="btn-xs" title="Home" onClick={() => handleClick("home")}></button>
        <button  className="btn-xs" title="My Feed" onClick={() => handleClick("myfeed")}></button>
        <div className="grid h-10 my-3 card rounded-box place-items-center">
        </div>
        <hr />

        
    </>
  );
}
