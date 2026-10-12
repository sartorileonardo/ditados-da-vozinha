# Ditados da Vózinha

Este é um projeto pessoal e familiar, feito para guardar e compartilhar com a família áudios de ditados populares da Vó Ivone.

## Acessar e usar o site

Após a primeira publicação, o site estará em **[sartorileonardo.github.io/ditados-da-vozinha](https://sartorileonardo.github.io/ditados-da-vozinha/)**. Abra o endereço em um navegador e toque no botão redondo com o ícone de áudio para ouvir um ditado aleatório. A cada toque é escolhido outro áudio; quando há mais de um, o mesmo ditado não toca duas vezes seguidas.

O botão precisa ser pressionado para iniciar a reprodução, conforme as permissões de áudio dos navegadores. Se a página não abrir após uma publicação, confira a execução mais recente na aba [Actions](https://github.com/sartorileonardo/ditados-da-vozinha/actions).

> O repositório é privado, mas o site do GitHub Pages é público para qualquer pessoa com o endereço.

## Publicação

O GitHub Actions publica automaticamente o conteúdo do site quando há um push para a branch `main`. Para ativar o Pages na primeira vez, abra **Settings → Pages** no repositório e escolha **GitHub Actions** como fonte de publicação. O workflow `.github/workflows/pages.yml` envia somente a página, o estilo, o script, a foto e os áudios.

## Atualizar a foto

Substitua `assets/vozinha_avatar.jpeg` pela nova foto mantendo o mesmo nome, ou altere o caminho da imagem e do ícone em `index.html`.

## Adicionar áudios

Coloque o arquivo MP3 na pasta `audios/` e adicione uma entrada ao array `audios` no início de `script.js`:

```js
const audios = [
  { titulo: "Nome do ditado", arquivo: "audios/nome-do-arquivo.mp3" },
];
```

Faça push para a branch `main` para publicar as alterações. A lista atual contém 22 áudios.
