---
name: carrossel-imagens-tema-tutorial
description: Use quando o usuário quer renderizar um roteiro de carrossel de Instagram em formato de tutorial passo a passo (ex. "como conectar o WhatsApp Business", "como configurar X"), no visual ticket-zerotoui: moldura preta com entalhes de ticket, card creme, tag mono laranja tipo "PASSO N", tipografia Fraunces (display) + Source Serif 4 (corpo). Rodapé em todo slide é só o texto "@opus.automacoes" centralizado em laranja, sem logo. Suporta imagem por passo (print de tela real via Playwright, ou svg desenhado direto) — nunca AI. Em modo YOLO (disparada por rotina automática), roda sem imagem nenhuma por enquanto. Trigger ONLY quando o usuário pede explicitamente esta skill por nome, ou quando já tem um roteiro.md com `template: carrossel-imagens-tema-tutorial` no frontmatter.
---

# carrossel-imagens-tema-tutorial

Renderiza um roteiro de carrossel de tutorial passo a passo no visual **ticket-zerotoui**: moldura preta full-bleed com dois entalhes semicirculares (como um ticket físico), card creme centralizado, tag mono laranja marcando cada passo (`PASSO 1`, `PASSO 2`...), título serif (Fraunces) e corpo serif de leitura (Source Serif 4).

Gerada pelo `gerador-skills-carrosseis` em 2026-07-25. Ver `identidade-derivada.md` pra decisões e desvios da canônica ibe.IA.

## Quando usar

- Usuário pede um carrossel de tutorial/passo a passo e menciona esta skill, ou já escreveu um `roteiro.md` com `template: carrossel-imagens-tema-tutorial`.
- Conteúdo é sequencial por natureza (passo 1, passo 2, passo 3...) — não é o formato certo pra provocação, jornada pessoal ou notícia (usar `carrossel-instagram` + outra skill de imagem pra isso).

## Quando NÃO usar

- Conteúdo não é um tutorial/sequência de passos — usar `carrossel-imagens-glassmorphism` ou `carrossel-imagens-tweet-screenshot`.
- Carrossel one-off sem reuso, sem estrutura de passos — não força o formato.

## Workflow

Ler [workflow.md](workflow.md) e seguir os 8 passos canônicos.

## Design system

Ler [design-system.md](design-system.md) pros tokens de cor/tipografia/spacing, e [archetypes.md](archetypes.md) pros 3 arquétipos (`capa`, `conteudo`, `cta`).

## Modalidades de imagem

`print` (screenshot real via Playwright CLI) e `svg` (desenhado direto, zero custo). **Sem `ai`** — não habilitada nesta skill. Ver [image-gen/svg-guide.md](image-gen/svg-guide.md).

## Regra de modo YOLO

Quando disparada por uma rotina automática (modo YOLO, sem ninguém pra responder), **a skill roda sem nenhuma imagem** — todo slide `conteudo` sai só-texto, mesmo que o roteiro declare `imagem:`. Isso é temporário (decisão de 2026-07-25, revisar depois). Em modo interativo, imagem funciona normalmente.

## Identidade fixa

Todo slide (capa, conteudo, cta) tem `@opus.automacoes` centralizado no rodapé do card, em laranja (`--color-hero-laranja`, `#F84F2E`), mono. Não é campo do roteiro — é renderizado automaticamente pelo template. Sem logo, sem data.

## Hard rules (não negociáveis, replicadas literalmente em `workflow.md` e `design-system.md`)

Canvas 1080×1440 fixo. Sem em-dash em texto de slide. Sem itálico (`<em>` reestilizado no lugar). Quebra de linha por sentença (`.`/`?`/`!` → novo `<p>`). Modalidade de imagem só `print` ou `svg`, nunca `ai`. Playwright via CLI (não MCP) com `deviceScaleFactor: 2` e a sequência `networkidle` → `document.fonts.ready` → `waitForTimeout(1000)`. `node_modules` fora do Google Drive. Output em `Marketing/Conteudo/<data>-<slug>/vN/`, nunca sobrescrever `vN/` existente.
