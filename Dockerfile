FROM node:24-alpine
WORKDIR /app
COPY . .
RUN npm install --omit=dev
CMD ["npm", "start"]
EXPOSE 3000
