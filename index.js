const express = require("express");

const app = express();

app.set('view engine', 'ejs');

/*app.get("/", function (req, res) {
  res.send("<h1>bem vindo ao meu primeiro site em node.js</h1>");
});

 app.get("/2", function (req, res) {
  res.send("<h1>bem vindo a segunda pagina</h1>");
}); */

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/clientes", function (req, res) {
  res.render("clientes");
})

app.get("/Produtos", function (req, res) {
  res.render("Produtos");
})

app.get("/Servicos", function (req, res) {
  res.render("Servicos");
})


const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(`ocorreu um erro ao iniciar o servidor! ${error}`);
  } else {
    console.log(
      `Servidor iniciado com sucesso no endereço http://localhost:${port}`,
    );
  }
});
