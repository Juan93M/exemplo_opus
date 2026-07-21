# Archetypes — carrossel-imagens-glassmorphism

Specs canônicas dos 5 arquétipos desta skill. Cada slide do roteiro declara `arquetipo:` correspondente a um dos blocos abaixo. Nenhum arquétipo suporta bloco `imagem:` (ver `identidade-derivada.md`): este template é 100% só-texto, o visual vem do orb ambient + blur.

## capa

Schema:

```yaml
arquetipo: capa
titulo: "string"           # frase única, sem split por ponto
bloco_destaque: "string?"  # opcional, frase curta de ênfase em navy
```

Slot:
- Fundo: gradient ambient branco → cinza claro (`--color-creme` → `--color-creme-alt`), com os 2 blobs diagonais desfocados atrás do card (`.orb-navy` canto superior-esquerdo + `.orb-blue-light` canto inferior-direito — ver "Padrão de 2 blobs diagonais" em `design-system.md`).
- Glass card claro centralizado verticalmente (`justify-content: center` no `.slide`), contendo `titulo` e, se presente, `bloco_destaque` em navy bold logo abaixo.
- Sem imagem (campo removido do schema desta skill, ver `identidade-derivada.md`).

Regras:
- `titulo`: 1 sentença, sem split. Word count alvo: 6-14 palavras. Hard error se > 20.
- `bloco_destaque`: 1 sentença curta opcional, 3-8 palavras.

Exemplo:

```html
<section class="slide arquetipo-capa" id="s1">
  <div class="orb-navy"></div>
  <div class="orb-blue-light"></div>
  <div class="card-inner">
    <p class="capa-titulo">O que a IA muda de verdade pra quem toca uma clínica pequena.</p>
    <p class="capa-destaque">Sem jargão técnico.</p>
  </div>
  <img class="footer-logo" src="assets/opus-logo-navy.png" alt="">
</section>
```

## conteudo-claro

Schema:

```yaml
arquetipo: conteudo-claro
titulo: "string?"          # opcional, frase única sem split
texto_top: "string"        # multi-sentença, split em <p>
texto_bottom: "string?"    # opcional, multi-sentença, split em <p>
fonte_externa: "string?"   # atribuição em mono 24px
```

Slot:
- Fundo: mesmo ambient claro da capa (branco → cinza claro + os 2 blobs diagonais).
- Glass card claro centralizado, texto ocupa o card inteiro (sem imagem).

Regras:
- `texto_top`/`texto_bottom`: split por `.?!` em `<p>` separados.
- Word count alvo corpo total: 30-80 palavras. Hard error se > 120.

## conteudo-escuro

Schema: idêntico a `conteudo-claro`.

Slot:
- Fundo: navy sólido (`--color-preto`) com os 2 blobs diagonais recoloridos pro contexto escuro: `.orb-navy` vira `--color-hero-blue-deep` (navy sobre navy não gera contraste), `.orb-blue-light` continua `--color-hero-blue-light`.
- Glass card escuro (`--g-bg-escuro`, tint branco translúcido 6%), texto em branco (`--color-creme`), `<em>` em `--color-hero-blue-light`.

Regras: mesmas de `conteudo-claro`, cor de texto invertida.

## conteudo-hero

Schema:

```yaml
arquetipo: conteudo-hero
titulo: "string"           # frase única, sem split (mesmo tratamento de capa/cta)
bloco_destaque: "string"   # OBRIGATÓRIO, vai no bloco branco
fonte_externa: "string?"
```

Slot (revisado 2026-07-21 — ver `identidade-derivada.md`):
- Fundo: navy sólido full-bleed (`--color-hero-navy`) com os 2 blobs diagonais recoloridos pro contexto escuro (mesma receita de `conteudo-escuro`: `.orb-navy` → `--color-hero-blue-deep`, `.orb-blue-light` inalterado).
- Glass card ~70% width, centralizado, translúcido (`--g-bg-escuro`, mesmo tratamento de `conteudo-escuro`), com `titulo` (classe `.hero-titulo`, `--fs-h2` 64px, branco) + `bloco_destaque` (classe `.conteudo-destaque`, `--color-hero-blue-light`).
- Sem imagem (this arquétipo nunca teve bloco `imagem:` — a diferença agora é só o card ser vidro, não mais opaco).

Regras:
- `bloco_destaque` é obrigatório neste arquétipo.
- `titulo`: word count alvo 8-20 palavras. Hard error se > 25 (mesmo teto de segurança do `cta.titulo`, ver nota de font-size abaixo).
- Imagem é ignorada mesmo se declarada (warning soft, campo não suportado nesta skill).

Exemplo:

