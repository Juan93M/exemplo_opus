# Archetypes — carrossel-imagens-tema-tutorial

Specs canônicas dos 3 arquétipos desta skill (set mínimo). Cada slide do roteiro declara `arquetipo:` correspondente a um dos blocos abaixo.

Todo arquétipo compartilha o mesmo shell visual: `.slide` preto full-bleed (`var(--color-preto)`) com `--margin-frame` de moldura, um `.card` creme com dois entalhes (topo e base) e o footer `@opus.automacoes` fixo centralizado na base do card.

## capa

Schema:

```yaml
arquetipo: capa
tag: "string?"              # opcional, kicker curto tipo "TUTORIAL" ou "GUIA RÁPIDO"
titulo: "string"            # frase única, sem split por ponto
bloco_destaque: "string?"   # opcional, subtítulo curto
```

Slot:
- Moldura preta + card creme centralizado verticalmente (`justify-content: center` no `.slide`).
- `tag` (se presente) no topo do card, mono laranja, uppercase.
- `titulo` em Fraunces bold, `--fs-headline`.
- `bloco_destaque` (se presente) logo abaixo, Source Serif, `--fs-subtitulo`, cor `--color-ink-body`.
- Footer `@opus.automacoes` no rodapé do card.
- Sem imagem (capa desta skill não suporta `imagem:`).

Regras:
- `titulo`: 1 sentença, sem split. Word count alvo: 6-14 palavras. Hard error se > 20.
- `bloco_destaque`: 1 sentença curta opcional, 3-10 palavras.

Exemplo:

```html
<section class="slide arquetipo-capa" id="s1">
  <div class="card">
    <p class="tag">GUIA RÁPIDO</p>
    <p class="headline">Automatize a confirmação de consulta no WhatsApp.</p>
    <p class="subtitulo">Sem programar, sem contratar dev.</p>
    <p class="handle">@opus.automacoes</p>
  </div>
</section>
```

## conteudo

Schema:

```yaml
arquetipo: conteudo
tag: "string"                # obrigatório, ex "PASSO 1"
titulo: "string"             # frase única, a ação do passo
texto: "string"               # multi-sentença, split em <p>
imagem:                       # opcional
  tipo: print|svg
  url: "string"                # obrigatório se tipo: print
  descricao: "string"          # obrigatório se tipo: svg
fonte_externa: "string?"
```

Slot:
- `tag` sempre presente, mono laranja, uppercase (ex.: `PASSO 1`, `PASSO 2`).
- `titulo` em Fraunces bold, `--fs-headline`, logo abaixo da tag.
- Se `imagem` declarada: bloco 16:9 (`--radius-image`, border sutil `1px solid rgba(35,26,18,0.12)`) entre `titulo` e `texto`.
- `texto` em Source Serif, `--fs-body`, split por sentença em `<p>` separados.
- `fonte_externa` (se presente) em mono `--fs-caption`, canto inferior do bloco de texto, acima do footer.
- Footer `@opus.automacoes` no rodapé do card.

Regras:
- `tag`: obrigatório, curto (1-3 palavras, ex. "PASSO 1", "ANTES DE COMEÇAR").
- `titulo`: 1 sentença, sem split. Word count alvo: 4-12 palavras.
- `texto`: split por `.?!` em `<p>` separados. Word count alvo: 20-70 palavras. Hard error se > 100 (card menor que o conteudo da glassmorphism, por causa do espaço que a tag+imagem ocupam).
- Imagem é opcional. Ordem de preferência **print > svg** (nunca `ai` nesta skill — não habilitada). Antes de sugerir `svg`, checar se existe uma URL real pra printar.

Exemplo (com imagem svg):

```html
<section class="slide arquetipo-conteudo" id="s2">
  <div class="card">
    <p class="tag">PASSO 2</p>
    <p class="headline">Conecte sua conta do WhatsApp Business.</p>
    <div class="imagem-slot">
      <svg viewBox="0 0 320 180" ...>...</svg>
    </div>
    <div class="texto">
      <p>Abra o app e vá em Configurações, Dispositivos conectados.</p>
      <p>Escaneie o QR code. Leva menos de 2 minutos.</p>
    </div>
    <p class="handle">@opus.automacoes</p>
  </div>
</section>
```

## cta

Schema:

```yaml
arquetipo: cta
tag: "string?"                # opcional, ex "RESUMO"
titulo: "string"              # frase única, sem split
chamada_final: "string?"      # opcional, multi-sentença, split em <p>
cta_url: "string"             # @handle ou link bio
plug:                         # opcional
  texto: "string"
  url: "string"
```

Slot:
- Mesmo shell da capa (moldura + card centralizado).
- `tag` opcional no topo.
- `titulo` + `chamada_final` centralizados.
- `plug` (se presente): footer pequeno dentro do card, mono, `opacity: 0.75`, acima do handle fixo. Sem itálico.
- Footer `@opus.automacoes` sempre no rodapé — se `cta_url` for o mesmo handle, não duplica; se for outro link, `cta_url` aparece como linha própria acima do handle fixo.

Regras:
- `titulo`: 1 sentença, sem split. Word count alvo: 8-20 palavras.
- `chamada_final`: split por `.?!` em `<p>` separados. Word count alvo: 15-35 palavras.
- `plug`: sans/mono pequeno, sem itálico, `opacity: 0.75`.

## Regras de renderização (todos os arquétipos)

### Split por sentença

Para `texto` e `chamada_final`: split por `.`, `?` ou `!` finalizador (seguido de espaço ou fim de string). Cada sentença vira `<p>` separado, com `margin-top` entre `<p> + <p>`.

### Exceções ao split

`titulo`, `tag`, `bloco_destaque`, `fonte_externa` — frase única, nunca splitados mesmo com ponto interno.

### Destaque de texto (`**texto**`)

Em `titulo`, `texto`, `chamada_final`, `bloco_destaque`: um trecho entre `**` vira `<em>` (cor `--color-hero-laranja`, peso 600, sem itálico) depois do escape HTML.

### Centralização vertical

Todo arquétipo usa `.slide { justify-content: center }`: o card fica centralizado como bloco único no canvas.

### Footer fixo

`@opus.automacoes` é renderizado pelo template em TODO slide, sempre no mesmo lugar (base do card, centralizado, laranja, mono). Não é campo do roteiro — nunca pedir isso ao usuário.

## Word counts (sugestões, não hard errors salvo indicado)

| Campo | Min | Alvo | Max |
|---|---|---|---|
| `capa.titulo` | 6 | 6-14 | 20 (hard error) |
| `capa.bloco_destaque` | 3 | 3-10 | 15 |
| `conteudo.tag` | 1 | 1-3 | 4 |
| `conteudo.titulo` | 4 | 4-12 | 16 |
| `conteudo.texto` | 20 | 20-70 | 100 (hard error) |
| `cta.titulo` | 8 | 8-20 | 25 |
| `cta.chamada_final` | 0 | 15-35 | 50 |
