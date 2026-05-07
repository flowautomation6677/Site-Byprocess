# POP 01: Iniciação de Projeto e Codificação (Flow Kit Site)

**Objetivo:** Padronizar de ponta a ponta o processo humano de "setup" de um novo site/landing page estruturada antes de delegar a construção lógica e visual para a Inteligência Artificial da agência. 

Este documento garante que não falte nenhum asset vital (como a logo) e que o contrato de requisição (`wireframe.md`) esteja inviolável, tornando a criação via IA perfeita na primeira tentativa.

---

## Passo 1: Preparação do Repositório (Setup Inicial)
Cada novo cliente rodará sobre a estrutura fundacional do `kit-site-flow`.
1. Em sua máquina ou terminal, clone o ambiente isolado do projeto.
2. Inicie instalando as dependências vitais de pacote: rode `npm install` (ou `yarn`).
3. Não levante o ambiente de visualização e não modifique código ainda.

---

## Passo 2: Gestão de Assets Vitais (A Logo e a Mídia)
A IA não desenha imagens externas do nada. É responsabilidade humana munir o repositório de recursos locais em tempo de projeto.
1. Em qualquer projeto, vá primariamente à **pasta raiz `/public/`**.
2. Adicione **obrigatoriamente a logo** em alta definição do cliente (ex: `/public/logo.svg` ou `/public/logo-oficial.png`). Dê prioridade explícita para recortes SVG transparentes.
3. Se existir um pacote de imagens oficial do especialista, mockups de celular prontas ou fotos do produto a ser vendido, jogue-as na `/public/` nomeando em estilo *kebab-case* (ex: `foto-especialista-01.png`).

---

## Passo 3: Alimentação do Cérebro (A pasta `docs/`)
A Inteligência Artificial age através de leitura de contratos fixos. Você precisa redigí-los sem brechas.
Vá até a pasta `docs/` e configure seus dois manuais:

### 3.1: Arquivo visual (`docs/idv-cliente.md`)
Declare textualmente neste modelo vazio todas as restrições hexadecimais:
- Especifique textualmente a paleta principal e de conversão do cliente (ex: *"A cor primária do botão CTA é `#E11D48`"*).
- Enumere as Fontes de Títulos e Fonte do Corpo de Texto.

### 3.2: O Contrato Estrutural (`docs/wireframe.md`)
Coloque a copy redigida lá dentro respeitando exatamente a anatomia sistêmica de marcação, orientando o path da imagem e da logo. Siga esse modelo interno:

```markdown
## Navbar / Header
- **Objetivo:** Retenção e confiança inicial.
- **Copy:** 
  - Texto CTA Navbar: "Agendar Reunião"
- **Assets Visuais:** Puxar a logo vital renderizando do path da raiz: `/public/logo.svg`.
- **Regra Específica:** O NavBar precisa fixar/deslizar suave ao focar a página.

## Hero (A Promessa)
- **Objetivo:** Impacto primário absoluto focando o funil de leads.
- **Copy:** 
  - Título Principal (H1): "Dobre o volume de leads do seu negócio escalando..."
  - Subtítulo (P): "Estratégia invisível de agitação de mercado."
  - Texto do Botão (CTA): "Quero iniciar o Growth Automático"
- **Assets Visuais:** Lado direito exibindo a imagem do profissional: `/public/foto-especialista-01.png`
- **Regra Específica:** Fundo limpo, CTA exigindo sombra.
```
*(Prossiga seção a seção com a copy real descrita e os caminhos de foto organizados)*

---

## Passo 4: O Disparo da IA (Codificação Flow)
Com todos os documentos em mãos e a logo posicionada na máquina, agora transferimos o trabalho tático para o motor do desenvolvedor Sênior.
1. Abra o painel de chat ou extensão de controle do Agente no Github/IDE Cursor/VSCode.
2. Não fique descrevendo o que deseja; a descrição já foi feita no `docs/`.
3. Dispare **apenas** o comando de ativação global: 
   👉 `/build-landing`
4. A IA lerá seus manuais, absorverá o wireframe em etapas e fará a reestruturação visual de componentes, layouts e o SEO técnico automatizado da aplicação. Você será questionado durante o processo apenas sobre o tipo de *Host (VPS vs HostGator)*. Responda essa etapa e espere.

---

## Passo 5: Execução Humana de Q/A (Revisão Qualitativa)
Uma vez que o Agente termine e informe a entrega final estruturada na `src/app/`:
1. Rode o servidor no seu terminal local `npm run dev`.
2. Acesse a máquina virtual web gerada com porta aberta `:3000`.
3. Verifique visualmente através da tela responsiva:
   - Os pesos entre logo importada, espaços "white-space" gerados e cor do CTA de alta conversão.
   - Analise se os atributos semânticos, `layout.tsx` OpenGraph e contraste entregues não feriram nenhum balizamento visual do branding em prol de velocidade.
