Documento de Requisitos: Website TKZ E-SPORTS
Este documento detalha as especificações para a criação de um website single-page (página única) para a organização de e-sports "TKZ", com base nos screenshots fornecidos. A IA deve seguir rigorosamente este guia para replicar o design, funcionalidade e animações.

1. Visão Geral do Projeto
Objetivo: Construir um website moderno, responsivo e de página única (SPA) para a TKZ E-SPORTS. Tema: Dark Mode (Modo Escuro), com uma estética "gamer" limpa e profissional. Tecnologias Sugeridas: HTML5, CSS3 (com Flexbox/Grid), JavaScript. Para animações de rolagem, utilizar a biblioteca AOS.js (Animate On Scroll) ou implementar com a Intersection Observer API.

2. Guia de Estilo Global (Design System)
2.1. Paleta de Cores
Fundo Principal (Background): Um cinza muito escuro, quase preto. (Ex: #1A1D21)

Fundo de Elementos (Cards/Seções): Um cinza escuro, ligeiramente mais claro que o fundo. (Ex: #252A2E)

Texto Principal (Títulos): Branco. (Ex: #FFFFFF)

Texto Secundário (Subtítulos, Parágrafos): Cinza claro. (Ex: #B0B0B0)

Cor de Destaque (Accent): Azul ciano brilhante. (Ex: #00BFFF ou #00AEEF)

Verde (Roles): Verde claro. (Ex: #28a745)

2.2. Tipografia
Fonte Principal: Utilizar uma fonte Sans-Serif moderna e limpa (Ex: Poppins, Montserrat, Roboto).

H1 (Títulos de Seção Grandes): Grande, negrito (Ex: "Nossa Equipe", "Parceiros").

H2 (Títulos de Seção Menores): Médio, negrito (Ex: "TKZ E-SPORTS" no Hero).

H3 (Títulos de Card): Médio, negrito (Ex: "Alex 'Twitch LiderTKZ' Lima").

Parágrafo (p): Regular, para descrições e subtítulos.

2.3. Componentes Globais
Botão Primário (Cadastrar):

Fundo: Cor de Destaque (Azul).

Texto: Branco.

Bordas: Arredondadas.

Hover: Leve escurecimento ou brilho.

Botão Secundário (Entrar):

Fundo: Transparente.

Texto: Branco ou Cinza claro.

Borda: 1px sólida (Branca ou Cinza).

Hover: Fundo preenchido com a Cor de Destaque (Azul) ou cor de fundo do card.

Cards:

Fundo: Cor de Fundo de Elementos (#252A2E).

Bordas: Arredondadas (Ex: 8px).

Sombra: Uma leve sombra ou brilho sutil para destacar do fundo.

3. Estrutura da Página (Seção por Seção)
A página deve ser montada na seguinte ordem:

3.1. Header (Navbar)
Funcionalidade: Fixo no topo (position: sticky).

Layout:

Esquerda: Logo "TKZ".

Centro: Links de Navegação:

Sobre (com um ícone de seta para baixo, indicando um menu dropdown).

Comunidade

Staff

Direita: Botões:

Entrar (Botão Secundário/Ghost)

Cadastrar (Botão Primário)

3.2. Seção Hero
Layout: Centralizado, tela cheia (ou quase).

Conteúdo:

Título H2: "TKZ"

Título H1: "E-SPORTS"

Subtítulo: "A organização de e-sports que está revolucionando o cenário competitivo brasileiro."

Elemento Visual: Um grande "orbe" ou "brilho" da Cor de Destaque (Azul) desfocado (blur) posicionado no fundo, atrás do texto.

3.3. Seção "TKZ em Ação"
Layout: Centralizado.

Conteúdo:

Título H2: "TKZ em Ação"

Subtítulo: "Assista aos nossos melhores momentos"

Elemento Principal: Um player de vídeo embedado (Ex: YouTube) exibindo um vídeo. (Usar o vídeo "TORNEIO DO GROMPE - EFFECT X..." como placeholder).

3.4. Seção "Nossas Conquistas"
Layout: Centralizado.

Conteúdo:

Título H2: "Nossas Conquistas"

Subtítulo: "Os títulos que marcam nossa história"

Funcionalidade: Um Carousel / Slider.

Indicador de Paginação: "1 / 3" (indicando 3 slides no total).

Conteúdo do Slide: Um grid 2x2 de cards.

Card de Conquista:

Ícone (Ex: Troféu, Medalha).

Título H3 (Ex: "Campeão Invicto", "Tricampeão").

Subtítulo (Ex: "Copa Nordeste - Piauí", "Fase de Acesso - Liga GG").

3.5. Seção "Últimas Notícias"
Layout: Centralizado.

Conteúdo:

Título H2: "Últimas Notícias"

Subtítulo: "Fique por dentro de tudo que acontece na TKZ"

Grid: 3 cards em linha (layout 1x3).

Card de Notícia:

Tag (Ex: "Parcerias", "Competições") com fundo azul claro e borda.

Timestamp (Ex: "2 horas atrás").

Título H3 (Ex: "TKZ anuncia nova parceria...").

Descrição (p).

Link: "Ler mais >" (com ícone de seta).

3.6. Seção "Nossa Equipe"
Layout: Centralizado.

Conteúdo:

Título H2: "Nossa Equipe"

Subtítulo: "Os profissionais por trás do sucesso da TKZ"

Grid: 6 cards em duas linhas (layout 2x3).

Card de Equipe:

Placeholder de Imagem: Um círculo com as iniciais da pessoa (Ex: "A"L", "MB").

Nome H3 (Ex: "Alex 'Twitch LiderTKZ' Lima").

Posição (p): A posição deve ter cores diferentes (Ex: "Fundador & CEO" em Azul, "Administrador" em Verde, "Coach" em Branco).

Descrição (p) (Ex: "Visionário por trás da organização TKZ").

3.7. Seção "Parceiros"
Layout: Centralizado.

Conteúdo:

Título H2: "Parceiros"

Subtítulo: "Marcas que confiam na TKZ"

Grid: 4 cards em linha (layout 1x4).

Card de Parceiro:

Estes cards são placeholders para logos de parceiros.

Devem conter o texto "Partner 1", "Partner 2", etc., como na imagem.

3.8. Footer (Rodapé)
Layout: Dividido em 4 colunas principais, seguido por uma linha de copyright.

Coluna 1 (Logo):

Logo "TKZ"

Slogan: "A organização de e-sports que está revolucionando o cenário competitivo brasileiro."

Coluna 2 (Links Rápidos):

Título: "Links Rápidos"

Links: "Torneios", "Notícias", "Equipe", "Parceiros".

Coluna 3 (Jogos):

Título: "Jogos"

Links: "League of Legends", "Wild Rift", "CS:GO 2", "Valorant".

Coluna 4 (Redes Sociais):

Título: "Redes Sociais"

Ícones: Twitter, YouTube, Instagram, Facebook.

Linha Inferior:

Texto de Copyright: "© 2025 TKZ E-SPORTS. Todos os direitos reservados."

4. Animações e Interatividade
Este é um requisito crucial.

4.1. Animações de Rolagem (Scroll Animation)
Implementação: Usar AOS.js ou Intersection Observer API.

Efeito: "Fade-in-up" (surgir de baixo e aparecer) ou "Fade-in" (apenas aparecer).

Alvos: A animação deve ser aplicada a todos os cards individualmente nas seguintes seções:

Cards de "Nossas Conquistas"

Cards de "Últimas Notícias"

Cards de "Nossa Equipe"

Cards de "Parceiros"

Comportamento: A animação deve disparar assim que o card entrar na área visível (viewport) do usuário.

4.2. Interatividade
Navbar: O link "Sobre" deve acionar um menu dropdown (embora o conteúdo do dropdown não seja visível nas imagens, a funcionalidade deve ser preparada).

Carrossel "Nossas Conquistas": O carrossel deve ser funcional, permitindo ao usuário navegar entre os slides (pelo menos 3, como indicado pela paginação "1/3").

Links e Botões: Todos os links, ícones de redes sociais e botões devem ter estados de hover claros (mudança de cor, brilho ou sublinhado).