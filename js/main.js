document.addEventListener('DOMContentLoaded', function() {
    // Seleciona os elementos do menu
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('nav ul');
    const menuImg = document.querySelector('.menu-icon img');
    
    // Verifica se os elementos existem na página
    if (menuIcon && navMenu && menuImg) {
        // Adiciona o evento de clique ao ícone do menu
        menuIcon.addEventListener('click', function() {
            // Alterna a classe 'ativo' no menu
            navMenu.classList.toggle('ativo');
            
            // Atualiza a imagem do ícone do menu
            if (navMenu.classList.contains('ativo')) {
                // Tenta carregar a imagem de fechar a partir de diferentes caminhos
                const closeImg = new Image();
                closeImg.onload = function() {
                    menuImg.src = this.src;
                };
                // Tenta diferentes caminhos para a imagem de fechar
                closeImg.src = menuImg.src.includes('servicos') ? 
                    '../img/close.png' : 'img/close.png';
            } else {
                // Tenta carregar a imagem do menu a partir de diferentes caminhos
                const menuImgSrc = new Image();
                menuImgSrc.onload = function() {
                    menuImg.src = this.src;
                };
                // Tenta diferentes caminhos para a imagem do menu
                menuImgSrc.src = menuImg.src.includes('servicos') ? 
                    '../img/menu.png' : 'img/menu.png';
            }
        });
        
        // Fecha o menu ao clicar em um link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('ativo');
                // Volta para o ícone de menu
                menuImg.src = menuImg.src.includes('servicos') ? 
                    '../img/menu.png' : 'img/menu.png';
            });
        });
    }
});