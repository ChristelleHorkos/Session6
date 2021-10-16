function test()
{
    fetch('https://protected-stream-92531.herokuapp.com/data')
  .then(response => response.json())
  .then(json => console.log(json))
}