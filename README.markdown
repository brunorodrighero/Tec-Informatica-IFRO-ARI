# IFRO Ariquemes - Curso Técnico em Informática

Bem-vindo ao repositório do site oficial do **Curso Técnico em Informática Integrado ao Ensino Médio** do Instituto Federal de Educação, Ciência e Tecnologia de Rondônia (IFRO) - Campus Ariquemes. Este site, hospedado no GitHub Pages, apresenta informações sobre o curso, incluindo matriz curricular, turmas, conquistas, projetos, corpo docente e mais.

## Visão Geral

Este site foi desenvolvido para promover o Curso Técnico em Informática do IFRO Ariquemes, oferecendo uma experiência amigável tanto em dispositivos móveis quanto em desktops. Ele inclui:

- **Informações do Curso**: Detalhes sobre duração, vagas, modalidade e objetivos.
- **Matriz Curricular**: Tabela com disciplinas e cargas horárias.
- **Turmas**: Páginas dedicadas para as turmas 1A, 1B, 2A, 2B, 3A e 3B, onde os alunos podem compartilhar projetos e anúncios.
- **Conquistas e Projetos**: Destaques das realizações dos alunos.
- **Corpo Docente**: Informações sobre os coordenadores e link para a lista completa.
- **Formulário de Contato**: Integração com Formspree para envio de mensagens.

O site é totalmente estático, utilizando HTML, CSS (Tailwind CSS), e JavaScript, tornando-o compatível com o GitHub Pages.

## Estrutura do Repositório

```
ifro-ariquemes-informatica/
├── index.html              # Página principal do site
├── styles.css             # Estilos personalizados (complementa o Tailwind CSS)
├── scripts.js             # JavaScript para funcionalidades interativas (menu, formulário, etc.)
├── data.json              # Dados dinâmicos (disciplinas, projetos, depoimentos, eventos)
├── turmas/                # Páginas das turmas
│   ├── 1a.html
│   ├── 1b.html
│   ├── 2a.html
│   ├── 2b.html
│   ├── 3a.html
│   ├── 3b.html
├── assets/                # Recursos estáticos
│   ├── Logo IFRO Ariquemes-(branca)-horizontal 2.png  # Logo do IFRO Ariquemes
├── README.md              # Este arquivo
```

## Como Configurar

### Pré-requisitos
- Uma conta no GitHub.
- O logo `Logo IFRO Ariquemes-(branca)-horizontal 2.png` e `ifro-ico.png` e deve estar na pasta `assets/`.

### Passos para Hospedar no GitHub Pages

1. **Clone o Repositório**:
   ```bash
   git clone https://github.com/brunorodrighero/Tec-Informatica-IFRO-ARI.git
   cd Tec-Informatica-IFRO-ARI
   ```

2. **Verifique os Arquivos**:
   - Confirme que todos os arquivos listados na estrutura acima estão presentes.
   - Certifique-se de que `assets/Logo IFRO Ariquemes-(branca)-horizontal 2.png` e `assets/ifro-ico.png` está na pasta correta.

