FROM node:22.10.0

# Configurar diretório de trabalho
WORKDIR /usr/src/app

# Copiar arquivos do projeto
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Expor a porta do servidor
EXPOSE 3000

# Comando para iniciar o servidor
CMD ["npm", "run", "dev"]
