# Temas do dia — 2026-08-04 (pesquisa-tutorial-carrossel, modo YOLO)

## Contexto do run

- Ledger sincronizado com as pastas reais em `Marketing/Conteudo/` (últimos 14 dias + backfill de órfãs mais antigas). Ver `historico-temas.md` da skill, atualizado nesta execução.
- Janela de dedup (14 dias antes de 2026-08-04, ou seja 2026-07-21 a 2026-08-04): só existe 1 tema no período — **2026-07-29, "Grave sua tela, deixe a IA repetir a tarefa" (Screenpipe)**, setor produtores de conteúdo/consultores. Tema e setor de hoje precisam ser diferentes disso.
- Nota de ambiente: `WebFetch` retornou 403 em todas as tentativas nesta execução (Reddit JSON, HN Algolia API, blogs individuais) — inclusive em domínios neutros de teste. A pesquisa foi feita 100% via `WebSearch`, que segue retornando snippets com URLs reais e citáveis. Nenhum dado foi inventado; onde a leitura direta da página falhou, ficou registrado como lacuna.

## Candidatos avaliados

1. **Automação de notas fiscais com n8n + OCR + IA (contabilidade)** — ✅ escolhido. Passo a passo real e nomeado, publicado em blog técnico brasileiro de referência no setor contábil.
2. Chatbot de WhatsApp com IA pra clínica/consultório (agendamento) — descartado. As fontes encontradas (SocialHub, Halk, Sleekflow, empreenderideias) são páginas de vendor/marketing com números de case ("Clínica Mais Vida", "Clínica Lucas Miranda") não verificáveis de forma independente — risco de dado não confiável, sem passo a passo técnico replicável, só promessa de resultado. Fere a hard rule "nunca inventar/nunca aceitar número não verificável".
3. Automação de intake para escritório de advocacia com agente de IA — descartado. Fontes (Voiceflow, Dialzara, MyCase, Lawmatics, US Tech Automations) são todas páginas de venda de produto próprio ("compre nossa ferramenta"), sem um passo a passo replicável fora da plataforma do vendor — não atende ao critério "dá pra replicar sem depender de comprar exatamente aquele SaaS".
4. Buscas em r/automation, r/smallbusiness, r/n8n e Hacker News (Algolia API) — sem retorno: `WebFetch` bloqueado (403) em todas as tentativas, inclusive `old.reddit.com`, `www.reddit.com` e `hn.algolia.com`. `WebSearch` também não trouxe posts individuais de Reddit citáveis para o público-alvo nesta consulta. Lacuna registrada — não foi possível confirmar um caso específico do Reddit/HN hoje; o tema escolhido veio de blogs técnicos com posts datados e nomeados.

## Tema escolhido

**Nome da técnica:** Robô que lê a nota fiscal recebida por e-mail e já sugere o lançamento contábil (n8n + OCR + IA)

**Ângulo:** Todo escritório de contabilidade recebe nota fiscal e boleto por e-mail o dia inteiro, e alguém do time perde horas baixando anexo, lendo o PDF e digitando os dados no sistema. Dá pra montar um fluxo automático — sem escrever código — que faz isso sozinho e só chama um humano quando algo foge do padrão. É o tipo de automação que qualquer prestador de automação (ex.: Opus) monta pra um escritório em poucos dias, sem exigir equipe técnica interna.

**Setor-alvo:** escritórios de contabilidade (setor não tocado nos últimos 14 dias).

**Passo a passo extraído das fontes:**
1. Gatilho: caixa de e-mail do escritório é monitorada automaticamente pelo n8n; quando chega uma mensagem com nota fiscal/boleto em PDF ou imagem anexada, o fluxo dispara sozinho.
2. O n8n baixa o anexo automaticamente, sem intervenção manual.
3. Um nó de OCR (opções citadas nas fontes: Google Vision API, AWS Textract, Azure OCR, ou a alternativa gratuita/open-source Tesseract) lê o documento e extrai o texto bruto do PDF ou imagem.
4. Um modelo de IA (ex. GPT da OpenAI, conectado via nó HTTP Request) interpreta esse texto e organiza os campos que importam: CNPJ, valor, data, natureza da operação.
5. A IA classifica a natureza da operação e sugere o lançamento contábil, comparando com o histórico do cliente.
6. O fluxo faz uma limpeza dos dados (remove caracteres especiais, espaços em excesso) e valida os campos críticos antes de seguir.
7. O resultado é gravado automaticamente numa planilha (Google Sheets) ou direto no sistema/ERP do escritório; se alguma nota fugir do padrão esperado, o fluxo sinaliza para revisão humana em vez de lançar errado.
8. Tudo isso é montado no editor visual do n8n, sem precisar escrever código — o time de contabilidade não precisa ter um programador interno pra manter o fluxo.

**Fontes reais (URLs citáveis):**
- https://horadecodar.com.br/automacao-n8n-contabilidade-boletos-nfs-emails-crm/
- https://www.horadecodar.com.br/automacoes-n8n-contabilidade-exemplos/
- https://horadecodar.com.br/integracoes-n8n-ocr-ia-2026/
- https://horadecodar.com.br/automatizar-extracao-dados-pdfs-imagens-n8n-ocr-ia-2026/
- https://www.robertodiasduarte.com.br/agentes-de-ia-no-n8n-e-make-automacao-contabil-inteligente/
- https://www.robertodiasduarte.com.br/n8n-e-conta-azul-agentes-de-ia-na-automacao-contabil/

Roberto Dias Duarte é referência pública no setor contábil brasileiro (autor de livros e conteúdo sobre transformação digital em contabilidade); horadecodar.com.br é um blog técnico BR com posts datados e nomeados especificamente sobre esse fluxo n8n + OCR + IA em 2026 — ambos citáveis e coerentes entre si sobre o mesmo padrão de automação.

**Artefato/print candidato:** nenhum print específico foi coletado nesta execução (`WebFetch` bloqueado impediu abrir as páginas para capturar tela real; as fontes são posts de blog técnico, não uma thread/imagem única). Registrado como lacuna. Isso é compatível com o modo YOLO da skill `carrossel-imagens-tema-tutorial`, que roda sem imagem por passo quando disparada por rotina automática.

**CTA sugerido:** deixar claro que esse tipo de fluxo é montável em poucos dias por quem presta automação para escritórios de contabilidade (ex.: Opus), sem precisar contratar um time técnico interno — sem transformar isso em CTA fixo ou menção obrigatória no roteiro.

**Slug:** `2026-08-04-nota-fiscal-automatica-n8n-contabilidade`
