import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {

    axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, {
      name: "Tatang Da Silva",
      email: "2010631170126@student.unsika.ac.id"
    })
      .then(response => {
        console.log("Success post data", response.data)
      })
      .catch(error => {
        console.log("Opss something went wrong", error)
      })
  }, [])

  console.log(data)
  return (
    <div>
    </div>
  )
}

export default App

