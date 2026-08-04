---
name: pesquisa-tutorial-carrossel
description: Use quando o usuário quer rodar a routine diária de carrosséis de Instagram sobre automação e IA pra pequenos negócios: pesquisa o tema do dia e produz 1 carrossel por vez. Busca fontes reais (Reddit, Hacker News, YouTube, blogs, só WebSearch/WebFetch, sem scripts externos), ranqueia por relevância pro público-alvo (clínicas, consultórios, escritórios de advocacia, pequenos criadores de conteúdo) + engajamento + novidade, faz dedup contra o que já foi postado, e escolhe o melhor tema entre os buckets (caso real, notícia quente, educativo, sem distribuição fixa). Orquestra carrossel-instagram (modo YOLO) e carrossel-imagens-tema-tutorial pra esse tema. Triggers: "/pesquisa-tutorial-carrossel", "roda a routine de carrosséis", "carrossel do dia", "pesquisa o tema e cria o post". NÃO usa X/Twitter, NÃO depende de scripts próprios, NÃO escreve o conteúdo nem renderiza a imagem, mas traduz a entrega pro schema fixo da skill de imagem antes do render.
---

# pesquisa-tutorial-carrossel

Roda a **routine de carrosséis** de ponta a ponta: pesquisa os temas mais fortes sobre automação e IA aplicada a pequenos negócios, ranqueia, evita repetir o que já foi postado, escolhe **o melhor tema entre todos os buckets** (sem distribuição fixa de bucket) e dispara as 2 skills de carrossel (texto + imagem) pra esse tema. O entregável é **1 carrossel pronto**.

A skill é a **camada de escolha de tema** — ela não escreve o conteúdo nem renderiza a arte (isso continua nas skills `carrossel-instagram` e `carrossel-imagens-tema-tutorial`); ela decide **sobre o quê** postar, orquestra as duas, e faz a ponte de formato entre elas (ver "Handoff").

**Regra de ouro: nunca inventa dado nem simula pesquisa.** Tema sem fonte real coletada (URL citável) não entra. O que falhar na coleta vira lacuna explícita — nunca vira dado inventado.

## Público-alvo (não mexer sem confirmar com o dono)

O conteúdo é para posicionar a empresa como referência em **análise de processos + automação + IA** para:
- Clínicas e consultórios médicos/odontológicos
- Escritórios de advocacia
- Pequenos produtores de conteúdo / criadores solo
- Outras micro e pequenas empresas de serviço

Tema bom = dono desses negócios lê e pensa "isso resolveria um problema meu" ou "eu não sabia que dava pra automatizar isso". Tema ruim = interessante só pra quem já é técnico (dev, engenheiro de IA) — isso sai, mesmo que seja viral.

## Quando dispara

- "/pesquisa-tutorial-carrossel" (modo YOLO numa routine, ou interativo no chat)
- "Roda a routine de carrosséis de hoje"
- "Pesquisa o tema e cria o post do dia"

---

## Hard rules (invioláveis)

1. **Sem scripts externos.** Esta skill usa só `WebSearch` e `WebFetch` nativos do Claude. Não pressupõe Playwright, yt-dlp, API keys ou scripts locais.
2. **Sem X/Twitter.** Ruído demais e baixo retorno pra esse público; não usar como fonte.
3. **Nunca inventar.** Todo tema nasce de fonte real coletada e citável (URL). Proibido fabricar caso, número, citação ou print. Lacuna vira lacuna registrada no dossiê.
4. **Todo tema precisa de um artefato concreto** (print de post/notícia, thread, vídeo, prompt, tela) — isso é o que vira referência visual pra quem for montar a arte. Tema sem nenhum artefato é candidato fraco; só entra se o ângulo for muito forte.
5. **Tradução de jargão obrigatória no ângulo.** Fonte técnica (ex.: Hacker News, Reddit de devs) só entra se o ângulo puder ser resumido em linguagem de dono de negócio, sem jargão técnico — essa tradução vai no dossiê e é passada como `objetivo/CTA` pra skill de escrita. Se não der pra traduzir sem perder o sentido, o tema não entra.
6. **YOLO = zero perguntas.** Numa routine não há ninguém pra responder. Tome as melhores decisões sozinho e registre tudo no log/dossiê.

---

## Fontes e ferramentas (sem scripts — só nativo)

