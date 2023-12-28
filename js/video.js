			const videos = ["video/mulher_telefone1.mp4", "video/garota_telefone.mp4", "video/homem_telefone.mp4", "video/mulher_telefone.mp4", "video/homem_business.mp4"];
			let currentVideoIndex = 0;
				const videoElement = document.getElementById("video-background");
				const videoUnavailableElement = document.getElementById("video-indisponivel");

				// Função para trocar o vídeo com efeito de fade
				function changeVideo() {
				currentVideoIndex = (currentVideoIndex + 1) % videos.length;

				// Verifique se o usuário está em um dispositivo móvel
				// Verifique a largura da janela do navegador
				if (window.innerWidth < 768) {
					// Se a largura for menor que 768 pixels, oculte o elemento de vídeo principal
					videoElement.style.display = "none";
					// Exiba o elemento com o vídeo indisponível
					if (videoUnavailableElement) {
					videoUnavailableElement.style.display = "block";
					}
					// Oculte o elemento com a classe "header"
					const headerElement = document.querySelector('.header');
					if (headerElement) {
					headerElement.classList.add('hidden');
					}
				} else {
					// Se não estiver em um dispositivo móvel, volte ao elemento de vídeo original e oculte o vídeo indisponível
					videoElement.style.display = "block";
					if (videoUnavailableElement) {
					videoUnavailableElement.style.display = "none";
					}
					// Mostre o elemento com a classe "header"
					const headerElement = document.querySelector('.header');
					if (headerElement) {
					headerElement.classList.remove('hidden');
					}
				}

				// Adicione classes CSS para aplicar o efeito de fade apenas quando o vídeo principal estiver visível
				if (videoElement.style.display !== "none") {
					videoElement.classList.add("fade-out");
					setTimeout(() => {
					videoElement.src = videos[currentVideoIndex];

					// Carregue o novo vídeo e inicie a reprodução
					videoElement.load();
					videoElement.play().catch(error => {
						console.error("Erro ao iniciar a reprodução do vídeo:", error);
					});

					// Remova a classe CSS após a transição
					videoElement.classList.remove("fade-out");
					}, 1000); // Ajuste este valor conforme necessário para controlar a duração da transição
				}
				}

				// Troca o vídeo a cada 10 segundos (10000 milissegundos)
				setInterval(changeVideo, 10000);