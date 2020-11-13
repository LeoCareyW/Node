console.log('client side js file loaded')

fetch('http://puzzle.mead.io/puzzle').then(() => {
  response.json().then((data) => {
    console.log(data)
  })
})
