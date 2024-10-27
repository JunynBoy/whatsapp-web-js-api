const express = require("express");
const cors = require("cors");
const createWhatsappClient = require("./clientWhatsapp");
const adjustNumber = require("./utils/adjustNumber");
const whatsappClient = createWhatsappClient();

module.exports = (app) => {
  app.use(express.json(), cors());
  
  app.get("/ping", (req, res) => {
    res.status(200).send({ pong: "pong" });
  });
  
  app.post("/sendMessage", async (req, res) => {
    const { number, message } = req.body;
  
    try {
      const newNumber = adjustNumber(number);
      whatsappClient.sendWhatsappMessage(newNumber, message);
      res.status(200).send({ message: "Success" });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  });
};
