function test()
{
    fetch('https://protected-stream-92531.herokuapp.com/data')
  .then(response => response.json())
  .then(json =>{
      var ul=document.getElementById("ul01")
   json.forEach(element => {
       var li=document.createElement("li")
       li.innerHTML=element.name
       ul.appendchild(li)
   });
    
    
    
  })
}