## Navbar / Header
- **Objetivo:** Retenção, navegação rápida e ponto de conversão sempre disponível.
- **Copy:** - Texto CTA Navbar: "Agendar Diagnóstico"
- **Assets Visuais:** Puxar a logo da By Process renderizando do path da raiz: `/public/by-process-logo.svg`.
- **Regra Específica:** O NavBar precisa fixar (sticky) com um efeito de *glassmorphism* (desfoque no fundo) e transição suave ao rolar a página para baixo.

## Hero Section (A Promessa)
- **Objetivo:** Impacto primário absoluto, focar no teto operacional B2B e gerar curiosidade instantânea.
- **Copy:** - Pré-Headline (Span/Tag): "Exclusivo para fundadores de empresas B2B que chegaram ao teto operacional."
  - Título Principal (H1): "Você construiu um negócio, não uma prisão. Transforme o caos operacional em um ecossistema de vendas previsível e automatizado."
  - Subtítulo (P): "Centralize dados, automatize rotinas manuais e elimine o 'achismo' da sua gestão..."
  - Texto do Botão (CTA Primário): "👉 Agendar Meu Diagnóstico Estratégico"
  - Microcopy (Span): "(Sessão inicial 100% confidencial)"
- **Assets Visuais:** Lado direito exibindo um mockup limpo e tecnológico (representando dashboards/automação): `/public/hero-dashboard-mockup.png` ou `/public/hero-abstract-tech.mp4` (vídeo em loop).
- **Regra Específica:** Animação de *fade-in up* nos textos (efeito cascata: pré-headline, H1, P, CTA com 100ms de delay entre eles). O mockup/imagem da direita deve ter um efeito de flutuação suave (*float animation* contínua).

## Agitação (Dor / O Caos)
- **Objetivo:** Conexão emocional através do reflexo da rotina exaustiva do cliente.
- **Copy:** - Título da Seção (H2): "Se você parar por 24 horas, a sua empresa continua rodando ou o castelo de cartas desmorona?"
  - Corpo de texto (Parágrafos descrevendo a perda de timing, planilhas soltas e o peso da exaustão).
- **Assets Visuais:** Ícones minimalistas para acompanhar as dores ou uma imagem abstrata sutil ao fundo: `/public/icons/caos-planilhas.svg` e `/public/icons/relogio-exaustao.svg`.
- **Regra Específica:** Fundo de tela ligeiramente mais escuro para passar um tom de seriedade. Elementos devem usar *scroll reveal* (aparecem gradativamente de baixo para cima conforme o usuário desce a página).

## Solução (Transformação / O Fim do Caos)
- **Objetivo:** Alívio imediato, apresentando a tecnologia como libertação e não complicação.
- **Copy:** - Título da Seção (H2): "A tecnologia deve ser o seu motor de tração, não a sua âncora."
  - Corpo de texto (Parágrafos sobre a clareza do dashboard, processos no piloto automático).
- **Assets Visuais:** Imagem de alta fidelidade mostrando um ambiente organizado ou o fluxo da By Process: `/public/dashboard-solucao.png`.
- **Regra Específica:** Transição da cor de fundo (do escuro da seção anterior para um fundo claro/branco). A imagem principal deve entrar deslizando suavemente da direita para a esquerda (*slide in right*) ao entrar na viewport.

## Como Funciona (O Mecanismo Simples)
- **Objetivo:** Quebrar a objeção da complexidade mostrando um método lógico de 3 passos.
- **Copy:** - Título da Seção (H2): "Um processo cirúrgico, sem atrito e sem paralisar a sua empresa."
  - Cards (H3 + P): "Passo 1: Raio-X da Operação", "Passo 2: Arquitetura Sob Medida", "Passo 3: A Virada de Chave".
- **Assets Visuais:** Ícones sequenciais para os passos: `/public/icons/step-1-raiox.svg`, `/public/icons/step-2-arquitetura.svg`, `/public/icons/step-3-aceleracao.svg`.
- **Regra Específica:** Layout em formato de *timeline* ou cards lado a lado. Uma linha conectando os passos deve ir "se preenchendo" com a cor principal da marca conforme o scroll desce (*draw stroke animation*).

## Prova Social (Casos de Sucesso)
- **Objetivo:** Transferência de autoridade inquestionável usando dados do Google.
- **Copy:** - Título da Seção (H2): "Quem já estruturou a operação com a By Process:"
  - Avaliação: "⭐⭐⭐⭐⭐ 5.0 no Google"
  - Cards de Review (Nome + Texto inserido manualmente).
- **Assets Visuais:** Logo do Google Meu Negócio e estrelas: `/public/google-rating-stars.svg`. Avatares genéricos ou letras iniciais: `/public/avatars/client-1.png`.
- **Regra Específica:** Estrutura em *Carousel* (slider) com arraste manual ou autoplay suave. Ao passar o mouse (*hover*), o card da avaliação deve sofrer uma leve elevação e ganhar uma sombra mais pronunciada (*box-shadow transition*).

## Autoridade (Ancoragem de Confiança)
- **Objetivo:** Posicionar a By Process como consultoria "C-Level" e distanciar de agências de marketing comuns.
- **Copy:** - Título da Seção (H2): "Por que a By Process é diferente?"
  - Corpo de texto ("Nós não somos uma agência tradicional. Nós somos arquitetos de negócios... devolução do seu tempo").
- **Assets Visuais:** Foto real e profissional da equipe ou do fundador da By Process: `/public/foto-equipe-byprocess.png`.
- **Regra Específica:** Imagem deve ter um efeito *Parallax* suave ao fundo. O bloco de texto pode estar contido em um card de vidro (*glassmorphism*) sobrepondo a imagem.

## FAQ (Quebrando as Objeções)
- **Objetivo:** Matar qualquer fricção final baseada em medos reais (parar a empresa, perder softwares antigos).
- **Copy:** - Título da Seção (H2): "Ainda tem dúvidas se este é o momento certo?"
  - Perguntas 1, 2 e 3 + Respostas.
- **Assets Visuais:** Ícones de seta/chevron para expandir: `/public/icons/chevron-down.svg`.
- **Regra Específica:** Componente de *Accordion*. Animação de *slide-down* no corpo da resposta ao clicar. Quando uma aba abrir, a outra que estava aberta fecha automaticamente para manter a interface limpa. O ícone de chevron deve rotacionar 180 graus.

## CTA Final (A Condução para a Ação)
- **Objetivo:** Geração de urgência, escassez e o clique final para conversão.
- **Copy:** - Título Principal (H2): "Você não pode escalar a exaustão."
  - Texto de apoio: "Continuar fazendo a mesma gestão fragmentada..."
  - Botão de CTA: "👉 Quero Agendar Meu Mapeamento Estratégico"
  - Microcopy/Disclaimer: "(Atenção: Por sermos uma consultoria de alta complexidade...)"
- **Assets Visuais:** Background que reforce a identidade visual da By Process (pode ser uma textura ou gradiente escuro): `/public/bg-cta-final.jpg`.
- **Regra Específica:** Centralizado e minimalista para foco total no botão. O botão precisa de uma animação de *pulse* (pulsação de escala ou brilho ao redor da sombra) a cada 3 segundos para chamar a atenção do olho.