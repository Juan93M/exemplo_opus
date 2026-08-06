# Roteiro — Carrossel Instagram

## Decisões automáticas (modo YOLO)

- **Arquétipo:** Tutorial.
- **Âncora estratégica:** Método (sequência de 6 passos), escopo "primeiro fluxo completo" — do modelo no Google Docs até o contrato assinado e arquivado sozinho.
- **Objetivo:** SALVAR (roteiro prático de referência), com o CTA também abrindo espaço pra quem prefere contratar o fluxo pronto em vez de montar sozinho — sem forçar menção de marca.
- **Fonte externa:** `WebFetch` retornou 403 em todas as tentativas de abrir as páginas-fonte diretamente nesta sessão (mesma limitação registrada nas execuções de 2026-08-04 e 2026-08-05 desta rotina). Passo a passo e fatos vêm do que `WebSearch` já sintetizou de fontes reais convergentes (horadecodar.com.br, em 3 artigos distintos sobre geração automatizada de contratos com n8n) — ver `pesquisa-tema.md` na mesma pasta pros links e o detalhamento por fonte.
- **Eixo pulado por falta de material:** não há caso vivo de um escritório específico usando esse fluxo (nenhuma fonte trouxe um cliente nomeado ou número de antes/depois verificável) — o carrossel foi construído em cima do passo a passo técnico + do comportamento de risco documentado (erro material em contrato), sem inventar caso nem estatística.
- **Público-alvo:** ancorado no comportamento específico "advogado que reaproveita contrato antigo trocando dado na mão", levantado na pesquisa e confirmado como causa reconhecida de erro material em contrato (fonte: projuris.com.br) — não na fórmula "advogado autônomo, escritório pequeno, time enxuto".

---

═══════════════════════════════════════
CARROSSEL: Chega de reaproveitar contrato antigo trocando dado na mão
═══════════════════════════════════════

▸ SLIDE 1 [função: gancho de tese]
Advogado que reaproveita contrato antigo salvando como um arquivo novo e trocando nome, CPF e valor na mão corre um risco que a gente só chama de grave depois que já aconteceu. Isso tem nome na prática jurídica: erro material em contrato.
[contagem: 42 palavras]

▸ SLIDE 2 [função: re-hook com promessa específica]
Dá pra tirar essa tarefa da mão de qualquer pessoa do escritório. Uma automação com n8n, conectada a um modelo fixo no Google Docs, preenche cada contrato sozinha, com os dados certos do cliente, converte em PDF e ainda manda pra assinatura eletrônica, sem ninguém abrir o Word pra editar campo por campo.
[contagem: 53 palavras]

▸ SLIDE 3 [função: estabelece o problema / identidade]
O hábito é comum porque parece prático: pega o contrato do último cliente, salva como um arquivo novo e vai trocando nome, CPF, valor e data direto no texto. Funciona na maioria das vezes. O problema é quando um campo fica esquecido, e o contrato sai com o dado de outro cliente sem ninguém perceber até alguém reclamar.
[contagem: 58 palavras]

▸ SLIDE 4 [função: passo 1 — modelo único]
Passo 1: monta um modelo único do contrato ou da procuração num editor de texto compartilhado, como Google Docs, com os campos que mudam de cliente pra cliente marcados no corpo do texto: nome, CPF, valor, tipo de ação, data. Esse modelo é feito uma vez só e vira a base de todos os contratos daqui pra frente.
[contagem: 56 palavras]

▸ SLIDE 5 [PATTERN BREAK — fato concreto sobre o risco]
Erro material em contrato é uma categoria reconhecida na prática jurídica, não um detalhe menor. Quando um dado sai errado depois de assinado, a correção não é só editar o arquivo: precisa de um aditivo, documento à parte que aponta o erro, corrige e é assinado de novo por todo mundo. Um campo trocado na pressa vira trabalho dobrado depois.
[contagem: 58 palavras]

▸ SLIDE 6 [função: passo 2 — entrada dos dados]
Passo 2: os dados de um caso novo entram por um formulário simples, uma planilha ou o próprio sistema que o escritório já usa pra cadastrar cliente. Não precisa trocar de ferramenta nem aprender programa novo. É só o ponto de entrada da informação que antes ia direto pro Word, agora alimentando a automação.
[contagem: 53 palavras]

▸ SLIDE 7 [função: passo 3 — preenchimento automático]
Passo 3: assim que os dados chegam, uma automação feita no n8n pega essas informações e preenche o modelo sozinha, campo por campo, sem ninguém copiar, colar ou digitar de novo o que já foi cadastrado. É a mesma lógica de mala direta que existe há anos, só que rodando sozinha em segundo plano.
[contagem: 53 palavras]

