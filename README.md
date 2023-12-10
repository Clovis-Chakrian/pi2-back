# RE-Duca BackEnd

O RE-Duca Back End é a api que faz as consultas dos dados para alimentar o front end do projeto.

## Para que serve?

Foi pensado em fazer consultas para o banco de dados direto do Front End, mas por sabermos que era uma má pratica do desenvolvimento em questões de segurança e também por sabermos que alguns firewall's bloqueariam essas chamadas, foi preferível o desenvolvimento de uma api simples com node e express que pudesse fazer essas consultas e retornar esses dados para o front end exibir.

## Tecnologias usadas

Para desenvolver essa api utilizou-se apenas o node e o framework express. Além disso, para realizar as consultas foi itilizada a biblioteca pg. Não foi vista necessidade de usar ferramentas mais complexas para isso, como um ORM tipo o Prisma, porque seria muito poder para pouco uso.

## Como rodar

Para rodar vai ser necessário ter o node instalado, baixar o código desse repositório e rodar, caso use npm: npm install | caso use yarn: yarn. Assim as bibliotecas serão instaladas, e após isso é preciso definir as variáveis de ambiente:
- USER
- HOST
- DATABASE
- PASSWORD
- PORT
Elas são importantes para que a conexão com o banco seja feita. Depois disso, é só rodar npm run start ou yarn start e o projeto estará rodando localmente na porta 3333.
