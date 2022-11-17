import React from 'react'
import memeData from './data';

const Meme = ()=>{
    const [memeUrl,setMemeUrl] = React.useState("");
    
    function handleClick(event) {
        event.preventDefault();
        setMemeUrl(memeData['data']['memes'][randomNumber()].url);
    }
    
    function randomNumber(){
        let rNum = Math.floor(Math.random()*100+1);
        return rNum;
    }
    return(
        <div className='meme-container'>
            <form>
                <div className='input-wrapper'>
                    <input type='text' placeholder='top text'/>
                    <input type='text' placeholder='bottom text'/>
                </div>
                <button onClick={handleClick} className='form-btn'>Get a new meme Image</button>
            </form>
            <div className='image-wrapper'>
                {memeUrl && <img src={memeUrl} alt="alt" />}
            </div>
        </div>
    )
}
export default Meme