import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>DEX BLOG - Documentação</span>,
  project: {
    link: 'https://github.com/dex-freitas/dex-blog'', // Link para o repositório
  },
  chat: {
    link: 'https://discord.com'', // Link para um chat se houver
  },
  docsRepositoryBase: 'https://github.com/dex-freitas/dex-blog/tree/main'', // Link para a pasta docs no repo
  footer: {
    text: 'DEX BLOG - Documentação Técnica'',
  },
}

export default config
