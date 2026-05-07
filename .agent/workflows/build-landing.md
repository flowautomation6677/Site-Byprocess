---
description: /build-landing - Workflow de criação de sites agnóstico via Flow Kit Site.
---

# Workflow: Build Landing Page

Trata-se da linha de montagem universal que pavimenta o desenvolvimento de sucesso da Flow Automation e engaja o ecossistema do template de múltiplos clientes simultâneos.

**Gatilho do Workflow:** Enviar na conversa o comando `/build-landing`.

## Passo 1 (Leitura de Contexto e O Contrato de Entrada)
- Ao ouvir o gatilho, você como modelo de código **DEVE**, obrigatoriamente e antes de codificar telas inteiras, ler de forma atenta e literal os 2 arquivos abaixo indicados:
  1. `docs/wireframe.md`: Para entender e capturar o Copy literário e a Estrutura da Página principal. O modelo obedece a um padrão rígido e estrutural. Você deve esperar processar as camadas desta forma:
     - `## [Nome da Seção]` (ex: Hero, Features, CTA, Footer)
     - `- **Objetivo:**` (ex: Captura de lead, Prova social)
     - `- **Copy:**`
       - Título Principal (H1/H2): "..."
       - Subtítulo (P): "..."
       - Texto do Botão (CTA): "..."
     - `- **Assets Visuais:**` (ex: O que carregar visualmente ali).
     - `- **Regra Específica:**` (ex: Comportamento ou diretrizes de fundo exigidas).
  2. `docs/idv-cliente.md`: Para recolher os mapeamentos das variáveis da cor HEX específicas e Tipografias nativas do cliente em pauta.
- Realize o interrogatório de infraestrutura perguntando onde rodará a aplicação (HostGator vs VPS).

## Passo 2 (Setup Dinâmico)
- Construa ou edite o arquivo `tailwind.config.ts` do repositório, mapeando ali as suas cores lidas e estendendo variáveis das fontes vindas direto do `idv-cliente.md`.

## Passo 3 (Componentização)
- Produza arquivos dedicados de Componentes de base (`Button`, `Section`, `Card`) no local correto (`src/components/ui` e `src/components/layout`), respeitando todas as orientações regidas nas Skills e injetando características flexíveis do cliente atual.

## Passo 4 (Setup de SEO Técnico)
- Todo projeto no formato das LPs de conversão requer SEO dinâmico ativo e forte metadados na raiz.
- Ao construir o arquivo base (`layout.tsx` ou `page.tsx`), a IA **DEVE** engatilhar e gerar a exportação de metadados padrão (`export const metadata`). Injete o Título, Descrição central e o OpenGraph com base no escopo e copy lidos no próprio contrato do Wireframe no passo zero.

## Passo 5 (Montagem Escalonada)
- Projete as sessões da interface em sintonia ao Wireframe aprovado convertendo e preenchendo os componentes desenvolvidos.
- Nenhuma vírgula do texto original (copy) deverá ser alterada em relação à matriz original sob pena gravíssima no fluxo de dados de marketing, jamais sendo substituída por "Lorem Ipsum" arbitrário.

## Passo 6 (Auditoria Técnica Final e Revisão de Código)
Efetue a revisão final validando via código estrito se:
1. Todas as imagens e componentes iconográficos invocados possuem atributos textuais `alt` rigorosamente preenchidos em coerência com os assets.
2. As tags de divisão semânticas do HTML5 (ex: `<header>`, `<section>`, `<main>`, `<footer>` ou `<article>`) foram aplicadas.
3. As classes do frame do Tailwind CSS garantem a responsividade base e comportamentos nativos de estiramento ou contração, verificando e obrigando o uso das declarações prefixadas dos breakpoints (como `md:` e `lg:`) na construção modular nas caixas principais.
