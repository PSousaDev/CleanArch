# Clean Architecture With NestJS and TypeORM

### **_[PT-BR]_**

#### Este repositório é um exemplo prático de como implementar a Clean Architecture no Nest.js, utilizando o TypeORM como framework de persistência. A Clean Architecture é uma abordagem que visa separar as responsabilidades e dependências do sistema em camadas distintas, facilitando a manutenção, teste e escalabilidade do código.

## Estrutura do Projeto
O projeto segue a seguinte estrutura:

```
src
├── app.module.ts
├── controllers
│   └── ...
├── core
│   ├── Dtos
│   │   └── ...
│   └── Abstracts
│   │   └── ...
│   └── Entities
│       └── ...
├── frameworks
│   └── ...
├── use-cases
│   └── ...
├── databases
│   └── ...
├── services
│   └── ...
├── app.module.ts
│
└── main.ts
```

### O arquivo app.module.ts é responsável por configurar e importar os módulos necessários do Nest.js.

### A pasta controllers contém os controladores da API, que recebem as requisições HTTP e chamam os casos de uso apropriados.

### A pasta core engloba as entidades do domínio, os DTOs (Data Transfer Objects) e as classes abstratas que são utilizadas pela aplicação.

    A subpasta dtos contém os DTOs utilizados para transferência e validação de dados entre as camadas.

    A subpasta abstracts contém classes abstratas que podem ser estendidas por outras classes da aplicação.

    A subpasta entities contém as entidades do domínio, que representam os objetos principais da aplicação.

### A pasta frameworks abriga qualquer biblioteca ou framework externo utilizado na aplicação.

### A pasta use-cases contém a implementação dos casos de uso da aplicação, que representam as ações específicas do sistema.


### A pasta services contém os serviços compartilhados pela aplicação, como autenticação, envio de e-mails, etc.

### O arquivo main.ts é responsável por iniciar o servidor Nest.js.


## Tecnologias Utilizadas

Nest.js: Framework para a construção de aplicativos Node.js eficientes e escaláveis.

TypeORM: ORM (Object-Relational Mapping) baseado em TypeScript para o acesso e manipulação de bancos de dados relacionais.

## Configuração e Execução
Siga os passos abaixo para configurar e executar o projeto:

- Certifique-se de ter o Node.js e o npm instalados em seu sistema.
- Clone este repositório: git clone https://github.com/PSousaDev/CleanArch.
- Acesse o diretório do projeto: cd CleanArch.
- Instale as dependências do projeto: npm install.
- Inicie o servidor: npm run start:dev.
- O servidor estará rodando em http://localhost:3000.

## Observação  
Usei sqlite apenas para facilitar a construção da arquitetura, é possivel utilizar qualquer tipo de banco pois mantive o padrão de utilizar todas as configurações do banco na pasta configuration e toda a utilização do banco dentro da pasta framework assim facilitando o entendimento e escalabilidade da aplicação 

### **_[EN]_**

### This repository is a practical example of implementing Clean Architecture in Nest.js, using TypeORM as the persistence framework. Clean Architecture is an approach that aims to separate the responsibilities and dependencies of the system into distinct layers, making code maintenance, testing, and scalability easier.

## Project Structure
The project follows the following structure:

```
src
├── app.module.ts
├── controllers
│   └── ...
├── core
│   ├── Dtos
│   │   └── ...
│   └── Abstracts
│   │   └── ...
│   └── Entities
│       └── ...
├── frameworks
│   └── ...
├── use-cases
│   └── ...
├── databases
│   └── ...
├── services
│   └── ...
├── app.module.ts
│
└── main.ts
```
### The app.module.ts file is responsible for configuring and importing the necessary modules in Nest.js.

### The controllers folder contains the API controllers, which receive HTTP requests and call the appropriate use cases.

### The core folder encompasses the domain entities, DTOs (Data Transfer Objects), and abstract classes used by the application.

      The dtos subfolder contains the DTOs used for data transfer and validation between layers.

      The abstracts subfolder contains abstract classes that can be extended by other classes in the application.

      The entities subfolder contains the domain entities that represent the main objects of the application.

### The frameworks folder houses any external libraries or frameworks used in the application.

### The use-cases folder contains the implementation of the application's use cases, which represent specific system actions.

### The services folder contains shared services for the application, such as authentication, email sending, etc.

### The main.ts file is responsible for starting the Nest.js server.

#### This structure helps ensure the separation of concerns between layers, allowing each layer to focus on its specific function.

## Technologies Used
Nest.js: A framework for building efficient and scalable Node.js applications.

TypeORM: A TypeScript-based ORM (Object-Relational Mapping) for accessing and manipulating relational databases.

## Configuration and Execution
Follow the steps below to configure and run the project:

- Ensure that Node.js and npm are installed on your system.
- Clone this repository: git clone https://github.com/PSousaDev/CleanArch.
- Navigate to the project directory: cd CleanArch.
- Install the project dependencies: npm install.
- Start the server: npm run start:dev.
- The server will be running at http://localhost:3000.

## Example Usage
After starting the server, you can interact with the API through the controllers defined in the src/controllers folder. Each controller defines routes and handles the specific business logic for that route, calling the appropriate use cases.

The example usage can be found in the src/use-cases folder. Each use case represents a specific action of the system and contains its own business logic.

## Observation 
I used SQLite just to facilitate the architecture's construction, but it's possible to use any type of database because I maintained the pattern of keeping all database configurations in the configuration folder and all database usage within the framework folder, thus facilitating understanding and scalability of the application.
