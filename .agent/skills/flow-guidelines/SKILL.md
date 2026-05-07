---
name: Flow Guidelines
description: Princípios invioláveis de UX/UI e de Infraestrutura da agência Flow Automation.
---

# Princípios Invioláveis de UX/UI e Infraestrutura

Este documento carrega os fundamentos cruciais que orientarão sua técnica, adaptáveis a qualquer cliente e branding definido através do Flow Kit Site.

## 1. Princípio de Conversão (CTAs)
Botões de conversão e Call To Actions são o coração do funil visual:
- Todo botão principal de ação deve obrigatoriamente usar a "Cor Primária" definida pelo cliente (lida dos docs).
- As bordas devem ser levemente arredondadas (com border-radius entre `6px` a `8px`, utilizando `rounded-md` ou `rounded-lg`). **Nunca** permita que os CTAs tenham formato de pílula 100% arredondada.
- Devem, de forma obrigatória, possuir um efeito genérico de elevação com uso de sombra (`shadow`) aliada a um efeito de hover de interatividade visual (`transform -translate-y-1` com transição suave, exemplo `hover:-translate-y-1 transition-transform`).

## 2. Princípio de Espaçamento
A carga cognitiva excessiva destrói os layouts. Reduza o volume visual através da técnica de "respiro":
- Exija a adição de uso abundante de white-space. Utilizar amplos distanciamentos (exemplo de `py-24` ou `py-32` no Tailwind) nos envoltórios ou seções limpas.

## 3. Princípio de Tipografia
O tratamento tipográfico deve garantir escaneabilidade e hierarquia de atenção rápida:
- Fontes exatas e variáveis CSS serão fornecidas sempre e de forma exclusiva nos documentos (docs) do respectivo cliente.
- É regra da casa focar na hierarquia bruta: Títulos (Headings) exigem uso de pesos potentes e dominantes (font-weight `700` a `800`), e todo o texto base ou textos longos na plataforma precisam recuar de peso (ficando contidos de `400` a `500`).

## 4. Gestão de Assets e Imagens (Infraestrutura Visual)
Para garantir coesão mesmo durante a montagem primária em que as imagens finais ainda não existem:
- Para imagens ausentes ou não fornecidas no documento, utilize espaços de placeholders estruturados (exemplo: via uma `div` com background cinza ou consumindo serviços como `placehold.co`). A criação de src's e caminhos de imagens fantasma (vazios e quebrados) é proibida.
- Para todo pacote iconográfico (ícones UI generalistas na plataforma), **utilize exclusivamente a biblioteca `lucide-react`**.

## 5. Regra de Deploy (Infraestrutura)
Independente do cliente, todo projeto deve levantar o questionamento abaixo antes da materialização dos setups (arquivos `.config` ou compilações):
- Ao iniciar ou formatar o repositório, **o agente DEVE** obrigatoriamente perguntar ao usuário: *"Qual o destino do deploy? (1) HostGator/Estático ou (2) VPS/Dinâmico"*.
- **SE FOR 1:** Altere o arquivo de configuração raíz do Next.js (como `next.config.ts`) de modo a inserir e exportar estaticamente (`output: "export"`).
