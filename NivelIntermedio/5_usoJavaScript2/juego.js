document.write("<h1>Hola mundo</h1>");
		alert("hola");

		var usuarioElige = prompt("¿Piedra, papel o tijera?");
		var computadoraElige = Math.random();

		if(computadoraElige<=0.3333){
			computadoraElige = "piedra";
		}
		else if(computadoraElige>=0.67){
			computadoraElige="tijera";
		}
		else{
			computadoraElige="papel";
		}

		function comparar(eleccion1,eleccion2){
			if(eleccion1==eleccion2){
				alert("Empate!!!");
			}
			else if(eleccion1==="piedra"){
				if(eleccion2==="tijera"){
					alert("Tu: "+eleccion1+"compu:"+eleccion2+"\n\n ganaste");
				}
				else{
					alert("tu:"+eleccion1+"compu:"+eleccion2"\n\n perdiste");
				}
			}
			else if(eleccion1==="tijera"){
				if(eleccion2==="piedra"){
					alert("tu:"+eleccion1+"compu:"+eleccion2+"\n\n Perdiste");
				}
				else{
					alert("tu:"+eleccion1+"compu:"+eleccion2+"\n\n Ganaste");
				}
			}	

			else if(eleccion1==="papel"){
				if(eleccion2==="piedra"){
					alert("tu:"+eleccion1+"compu:"+eleccion2+"\n\n ganaste");
				}
				else{
					alert("tu:"+eleccion1+"compu:"+eleccion2+"\n\n perdiste");
				}
				else{
					alert("No es una opcion válida");
				}
		}
	}

	comparar(usuarioElige,computadoraElige);