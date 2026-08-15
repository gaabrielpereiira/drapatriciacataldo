# VIP Group Connect

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROMPT 0 — SETUP
Cole no Lovable como primeiro prompt. Aguarde executar antes de continuar.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Crie uma landing page de captura em React com Tailwind CSS.
Mobile-first. Sem menu de navegação. Foco exclusivo em uma conversão: entrar no grupo VIP (formulário nome + WhatsApp).
Não adicione nenhum componente além do que for especificado.
Não use Inter, Poppins, Roboto, Arial ou system-ui em nenhuma circunstância.
Não use ícones Lucide em nenhuma circunstância — use apenas Iconify (solar:outline).
Não adicione gradientes roxos, azuis genéricos ou qualquer estética de template.

## TAILWIND CONFIG
Substitua completamente o tailwind.config.js por este:

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg:          '#F8E8D9',
        'bg-alt':    '#74401F',
        surface:     '#FCF5EE',
        accent:      '#8A5B3F',
        gold:        '#BC925C',
        champagne:   '#E9C494',
        cta:         '#74401F',
        'cta-text':  '#F8E8D9',
        text:        '#74401F',
        'text-muted':'#8A5B3F',
        'text-on-dark':'#F8E8D9',
        border:      '#BC925C',
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body:    ['Montserrat', 'sans-serif'],
      },
      spacing: {
        xs: '8px', sm: '16px', md: '24px', lg: '48px', xl: '80px',
        section: '96px', 'section-mobile': '64px',
      },
      maxWidth: { container: '1120px' },
      borderRadius: { sm: '8px', md: '12px', lg: '16px' },
    },
  },
}

## FONTES
npm install @fontsource/playfair-display @fontsource/montserrat
No main.tsx importe:
import '@fontsource/playfair-display/600.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/500.css'
import '@fontsource/montserrat/600.css'

## COMPONENTES GLOBAIS (crie antes de qualquer dobra)

CTAButton.tsx
- Fundo bg-cta (#74401F) · texto text-cta-text (#F8E8D9) · font-heading · font-weight 600 · font-size 16px
- Padding 18px 32px · border-radius 8px (rounded-sm)
- Hover: translateY(-2px) + box-shadow 0 8px 24px rgba(116,64,31,0.25)
- Active: scale(0.98) · Transição all 0.3s ease
- Prop variant="onDark": fundo bg-gold (#BC925C), texto #74401F (usar nas dobras escuras)

SecondaryButton.tsx
- Borda 1.5px solid gold (#BC925C) · texto gold · fundo transparente
- Hover: fundo gold + texto #F8E8D9 · mesmas regras de radius/padding/transição

FixedCTABar.tsx
- fixed bottom-0 left-0 right-0 z-50 · fundo bg-cta · texto cta-text · padding 12px 24px
- flex items-center justify-center gap-4 · conteúdo: "Entre no grupo VIP e garanta a condição de fundadora" + CTAButton → âncora #form
- translateY(100%) por padrão → translateY(0) após o hero sair da viewport · transição transform 0.3s ease

useScrollReveal.ts
- Intersection Observer threshold 0.1 · ao entrar adiciona classe 'visible' · stagger 100ms entre filhos
- CSS base: .reveal { opacity:0; transform:translateY(24px); transition:opacity .6s ease, transform .6s ease; } .reveal.visible { opacity:1; transform:none; }

## ÍCONES
npm install @iconify/react
import { Icon } from '@iconify/react'
Família única: solar (outline). Nunca lucide-react.

## COMPORTAMENTOS GLOBAIS
- FixedCTABar aparece após o hero
- FAQ accordion (implementar na dobra de FAQ) com aria-expanded correto
- Scroll suave entre âncoras
- Grain overlay ~5% e grafismo de monograma em baixa opacidade nas dobras escuras (2, 5, 8, 10 e rodapé)

## REGRAS ABSOLUTAS
1. Copy verbatim — nunca resumir/parafrasear
2. Wireframe é lei — layout exato, sem interpretação
3. max-width 65ch nos parágrafos de corpo · line-height 1.7
4. Contraste mínimo 4.5:1 · touch targets mínimos 44x44px
5. Alt text real em toda imagem
6. Sombras suaves (máx box-shadow 0 24px 48px rgba(116,64,31,0.12))
7. lang="pt-BR" no html root
8. Sem header fixo, sem footer de navegação, sem menu

## ESTRUTURA DE ARQUIVOS
src/components/ CTAButton.tsx, SecondaryButton.tsx, FixedCTABar.tsx, sections/[UmaPorDobra].tsx
src/hooks/ useScrollReveal.ts
App.tsx, main.tsx

Não crie nenhuma dobra ainda. Apenas o setup acima. Confirme quando estiver pronto para a primeira dobra.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://drapatriciacataldo.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/9d2901bd-3d2d-4477-bced-467e5df26d64).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
