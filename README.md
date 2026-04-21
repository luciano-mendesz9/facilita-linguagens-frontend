# Facilita
---

## 🚀 Primeiros Passos

Siga a ordem abaixo para garantir que o projeto e o banco de dados estejam sincronizados corretamente.

### 1. Instalação de Dependências

Após clonar o repositório, navegue até a pasta raiz e instale os pacotes necessários:

**Bash**

```
npm install
```

### 2. Configuração do Banco de Dados (Prisma)

O Prisma é o nosso ORM (Object-Relational Mapper). Você precisará rodar dois comandos fundamentais:

#### **Gerar o Client do Prisma**

Sempre que você clona o projeto pela primeira vez ou quando há mudanças no arquivo `schema.prisma` feitas por outros desenvolvedores, você deve rodar:

**Bash**

```
npx prisma generate
```

> **Por que?** Este comando lê o arquivo de esquema e gera o código TypeScript/JavaScript necessário para que o seu editor (VS Code) entenda as tabelas do banco e ofereça o auto-complete (IntelliSense).

#### **Sincronizar e Migrar o Banco**

Para criar as tabelas no seu banco de dados local, utilize:

**Bash**

```
npx prisma migrate dev --name init
```

> **Atenção ao `--name`:** > \* O nome `init` deve ser usado apenas na **primeira vez**.
>
> * Nas próximas vezes que você alterar o banco, substitua `init` por algo descritivo, como `add-user-table` ou `fix-product-relation`.
> * **Importância:** Esse comando registra o "histórico" do banco. Se você não rodar isso, o seu código tentará salvar dados em tabelas que ainda não existem fisicamente no seu computador.

---

## 💻 Rodando o Projeto

Com as dependências instaladas e o banco de dados configurado, inicie o servidor de desenvolvimento:

**Bash**

```
npm run dev
```

Acesse [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para visualizar a aplicação.

---

## 🛠️ Tecnologias Utilizadas

* **Next.js** - Framework React para produção.
* **Prisma** - ORM para interação com o banco de dados.
* **Tailwind CSS** - Estilização moderna e responsiva.
* **TypeScript** - Segurança de tipos para o código.

---

## 📝 Notas Adicionais

* Certifique-se de ter um arquivo `.env` na raiz com a sua `DATABASE_URL` configurada antes de rodar os comandos do Prisma.
* Para visualizar os dados do banco de forma gráfica, você pode usar o comando `npx prisma studio`.

---

**Gostaria que eu adicionasse uma seção de "Estrutura de Pastas" ou uma lista de funcionalidades específicas do Hidro Florestas no README?**

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
