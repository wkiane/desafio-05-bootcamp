# Aplicação para gerenciamento de transações financeiras

### Packages usados no projeto:

- Express - Para criação da API
- Jest - Para testes automatizados
- Nodemon - Para reinicialização automática do servidor a cada mudança
- Multer - Para upload de arquivos
- Csvtojson - Para tratamento de arquivos csv
- Express async errors - Para tratamento de exceções em requisições assíncronas


### Rotas

GET `/transactions` listagem de transações

POST `/transactions` criação de uma nova transação

DELETE `/transactions/:id` remover uma transação

POST `/transactions/import` importar transações de um arquivo csv