| Fonte | Como buscar | Observação |
|---|---|---|
| **Reddit** (discussões sobre automação, IA, pequenos negócios) | `WebFetch` no endpoint JSON público, ex: `https://old.reddit.com/r/smallbusiness/top.json?t=week&limit=25` | Não precisa de API key nem login. Se o fetch falhar/for bloqueado, cair pro `WebSearch` com `site:reddit.com`. |
| **Hacker News** (lançamentos e discussão técnica que possam virar automação prática) | `WebFetch` na API pública Algolia: `https://hn.algolia.com/api/v1/search?query=<termo>&tags=story` (ou `search_by_date`) | JSON público, sem key. Serve mais pro bucket "notícia quente" — sempre traduzido pro público leigo. |
| **YouTube** (tutoriais de automação, cases) | `WebSearch` com `site:youtube.com` | Sem yt-dlp; usar o resultado da busca (título, descrição, canal) como fonte, sem transcrever o vídeo inteiro. |
| **Notícias e blogs amplos (BR e internacional)** | `WebSearch` + `WebFetch` na página encontrada | Lançamentos de ferramentas (n8n, Zapier, Make, WhatsApp Business API, ChatGPT/Claude for Business), matérias sobre adoção de IA por PMEs. |
| **Comunidades de nicho (advocacia, saúde, etc.)** | `WebSearch` com termos em português, ex: `"automação" "consultório" 2026`, `"IA" "escritório de advocacia"` | Público é majoritariamente BR — priorizar fontes e exemplos em português quando possível. |

---

## Os buckets possíveis (escolha o melhor, sem distribuição fixa)

Não há mais uma cota fixa por rodada (antes eram 2 casos + 1 notícia + 2 educativos). Cada rodada varre os três buckets abaixo e escolhe **1 único tema** — o mais forte no momento, seja ele qual bucket for. Não force diversidade artificial dentro de uma única rodada; a diversidade vem do dedup entre rodadas (ver seção "Dedup"), não de uma cota interna.

| Bucket | Fonte primária | O que procurar |
|---|---|---|
| **Discussão/caso viral** | Reddit (`r/smallbusiness`, `r/Entrepreneur`, `r/automation`) + WebSearch BR | thread ou relato real de dono de negócio automatizando algo, ou reclamando de um processo manual — ângulo forte |
| **Notícia quente** | Hacker News (Algolia) + WebSearch | novidade real das últimas ~72h em ferramenta de IA/automação que um pequeno negócio consiga usar sem time técnico, **traduzida pro leigo** |
| **Educativo** | Reddit / YouTube / blogs | tutorial ou lição prática replicável (ex.: "como automatizar confirmação de consulta pelo WhatsApp") |

Critério de desempate entre buckets: aplique os "Filtros de qualidade" abaixo a todos os candidatos levantados (de qualquer bucket) e escolha o de maior nota geral. Notícia quente só ganha prioridade automática se a novidade for realmente das últimas ~72h — fora dessa janela, compete em pé de igualdade com os outros buckets.

Subreddits semente: `r/smallbusiness`, `r/Entrepreneur`, `r/automation`, `r/nocode`, `r/artificial`, `r/ChatGPT`, `r/AI_Agents`, `r/marketing`.

Queries semente (varie PT-BR e EN): `automação pequenas empresas`, `IA para clínicas`, `IA para consultório médico`, `automação escritório de advocacia`, `atendimento automatizado WhatsApp`, `n8n automação`, `Zapier pequenas empresas`, `chatbot atendimento IA`, `AI agents small business`, `automation clinic`, `law firm AI tools`.

---

## Filtros de qualidade na escolha do tema

- **Aplicável > teórico.** O dono do negócio precisa conseguir imaginar isso rodando na empresa dele sem contratar um time técnico próprio. Se só um dev consegue implementar, o ângulo tem que ser "dá pra contratar alguém pra fazer isso pra você" — não "faça você mesmo com código".
- **Novidade > clichê.** Corte "a IA vai revolucionar tudo", "46% das empresas usam IA" sem caso concreto. Caçe caso real, número fresco, "implementei isso e o resultado foi X".
- **Ensina algo útil > isca de polêmica.** Pauta forte mostra um processo, uma ferramenta ou um resultado concreto.
- **Recência define o ângulo.** Notícia de horas = explicar a novidade. Notícia de dias/semanas = casos de uso reais, opiniões, "o que isso muda pra quem tem uma clínica/escritório".
- **Relevância pro público-alvo.** Se o tema só interessa a devs/tech, sai — a menos que dê pra reformular 100% pro dono de negócio leigo.
- **Artefato disponível** (print, link, vídeo, captura de tela) — vira referência pra quem monta a arte.
- **Um tema, um assunto.** Não junte dois casos/ferramentas diferentes no mesmo carrossel.

---

