# Используем официальный Node.js образ как базовый
FROM node:18-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код
COPY . .

# Компилируем TypeScript в JavaScript
RUN npx tsc

# Устанавливаем простой HTTP сервер для раздачи статических файлов
RUN npm install -g http-server

# Открываем порт 8080
EXPOSE 8080

# Запускаем HTTP сервер для раздачи файлов из папки src
CMD ["http-server", "src", "-p", "8084"]