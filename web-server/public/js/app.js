console.log('client side js file loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data)
  })
})

const getWeather = async () => {
  const response = await fetch('http://api.weatherstack.com/current?access_key=60aa268da685d9f91362657ffd6f5ace&query=London')
    if (response.status === 200) {
      const data = await response.json()
      console.log(data.location, data.current)
    } else {
      throw new Error('Could not find location')
    }
}

getWeather()

// remember to call your functions