3. **Atualize o Formulário de Contato**:
   - O formulário usa o Formspree. Se precisar de um ID:
     - Crie uma conta no [Formspree](https://formspree.io).
     - Crie um novo formulário e obtenha o ID.
     - Atualize o `fetch` em `scripts.js` com o novo ID:
       ```javascript
       fetch('https://formspree.io/f/seu-novo-id', {
       ```

4. **Faça o Commit e Push**:
   ```bash
   git add .
   git commit -m "Configuração inicial do site"
   git push origin main
   ```

5. **Ative o GitHub Pages**:
   - Vá para as **Configurações** do repositório no GitHub.
   - Em **Pages**, selecione a branch `main` e a pasta `/ (root)`.
   - Clique em **Save**.
   - Após alguns minutos, o site estará disponível em `https://seu-usuario.github.io/Tec-Informatica-IFRO-ARI`.

## Como Atualizar o Site

### Atualizar Conteúdo Dinâmico
Os dados de **Disciplinas em Destaque**, **Projetos**, **Depoimentos** e **Eventos** estão no arquivo `data.json`. Para atualizar:

1. Abra `data.json`.
2. Edite as seções correspondentes. Exemplo: adicionar um novo evento:
   ```json
   {
     "name": "Feira de Tecnologia 2026",
     "date": "Set/2026",
     "description": "Exposição de projetos dos alunos."
   }
   ```
3. Salve, commit e push:
   ```bash
   git add data.json
   git commit -m "Adicionar novo evento"
   git push origin main
   ```

### Atualizar Páginas das Turmas
Cada turma tem uma página em `turmas/` (ex.: `turmas/1a.html`). Para adicionar conteúdo:

1. Abra o arquivo da turma (ex.: `turmas/1a.html`).
2. Edite as seções (Anúncios, Sobre a Turma, Projetos). Exemplo: adicionar um projeto:
   ```html
   <div class="bg-white p-4 md:p-6 rounded-lg shadow hover-scale">
     <h3 class="text-lg md:text-xl font-semibold mb-2">Aplicativo de Notas</h3>
     <p class="text-sm md:text-base">Um app para calcular médias escolares.</p>
     <a href="https://github.com/IFRO-Ariquemes/app-notas" class="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
   </div>
   ```
3. Salve, commit e push:
   ```bash
   git add turmas/1a.html
   git commit -m "Adicionar projeto na Turma 1A"
   git push origin main
   ```

### Atualizar Outras Seções
- **Matriz Curricular**: Edite a tabela no `index.html` (seção `#curriculum`).
- **Corpo Docente**: Atualize a seção `#faculty` no `index.html`.
- **Conquistas**: Modifique a seção `#achievements` no `index.html`.

Após qualquer alteração, faça commit e push para atualizar o site no GitHub Pages.

## Teste o Site

- Acesse `https://seu-usuario.github.io/Tec-Informatica-IFRO-ARI`.
- **Teste em Desktop**:
  - Verifique se o logo aparece na barra de navegação.
  - Confirme que todos os links (ex.: GitHub, IFRO) abrem em novas abas.
  - Teste o formulário de contato (seção Contato) para garantir o redirecionamento após envio.
- **Teste em Mobile**:
  - Confirme que o menu hamburger funciona (clique no ícone para abrir/fechar).
  - Verifique a legibilidade da tabela curricular (rolagem horizontal).
  - Teste os botões das turmas (seção Turmas) para interação fácil.

## Solução de Problemas

- **Logo Não Aparece**:
  - Verifique se `assets/logo-ifro-ariquemes.png` está no lugar correto.
  - Use as Ferramentas de Desenvolvedor do navegador (F12) para checar erros 404.
- **Menu Não Funciona no Mobile**:
  - Confirme que o JavaScript em `scripts.js` está carregando (verifique a tag `<script>` no `index.html`).
  - Teste em diferentes navegadores.
- **Formulário Não Envia**:
  - Verifique o ID do Formspree em `scripts.js`.
  - Certifique-se de que sua conta Formspree está ativa.
- **Conteúdo Dinâmico Ausente**:
  - Valide a sintaxe de `data.json` em [JSONLint](https://jsonlint.com).
  - Confirme que `fetch('data.json')` em `scripts.js` está funcionando.

## Contribuições

Sinta-se à vontade para abrir issues ou pull requests para melhorias, como:
- Adicionar novas seções (ex.: galeria de fotos).
- Melhorar a acessibilidade.
- Incluir mais projetos ou conquistas.

Para dúvidas, entre em contato via `ccti.ariquemes@ifro.edu.br`.

---

**IFRO Ariquemes - Curso Técnico em Informática**  
© 2025 Instituto Federal de Rondônia - Campus Ariquemes
