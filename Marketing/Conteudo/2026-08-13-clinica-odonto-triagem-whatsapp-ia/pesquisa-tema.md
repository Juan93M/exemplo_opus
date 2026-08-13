# Pesquisa de tema — 2026-08-13

Execução automática (rotina `pesquisa-tutorial-carrossel`, modo YOLO). `WebFetch` retornou `EGRESS_BLOCKED` para todos os domínios tentados nesta sessão (hn.algolia.com, blog.odontoresults.com.br, www.horadecodar.com.br) — todas as fontes abaixo foram coletadas via `WebSearch` (resultados + resumos/snippets das páginas), sem invenção de dado.

## Tema escolhido

**Bucket:** Educativo / Tutorial (com caso real de mercado como âncora)
**Setor-alvo:** clínicas e consultórios odontológicos (mecanismo generaliza pra qualquer clínica/consultório — médico, odonto, estética — que depende de alguém disponível pra responder o primeiro contato do paciente)
**Título/ângulo:** o paciente manda a primeira mensagem no WhatsApp da clínica — muitas vezes fora do horário comercial, à noite ou no fim de semana — e se ninguém responde rápido, ele simplesmente manda a mesma pergunta pra próxima clínica da lista. A automação: um agente de IA no WhatsApp responde em segundos (a qualquer hora), faz a triagem (motivo da consulta, particular ou convênio, nível de urgência), consulta a agenda real da clínica e já oferece horários compatíveis, convertendo o desconhecido em paciente agendado sem ninguém da equipe precisar estar online. Só escala pra um humano quando o caso foge do script — emergência clínica, indecisão, negociação de valor. É a etapa de entrada do funil (antes de existir qualquer agendamento), diferente da confirmação de consulta já marcada (tema de 2026-08-05, que atua sobre agenda existente) e da transcrição do atendimento em consultório (tema de 2026-08-07, que atua durante a consulta).

**Slug:** `2026-08-13-clinica-odonto-triagem-whatsapp-ia`

## Por que esse tema (critério de escolha)

- Clínica médica/odonto tinha 2 temas nos últimos 14 dias (08-05 confirmação, 08-07 prontuário por voz) — mais "descansado" que advocacia (3) e contabilidade (4), mas ainda assim testado contra alternativas de setor com zero ou 1 hit antes de fechar.
- Produtor de conteúdo (1 hit em 14 dias, o setor teoricamente mais "livre") foi pesquisado primeiro (múltiplas queries em PT-BR e EN sobre automação/repurposing/proposta comercial pra criador solo) e não retornou nenhum caso real com número concreto ou mecanismo replicável nesta sessão — só listicles de ferramenta ("12 automações essenciais pra Reels/TikTok", "5 integrações do Claude") sem fonte de caso individual. Descartado por falta de fonte, não por saturação.
- O tema escolhido tem caso real citável com números (ver fontes abaixo) e mecanismo técnico detalhado e replicável (triagem por regra/IA + handoff condicional pra humano), preenchendo os dois requisitos que o candidato de produtor de conteúdo não preenchia.
- O ângulo cobre um estágio do funil de atendimento clinicamente distinto dos dois temas de clínica já publicados: entrada/primeiro contato (sem agendamento ainda existente) vs. confirmação de agendamento existente (08-05) vs. documentação durante a consulta (08-07) — três mecanismos técnicos diferentes, três problemas de rotina diferentes, mesmo setor.
- Ensina algo aplicável sem time técnico: o dono da clínica não precisa programar nada, só reconhecer o padrão (perder paciente por demora) e contratar quem monta o agente — gancho natural pro serviço da Opus, sem precisar virar CTA fixo.

## Fontes reais coletadas (URLs citáveis)

1. **https://blog.odontoresults.com.br/post/como-automatizar-atendimento-de-clinica-odontologica** — "Roteiro Real" de automação de atendimento em clínica odontológica; segundo o snippet indexado, o método (chamado pela empresa de "Método Paciente Previsível") levou clínicas de "backlog de leads" a "agenda cheia" em menos de 2 meses, com um caso citando 139 atendimentos automatizados em 30 dias, tempo médio de resposta de 4 segundos no WhatsApp e redução de 29% no no-show. O texto do próprio blog reforça que a automação não substitui a equipe, e sim tira da equipe humana a obrigação de estar sempre online pra não perder o primeiro contato.
2. **Snippet relacionado, mesmo domínio (busca complementar)** — descreve o "Agendamento Estruturado" do método como "time de relacionamento com CRC (Coordenador de Relacionamento com Cliente) profissional + IA", parte de um funil que junta captação, atendimento (humano + IA respondendo em 4 segundos no WhatsApp), CRM e análise de métricas, citando até 58% a mais de conversão em agendamento do que formulário tradicional.
3. **https://www.horadecodar.com.br/agente-atendimento-whatsapp-n8n-faq-triagem-handoff/** — tutorial técnico (n8n) do mecanismo genérico usado no ângulo: fluxo de atendimento 24/7 no WhatsApp que (a) resolve dúvidas recorrentes via FAQ inteligente, (b) aplica triagem automática pra identificar se a mensagem pode ser resolvida sozinha ou precisa ir pra um humano, e (c) sinaliza handoff pra alguém da equipe assumir quando necessário. É a peça técnica que explica "como" o resultado do caso odontológico (resposta em 4s, sem perder o time todo grudado no celular) é possível de construir.
4. **https://horadecodar.com.br/fluxos-atendimento-automatizados-n8n-clinicas/** — reforça o mesmo padrão aplicado especificamente a clínicas: recepção digital via n8n cobrindo triagem de mensagem por palavra-chave/urgência, acompanhamento de agendamento e resposta automática por WhatsApp/e-mail, com o objetivo declarado de reduzir tarefa repetitiva/burocrática da recepção.

## Lacunas / honestidade

- Os números do caso odontológico (139 agendamentos, resposta em 4s, 29% de redução de no-show, 58% mais conversão) vêm do blog da própria empresa que vende o serviço (Odonto Results) — tratados no carrossel como número de caso divulgado pela empresa, não como estatística independente/acadêmica. Mesmo padrão de tratamento já usado em rodadas anteriores pra fontes de fornecedor (ex.: Nibo, Structura, Eupresa IA, OficinaBot).
- `WebFetch` foi tentado nos três domínios principais (blog.odontoresults.com.br, www.horadecodar.com.br, hn.algolia.com) e retornou `EGRESS_BLOCKED` nos três — todo o conteúdo acima vem de snippets/resumos do `WebSearch`, sem ler a página completa. Não foi possível confirmar o texto exato do "5º momento estratégico" do método nem citar trecho literal do artigo; o resumo acima reflete o que os snippets indexados trouxeram, sem completar lacuna com suposição.
- Não há print de tela real disponível/verificável nesta sessão. Carrossel roda em modo YOLO sem imagem por passo, conforme regra da skill `carrossel-imagens-tema-tutorial` em modo automático.

## CTA / objetivo sugerido (já traduzido pro dono de negócio)

Se sua clínica ainda depende de alguém da recepção estar online pra responder o primeiro "oi, vocês atendem tal coisa?" — e perde paciente pra quem respondeu primeiro fora do horário comercial —, um agente que faz a triagem e já oferece horário compatível, só chamando um humano quando o caso realmente exige, é o tipo de automação que a Opus monta sob medida.
