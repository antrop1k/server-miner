const express = require('express');
const bodyParser = require('body-parser'); // Для обработки JSON в теле запроса
const app = express();
const port = 3000;

// Middleware для обработки JSON
app.use(bodyParser.json());

app.post('/your-server-endpoint', (req, res) => {
  // req.body содержит данные, отправленные с клиента
  const bombValue = req.body.param1;
  const moneyValue = req.body.param2;

  // Вывод параметров в консоль сервера
  console.log('Получен параметр 1:', bombValue);
  console.log('Получен параметр 2:', moneyValue);

  // Отправка ответа клиенту (по желанию)
  res.json({ message: 'Данные успешно получены!' });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});