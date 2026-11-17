# Portfólio — instruções para o Claude

Site pessoal em React 18 + Vite + Tailwind CSS 3 (`darkMode: 'class'`). Conteúdo em `src/data/*.js`, seções em `src/ui/components/`.

- Verificação antes de commitar: `npm run build` e `npm run lint`.
- Mensagens de commit: título curto no imperativo (inglês ou português), corpo explicando o quê e por quê.

## Diretrizes de design de UI (anti-padrões de IA)

Estilo sóbrio, funcional e de alto contraste (referência: Linear, Stripe, Vercel). Ao criar ou alterar qualquer componente:

### Estética e cores
- Sem gradientes roxo/azul/ciano em fundos, botões ou textos. Cores sólidas e neutras (slate) com **um** acento sólido (indigo).
- Sem neon: nada de `glow`, `shadowBlur`, cores fluorescentes sobre fundo escuro ou bordas brilhantes.
- Sem glassmorphism: nada de `backdrop-blur` com fundo semitransparente. Superfícies sólidas com borda `1px` sutil (classe `.card` em `src/index.css`).
- Sombras contidas: evite `shadow-lg`/`shadow-2xl` e sombras coloridas; hierarquia por contraste de fundo e borda.
- Sem faixas decorativas (`border-l-4`, barra colorida no topo do card).

### Tipografia e microcopy
- Sem "eyebrow" em caixa alta (`uppercase tracking-widest`) acima de títulos, rótulos ou cards.
- Sem emojis em títulos, cards ou itens de menu.
- Sem saudações genéricas nem texto de enchimento.
- Títulos objetivos e específicos.

### Componentes
- Sem ícones dentro de círculos/quadrados coloridos ao lado de números ou títulos; se houver ícone, ele é neutro e pequeno.
- Sem badges "Ao vivo"/bolinhas pulsantes nem elementos com `animate-bounce`/`animate-ping` decorativos.
- Variações em texto simples com cor semântica discreta, não pílulas verdes com seta.
- Sem ícone de brilho (sparkles).
- Tags/chips só quando categorizam algo de verdade, em paleta neutra.

### Gráficos e funcionalidade
- Sem gráficos arco-íris: uma cor primária e tons neutros, destacando só o dado principal.
- Sem donut com número gigante no meio quando barra ou tabela resolve.
- Sem sparklines decorativas.
- Nada de link morto ou filtro/busca que não filtra os dados reais.

## Armadilhas conhecidas
