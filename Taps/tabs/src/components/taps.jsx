import React, { useState } from "react";

    
    const Taps = props => {
        const arr = ["Tap 1", "Tap 2", "Tap 3"];
        const [message, setMessage] = useState("")
            const onClickHandler = (e, value) => {
                setMessage (value + " content is showing here. ");
            }
            return (
                <>
                <div>
                    {arr.map( 
                (item, index) => {
                    return <button key={index} onClick={ (e) =>
                        onClickHandler(e, item) }>{ item }</button>
                })};
                </div>
                <div>
                    { message }
                </div>
                
                </>
            )
            
        }
        
        

export default Taps;