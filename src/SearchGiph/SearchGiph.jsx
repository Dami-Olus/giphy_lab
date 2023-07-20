import React, { useState } from 'react'

function SearchGiph({searchGiph}) {
  const [searchTerm, setSearchTerm] = useState('')

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(searchTerm)
  searchGiph(searchTerm)
}

const handleSearchInput = (e) => {
  
  setSearchTerm(e.target.value)
}

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" placeholder='search' onChange={handleSearchInput} value={searchTerm} />
      <button >Submit</button>
    </form>
  )
}

export default SearchGiph