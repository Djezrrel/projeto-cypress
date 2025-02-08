# 🚀 Projeto de Automação de Testes com Cypress

Este projeto consiste em uma suíte de testes automatizados para a aplicação OrangeHRM, desenvolvida utilizando o framework Cypress. O objetivo é validar cenários de login (com credenciais válidas e inválidas) e atualização de perfil, utilizando dados aleatórios gerados pela biblioteca Chance.

## 📋 Descrição do Projeto

O projeto é dividido em dois arquivos principais de testes:

º **user.cy.js**: Testes de login bem-sucedido e atualização de informações do perfil.

º**userFail.cy.js**: Testes de tentativas de login com credenciais inválidas.
>
Além disso, o projeto utiliza:

º**userData.json**: Para armazenar credenciais de usuários válidos e inválidos.

º**selectors.js**: Para centralizar os seletores dos elementos da página, facilitando a manutenção do código.

º**Chance**: Biblioteca para geração de dados aleatórios, como nomes, números e strings.

## 🛠️ Tecnologias Utilizadas
**Cypress**: Framework de automação de testes end-to-end (E2E).

**Chance**: Biblioteca para geração de dados aleatórios.

**JavaScript**: Linguagem de programação utilizada para escrever os testes.

**JSON**: Para armazenar dados de teste (credenciais de usuários).

## 🧪 Casos de Teste Implementados
### 1. Login Bem-Sucedido e Atualização de Perfil
Realiza login com credenciais válidas.

Acessa a página de perfil e atualiza informações pessoais com dados aleatórios gerados pela biblioteca Chance.

Verifica se as alterações foram salvas com sucesso.

### 2. Tentativas de Login com Falha
Tenta fazer login com um nome de usuário inválido e uma senha válida.

Tenta fazer login com um nome de usuário válido e uma senha inválida.

Verifica se a mensagem de erro "Invalid credentials" é exibida.


## 🎯 Destaques do Projeto
**Geração de Dados Aleatórios**: Utilização da biblioteca Chance para preencher campos do perfil com dados dinâmicos.

**Validações Robustas**: Verificação de redirecionamentos e mensagens de sucesso/erro.

**Organização e Boas Práticas**: Uso de arquivos externos para armazenar dados e seletores, seguindo boas práticas de modularização.


## 🚀 Como Executar o Projeto
```bash
npm install
```
> **NOTE**
>>
> E Necessario **Node.js** instalado.
>>
> **Cypress** instalado globalmente ou localmente no projeto.

## ⚙️ Como rodar ?
```bash
# Abrir a interface do cypress
Npx cypress open

# Abrir pela linha de comando
Npx cypress run
````
