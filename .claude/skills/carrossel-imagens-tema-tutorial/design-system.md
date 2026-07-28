# Design System — carrossel-imagens-tema-tutorial

Tokens canônicos deste template. `css/template.css` consome esses tokens como custom properties.

Estilo geral: **ticket-zerotoui aplicado à identidade Opus.** Moldura preta full-bleed com dois entalhes semicirculares (efeito de ticket físico), card creme centralizado, tag mono laranja marcando o passo, tipografia serif (Fraunces display + Source Serif 4 corpo). Hero único fixo (laranja), sem alternância de cor por slide.

## Color tokens

```css
--color-preto: #0E0E0E;          /* moldura do ticket, full-bleed */
--color-creme: #FBF9F4;          /* card interno */
--color-ink-headline: #231A12;   /* título, sobre o creme */
--color-ink-body: #5A4E3F;       /* corpo de texto, sobre o creme */
--color-hero-laranja: #F84F2E;   /* único hero — tag, handle, acentos. Fixo, sem alternância. */
```

Não há paleta hero de 3-4 cores alternando por slide como a canônica ibe.IA. Testado ao vivo (mockup com laranja/roxo/azul alternando vs. laranja fixo) e o usuário escolheu **laranja fixo em toda a skill** — ver `identidade-derivada.md`.

## Typography tokens

```css
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@500;700&display=swap");

--font-display: 'Fraunces', Georgia, serif;
--font-serif: 'Source Serif 4', Georgia, serif;
--font-mono: 'JetBrains Mono', monospace;
```

**Tamanhos:**

```css
--fs-headline: 62px;   /* capa.titulo, conteudo.titulo, cta.titulo */
--fs-subtitulo: 34px;  /* capa.bloco_destaque */
--fs-body: 40px;       /* conteudo.texto, cta.chamada_final — corpo padrão (mínimo 36px hard rule) */
--fs-tag: 30px;        /* badge mono "PASSO N" — exceção ao mínimo de 36px, mesma lógica de .fonte-externa */
--fs-handle: 26px;     /* footer "@opus.automacoes" — mesma exceção */
--fs-caption: 24px;    /* .fonte-externa, se usado */
```

**Nota (exceção ao mínimo de 36px):** `--fs-tag` e `--fs-handle` são badges curtos (label, não corpo de leitura corrido), mesma categoria de exceção que `.fonte-externa` já tem na canônica. Todo texto de leitura contínua (`--fs-body`, `--fs-headline`, `--fs-subtitulo`) respeita o mínimo de 36px.

**Line-heights:**

```css
--lh-display: 1.08;
--lh-body: 1.42;
```

**Letter-spacing (desvio documentado — ver `identidade-derivada.md`):**

```css
--ls-display: -0.01em;
--ls-body: 0em;
--ls-tag: 0.06em;   /* tags/handle mono ganham tracking positivo, não negativo */
```

A canônica ibe.IA usa `-0.07em` display / `-0.02em` corpo (assinatura do par Sora + Plus Jakarta). Fraunces + Source Serif 4 são serifs com personalidade própria — tracking apertado nelas lê como erro de kerning, não como estilo. Tracking neutro/quase-zero aqui é intencional.

## Spacing tokens

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 40px;
--space-xl: 64px;

--margin-frame: 64px;   /* espessura da moldura preta em todos os lados */
--card-pad-x: 88px;     /* padding horizontal interno do card creme */
--card-pad-y: 96px;     /* padding vertical interno do card creme */
```

## Radius

```css
--radius-card: 8px;
--radius-image: 8px;
--radius-pill: 9999px;
```

## Canvas

```css
--canvas-w: 1080px;
--canvas-h: 1440px;      /* aspect 3:4, fixo, sem exceção */
```

## Moldura e entalhes (ticket shell)

```css
--notch-w: 112px;
--notch-h: 56px;
```

Os dois entalhes (`::before` topo, `::after` base do card) são preenchidos com `var(--color-preto)` — a MESMA cor da moldura, nunca a cor de fundo de alguma página/preview. O `.slide` é sempre full-bleed preto; o entalhe só precisa "revelar" o preto por trás do card creme, então usar qualquer outra cor aqui quebra o efeito.

## Aspect ratios por arquétipo

```
capa:      3:4  (herda o canvas, sem imagem própria)
conteudo:  16:9 (bloco de imagem opcional dentro do card)
cta:       N/A  (só texto)
```

## Regras tipográficas (hard rules)

- **Tamanho mínimo legível 36px** pra texto de leitura corrida (`--fs-body`, `--fs-headline`, `--fs-subtitulo`). Exceção: badges mono (`--fs-tag`, `--fs-handle`) e `.fonte-externa` (24px).
- **Sem itálico.** `font-style: italic` proibido. Ênfase usa `<em>` reestilizado (`color: var(--color-hero-laranja); font-weight: 600;`, sem itálico) — autorada no roteiro com `**texto**` (ver "Destaque de texto" abaixo).
- **Quebra de linha por sentença.** Cada `.`, `?` ou `!` finalizador vira `<p>` separado em `texto` e `chamada_final`.
- **Em-dashes (`—`) proibidos** em qualquer texto de slide. Hard error no Step 1 do workflow.

## Destaque de texto (`**texto**`)

Igual ao padrão adotado em `carrossel-imagens-glassmorphism`: um trecho entre `**` no roteiro vira `<em>` no render (depois do escape HTML, nunca antes — evita injeção via texto do roteiro). Resultado: `color: var(--color-hero-laranja)`, peso 600, nunca itálico. Funciona em `titulo`, `texto`, `chamada_final`, `bloco_destaque`.

## Header/footer

Sem header. Footer é fixo em todo slide: `@opus.automacoes` centralizado horizontalmente, na base do card creme, em `var(--color-hero-laranja)`, `--font-mono`, `--fs-handle`. Não é campo do roteiro — o template renderiza automaticamente. Sem logo, sem data (decisão explícita do usuário — ver `identidade-derivada.md`).

## Bloco `imagem:` — formato declarado no roteiro

Só arquétipo `conteudo` aceita `imagem:`, e só nos tipos `print` ou `svg` (nunca `ai` — não habilitada nesta skill):

```yaml
imagem:
  tipo: print
  url: "https://..."          # obrigatório se tipo: print
# ou
imagem:
  tipo: svg
  descricao: "string"         # briefing do que o SVG deve mostrar
```

Slot: 16:9, dentro do card, entre `titulo` e `texto`. Ver `archetypes.md` → `conteudo` e `image-gen/svg-guide.md`.

**Modo YOLO: `imagem:` é ignorado.** Se a skill for disparada em modo YOLO (rotina automática), o Step 2 do workflow pula a resolução de imagem inteiramente, mesmo que o roteiro declare o bloco — decisão de 2026-07-25, revisitar quando o modo YOLO tiver como validar imagem sem supervisão.

## Como adicionar ou mudar um token

1. Editar este arquivo (valor + justificativa).
2. Editar `css/template.css` referenciando o novo valor.
3. Rodar o Step 8 (export Playwright) num roteiro de teste pra garantir que nada quebrou.
