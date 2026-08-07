# Dossiê — pesquisa-tutorial-carrossel — 2026-08-07

## Nota sobre ambiente e ferramentas desta execução

Rodou em Claude Code on the web (Linux), sem acesso aos caminhos Windows (`C:\Users\juanp\Desktop\ideias_carrossel\...`) nem à pasta do Google Drive citada na tarefa (nenhuma ferramenta de acesso a Drive disponível nesta sessão — só `WebSearch`/`WebFetch` nativos, GitHub MCP e ferramentas locais). Adaptação: repositório git (`Marketing/Conteudo/`) usado como fonte de verdade de conteúdo já publicado, mais confiável que o ledger sozinho, e dossiê gravado dentro da própria pasta do carrossel do dia — mesmo padrão já usado em `2026-08-05-clinica-confirmacao-consulta-n8n/` e `2026-08-06-advocacia-contrato-automatico-n8n/`.

`WebFetch` retornou `EGRESS_BLOCKED` em todas as tentativas de abrir páginas-fonte diretamente nesta sessão (mesma limitação já registrada em 2026-08-04/05/06). A pesquisa usou só `WebSearch`, que sintetiza conteúdo real a partir de URLs citáveis, sem abrir o texto completo da página. Isso é lacuna registrada, não invenção: o passo a passo abaixo é a tradução do que o `WebSearch` já sintetizou de várias fontes reais convergentes (incluindo uma central de suporte com passo a passo literal, ver abaixo).

## Sincronização do dedup

`git fetch origin main && git pull` rodado antes da escolha do tema; branch local em paridade com `origin/main` (HEAD em `1562c5e`). Pastas em `Marketing/Conteudo/` (últimos 14 dias, desde 2026-07-24) e o ledger `historico-temas.md` já conferem entre si — sem pasta órfã pra backfill.

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

Contabilidade (3x) e advocacia (2x) são os setores mais saturados na janela — descartados hoje mesmo com fontes boas disponíveis. Clínicas tem 1 entrada, mas é um fluxo de **recepção/agenda** (confirmação de consulta via WhatsApp); o candidato de hoje é um fluxo de **consultório/atendimento clínico** (prontuário durante a consulta) — técnica claramente diferente, não uma variação do mesmo fluxo, então passa no dedup por técnica. Produtores de conteúdo só apareceu uma vez há 9 dias, mas a pesquisa de hoje ("repurposing de conteúdo com IA") não teve nenhuma fonte com técnica nomeada e passo a passo concreto — só recomendações genéricas ("use uma ferramenta de IA", "adapte pro tom da marca") sem comando/config específico, então foi descartada pelo filtro de qualidade (ver candidatos descartados).

## Tema escolhido

**Técnica:** Prontuário por voz com IA — durante a consulta, o profissional liga a captura de áudio dentro do próprio prontuário eletrônico (ou de um app complementar), atende normalmente sem parar pra digitar, e ao final a IA já entrega a anamnese/evolução organizada nos campos certos, prontas pra revisão.

**Setor-alvo:** Clínicas e consultórios médicos/odontológicos (público-alvo explícito da rotina) — funcionalidade nativa em sistemas de prontuário eletrônico já usados por consultórios pequenos (não exige contratar time técnico nem trocar de sistema).

**Ângulo / comportamento específico (não é molde genérico):** a fonte de pesquisa aponta um comportamento concreto e reconhecido na rotina clínica — durante a consulta, o profissional divide a atenção entre olhar pro paciente e digitar no prontuário, e o que não dá tempo de registrar na hora vira "prontuário atrasado" pra terminar depois do expediente. As fontes convergem numa métrica de tempo perdido nisso (uma cita até 38h/mês em registro clínico e mais de 80% do tempo gasto digitando, outra cita até 70% do tempo de documentação): esse tempo — e a atenção tirada do paciente durante a consulta — é o comportamento que ancora a frase de público-alvo do carrossel, não uma fórmula de "médico autônomo, consultório pequeno, time enxuto".

## Fontes reais (citáveis)

- https://suporte.iclinic.com.br/pt-br/como-utilizar-o-prontu%C3%A1rio-por-voz-no-afya-iclinic — central de suporte do Afya iClinic (sistema de prontuário eletrônico amplamente usado por consultórios pequenos no Brasil): passo a passo literal, numerado, com nome de botão/tela ("Prontuário por voz" → aceitar termos → "Iniciar Atendimento" → "Capturar áudio" → permitir microfone → conduzir a consulta → "Finalizar captura" → abas "Resumo do atendimento" e "Transcrição" → "Copiar tudo" pro prontuário definitivo).
- https://blog.voa.health/blog/novidades-voa-3/vantagens-ia-voa-para-medicos-48 — Voa Health (assistente de IA que ouve e documenta a consulta): descreve o fluxo (selecionar Anamnese IA ou Evolução IA → habilitar IA → gravar consulta com microfone ativo) e cita métrica de até 38h a menos por mês em registro clínico e mais de 80% de redução no tempo digitando.
- https://prodoctor.net/blog/como-usar-voa-prodoctor/ — passo a passo de integração da IA da Voa dentro do ProDoctor (outro sistema de prontuário usado por consultórios pequenos), reforçando que a técnica roda dentro do sistema que o consultório já usa.
- https://www.klinity.com/blog/prontuario-por-voz-funciona-em-portugues — confirma o mesmo padrão em outra ferramenta (Klinity), com estruturação automática dos campos do prontuário conforme o modelo do médico e revisão final obrigatória antes de salvar; cita economia de até 70% do tempo de documentação.
- https://www.amplimed.com.br/blog/transcricao-medica/ e https://www.gestaods.com.br/transcricao-automatica-por-inteligencia-artificial-no-prontuario/ — confirmam o mesmo fluxo (ativar microfone → IA distribui a fala nos campos certos → revisão e validação do profissional antes de salvar) em mais dois sistemas distintos, mostrando que não é recurso de uma única ferramenta isolada, e sim um padrão já disponível em várias plataformas de prontuário no mercado brasileiro.

