# Design System — carrossel-imagens-glassmorphism

Tokens canônicos deste template. `css/template.css` consome esses tokens como custom properties.

Estilo geral: **glassmorphism, paleta própria Opus (navy + branco + cinza claro), só-texto.** Cards translúcidos com blur flutuando sobre gradient ambient e um orb navy desfocado. Sem foto, sem imagem: o material (blur + glow + alternância claro/escuro/hero) carrega o visual sozinho.

## Color tokens

```css
/* Neutros */
--color-preto: #0D193C;          /* navy extraído do avatar Opus, faz o papel de "preto"/tom escuro do sistema */
--color-preto-2: #081026;        /* navy mais profundo, variação de superfície escura */
--color-creme: #FFFFFF;          /* branco, faz o papel de "creme"/tom claro do sistema */
--color-creme-alt: #E8EAEF;      /* cinza claro acrescentado, usado no ambient claro e em superfícies secundárias */
--color-surface-claro: #FFFFFF;
--color-surface-escuro: #101B3E; /* leve variação do navy pra profundidade de superfície escura */

/* Hero color (única, não há laranja/roxo/azul nesta skill) */
--color-hero-navy: #0D193C;

/* Azul claro de contraste (2026-07-21): usado só no orb ambient e no <em>
   de conteudo-escuro. O orb original usava --color-surface-escuro (#101B3E),
   quase idêntico ao fundo navy — o blur não tinha cor viva pra refratar e o
   card de vidro ficava sem brilho. Este azul é mais claro e mais saturado
   que o navy, o suficiente pra acender o blur sem virar ciano. */
--color-hero-blue-light: #4C8DFF;
--color-hero-blue-deep: #2F5FE0;  /* blob primário em fundo escuro, ver "Glass tokens" abaixo */
```

Não há paleta hero de 3 cores alternando por slide (laranja/roxo/azul da canônica ibe.IA): o avatar Opus só fornece uma cor de tinta real (navy), então todo `cor_hero` desta skill resolve sempre pra navy. Ver `identidade-derivada.md`. O `--color-hero-blue-light` não é um segundo hero alternável — é um tom de contraste fixo, usado só nos elementos que precisam de brilho contra o navy (orb de `conteudo-escuro`, `<em>` em texto escuro).

## Typography tokens

```css
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap");

--font-display: 'Sora', system-ui, sans-serif;
--font-sans: 'Plus Jakarta Sans', 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;
```

**Tamanhos:**

```css
--fs-hero: 116px;        /* reservado, não usado em nenhum arquétipo desta skill (ver nota abaixo) */
--fs-h1: 88px;           /* conteúdo-claro/escuro: titulo curto opcional (4-8 palavras) */
--fs-h2: 64px;           /* capa.titulo, conteudo-hero.titulo, cta.titulo — frase única, até ~20-25 palavras */
--fs-h3: 52px;
--fs-body-large: 52px;   /* bloco_destaque (capa e conteudo-hero) */
--fs-body: 42px;         /* corpo padrão (mínimo 36px hard rule) */
--fs-caption: 24px;      /* atribuições .fonte-externa */
```

**Nota (correção pós smoke-test com conteúdo real):** `--fs-hero` (116px) foi o tamanho canônico herdado do `gerador-skills-carrosseis` pra "capa título", mas ele assume hooks bem curtos. Testando com frases reais de 20-27 palavras (dentro do limite documentado em `archetypes.md`), 116px e o `--fs-h1` (88px, usado inicialmente também no `conteudo-hero`) faziam o texto tomar o canvas inteiro ou estourar a margem inferior — o card "glass flutuando com respiro" desaparecia. `capa.titulo`, `conteudo-hero.titulo` e `cta.titulo` usam `--fs-h2` (64px), validado com uma frase real de 24 palavras mantendo respiro visível em todos os lados. `--fs-hero` fica definido no token set por compatibilidade mas não é referenciado em nenhuma regra CSS atual.

**Line-heights:**

```css
--lh-tight: 0.98;        /* capa título display */
--lh-display: 1.04;      /* títulos display em geral */
--lh-body: 1.32;         /* corpo */
```

**Letter-spacing:**

```css
--ls-display: -0.07em;
--ls-body: -0.02em;
```

Sem desvio do letter-spacing canônico: Sora + Plus Jakarta Sans é o mesmo par tipográfico da canônica ibe.IA, então o tracking apertado assina normalmente.

## Spacing tokens

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 40px;
--space-xl: 64px;

