<h1>To-Do List Project</h1>
<p>Projeto simples de lista de tarefas desenvolvido em TypeScript, um app leve para criar, marcar como feita e remover tarefas. Os dados são mantidos na pasta data/ (formato JSON) e o código‑fonte em src/.</p>
<h2>Sobre o projeto</h2>
<p>Este é um projeto de lista de tarefas (To‑Do List) criado para demonstrar conceitos básicos de organização de código em TypeScript, persistência simples de dados (JSON) e fluxo de build/execução. Ele é intencionalmente minimalista para facilitar modificações e estudos.</p>
<h2>Funcionalidades</h2>
<ul>
  <li>Criar nova tarefa</li>
  <li>Marcar tarefa como concluída</li>
  <li>Remover tarefa</li>
  <li>Persistência simples de dados na pasta data/ (JSON)</li>
  <li>Código fonte em TypeScript (transpilado para dist/)</li>
</ul>
<h2>Stack Tecnológica</h2>
<ul>
  <li>TypeScript</li>
  <li>Node.js (para rodar e build)</li>
</ul>
<h2>Pré-requisitos</h2>
<p>Antes de começar, certifique‑se de ter instalado:</p>
<ul>
  <li>Node.js (versão 14+ recomendada; 16 ou 18 são ótimas escolhas)</li>
  <li>npm (vem junto com Node) ou yarn</li>
</ul>
<h2>Instalação (passo a passo)</h2>
<ol>
  <li>Clone o repositório:</li>

```bash
  git clone https://github.com/Leonel-p-a/to-do-list-project.git
  cd to-do-list-project
```

<li>Instale as dependências:</li>

```bash
  npm install
```

<li>Verifique os scripts disponíveis (útil para confirmar os comandos do projeto):</li>

```bash
  npm run
```

Se npm run listar dev, build ou start, use esses scripts conforme indicado abaixo. Caso contrário, siga as instruções da seção Como rodar.
</ol>

<h2>Como rodar (dev e produção)</h2>

```bash
  # modo desenvolvimento (watch):
  npm run dev


  # gerar build (transpilar TS para JS):
  npm run build
  
  
  # rodar a versão compilada (produção):
  npm start
```

<h2>Estrutura de pastas (visão geral)</h2>
<p>Conteúdo presente no repositório:</p>
  
```bash
  .
  ├── data/ # dados persistidos (JSON)
  ├── dist/ # build / código transpilado
  ├── node_modules/ # dependências instaladas
  ├── src/ # código-fonte em TypeScript
  ├── .gitignore
  ├── LICENSE # Licença MIT
  ├── package-lock.json
  ├── package.json
  └── tsconfig.json
```

<h2>Como contribuir</h2>
<ol>
  <li>Faça um fork deste repositório</li>
  <li>Crie uma branch com sua feature ou correção: git checkout -b feat/nome-da-feature</li>
  <li>Commit suas mudanças: git commit -m "Descrição curta da mudança"</li>
  <li>Suba para o seu fork: git push origin feat/nome-da-feature</li>
  <li>Abra um Pull Request descrevendo a alteração</li>
</ol>

Dicas: descreva claramente o que foi feito, inclua screenshots (se for UI) e explique como testar.

<h2>Licença</h2>

[MIT](https://choosealicense.com/licenses/mit/)

