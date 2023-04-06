         function hero(){
         fetch('https://superheroapi.com/api.php/106821782309662/242')
         .then(response =>response.json())
         .then(json =>{
           console.log(json.image.url)
         
         }
         )
        }
          const img ='https://www.superherodb.com/pictures2/portraits/10/100/687.jpg'
          document.querySelector('body').innerHTML +=`<img src ="${img}"/>`
         