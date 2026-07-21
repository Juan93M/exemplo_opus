# Workflow — carrossel-imagens-glassmorphism

Passos que a skill segue quando invocada com um roteiro para produzir os PNGs finais.

## Step 1 — Read and validate the roteiro

1. Ler o `roteiro.md` que o usuário forneceu (ou perguntar o path).
2. Parsear YAML frontmatter. Chaves obrigatórias: `carrossel` (slug), `template: carrossel-imagens-glassmorphism`, `data` (YYYY-MM-DD). Opcional: `autor`.
3. Parsear cada `## Slide NN`. Para cada um, extrair `arquetipo:` (`capa`, `conteudo-claro`, `conteudo-escuro`, `conteudo-hero` ou `cta`) e os campos declarados. Não há bloco `imagem:` neste template — se algum slide declarar `imagem:`, ignorar com warning (campo não suportado).
4. Validar contra `archetypes.md`. Campos obrigatórios faltando = hard error. Word counts = soft warning (exceto `capa.titulo` > 20 palavras e `conteudo.texto_top+texto_bottom` > 120 palavras, que são hard error).
5. Não há `cor_hero` variável neste template (hero é sempre navy, fixo). Se um roteiro declarar `cor_hero: laranja/roxo/azul`, ignorar com warning (esta skill só tem navy).
6. **Validar ausência de em-dashes (`—`) em qualquer texto de slide.** Hard error. Listar o campo exato que viola.
7. **Validar quebra de linha por sentença.** Para campos multi-sentença (`texto_top`, `texto_bottom`, `chamada_final`), confirmar que cada `.`, `?` ou `!` finalizador será renderizado como split em `<p>`.

Se validação falhar, abortar com mensagem clara listando cada violação.

## Step 2 — Sugerir imagens por slide e persistir no roteiro

Não aplicável. Este template não tem modalidade de imagem em nenhum arquétipo — pular este passo.

## Step 3 — Prepare output folder

O carrossel output mora fora desta skill, em `Marketing/Conteudo/<YYYY-MM-DD>-<carrossel-slug>/vN/` (N = próxima versão não usada). Nunca sobrescrever.

Copiar do skill para `vN/`:
- `css/template.css` → `vN/template.css`
- `scaffold/_export.js` → `vN/_export.js`
- `scaffold/assets/opus-logo-navy.png` → `vN/assets/opus-logo-navy.png`
- `scaffold/assets/opus-logo-white.png` → `vN/assets/opus-logo-white.png`

## Step 4 — Resolver assets do CTA

Não aplicável. Composição do CTA é só texto (sem foto, mockup ou checklist). Nenhum asset visual é usado em nenhum slide desta skill.

## Step 5 — Gerar e capturar imagens por slide

Não aplicável. Nenhuma imagem é gerada ou capturada por slide. O único elemento visual não-textual (o orb ambient) é 100% CSS, gerado no momento do render.

## Step 6 — Generate `vN/carrossel.html`

HTML shell (não desviar):

```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>{carrossel} · carrossel-imagens-glassmorphism</title>
<link rel="stylesheet" href="template.css">
</head>
<body>
  <section class="slide arquetipo-<nome>" id="s1"><!-- ... --></section>
  <section class="slide arquetipo-<nome>" id="s2"><!-- ... --></section>
</body>
</html>
```

Para cada slide, renderizar HTML do arquétipo usando os exemplos em `archetypes.md`. Todo arquétipo, sem exceção (inclusive `conteudo-hero` desde 2026-07-21), inclui os 2 blobs de fundo antes do `.card-inner`: `<div class="orb-navy"></div>` + `<div class="orb-blue-light"></div>` (padrão de 2 blobs diagonais, ver `design-system.md`). Em fundo escuro (`conteudo-escuro`, `conteudo-hero`), `.orb-navy` já resolve pra `--color-hero-blue-deep` via CSS — não precisa de classe/atributo diferente no HTML, só a classe `arquetipo-*` correta faz o override.

**Todo arquétipo inclui o footer logo** (2026-07-21): `<img class="footer-logo" src="assets/opus-logo-<navy|white>.png" alt="">` como último elemento da `<section>`. Variante `navy` em fundo claro (`capa`, `conteudo-claro`, `cta`); variante `white` em fundo navy (`conteudo-escuro`, `conteudo-hero`). O nome "Opus Automações" / "@opus.automacoes" por extenso continua sem componente de header fixo: só aparece se o texto do roteiro (campo `chamada_final` ou `plug` do CTA) mencionar explicitamente. A logo é identidade visual; o texto é editorial.

**Destaque de texto:** antes de escapar cada campo pro HTML final, converter `**texto**` em `<em>texto</em>`. A conversão roda sobre o texto já escapado (nunca antes), pra não abrir brecha de HTML vindo do roteiro.

**Regra dura de renderização: quebra de linha por sentença.** Para todo campo de texto multi-sentença (`texto_top`, `texto_bottom`, `chamada_final`), a skill deve fazer split por finalizador de sentença (`.`, `?`, `!` seguido de espaço ou fim de string) e emitir uma tag `<p>` por sentença. Exceção: `titulo` (capa, conteudo-hero, cta) e `bloco_destaque` (frase única, sem split).

## Step 7 — Generate `vN/preview.html`

Grid de PNGs exportados (slot por slide). Reusar `scaffold/preview.html` adaptando os paths.

## Step 8 — Export PNGs via Playwright + Deliver

Da pasta `vN/`:

```bash
cd "<absolute path to vN>"
node _export.js
```

Expected: `slide-01.png`, `slide-02.png`, ... gerados em `vN/`. Sem erros. Se Playwright não estiver disponível globalmente, hint para `npm install playwright` em pasta fora do Google Drive.

Artefatos finais em `vN/`:
- `carrossel.html` — gerado
- `preview.html` — grid de PNGs
- `template.css` — copy
- `_export.js` — Playwright script
- `slide-NN.png` — PNGs finais (entrega)
- `legenda.md` — caption Instagram (gerado ou pulado por escolha do usuário)

## Common rules (não violar)

- **Fidelidade ao roteiro.** Zero invenção de texto novo na renderização.
- **Em-dashes proibidos.** Hard error no Step 1.
- **Quebra de linha por `.`, `?`, `!` finalizador.** Aplicada em todos os campos multi-sentença.
- **Sem itálico** em qualquer texto de slide.
- **Word counts** são sugestões; hard errors só em campos obrigatórios ausentes ou nos limites marcados como hard error em `archetypes.md`.
- **Nunca sobrescrever `vN/` existente.** Sempre bumpar para `v(N+1)`.
- **Glass exige ambient atrás.** Todo card com `backdrop-filter: blur` precisa do `orb-navy` (ou do fundo navy sólido no caso de `conteudo-hero`) atrás dele, senão o blur não tem efeito visível.
- **Identidade fixa não renderizada.** Nome e handle nunca vêm de um componente de header; só aparecem se o roteiro escrever isso no texto do CTA.
- **node_modules fora do Drive.** Instalar Playwright em `C:\Users\juanp\AppData\Local\<projeto>\`.
