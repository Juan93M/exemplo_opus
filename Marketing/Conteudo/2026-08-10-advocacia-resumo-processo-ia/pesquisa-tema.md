# Dossiê — pesquisa-tutorial-carrossel — 2026-08-10

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citados no SKILL.md/na tarefa (sem ferramenta de acesso a Drive disponível nesta sessão). Adaptação: usei o repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado — mais confiável que o ledger sozinho — e gravo o dossiê dentro da própria pasta do carrossel do dia, seguindo o padrão já usado nas execuções anteriores.

`WebFetch` retornou `EGRESS_BLOCKED` em todas as tentativas de abrir as páginas-fonte diretamente nesta sessão (mesma limitação já registrada nas execuções de 2026-08-04 a 2026-08-09). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que o `WebSearch` já sintetizou de várias fontes reais convergentes.

## Sincronização do dedup

Branch `claude/kind-thompson-0fokdo` conferida em paridade com `origin/main` antes de escolher o tema (mesmo HEAD, `f0fbf7e`). As pastas em `Marketing/Conteudo/` batem com o ledger `historico-temas.md` dentro da janela de 14 dias (2026-07-27 a 2026-08-10) — as 3 entradas de contabilidade de 2026-08-03/04 registradas como "backfill de outra branch cloud" não têm pasta neste checkout, mas já estão registradas no ledger, então não há pasta órfã pra fazer backfill agora.

Setores/técnicas cobertos nos últimos 14 dias (desde 2026-07-27):
- 2026-07-29 — produtores de conteúdo — gravar a tela e a IA repete a tarefa sozinha (Screenpipe)
- 2026-08-03 — contabilidade — extração de NFS-e com IA + n8n
- 2026-08-04 — contabilidade — leitura automática de nota fiscal por e-mail com OCR + IA
- 2026-08-04 — contabilidade — conciliação bancária automática lendo extrato em PDF com IA
- 2026-08-04 — advocacia — monitoramento automático de prazos/intimações por e-mail (n8n)
- 2026-08-04 — imobiliária/corretor — agente de WhatsApp qualifica lead e agenda visita
- 2026-08-04 — salão/barbearia (PME de serviço) — lista de espera automática no WhatsApp
- 2026-08-05 — clínicas/consultórios — confirmação automática de consulta via WhatsApp
- 2026-08-06 — advocacia — geração automática de contratos/procurações com n8n + Google Docs
- 2026-08-07 — clínicas/consultórios — prontuário por voz (IA ouve a consulta e escreve sozinha)
- 2026-08-08 — produtores de conteúdo — repurposing automático de conteúdo com n8n
- 2026-08-09 — contabilidade — portal automático de cobrança/coleta de documentos do cliente

Todos os 5 setores-alvo da rotina (clínicas, advocacia, contabilidade, produtores de conteúdo, PMEs de serviço em geral) já foram tocados dentro da janela de 14 dias — contabilidade é o mais repetido (3x), seguido de advocacia, clínicas e produtores de conteúdo (2x cada). Como nenhum setor está "livre", o critério que sobra é técnica claramente distinta dentro de um setor já usado (mesmo padrão já aplicado em execuções anteriores, ex. 2026-08-06 sobre advocacia). Descartei repetir clínica/contabilidade hoje (já testei ângulos de triagem via WhatsApp para clínica e de dúvidas fiscais via Custom GPT para contabilidade, mas as fontes reais encontradas eram mais rasas — sem passo a passo tão concreto quanto o candidato de advocacia abaixo) e escolhi advocacia com uma terceira técnica, nitidamente diferente de monitoramento de prazo (2026-08-04) e de geração de documento (2026-08-06).

## Candidatos avaliados e descartados

- **Clínica — triagem de paciente por IA no WhatsApp antes da consulta** (fontes: Cloudia, Strato AI, StudioMoob): ângulo interessante, mas as buscas devolveram descrição de produto/benefício mais do que um passo a passo replicável e citável ponto a ponto; WebFetch bloqueado impediu abrir a página fonte pra confirmar o fluxo exato. Descartado por hoje — não atinge a barra de "passo a passo real" com a mesma confiança do candidato escolhido.
- **Contabilidade — Custom GPT respondendo dúvida fiscal do cliente via Zapier + e-mail** (fonte: robertodiasduarte.com.br): técnica real e com passo a passo genérico de conexão Zapier↔Custom GPT, mas contabilidade já é o setor mais repetido da janela (3x) — preferi não empilhar um 4º tema no mesmo setor havendo candidato forte em outro setor.

## Tema escolhido

**Técnica:** Resumo automático de processo judicial inteiro com IA (ferramentas nomeadas: Jurídico AI — "Ferramenta de resumo processual" — e Predictus ResumeAI). O advogado sobe o PDF do processo (a Jurídico AI aceita até 2.000 páginas) e a IA devolve, em minutos, uma linha do tempo cronológica dos eventos, um resumo narrativo dos fatos e "aprofundamentos" com os pontos-chave (decisões, fases), em vez de precisar reler o processo inteiro do zero.

