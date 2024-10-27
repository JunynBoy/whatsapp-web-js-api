# API de Envio de Mensagens via WhatsApp
Esta API é projetada para facilitar o envio de mensagens via WhatsApp usando a biblioteca whatsapp-web.js. A API fornece dois endpoints principais: /ping para verificar a disponibilidade do servidor e /sendMessage para enviar mensagens via WhatsApp.

## Configuração
Antes de executar a aplicação, certifique-se de ter criado um arquivo .env na raiz do projeto com as seguintes variáveis de ambiente:
```
PORT=3000
```

## Instalação
Certifique-se de ter o Node.js e o npm instalados em seu ambiente. Para instalar as dependências, execute o seguinte comando no terminal:

```
npm install
```

## Execução
Para iniciar o servidor, execute o seguinte comando:
```
node index.js
```
O servidor será iniciado na porta especificada no arquivo `.env` ou na porta padrão 3000.

## Endpoints

### 1. Ping (Verificação de Disponibilidade)
* **Endpoint:** `/ping`
* **Método:** `GET`
* **Descrição:** Verifica se o servidor está ativo.
* **Resposta de Exemplo:**
```
{
  "pong": "pong"
}
```

### 2. Enviar Mensagem via WhatsApp
* **Endpoint:** `/sendMessage`
* **Método:** `POST`
* **Descrição:** Envia uma mensagem via WhatsApp para o número especificado.
* **Corpo da Solicitação:**
```
{
  "number": "551234567890",
  "message": "Olá, como está?"
}
```

### **Respostas Possíveis:**
* **Sucesso:**
```
{
  "message": "Success"
}
```

* **Erro:**

```
{
  "error": "Mensagem não enviada. Número inválido."
}
```

## Estrutura do Projeto

* **index.js:** Arquivo principal que configura e inicia o servidor express.
* **routes.js:** Define os endpoints da API.
* **clientWhatsapp.js:** Cria e exporta o cliente WhatsApp usando whatsapp-web.js.

## Observações

* Certifique-se de configurar corretamente as variáveis de ambiente no arquivo .env.
* A biblioteca whatsapp-web.js utiliza o QR Code para autenticação. O evento qr exibe o QR Code no console.

Sinta-se à vontade para expandir e adaptar a API conforme necessário para atender aos requisitos específicos do seu projeto.