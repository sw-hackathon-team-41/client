import React from "react";
import Home from "./home";
import MyFeed from "./myFeed";

export default function Contents() {
    const MyContext = React.createContext();
    return (
        <>
        <MyContext.Consumer>
            {(value) => (
                <div className="content">
                    {{value} === 'home' && <Home />}
                    {{value} ==='myFeed' && <MyFeed />}
                </div>
            )}
        </MyContext.Consumer>
        
        </>
    )
}