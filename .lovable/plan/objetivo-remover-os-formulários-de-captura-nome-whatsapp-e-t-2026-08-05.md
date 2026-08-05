Objetivo: remover os formulários de captura (nome + WhatsApp) e transformar todos os CTAs em botões diretos para o link do grupo VIP do WhatsApp.

Alterações propostas:

1. HeroPromessa
- Remover os estados `nome`, `whatsapp` e a função `handleSubmit`.
- Remover o `<form>` e os dois `<input>`.
- Substituir por um `CTAButton` como link (`href={LINK_DO_GRUPO}`) com `target="_blank"` e `rel="noopener noreferrer"`.
- Manter a headline e a promessa; ajustar apenas se necessário para não referenciar o preenchimento de dados.

2. CTAFinal
- Remover os estados, a função `handleSubmit`, os `<input>` e o `<form>`.
- Substituir por `CTAButton` com `href={LINK_DO_GRUPO}` e `target="_blank"`.
- Reescrever o parágrafo de apoio que hoje diz "Deixe seu nome e WhatsApp pra entrar agora", removendo a referência ao formulário.
- Manter o id `form-final` para a seção, já que outros CTAs internos ainda podem usá-lo como âncora.

3. CTAs espalhados pela página
- Atualizar os botões que apontam para `#form` e `#form-final` nas seções Oportunidade, VantagensGrupo, Autoridade e no FixedCTABar para apontarem diretamente para `LINK_DO_GRUPO`.
- Onde fizer sentido (links externos), adicionar `target="_blank"` e `rel="noopener noreferrer"`.

4. Limpeza de código
- Remover imports não utilizados (`useState`, `FormEvent`) de HeroPromessa e CTAFinal.
- Garantir que o `LINK_DO_GRUPO` continue importado de `src/lib/constants.ts`.

5. Validação
- Verificar build sem erros.
- Conferir que todos os CTAs clicam diretamente para o grupo e que não restam formulários na página.
