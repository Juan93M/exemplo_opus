---
carrossel: exemplo-glassmorphism
template: carrossel-imagens-glassmorphism
data: 2026-07-20
autor: Opus Automações
---

# Roteiro exemplo — carrossel-imagens-glassmorphism

Roteiro de demonstração mostrando cada um dos 5 arquétipos desta skill com campos preenchidos. Use como referência ao criar roteiros reais.

## Slide 01

arquetipo: capa
titulo: A maioria das clínicas perde paciente no WhatsApp sem perceber onde.
bloco_destaque: Não é falta de equipe.

## Slide 02

arquetipo: conteudo-claro
titulo: O gargalo mais comum
texto_top: Duas pessoas cuidando de balcão, telefone e WhatsApp ao mesmo tempo. Mensagem de paciente se perde no meio da correria. Isso não é exceção, é rotina em consultório pequeno.

## Slide 03

arquetipo: conteudo-escuro
texto_top: Automatizar não significa tirar gente do atendimento. Significa tirar da mão da equipe a pergunta que se repete **quarenta vezes por dia**.

## Slide 04

arquetipo: conteudo-hero
titulo: O resultado costuma aparecer rápido.
bloco_destaque: Em semanas, não em meses.

## Slide 05

arquetipo: cta
titulo: Quer mapear onde sua operação está perdendo tempo?
chamada_final: Comenta "diagnóstico" que a gente te ajuda a mapear isso. Segue @opus.automacoes pra mais casos como esse.
cta_url: "@opus.automacoes"

## Notas sobre formatação

- Cada `.`, `?` ou `!` finalizador de sentença vira quebra de linha no render.
- Em-dashes (`—`) são proibidos. Use ponto, vírgula, dois-pontos, hífen simples ou reformule.
- `titulo` e `bloco_destaque` são frase única, sem split.
- Texto entre asterisco-duplo vira destaque (`<em>` reestilizado, cor de contraste + peso maior, nunca itálico). Ver exemplo no slide 03.
- Este template não suporta bloco `imagem:` nem `cor_hero:` variável (hero é sempre navy) em nenhum arquétipo.
- Identidade "Opus Automações" / "@opus.automacoes" por extenso não é renderizada como header: precisa estar escrita no texto do CTA quando fizer sentido citar. A logo (ícone + wordmark) aparece sozinha, centralizada na base de todo slide.

## Legenda Instagram (separado)

A legenda do post Instagram vai em arquivo separado `legenda.md` na mesma pasta do carrossel, gerado pela skill ou escrito manualmente. Não vai dentro do roteiro.
