import react from 'react';
import { useParams } from 'react-router-dom';




const Word = () => {
    const {words,color,BGcolor} = useParams();
    return (
        <>
        <div  style={{width:1000 ,  backgroundColor  : BGcolor}}>
         <h1 style={{color: color}}>the word is :   {words} </h1>
         </div>
        </>
    )
}
export default Word;