--margin-side: 72px;
--margin-top: 72px;
--margin-bottom: 72px;
```

## Radius

```css
--radius-md: 16px;
--radius-lg: 24px;
--radius-pill: 9999px;
--radius-circle: 50%;
```

## Canvas

```css
--canvas-w: 1080px;
--canvas-h: 1440px;       /* aspect 3:4 */
```

## Glass tokens

```css
--g-bg-claro: rgba(255, 255, 255, 0.55);
--g-bg-escuro: rgba(255, 255, 255, 0.06);
--g-border-claro: rgba(13, 25, 60, 0.12);
--g-border-escuro: rgba(255, 255, 255, 0.10);
--g-blur: blur(24px);
--g-shadow-claro: 0 8px 32px rgba(13, 25, 60, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.7);
--g-shadow-escuro: 0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06);
```

`backdrop-filter: blur(24px)` exige ambient gradient/orb atrás do card pro efeito ser visível (hard rule global de glassmorphism).

**Padrão de 2 blobs diagonais (2026-07-21, definitivo em todo arquétipo).** Um orb sozinho e centralizado não gera brilho suficiente — testado e rejeitado. O padrão final usa sempre dois blobs em cantos opostos:

- `.orb-navy` — canto superior-esquerdo (`top: 35%; left: 28%`), 900px, opacidade 0.6. Cor: `--color-hero-navy` em fundo claro (`capa`, `conteudo-claro`, `cta`); `--color-hero-blue-deep` em fundo escuro (`conteudo-escuro`, `conteudo-hero`) — navy sobre navy não gera contraste nenhum.
- `.orb-blue-light` — canto inferior-direito (`top: 68%; left: 75%`), 800px, opacidade 0.6, sempre `--color-hero-blue-light` (claro ou escuro, a cor não muda).

Os dois divs (`orb-navy` + `orb-blue-light`) aparecem juntos, nunca um sozinho, em todos os 5 arquétipos — incluindo `conteudo-hero`, que deixou de ser bloco sólido (ver seção abaixo).

## Regras tipográficas (hard rules)

- **Tamanho mínimo legível 36px** (corpo é 42px com folga). Exceção: `.fonte-externa` (24px).
- **Sem itálico.** `font-style: italic` proibido. Para ênfase use `<em>` reestilizado (cor navy em fundo claro, `--color-hero-blue-light` em fundo escuro; sem itálico) ou `<strong>` (peso aumentado).
- **Letter-spacing canônico** acima. Não usar `letter-spacing: 0` ou positivo em texto de slide.
- **Quebra de linha por sentença.** No render HTML, cada `.`, `?` ou `!` finalizador vira split em `<p>` separado.

## Destaque de texto no roteiro (2026-07-21)

Quem escreve o roteiro marca destaque envolvendo o trecho com `**` (ex.: `Se sua clínica ainda perde **agendamento** por mensagem esquecida`). O renderer converte `**texto**` em `<em>texto</em>` depois de escapar o HTML do campo — nunca antes, pra não abrir brecha de injeção via texto do roteiro. Resultado visual: cor de destaque do design system (navy ou azul claro, conforme o fundo) + peso 700, nunca itálico. Funciona em qualquer campo de texto (`titulo`, `texto_top`, `texto_bottom`, `chamada_final`, `bloco_destaque`, `fonte_externa`). Não é negrito real (`<strong>` continua existindo como opção separada se um dia for preciso), é o mesmo `<em>` reestilizado documentado acima.

## Footer logo

Presente em todos os arquétipos: `assets/opus-logo-navy.png` (fundo claro: `capa`, `conteudo-claro`, `cta`) ou `assets/opus-logo-white.png` (fundo escuro: `conteudo-escuro`, `conteudo-hero`), centralizado na base do canvas. Ver token `.footer-logo` em `css/template.css` (200px de largura, 56px da borda inferior, opacidade 0.92). Ver `identidade-derivada.md` para o histórico dessa decisão (revertida em 2026-07-21; originalmente esta skill não tinha nenhum header/footer).

## Bloco `imagem:` — formato declarado no roteiro

Não aplicável. Este template não suporta bloco `imagem:` em nenhum arquétipo. Se um roteiro declarar `imagem:`, a skill emite warning e ignora o campo.

## Como adicionar ou mudar um token

1. Editar este arquivo (valor + justificativa).
2. Editar `css/template.css` referenciando o novo valor.
3. Rodar Step 8 (export Playwright) num roteiro de teste para garantir que nada quebrou.
