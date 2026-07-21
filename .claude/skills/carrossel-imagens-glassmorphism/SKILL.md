---
name: carrossel-imagens-glassmorphism
description: Use when the user wants to transform a structured roteiro into an Instagram carousel using the glassmorphism visual template, only-text (no photos, no AI images). Ambient gradient background (white to light gray) with a soft blurred navy orb behind translucent glass cards; alternates between light, dark and full-bleed navy "hero" slides across the carousel for visual rhythm. Canvas 1080x1440. Tipografia Sora display + Plus Jakarta Sans corpo. Sem modalidades de imagem (print/svg/ai) em nenhum arquétipo. Identidade "Opus Automações" / "@opus.automacoes" aparece só no texto do slide CTA, nunca em header/footer fixo. Regra dura: cada `.`, `?` ou `!` finalizador de sentença vira quebra de linha. Em-dashes (—) proibidos em qualquer texto user-facing.
---

# carrossel-imagens-glassmorphism — carousel template skill

Glassmorphism só-texto: cards translúcidos com `backdrop-filter: blur(24px)` flutuando sobre um gradient ambient e um orb desfocado na cor navy da marca. Sem foto, sem ilustração, sem mockup: o protagonismo visual vem do material (blur, glow, alternância de fundo), não de imagem.

Cada slide do carrossel é 1080×1440 (aspect 3:4 Instagram, canvas oficial). A composição segue um dos 5 arquétipos: `capa`, `conteudo-claro`, `conteudo-escuro`, `conteudo-hero`, `cta`. Nenhum arquétipo tem bloco de imagem; o único elemento visual não-textual é o próprio orb ambient atrás do glass.

## When to use

- O usuário quer um carrossel com identidade visual mais elaborada que o print-de-tweet monocromático (`carrossel-imagens-tweet-screenshot`), mas ainda sem depender de fotos, prints ou imagens geradas por IA.
- O tema pede alternância visual entre slides (claro / escuro / hero navy) pra dar ritmo ao longo do carrossel, sem repetir a mesma composição em todo slide de conteúdo.
- A identidade da conta (Opus Automações / @opus.automacoes) só precisa aparecer no CTA final, não em todo slide.

## When NOT to use

- O carrossel precisa de foto, print de tela real, ou ilustração AI no corpo do slide. Use outra skill de carrossel com modalidade de imagem habilitada.
- O usuário quer o registro "print de tweet" monocromático com header fixo em todo slide. Use `carrossel-imagens-tweet-screenshot`.
- Carrossel one-off sem reuso previsto. Nesse caso um `vN/` ad-hoc é mais barato que uma skill nova.

## Workflow

Read [workflow.md](workflow.md) and follow the steps.

## Design system

Visual tokens: [design-system.md](design-system.md) · Stylesheet: [css/template.css](css/template.css)

## Archetypes

Slide composition specs: [archetypes.md](archetypes.md)

## Derived identity

Diff vs canonical ibe.IA identity (what this template changed): [identidade-derivada.md](identidade-derivada.md)

## Image generation

Não aplicável. Este template não usa modalidades de imagem (`print`/`svg`/`ai`) em nenhum arquétipo. O único elemento visual não-textual é o orb ambient gerado via CSS (gradient + blur), sem asset externo.

## Language

Prompts and replies to the user in PT-BR. All generated roteiros, carousel text, and captions in Brazilian Portuguese. Não há prompts AI (sem modalidade `ai`). Em-dashes (`—`) proibidos em qualquer texto user-facing: usar ponto, vírgula, dois-pontos, hífen simples ou reformular.
