import React from 'react'
// import memeData from './data';

const Meme = ()=>{
    
    const [memeData,setMemeData] = React.useState([])
    const [meme,setMeme] = React.useState({
            topText:"",
            bottomText:"",
            memeUrl:""
        }
    );
    React.useEffect(()=>{
        
        fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(result=>setMemeData(result.data.memes))
    },[])
    function handleChange(e){
        const {name,value} = e.target;
        console.log(name,value);
        setMeme((prevMeme)=>{
            return({
                ...prevMeme,
                [name]:value
            })
        })
        
    }
    function handleClick(event) {
        event.preventDefault();
        setMeme((prevMeme)=>{
            return (
                {
                    ...prevMeme,
                    memeUrl : memeData[randomNumber()].url
                }
            )
        });
    }
    
    function randomNumber(){
        let rNum = Math.floor(Math.random()*100+1);
        return rNum;
    }
    return(
        <div className='meme-container'>
            <form>
                <div className='input-wrapper'>
                    <input type='text' placeholder='top text' name='topText' value={meme.topText} onChange={handleChange}/>
                    <input type='text' placeholder='bottom text' name='bottomText' value={meme.bottomText} onChange={handleChange}/>
                </div>
                <button onClick={handleClick} className='form-btn'>Get a new meme Image</button>
            </form>
            <div className='image-wrapper'>
                {meme.memeUrl && <img src={meme.memeUrl} alt="alt" />}
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}
export default Meme