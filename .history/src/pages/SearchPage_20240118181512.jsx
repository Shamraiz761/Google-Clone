import React from 'react'
import { useStateValue } from '../context/StateProvider'

function SearchPage() {
    const [{term} , dispatch] = useStateValue()
    const {data} = useGoogleSearch(term)
console.log(datq);
  return (
    <div>
        <h1>{term}</h1>
    </div>
  )
}

export default SearchPage