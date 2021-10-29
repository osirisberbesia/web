window.onload = loadContent;

const pag = ['bnb-meta','maternidad','tutoriales','rrss','rrss1','rrss2']

function loadContent () {

    pag.forEach(ident=>{ 


    // (A) FETCH "DUMMY.HTML"
    fetch("../sub_pages/"+ident+".html")
   
    // (B) RETURN THE RESULT AS TEXT
    .then((result) => {
      if (result.status != 200) { throw new Error("Servidor no responde"); }
      return result.text();
    })
   
    // (C) PUT LOADED CONTENT INTO <DIV>
    .then((content) => {
      document.getElementById(ident).innerHTML = content;
    })
   
    // (D) HANDLE ERRORS - OPTIONAL
    .catch((error) => { document.getElementById('__error').innerHTML = 'No se puede mostrar: ' + ident+'.html'; });




    })
    

  }

  