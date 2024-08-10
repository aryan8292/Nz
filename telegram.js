import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    const chat_id = message.chat.id;
    const text = message.text;

    const token = process.env.TELEGRAM_BOT_TOKEN;

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id,
      text: `You said: ${text}`,
    });

    res.status(200).send('Message sent');
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
