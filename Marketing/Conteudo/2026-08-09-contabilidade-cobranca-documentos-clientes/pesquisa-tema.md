# Dossiê — pesquisa-tutorial-carrossel — 2026-08-09

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citada na tarefa (nenhuma ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch` nativos, GitHub MCP e ferramentas locais). Adaptação mantida: repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado, dossiê gravado dentro da própria pasta do carrossel do dia — mesmo padrão das execuções de 2026-08-05 a 2026-08-08.

`WebFetch` retornou `EGRESS_BLOCKED` em toda tentativa de abrir página-fonte diretamente nesta sessão (pastacontabil.com.br e horadecodar.com.br, mesma limitação já registrada em execuções anteriores). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que duas fontes independentes (Pasta Contábil e Ottimizza) já sintetizaram, com nome de modelo/ferramenta e mecânica batendo entre si.

## Sincronização do dedup

Branch de trabalho (`claude/kind-thompson-rmwxvo`) partiu exatamente de `origin/main` (HEAD `921f1fe`, mesmo commit em ambos). Pastas em `Marketing/Conteudo/` (últimos 14 dias, desde 2026-07-26) e o ledger `historico-temas.md` conferem entre si — sem pasta órfã pra backfill.

Setores/técnicas cobertos nos últimos 14 dias:
- 2026-07-29 — produtores de conteúdo / consultores — gravar a tela e a IA repete a tarefa sozinha (Screenpipe)
- 2026-08-03 — contabilidade — extração de NFS-e com IA + n8n
- 2026-08-04 — contabilidade — leitura automática de nota fiscal por e-mail com OCR + IA
- 2026-08-04 — contabilidade — conciliação bancária automática lendo extrato em PDF com IA
- 2026-08-04 — advocacia — monitoramento automático de prazos/intimações por e-mail (n8n)
- 2026-08-04 — imobiliária/corretor — agente de WhatsApp qualifica lead e agenda visita
- 2026-08-04 — salão/barbearia (PME de serviço) — lista de espera automática no WhatsApp
- 2026-08-05 — clínicas/consultórios — confirmação automática de consulta via WhatsApp (recepção)
- 2026-08-06 — advocacia — geração automática de contratos/procurações com n8n + Google Docs
- 2026-08-07 — clínicas/consultórios — prontuário por voz durante a consulta
- 2026-08-08 — produtores de conteúdo — repurposing automático de conteúdo com n8n + IA

Contabilidade (3x) é o setor mais tocado do público-alvo fixo, mas há **5 dias sem novo tema** (o mais longo intervalo entre os 4 setores nucleares — advocacia há 3 dias, clínicas há 2, produtores de conteúdo há 1). Os 3 temas de contabilidade já cobertos são todos sobre **processar documento que já chegou** (ler NFS-e, ler nota por e-mail com OCR, ler extrato bancário). Hoje a pesquisa mirou deliberadamente numa etapa anterior do fluxo — **conseguir que o documento chegue** — pra garantir técnica distinta, não variação do mesmo fluxo.

## Tema escolhido

**Técnica:** Portal automático de cobrança e coleta de documentos do cliente — em vez do escritório mandar mensagem manual atrás de nota fiscal, extrato e folha de pagamento de cada cliente todo início de mês, um portal com link individual por cliente recebe o upload, registra sozinho quem já mandou o quê, e só cobra automaticamente quem realmente ainda está devendo documento.

**Setor-alvo:** Escritórios de contabilidade (público-alvo explícito da rotina).

**Ângulo / comportamento específico (não é molde genérico):** a dor nomeada nas fontes não é "documentação desorganizada" em geral — é o ritual mensal específico de escrever, um por um, "oi, cadê a nota fiscal desse mês" pra cada cliente, sem saber quem já respondeu e quem ainda vai atrasar o fechamento. A fonte descreve literalmente que a cobrança manual "traz atraso, prazo perdido e desgaste na relação com o cliente" e que o modelo de portal resolve isso enviando lembrete automático só pra quem realmente não entregou (não manda de novo pra quem já mandou). É esse comportamento — mandar a mesma cobrança de novo e de novo sem saber o status real de cada cliente — que ancora a frase de público-alvo do carrossel, não uma fórmula de "contador autônomo, escritório pequeno, time enxuto".

## Fontes reais (citáveis)

- https://pastacontabil.com.br/blog/automacao-cobranca-documentos-clientes-contabilidade — descreve o "Modelo 3": portal dedicado com link personalizado por cliente, que abre no celular sem instalar nada; o cliente escolhe o tipo de documento e faz upload; o portal registra quem mandou, quando, e o que falta; o escritório vê um painel de status por cliente e por competência (mês de referência); avisos de cobrança automática saem só pra quem realmente não entregou. Também descreve um plano de implementação gradual: na semana 1, escolher os 10 clientes que mais atrasam, configurar o portal pra esse grupo piloto e mandar o link por WhatsApp com mensagem curta.
- https://ottimizza.com.br/cobranca-automatica-de-documentos-guia-pratico-para-contadores/ — confirma o mesmo padrão com outra ferramenta (Cobra Arquivos, da Ottimizza): o processo começa parametrizando regras de cobrança (quais documentos, de quais clientes, com que frequência), a partir daí a plataforma agenda e dispara os pedidos de arquivo sozinha, identificando documento faltando ou com problema e pedindo reenvio; o artigo nomeia o custo do processo manual — atraso, prazo perdido, multa por obrigação acessória não cumprida em dia.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. Duas fontes independentes convergem no mesmo mecanismo — link/portal individual, status por cliente, cobrança automática seletiva — o que dá segurança de que não é invenção de detalhe.)

## Passo a passo extraído (traduzido pro dono de escritório contábil, sem jargão técnico)

1. Liste os documentos que você cobra de cada cliente todo mês (nota fiscal, extrato bancário, folha de pagamento, boleto) e a frequência de cada um — isso vira a "regra de cobrança" da automação.
2. Configure um portal de coleta com link individual por cliente (existe ferramenta pronta pra isso, ou dá pra montar um fluxo próprio) — o cliente abre esse link no celular, sem precisar instalar nada, escolhe qual documento está mandando e faz o upload ali mesmo.
3. O portal registra sozinho quem já mandou, quando mandou, e o que ainda falta — por cliente e por competência (o mês a que aquele documento se refere) — então você para de precisar perguntar "você já me mandou isso?" cliente por cliente.
4. Comece com um piloto pequeno: escolha os 10 clientes que mais atrasam a entrega, ative a cobrança automática só pra esse grupo e mande o link por WhatsApp com uma mensagem curta.
5. A partir daí, o lembrete de cobrança sai sozinho — mas só pra quem realmente ainda não entregou; quem já mandou o documento não recebe cobrança de novo.
6. Validado o piloto, expanda a mesma regra pro resto da carteira de clientes.

**Resultado esperado:** menos tempo do escritório gasto mandando mensagem individual atrás de documento, menos atraso no fechamento por papel faltando, e menos risco de multa por obrigação acessória entregue fora do prazo por falta de documento do cliente.

## Artefato candidato

Não há print próprio coletado (mesma limitação de `WebFetch` impediu abrir a página-fonte e capturar tela real do portal/painel). As 2 fontes descrevem o mecanismo, os campos do painel (status por cliente/competência) e o plano de rollout com detalhe suficiente pra servir de referência textual pra quem for montar a arte, mesmo sem captura de tela própria. Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, sem imagem por passo (modo YOLO), conforme pedido explícito da tarefa de hoje.

## Candidatos descartados

- **Advocacia / clínicas / produtores de conteúdo (qualquer novo fluxo).** Todos já apareceram nos últimos 3 dias — contabilidade estava há mais tempo sem tema novo (5 dias) entre os 4 setores nucleares do público-alvo.
- **Novo fluxo de leitura de nota fiscal/extrato para contabilidade.** Descartado por ser variação do mesmo fluxo já coberto em 2026-08-03/08-04 (processar documento já recebido) — a etapa de cobrar/coletar o documento do cliente, escolhida hoje, é uma técnica distinta na mesma jornada.
- **Salão/barbearia e imobiliária.** Fora do público-alvo fixo explícito desta tarefa (clínicas, advocacia, contabilidade, produtores de conteúdo, PMEs de serviço em geral) — não descartados por qualidade, apenas não priorizados hoje.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico citado na fonte — mandar cobrança manual repetida sem saber o status real de cada cliente, todo início de mês — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-09-contabilidade-cobranca-documentos-clientes`, seguido de `carrossel-imagens-tema-tutorial` (YOLO), conforme pedido explícito da tarefa de hoje.
