# Dossiê — pesquisa-tutorial-carrossel — 2026-08-14

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citada na tarefa (nenhuma ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch` nativos, GitHub MCP e ferramentas locais). Mesma adaptação já usada em execuções anteriores: repositório git (`Marketing/Conteudo/`) como fonte de verdade de conteúdo já publicado, dossiê gravado dentro da própria pasta do carrossel do dia.

`WebFetch` retornou `EGRESS_BLOCKED` em toda tentativa de abrir página-fonte diretamente nesta sessão (`hn.algolia.com`, `old.reddit.com`, `knowlix.ai`, `viasocket.com` — mesma limitação já registrada em execuções anteriores). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo da página. Isso é lacuna registrada, não invenção.

## Sincronização do dedup

`git fetch origin main` rodado antes da escolha do tema; branch local em paridade com `origin/main` (HEAD em `41f77bc`). Pastas em `Marketing/Conteudo/` (últimos 14 dias, desde 2026-07-31) e o ledger `historico-temas.md` conferem entre si — sem pasta órfã pra backfill.

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
- 2026-08-09 — contabilidade — portal automático de cobrança de documentos do cliente
- 2026-08-10 — advocacia — resumo automático de processo judicial com IA
- 2026-08-11 — academias/estúdios (PME de serviço) — alerta automático de risco de cancelamento
- 2026-08-12 — oficinas mecânicas (PME de serviço) — orçamento automático via WhatsApp
- 2026-08-13 — clínicas/consultórios odontológicos — triagem automática de entrada no WhatsApp

Contabilidade (3x), advocacia (3x) e clínicas/odonto (3x) são os setores mais saturados na janela de 14 dias. Produtores de conteúdo só apareceu uma vez, há 6 dias, e com uma técnica totalmente diferente (repurposing de texto pra redes sociais, um problema de *produção* de conteúdo). Nenhum outro setor do público-alvo fixo desta tarefa está tão pouco tocado quanto esse — e a fonte de hoje aponta pra um problema de *gestão financeira* da parceria, não de produção, o que garante técnica distinta mesmo dentro do mesmo setor.

## Tema escolhido

**Técnica:** Rastreamento automático de parceria com marca (brand deal) do primeiro contato até o pagamento — uma automação com IA lê o e-mail/mensagem de negociação, extrai valor e prazo automaticamente, atualiza sozinha o status da parceria (proposta → contrato → entrega → nota fiscal → pago) e avisa quando um deal trava sem resposta ou uma fatura fica sem pagamento por tempo demais.

**Setor-alvo:** Pequenos produtores de conteúdo / criadores solo que fecham parceria paga com marca (publieditorial, publiposts, permuta com valor).

**Ângulo / comportamento específico (não é molde genérico):** a fonte real (reportagem da Campaign US, citando levantamento Tipalti + Wakefield Research) mostra que até 87% dos criadores já foram pagos com atraso, valor errado ou não foram pagos — muitas vezes esperando de 60 a 180 dias por um dinheiro que já era deles. A causa citada não é má-fé da marca na maioria dos casos: é o rastro se perdendo — nota fiscal com nome de empresa diferente do contrato, número de pedido faltando, e-mail que o gestor da marca esqueceu de encaminhar pro financeiro. Do lado do criador, o comportamento espelhado é o mesmo: fechar a parceria numa troca de DM/e-mail e depois perder o controle de quem já pagou, quem ainda deve e qual prazo já venceu, porque tudo fica espalhado entre inbox, WhatsApp e uma planilha que não é atualizada. É esse comportamento — perder o controle financeiro da própria parceria já fechada, não "esquecer de cobrar" de forma genérica — que ancora a frase de público-alvo do carrossel, e não uma fórmula de "criador autônomo, negócio pequeno, time enxuto".

## Fontes reais (citáveis)

- https://www.campaignlive.com/article/inside-creator-economys-late-payment-crisis/1930374 — reportagem da Campaign US: até 87% dos criadores pesquisados já foram pagos com atraso ou tiveram problema no pagamento, muitos esperando de 60 a 180 dias por dinheiro já ganho; aponta causa raiz em sistemas de pagamento corporativos desatualizados, múltiplas camadas de aprovação interna da marca e políticas de "só pago quando o cliente final pagar" que empurram o risco financeiro pra baixo da cadeia — até chegar no criador.
- https://www.campaignlive.com/article/new-campaign-report-reveals-why-creators-arent-getting-paid-time/1930824 — reportagem complementar da mesma apuração, mesma janela de dados (survey Tipalti/Wakefield Research), reforçando o problema de infraestrutura de pagamento no mercado de criadores.
- https://viasocket.com/discovery/blog/zio1xn/creator-economy-software/7-best-brand-deal-tracking-tools-for-creators — artigo cataloga ferramentas reais de automação que resolvem exatamente esse problema: conectam formulário, e-mail, planilha e sistema de cobrança, com lembretes automáticos quando um pagamento atrasa (ex.: viaSocket, automação orientada a fluxo, sem precisar programar).
- https://knowlix.ai/blog/brand-deal-management-without-a-spreadsheet — descreve o mecanismo de uma plataforma real onde orçamento, contrato, tarefa de produção, fatura e prazo de pagamento ficam amarrados no mesmo registro da parceria, em vez de espalhados em abas e conversas separadas — é a mesma lógica de automação (n8n + IA) que dá pra montar sob medida, sem depender de assinar mais um software fechado.
- https://www.agentui.ai/en/brand-partnership-dashboard/ — outro exemplo real do mecanismo: painel que acompanha a marca do primeiro contato até o pagamento, com estágios visuais, temporizador de prazo (SLA) e repasse automático de tarefa — a IA gera modelo de mensagem de cobrança, registra cada contato e agenda o lembrete sozinha.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas fontes convergentes já sintetizaram, sem invenção de número ou detalhe técnico além do que foi retornado.)

## Passo a passo extraído (traduzido pro criador, sem jargão técnico)

1. Cada vez que uma marca te chama pra parceria — por e-mail ou DM — você só encaminha (ou a automação já lê direto da caixa de entrada) a conversa pra um único lugar combinado, em vez de deixar espalhado entre WhatsApp, e-mail e memória.
2. Uma automação (montada com n8n, sem precisar de programador) lê essa mensagem, identifica os dados que importam — nome da marca, valor combinado, prazo de entrega, prazo de pagamento — e cria sozinha um registro daquela parceria, já classificado como "em negociação".
3. Conforme a parceria avança — contrato assinado, conteúdo entregue, nota fiscal enviada — o status muda sozinho (ou com um clique seu), sempre no mesmo painel, sem você ter que lembrar em qual etapa cada marca está.
4. Se uma marca não responde a proposta depois de alguns dias, ou se uma fatura já enviada passa do prazo combinado sem o pagamento cair, a automação avisa sozinha — pelo WhatsApp ou e-mail — que aquele deal travou, com o modelo de mensagem de cobrança já pronto pra você só revisar e mandar.
5. No fim do mês, em vez de vasculhar e-mail e extrato pra saber quem te deve, o painel já mostra: quem pagou, quem está no prazo e quem já passou do combinado.

**Resultado esperado:** o criador para de descobrir que uma marca "esqueceu" de pagar só quando fecha a conta no fim do ano — o sistema cobra no momento certo, antes do prazo virar meses de atraso.

## Artefato candidato

Não há print próprio coletado (mesma limitação de `WebFetch` impediu abrir as páginas-fonte e capturar tela real de algum painel). As fontes descrevem o mecanismo (estágios do funil, gatilho de lembrete, geração de mensagem de cobrança) com detalhe suficiente pra servir de referência textual pra quem for montar a arte, mesmo sem captura de tela própria. Carrossel gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo.

## Candidatos descartados

- **Contabilidade / advocacia / clínicas (qualquer novo fluxo).** Os três setores já têm 3 temas cada nos últimos 14 dias — descartados por saturação, mesmo com fontes reais disponíveis (ex.: reconciliação de fatura com IA pra escritório contábil, achado nesta pesquisa mas descartado por repetir de perto a técnica de conciliação bancária já publicada em 2026-08-04).
- **PME de serviço genérica (veterinária/pet shop).** Fonte real existe (Otto "Agentic Confirmations", Appy Pie Agents), mas a técnica (confirmação automática de agendamento em duas vias) é muito próxima da já publicada em 2026-08-05 (clínica) e 2026-08-13 (odonto) — mesmo mecanismo, setor adjacente, sem ângulo novo o bastante.
- **Automação de cortes/clipes de vídeo com IA pra criador.** Técnica real e bem documentada, mas a maioria das fontes fortes é sobre ferramentas de produto fechado (ex.: Opus Clip) — risco de confusão de marca com "Opus Automações" no mesmo carrossel, mesmo motivo já registrado no dossiê de 2026-08-08.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico citado na fonte — perder o controle de quem já pagou e quem ainda deve depois que a parceria foi fechada numa troca solta de DM/e-mail — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-14-produtor-conteudo-brand-deal-tracker-ia`, seguido de `carrossel-imagens-tema-tutorial` (YOLO).
