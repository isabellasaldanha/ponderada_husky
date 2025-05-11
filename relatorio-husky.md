# Relatório de configuração e execução dos hooks com Husky

Este relatório descreve as etapas realizadas para configurar os hooks `pre-commit` e `pre-push` no projeto, garantindo a automação de ações e a verificação antes do commit e push para o repositório remoto.

## 1. Instalação do Husky

O Husky foi instalado como dependência de desenvolvimento no projeto para gerenciar os hooks do Git.

```bash
npm install husky --save-dev
```

Após a instalação, o Husky foi configurado para permitir a utilização de hooks de Git.

## 2. Configuração do Husky

O Husky foi configurado para executar hooks específicos antes do commit e do push. Para isso, foram utilizados os seguintes comandos:

### 2.1. Ativar os hooks no Git

O comando abaixo foi utilizado para ativar os hooks de Git no repositório:

```bash
npx husky init
```

Este comando cria a pasta `.husky` no repositório com os arquivos de configuração necessários para o funcionamento dos hooks.


### 2.2. Adicionar o hook `pre-commit`

A primeira configuração de hook foi para o `pre-commit`, que executa o build do código antes de qualquer commit ser realizado.

<p align="center">
  <img src="/img/code-pre-commit.png" width="300" />
</p>

### 2.3. Adicionar o hook `pre-push`

O segundo hook configurado foi o `pre-push`, que executa uma verificação adicional antes de um push ser realizado. Este comando configura o Husky para rodar os testes (`npm test`) antes de permitir que o código seja enviado para o repositório remoto.

<p align="center">
  <img src="/img/code-pre-push.png" width="300" />
</p>

## 3. Teste dos hooks

Após a configuração, foi realizado alguns testes para verificar se os hooks estavam funcionando corretamente.

### 3.1. Teste do hook `pre-commit`

Foi feito um commit para testar a execução do hook `pre-commit`. O build foi executado antes do commit ser finalizado, verificando a qualidade do código.

**Teste com erro**
<p align="center">
  <img src="/img/pre-commit-erro.png" width="400" />
</p>

**Teste com sucesso**
<p align="center">
  <img src="/img/pre-commit-sucesso.png" width="400" />
</p>

### 3.2. Teste do hook `pre-push`

Após realizar o commit, um `git push` foi executado para testar o hook `pre-push`. O script de testes foi executado antes de permitir o envio do código para o repositório remoto.

<p align="center">
  <img src="/img/pre-push.png" width="400" />
</p>

## 4. Conclusão

O processo de configuração e teste dos hooks `pre-commit` e `pre-push` foi realizado com sucesso. A automação de tarefas e execução de testes antes de commits e pushes ajuda a manter a qualidade do código e garante que apenas código validado seja enviado ao repositório remoto.