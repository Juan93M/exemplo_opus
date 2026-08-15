# Decisões automáticas (modo YOLO — carrossel-instagram)

- **Arquétipo escolhido:** Tutorial. O material da fonte tem um mecanismo real de 4 passos (registro único da fatura → checagem automática de atraso → régua de lembrete escalonada e personalizada → escalonamento pra humano só quando o cliente questiona), então Tutorial aproveita essa sequência sem forçar outro arquétipo.
- **Âncora estratégica (método):** "Como montar a régua de cobrança automática que acompanha cada fatura emitida e avisa sozinha quando o pagamento atrasa" — cobre do registro da fatura até a escalada pra negociação humana, sem misturar com outra técnica (ex.: cobrança de documento, orçamento, geração de contrato, já cobertos em outros temas da rotina).
- **Objetivo do carrossel:** SALVAR, como referência prática pra quando a próxima fatura passar do prazo. O CTA final aproveita esse objetivo pra mencionar a Opus Automações de forma natural, sem virar pitch de venda forçado (conforme pedido explícito do objetivo/CTA recebido no handoff).
- **Uso da fonte externa:** modo "tese + fatos" — pelo menos 3 slides trazem material concreto e atribuído das fontes: slide 2 (PYMNTS + FSB, dados de tempo gasto cobrando), slide 3 (relato pessoal do dev.to, base do comportamento específico de público-alvo) e slide 6 (caso HVAC via thefuturai, pattern break). O mecanismo passo a passo (slides 4, 5, 7 e 8) é a tradução direta do que o tutorial da York IE e os templates de n8n documentados no dossiê já descrevem, sem invenção de detalhe técnico além do retornado pela pesquisa.
- **Eixo pulado:** nenhum eixo de vivência pessoal do usuário existia pra pular — o arquétipo Tutorial não depende de vivência pessoal, e todo o briefing foi extraído da fonte + pesquisa adicional (WebSearch), conforme regra de YOLO.
- **Nota de fonte:** `WebFetch` retornou `EGRESS_BLOCKED` para todos os domínios tentados nesta sessão (dev.to, pymnts.com, york.ie, thefuturai.substack.com). O material das quatro fontes foi obtido via `WebSearch` (que sintetiza a partir de conteúdo real, com atribuição), não por leitura direta da página. Mesma limitação já registrada em execuções anteriores desta rotina — ver `pesquisa-tema.md`.
- **Atenção ao padrão de público-alvo genérico:** a frase de público-alvo (slide 3) vem do comportamento específico relatado na fonte dev.to — o desconforto de mandar a segunda mensagem cobrando o próprio cliente — e não da fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" nem variação trocando substantivos, conforme restrição explícita recebida no handoff.

---

## Plano

**Tamanho:** 9 slides
**Arquétipo:** Tutorial
**Objetivo:** Salvar

| # | Função do slide | Recurso de engajamento principal |
|---|---|---|
| 1 | Gancho — ancora no comportamento de evitar a segunda cobrança | Tensão + Identidade |
| 2 | Re-hook — dados reais de tempo gasto cobrando (PYMNTS + FSB) | Dados + Atribuição clara |
| 3 | Comportamento específico do público-alvo (não fórmula genérica) | Identidade + Prova social |
| 4 | Passo 1 — registro único de cada fatura emitida | Aplicação prática |
| 5 | Passo 2 — checagem automática diária de atraso | Aplicação prática + Simplicidade |
| 6 | PATTERN BREAK — caso real (HVAC, 45 pra 12 dias) | Dados + Prova social |
| 7 | Passo 3 — régua de lembrete escalonada e personalizada | Aplicação prática |
| 8 | Passo 4 — escalar pra humano só quando o cliente questiona | Aplicação prática + Tensão resolvida |
| 9 | CTA — salvar + menção natural à Opus | — |

---

═══════════════════════════════════════
CARROSSEL: Régua automática de cobrança de fatura atrasada
═══════════════════════════════════════

▸ SLIDE 1 [gancho]
Você entrega o trabalho, manda a fatura, e demora pra mandar a segunda mensagem cobrando porque parece chato insistir. O prazo passa, vira uma semana, vira um mês, e o dinheiro continua parado enquanto você evita esse assunto.
[contagem: 38 palavras]

▸ SLIDE 2 [re-hook]
Cobrar em atraso consome tempo de um jeito que ninguém percebe até somar: segundo reportagem da PYMNTS, times financeiros gastam mais de 20 horas por mês só correndo atrás de fatura vencida. Entre pequenos negócios medidos pela Federação de Pequenos Negócios do Reino Unido (FSB), a média chega a 86 horas por ano perseguindo dívida, e 37% já tiveram problema de caixa por causa de pagamento atrasado.
[contagem: 67 palavras]
fonte_externa: pymnts.com + FSB (via thefuturai.substack.com)

▸ SLIDE 3 [comportamento específico]
É exatamente esse desconforto que fez um desenvolvedor autônomo, num relato publicado no dev.to em dezembro, construir um esquadrão de agentes de IA só pra cobrar os próprios clientes por ele. Ele diz que cobrar continuava sendo constrangedor demais pra fazer pessoalmente, e a alternativa que descartou foi contratar um assistente virtual só pra essa tarefa. Se você trabalha vendendo serviço direto pra cliente, provavelmente já sentiu esse mesmo travamento na hora de mandar a segunda cobrança.
[contagem: 77 palavras]
fonte_externa: dev.to/fracabu

