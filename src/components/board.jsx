import React from "react";
import Card from "./card";

export default function Board({value}) {
    function getData() {
        return
    }
    return (
        <>
        <div className="grid gap-4 grid-cols-1 mb-16">
            <p className="text-3xl font-bold">{value}</p>
            <div className="flex flex-row gap-4 border-t border-black">
                <Card 
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
                <Card
                    image="/images/test_hub.png"
                    title="Example Card"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                />
            </div>            
        </div>
        </>
    );
}