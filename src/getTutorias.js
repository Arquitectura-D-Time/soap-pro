const axios = require('axios')

const tutorias=async ()=>{
  const endpoint = 'http://localhost:5000/graphql?'

  const query = `{
      allTutorias {
        materia
      }
    }
  `

  const data = await axios.get(endpoint, query)
  console.log(data.data.tutorias)
}


module.exports = {
    tutorias,
  }