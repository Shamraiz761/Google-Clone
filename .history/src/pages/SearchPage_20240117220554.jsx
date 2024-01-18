import React from 'react'
import { useStateValue } from '../context/StateProvider'

function SearchPage() {
    const [{term} , dispatch] = useStateValue()
  return (
    <div>
        
    </div>
  )
}

export default SearchPage