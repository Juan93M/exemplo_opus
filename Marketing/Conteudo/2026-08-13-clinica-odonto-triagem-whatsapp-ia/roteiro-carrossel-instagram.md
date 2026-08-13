# Roteiro — carrossel-instagram (modo YOLO)

## Decisões automáticas

- **Arquétipo:** Tutorial (método = sequência de passos, escolhido por traduzir sem depender de vivência pessoal do usuário o mecanismo "mensagem chega fora de horário → triagem → consulta de agenda real → oferta de horário → trava humana", coerente com a orientação de modo YOLO).
- **Âncora estratégica:** o método completo do agente de triagem/agendamento pra clínica odontológica, da primeira mensagem do paciente desconhecido no WhatsApp até o momento em que o caso é escalado pra um humano ou vira consulta marcada sozinho.
- **Objetivo:** SALVAR (carrossel denso e prático, tipo referência de como montar esse tipo de sistema) com elemento leve de VENDER no CTA (a automação descrita é o tipo de serviço que a Opus presta sob medida, sem forçar menção de marca em nenhum slide do meio).
- **Fonte externa:** duas fontes reais convergentes — blog.odontoresults.com.br (caso de mercado com números: 139 atendimentos automatizados em 30 dias, resposta média de 4 segundos, até 58% mais conversão que formulário tradicional) e www.horadecodar.com.br / horadecodar.com.br (tutoriais técnicos do mecanismo de triagem automática + FAQ + handoff pra humano no WhatsApp via n8n, inclusive aplicado a clínicas). Modo de uso: "tese + fatos" — os números do caso vêm da Odonto Results (slide 5, com atribuição e ressalva de que é material de divulgação do próprio fornecedor), o mecanismo técnico de triagem/handoff vem da Hora de Codar (slide 7, com atribuição nomeada).
- **Eixo pulado:** não há prova viva/caso pessoal do usuário (rotina automática, sem briefing interativo) — o carrossel não inventa nome de clínica, depoimento de paciente nem estatística própria; usa só o mecanismo e os números que as fontes de fato descrevem, com a ressalva explícita de que o dado do slide 5 é de material de divulgação do fornecedor, não de estudo independente.
- **Regra de público-alvo:** frase de público-alvo ancorada no comportamento específico desta pesquisa (a mensagem que chega às 21h ou no fim de semana sem ninguém da recepção pra responder, o paciente que fecha a conversa e manda a mesma pergunta pra próxima clínica da lista), não na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto". A generalização do slide 8 explica o mecanismo por estágio do funil (entrada, distinto de confirmação de consulta já marcada e de documentação durante o atendimento) sem usar esse molde.

---

═══════════════════════════════════════
CARROSSEL: Triagem automática com IA pra clínica odontológica
═══════════════════════════════════════

▸ SLIDE 1 [gancho — âncora + tese]
Uma paciente manda mensagem pro WhatsApp da clínica às 21h perguntando se atende no dia seguinte com dor no dente. Ninguém responde até o outro dia de manhã. Ela já tinha marcado a limpeza na clínica que respondeu em menos de um minuto, na mesma noite, sem ninguém da recepção estar de plantão.
[contagem: 53 palavras]

▸ SLIDE 2 [re-hook — promessa do mecanismo]
Hoje já dá pra montar um agente de IA que responde essa primeira mensagem sozinho, em qualquer horário, antes mesmo de existir um agendamento. Ele faz a triagem do motivo da consulta, confere se é particular ou convênio, avalia a urgência e já devolve um horário disponível na agenda real da clínica, sem depender de ninguém estar online.
[contagem: 58 palavras]

▸ SLIDE 3 [passo 1 — a mensagem chega fora de horário]
O fluxo começa exatamente no momento em que hoje a clínica mais perde paciente: a primeira mensagem chega fora do horário comercial, à noite ou no fim de semana. O agente responde em segundos, recebe o motivo da procura, e evita que a pessoa feche a conversa e mande a mesma pergunta pra próxima clínica da lista.
[contagem: 57 palavras]

▸ SLIDE 4 [passo 2 — a triagem]
Antes de oferecer qualquer horário, o agente faz perguntas simples de triagem: qual o motivo da consulta, se o atendimento é particular ou por convênio, e se existe algum sinal de urgência clínica na descrição do paciente. Essa etapa organiza a fila de quem realmente precisa de prioridade, sem depender do julgamento de quem está de plantão no celular.
[contagem: 59 palavras]

▸ SLIDE 5 [PATTERN BREAK — o caso real com números]
Segundo o blog da Odonto Results, uma clínica que aplicou esse tipo de automação chegou a 139 atendimentos automatizados em 30 dias, com tempo médio de resposta de 4 segundos no WhatsApp e até 58% mais conversão em agendamento do que um formulário tradicional. Esses números vêm do material de divulgação da própria empresa que presta o serviço, sem confirmação por estudo independente, e mostram a escala que já é possível alcançar.
[contagem: 72 palavras]

