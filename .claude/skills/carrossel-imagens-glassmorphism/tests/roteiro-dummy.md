---
carrossel: smoke-carrossel-imagens-glassmorphism
template: carrossel-imagens-glassmorphism
data: 2026-07-20
autor: smoke-test
---

# Roteiro dummy — smoke-test carrossel-imagens-glassmorphism

Roteiro mínimo usado no smoke-test para validar que a skill produz PNGs válidos. Cobre cada um dos 5 arquétipos com conteúdo placeholder.

Não usar este roteiro em produção. É só para regressão visual.

## Slide 01

arquetipo: capa
titulo: Este smoke-test simula um título de capa perto do limite de vinte palavras, testando se o card estoura o canvas.
bloco_destaque: Validação automática de tamanho de fonte.

## Slide 02

arquetipo: conteudo-claro
titulo: Slide claro de validação
texto_top: Este é um texto multi-sentença para testar o split. Cada sentença deve virar um parágrafo separado. A terceira sentença confirma o comportamento.
fonte_externa: smoke-test

## Slide 03

arquetipo: conteudo-escuro
texto_top: Este slide testa o fundo escuro. O card de glass escuro precisa ficar **legível** em cima do navy.

## Slide 04

arquetipo: conteudo-hero
titulo: Este slide hero simula um título mais longo, perto de vinte e cinco palavras, pra confirmar que o bloco branco não deixa o texto vazar.
bloco_destaque: Fundo navy full-bleed.

## Slide 05

arquetipo: cta
titulo: Validar e seguir em frente
chamada_final: Smoke-test concluído. Verificar PNGs gerados em vN. Segue @opus.automacoes pra mais.
cta_url: "@opus.automacoes"

## Notas

- Nenhuma imagem é declarada neste dummy: a skill inteira é só-texto.
- PNGs esperados são salvos em `tests/expected-slides/` após aprovação. Servem como referência para regressão futura.
