import react, { useState } from 'react';


const MessageForm = (props) => {
    const [color, setColor] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(color);
    };





    return (
        <form onSubmit={handleSubmit}>
            <h1>Add Box Color</h1>
            <input type="text" name="" id="" onChange={(e) => setColor(e.target.value)} value={color} />

            <input type="submit" value="Add Box" />
        </form>
    );
};

export default MessageForm;