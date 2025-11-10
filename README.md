# Projeto de Testes E2E - Quero Passagem (Cypress + Playwright)
Este repositório contém um projeto de automação de testes End to End para o site queropassagem.com.br
## Tecnologias Utilizadas:
* Node.js
* Cypress
* Playwright

## Cenários de Testes Cobertos:
### Testes com Playwright (Typescript):
1. Login com sucesso:
   * Descrição: Valida o fluxo de login de um usuário existente.
   * Passos: Acessa a página, abre o modal de login, insere email e senha válidos, clica no botão de entrar e verifica o sucesso do login.
2. Busca sem origem:
   * Descrição: Valida a regra do negócio que impede a busca sem uma origem.
   * Passos: Acessa a página, preenche o campo destino, seleciona uma data de ida, clica em buscar e verifica se a mensagem de erro foi exibida.
3. Busca com origem, destino e data definidos:
   * Descrição: Simula a busca de passagens.
   * Passos: Acessa a página, preenche o campo de origem e de destino, seleciona uma data de ida, clica em buscar e verifica se a página de resultados foi carregada.

### Testes com Cypress (Javascript):
1. Login com sucesso:
   * Descrição: Valida o fluxo de login de um usuário existente.
   * Passos: Acessa a página, abre o modal de login, insere email e senha válidos, clica no botão de entrar e verifica o sucesso do login.
2. Login sem sucesso:
   * Descrição: Valida a mensagem de erro correta ao informar as credenciais erradas.
   * Passos: acessa a página, abre o modal de login, insere email válido, insere a senha errada, clica no botão entrar e verifica se a mensagem de erro é exibida.

 ## Pré Requisitos:
 ### Antes de começar, garanta que você tenha os seguintes softwares instalados:
 * Node.js (de preferência o v18 ou superior)
 * npm (instalado automaticamente com o node)

 ## Instalação:
 ### Siga os passos:
 1. Copie este repositório. Abra seu terminal ou prompt e use o comando git para clonar o projeto.

    ``` bash
     git clone [https://github.com/mariasalesss/mentoria.git](https://github.com/mariasalesss/mentoria.git)
    
 3. Navegue até a pasta do projeto.
  
    ```bash
    cd mentoria
 5. Instale todas as dependências. Este comando vai instalar todas as ferramentas necessárias.

    ```bash
    npm install

 ## Como Rodar os Testes:
  Você pode executar os testes separadamente.
  
 ### Executando Cypress:
 **Modo Interativo (Recomendado para desenvolver):**
 1.  Abra o Cypress:

  ```bash
  npx cypress open
 ````   
 2.  Selecione "E2E Testing" na interface.
 3.  Escolha o navegador e o arquivo que deseja testar.

 **Modo Headless (rodar tudo no terminal):**
 ```bash
npx cypress run
```
 ### Executando Playwright:
 **Instale os navegadores do playwright (você irá fazer isso apenas na primeira vez, nas outras não é necessário):**
 ```bash
npx playwright install
 ```
 **Modo Headless (rodar tudo no terminal):**
```Bash
npx playwright test
```
 

