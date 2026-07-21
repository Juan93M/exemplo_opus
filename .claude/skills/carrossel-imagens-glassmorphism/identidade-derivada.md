# Identidade Derivada — carrossel-imagens-glassmorphism

Este template parte da identidade visual canônica do glassmorphism ibe.IA (`references/canonica-ibeia.md`, dentro de `gerador-skills-carrosseis`) e aplica os ajustes abaixo para a marca Opus Automações. A canônica ibe.IA não muda; este é um template independente, gerado por encomenda da Opus.

## O que foi mantido

- Estilo macro: glassmorphism (cards translúcidos com `backdrop-filter: blur(24px)` sobre ambient gradient).
- Par tipográfico: Sora (display) + Plus Jakarta Sans (corpo). Mesmo par da canônica ibe.IA.
- Letter-spacing: `-0.07em` display, `-0.02em` corpo (canônico, sem desvio).
- Canvas 1080×1440, tamanhos de fonte, spacing e radius tokens.
- Regra de quebra de linha por sentença e proibição de em-dash/itálico.

## O que foi ajustado

| Aspecto | Canônica ibe.IA | Neste template | Razão |
|---|---|---|---|
| Paleta hero | 3 cores alternando (laranja `#F84F2E`, roxo `#AF6DFF`, azul `#0058D4`) | 1 cor fixa: navy `#0D193C` | O avatar da Opus Automações só tem uma cor de tinta real (navy + branco). Sem 3 cores de marca, não há alternância possível; a skill usa navy como hero único em todo `cor_hero`. |
| Cor "preto" do sistema | `#1C1C1C` | `#0D193C` (o próprio navy) | Reaproveita a cor de marca também como tom escuro do sistema, em vez de introduzir um preto neutro sem relação com a identidade. |
| Cor "creme" do sistema | `#FBF9F4` | `#FFFFFF` + `#E8EAEF` (cinza claro) | Opus não tem um tom creme definido; branco puro + cinza claro (acrescentado a pedido do usuário) fazem o papel de superfície clara. |
| Header/footer | Configurável, mas com opções institucionais (mono strip, logo+data) | Footer logo centralizado na base (`opus-logo-navy`/`opus-logo-white`), em todos os arquétipos. Nome/handle por extenso continuam só no texto do CTA. | Decisão original (2026-07-20) era "nenhum": identidade só no texto. Revertida em 2026-07-21 a pedido do usuário, que sentiu falta da marca visível — o efeito de vidro sem nenhuma âncora de identidade ficava genérico demais. |
| Arquétipo `capa` | Exige `imagem:` obrigatória (full-bleed, texto em overlay) | Sem imagem: título centralizado num glass card sobre ambient + orb navy | A skill inteira roda em modo só-texto (sem modalidade `print`/`svg`/`ai`); o campo `imagem` foi removido do schema de `capa` e substituído por composição 100% CSS (orb + blur). |
| Arquétipo `conteudo-hero` | `cor_hero` escolhida entre laranja/roxo/azul | `cor_hero` sempre resolve pra navy (única opção) | Consequência direta da paleta de hero único. |
| `conteudo-hero`: bloco branco vs vidro | N/A (arquétipo não existe na canônica com essa variação) | Card vidro translúcido, igual aos outros 4 arquétipos (revertido de bloco branco 100% opaco) | Decisão original (2026-07-20) era bloco sólido "a cor é o protagonismo visual, por design". Revertida em 2026-07-21: usuário queria consistência de vidro em 100% do carrossel, sem exceção. |

## O que foi adicionado (não existe na canônica)

- Nada estrutural novo além da fixação da paleta em navy/branco/cinza-claro. Os 5 arquétipos (`capa`, `conteudo-claro`, `conteudo-escuro`, `conteudo-hero`, `cta`) já existem no set expandido do gerador; nenhum arquétipo customizado foi criado.
- **`--color-hero-blue-light` (`#4C8DFF`, 2026-07-21).** Tom de contraste fixo, sem equivalente na canônica ibe.IA (que resolve contraste via alternância de 3 hero colors). Usado só no orb de `conteudo-escuro` e no `<em>` de texto escuro. Motivo: o orb original (`--color-surface-escuro`, `#101B3E`) era próximo demais do fundo navy (`#0D193C`) — o blur não tinha cor viva pra refratar e o card de vidro perdia o efeito. Pelo mesmo motivo, `<em>` em slide escuro herdava a cor navy do sistema e ficava ilegível sobre o próprio fundo navy; passou a usar o mesmo azul claro.
- **Sintaxe de destaque no roteiro (2026-07-21).** Não existe na canônica. O design system já previa `<em>` reestilizado, mas não havia forma de autoria: o script de build escapava todo o texto do roteiro sem interpretar marcação nenhuma, então `<em>` digitado literalmente virava texto visível, não destaque. Passou a reconhecer um trecho entre asterisco-duplo (convenção markdown) e converter pra `<em>` depois do escape.
- **Footer logo (2026-07-21).** Ver linha "Header/footer" na tabela acima. Arquivo fonte (`Logo Opus 01 - Completo.png`, fornecido pelo usuário) não tinha alpha real — era um preview com xadrez de transparência gravado nos próprios pixels. Foi reconstruído um recorte com alpha real a partir da luminância (tinta escura = opaco, fundo quase-branco = transparente), em duas variantes de cor (navy `scaffold/assets/opus-logo-navy.png`, branco `scaffold/assets/opus-logo-white.png`).
- **Padrão de 2 blobs diagonais + `--color-hero-blue-deep` (`#2F5FE0`, 2026-07-21).** A primeira correção do orb de `conteudo-escuro` (orb único, `--color-hero-blue-light` centralizado) resolveu o contraste em fundo escuro, mas o usuário comparou capa/conteudo-claro/hero contra essa referência e sentiu falta da mesma força de "vidro" nelas — o orb único centralizado em opacidade baixa (0.22, depois 0.5) lia como mancha cinza, não como vidro colorido. A solução final, testada em 3 candidatos lado a lado e aprovada pelo usuário, foi trocar TODO orb único por um par fixo de blobs em cantos opostos (`.orb-navy` superior-esquerdo + `.orb-blue-light` inferior-direito, ambos opacidade 0.6), aplicado de forma idêntica nos 5 arquétipos. Em fundo escuro, `.orb-navy` não pode usar navy (sumiria) nem repetir `--color-hero-blue-light` (blobs ficariam iguais) — daí o terceiro tom, `--color-hero-blue-deep`.

## Justificativa geral

A Opus Automações não tem, até o momento desta geração, uma paleta de marca com múltiplas cores hero como a ibe.IA. O avatar oficial (robô de gravata) só define navy escuro + branco. Em vez de importar a paleta laranja/roxo/azul de outra marca, o template deriva uma paleta própria a partir do único ativo de cor real que a Opus tem, complementada por um cinza claro neutro pedido explicitamente pelo usuário. Isso mantém o template coerente com a identidade real da conta, ao custo de não ter alternância de cor hero entre slides (compensado pela alternância claro/escuro/hero via `conteudo-claro`/`conteudo-escuro`/`conteudo-hero`).

## Impacto no tom de voz

Nenhum. O tom de voz da Opus Automações (PT-BR direto, contrações, sem jargão inflado, sem em-dash) não muda por template visual.

## Sincronização

Se a Opus Automações definir uma paleta de marca mais ampla no futuro (mais cores hero, um tom "creme" próprio), revisar este arquivo e decidir se o template deve incorporar as cores novas ou permanecer no navy único. Última revisão: 2026-07-21.
