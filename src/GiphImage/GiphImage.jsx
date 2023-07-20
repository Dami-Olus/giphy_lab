import React from 'react'
const images = 'https://media0.giphy.com/media/3o6Zt481isNVuQI1l6/giphy-loop.mp4?cid=4279867a5wybjpgwor8xteibic7fgoa2afafgveufouzw5yh&ep=v1_gifs_search&rid=giphy-loop.mp4&ct=g'
function GiphImage({image}) {
  return (
    <>
    <p>This is the image</p>
     <img src={image} alt="image" />
    </>
   
  )
}

export default GiphImage