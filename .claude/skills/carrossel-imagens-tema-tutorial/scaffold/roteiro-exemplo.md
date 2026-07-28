---
carrossel: exemplo-tema-tutorial
template: carrossel-imagens-tema-tutorial
data: 2026-07-25
autor: Opus Automações
---

# Roteiro exemplo — carrossel-imagens-tema-tutorial

Roteiro de demonstração mostrando os 3 arquétipos desta skill com campos preenchidos. Use como referência ao criar roteiros reais.

## Slide 01

arquetipo: capa
tag: GUIA RÁPIDO
titulo: Automatize a confirmação de consulta no WhatsApp.
bloco_destaque: Sem programar, sem contratar dev.

## Slide 02

arquetipo: conteudo
tag: PASSO 1
titulo: Baixe o WhatsApp Business no seu celular.
texto: É grátis e funciona junto com o WhatsApp normal. Você não perde as conversas antigas, só ganha ferramentas de negócio em cima delas.

## Slide 03

arquetipo: conteudo
tag: PASSO 2
titulo: Conecte sua conta e ative as respostas automáticas.
imagem:
  tipo: svg
  descricao: Fluxo simples de 3 caixas conectadas por setas, "App" → "QR Code" → "Conectado", na paleta creme/preto/laranja da skill.
texto: Abra o app, vá em Configurações, Dispositivos conectados, e escaneie o QR code. Isso é **dia 1**, não dia 100 de automação.

## Slide 04

arquetipo: conteudo
tag: PASSO 3
titulo: Configure a mensagem de confirmação.
texto: Defina o texto que vai sair automático quando alguém marcar horário. Teste com você mesmo antes de ativar pros clientes de verdade.

## Slide 05

arquetipo: cta
tag: RESUMO
titulo: Três passos, e sua agenda para de vazar horário.
chamada_final: Comenta "automação" que a gente te ajuda a configurar isso na sua clínica. Segue @opus.automacoes pra mais tutoriais como esse.
cta_url: "@opus.automacoes"
plug:
  texto: "Quer isso pronto sem mexer em nada? Fala com a Opus."
  url: "opus.automacoes/contato"

## Notas sobre formatação

- Cada `.`, `?` ou `!` finalizador de sentença vira quebra de linha no render, exceto em `titulo`, `tag`, `bloco_destaque`, `fonte_externa`.
- Em-dashes (`—`) são proibidos. Use ponto, vírgula, dois-pontos, hífen simples ou reformule.
- Texto entre `**asterisco-duplo**` vira destaque laranja (`<em>`), sem itálico.
- `conteudo.tag` é obrigatório em todo slide de passo — é o que numera o tutorial.
- `imagem:` só aceita `tipo: print` ou `tipo: svg`. Em modo YOLO (rotina automática), esse bloco é ignorado e o slide sai só-texto.
- O footer `@opus.automacoes` em laranja aparece sozinho, automático, em todo slide — não precisa (e não deve) ser escrito no roteiro.

## Legenda Instagram (separado)

A legenda vai em arquivo separado `legenda.md` na mesma pasta do carrossel, gerado pela skill ou escrito manualmente. Não vai dentro do roteiro.
