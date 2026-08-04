# Temas do dia — 2026-08-04

Pesquisa rodada em modo YOLO pela skill `pesquisa-tutorial-carrossel`. Fontes reais coletadas via WebSearch (WebFetch indisponível nesta execução — todas as chamadas a páginas externas retornaram 403, inclusive em domínios neutros como Wikipedia, confirmando bloqueio de rede geral e não específico de um site. Os dados abaixo vêm dos snippets/sínteses retornados pelo próprio WebSearch, que cita a URL original).

## Sincronização do ledger

Pastas reais encontradas em `Marketing/Conteudo/` (equivalente local ao `ideias_carrossel\<YYYY>\<MM>\` do ambiente Windows original — este container roda em Linux, sem esse caminho):

- `2026-07-16-diagnostico-ia-pme`
- `2026-07-16-smoke-carrossel-imagens-tweet-screenshot`
- `2026-07-19-onde-ia-economiza`
- `2026-07-29-tela-gravada-vira-agente-ia`

Janela de dedup (14 dias antes de 2026-08-04 = a partir de 2026-07-21): só `2026-07-29-tela-gravada-vira-agente-ia` cai dentro da janela (tema: gravação de tela/call vira resumo automático via Screenpipe, setor amplo/PME de serviço). As entradas de `2026-07-20` no ledger (`historico-temas.md`) ficam fora da janela de 14 dias, mas foram consideradas por segurança pra evitar repetir técnica/setor recente: WhatsApp+clínica (2x), advocacia+IA (2x), WhatsApp+cobrança.

## Tutorial escolhido

**Técnica:** Leitura automática de extrato bancário em PDF com IA (conciliação bancária sem digitar nada)
**Ferramenta nomeada:** Nibo (gestão financeira/contábil, usado por escritórios de contabilidade e PMEs no Brasil)
**Setor-alvo primário:** escritórios de contabilidade (também serve pra qualquer PME de serviço que fecha o caixa todo mês)
**Por que esse tema:** nenhum tema de contabilidade foi coberto nos últimos 14 dias (só "cobrança/financeiro" em 2026-07-20, que é outra dor — inadimplência, não conciliação). Deixa muito claro o "economiza tempo e dinheiro": digitar extrato bancário linha por linha é uma das tarefas mais repetitivas e propensas a erro de um escritório de contabilidade, e a automação elimina exatamente essa dor.

### Fonte real (citável)

- https://ajuda.nibo.com.br/pt-BR/articles/11648734-leitura-de-extrato-bancario-em-pdf-com-ia (central de ajuda oficial do Nibo — artefato: documentação com o passo a passo exato da funcionalidade)
- Contexto de dor validado por: https://bfinance.com.br/blog/conciliacao-bancaria-automatica-passo-a-passo-completo (fala do processo geral de conciliação automática e do ganho de tempo — usado só como contexto de dor do setor, não como fonte da técnica escolhida)

### Passo a passo extraído (fiel à fonte, sem invenção)

1. No Nibo Empresa, acessa "Gestão de caixa" > "Contas e extratos".
2. Seleciona a conta bancária e o período, clica em "Conciliar extrato" e depois em "Importar arquivo".
3. Escolhe o arquivo do extrato em PDF (também aceita OFX ou planilha). PDF com senha não funciona — precisa gerar uma versão sem senha antes.
4. A IA lê o PDF sozinha e reconhece automaticamente data, valor e descrição de cada lançamento, já sugerindo a categoria contábil de cada um.
5. Assim que a leitura termina, chega uma notificação e o extrato já está pronto pra conciliar, sem precisar digitar nada à mão.

### Tradução de jargão (pro dono do escritório, não pro dev)

Em vez de alguém do escritório abrir o extrato em PDF do banco e digitar linha por linha no sistema (o trabalho mais chato e mais sujeito a erro de digitação do mês), o próprio sistema de contabilidade lê o PDF sozinho, entende os lançamentos e já sugere onde cada um se encaixa. Sobra só revisar, não datilografar.

### Artefato/print candidato

Não há print disponível nesta execução (WebFetch bloqueado impediu capturar screenshot da tela do Nibo). A skill de imagem roda em modo YOLO sem imagem por passo, conforme previsto no seu próprio SKILL.md para disparo por rotina automática.

### CTA sugerido

Convite a olhar pra essa tarefa específica (conciliação bancária manual) como candidata a automação — sem CTA fixo obrigatório, deixando a Opus como quem enxerga esse tipo de processo escondido.

### Slug

`2026-08-04-conciliacao-bancaria-ia-contabilidade`

## Candidatos descartados (rastreabilidade)

- **Agente de IA no WhatsApp com n8n** (dev.to, YouTube, n8n.io templates) — passo a passo real e forte, mas setor/técnica (WhatsApp + atendimento automático) já foi coberto pelo menos 3x em 2026-07-20 (clínica x2, cobrança x1). Descartado por risco de repetição, não por falta de qualidade.
- **Transcrição de consulta médica vira prontuário automático (Voxmed/ChatGPT)** — bom ângulo pra clínica, mas WebFetch bloqueado impediu confirmar o passo a passo técnico direto na fonte (tabnews.com.br, 403); ficou só com resumo de produto, não passo a passo replicável verificado. Descartado por não bater com a hard rule 2 (passo a passo real confirmado na fonte).
- **Reddit-to-video / repurposing de conteúdo pra criadores** — setor (pequenos produtores de conteúdo) ainda não coberto, mas as fontes encontradas foram majoritariamente produtos pagos (Gumroad) sem tutorial gratuito e replicável de uma fonte primária confiável — descartado pela hard rule 3 (evitar fonte fraca/comercial sem passo a passo verificável).
