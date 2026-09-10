# PZaaS · Serviço de Pagamento (04)

Site estático da documentação do Serviço de Pagamento do projeto PZaaS.

## Rodar localmente

Basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor HTTP simples.

Exemplo com Python:

```bash
python -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Publicar na Vercel pelo GitHub

1. Crie um repositório no GitHub.
2. Envie os arquivos desta pasta para o repositório.
3. Acesse a Vercel e clique em **Add New > Project**.
4. Importe o repositório.
5. Em **Framework Preset**, escolha **Other** se a Vercel não detectar automaticamente.
6. Não é necessário comando de build.
7. Clique em **Deploy**.

A Vercel gerará um endereço no formato:

`https://nome-do-projeto.vercel.app`

## Estrutura

- `index.html` — conteúdo da documentação
- `styles.css` — layout e responsividade
- `script.js` — menu mobile, navegação ativa e botões de copiar
- `vercel.json` — configuração simples para deploy na Vercel
