document.getElementById("boton").addEventListener("click",clik);

function clik()
{
  var encabezado=document.getElementById('encabezado');



  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
  xhttp.send();
  xhttp.onreadystatechange = function(){
    
    if(this.readyState==4 && this.status==200)
    {
  
      let datos = JSON.parse(this.responseText);
      for(var i=0;i<document.getElementById("cant_datos").value;i++)
      {
        document.getElementById("contenido").innerHTML+=
        `<tr>
          <td>Hola${datos[i].id}</td>
          <td>${datos[i].title}</td>
          <td> <img src="${datos[i].url}"></td>
        </tr>`;
      }
    }
  }
}
