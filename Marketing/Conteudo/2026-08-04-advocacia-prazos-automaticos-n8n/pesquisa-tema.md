# Dossiê — pesquisa-tutorial-carrossel — 2026-08-04 (2ª execução do dia)

## Nota sobre ambiente e ferramentas desta execução

Esta execução rodou em ambiente Linux (Claude Code on the web), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) citados no SKILL.md nem à pasta do Google Drive informada na tarefa (sem ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch`). Adaptação feita: usei o repositório git (`Marketing/Conteudo/`) como fonte de verdade real de conteúdo já publicado (mais confiável que o ledger, que já registrava desatualização conhecida) e gravo o dossiê dentro da própria pasta do carrossel do dia.

Também: `WebFetch` para hosts externos retornou 403 em toda tentativa nesta sessão (confirmado até em `en.wikipedia.org` — bloqueio de política de rede do ambiente, não dos sites específicos). Por isso a pesquisa usou só `WebSearch`, que sintetiza conteúdo real com URLs citáveis — não deu pra abrir o texto completo das páginas-fonte. Isso é uma lacuna registrada, não um dado inventado: todo passo a passo abaixo vem de trechos que o `WebSearch` já retornou sintetizados a partir das fontes reais, nunca de invenção.

## Sincronização do dedup

Pastas reais em `Marketing/Conteudo/` (fonte de verdade, não o ledger):
- 2026-07-16-diagnostico-ia-pme (fora da janela de 14 dias)
- 2026-07-16-smoke-carrossel-imagens-tweet-screenshot (smoke test, ignorado)
- 2026-07-19-onde-ia-economiza (fora da janela de 14 dias)
- 2026-07-29-tela-gravada-vira-agente-ia — setor geral/consultoria, técnica: Screenpipe (gravação de call → resumo automático)
- 2026-08-04-corretor-ia-whatsapp-agenda-visita — setor imobiliária, técnica: agente de WhatsApp pra qualificar lead e agendar visita (gerado mais cedo hoje, mesma rotina)

Nenhuma pasta nos últimos 14 dias cobre **advocacia** nem a técnica de **monitoramento automático de prazos processuais**. Tema aprovado no dedup.

## Tema escolhido

**Técnica:** Monitoramento automático de prazos e intimações com n8n (lê a caixa de entrada de email do escritório, extrai prazo/intimação, cria evento no Google Calendar e manda alerta no WhatsApp/Telegram do time antes do vencimento).

**Setor-alvo:** Escritórios de advocacia (público-alvo explícito da rotina).

**Ângulo:** Perder um prazo processual não é só "perder tempo" — é risco real de multa, dano ao cliente e até processo por negligência contra o próprio advogado. Automatizar esse monitoramento é claramente uma automação que economiza tempo E dinheiro (evita prejuízo), e é o tipo de fluxo que dá pra contratar alguém pra montar (não fazer sozinho sem noção técnica) — angle que valoriza o serviço de automação sem precisar de CTA forçado.

## Fontes reais (citáveis)

- https://grupo.semcodar.com.br/c/dicas-contribuicoes/automatizando-a-gestao-de-prazos-para-escritorios-juridicos-com-n8n — comunidade Sem Codar, tópico "Automatizando a Gestão de Prazos para Escritórios Jurídicos com n8n": descreve sistema automatizado de controle de prazos e envio de alertas para compromissos jurídicos (audiências, perícias), com integração a agenda/Google Calendar pra lembretes de prazos processuais, peticionamentos ou audiências.
- https://horadecodar.com.br/automacao-processos-juridicos-n8n/ — "Automação de processos jurídicos com n8n: Guia prático": explica que dá pra configurar envio automático de avisos de prazo por Telegram, WhatsApp ou SMS pra toda a equipe, e que o n8n lê automaticamente uma caixa de entrada, extrai intimações/prazos/comunicados oficiais e dispara os alertas.
- https://www.horadecodar.com.br/automatizar-tarefas-juridicas-n8n-advogados/ — reforça o mesmo fluxo aplicado a tarefas recorrentes de escritório (consultas processuais, controle de agenda, integrações com PJe/e-SAJ).

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas buscas já sintetizaram das fontes, sem invenção de detalhe técnico além do que foi retornado.)

## Passo a passo extraído (traduzido pra dono de escritório, sem jargão técnico)

1. O escritório conecta a caixa de entrada de email (onde chegam intimações e comunicados oficiais) numa automação.
2. A automação lê toda mensagem nova sozinha e identifica quando é uma intimação, um prazo ou um comunicado oficial.
3. Ela cria automaticamente um compromisso na agenda (Google Calendar) com a data do prazo.
4. Antes do prazo vencer, manda um aviso automático no WhatsApp ou Telegram do time responsável.
5. Resultado: ninguém depende de "lembrar" ou revisar email manualmente todo dia — o risco de perder um prazo processual (que pode virar multa, prejuízo ao cliente ou processo por negligência contra o próprio advogado) cai bastante.

## Artefato candidato

Não há print/imagem própria coletada (mesma limitação de `WebFetch` acima impediu capturar tela real da automação). Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo (conforme a própria descrição da skill de imagem).

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fonte, passo a passo e setor-alvo acima, slug `2026-08-04-advocacia-prazos-automaticos-n8n`, seguido de `carrossel-imagens-tema-tutorial` (YOLO, sem imagem).