(Coletadas via `WebSearch`; texto completo das páginas não pôde ser aberto nesta sessão — ver nota sobre `WebFetch` acima. O passo a passo abaixo é a tradução do que essas buscas já sintetizaram de fontes reais convergentes, sem invenção de detalhe técnico além do que foi retornado e sem estatística fora do que as fontes citaram.)

## Passo a passo extraído (traduzido pro dono/profissional do consultório, sem jargão técnico)

1. Antes da consulta, o profissional confere se o sistema de prontuário que o consultório já usa (ou um complemento de IA que se conecta a ele) tem a opção de "prontuário por voz" ou "assistente de IA" habilitada — geralmente já vem disponível, sem precisar contratar ninguém pra instalar nada.
2. No início do atendimento, abre a ficha do paciente, escolhe se é uma consulta nova ou um retorno, e ativa a captura de áudio (autoriza o microfone do computador/tablet uma única vez, quando o navegador pedir).
3. Conduz a consulta normalmente, olhando pro paciente em vez de pra tela — a IA escuta a conversa inteira em segundo plano e distingue quem é o profissional e quem é o paciente.
4. Ao final, clica em "Finalizar" — o sistema entrega, em segundos, um resumo já organizado nos campos do prontuário (queixa, histórico, conduta) e, à parte, a transcrição completa da conversa, caso precise conferir algum detalhe.
5. O profissional revisa o texto gerado, corrige o que precisar (nome, medicamento, detalhe técnico) e só então confirma/salva no prontuário definitivo — a IA nunca salva sozinha sem essa revisão.

**Resultado esperado:** o profissional sai da consulta com o prontuário praticamente pronto, sem levar "dever de casa" de digitação pra depois do expediente e sem tirar os olhos do paciente durante o atendimento pra escrever.

## Artefato candidato

Não há print/imagem própria coletada (mesma limitação de `WebFetch` impediu capturar tela real do fluxo em qualquer um dos sistemas citados). A central de suporte do Afya iClinic (fonte principal) descreve o passo a passo com nomes literais de tela e botão, o que serve de referência textual pra quem for montar a arte, mesmo sem captura de tela própria. Carrossel será gerado no template `carrossel-imagens-tema-tutorial`, que em modo YOLO roda sem imagem por passo — conforme pedido explícito da tarefa de hoje (que também pede explicitamente essa skill de imagem, em vez de `carrossel-imagens-tweet-screenshot`).

## Candidatos descartados

- **Repurposing de conteúdo com IA (produtores de conteúdo).** Múltiplas fontes em inglês (blog.vocable.ai, docswrite, typeface.ai) descrevem o mesmo conselho genérico — "pegue o conteúdo que mais performou, jogue numa ferramenta de IA, adapte pro tom da marca, publique em vários formatos" — sem nomear uma ferramenta/comando/prompt específico nem um passo a passo replicável de verdade. Falha no filtro "tem passo a passo de verdade > só uma ideia".
- **n8n para contabilidade (novo fluxo).** Fontes reais e com passo a passo existem (horadecodar.com.br, robertodiasduarte.com.br), mas contabilidade já apareceu 3x nos últimos 14 dias — descartado por saturação de setor, não por falta de qualidade da fonte.

## Atenção ao padrão de público-alvo genérico

Registrado no briefing da tarefa: carrosséis anteriores (advocacia e imobiliária) caíram na fórmula "[profissão] autônomo, [negócio] pequeno, time enxuto" pra explicar pra quem o carrossel serve. Neste carrossel, a frase de público-alvo vem do comportamento específico levantado na pesquisa — a atenção dividida entre olhar pro paciente e digitar durante a consulta, e o prontuário que sobra pra terminar depois do expediente — e não de um molde genérico trocando só os substantivos. Repassado explicitamente no handoff abaixo.

## Handoff

Tema repassado para `carrossel-instagram` (modo YOLO) com tema, fontes, passo a passo e setor-alvo acima, slug `2026-08-07-clinica-prontuario-voz-ia`, seguido de `carrossel-imagens-tema-tutorial` (YOLO, sem imagem), conforme pedido explícito da tarefa de hoje.
