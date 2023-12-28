	document.addEventListener("DOMContentLoaded", function() {
		// Seletor do botão
		var franquiasButton = document.getElementById("franquias-button");
		var ilimitadosButton = document.getElementById("ilimitados-button");
	
		var textoFranquia = document.getElementById("franquia");
		var textoIlimitado = document.getElementById("ilimitado");
	
		// Função para mostrar/ocultar seções
		function showSection(section) {
			if (section === "franquias") {
				// Mostrar a seção de franquias
				textoFranquia.style.display = "block";
				textoIlimitado.style.display = "none";
			} else if (section === "ilimitados") {
				// Mostrar a seção de ilimitados
				textoFranquia.style.display = "none";
				textoIlimitado.style.display = "block";
			}
		}
	
		// Manipular clique dos botões
		franquiasButton.addEventListener("click", function() {
			showSection("franquias");
		});
	
		ilimitadosButton.addEventListener("click", function() {
			showSection("ilimitados");
		});
		        // Inicialmente, mostramos a seção "Mais vendidos" (padrão)
				showSection('franquia');
	});