**Setor-alvo:** Escritórios de advocacia (público-alvo explícito da rotina) — terceira técnica distinta nesse setor na janela de 14 dias (as outras duas foram monitoramento de prazo e geração de contrato; esta é leitura/compreensão de processo já em andamento).

**Ângulo / comportamento específico (não é molde genérico):** o gatilho não é "advogado tem pouco tempo" em abstrato — é o momento concreto em que um advogado reabre um processo que ficou parado meses (ou herdou de outro colega/estagiário) e precisa, antes de uma audiência ou de uma reunião com o cliente, relembrar tudo que já aconteceu relendo dezenas ou centenas de páginas de petições e decisões, uma por uma, pra não repetir um argumento já rejeitado ou perder um fato relevante. Esse comportamento (reler o processo do zero pra "se situar de novo") é o que ancora a frase de público-alvo do carrossel, com o cuidado explícito de não usar a fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto".

**Cuidado importante levantado pela própria pesquisa (vira parte do conteúdo, não só rodapé):** fontes especializadas (Migalhas, e o próprio setor) alertam que resumo gerado por IA não substitui a revisão humana — já houve casos de peça protocolada citando precedente inexistente "alucinado" por IA sem revisão. O resumo é ponto de partida pra se situar rápido, não decisão pronta pra colar direto numa peça ou mandar sem checar pro cliente.

## Fontes reais (citáveis)

- https://juridico.ai/direito-digital/ferramenta-resumo-processual/ — "Ferramenta de resumo processual" (Jurídico AI): descreve a ferramenta, upload de PDF de até 2.000 páginas, e o resultado com linha do tempo, resumo dos fatos e aprofundamentos.
- https://help.juridico.ai/pt/article/como-resumir-processos-e-documentos-na-juridico-ai-194rc0m/ — artigo de ajuda "Como resumir processos e documentos na Jurídico AI?": passo a passo de uso — localizar a função de resumo, escolher resumir processo completo ou documento específico, enviar o PDF, escolher o formato (inclusive "resumo para cliente" em linguagem acessível), clicar em "Resumir", e visualizar o resultado nos três pilares (linha do tempo / resumo dos fatos / aprofundamentos).
- https://predictus.inf.br/blog-resumo-de-processos-com-ia/ — "ResumeAI: resumo de processos judiciais com IA em segundos" (Predictus): ferramenta concorrente/equivalente, reforça a técnica como padrão de mercado (não é caso isolado de um único produto) e confirma o resultado em segundos/minutos sem exigir conhecimento técnico do usuário.
- https://www.migalhas.com.br/depeso/458447/entre-o-prompt-e-o-processo-ainda-ha-o-advogado — artigo jurídico (Migalhas) sobre os riscos de usar IA sem revisão em peças processuais, incluindo casos reais de peças com referência a precedente inexistente gerado por IA — fonte do "cuidado importante" acima.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas buscas já sintetizaram de fontes reais convergentes, sem invenção de detalhe técnico além do que foi retornado e sem estatística não-verificável.)

## Passo a passo extraído (traduzido pro dono/sócio de escritório, sem jargão técnico)

1. Pegue o PDF completo do processo (petição inicial, contestação, decisões, tudo que já foi juntado) — ferramentas como a Jurídico AI aceitam processos bem extensos, até milhares de páginas.
2. Suba esse PDF numa ferramenta de resumo de processo por IA (ex.: Jurídico AI, Predictus ResumeAI).
3. Escolha o que você quer: resumir o processo inteiro (visão macro do caso) ou só um documento específico dentro dele.
4. Escolha também o formato de saída — um resumo técnico pra uso interno do escritório, ou um resumo em linguagem simples pra mandar direto pro cliente entender o andamento.
5. Clique em gerar/resumir. Em poucos minutos a IA devolve três coisas: uma linha do tempo visual com os principais eventos do processo em ordem cronológica, um resumo narrativo dos fatos (da petição inicial até a última decisão) e "aprofundamentos" com os pontos que merecem atenção.
6. Antes de usar esse resumo numa peça, numa audiência ou de mandar pro cliente, revise com atenção — o resumo é ponto de partida pra se situar rápido, não texto pronto pra colar sem checar; já houve caso real de peça citando precedente que não existia porque ninguém revisou o que a IA tinha gerado.

**Resultado esperado:** em vez de reler o processo inteiro do zero toda vez que precisa se situar de novo (antes de uma audiência, uma reunião com cliente, ou ao assumir um caso de outro advogado), o escritório tem em minutos uma linha do tempo e um resumo dos fatos pra conferir e usar como ponto de partida.

## Artefato candidato

Não há print/imagem própria coletada (mesma limitação de `WebFetch` impediu capturar tela real da interface da Jurídico AI ou do Predictus). Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo — conforme já ocorreu nas execuções de 2026-08-07, 2026-08-08 e 2026-08-09.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico levantado na pesquisa — reabrir um processo parado ou herdado e ter que reler tudo do zero pra se situar antes de uma audiência ou reunião com cliente — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo, o cuidado sobre revisão humana e setor-alvo acima, slug `2026-08-10-advocacia-resumo-processo-ia`, seguido de `carrossel-imagens-tema-tutorial` (YOLO, sem imagem).
