# Workflow — carrossel-imagens-tema-tutorial

Passos que a skill segue quando invocada com um roteiro pra produzir os PNGs finais.

## Step 1 — Read and validate the roteiro

1. Ler o `roteiro.md` fornecido (ou perguntar o path, se modo interativo).
2. Parsear YAML frontmatter. Chaves obrigatórias: `carrossel` (slug), `template: carrossel-imagens-tema-tutorial`, `data` (YYYY-MM-DD). Opcional: `autor`.
3. Parsear cada `## Slide NN`. Extrair `arquetipo:` (`capa`, `conteudo` ou `cta`) e os campos declarados.
4. Validar contra `archetypes.md`. Campos obrigatórios faltando = hard error. Word counts fora do alvo = soft warning (exceto os marcados hard error).
5. `conteudo.tag` é obrigatório — hard error se faltar.
6. **Validar ausência de em-dashes (`—`) em qualquer texto de slide.** Hard error, listando o campo exato.
7. **Validar quebra de linha por sentença** nos campos multi-sentença (`texto`, `chamada_final`).
8. Se `imagem.tipo` for `ai`, hard error — modalidade não suportada nesta skill (só `print`/`svg`).

Se validação falhar, abortar com mensagem clara listando cada violação.

## Step 2 — Sugerir imagens por slide e persistir no roteiro

**Checar modo de invocação primeiro.** Se a skill está rodando em **modo YOLO** (disparada por rotina automática, sem ninguém pra responder): **pular este passo inteiramente**, mesmo que algum slide `conteudo` declare `imagem:`. Nenhuma imagem é resolvida nem sugerida; todo `conteudo` renderiza só-texto. Isso é uma decisão explícita de 2026-07-25 — revisitar quando o modo YOLO tiver como validar imagem sem supervisão humana.

Em **modo interativo**, pra cada slide `conteudo` sem `imagem:` declarada, oferecer a sugestão seguindo a ordem **print > svg** (nunca `ai` — não habilitada nesta skill):

1. Existe uma URL real pra printar (site, app, tela do produto sendo ensinado)? Sugerir `tipo: print` com essa URL.
2. Se não, é algo desenhável (ícone, diagrama simples, fluxo de 3-4 passos)? Sugerir `tipo: svg` com uma `descricao` do que desenhar.
3. Se nenhum dos dois fizer sentido, perguntar se o usuário quer pular a imagem desse passo (`imagem: none`).

Persistir a decisão no próprio `roteiro.md`, reescrevendo só o bloco `## Slide NN` afetado.

## Step 3 — Prepare output folder

Output mora fora desta skill, em `Marketing/Conteudo/<YYYY-MM-DD>-<carrossel-slug>/vN/` (N = próxima versão não usada). Nunca sobrescrever.

Copiar do skill pra `vN/`:
- `css/template.css` → `vN/template.css`
- `scaffold/_export.js` → `vN/_export.js`
- Criar `vN/imagens/` (pasta vazia, recebe os prints/svgs gerados no Step 5)

## Step 4 — Resolver assets do CTA

Se `plug` foi declarado no slide `cta`, nada a resolver além do texto (é só texto, sem asset visual).

## Step 5 — Gerar e capturar imagens por slide

Não aplicável em modo YOLO (ver Step 2). Em modo interativo, pra cada slide `conteudo` com `imagem:` resolvida:

- **`tipo: print`:** `npx playwright screenshot --browser=chromium --viewport-size=1440,2000 --full-page "<url>" "vN/imagens/sNN.png"`. Validar PNG > 10KB (detecta login wall/rate limit/redirect silencioso). Se falhar, oferecer URL alternativa ou trocar pra `none`.
- **`tipo: svg`:** a skill escreve o SVG direto no HTML (custo zero), seguindo `image-gen/svg-guide.md`. Geometria limpa, sem gradiente complexo, raios 8-16px, sem parágrafo dentro do SVG.

## Step 6 — Generate `vN/carrossel.html`

HTML shell (não desviar):

```html
<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<title>{carrossel} · carrossel-imagens-tema-tutorial</title>
<link rel="stylesheet" href="template.css">
</head>
<body>
  <section class="slide arquetipo-<nome>" id="s1"><!-- ... --></section>
  <section class="slide arquetipo-<nome>" id="s2"><!-- ... --></section>
</body>
</html>
```

Pra cada slide, renderizar HTML do arquétipo usando os exemplos em `archetypes.md`. Toda `<section>` contém um único `.card` (moldura preta é o próprio `.slide`, os entalhes são `::before`/`::after` do `.card` via CSS, não precisam de div própria).

**Todo card termina com `<p class="handle">@opus.automacoes</p>`** — fixo, sempre laranja, nunca vem do roteiro.

**Destaque de texto:** antes de escapar cada campo pro HTML final, converter `**texto**` em `<em>texto</em>`. A conversão roda sobre o texto já escapado (nunca antes), pra não abrir brecha de HTML vindo do roteiro.

**Quebra de linha por sentença:** para `texto` e `chamada_final`, split por `.`, `?`, `!` finalizador (seguido de espaço ou fim de string) e emitir um `<p>` por sentença. Exceção: `titulo`, `tag`, `bloco_destaque`, `fonte_externa` (frase única, sem split).

## Step 7 — Generate `vN/preview.html`

Grid de PNGs exportados. Reusar `scaffold/preview.html` adaptando os paths.

## Step 8 — Export PNGs via Playwright + Deliver

Da pasta `vN/`:

```bash
cd "<absolute path to vN>"
node _export.js
```

Expected: `slide-01.png`, `slide-02.png`, ... gerados em `vN/`. Sem erros. Se Playwright não estiver disponível globalmente, hint pra `npm install playwright` em pasta fora do Google Drive.

Artefatos finais em `vN/`:
- `carrossel.html` — gerado
- `preview.html` — grid de PNGs
- `template.css` — copy
- `_export.js` — Playwright script
- `imagens/` — prints/svgs usados (vazia em modo YOLO)
- `slide-NN.png` — PNGs finais (entrega)
- `legenda.md` — caption Instagram (gerado ou pulado por escolha do usuário)

## Common rules (não violar)

- **Fidelidade ao roteiro.** Zero invenção de texto novo na renderização.
- **Em-dashes proibidos.** Hard error no Step 1.
- **Quebra de linha por `.`, `?`, `!` finalizador**, aplicada em todos os campos multi-sentença.
- **Sem itálico** em qualquer texto de slide.
- **Modalidade de imagem: só `print` ou `svg`.** `ai` é hard error no Step 1.
- **Modo YOLO nunca gera imagem.** Ver Step 2.
- **Footer `@opus.automacoes` é sempre automático**, nunca um campo do roteiro.
- **Nunca sobrescrever `vN/` existente.** Sempre bumpar pra `v(N+1)`.
- **Entalhes do ticket usam `var(--color-preto)`**, nunca a cor de fundo de alguma página/preview — são a moldura "revelando" a si mesma através do card.
- **node_modules fora do Drive.** Instalar Playwright em `C:\Users\juanp\AppData\Local\<projeto>\`.
