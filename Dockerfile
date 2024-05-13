# Usa a imagem oficial do Node.js como base
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências do Node.js
RUN npm install

# Copia os arquivos da aplicação React para o diretório de trabalho
COPY . .

RUN chmod -R 777 node_modules

# Compila a aplicação React (se necessário)
RUN npm start

# Expõe a porta 3000 para o servidor Node.js
EXPOSE 3000

# Define o comando para iniciar o servidor Node.js
CMD ["node", "server.js"]
