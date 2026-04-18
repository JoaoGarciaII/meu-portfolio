# Portfolio JG

Portfólio pessoal de João Garcia — desenvolvido com React + Tailwind CSS + Vite.

## Estrutura de Pastas

```
portfolio-jg/
├── public/
│   └── favicon.svg              # Ícone da aba do navegador "Portfolio JG"
├── src/
│   ├── assets/
│   │   └── images/              # Coloque aqui sua foto e imagens dos projetos
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho com logo, nome e navegação
│   │   ├── Hero.jsx             # Bloco com seu nome principal
│   │   ├── About.jsx            # Sobre você + espaço para foto
│   │   ├── Skills.jsx           # Habilidades com bolinhas de nível (1-5)
│   │   ├── Projects.jsx         # 3 cards de projetos
│   │   ├── Contact.jsx          # Email, localização e redes sociais
│   │   └── Footer.jsx           # Rodapé com copyright
│   ├── App.jsx                  # Componente raiz que monta tudo
│   ├── index.css                # Tailwind base
│   └── main.jsx                 # Entry point React
├── index.html                   # HTML base com link para favicon
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Comandos para rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Subir servidor de desenvolvimento
```bash
npm run dev
```

Abra http://localhost:5173 no navegador.

### 3. Build para produção
```bash
npm run build
```

## O que preencher depois

- **Sua foto**: Salve em `src/assets/images/profile.jpg` e atualize `About.jsx`
- **Imagens dos projetos**: Salve em `src/assets/images/` e atualize `Projects.jsx`
- **Títulos e descrições dos projetos**: Edite o array `projects` em `Projects.jsx`
- **Links dos projetos**: Edite o campo `link` em `Projects.jsx`
- **LinkedIn, GitHub, WhatsApp**: Edite os campos `href` em `Contact.jsx`