const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const client = new Client({
  authStrategy: new LocalAuth()
});

const createWhatsappClient = () => {
  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", () => {
    console.log(`[CLIENT]`.blue, "Cliente está pronto para uso!");
  });

  client.on("message", (message) => {
    if (message.body === "!ping") {
      client.sendMessage(message.from, "pong");
    }
  });

  client.initialize();

  const sendWhatsappMessage = (number, message) => {
    client.sendMessage(number, message).then(() => {
      console.log(`[SUCCESS]`.green, "Mensagem foi enviada com sucesso!");
    }).catch((err) => {
      console.error(`[ERROR]`.red, `Erro ao enviar mensagem: ${err}`);
    });
  };

  return { client, sendWhatsappMessage };
};

module.exports = createWhatsappClient;
