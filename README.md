# 📌 Projeto Final – Bloco 01  
Aplicação Modular em Node.js + TypeScript

---

## 📖 Visão Geral

Este repositório contém o desenvolvimento completo do **Projeto Final do Bloco 01**, uma aplicação backend construída em **TypeScript**, utilizando **Node.js** e conceitos fundamentais de arquitetura de software.

O projeto foi criado de forma iterativa, com diversas branches organizadas para implementar **cada etapa da evolução do código** — desde a estrutura inicial até a implementação de controllers, lógica de negócio, modularização e preparação para camadas futuras (como serviços e persistência de dados).

Ele demonstra a progressão técnica do desenvolvimento e a aplicação prática de boas práticas de engenharia de software.

---

## 🎯 Objetivos do Projeto

Os principais objetivos deste projeto foram:

- Estruturar uma aplicação backend de forma modular
- Aplicar arquitetura em camadas (Controller, Service, Repository)
- Utilizar **TypeScript** com tipagem estática e organização de código
- Demonstrar evolução do código por meio de branches específicas
- Preparar o projeto para expansões futuras (BD, API REST, testes automatizados)

---

## 🧠 Problemas Resolvidos

Durante o desenvolvimento foram enfrentados e resolvidos desafios reais de organização e estruturação de código, incluindo:

- Separação clara entre interface de entrada, lógica de controle e lógica de negócio
- Implementação de fluxo centralizado de dados via controller
- Modularização do código para evoluções futuras
- Base de projeto preparada para integração com banco de dados
- Uso de **TypeScript para segurança e manutenção do código**

Esses aspectos mostram capacidade prática para desenvolver aplicações backend robustas em um ambiente real.

---

## 🏗 Arquitetura do Sistema

A aplicação foi projetada seguindo princípios de **arquitetura em camadas** e **separação de responsabilidades**, permitindo organização clara do fluxo de dados, facilidade de manutenção e escalabilidade futura.

O sistema é estruturado para evoluir de forma progressiva, possibilitando integração com novas camadas (persistência, API web, autenticação, etc.) sem impactar o núcleo da aplicação.

### 🔹 Visão Geral da Arquitetura

Camada de Apresentação (CLI / Interface do Usuário)
↓
Camada Controller
↓
Camada de Regras de Negócio
↓
Camada de Serviços (expansão futura)
↓
Camada de Persistência / Banco de Dados (futuro)


### 🔹 Responsabilidades por Camada

**Interface / Entrada do Usuário**
- Recebe comandos e interações
- Exibe resultados ao usuário
- Não contém regras de negócio

**Controller**
- Interpreta entradas do usuário
- Controla o fluxo da aplicação
- Direciona chamadas para a lógica apropriada
- Centraliza o gerenciamento das operações

**Regras de Negócio**
- Contém a lógica funcional do sistema
- Processa dados e aplica validações
- Independe da interface ou do banco de dados

**Serviços (planejado)**
- Orquestra operações complexas
- Integra diferentes componentes do sistema

**Persistência de Dados (planejado)**
- Responsável pelo armazenamento e recuperação de dados
- Abstrai o acesso ao banco de dados

---

### 🔹 Princípios Arquiteturais Aplicados

✔ Separação de responsabilidades  
✔ Baixo acoplamento entre componentes  
✔ Alta coesão interna das camadas  
✔ Modularização do código  
✔ Escalabilidade estrutural  
✔ Preparação para testes automatizados  

Essa arquitetura permite que o sistema cresça de forma sustentável e organizada, seguindo padrões utilizados em aplicações backend profissionais.

---

## ⚙️ Tecnologias e Ferramentas

| Tecnologia | Uso no Projeto |
|------------|----------------|
| **Node.js** | Ambiente de execução JavaScript |
| **TypeScript** | Tipagem estática e segurança do código |
| **npm** | Gerenciamento de dependências |
| **Git/GitHub** | Versionamento e histórico de evolução |
| **Arquitetura modular** | Estrutura organizacional e escalabilidade |

---

## 🔄 Fluxo de Funcionamento

1. O usuário escolhe ações pelo menu principal
2. A entrada é enviada para o **Controller**
3. O Controller interpreta e chama lógica apropriada
4. A lógica é processada internamente
5. O resultado é exibido ao usuário no terminal

---

## 💡 Decisões Técnicas

### ✔ Uso de TypeScript

- Tipagem forte para reduzir erros em tempo de execução
- Maior produtividade com autocompletar e verificações do compilador
- Código mais legível e seguro

### ✔ Arquitetura Modular

- Facilita manutenção e colaboração
- Isola responsabilidades por camada
- Permite futuras integrações de banco de dados, serviços externos, testes

### ✔ Organização por Branches

A utilização de múltiplas branches representa a evolução do código e boas práticas de controle de versão.

---

## 📊 Resultados do Projeto

Este projeto alcançou resultados concretos:

✔ Arquitetura funcional de backend  
✔ Código organizado e modular  
✔ Configuração profissional de TypeScript  
✔ Preparação para inclusão de persistência de dados  
✔ Código apto para testes automatizados e deploy  

---

## 📚 Aprendizados e Crescimento

Durante a construção do projeto, consolidei:

✔ Uso de TypeScript em backend  
✔ Modularização de sistemas  
✔ Pensamento arquitetural  
✔ Controle de fluxo e lógica de aplicação  
✔ Uso eficaz de Git e branches para evolução incremental  

Estes conhecimentos são amplamente aplicáveis em projetos profissionais.

---

## 🚀 Possíveis Evoluções Futuras

- Conexão com um banco de dados (PostgreSQL, SQLite, MongoDB)
- Implementação da camada de serviços completa
- API REST com Express
- Testes unitários e de integração automatizados
- Deploy em ambiente de produção (Heroku, AWS, Render, Vercel)
- Dockerização da aplicação

---
## 🛠️ Como Executar o Projeto

1. **Clonar o repositório**

``bash
git clone https://github.com/Pedro-gomes2/projeto_final_bloco_01.git

2. **Instalar dependências**

npm install

3. **Rodar o projeto em desenvolvimento**

npm start

---

---

## 👨‍💻 Autor

** João Pedro Gomes**  
Desenvolvedor backend em formação, com foco em arquitetura de software, organização de sistemas escaláveis e boas práticas de engenharia de software.

Este projeto representa parte da minha evolução prática no desenvolvimento de aplicações estruturadas, aplicando conceitos fundamentais de design de software e construção de sistemas modulares.

📌 Áreas de interesse:
- Desenvolvimento Backend
- Arquitetura de Software
- TypeScript e Node.js
- APIs e Sistemas Escaláveis
- Boas práticas de engenharia de software

---

## 📜 Licença

Este projeto está licenciado sob a **MIT License**.

Isso significa que o código pode ser utilizado, modificado e distribuído livremente, desde que seja mantido o aviso de copyright original.

Consulte o arquivo `LICENSE` para mais detalhes.
