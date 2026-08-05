Adicionar a foto enviada como imagem principal do Hero

Objetivo
Substituir o placeholder `hero-patricia-clinica.jpg` na seção HeroPromessa pela foto real da Dra. Patrícia Cataldo (Sessão_Patrícia_Cataldo-07.jpg), aplicando crop adaptativo (object-cover) para preencher o container 4:5 sem distorção.

Alterações previstas
1. Enviar a foto para o Lovable Assets com o nome `hero-patricia-clinica.jpg` e criar o ponteiro `src/assets/hero-patricia-clinica.jpg.asset.json`.
2. Atualizar `src/components/sections/HeroPromessa.tsx`:
   - Trocar o placeholder `<span>` por um `<img>` real importando o ponteiro do asset.
   - Aplicar `object-cover` para preencher o container `aspect-[4/5]`.
   - Definir `alt` descritivo (ex.: "Dra. Patrícia Cataldo").
   - Adicionar `fetchpriority="high"` e omitir `loading="lazy"`.
3. Revisar se o container `aspect-[4/5]` continua válido e se a borda/estilização permanece consistente com o design system.

Critérios de aceitação
- A imagem real aparece no Hero no preview, sem placeholder.
- A imagem preenche o espaço 4:5 sem distorcer (crop permitido nas bordas).
- Alt text, fetchpriority e lazy-loading estão corretos.
- Build passa sem erros.
