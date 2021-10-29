var busqueda = document.getElementById('buscar');
var table = document.getElementById("tabla").tBodies[0];

buscaTabla = function(){
  texto = busqueda.value.toLowerCase();
  var r=0;
  while(row = table.rows[r++])
  {
    if ( row.innerText.toLowerCase().indexOf(texto) !== -1 )
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda.addEventListener('keyup', buscaTabla);

// -------------------------------


var busqueda1 = document.getElementById('buscar1');
var table1 = document.getElementById("tabla1").tBodies[0];

buscaTabla1 = function(){
  texto1 = busqueda.value.toLowerCase();
  var r=0;
  while(row = table.rows[r++])
  {
    if ( row.innerText.toLowerCase().indexOf(texto1) !== -1 )
      row.style.display = null;
    else
      row.style.display = 'none';
  }
}

busqueda1.addEventListener('keyup', buscaTabla1);
