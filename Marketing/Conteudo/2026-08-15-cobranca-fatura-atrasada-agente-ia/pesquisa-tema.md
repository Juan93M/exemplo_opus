# Dossiê — pesquisa-tutorial-carrossel — 2026-08-15

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citada na tarefa (nenhuma ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch` nativos, GitHub MCP e ferramentas locais). Mesma adaptação já usada em execuções anteriores: repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado, dossiê gravado dentro da própria pasta do carrossel do dia.

`WebFetch` retornou `EGRESS_BLOCKED` em toda tentativa de abrir página-fonte diretamente nesta sessão (`old.reddit.com`, `hn.algolia.com`, `dev.to`, `york.ie`, `n8n.io`, `thefuturai.substack.com`) — mesma limitação já registrada em execuções anteriores. A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo da página. Isso é lacuna registrada, não invenção.

## Sincronização do dedup

Pastas em `Marketing/Conteudo/` (últimos 14 dias, desde 2026-08-01) e o ledger `historico-temas.md` conferem entre si.

Setores/técnicas cobertos nos últimos 14 dias:
- 2026-08-03 — contabilidade — extração de NFS-e com IA + n8n
- 2026-08-04 — contabilidade — leitura automática de nota fiscal por e-mail com OCR + IA
- 2026-08-04 — contabilidade — conciliação bancária automática lendo extrato em PDF com IA
- 2026-08-04 — advocacia — monitoramento automático de prazos/intimações por e-mail (n8n)
- 2026-08-04 — imobiliária/corretor — agente de WhatsApp qualifica lead e agenda visita
- 2026-08-04 — salão/barbearia (PME de serviço) — lista de espera automática no WhatsApp
- 2026-08-05 — clínicas/consultórios — confirmação automática de consulta via WhatsApp
- 2026-08-06 — advocacia — geração automática de contratos/procurações com n8n + Google Docs
- 2026-08-07 — clínicas/consultórios — prontuário por voz durante a consulta
- 2026-08-08 — produtores de conteúdo — repurposing automático de conteúdo pra várias redes (n8n)
- 2026-08-09 — contabilidade — portal automático de cobrança **de documentos do cliente** (input, não pagamento)
- 2026-08-10 — advocacia — resumo automático de processo judicial com IA
- 2026-08-11 — academias/estúdios (PME de serviço) — alerta automático de risco de cancelamento
- 2026-08-12 — oficinas mecânicas (PME de serviço) — orçamento automático via WhatsApp
- 2026-08-13 — clínicas/consultórios odontológicos — triagem automática de entrada no WhatsApp
- 2026-08-14 — produtores de conteúdo — rastreamento de parceria com marca até o pagamento (financeiro, mas do lado de "receber de marca", não de fatura própria emitida a cliente)

Contabilidade (3x), advocacia (3x) e clínicas/odonto (3x) são os setores mais saturados na janela de 14 dias — descartados como âncora principal, mesmo que o tema de hoje toque todos eles de forma secundária (ver "Setor-alvo" abaixo). Nenhum tema anterior cobriu o mecanismo de **cobrança automática de fatura própria já emitida e não paga** (o negócio cobrando o cliente dele, não um contador cobrando documento nem um criador cobrando marca por parceria) — técnica e direção de relação diferentes de tudo já publicado.

## Tema escolhido

**Bucket:** Educativo / Tutorial (com dados de mercado + caso real como âncora)

**Técnica:** agente de IA que acompanha cada fatura emitida por um pequeno negócio de serviço e, quando o prazo de pagamento vence sem o dinheiro cair, dispara sozinho uma sequência escalonada de lembrete (mensagem cordial no primeiro atraso, mais firme alguns dias depois, e um aviso final antes de qualquer coisa mais séria) por e-mail ou WhatsApp — com o texto ajustado pelo histórico do cliente, sem a pessoa dona do negócio precisar lembrar de mandar nada nem se sentir a chata cobrando.

**Setor-alvo:** pequenos negócios de serviço que emitem cobrança pro próprio cliente por um trabalho já entregue — consultoria, escritório de advocacia ou contabilidade cobrando honorário avulso, clínica com plano particular parcelado, freelancer e produtor de conteúdo com job avulso fechado fora de plataforma. Mecanismo generalizável a qualquer um dos 5 públicos-alvo fixos da rotina, sem depender de nenhum deles estar "descansado" no dedup — a técnica em si (rastreio de fatura + régua de cobrança automática) nunca apareceu na janela de 14 dias.

**Ângulo / comportamento específico (não é molde genérico):** a fonte real central é um relato em primeira pessoa (dev.to, dezembro de 2025) de um desenvolvedor autônomo que construiu "um esquadrão de agentes de IA" só pra cobrar clientes por ele, porque cobrar continuar era desconfortável demais pra fazer pessoalmente — a alternativa que ele descartou foi contratar um assistente virtual só pra isso. O comportamento específico não é "esquecer de cobrar": é entregar o trabalho, mandar a fatura, e depois evitar mandar a segunda mensagem perguntando se o pagamento caiu porque parece chato insistir — daí os dias de atraso viram semanas. A Federação Britânica de Pequenos Negócios (FSB), citada num artigo de análise de mercado, mede esse comportamento em número: pequenos negócios gastam em média 86 horas por ano só correndo atrás de dívida, e 37% já tiveram problema de caixa por causa de pagamento atrasado. Um caso citado de um prestador de serviço (climatização/HVAC, mercado americano) reduziu o tempo médio de recebimento de fatura de 45 para 12 dias depois de automatizar essa régua de lembrete. É esse desconforto específico de "cobrar de novo parece chato, então eu não cobro" — não uma fórmula de "[profissão] autônomo, [negócio] pequeno, time enxuto" — que ancora a frase de público-alvo do carrossel.

## Fontes reais (citáveis)

- https://dev.to/fracabu/i-built-a-squad-of-ai-agents-to-chase-invoices-for-me-ojm — relato real em primeira pessoa (dev.to, dez/2025): desenvolvedor autônomo descreve o desconforto de cobrar cliente por dinheiro e como construiu agentes de IA pra fazer isso por ele, em vez de contratar assistente virtual.
- https://www.pymnts.com/artificial-intelligence-2/2025/ai-agents-chase-invoices-faster-than-finance-teams-can-dial/ — reportagem PYMNTS: times financeiros gastam 20+ horas por mês só cobrando fatura atrasada; cita o lançamento do Claude for Small Business (Anthropic), com fluxo pronto de cobrança de fatura entre 15 workflows conectados a QuickBooks/PayPal/HubSpot; nota que a lacuna de adoção de IA entre grande e pequena empresa vinha caindo (de 1.8x pra 1.2x entre 2024 e ago/2025).
- https://york.ie/blog/build-an-automated-unpaid-invoice-reminder-in-n8n/ — tutorial técnico real (n8n): fluxo com gatilho por webhook, checagem de status de pagamento e lembrete escalonado (mais firme a cada novo atraso), mecanismo replicável sem programação avançada.
- https://thefuturai.substack.com/p/ai-invoice-automation-reduce-late-payments — artigo de análise citando o caso de um prestador de serviço de climatização (HVAC) que reduziu o prazo médio de recebimento de fatura de 45 para 12 dias com sequência automática de lembrete, e o dado da FSB (37% dos pequenos negócios com problema de caixa por pagamento atrasado; média de 86h/ano cobrando dívida).

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo do carrossel traduz o que essas fontes convergentes já sintetizaram, sem invenção de número ou detalhe técnico além do que foi retornado.)

## Artefato candidato

Não há print próprio coletado (mesma limitação de `WebFetch` impediu abrir as páginas-fonte). As fontes descrevem o mecanismo (régua de lembrete escalonada, personalização por histórico de pagamento, atualização automática de status) com detalhe suficiente pra servir de referência textual. Carrossel gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo.

## Candidatos descartados

- **Contabilidade / advocacia / clínicas (qualquer novo fluxo específico desses setores).** Os três já têm 3 temas cada nos últimos 14 dias — descartados como âncora setorial principal, mesmo com fontes reais disponíveis (ex.: mais um fluxo de conciliação bancária pra contabilidade).
- **Veterinária / pet shop — confirmação automática de agendamento via WhatsApp.** Fonte real existe (SocialHub, Fly Vet, caso com número de faltas caindo de 35% pra <10%), mas o mecanismo (confirmação de agendamento em duas vias) é quase idêntico ao já publicado em 2026-08-05 (clínica) e 2026-08-13 (odonto) — mesmo mecanismo, setor adjacente, sem ângulo novo o bastante.
- **Restaurante/delivery — atendimento automático de pedido via WhatsApp.** Fontes reais fartas (Brendi, Anota Aí, Goomer), mas fora do público-alvo fixo da rotina (não é clínica, advocacia, contabilidade, criador de conteúdo nem claramente "PME de serviço" no sentido usado até aqui) e o mecanismo (bot de atendimento a pedido) também se aproxima do que já foi coberto em triagem/atendimento (2026-08-13).
- **Cobrança de review/avaliação automática (salão, clínica de estética).** Fontes só traziam blog de ferramenta comercial sem caso nomeado nem número verificável de forma independente — descartado por falta de fonte forte o bastante.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico da fonte (dev.to) — entregar o trabalho, mandar a fatura, e evitar mandar a segunda mensagem cobrando o pagamento porque parece chato insistir — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-15-cobranca-fatura-atrasada-agente-ia`, seguido de `carrossel-imagens-tema-tutorial` (YOLO).
