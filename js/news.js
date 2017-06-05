//numero de archivo
var archivo=1;



$(document).ready(function() {


	$(window).scroll(function() {
		if ($(document).height() - $(window).height()  == $(window).scrollTop()) {					
			cargarNoticias();
		}
	});
	
	$("#cargar").click(function(){
			cargarNoticias();
	});
	  

});

//metodo que si lo ejecutamos cargara más noticias si no hemos alcanzado el limite de noticias que tenemos en los ficherosJSON.
function cargarNoticias(){
    //metodo para leer el json
    if(archivo<3){
    $.getJSON( "https://rawgit.com/polinasvetlinova/noticias/master/data/"+archivo+".json", function( jsonObject ) {
        insertarNoticia( jsonObject );
    });
    archivo++;
	}
}

//metodo de insertar la noticia dentro del HTML usando el objeto noticia.
function insertarNoticia(json){
   $.each(json, function(i,noticia){
$("#noticias").append("<hr><div id='imgDiv'><img class='img-thumbnail' id='imgNoticia' src="+noticia.img+"alt="+noticia.alt+"></div><div id='news' class='container' id='cuerpo'><a href='#'><h3>"+noticia.title+"</h3></a><p>"+noticia.desc+"</p><footer id='date' class='small'>"+noticia.date+"</footer></div>");
    })
}