▸ SLIDE 8 [função: passo 4 — geração do PDF]
Passo 4: o documento preenchido é convertido em PDF automaticamente, no mesmo momento em que é gerado. Ninguém precisa abrir o arquivo, exportar na mão ou lembrar de salvar na pasta certa. O contrato já nasce no formato pronto pra ser lido, conferido e enviado, sem passar pela mesa de ninguém antes disso.
[contagem: 53 palavras]

▸ SLIDE 9 [função: passo 5 — assinatura eletrônica]
Passo 5: o PDF sai direto pra uma ferramenta de assinatura eletrônica, como Clicksign ou DocuSign. A automação acompanha quem já assinou e quem ainda não assinou, e manda lembrete sozinha pra quem tá devendo. Isso tira do escritório a tarefa de ficar checando manualmente e cobrando cliente um por um.
[contagem: 51 palavras]

▸ SLIDE 10 [função: passo 6 — arquivamento e status]
Passo 6: depois de assinado, o contrato é arquivado automaticamente na pasta do cliente certo, e o status muda sozinho no controle que o escritório usa pra acompanhar os casos. O ciclo inteiro, do dado entrando até o documento assinado e guardado, roda sem uma pessoa precisar tocar em cada etapa.
[contagem: 51 palavras]

▸ SLIDE 11 [função: transformação / resultado esperado]
O resultado prático é que ninguém mais abre o contrato do cliente anterior pra salvar como e trocar dado na mão. O documento sai certo desde a primeira vez, porque quem preenche o modelo é sempre a mesma automação, do mesmo jeito. O tempo que ia pra redigir e conferir campo por campo sobra pra atender cliente.
[contagem: 57 palavras]

▸ SLIDE 12 [função: CTA]
Salva esse passo a passo pra usar como roteiro na próxima vez que for organizar o fluxo de contratos do escritório. Se preferir não montar sozinho, esse é exatamente o tipo de automação que dá pra contratar pronta, plugada no Google Docs e no sistema que o escritório já usa, sem trocar de ferramenta.
[contagem: 54 palavras]

═══════════════════════════════════════
LEGENDA
═══════════════════════════════════════

Todo escritório jurídico tem alguém que ainda abre o contrato do último cliente, salva como um arquivo novo e vai trocando nome, CPF, valor e data direto no texto.

Funciona na maioria das vezes. Até o dia em que um campo fica esquecido e o documento sai com dado de outro cliente, o que a prática jurídica já reconhece como erro material em contrato, corrigido depois só com aditivo assinado de novo por todo mundo.

Dá pra tirar essa tarefa da mão de qualquer pessoa. Um modelo fixo no Google Docs, com os campos marcados, conectado a uma automação em n8n, preenche cada contrato sozinho, converte em PDF e ainda envia pra assinatura eletrônica sem ninguém editar campo por campo.

O carrossel mostra o passo a passo completo, do modelo até o contrato assinado e arquivado sozinho.

Salva pra usar como roteiro na próxima vez que for organizar o fluxo de contratos do escritório.

#advocacia #automaçãojurídica #n8n #direitodigital #produtividadejurídica
═══════════════════════════════════════

## Diagnóstico (Fase 6)

- **B1 (Humanizador, 20 padrões anti-IA):** ✅ passou — sem travessão longo, sem "não é X é Y", sem frase vazia tipo "muda o jogo", sem atribuição vaga (fonte de fatos sempre situada como "prática jurídica reconhece" com base na fonte projuris, não "especialistas dizem"), sem voz de coach acusatório, sem CTA preguiçoso, sem fórmula de público-alvo genérica (âncora fica no comportamento de reaproveitar contrato, não em "advogado autônomo, escritório pequeno, time enxuto").
- **B2 (Densidade de palavras):** ✅ passou — slide 1 com 42 palavras (abaixo de 80, com frases completas), slides 2 a 11 todos entre 51 e 58 palavras, CTA com 54 palavras e substância concreta (ação de salvar + alternativa de contratar pronto).
- **B3 (Fidelidade à fonte externa):** ✅ passou — o passo a passo técnico (6 passos) vem diretamente do que as 3 fontes horadecodar.com.br descrevem sobre o fluxo n8n + Google Docs + assinatura eletrônica; o fato central do pattern break (erro material em contrato exige aditivo assinado) vem da fonte projuris.com.br, citada no dossiê. `WebFetch` bloqueado nesta sessão impediu abrir o texto completo das páginas — a extração foi feita via `WebSearch`, sem inventar detalhe técnico além do que as buscas já sintetizaram, e sem estatística não verificável.
- **Qualidade:** 9/10. Ponto de atenção: não há caso vivo nomeado (nenhum escritório real citado usando o fluxo) — decisão consciente de não inventar, registrada nas Decisões automáticas acima.
