# Temas do dia — 2026-08-15

Execução automática (rotina `pesquisa-tutorial-carrossel`, modo YOLO). Dossiê completo em `Marketing/Conteudo/2026-08-15-cobranca-fatura-atrasada-agente-ia/pesquisa-tema.md`.

## Tema escolhido

- **Bucket:** Educativo / Tutorial (dados de mercado + caso real como âncora)
- **Título:** "Você manda a fatura, entrega o trabalho, e depois evita mandar a mensagem cobrando de novo porque parece chato insistir"
- **Ângulo:** agente de IA que acompanha cada fatura emitida por um pequeno negócio de serviço e, quando o prazo vence sem o pagamento cair, dispara sozinho uma régua de lembrete escalonada (cordial no primeiro atraso, mais firme depois, aviso final antes de qualquer coisa mais séria), sem a pessoa dona do negócio precisar lembrar de mandar nada nem se sentir a chata cobrando.
- **Fonte:** https://dev.to/fracabu/i-built-a-squad-of-ai-agents-to-chase-invoices-for-me-ojm + https://www.pymnts.com/artificial-intelligence-2/2025/ai-agents-chase-invoices-faster-than-finance-teams-can-dial/ + https://york.ie/blog/build-an-automated-unpaid-invoice-reminder-in-n8n/ + https://thefuturai.substack.com/p/ai-invoice-automation-reduce-late-payments
- **Artefato candidato:** nenhum print real disponível nesta sessão (`WebFetch` retornou `EGRESS_BLOCKED` em todos os domínios tentados); números (86h/ano cobrando dívida, 37% com problema de caixa, caso HVAC de 45 pra 12 dias) e mecanismo de régua escalonada compensam a ausência de imagem.
- **Setor-alvo:** pequenos negócios de serviço que emitem cobrança pro próprio cliente por trabalho já entregue (consultoria, honorário avulso de advocacia/contabilidade, plano particular de clínica, job avulso de produtor de conteúdo) — mecanismo generalizável, nunca coberto na janela de 14 dias.
- **CTA sugerido:** se sua fatura já passou do prazo e você fica adiando mandar a mensagem de novo porque parece chato insistir, esse tipo de régua de cobrança automática é o tipo de automação que a Opus monta sob medida.
- **Slug:** `2026-08-15-cobranca-fatura-atrasada-agente-ia`

## Por que esse tema

Contabilidade, advocacia e clínicas/odonto já tinham 3 temas cada nos últimos 14 dias — saturados como âncora setorial principal. O tema de hoje não depende de nenhum setor "descansado": é uma técnica (rastreio de fatura emitida + régua de lembrete automática quando o cliente não paga) que nunca apareceu no histórico, mesmo tangenciando "cobrança" (08-09, mas ali era o contador cobrando *documento* do cliente, não cobrando *pagamento*) e "financeiro" (08-14, mas ali era o criador recebendo *de uma marca* por parceria, não emitindo fatura própria a cliente comum). A fonte central (relato pessoal no dev.to) trouxe um comportamento específico e verificável — o desconforto de mandar a segunda cobrança — em vez de estatística genérica sem caso.

## Candidatos descartados

- **Veterinária/pet shop — confirmação automática de agendamento via WhatsApp.** Fonte real e com número forte (faltas caindo de 35% pra <10%), mas mecanismo quase idêntico ao já publicado em 2026-08-05 e 2026-08-13 (clínica/odonto). Descartado por repetição de técnica, não de setor.
- **Restaurante/delivery — atendimento automático de pedido via WhatsApp.** Fontes reais fartas (Brendi, Anota Aí, Goomer), mas fora do público-alvo fixo da rotina e mecanismo próximo do já coberto em triagem de entrada (2026-08-13).
- **Cobrança de avaliação/review automática (salão, clínica de estética).** Só blog de ferramenta comercial, sem caso nomeado nem número verificável de forma independente — fonte fraca demais.
