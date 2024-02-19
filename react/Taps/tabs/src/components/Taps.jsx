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
                (value) => {
                    return <button style={{ margin : "20px"}} key={value} onClick={ (e) =>
                        onClickHandler(e, value) }>{ value }</button>
                })}
                </div>
                <div>
                    { message }
                </div>
                </>
            )
            
        }
        
        

export default Taps;