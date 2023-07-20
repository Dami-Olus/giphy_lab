import { useEffect, useState } from "react";


import "./App.css";
import GiphImage from "./GiphImage/GiphImage";
import SearchGiph from "./SearchGiph/SearchGiph";

function App() {
  const [search, setSearch] = useState('eagle')
  const [giphImg, setGiphImg] = useState('')

 const handleSearch = (searchTerm) => {
  setSearch(searchTerm)
 }


  useEffect(() => {
    const giphyUrl = `http://api.giphy.com/v1/gifs/search?api_key=${import.meta.env.VITE_GIPHY_API_KEY}&q=${search}`

    async function getGiphy(){
      try {
        const apiResponse = await fetch(giphyUrl)

        const data = await apiResponse.json()

        console.log(data.data[0].images.fixed_width_small.url)

        setGiphImg(data.data[0].images.fixed_width_small.url) //
  
      } catch (e) {
        console.log(e, 'error from API call')
      }
    }

    getGiphy()
    
    }, [search]);

    // 

  return (
    <>
    <p>The user is searching for {search}</p>
      <SearchGiph searchGiph={handleSearch} />
      <GiphImage image={giphImg} />
    </>
  );
}

export default App;
