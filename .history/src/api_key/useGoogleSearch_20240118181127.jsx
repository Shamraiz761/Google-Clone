import React from 'react'
import Api_Key from './ApiKey'
function useGoogleSearch(term) {
    const CONTEXT_KEY = "23d32d410f10d4e6b"
    const [data , setData] = React.useState(null)
    React.useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${Api_Key}&cx=${CONTEXT_KEY}&q=tesla`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }
        fetchData()
    }, [term])
  return (
    <div>useGoogleSearch</div>
  )
}

export default useGoogleSearch