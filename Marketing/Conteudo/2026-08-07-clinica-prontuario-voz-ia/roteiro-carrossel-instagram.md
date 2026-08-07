---
carrossel: 2026-08-07-clinica-prontuario-voz-ia
data: 2026-08-07
autor: Opus Automações (YOLO, via pesquisa-tutorial-carrossel)
---

## Decisões automáticas

- **Arquétipo:** Tutorial (âncora estratégica = método, sequência de 5 passos do fluxo de prontuário por voz, da checagem se a função já existe no sistema até a revisão final antes de salvar).
- **Objetivo:** Salvar (roteiro prático de referência que o profissional revisita quando for configurar/testar a função no próprio sistema), com o CTA também abrindo espaço pra quem prefere que alguém monte/configure esse tipo de automação por ele, sem forçar menção de marca no corpo do conteúdo.
- **Fonte usada:** central de suporte do Afya iClinic (passo a passo literal com nome de botão/tela) e blogs/central de ajuda de Voa Health, ProDoctor, Klinity, Amplimed e GestãoDS (2026), todos descrevendo o mesmo padrão — captura de áudio da consulta, estruturação automática dos campos do prontuário, revisão obrigatória antes de salvar — ver `pesquisa-tema.md` na mesma pasta pros links.
- **Limitação de ferramenta desta execução (transparência):** `WebFetch` retornou `EGRESS_BLOCKED` em toda tentativa nesta sessão (mesma limitação já registrada nas execuções de 2026-08-04, 2026-08-05 e 2026-08-06 desta rotina). Todo o passo a passo e as métricas usados neste roteiro vêm do que o `WebSearch` já retornou sintetizado das páginas reais citadas — nenhum detalhe técnico foi inventado além disso.
- **Eixo pulado por falta de material confiável (não inventado):** não há caso vivo de um consultório específico nomeado usando a função (nenhuma fonte trouxe um profissional/consultório nomeado com resultado verificável) — o carrossel foi construído em cima do passo a passo técnico + das métricas de tempo citadas por fontes distintas (Voa Health: 38h/mês e 80% de redução; Klinity: até 70%), sem inventar caso nem estatística fora do que as fontes trouxeram.
- **Atenção ao padrão 20 (fórmula engessada de público-alvo):** carrosséis anteriores desta rotina (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto". Neste carrossel, a frase de "pra quem serve" fica ancorada no comportamento específico levantado na pesquisa — dividir a atenção entre olhar pro paciente e digitar durante a consulta, e o prontuário que sobra pra terminar fora do horário de atendimento — e não num molde genérico.

---

## Slide 01 [capa — gancho de curiosidade]

Enquanto você fala com o paciente, seu sistema de prontuário pode estar pronto pra escrever a consulta inteira sozinho. A maioria dos consultórios pequenos nunca ligou essa função.

[contagem: 28 palavras]

## Slide 02 [re-hook — o método]

Chama-se prontuário por voz. Você atende normalmente, sem abrir campo de texto nem parar de olhar pro paciente. A inteligência artificial escuta a consulta inteira em segundo plano, separa o que é fala do profissional e o que é fala do paciente, e organiza tudo nos campos certos do prontuário sozinha.

[contagem: 51 palavras]

## Slide 03 [problema / pra quem serve — comportamento específico]

O prontuário raramente atrasa por falta de cuidado. Atrasa porque, no meio da consulta, quem atende divide a atenção entre escutar o paciente e digitar o que ele acabou de dizer. O que não dá tempo de registrar na hora vira tarefa pra depois do último atendimento do dia, ou pro fim de semana.

[contagem: 53 palavras]

## Slide 04 [passo 1: confira se o sistema já tem a função]

Primeiro passo: confira se o sistema de prontuário que seu consultório já usa tem essa opção. Ferramentas como iClinic, ProDoctor e outros sistemas de prontuário eletrônico já oferecem prontuário por voz ou assistente de IA integrado, sem precisar trocar de sistema nem contratar time técnico pra instalar nada.

[contagem: 48 palavras]

## Slide 05 [passo 2: ativar a captura de áudio]

Segundo passo: no início do atendimento, abra a ficha do paciente, escolha se é consulta nova ou retorno e ative a captura de áudio. Da primeira vez, o navegador vai pedir permissão pra usar o microfone. Depois disso, é só clicar em gravar sempre que abrir uma nova consulta.

[contagem: 49 palavras]

## Slide 06 [pattern break — o tempo que isso devolve]

Uma das plataformas de prontuário por IA usadas no Brasil registra até 38 horas a menos de trabalho administrativo por mês, por profissional, e mais de 80% de redução no tempo gasto digitando durante a consulta. Outra chega a 70% de economia no tempo de documentação. Isso é tempo de vida, não só de agenda.

[contagem: 55 palavras]

## Slide 07 [passo 3: conduzir a consulta normalmente]

Terceiro passo: conduza a consulta normalmente, olhando pro paciente em vez de pra tela. A IA escuta a conversa inteira em segundo plano, sem interromper, e consegue distinguir quem é o profissional e quem é o paciente só pelo jeito de falar e pela ordem da conversa.

[contagem: 47 palavras]

## Slide 08 [passo 4: finalizar e receber o resumo]

Quarto passo: ao terminar o atendimento, clique em finalizar. Em segundos, o sistema devolve um resumo já organizado nos campos certos do prontuário, queixa, histórico, conduta, e, separadamente, a transcrição completa da conversa, caso precise conferir algum detalhe que passou batido.

[contagem: 41 palavras]

## Slide 09 [passo 5: revisar antes de salvar]

Quinto e último passo: revise o texto que a IA escreveu, corrija nome, remédio ou qualquer detalhe que precisar de ajuste, e só então confirme e salve no prontuário definitivo. A IA nunca salva sozinha sem essa revisão. Quem assina o prontuário continua sendo o profissional, não o sistema.

[contagem: 49 palavras]

## Slide 10 [resultado esperado]

Isso não é recurso de uma ferramenta só. iClinic, ProDoctor, Voa Health, Klinity e outros sistemas de prontuário eletrônico usados no Brasil já oferecem essa função hoje. O resultado é sair do consultório com o prontuário praticamente pronto, sem levar dever de casa de digitação pra depois do expediente.

[contagem: 49 palavras]

## Slide 11 [cta]

Salva esse passo a passo pra conferir se o sistema do seu consultório já tem prontuário por voz escondido no menu. Se preferir não configurar sozinho, esse é exatamente o tipo de automação que dá pra contratar pronta, plugada no sistema que o consultório já usa, sem trocar de ferramenta.

[contagem: 51 palavras]

---

## Diagnóstico (Fase 6)

- **B1 (Humanizador, 20 padrões anti-IA):** ✅ passou — sem travessão longo, sem "não é X, é Y" (exceto a construção afirmativa "Isso não é recurso de uma ferramenta só", que é claim direto com prova, não o padrão vazio), sem frase vazia tipo "muda o jogo", sem atribuição vaga (métricas sempre situadas por plataforma citada no dossiê), sem voz de coach acusatório, sem CTA preguiçoso, sem fórmula de público-alvo genérica (âncora no comportamento de dividir atenção entre paciente e tela, e prontuário que sobra pra fora do expediente, não em "médico autônomo, consultório pequeno, time enxuto").
- **B2 (Densidade de palavras):** ✅ passou — slide 1 com 28 palavras (abaixo de 80, frases completas), slides 2 a 10 entre 41 e 55 palavras, CTA com 51 palavras e substância concreta (ação de conferir o sistema + alternativa de contratar pronto).
- **B3 (Fidelidade à fonte externa):** ✅ passou — os 5 passos vêm diretamente do passo a passo literal da central de suporte do Afya iClinic (nomes de tela/botão traduzidos pra linguagem leiga) e do padrão convergente descrito por Voa Health e ProDoctor; as métricas do pattern break (38h/mês, 80%, 70%) vêm de duas fontes distintas (Voa Health e Klinity), citadas separadamente sem misturar números de fontes diferentes numa única alegação. `WebFetch` bloqueado nesta sessão impediu abrir o texto completo das páginas — extração feita via `WebSearch`, sem inventar detalhe técnico além do que as buscas sintetizaram.
- **Qualidade:** 9/10. Ponto de atenção: não há caso vivo nomeado (nenhum consultório real citado usando a função) — decisão consciente de não inventar, registrada nas Decisões automáticas acima.
