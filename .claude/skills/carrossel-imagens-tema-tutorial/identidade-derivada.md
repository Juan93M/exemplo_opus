# Identidade Derivada — carrossel-imagens-tema-tutorial

Este template parte da identidade visual canônica **ticket-zerotoui** (`references/estilos-visuais.md`, dentro de `gerador-skills-carrosseis`) e aplica os ajustes abaixo pra marca Opus Automações e pro formato tutorial. A canônica não muda; este é um template independente, gerado sob encomenda em 2026-07-25.

## O que foi mantido

- Estilo macro: ticket-zerotoui (moldura preta com entalhes semicirculares, card creme centralizado).
- Par tipográfico: Fraunces (display) + Source Serif 4 (corpo) — mesmo par default do catálogo pra esse estilo.
- Canvas 1080×1440.
- Regra de quebra de linha por sentença e proibição de em-dash/itálico.
- `JetBrains Mono` pros badges (tag do passo, handle do footer) — segue a recomendação do catálogo ("Fraunces display + Source Serif 4 corpo + JetBrains Mono badges").

## O que foi ajustado

| Aspecto | Canônica/catálogo | Neste template | Razão |
|---|---|---|---|
| Paleta hero | Alternância entre laranja/roxo/azul/verde por slide | 1 cor fixa: laranja `#F84F2E` | Testado ao vivo: gerei um HTML comparando "alterna por passo" vs. "laranja fixo" e o usuário escolheu fixo, achando mais consistente pro formato tutorial. |
| Letter-spacing | `-0.07em` display / `-0.02em` corpo (assinatura Sora+Plus Jakarta da canônica) | `-0.01em` display / `0em` corpo / `+0.06em` nos badges mono | Fraunces e Source Serif 4 são serifs com identidade própria; tracking apertado nelas lê como erro de kerning. Badges mono ganham tracking positivo (padrão pra caps mono, melhora legibilidade em tamanho pequeno). |
| Header/footer | Configurável (mono strip, foto+handle, logo+data, nenhum) | Fixo em todo slide: só o texto `@opus.automacoes`, centralizado, em laranja, sem logo, sem data | Testei 3 tratamentos num HTML (nenhum / logo dentro do card / logo na moldura) e o usuário pediu um quarto: só o handle em texto, cor laranja igual à tag. Contraste direto com a decisão da `carrossel-imagens-glassmorphism` (logo sim, sem texto) — usuário quis variedade entre as duas skills. |
| Arquétipos | Catálogo oferece set mínimo (3) ou expandido (5) | Mínimo: `capa`, `conteudo`, `cta` | Ticket-zerotoui não tem conceito de "claro/escuro/hero" (é sempre a mesma moldura+card); tutorial é sequencial, não precisa de alternância visual entre passos. |
| Modalidades de imagem | Catálogo default é `print+svg+ai` | `print + svg`, **sem `ai`** | Decisão do usuário no Step 4 — provavelmente pra manter custo zero, já que tutorial pode ter muitos passos/slides. |
| Campo `tag` em `conteudo` | Não existe no baseline genérico (`arquetipos-baseline.md` não tem esse campo) | Obrigatório, tipo "PASSO 1", "PASSO 2" | Formato tutorial pede numeração explícita — é o que diferencia um passo do outro visualmente e semanticamente. |

## O que foi adicionado (não existe na canônica nem no baseline genérico)

- **Campo `tag` obrigatório em `conteudo`** (badge tipo "PASSO N"). Ver tabela acima.
- **Regra de modo YOLO sem imagem (2026-07-25).** Em modo interativo a skill suporta `print`/`svg` normalmente. Mas quando disparada em modo YOLO (rotina automática, sem supervisão), o Step 2 do workflow pula a resolução de imagem inteiramente — decisão explícita do usuário ("por hora"), não é limitação técnica. Revisitar quando o modo YOLO tiver como validar imagem (ex.: checar PNG > 10KB) sem intervenção humana pra aprovar/rejeitar.
- **Destaque de texto via `**texto**`** (mesmo padrão introduzido em `carrossel-imagens-glassmorphism` em 2026-07-21). Converte pra `<em>` com cor `--color-hero-laranja`, peso 600, sem itálico.

## Justificativa geral

O usuário já tinha resolvido a identidade de cor da Opus Automações de um jeito (navy único) na `carrossel-imagens-glassmorphism`. Aqui, pro formato tutorial, ele testou variações ao vivo (paleta alternando vs. fixa; três tratamentos de footer) e chegou em decisões diferentes das da glassmorphism — laranja em vez de navy, texto em vez de logo. Isso é intencional: são duas skills de registro visual diferente (glass autoral vs. ticket didático), não precisam da mesma identidade de cor/footer, só da mesma marca de fundo (Opus).

## Impacto no tom de voz

Nenhum. Tom de voz da Opus Automações (PT-BR direto, contrações, sem jargão inflado, sem em-dash) não muda por template visual.

## Sincronização

Se a Opus Automações definir uma paleta de marca mais ampla no futuro, ou se o modo YOLO passar a suportar validação de imagem sem supervisão, revisar este arquivo. Última revisão: 2026-07-25.
