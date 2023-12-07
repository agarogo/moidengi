import React, { useState } from "react";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    // Логика отправки сообщения на сервер и получения ответа от чат-бота
    // Используйте API запросы или другие методы обмена данными с сервером
    // Обновите messages соответствующим образом
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input
        type="text"
        value={inputMessage}
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Отправить</button>
    </div>
  );
};

export default Chat;