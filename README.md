# serEducacional-FullStack

Bem vindo ao app de lista de contatos!

Este projeto foi feito em menos de 24 horas, do momento em que recebi a mensagem até às 17h de 17/09

Para rodar em sua máquina, assegure-se que você possue um arquivo
 ```.env``` com as configurações do seu Mysql. O arquivo ```config.js``` 
na pasta database possui os parametros que ele pede do .env.
Você pode inicializar o mysql em sua máquina
 rodando no terminal ```sudo systemctl start mysql```.
Na pasta back-end e front-end, execute ```npm i``` respectivamente.
Na pasta principal, rode npm run db:reset para iniciar o Sequelize
Logo após, inicialize os dois com ```npm start``` para cada pasta.
Caso prefira, você pode rodar o script ```npm run dev``` na pasta principal
E automaticamente rodar os dois processos.
As rotas de edição e deletar contatos não foram finalizadas.
A rota de busca de dados está implementada.
