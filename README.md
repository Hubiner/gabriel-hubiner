# Gabriel Hubiner — Portfolio

Portfolio pessoal construído com Next.js 16, apresentando projetos reais em produção.

🌐 **Live:** https://gabriel-hubiner.vercel.app/

---

## Stack

- **Next.js 16** (App Router · Turbopack)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 3** — estilização utilitária
- **Framer Motion 12** — animações
- **lucide-react** — ícones
- **clsx** + **tailwind-merge** — composição de classes

---
<!--
## Seções

| Seção | Descrição |
|---|---|
| **Hero** | Apresentação com CTA "Ver Projetos", "Entrar em Contato" e "Copiar E-mail" |
| **Sobre** | Bio, foto de perfil, stats e cards de destaque |
| **Skills** | Stack organizada em Backend, Frontend, Banco de Dados e Ferramentas & DevOps |
| **Projetos** | Catálogo paginado de projetos reais — links para repositório no GitHub e site em produção |
| **Contato** | GitHub, LinkedIn, e-mail, WhatsApp + card terminal-style com status, response time e localização |

---
-->
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
<!--
> Este projeto não usa variáveis de ambiente. Não precisa criar `.env.local`.
-->
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


## Licença

Uso pessoal. Sinta-se livre para se inspirar — código aberto.
