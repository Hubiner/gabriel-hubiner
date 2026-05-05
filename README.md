# Gabriel Hubiner — Portfolio

Portfolio pessoal construído com Next.js 16, apresentando projetos reais em produção, stack técnica e canais de contato.

🌐 **Live:** _adicione a URL após o deploy na Vercel_

---

## Stack

- **Next.js 16** (App Router · Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 3** — estilização utilitária
- **Framer Motion 12** — animações
- **lucide-react** — ícones
- **clsx** + **tailwind-merge** — composição de classes

---

## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com CTA "Ver Projetos", "Entrar em Contato" e "Copiar E-mail" |
| **Sobre** | Bio, foto de perfil, stats e cards de destaque |
| **Skills** | Stack organizada em Backend, Frontend, Banco de Dados e Ferramentas & DevOps |
| **Projetos** | Catálogo paginado de projetos reais — links para repositório no GitHub e site em produção |
| **Contato** | GitHub, LinkedIn, e-mail, WhatsApp + card terminal-style com status, response time e localização |

---

## Rodando localmente

### Pré-requisitos

- **Node.js 20+** (Next 16 não suporta Node 18)
- **npm** (vem com o Node)

### 1. Clonar e instalar

```bash
git clone https://github.com/Hubiner/<este-repo>.git
cd <este-repo>
npm install
```

> Este projeto não usa variáveis de ambiente. Não precisa criar `.env.local`.

### 2. Servidor de desenvolvimento

```bash
npm run dev
```

Acesse `http://localhost:3000`. Hot reload automático via Turbopack.

### 3. Build de produção (opcional, para testar localmente)

```bash
npm run build
npm run start
```

---

## Scripts

| Comando | Ação |
|---|---|
| `npm run dev` | Servidor de desenvolvimento (Turbopack, hot reload) |
| `npm run build` | Build de produção otimizado |
| `npm run start` | Servidor de produção (requer `build` antes) |
| `npm run lint` | Verifica problemas com ESLint |

---

## Deploy na Vercel

1. Faça push do repositório para o GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Vercel detecta automaticamente Next.js — deixe os defaults.
4. Clique em **Deploy**.

Cada push na branch `main` dispara redeploy automático.

> Sem variáveis de ambiente para configurar — o site é 100% estático/SSG.

---

## Estrutura do projeto

```
.
├── app/
│   ├── icon.svg          # Favicon (gerado pelo Next App Router)
│   ├── globals.css       # Tailwind directives + estilos base
│   ├── layout.tsx        # Layout raiz + metadata + fontes
│   └── page.tsx          # Homepage (composição das seções)
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   ├── projects.ts       # Lista de projetos exibidos
│   └── skills.ts         # Categorias e níveis de skill
├── lib/
│   └── utils.ts          # Helpers (cn para Tailwind)
├── public/
│   └── img78.png         # Foto de perfil
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

---

## Customização rápida

- **Adicionar projeto:** edite `data/projects.ts` (paginação ajusta automaticamente; 6 projetos por página).
- **Atualizar skills:** edite `data/skills.ts` (níveis: `learning`, `intermediate`, `proficient`).
- **Trocar foto:** substitua `public/img78.png` mantendo o mesmo nome, ou ajuste o `src` em `components/About.tsx`.
- **Atualizar contatos:** `components/Contact.tsx`, `components/Hero.tsx` e `components/Footer.tsx`.

---

## Licença

Uso pessoal. Sinta-se livre para se inspirar — código aberto, atribuição apreciada.