▸ SLIDE 4 [passo 1]
O primeiro ajuste é simples: cada fatura emitida, pra cada cliente, passa a cair num único registro, com nome, valor e data de vencimento, em vez de ficar só na sua memória ou espalhada entre e-mail e WhatsApp. Ferramentas como n8n já têm modelos prontos que recebem esse dado assim que a fatura é criada e disparam o acompanhamento sozinhas a partir daí.
[contagem: 63 palavras]

▸ SLIDE 5 [passo 2]
A partir daí, a automação checa sozinha, todo dia, quais faturas já passaram da data combinada sem o pagamento cair. Não depende de você abrir planilha nem lembrar de conferir extrato: o fluxo compara a data de vencimento com o status de pagamento e separa, automaticamente, quem está em dia de quem já entrou em atraso.
[contagem: 56 palavras]

▸ SLIDE 6 [pattern break — caso real]
Um prestador de serviço de climatização, citado numa análise sobre automação de cobrança, reduziu o prazo médio pra receber uma fatura de 45 dias pra 12 dias depois de automatizar essa sequência de lembrete. O ganho veio do lembrete certo chegando na hora certa, sem depender de alguém do time lembrar de mandar manualmente.
[contagem: 54 palavras]
fonte_externa: thefuturai.substack.com

▸ SLIDE 7 [passo 3]
O terceiro passo é a régua de lembrete em si: um texto cordial no primeiro dia de atraso, um tom mais firme se o pagamento ainda não caiu alguns dias depois, e um aviso final antes de qualquer medida mais séria. A IA ajusta o texto pelo histórico daquele cliente específico, então quem sempre paga com 2 dias de atraso recebe um lembrete diferente de quem já ficou 3 semanas sem responder.
[contagem: 72 palavras]

▸ SLIDE 8 [passo 4]
A automação nunca fecha uma negociação sozinha. Se o cliente responde questionando o valor, pedindo parcelamento ou contestando algo, o caso sai da régua automática e cai direto pra você resolver. O papel dela é garantir que ninguém fique esquecido no meio do caminho enquanto você continua sendo quem conduz qualquer conversa mais delicada.
[contagem: 54 palavras]

▸ SLIDE 9 [CTA]
Salva esse carrossel pra quando a próxima fatura passar do prazo e vier aquela vontade de deixar pra depois. Montar essa régua de lembrete automática, do registro da fatura até o aviso final, é exatamente o tipo de automação que a Opus Automações monta sob medida pra quem vive de cobrar cliente direto.
[contagem: 53 palavras]

═══════════════════════════════════════
LEGENDA
═══════════════════════════════════════

A fatura vencida mexe com o seu caixa e cria um momento chato: decidir se manda a segunda mensagem cobrando ou deixa mais uma semana passar.

Segundo a PYMNTS, times financeiros gastam mais de 20 horas por mês só correndo atrás de fatura atrasada. Entre pequenos negócios, a média chega a 86 horas por ano cobrando dívida, segundo dado da Federação de Pequenos Negócios do Reino Unido (FSB).

Esse carrossel mostra o mecanismo por trás de uma automação simples: ela registra cada fatura, checa sozinha quem está em atraso e dispara uma régua de lembrete que fica mais firme com o tempo, sem você precisar lembrar de mandar nada.

Se você entrega o trabalho, manda a fatura, e depois evita a segunda cobrança porque parece chato insistir, isso é pra você.

A Opus Automações monta esse tipo de automação sob medida, sem você precisar programar nada.

#pequenosnegocios #automacaocomia #gestaofinanceira #cobranca #produtividade
═══════════════════════════════════════

## Diagnóstico (Fase 6)

- **B1 (Humanizador, 20 padrões anti-IA):** ✅ passou — sem "não é X, é Y" nem variantes, sem frases vazias, sem travessão longo (nenhum `—`/`–` usado em nenhum slide ou na legenda), atribuições sempre nomeadas (PYMNTS + FSB via thefuturai; dev.to/fracabu; caso HVAC via thefuturai), sem voz de coach acusatório, sem conteúdo meta, e o slide 3 ancora o público-alvo num comportamento específico (o desconforto de mandar a segunda cobrança, relatado por um desenvolvedor autônomo real) em vez da fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto".
- **B2 (Densidade de palavras):** ✅ passou — capa (slide 1) com 38 palavras, re-hook (slide 2) com 67, miolo (slides 3-8) entre 54 e 77 palavras cada, CTA (slide 9) com 53 palavras e substância concreta (situação específica + nome do serviço + público de quem vive de cobrar cliente direto).
- **B3 (Fidelidade à fonte externa):** ✅ passou — modo "tese + fatos": 3 slides (2, 3, 6) trazem dado ou caso concreto das fontes com atribuição clara; o mecanismo passo a passo (slides 4, 5, 7, 8) é a tradução do tutorial real de n8n (York IE) e dos templates documentados no dossiê, sem atribuição indevida a nenhuma fonte específica além do que foi confirmado pela pesquisa.
- **Qualidade:** 9/10 — carrossel denso, com dois dados reais + um caso nomeado + mecanismo replicável em 4 passos claros. Ponto de atenção único: não há print de tela real (mesma limitação de `WebFetch` já registrada), então a imagem será gerada sem imagem por passo, conforme regra do modo YOLO da skill `carrossel-imagens-tema-tutorial`.

Pronto pra publicar.
