# 🚀 Startamus | Teste Técnico Frontend

## 📌 Sobre o projeto

Este projeto é uma aplicação frontend que consome a API [ChuckNorris.io](https://api.chucknorris.io/) para buscar e exibir piadas do Chuck Norris. A interface permite realizar buscas por palavras-chave e apresenta os resultados de forma amigável e responsiva.

## ✅ Funcionalidades

- 🔍 **Busca interativa**: Os usuários podem pesquisar por piadas do Chuck Norris.
- 📜 **Exibição de resultados**: Mostra as piadas encontradas com o máximo de informações disponíveis.
- 📱 **Design responsivo**: Adaptação para diferentes tamanhos de tela e densidades de pixel.
- 🎲 **"I'm Feeling Lucky"**: Botão que exibe uma piada aleatória.
- ✨ **Destaque do termo de busca**: A palavra-chave pesquisada pode ser destacada nos resultados.
- ⚡ **Desempenho otimizado**: Utiliza técnicas modernas para garantir rapidez e fluidez na experiência do usuário.

## 🛠️ Tecnologias utilizadas

- **Next.js 15** 🚀
- **TypeScript** 🟦
- **React** ⚛️
- **Fetch API** para requisições HTTP 🌍
- **Vitest** para testes unitários ✅
- **Cypress** para testes de integração 🔬
- **Tailwind CSS** para estilização 🎨
- **Shadcn UI** para UI Library 🎨

## 📦 Como rodar o projeto

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** (versão 18+)
- **pnpm** (Como instalar?)
  ```sh
  sudo npm install -g pnpm
  ```
- Extensão do Biome para VS Code (se estiver usando o editor VS Code)

### 2️⃣ Instalar dependências

```bash
pnpm install
```

### 2️⃣ Configurar variáveis de ambiente

Antes de rodar o projeto, copie o arquivo `.env.example` para `.env`:

```bash
cp .env.example .env
```

E defina a seguinte variável:

```ini
NEXT_PUBLIC_API_URL="https://api.chucknorris.io"
```

### 3️⃣ Rodar o ambiente de desenvolvimento

```bash
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### 4️⃣ Rodar testes

- **Testes unitários**:

```bash
pnpm test
```

- **Testes de integração com Cypress**:

```bash
pnpm cypress
```

## 📜 Scripts disponíveis

- `dev`: Inicia o ambiente de desenvolvimento com TurboPack.
- `build`: Faz o build do projeto.
- `start`: Inicia a aplicação em produção.
- `lint`: Verifica o código com Biome.
- `format`: Formata o código automaticamente.
- `check:types`: Verifica os tipos TypeScript.
- `check:all`: Executa lint, verificação de tipos, testes e build.
- `test`: Executa os testes com Vitest e gera cobertura.

## 🏆 Critérios de Avaliação

1. ✅ O projeto atende aos requisitos básicos?
2. 📖 A documentação explica como rodar o projeto?
3. 🎨 A experiência do usuário é boa (usabilidade, acessibilidade, visual)?
4. 🏗️ O código está bem estruturado e segue boas práticas?
5. 🔍 O projeto tem testes automatizados com boa cobertura?
6. 🛠️ As bibliotecas e recursos da linguagem foram usados de forma eficiente?

## 🤝 Contribuição

Caso queira sugerir melhorias ou relatar problemas, fique à vontade para abrir uma issue ou pull request. 🚀

---

📢 **Autor**: [Vinicius Fernandes](https://github.com/fernandes-vinicius)

🔗 [Portfolio](https://vinicius-frontend.vercel.app)

🔗 [Linkedin](https://www.linkedin.com/in/fernandes-vinicius)

