# Cougar

## Índice

- [O que é o Cougar?](#O-que-e-o-Cougar)
- [Instalação da API](#instalação-da-api)
- [Rotas](#rotas)
- [Agradecimento](#agradecimento)



# O que é o Cougar?

É um webservice construído para ajudar profissionais da área de HelpDesk e suporte de uma empresa utilizando IA generativa.

A primeira funcionalidade é a Integração com a apiOpenAI, que fornece uma poderosa IA que filtra a dúvida do usuário e retorna a solução mais compatível com o problema.

A aplicação também contém o poderoso algoritmo TF-IDF que calcula a similaridade das palavras geradas pela IA e as cadastradas no banco de dados.

O istema também é de fácil integração tendo em vista que para cadastrar uma grande quantidade de dados é só passar uma planílha excel com os problemas e soliuções cadastrados.

## Instalação da API

### Começe clonando o repositório da seguinte maneira:

```
git clone https://github.com/guilhermeandradee/Cougar.git
```


### Entre no diretório backend e instale as dependências:


```
cd backend
```

```
npm install
```

### Crie um arquivo .env na raiz do diretorio backend com as seguintes informações:

```
MONGODB_URI=urlDoSeuBancoMongoDb

SERVER_PORT=PortaDeSuaPreferência (padrão 8080)

API_OPENAI_KEY='' (pode estar vazia ou com a sua API key)
```

### Volte para o diretório raiz:

```
cd ..
```

### Entre no diretório frontend e instale as dependências:

```
cd frontend
```
```
npm install
```

### Volte para o diretório raiz, atualize as dependências e digite o comando que roda a aplicação:

```
cd ..
```
```
npm install
```
```
npm run start
```
### Portas:
O frontend por padrão roda na rota:
```
http://localhost:5173
```
E o backend
```
http://localhost:8080
```

## Rotas

| Rota                           | Método | JSON Enviado                                                                                              |
|--------------------------------|--------|-----------------------------------------------------------------------------------------------------------|
| `/save-problem`                | POST   | `{ "categoria": "", "descricao": "", "resolucao": "" }` |
| `/problem/:id/update`          | PUT    | `{ "categoria": "", "descricao": "", "resolucao": "" }` |
| `/problems-quantity?page=1&limit=5` | GET    | N/A (Requisição sem corpo JSON)                                                                          |
| `/import-problems`             | POST   | `Arquivo Excel contendo problemas a serem importados`                                                     |




## Agradecimento

 Aproveite todas as funcionalidades e retorne um feedback para fazer um dev feliz! 🌟