```html
<section class="slide arquetipo-conteudo-hero" id="s4">
  <div class="orb-navy"></div>
  <div class="orb-blue-light"></div>
  <div class="card-inner">
    <p class="hero-titulo">O ganho real é tempo de trabalho repetitivo devolvido pro time.</p>
    <p class="conteudo-destaque">Tempo devolvido pro raciocínio jurídico.</p>
  </div>
  <img class="footer-logo" src="assets/opus-logo-white.png" alt="">
</section>
```

**Nota de font-size (correção pós smoke-test):** `capa.titulo` e `conteudo-hero.titulo` usam `--fs-h2` (64px), não `--fs-hero` (116px) nem `--fs-h1` (88px). O primeiro smoke-test rodou só com placeholder curtíssimo e não pegou o problema; testando com conteúdo real (frases de 20-27 palavras, dentro do limite documentado) a 116px/88px o texto tomava o canvas inteiro sem respiro, ou estourava a margem inferior. `--fs-h2` (64px) foi validado com uma frase de 24 palavras no `cta.titulo` e manteve respiro visível em todos os lados.

## cta

Schema:

```yaml
arquetipo: cta
titulo: "string"            # frase única, sem split
chamada_final: "string?"    # opcional, multi-sentença, split em <p>
cta_url: "string"           # @handle ou link bio
plug:                       # opcional
  texto: "string"
  url: "string"
```

Slot:
- Mesmo tratamento visual da capa (ambient claro + glass card centralizado).
- Só texto: `titulo` + `chamada_final` centralizados + `plug` (se presente) como footer pequeno dentro do card.
- **Identidade da conta:** como esta skill não tem header/footer fixo, o nome "Opus Automações" e/ou "@opus.automacoes" precisa aparecer explicitamente dentro de `chamada_final` (ex.: "Segue @opus.automacoes pra mais"). Isso é responsabilidade de quem escreve o roteiro, não do renderer.

Regras:
- `titulo`: 1 sentença, sem split. Word count alvo: 8-20 palavras.
- `chamada_final`: split por `.?!` em `<p>` separados. Word count alvo: 20-40 palavras.
- `plug`: aparece como footer pequeno (sans, 22px, opacity 0.8), sem itálico.

## Regras de renderização (todos os arquétipos)

### Split por sentença

Para `texto_top`, `texto_bottom`, `chamada_final`:

- Split por `.`, `?` ou `!` finalizador de sentença (seguido de espaço ou fim de string).
- Cada sentença vira um `<p>` separado dentro do bloco. CSS aplica `margin-top` entre `<p> + <p>` para respiro vertical.

### Exceções ao split

Campos onde NÃO splitar (mesmo com `.` interno):

- `titulo` de `capa`, `conteudo-hero` e `cta` — frase única.
- `bloco_destaque` — frase única.
- `fonte_externa` — atribuição curta, sem split.

### Centralização vertical

Todos os arquétipos usam `.slide { justify-content: center }`: o conteúdo (orb + card, ou bloco branco) fica centralizado como bloco único no canvas, não ancorado no topo.

### Destaque de texto (`**texto**`)

Em qualquer campo de texto (`titulo`, `texto_top`, `texto_bottom`, `chamada_final`, `bloco_destaque`, `fonte_externa`), envolver um trecho com `**` marca destaque: `Se sua clínica ainda perde **agendamento** por mensagem esquecida`. O renderer converte pra `<em>` (cor de destaque do sistema + peso 700, nunca itálico) depois de escapar o restante do campo. Não splitar nem remover os `**` antes da conversão de ênfase — a conversão roda sobre o texto já escapado, então nunca abre brecha de HTML vindo do roteiro.

### Footer logo

Todo arquétipo inclui `<img class="footer-logo" src="assets/opus-logo-<navy|white>.png" alt="">` como último elemento da `<section>`, depois do `.card-inner` (ou do bloco branco, em `conteudo-hero`). Variante `navy` em `capa`/`conteudo-claro`/`cta` (fundo claro); variante `white` em `conteudo-escuro`/`conteudo-hero` (fundo navy).

## Word counts (sugestões, não hard errors)

| Campo | Min | Alvo | Max |
|---|---|---|---|
| `capa.titulo` | 6 | 6-14 | 20 (hard error) |
| `capa.bloco_destaque` | 3 | 3-8 | 15 |
| `conteudo.titulo` | 0 | 4-8 | 15 |
| `conteudo.texto_top` + `texto_bottom` | 30 | 30-80 | 120 (hard error) |
| `conteudo-hero.titulo` | 6 | 8-20 | 25 (hard error) |
| `conteudo-hero.bloco_destaque` | 3 | 5-10 | 15 |
| `cta.titulo` | 8 | 8-20 | 30 |
| `cta.chamada_final` | 0 | 20-40 | 60 |

Acima do max é soft warning (exceto onde marcado hard error); o renderer ainda gera, só avisa. Abaixo do min em campos obrigatórios é hard error.
