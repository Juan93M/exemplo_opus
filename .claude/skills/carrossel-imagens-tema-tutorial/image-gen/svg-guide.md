# SVG Guide — carrossel-imagens-tema-tutorial

Esta skill não usa `ai`. Quando um passo não tem URL real pra printar, o SVG é a alternativa de custo zero. Ver ordem de preferência `print > svg` em `workflow.md` Step 2.

## Onde entra

Todo SVG vai dentro de `.imagem-slot` (16:9), em `conteudo.imagem` com `tipo: svg`. O container já tem borda sutil e cantos arredondados via CSS — o SVG em si deve ser limpo e sem moldura própria.

## Princípios

- **Geometria limpa.** Fills sólidos, sem gradientes complexos, sem sombra do SVG em si (o container já dá o card).
- **Paleta da skill, não paleta livre.** Use `--color-preto` (`#0E0E0E`), `--color-creme` (`#FBF9F4`), `--color-ink-headline` (`#231A12`), `--color-hero-laranja` (`#F84F2E`). Fundo do SVG deve ser `--color-creme` ou transparente (herda o creme do card por trás) — nunca introduza uma cor de fundo nova.
- **Raios consistentes:** 8-16px em elementos com canto arredondado (botões, telas, cards dentro do diagrama).
- **Strokes 2-4px.** Nunca hairline (1px some no export em retina) nem grosso demais (>4px pesa).
- **Tipografia mínima dentro do SVG.** Labels curtos (1-3 palavras), nunca parágrafos, nunca itálico. Se precisar de texto, use `font-family: 'JetBrains Mono'` (mesma família dos badges) pra parecer parte do sistema, não um elemento estranho.
- **`viewBox` alinhado ao slot:** `viewBox="0 0 320 180"` (proporção 16:9), sem padding interno excessivo — o container já tem respiro via `border`.

## O que desenhar

Diagramas simples de fluxo (3-5 passos com setas), mockups simplificados de tela (retângulo com barra de topo + 2-3 elementos), ícones compostos (não emoji, não clipart). Nunca tente reproduzir uma tela real pixel a pixel — se o objetivo é mostrar uma tela real, isso é `print`, não `svg`.

## Exemplo (fluxo de 3 passos, mesma paleta)

```html
<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
  <rect x="0" y="0" width="320" height="180" fill="#FBF9F4"/>
  <rect x="16" y="70" width="80" height="40" rx="8" fill="none" stroke="#231A12" stroke-width="3"/>
  <text x="56" y="94" font-family="JetBrains Mono" font-size="12" fill="#231A12" text-anchor="middle">APP</text>
  <path d="M104 90 L146 90" stroke="#F84F2E" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="152" y="70" width="80" height="40" rx="8" fill="none" stroke="#231A12" stroke-width="3"/>
  <text x="192" y="94" font-family="JetBrains Mono" font-size="12" fill="#231A12" text-anchor="middle">QR CODE</text>
  <path d="M240 90 L282 90" stroke="#F84F2E" stroke-width="3" marker-end="url(#arrow)"/>
  <rect x="224" y="70" width="0" height="0"/>
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
      <path d="M0,0 L8,4 L0,8 z" fill="#F84F2E"/>
    </marker>
  </defs>
</svg>
```

## Fidelidade

O SVG só formata o que o roteiro descreveu em `imagem.descricao`. Nunca inventa dado, produto ou tela que não foi pedido.
