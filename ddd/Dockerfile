FROM node:18.5

WORKDIR /aluno
RUN npm i typescript --save-dev -y 
RUN npm i tslint --save-dev -y
RUN chmod -R 777 .
RUN npm i -D jest @types/jest ts-node --save-dev -y
RUN npm i -D @swc/jest @swc/cli @swc/core -y