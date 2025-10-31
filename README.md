# Blogwise - Plataforma de Blog com IA

Este é um projeto de plataforma de blog completo construído com Next.js e Firebase Studio, apresentando um design moderno, um painel de administração funcional e recursos aprimorados por IA com Genkit.

## Descrição

Blogwise é uma plataforma de blog pronta para produção. Ela permite que os usuários leiam artigos, naveguem por categorias e tags. Administradores têm um painel dedicado para criar, editar e gerenciar posts, com o auxílio de uma ferramenta de IA para sugerir melhorias no conteúdo. O design é elegante, responsivo e inclui temas claro e escuro.

## Tecnologias e Arquitetura

O projeto utiliza uma stack moderna e robusta para garantir desempenho e escalabilidade.

- **Framework**: **Next.js 15** (com App Router) para renderização híbrida (Server e Client Components).
- **Linguagem**: **TypeScript** para um código mais seguro e manutenível.
- **Estilização**: **Tailwind CSS** para estilização utility-first, com componentes **ShadCN/UI** para uma interface de usuário elegante e consistente.
- **Componentes de UI**: A biblioteca **ShadCN/UI** é usada para componentes como botões, cards, formulários e o layout do painel administrativo.
- **Inteligência Artificial**: **Genkit** (com o modelo Gemini do Google AI) é usado para a funcionalidade de sugestão de expansão de artigos.
- **Gerenciamento de Formulários**: **React Hook Form** com **Zod** para validação de schemas.
- **Ícones**: **Lucide React** para uma vasta biblioteca de ícones.
- **Manipulação de Datas**: `date-fns` para formatação de datas.

### Arquitetura

- **`src/app`**: Contém as rotas da aplicação seguindo a convenção do App Router do Next.js.
  - **`/(site)`**: Grupo de rotas para as páginas públicas do blog (home, posts, categorias).
  - **`/admin`**: Grupo de rotas para o painel de administração.
- **`src/components`**: Componentes React reutilizáveis.
  - **`/ui`**: Componentes base do ShadCN.
  - **`/admin`**: Componentes específicos para o painel de administração, como o editor de artigos.
- **`src/lib`**: Lógica de negócios, tipos de dados e funções utilitárias.
  - **`data.ts`**: Simula um banco de dados, fornecendo funções para buscar posts, autores, etc.
- **`src/ai`**: Integração com Genkit para funcionalidades de IA.
  - **`flows`**: Define os fluxos de IA, como a análise de conteúdo de artigos.
- **`src/styles`**: Estilos globais e configuração do Tailwind CSS.

## Funcionalidades

### Blog Público
- Página inicial com post em destaque e lista dos artigos mais recentes.
- Páginas de detalhes dos posts com conteúdo formatado em Markdown.
- Navegação por categorias e tags.
- Design responsivo para desktops, tablets e dispositivos móveis.
- Seletor de tema claro e escuro.
- Busca de artigos.

### Painel de Administração (`/admin`)
- Página de login segura.
- Dashboard principal com uma tabela de todos os posts.
- Funcionalidade para criar um novo post.
- Funcionalidade para editar posts existentes.
- **Assistente de IA**: No editor de artigos, um botão "Analisar Conteúdo" usa IA para fornecer sugestões sobre como expandir e melhorar o artigo.

## Estrutura de Diretórios

```
.
├── src
│   ├── app
│   │   ├── admin
│   │   │   ├── layout.tsx
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   ├── page.tsx
│   │   │   └── posts
│   │   │       ├── edit
│   │   │       │   └── [slug]
│   │   │       │       └── page.tsx
│   │   │       └── new
│   │   │           └── page.tsx
│   │   ├── categories
│   │   │   └── [slug]
│   │   │       └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── posts
│   │   │   └── [slug]
│   │   │       └── page.tsx
│   │   └── tags
│   │       └── [slug]
│   │           └── page.tsx
│   ├── components
│   │   ├── admin
│   │   │   └── article-editor.tsx
│   │   ├── ui
│   │   │   └── ... (componentes ShadCN)
│   │   ├── pagination-component.tsx
│   │   ├── post-card.tsx
│   │   ├── site-footer.tsx
│   │   ├── site-header.tsx
│   │   ├── tag-pills.tsx
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   ├── hooks
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib
│   │   ├── data.ts
│   │   ├── placeholder-images.json
│   │   ├── placeholder-images.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   └── ai
│       ├── dev.ts
│       ├── flows
│       │   └── suggest-article-expansion.ts
│       └── genkit.ts
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

## Como Começar

Para iniciar o ambiente de desenvolvimento, utilize o seguinte comando:

```bash
npm run dev
```

Isso iniciará a aplicação Next.js na porta `9002`.
