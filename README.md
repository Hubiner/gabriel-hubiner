# Gabriel Hubin — Portfolio

Portfolio pessoal desenvolvido com Next.js 14, apresentando projetos, habilidades e formulário de contato integrado com EmailJS.

## Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS** — estilização
- **Framer Motion** — animações
- **EmailJS** — envio de mensagens sem backend

## Seções

| Seção | Descrição |
|---|---|
| Hero | Apresentação com links para GitHub, LinkedIn e currículo |
| About | Sobre mim |
| Skills | Tecnologias e ferramentas |
| Projects | Projetos com status (Planejado / Em Desenvolvimento / Em Breve) |
| Roadmap | Plano de evolução técnica |
| Contact | Formulário de contato via EmailJS |

## Rodando localmente

### Pré-requisitos

- Node.js 18+
- npm

### 1. Instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=seu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=seu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=sua_public_key
```

> As chaves são obtidas no painel do [EmailJS](https://www.emailjs.com/).  
> Sem elas, o formulário de contato exibirá erro ao enviar — o restante do site funciona normalmente.

### 3. Iniciar o servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## Scripts disponíveis

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com hot reload |
| `npm run build` | Build de produção |
| `npm run start` | Inicia o servidor de produção (requer build) |
| `npm run lint` | Verifica problemas de linting |

## Build de produção

```bash
npm run build
npm run start
```

## Deploy

O projeto está configurado para deploy na [Vercel](https://vercel.com). Para publicar:

1. Faça push do repositório para o GitHub
2. Importe o projeto na Vercel
3. Adicione as variáveis de ambiente (`NEXT_PUBLIC_EMAILJS_*`) nas configurações do projeto
4. Deploy automático a cada push na branch `main`

## Estrutura do projeto

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Roadmap.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts
│   └── skills.ts
├── lib/
├── public/
└── next.config.ts
```