## Dedup — não repetir o que já foi postado

Antes de fechar o tema do dia:

1. Liste os slugs dos **últimos 14 dias** em `C:\Users\juanp\Desktop\ideias_carrossel\<YYYY>\<MM>\` (formato de pasta: `<YYYY-MM-DD>-<slug>`).
2. Leia o ledger `historico-temas.md` (raiz desta skill) — registro dos temas/assuntos já escolhidos.
3. Descarte candidato que repita assunto ou setor recente (ex.: já postou sobre clínicas essa semana → próximo tema de clínica só se o ângulo for muito diferente). Entre dois bons candidatos de setores diferentes, prefira o que ainda não foi tocado nos últimos 14 dias.
4. No fim da execução, **acrescente** o tema do dia ao `historico-temas.md` (data, título, setor/bucket, fonte).

---

## Handoff — como dispara as skills de carrossel

**O handoff muda de comportamento conforme o modo desta skill orquestradora (ver "Modos" abaixo). Só o modo YOLO (rotina automática) dispensa perguntas.** Modo interativo (disparada no chat, sem o gatilho `yolo`) preserva TODAS as perguntas normais das duas skills de carrossel — a única coisa que o modo interativo desta skill pula é a pesquisa de tema em si (você já vê o tema escolhido em `temas-do-dia.md` e só aprova). Isso replica o comportamento da skill irmã `pesquisa-temas-carrossel-pme`, que faz exatamente essa distinção.

Para o tema escolhido:

1. **Invoca `carrossel-instagram`:**
   - **Se esta skill está em modo YOLO** (rotina automática, ninguém pra responder): invoca em **modo YOLO** dela (ver seção "Modo YOLO" no `SKILL.md` dela — sem checkpoints, sem perguntas) passando: `yolo` + `tema:` + `fonte_url:` (a URL real da fonte) + `objetivo/CTA:` sugerido (já traduzido pro dono de negócio, ver Hard rule 5) + `setor_alvo:` + `slug:` de saída. Ela entrega os slides no formato dela (bloco `▸ SLIDE N [função]`, já revisado pelo diagnóstico da Fase 6).
   - **Se esta skill está em modo interativo** (disparada no chat por um humano): invoca `carrossel-instagram` **NORMALMENTE, sem o gatilho `yolo`** — ela roda o fluxo completo (Abertura → Fase 0 → Pesquisa 1 → Fase 1 → Pesquisa 2 → Fase 1b → Fase 2 (briefing exaustivo) → Pesquisa 3 → Fase 3 (ganchos) → Fase 4 (plano) → Fase 5 (rascunho) → Fase 6 (diagnóstico) → Fase 7), com **todos os checkpoints e perguntas ao usuário**, exatamente como se o usuário tivesse chamado `carrossel-instagram` direto. Use o `tema:`/`fonte_url:`/`setor_alvo:` levantados na pesquisa só como ponto de partida da Fase 0 dela (ela ainda vai perguntar objetivo, arquétipo, âncora, etc. — não pule nada disso).

2. **Traduzir a entrega do `carrossel-instagram` pro schema da `carrossel-imagens-tema-tutorial` e gravar `roteiro.md`.** Os dois formatos são diferentes por design — `carrossel-instagram` usa arquétipos narrativos (gancho, re-hook, educativo, etc.), `carrossel-imagens-tema-tutorial` usa um schema fixo (`arquetipo: capa|conteudo|cta`, ver `archetypes.md` dela). Essa tradução é responsabilidade **desta skill orquestradora**, feita antes de invocar a skill de imagem, **independente do modo** (em modo interativo, a entrega vem do texto final que `carrossel-instagram` mostrou no chat ao fim da Fase 7, não de um arquivo — use esse texto como fonte da tradução):
   - **1º slide do carrossel-instagram → `arquetipo: capa`** — `titulo` = o gancho (slide 1), `tag` opcional (ex.: `"TUTORIAL"`, `"GUIA RÁPIDO"`), `bloco_destaque` opcional = uma frase curta do slide 2 (re-hook), se couber curta.
   - **Slides do miolo → um `arquetipo: conteudo` cada, numerados em ordem.** `tag` = `"PASSO 1"`, `"PASSO 2"`... **Se o tema não for sequencial de verdade** (bucket "caso viral" ou "notícia quente", não "educativo"), a `tag` vira um kicker curto que descreve o papel do slide em vez de um número de passo (ex.: `"O QUE ACONTECEU"`, `"POR QUE IMPORTA"`, `"O QUE MUDA PRA VOCÊ"`) — o layout de ticket funciona igual, só a numeração literal de passo é que só faz sentido pra bucket educativo. `titulo` = a frase de abertura/ação do slide. `texto` = o resto do conteúdo do slide, mantendo as frases como o `carrossel-instagram` escreveu (zero reescrita nova).
   - **Último slide → `arquetipo: cta`** — `titulo` + `chamada_final` = o CTA do `carrossel-instagram`, `cta_url: "@opus.automacoes"`, `plug` só se o `carrossel-instagram` tiver sugerido um.
   - **Fidelidade:** essa tradução só reformata em blocos YAML — não pode reescrever, resumir ou inventar texto novo. Se um slide do `carrossel-instagram` não couber no limite de palavras do `conteudo.texto` (20-70, hard error > 100 — ver `archetypes.md`), encurtar cortando o que for menos essencial, nunca resumir livre.
   - Gravar o `roteiro.md` resultante (mais o `legenda.md`, que não muda) em `C:\Users\juanp\Desktop\ideias_carrossel\<YYYY>\<MM>\<YYYY-MM-DD>-<slug>\`, com `template: carrossel-imagens-tema-tutorial` no frontmatter.

3. **Invoca `carrossel-imagens-tema-tutorial` apontando pro `roteiro.md` gravado no passo 2:**
   - **Modo YOLO:** ela roda **sem imagem** (ver regra própria dela) — os campos `imagem:` do roteiro, se houver, são ignorados.
   - **Modo interativo:** ela roda normalmente, inclusive o Step 2 do workflow dela (sugerir/perguntar imagem por slide `conteudo`, `print` ou `svg`) — não force o modo sem imagem só porque veio desta orquestradora.

4. **Espelhar a pasta inteira do carrossel pra dentro do repo (2026-07-29).** Depois que os PNGs finais existem em `vN/`, copiar a pasta completa do tema (`roteiro.md`, `roteiro-carrossel-instagram.md`, `legenda.md`, `vN/` inteira) de `C:\Users\juanp\Desktop\ideias_carrossel\<YYYY>\<MM>\<slug>\` pra `C:\Users\juanp\Desktop\projeto_opus_ai\Marketing\Conteudo\<slug>\`. As duas cópias ficam idênticas — `ideias_carrossel` continua sendo a fonte usada pro dedup (Hard rule de dedup lê de lá), o `projeto_opus_ai` é o espelho versionado em git. Não precisa perguntar, é passo automático do handoff.

O slug segue o padrão: `<YYYY-MM-DD>-<slug-curto-do-tema>` (ex.: `2026-07-20-whatsapp-agendamento-clinica`).

---

## Saída / dossiê da pesquisa

Grave o dossiê da pesquisa em `C:\Users\juanp\Desktop\ideias_carrossel\pesquisa-temas\<YYYY-MM-DD>\temas-do-dia.md` contendo, para o tema do dia: bucket, título, ângulo, fonte (URL real), artefato/print candidato, setor-alvo, CTA sugerido, slug. Opcionalmente pode listar os principais candidatos descartados (com bucket e motivo) para rastreabilidade, mas o entregável é o tema único escolhido. É o que alimenta o handoff.

## Modos

- **YOLO (default da routine):** pesquisa (todos os buckets) → ranqueia → dedup → escolhe o melhor tema → grava `temas-do-dia.md` → dispara `carrossel-instagram` em modo YOLO → **traduz a entrega pro schema da `carrossel-imagens-tema-tutorial`** (ver "Handoff") → dispara `carrossel-imagens-tema-tutorial` → atualiza ledger. Sem nenhuma pergunta. Anuncie em 1 linha e rode até entregar o carrossel.
- **Interativo:** mesma coisa com **um checkpoint** — apresenta o tema escolhido (`temas-do-dia.md`) e espera o "ok" antes de disparar as skills de carrossel. Dispara com "modo interativo" / sem o gatilho `yolo`.

---

## A routine final (1 linha)

Rode a skill `pesquisa-tutorial-carrossel` em modo YOLO: pesquise os temas mais fortes sobre automação e IA para pequenos negócios em todos os buckets (caso/discussão real, notícia quente traduzida pro leigo, educativo), priorizando relevância pra clínicas, consultórios, escritórios de advocacia e pequenos produtores de conteúdo, evite repetir setor/assunto dos últimos 14 dias, escolha o melhor tema entre todos os buckets (sem cota fixa) e gere 1 carrossel pronto disparando as skills carrossel-instagram (em modo YOLO) e carrossel-imagens-tema-tutorial. Não faça nenhuma pergunta, estamos numa routine.
