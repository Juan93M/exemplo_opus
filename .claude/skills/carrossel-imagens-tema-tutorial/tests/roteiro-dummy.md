---
carrossel: smoke-carrossel-imagens-tema-tutorial
template: carrossel-imagens-tema-tutorial
data: 2026-07-25
autor: smoke-test
---

# Roteiro dummy — smoke-test carrossel-imagens-tema-tutorial

Roteiro mínimo usado no smoke-test pra validar que a skill produz PNGs válidos. Cobre os 3 arquétipos, um bloco de imagem svg, e o destaque `**texto**`.

Não usar este roteiro em produção. É só pra regressão visual.

## Slide 01

arquetipo: capa
tag: SMOKE TEST
titulo: Este smoke-test simula um título de capa perto do limite de catorze palavras testando o card.
bloco_destaque: Validação automática de layout.

## Slide 02

arquetipo: conteudo
tag: PASSO 1
titulo: Este slide testa o bloco de imagem e o texto multi-sentença.
imagem:
  tipo: svg
  descricao: Fluxo simples de 3 caixas conectadas por setas, na paleta creme/preto/laranja.
texto: Este é um texto multi-sentença para testar o split. Cada sentença deve virar um parágrafo separado. Esta terceira sentença tem uma palavra em **destaque** pra validar o em laranja.

## Slide 03

arquetipo: cta
tag: RESUMO
titulo: Validar e seguir em frente
chamada_final: Smoke-test concluído. Verificar PNGs gerados em vN. Segue @opus.automacoes pra mais.
cta_url: "@opus.automacoes"
plug:
  texto: "Isso é um plug de teste, não é real."
  url: "exemplo.com"

## Notas

- Nenhuma imagem `print` é testada aqui (evita dependência de rede no smoke-test) — só `svg`.
- PNGs esperados são salvos em `tests/expected-slides/` após aprovação. Servem como referência pra regressão futura.
