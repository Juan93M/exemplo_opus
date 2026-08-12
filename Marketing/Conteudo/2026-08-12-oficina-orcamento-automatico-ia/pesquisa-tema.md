# Pesquisa de tema — 2026-08-12

Execução automática (rotina `pesquisa-tutorial-carrossel`, modo YOLO). `WebFetch` retornou `EGRESS_BLOCKED` para todos os domínios tentados nesta sessão (hn.algolia.com, old.reddit.com, robertodiasduarte.com.br) — todas as fontes abaixo foram coletadas via `WebSearch` (resultados + resumos das páginas), sem invenção de dado.

## Tema escolhido

**Bucket:** Educativo / Tutorial
**Setor-alvo:** oficinas mecânicas pequenas (PME de serviço — o mecanismo de "responder pedido de orçamento automaticamente, mas travar antes de fechar sozinho" generaliza pra qualquer negócio de serviço que hoje monta orçamento na mão: consultório odontológico com plano de tratamento, clínica de estética, prestador que cobra por projeto)
**Título/ângulo:** o cliente manda a mesma pergunta de orçamento pro WhatsApp de três oficinas ao mesmo tempo — "quanto custa consertar isso?" — e quem responde primeiro com um orçamento que parece profissional geralmente fecha o serviço, mesmo sendo mais caro. A automação: um agente de IA no WhatsApp recebe modelo, ano e sintoma do carro, cruza com a tabela de preço própria da oficina, monta um pré-orçamento formatado (peças, mão de obra, prazo, garantia, forma de pagamento) e nunca fecha o valor sozinho — tudo que precisa de inspeção visual ou negociação vai pro mecânico confirmar antes do cliente receber o número final.

**Slug:** `2026-08-12-oficina-orcamento-automatico-ia`

## Por que esse tema (critério de escolha)

- Nenhum tema sobre oficina mecânica apareceu no histórico dos últimos 14 dias (`historico-temas.md`). Setores recentes (contabilidade x4, advocacia x3, clínica médica/odonto x2, produtor de conteúdo x2, imobiliária, salão/barbearia, academia) usaram todos técnicas diferentes — este é o primeiro tema ancorado em "orçamento sob demanda" como o gargalo do processo.
- Mecanismo tem detalhe concreto e replicável, coletado de múltiplas fontes convergentes: fluxo de coleta de dado (modelo/ano/sintoma) → cruzamento com tabela de preço própria → pré-orçamento formatado → trava humana antes de fechar. Não é "a IA vai revolucionar a oficina", é um passo a passo verificável.
- Ângulo é 100% aplicável sem time técnico — o dono contrata quem monta o fluxo (gancho natural pra oferecer o serviço da Opus), não precisa programar nada.
- Ensina algo replicável fora do nicho: a lógica de "responder rápido com algo formatado, mas travar antes de fechar sozinho o que exige julgamento humano" vale pra qualquer PME de serviço que hoje monta orçamento na mão — puxa a ponte pro público mais amplo da rotina (odonto, estética, prestadores em geral) sem inventar um segundo caso.
- Custo de implantação citado é concreto e checável (R$150-300/mês de operação, R$2.000-4.000 de implantação), o que ajuda a mostrar "cabe no caixa de um negócio pequeno" sem número genérico de mercado.

## Fontes reais coletadas (URLs citáveis)

1. **https://eupresa.ia.br/blog/ia-para-mecanicos-2026/** — descreve o fluxo completo: agente de IA no WhatsApp coleta modelo, ano e sintoma do veículo, cria um pré-orçamento com base na tabela de preço própria da oficina e envia pro mecânico validar antes de confirmar o valor com o cliente; orçamento final sai formatado com descrição do serviço, peças, mão de obra, prazo, garantia e formas de pagamento (PDF ou direto no WhatsApp); trava explícita: "a IA nunca fecha um orçamento sozinha — tudo que exige inspeção visual, diagnóstico incerto ou negociação de preço vai pra um humano confirmar antes do cliente receber o número final".
2. **https://oficinabot.com.br/** — produto real de mercado (BotBrasil) para oficinas: agente de IA no WhatsApp que envia orçamento, lembra cliente de revisão, agenda serviço e faz follow-up pós-atendimento, tudo organizado num CRM que acompanha histórico de cada veículo/cliente; descrito como "entende intenção, consulta agenda/histórico/regras do negócio e executa a próxima ação" (não é menu fixo de chatbot).
3. **Busca de contexto (custo/implantação):** artigos convergentes sobre automação de orçamento em oficina apontam custo de operação entre R$150 e R$300/mês e implantação entre R$2.000 e R$4.000 quando feita por um profissional — faixa de investimento compatível com "cabe no caixa de uma oficina de bairro".
4. **https://blog.expertintegrado.com.br/blog/ia-oficinas-autopecas-orcamento** (título indexado: "IA para oficinas e autopeças: orçamento por foto e retorno de revisão") — reforça que o mesmo mecanismo já é oferecido também com orçamento a partir de foto do problema, e com lembrete automático de revisão futura pós-serviço.

## Lacunas / honestidade

- Não foi encontrado relato individual em primeira pessoa (post de Reddit/fórum "implementei isso na minha oficina e o resultado foi X") — as fontes são conteúdo de produto/blog de empresas do nicho (Eupresa IA, OficinaBot, Expert Integrado), tratadas no carrossel como descrição de mecanismo de mercado, não como estatística acadêmica.
- Não há print de tela real disponível/verificável nesta sessão (WebFetch bloqueado em todos os domínios tentados). Carrossel roda em modo YOLO sem imagem por passo, conforme regra da skill `carrossel-imagens-tema-tutorial` em modo automático — mesma limitação já registrada em rodadas anteriores.

## CTA / objetivo sugerido (já traduzido pro dono de negócio)

Se seu negócio ainda monta orçamento na mão toda vez que um cliente pergunta "quanto custa" — oficina, consultório, prestador de serviço — esse mesmo tipo de agente de resposta automática com trava humana antes de fechar valor é exatamente o tipo de automação que a Opus monta sob medida.
