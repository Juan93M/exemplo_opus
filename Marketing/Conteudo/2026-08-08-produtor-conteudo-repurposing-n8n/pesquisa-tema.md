# Dossiê — pesquisa-tutorial-carrossel — 2026-08-08

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citada na tarefa (nenhuma ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch` nativos, GitHub MCP e ferramentas locais). Adaptação: repositório git (`Marketing/Conteudo/`) usado como fonte de verdade de conteúdo já publicado, mais confiável que o ledger sozinho, e dossiê gravado dentro da própria pasta do carrossel do dia — mesmo padrão já usado em `2026-08-05-clinica-confirmacao-consulta-n8n/`, `2026-08-06-advocacia-contrato-automatico-n8n/` e `2026-08-07-clinica-prontuario-voz-ia/`.

`WebFetch` retornou `EGRESS_BLOCKED` em toda tentativa de abrir página-fonte diretamente nesta sessão (mesma limitação já registrada em execuções anteriores: dev.to, community.n8n.io, aimaker.substack.com e horadecodar.com.br todos bloqueados). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo da página. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que várias buscas convergentes já sintetizaram de fontes reais (nomes de nós, ferramentas e formato de saída batendo entre si em 3 fontes independentes).

## Sincronização do dedup

`git checkout main && git pull origin main` rodado antes da escolha do tema; branch local em paridade com `origin/main` (HEAD em `bab478c`). Pastas em `Marketing/Conteudo/` (últimos 14 dias, desde 2026-07-25) e o ledger `historico-temas.md` já conferem entre si — sem pasta órfã pra backfill.

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

Contabilidade (3x), advocacia (2x) e clínicas (2x) são os setores mais saturados na janela. Produtores de conteúdo só apareceu uma vez, há 10 dias, com uma técnica bem diferente (gravação de tela repetindo tarefa) — nenhum outro setor do público-alvo fixo desta tarefa (clínicas, advocacia, contabilidade, produtores de conteúdo, PMEs de serviço) está tão pouco tocado. Em 2026-08-07 a pesquisa de "repurposing de conteúdo com IA" foi tentada e **descartada** por falta de fonte com passo a passo concreto; hoje a pesquisa aprofundou mais e encontrou 3 fontes independentes com nome de nó, ferramenta e formato de saída convergentes (ver abaixo) — o candidato passa agora no filtro que reprovou há um dia.

## Tema escolhido

**Técnica:** Repurposing automático de conteúdo com n8n + IA — em vez de reescrever a mesma ideia do zero pra cada rede social, uma automação pega o texto original (post, transcrição de vídeo, rascunho de artigo) e já devolve pronta uma versão adaptada pra cada plataforma.

**Setor-alvo:** Pequenos produtores de conteúdo / criadores solo (público-alvo explícito da rotina) — mais aplicável ainda a quem já publica em mais de uma rede e sente esse retrabalho na pele (também serve pra profissionais de PME de serviço que fazem a própria divulgação, ex.: dono de clínica/escritório que também posta conteúdo).

**Ângulo / comportamento específico (não é molde genérico):** as fontes de pesquisa nomeiam o comportamento exato que consome o tempo — não é "postar menos", é reescrever manualmente a mesma ideia pra cada formato de rede, porque cada plataforma exige um tom e uma estrutura diferente (thread curta no X, post mais formal no LinkedIn, legenda com emoji e hashtag no Instagram, texto mais de conversa no Facebook). A dor citada nas fontes é literalmente "adaptar manualmente o mesmo conteúdo pra cada plataforma toma horas" — é esse comportamento (escrever a mesma ideia várias vezes, em formatos diferentes, toda vez que publica) que ancora a frase de público-alvo do carrossel, não uma fórmula de "criador autônomo, negócio pequeno, time enxuto".

## Fontes reais (citáveis)

- https://dev.to/flowyantradev/how-to-automatically-turn-blog-posts-into-social-media-content-with-n8n-and-openai-free-template-1hcl — artigo com passo a passo do fluxo gratuito: gatilho por RSS assim que um post novo sai, nó de IA (OpenAI) com um "system prompt" que gera Twitter/X e LinkedIn (versão free, 2 redes), nó condicional (IF) opcional pra filtrar só posts de certas categorias, entrega no Slack pra revisão e registro numa planilha do Google Sheets; todo o fluxo gera as versões em cerca de 30 segundos e o template é disponibilizado gratuitamente no fim do artigo.
- https://community.n8n.io/t/free-workflow-ai-content-repurposing-1-blog-post-4-platforms-twitter-linkedin-instagram-facebook/282971 — workflow gratuito da comunidade oficial do n8n (construído na Automatia BCN): recebe um post/artigo, gera automaticamente 4 versões — thread de 5 a 7 tweets pro X, post em tom profissional com gancho e hashtags pro LinkedIn, legenda com estratégia de emoji e mais de 20 hashtags pro Instagram, texto em tom de conversa pro Facebook — confirmando o mesmo padrão de saída "1 texto vira 4" descrito no artigo acima.
- https://n8n.io/workflows/11599-repurpose-blog-and-youtube-content-to-social-media-with-gpt-51-and-google-docs/ — template oficial do catálogo n8n.io: você cola um link ou o texto do conteúdo original, a IA (GPT) analisa e devolve mais de 7 peças prontas (posts de LinkedIn, thread de Twitter, newsletter por e-mail, roteiro de vídeo) em menos de 2 minutos; a própria página do template lista quem é o público — criadores de conteúdo, solopreneurs e pequenos negócios "que precisam estar em todo lugar mas têm tempo limitado" — e nomeia o problema que resolve: adaptar conteúdo manualmente pra cada rede toma horas.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas 3 fontes convergentes já sintetizaram, sem invenção de detalhe técnico além do que foi retornado.)

## Passo a passo extraído (traduzido pro dono/criador, sem jargão técnico)

1. Você escreve ou grava o conteúdo original **uma única vez** — pode ser o texto de um post, a transcrição de um vídeo/reels que já gravou, ou um rascunho solto de artigo. Não precisa já estar pronto pra nenhuma rede específica.
2. Uma automação (montada com n8n, uma ferramenta de automação visual — não é preciso programar) fica de olho nesse conteúdo: assim que você publica ou cola o texto num lugar combinado (um feed RSS do seu blog, um formulário, uma planilha), ela dispara sozinha.
3. Um "robô de escrita" (a mesma tecnologia por trás do ChatGPT, conectado dentro da automação) lê o texto original e devolve, em segundos, uma versão adaptada pra cada rede: um post mais formal com gancho pro LinkedIn, uma sequência curta de posts pro X/Twitter, uma legenda com emoji e hashtags pro Instagram, um texto mais de conversa pro Facebook — cada um já no tom certo daquela rede, sem você reescrever nada do zero.
4. As versões prontas chegam pra você revisar antes de qualquer coisa ir ao ar — por um aviso (tipo Slack) ou registradas numa planilha — nunca postam sozinhas sem alguém olhar.
5. Você lê rápido, ajusta o que quiser (uma palavra, um emoji, um exemplo seu) e aprova — o trabalho pesado de "traduzir" a mesma ideia pra 4 formatos diferentes já foi feito antes de você abrir a tela.

**Resultado esperado:** a mesma ideia que você teria que escrever manualmente 4 vezes (uma por rede) sai pronta em poucos minutos, sobrando tempo pra criar conteúdo novo em vez de reescrever o antigo em formatos diferentes.

## Artefato candidato

Não há print próprio coletado (mesma limitação de `WebFetch` impediu abrir as páginas-fonte e capturar tela real do fluxo no n8n). As 3 fontes descrevem nome de nó, ferramenta e formato de saída com detalhe suficiente pra servir de referência textual pra quem for montar a arte, mesmo sem captura de tela própria. Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo — conforme pedido explícito da tarefa de hoje (que também pede essa skill de imagem no lugar de `carrossel-imagens-tweet-screenshot`).

## Candidatos descartados

- **Contabilidade (qualquer novo fluxo).** Fontes reais existem, mas contabilidade já apareceu 3x nos últimos 14 dias — descartado por saturação de setor.
- **Advocacia / clínicas (qualquer novo fluxo).** Ambos já apareceram 2x nos últimos 14 dias; produtores de conteúdo estava mais tempo sem cobertura e tinha fonte com passo a passo mais concreto hoje.
- **Opus Clip / cortes automáticos de vídeo com IA.** Técnica real e bem documentada (cortar vídeo longo em clipes curtos automaticamente), mas descartada por causa do nome do produto: "Opus Clip" colidiria de forma confusa com a marca "Opus Automações" no mesmo carrossel — risco de o público achar que é ferramenta da própria Opus. Preferiu-se a técnica de repurposing por n8n, sem esse conflito de nome.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico citado nas fontes — reescrever manualmente a mesma ideia em formatos diferentes toda vez que muda de rede — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-08-produtor-conteudo-repurposing-n8n`, seguido de `carrossel-imagens-tema-tutorial` (YOLO), conforme pedido explícito da tarefa de hoje.
