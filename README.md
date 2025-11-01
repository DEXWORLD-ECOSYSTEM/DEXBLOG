# DEX BLOG - Plataforma de Conteúdo Descentralizada

## Missão

O **DEX BLOG** é uma plataforma de conteúdo descentralizada que capacita criadores da comunidade a publicar suas histórias, análises e visões. Recompensamos a criação de conteúdo de alta qualidade com criptomoedas, com base no engajamento e no impacto gerado por suas publicações.

## Visão

Construir o futuro da mídia: uma plataforma mais justa, transparente e impulsionada por uma comunidade global de criadores e leitores.

## Tecnologias e Arquitetura

O projeto utiliza uma stack moderna e robusta para garantir desempenho, escalabilidade e descentralização.

- **Framework**: **Next.js 15** (com App Router)
- **Linguagem**: **TypeScript**
- **Estilização**: **Tailwind CSS** com **ShadCN/UI**
- **Inteligência Artificial**: **Genkit** (com modelo Gemini do Google AI) para assistência de conteúdo.
- **Web3**: Integração com carteiras de criptomoedas (ex: MetaMask) para autenticação e distribuição de recompensas.
- **Contratos Inteligentes**: (A serem desenvolvidos) para governança da DAO e distribuição de recompensas.
- **Oráculos de Dados**: (A serem implementados, ex: Chainlink) para obter métricas de engajamento de forma segura.

## Funcionalidades Principais

### Para Criadores de Conteúdo
- **Crie e Publique:** Um editor de texto intuitivo com assistência de IA para ajudar a aprimorar o conteúdo.
- **Monetização Descentralizada:** Receba recompensas em criptomoedas (tokens DEX) diretamente em sua carteira, com base no desempenho do seu artigo (visualizações, comentários, compartilhamentos).
- **Painel de Controle do Criador:** Acompanhe o engajamento de suas publicações e suas recompensas em tempo real.
- **Propriedade do Conteúdo:** Mantenha a propriedade de seu trabalho através de tecnologias descentralizadas.

### Para a Comunidade
- **Leitura e Descoberta:** Navegue por artigos de alta qualidade sobre diversos tópicos.
- **Governança (DAO):** Participe da curadoria de conteúdo e da tomada de decisões da plataforma votando com tokens DEX.
- **Interação:** Comente, compartilhe e apoie seus criadores favoritos.

## Ecossistema de Criadores (Como Participar)

O DEX BLOG é uma plataforma aberta. Qualquer pessoa pode se tornar um criador de conteúdo e começar a monetizar sua paixão e conhecimento.

### Como Funciona:
1.  **Conecte sua Carteira:** Acesse a plataforma DEX BLOG e conecte sua carteira de criptomoedas.
2.  **Crie e Publique:** Utilize nosso editor para escrever seu artigo. A IA integrada pode ajudar com sugestões.
3.  **Acompanhe o Desempenho:** Monitore o engajamento do seu conteúdo em tempo real.
4.  **Receba Recompensas:** As recompensas são distribuídas automaticamente para sua carteira com base no engajamento.

## Estrutura de Recompensas (Modelo Sugerido)

Recompensamos os criadores com base no mérito e no engajamento de seu conteúdo.

| Métrica de Engajamento | Fonte de Dados (Exemplo) | Recompensa (Modelo Sugerido) |
|------------------------|--------------------------|------------------------------|
| Visualizações Únicas   | Chainlink (Oráculo de Dados) | 0.01 DEX por visualização    |
| Comentários de Qualidade | Análise de IA on-chain   | 0.1 DEX por comentário aprovado |
| Compartilhamentos Sociais| API da Plataforma        | 0.05 DEX por compartilhamento |
| Tempo de Leitura Médio | Análise da Plataforma    | Bônus por artigos > 5 min    |

## CI/CD e Automação

### Versionamento Semântico Automático
O projeto utiliza um workflow de GitHub Actions para automatizar a criação de tags de versão. A cada push no branch `main`, o sistema analisa as mensagens de commit, calcula a próxima versão semanticamente e cria uma nova tag no repositório.

## Como Contribuir

- **Seja um Criador:** Comece a publicar hoje mesmo.
- **Seja um Curador:** Participe da governança votando nos melhores conteúdos.
- **Desenvolva a Plataforma:** Contribua com o código-fonte (open-source) e proponha novas funcionalidades.

Para dúvidas e parcerias, entre em contato com a comunidade em nosso Discord ou envie um e-mail para **comunidade@dexblog.com**.
