import React, { useState } from 'react';
import axios from 'axios';

const Sms = () => {
  const [input, setInput] = useState(''); // Состояние для хранения введенного пользователем текста
  const [output, setOutput] = useState(''); // Состояние для хранения ответа бота

  // Функция для отправки сообщения на бэкэнд и получения ответа от бота
  const sendMessage = async () => {
    try {
      const response = await axios.post('/api/bot-message', { message: input });
      setOutput(response.data.botResponse); // Предположим, что API возвращает ответ в поле botResponse
    } catch (error) {
      console.error('Ошибка при отправке сообщения: ', error);
    }
  };

  return (
    <div>
      <h1>Чат с ботом</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Введите ваше сообщение здесь..."
      />
      <button onClick={sendMessage}>Отправить</button>
      <div>
        <strong>Ответ бота:</strong>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default Sms;