▸ SLIDE 6 [passo 3 — consulta a agenda real e oferece horário]
Depois da triagem, o agente consulta a agenda real e atualizada da clínica e já oferece um horário compatível com o tipo de consulta e o nível de urgência identificado. O paciente escolhe o horário direto na conversa do WhatsApp, e o agendamento entra automaticamente no sistema da clínica, sem ninguém da equipe precisar digitar nada.
[contagem: 56 palavras]

▸ SLIDE 7 [passo 4 — a trava humana]
O agente não decide tudo sozinho. Segundo o modelo de triagem e handoff descrito pela Hora de Codar, quando o caso foge do script (emergência clínica, indecisão do paciente ou negociação de valor), a conversa é encaminhada pra alguém da equipe assumir, com o histórico da triagem já pronto pra continuar dali, sem o paciente precisar repetir tudo de novo.
[contagem: 60 palavras]

▸ SLIDE 8 [generalização — estágio do funil, não substituto dos outros dois]
Esse mecanismo cobre a entrada do funil, antes de existir qualquer agendamento marcado. É diferente de confirmar uma consulta que já está na agenda ou de documentar o que aconteceu durante o atendimento. Serve pra qualquer clínica ou consultório que hoje perde paciente porque a mensagem chegou numa hora em que não tinha ninguém livre pra responder.
[contagem: 57 palavras]

▸ SLIDE 9 [CTA — salvar + Opus]
Primeira mensagem respondida em segundos, triagem feita, horário oferecido, sem recepção de plantão 24 horas: esse é o tipo de agente que dá pra montar sem o dono da clínica virar programador. Se sua clínica ainda perde paciente pra quem respondeu primeiro fora do horário comercial, vale entender onde esse fluxo já podia estar rodando.
[contagem: 55 palavras]

═══════════════════════════════════════
LEGENDA
═══════════════════════════════════════

Uma paciente manda mensagem pro WhatsApp da clínica às 21h. Ninguém responde. Ela marcou consulta na clínica que respondeu em menos de um minuto, na mesma noite.

Esse carrossel mostra como um agente de IA no WhatsApp faz a triagem do primeiro contato do paciente antes mesmo de existir um agendamento, a qualquer hora do dia, seguindo o mesmo padrão de triagem e handoff pra humano descrito pela Hora de Codar em tutoriais técnicos sobre atendimento automatizado no WhatsApp.

Um caso divulgado pelo blog da Odonto Results (número do próprio fornecedor do serviço, sem confirmação independente) chegou a 139 atendimentos automatizados em 30 dias, com resposta média de 4 segundos.

A trava importa tanto quanto a velocidade: emergência clínica, indecisão do paciente ou negociação de valor continuam indo pra alguém da equipe resolver.

Salva esse aqui se sua clínica ainda perde paciente por demora no primeiro contato. Segue @opus.automacoes pra mais automações assim.

#automacaoparanegocios #iaparaclinicas #whatsappbusiness #odontologia #atendimentoautomatizado
═══════════════════════════════════════

## Diagnóstico (Fase 6, rodado internamente)

- B1 (Humanizador, 20 padrões anti-IA): ✅ passou — checado literalmente contra os 20 padrões. Sem travessão longo (busca por "—" e "–" retornou zero ocorrências nos slides e na legenda). Sem "não é X, é Y" (o rascunho inicial do slide 6 usava "não uma tabela fixa de horários", reescrito pra afirmativo puro antes da entrega). Sem frase vazia tipo "muda o jogo"/"divisor de águas". Atribuições nomeadas (Odonto Results, Hora de Codar), não vagas. Sem cópula evitada (usa "é", "faz", "consulta", "oferece"). Sem negative parallelism. Sem signposting nem conteúdo meta. Sem voz de coach acusatório. Sem clichê de engajamento genérico no CTA. Sem fórmula de público-alvo genérica: a frase de público (slide 8, "a mensagem chegou numa hora em que não tinha ninguém livre pra responder") vem do comportamento específico levantado na pesquisa, não do molde profissão+porte+time.
- B2 (Densidade de palavras): ✅ passou — slides 2 a 8 entre 53 e 72 palavras; slide 1 com 53 palavras (dentro do permitido pra capa, frases completas, sem caveman speech); CTA com 55 palavras e substância concreta (resume o mecanismo completo, não é CTA vago tipo "segue esse tipo de conteúdo").
- B3 (Fidelidade à fonte externa): ✅ passou — números do caso (Odonto Results) aparecem com atribuição e ressalva de material de fornecedor no slide 5; mecanismo técnico de triagem/handoff (Hora de Codar) aparece com atribuição no slide 7. Nenhum número foi inventado; ambos registrados em `pesquisa-tema.md`.
- Qualidade: 9/10 — único ponto de atenção é a ausência de print/captura de tela real (WebFetch bloqueado em todos os domínios tentados nesta sessão), compensada com texto descritivo suficiente; carrossel roda sem imagem em modo YOLO de qualquer forma.
