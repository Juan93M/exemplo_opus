# Dossiê — pesquisa-tutorial-carrossel — 2026-08-05

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citados no SKILL.md/na tarefa (sem ferramenta de acesso a Drive disponível nesta sessão). Adaptação: usei o repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado — mais confiável que o ledger sozinho — e gravo o dossiê dentro da própria pasta do carrossel do dia, seguindo o padrão já usado em `2026-08-04-advocacia-prazos-automaticos-n8n/pesquisa-tema.md`.

`WebFetch` retornou 403 em todas as tentativas de abrir as páginas-fonte diretamente nesta sessão (mesma limitação já registrada na execução de 2026-08-04). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que o `WebSearch` já sintetizou de várias fontes reais convergentes, e evitei deliberadamente citar números (ex.: percentual de redução de no-show) porque buscas diferentes retornaram números distintos e não-verificáveis (32%, 40%, 13,5% em fontes diferentes) — sinal de que são alegações de marketing variáveis por site, não um dado único confiável. Preferi manter a técnica só no nível qualitativo, sem estatística fabricada.

## Sincronização do dedup

Ledger (`historico-temas.md`) sincronizado com as pastas reais em `Marketing/Conteudo/` antes da escolha (ver entradas adicionadas para 2026-07-16, 2026-07-19, 2026-07-29 e as 3 de 2026-08-04). Setores/técnicas cobertos nos últimos 14 dias (desde 2026-07-22):
- 2026-07-29 — geral/consultoria — gravação de call vira resumo automático
- 2026-08-04 — advocacia — monitoramento automático de prazos/intimações por email (n8n)
- 2026-08-04 — imobiliária/corretor — agente de WhatsApp qualifica lead e agenda visita
- 2026-08-04 — salão/barbearia (PME de serviço) — lista de espera automática no WhatsApp

Nenhuma pasta nos últimos 14 dias cobre **clínica/consultório médico ou odontológico**, nem a técnica de **confirmação automática de consulta via agenda + WhatsApp**. Tema aprovado no dedup (setor e técnica ambos inéditos na janela).

## Tema escolhido

**Técnica:** Confirmação automática de consulta com n8n, ligando a agenda da clínica (Google Agenda / sistema de agendamento) ao WhatsApp — a automação varre os compromissos do dia seguinte sozinha, manda a mensagem de confirmação pro paciente e só sobra pra recepção ligar pra quem não respondeu.

**Setor-alvo:** Clínicas e consultórios médicos e odontológicos (público-alvo explícito da rotina).

**Ângulo:** O ponto de dor não é "a clínica não usa tecnologia" — é que, mesmo em clínicas organizadas, tem sempre alguém da recepção que separa um pedaço do dia só pra ligar confirmando consulta um por um, e mesmo assim sobra horário vazio quando alguém falta sem avisar. Automatizar essa confirmação é economia de tempo (a recepção para de fazer ligação repetitiva) e de dinheiro (menos hora vaga na agenda) ao mesmo tempo — e é um fluxo que dá pra contratar alguém pra montar em cima da agenda que a clínica já usa, sem trocar de sistema. Isso valoriza o serviço de automação sem precisar de CTA forçado.

## Fontes reais (citáveis)

- https://horadecodar.com.br/automatizar-confirmacao-consulta-whatsapp-n8n-dentistas/ — "Confirmação de consulta no WhatsApp com n8n": tutorial prático voltado a dentistas, com passo a passo de fluxo, modelos de mensagem e dicas de configuração do fluxo no n8n.
- https://www.horadecodar.com.br/exemplos-automacoes-n8n-clinicas/ — "5 exemplos de automações n8n para clínicas": descreve o fluxo padrão — ao agendar um paciente no sistema, um fluxo no n8n envia mensagem de WhatsApp, SMS ou e-mail pra confirmar presença, reduzindo esquecimento e duplicidade e liberando a equipe pra atividades que dependem de atenção humana.
- https://aurago.com.br/conteudos/confirmacao-de-consulta-com-n8n/ — "Confirmação de Consulta com n8n": detalha o fluxo técnico — checagem de disponibilidade no Google Calendar, registro do agendamento, disparo de mensagem de confirmação via nó de WhatsApp (nome, data, horário, instruções), e notificações complementares por e-mail/SMS.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas buscas já sintetizaram de fontes reais convergentes, sem invenção de detalhe técnico além do que foi retornado, e sem estatística não-verificável.)

## Passo a passo extraído (traduzido pra dono de clínica, sem jargão técnico)

1. A clínica conecta a agenda que já usa (Google Agenda ou o sistema de agendamento da clínica) numa automação.
2. Todo dia, a automação sozinha olha os compromissos marcados pro dia seguinte.
3. Pra cada paciente encontrado, ela manda uma mensagem de confirmação no WhatsApp, já com nome, data e horário da consulta.
4. O paciente responde confirmando ou pedindo pra remarcar, e a automação atualiza esse status direto na agenda, sem ninguém digitar nada.
5. Só quem não respondeu entra numa lista curta — a recepção liga só pra esses casos, não pra agenda inteira.

**Resultado esperado:** a recepção para de gastar tempo ligando um por um pra confirmar quem vai aparecer, e quem ia faltar tem chance de avisar e remarcar antes, sobrando menos horário vago na agenda do dia.

## Artefato candidato

Não há print/imagem própria coletada (mesma limitação de `WebFetch` impediu capturar tela real do fluxo no n8n). Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo — conforme pedido explícito da tarefa e a própria descrição da skill de imagem.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo deve vir do comportamento específico levantado na pesquisa — "clínica onde alguém da recepção ainda separa um tempo do dia só pra ligar confirmando consulta um por um" — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-05-clinica-confirmacao-consulta-n8n`, seguido de `carrossel-imagens-tema-tutorial` (YOLO, sem imagem), conforme pedido explícito da tarefa.
