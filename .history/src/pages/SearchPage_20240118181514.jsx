import React from 'react'
import { useStateValue } from '../context/StateProvider'

function SearchPage() {
    const [{term} , dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)
console.log(data);
  return (
    <div>
        <h1>{term}</h1>
    </div>
  )
}

export default SearchPage