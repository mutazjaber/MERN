import react from 'react';
import { useParams } from 'react-router-dom';




const Number = (props) => {
    const {input} = useParams();
    return (
        <>
         let displayText;
        if (isNaN(input)) {
        displayText = <h1>The Text is : {input}</h1>
        } else {
        displayText = <h1>The Number is : {input}</h1>
        }
        return displayText;

        </>
    )
}
export default Number;