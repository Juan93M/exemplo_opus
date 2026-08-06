# Dossiê — pesquisa-tutorial-carrossel — 2026-08-06

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citados no SKILL.md/na tarefa (sem ferramenta de acesso a Drive disponível nesta sessão). Adaptação: usei o repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado — mais confiável que o ledger sozinho — e gravo o dossiê dentro da própria pasta do carrossel do dia, seguindo o padrão já usado em `2026-08-05-clinica-confirmacao-consulta-n8n/pesquisa-tema.md`.

`WebFetch` retornou 403 em todas as tentativas de abrir as páginas-fonte diretamente nesta sessão (mesma limitação já registrada nas execuções de 2026-08-04 e 2026-08-05). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que o `WebSearch` já sintetizou de várias fontes reais convergentes.

## Sincronização do dedup

Branch local confirmada em paridade com `origin/main` (`git rev-parse HEAD` = `git rev-parse origin/main`) antes de escolher o tema, então as pastas em `Marketing/Conteudo/` e o ledger `historico-temas.md` já refletem o estado real mais recente — sem pastas órfãs pra fazer backfill.

Setores/técnicas cobertos nos últimos 14 dias (desde 2026-07-23):
- 2026-07-29 — produtores de conteúdo / consultores — gravar a tela e a IA repete a tarefa sozinha (Screenpipe)
- 2026-08-03 — contabilidade — extração de NFS-e com IA + n8n
- 2026-08-04 — contabilidade — leitura automática de nota fiscal por e-mail com OCR + IA
- 2026-08-04 — contabilidade — conciliação bancária automática lendo extrato em PDF com IA
- 2026-08-04 — advocacia — monitoramento automático de prazos/intimações por e-mail (n8n)
- 2026-08-04 — imobiliária/corretor — agente de WhatsApp qualifica lead e agenda visita
- 2026-08-04 — salão/barbearia (PME de serviço) — lista de espera automática no WhatsApp
- 2026-08-05 — clínicas/consultórios — confirmação automática de consulta via WhatsApp

Contabilidade já apareceu 3x na janela — descartada para hoje mesmo com boas fontes disponíveis (ex.: automação de cobrança recorrente), pra não saturar ainda mais o setor mais repetido. Advocacia tem só 1 entrada (prazos/intimações, um fluxo de monitoramento) — um tema de advocacia com técnica claramente diferente (geração de documento, não monitoramento de prazo) passa no dedup por técnica e ajuda a equilibrar a distribuição por setor.

## Tema escolhido

**Técnica:** Geração automática de contratos e procurações com n8n + Google Docs — o escritório mantém um modelo do documento com campos marcados, uma automação preenche esses campos com os dados do caso (vindos de formulário, planilha ou CRM), converte em PDF e já manda pra assinatura eletrônica, sem ninguém abrir o Word pra editar na mão.

**Setor-alvo:** Escritórios de advocacia (público-alvo explícito da rotina).

**Ângulo / comportamento específico (não é molde genérico):** a fonte de pesquisa aponta um comportamento concreto e reconhecido no meio jurídico — o advogado abre o contrato do último cliente, salva como um novo arquivo e vai trocando nome, CPF, valor e data na mão pra reaproveitar o texto. Esse hábito é documentado como causa recorrente de "erro material em contrato" (campo que ficou com o dado do cliente errado), a ponto de existir prática jurídica padronizada pra corrigir isso depois via aditivo assinado. Esse é o comportamento que ancora a frase de público-alvo do carrossel — não uma fórmula de "advogado autônomo, escritório pequeno, time enxuto".

## Fontes reais (citáveis)

- https://horadecodar.com.br/n8n-geracao-contratos-automatizada/ — "n8n geração de contratos automatizada passo a passo": fluxo completo de criação do workflow no n8n para gerar contratos automaticamente.
- https://horadecodar.com.br/automatizar-contratos-digitais-n8n/ — "Automatizar geração e envio de contratos digitais com n8n": detalha as integrações — node de e-mail para enviar o documento gerado, HTTP Request para acionar DocuSign/Clicksign/SignNow, upload automático em Drive/Dropbox e atualização de status em CRM (HubSpot/Pipedrive/Notion).
- https://www.horadecodar.com.br/gerar-contratos-propostas-pdf-google-docs-n8n/ — "Gerar contratos PDF com Google Docs e n8n automaticamente": explica o merge de um template do Google Docs com dados vindos de formulário/planilha/CRM, conversão pra PDF e envio para assinatura eletrônica, com lembrete automático pra quem ainda não assinou.
- https://www.projuris.com.br/blog/erro-material-em-contrato/ — "Erro material em contrato: como corrigir e dicas para evitá-los": confirma o comportamento-fonte (reaproveitar contrato antigo trocando dados na mão) como causa reconhecida de erro em documento jurídico, e o processo de correção via aditivo.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas buscas já sintetizaram de fontes reais convergentes, sem invenção de detalhe técnico além do que foi retornado e sem estatística não-verificável.)

## Passo a passo extraído (traduzido pro dono/sócio de escritório, sem jargão técnico)

1. O escritório monta, uma única vez, um modelo do contrato/procuração num editor de texto (Google Docs), com os campos que mudam de cliente pra cliente marcados no texto (nome, CPF, valor, tipo de ação, data).
2. Os dados de um caso novo entram por um formulário simples, uma planilha ou o sistema que o escritório já usa pra cadastrar cliente.
3. Uma automação pega esses dados assim que eles chegam e preenche o modelo sozinha, sem ninguém copiar e colar nada.
4. O documento preenchido vira PDF automaticamente.
5. O PDF já sai enviado pra assinatura eletrônica (Clicksign, DocuSign ou similar), e a automação acompanha quem assinou e quem não assinou, mandando lembrete sozinha pra quem ainda não assinou.
6. Depois de assinado, o contrato é arquivado automaticamente na pasta do cliente e o status é atualizado no controle do escritório.

**Resultado esperado:** ninguém abre mais o contrato do cliente anterior pra "salvar como" e trocar dado na mão — o documento sai certo desde a primeira vez, e o tempo que se gastava redigindo e conferindo campo por campo vira tempo de atendimento ou de captação.

## Artefato candidato

Não há print/imagem própria coletada (mesma limitação de `WebFetch` impediu capturar tela real do fluxo no n8n ou do template no Google Docs). Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo — conforme pedido explícito da tarefa e a própria descrição da skill de imagem.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico levantado na pesquisa — o hábito de reaproveitar um contrato antigo trocando os dados na mão, e o risco de erro material que isso gera — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-06-advocacia-contrato-automatico-n8n`, seguido de `carrossel-imagens-tema-tutorial` (YOLO, sem imagem), conforme pedido explícito da tarefa (que substitui `carrossel-imagens-tweet-screenshot` pelo template de tutorial).
