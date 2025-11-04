# DEX BLOG - Plataforma de Conteúdo Descentralizada

## Missão

O **DEX BLOG** é uma plataforma de conteúdo descentralizada que capacita criadores da comunidade a publicar suas histórias, análises e visões. Recompensamos a criação de conteúdo de alta qualidade com criptomoedas, com base no engajamento e no impacto gerado por suas publicações.

## Visão

Construir o futuro da mídia: uma plataforma mais justa, transparente e impulsionada por uma comunidade global de criadores e leitores.

## Tecnologias e Arquitetura

O DEX BLOG é uma **aplicação web full-stack**, construída com uma stack moderna que utiliza Next.js tanto para o frontend quanto para o backend, e integra o Genkit para funcionalidades de IA.

---

### **1. Frontend (Interface do Usuário)**

O frontend é responsável por renderizar a interface visual do blog, com a qual os usuários e criadores interagem.

#### **Tecnologias do Frontend:**

*   **Framework Principal:** **Next.js** com **React** (utilizando o **App Router**), que gerencia o roteamento, a renderização de páginas e a estrutura geral da aplicação.
*   **Linguagem:** **TypeScript**.
*   **Estilização:**
    *   **Tailwind CSS:** Framework de CSS utilitário para estilização rápida e consistente.
    *   **shadcn/ui:** Coleção de componentes de UI construídos sobre o Radix UI e Tailwind CSS, fornecendo os blocos de construção da interface (botões, cards, formulários, etc.).
    *   **Lucide React:** Pacote de ícones.
*   **Gerenciamento de Formulários:**
    *   **React Hook Form & Zod:** Utilizados para gerenciar o estado, a validação de esquemas e a submissão de formulários.
*   **Renderização de Conteúdo:** **MDX** (`@next/mdx`) para escrever conteúdo (como posts de blog) que mescla Markdown com componentes React.
*   **Outros:**
    *   **Recharts:** Para a criação de gráficos e visualização de dados.
    *   **Embla Carousel:** Para carrosséis de imagens ou conteúdo.
    *   **Next-Themes:** Para alternância entre tema claro e escuro.

#### **Estrutura de Diretórios do Frontend:**

```
src
├── app/                  # Roteamento e páginas principais (App Router)
│   ├── layout.tsx        # Layout principal que envolve todas as páginas
│   ├── page.tsx          # A página inicial (homepage) do blog
│   ├── globals.css       # Estilos globais
│   │
│   ├── admin/            # Seção de administração do site
│   ├── posts/[slug]/     # Rota dinâmica para exibir um post individual
│   ├── categories/[slug]/# Rota para listar posts por categoria
│   └── ...               # Outras rotas da aplicação
│
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes base do shadcn/ui (Button, Card, etc.)
│   ├── site-header.tsx   # Cabeçalho do site
│   ├── site-footer.tsx   # Rodapé do site
│   └── ...               # Outros componentes customizados
│
└── lib/                  # Funções utilitárias, tipos e dados
    ├── utils.ts          # Funções de ajuda genéricas
    ├── types.ts          # Definições de tipos TypeScript
    └── data.ts           # Funções para buscar dados (posts, autores, etc.)

public/
└── images/               # Imagens estáticas (logos, avatares)
```

---

### **2. Backend (Lógica de Servidor)**

O backend lida com a lógica de negócio, acesso a dados, autenticação e a execução das funcionalidades de IA.

#### **Tecnologias do Backend:**

*   **Runtime:** **Node.js** (integrado ao ambiente Next.js).
*   **Frameworks:**
    *   **Next.js (Route Handlers & Server Actions):** Utilizado para criar endpoints de API e para executar lógica de servidor diretamente a partir de componentes do frontend.
    *   **Genkit (Google):** Framework open-source para construir e orquestrar fluxos de IA.
*   **IA e Modelos de Linguagem:**
    *   **Google AI (Gemini):** Modelo de linguagem integrado via Genkit para funcionalidades como a sugestão de expansão de artigos.
*   **Banco de Dados e Autenticação:**
    *   **Firebase:** Utilizado como Backend-as-a-Service (BaaS).
        *   **Firebase Authentication:** Para login e gerenciamento de usuários.
        *   **Firestore:** Como banco de dados NoSQL para armazenar posts, comentários, etc.
        *   **Firebase Storage:** Para armazenamento de arquivos, como imagens.

#### **Estrutura de Diretórios do Backend:**

```
src
├── ai/                   # Lógica do backend de IA com Genkit
│   ├── genkit.ts         # Configuração dos plugins do Genkit
│   └── flows/            # Definição dos fluxos de IA
│       └── suggest-article-expansion.ts # Flow que utiliza o Gemini
│
└── app/
    └── api/              # (Opcional) Endpoints de API tradicionais
        └── ...
```

## Funcionalidades Principais

### Para Criadores de Conteúdo
- **Crie e Publique:** Um editor de texto intuitivo com assistência de IA para ajudar a aprimorar o conteúdo.
- **Monetização Descentralizada:** Receba recompensas em criptomoedas (tokens DEX) diretamente em sua carteira, com base no desempenho do seu artigo.
- **Painel de Controle do Criador:** Acompanhe o engajamento de suas publicações e suas recompensas em tempo real.
- **Propriedade do Conteúdo:** Mantenha a propriedade de seu trabalho através de tecnologias descentralizadas.

### Para a Comunidade
- **Leitura e Descoberta:** Navegue por artigos de alta qualidade sobre diversos tópicos.
- **Governança (DAO):** Participe da curadoria de conteúdo e da tomada de decisões da plataforma.
- **Interação:** Comente, compartilhe e apoie seus criadores favoritos.

## Como Participar

O DEX BLOG é uma plataforma aberta. Qualquer pessoa pode se tornar um criador de conteúdo e começar a monetizar sua paixão e conhecimento.

### Como Funciona:
1.  **Conecte sua Carteira:** Acesse a plataforma DEX BLOG e conecte sua carteira de criptomoedas.
2.  **Crie e Publique:** Utilize nosso editor para escrever seu artigo. A IA integrada pode ajudar com sugestões.
3.  **Acompanhe o Desempenho:** Monitore o engajamento do seu conteúdo em tempo real.
4.  **Receba Recompensas:** As recompensas são distribuídas automaticamente para sua carteira com base no engajamento.

## Estrutura de Recompensas (Modelo Sugerido)

Recompensamos os criadores com base no mérito e no engajamento de seu conteúdo. O modelo exato de recompensas é definido e ajustado pela DAO, mas pode incluir:
- Recompensas por visualizações únicas.
- Bônus por marcos de engajamento (comentários, compartilhamentos).
- Distribuição de uma parte da receita da plataforma.

> **Nota:** Este projeto está em desenvolvimento ativo. Fique à vontade para contribuir!
