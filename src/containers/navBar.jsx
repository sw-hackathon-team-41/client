import React, {useContext} from 'react';

const NavbarContext = React.createContext();

export default function NavBar() {
  // Access the context values
  const { activeItem, setActiveItem } = useContext(NavbarContext);

  // Handler for updating the active item
  const handleClick = (item) => {
    setActiveItem(item);
  };    
    // const handleClick = (value) => {
    //     MyContext.Provider({ value: value });
    // }    
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
        <div className="flex flex-row basis-2 justify-center h-20 my-3 card rounded-box place-items-center">
            <button className="btn btn-active" title="Home" onClick={() => handleClick("home")}>Home</button>
            <button className="btn btn-active" title="My Feed" onClick={() => handleClick("myfeed")}>My Feed</button>
        </div>
        <hr />

        
    </>
  );
}
