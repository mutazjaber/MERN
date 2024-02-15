import react from 'react';
import { useParams } from 'react-router-dom';




const Number = (props) => {
    const {input} = useParams();
    return (
        <>
        {
            isNaN(input) ? <h1>The Text is : {input}</h1> : <h1>The Number is : {input}</h1>
        } 

        </>
    )
}
export default Number;