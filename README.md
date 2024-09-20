
# Desafio Marlin

Projeto realizado como resposta ao desafio envolvendo consumo de API utilizando o Angular CLI. 

## 1️⃣​ Funcionalidade
Para rodar o projeto em seu computador será necessário fazer um `git clone` ou fazer o download dos arquivos.

Após isso, basta rodar o seguinte comando: 
- `npm install` - para fazer download dos módulos do node
- `npm start` - para startar a aplicação
- clicar no link: `http://localhost:4200/` que será exibido no seu terminal

## 2️⃣​ Objetivo
Criar um layout estático e responsivo, seguindo um modelo pré definido, utilizando o Angular CLI. Após isso consumir a API, exibindo as informações da mesma na tela e também utilizar os métodos de requisição HTTP para coletar os dados da API e inserir na tela. 

####  1° Etapa - Criação do Layout
​
Durante o desenvolvimento utilizei meus conhecimentos em HTML e CSS para criar da melhor forma um layout agradável/funcional que seguisse de perto o modelo pré definido, também seguindo a recomendação de uso de fonte (Open Sans). No projeto, aproveitei ao máximo os recursos do angular de componentização, para criar os componentes necessários e assim deixar o código o mais legível possível. 

#### 2° Etapa - Consumo da API e exibição dos dados
Utilizei o padrão MVC na construção do projeto, definindo um modelo Noticia para receber os dados da API (`id, image, title, body`) e instanciar um novo objeto notícia sempre que chamar um método de requisição.

O consumo da APi foi feito usando o `HttpClient` do Angular, que fornece os métodos para realizar requisições HTTP (`GET, POST, PUT, DELETE`) de forma assíncrona, retornando observáveis (`Observable`), permitindo que o código seja fácil de lidar com as respostas da API.

Por meio de injeção de dependências no meu arquivo noticia.service.ts utilizando o `@Injectable({ providedIn: 'root' })`, permiti que toda a aplicação tivesse acesso ao serviço. 

Por meio da url que contém o endpoint da API, pude implementar os métodos HTTP `GET, POST` e como bônus os métodos `PUT e DELETE`e defini as rotas de acesso associadas aos meus componentes, passando (se necessário) os dados para utilizar esses métodos.

Endpoints | URL               | Descrição                                       | Corpo da solicitação  | Corpo da resposta |
----------| ------------------| ------------------------------------------------|-----------------------|-------------------|
GET       | /api/v1/post      | Obter todas as notícias                         | Nenhum                | Lista de notícias |
GET       | /api/v1/post/{id} | Obter uma notícia por identificador             | Nenhum                | Uma notícia       |
POST      | /api/v1/post      | Adicionar uma notícia                           | Dados da notícia      | Nenhum            |
PUT       | /api/v1/post{id}  | Atualizar os dados de uma notícia existente     | Dados da notíca       | Nenhum            |
DELETE    | /api/v1/post{id}  | Excluir uma notícia                             | Nenhum                | Nenhum            |


#### Métodos de requisição implementados: 
![metodos](https://github.com/user-attachments/assets/3e088e43-d820-4a17-9a5f-d250e4b372ff)

## 3️⃣​ Instruções e resultados
Para utilizar as funcionalidades, basta abrir o link exibido no terminal. Após isso verá todas as notícias listadas na página inicial, clicando no botão **Ler mais**, você terá acesso ao conteúdo da notícia individual. 
Para **cadastrar** uma notícia basta clicar no link do menu _Inserir uma notícia_ e depois no item do menu _Cadastrar notícia_, daí basta fornecer os dados corretos para poder visualizá-la. 

Ao retornar, poderá listar todas as notícias e também utilizar os outros métodos `PUT e DELETE`

| ![inicio](https://github.com/user-attachments/assets/219e77ac-3c17-4aae-89a7-51329bfd655c) | ![noticia](https://github.com/user-attachments/assets/e872b944-6f3c-4c8a-a90f-663c94ee6b4e) |
|------------------------------|------------------------------|
|![lista](https://github.com/user-attachments/assets/a6ba4176-a961-4039-8a28-abe663d96af9) | ![cadastro](https://github.com/user-attachments/assets/107eef47-6ba4-49bd-9c22-6228359191ec)  |

