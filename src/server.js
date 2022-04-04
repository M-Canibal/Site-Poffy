// Configuração do server 
// !IMPORTAR REPOSITÓRIOS
const express = require('express')
const server = express();
const nunjucks = require('nunjucks')
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require('./pages')

// !Configurar Nunjucks (TEMPLATE ENGINE)
nunjucks.configure('src/views', {
    express: server, // Falar qual express nós estamos utilizando
    noCache: true,
})

server.use(express.static("public")) // Funcionalidade, configuração do servidor || Está usando os arquivos estáticos (Css, scripts, imagens)
// !Rotas da aplicação
.use(express.urlencoded({ extended: true })) // Receber os dados do req.body
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) // Precisa adicionar o método POST para o FORM do Give-Classes
// !Start do Servidor
.listen(5500);


// !Formato utilizado para explicar como foi realizado o uso do GET
// .get("/", (req, res) => {   // Tem que colocar a requisição (req) e a resposta(res)
//     return res.sendFile(__dirname + "/views/index.html") // O que vai mostrar em tela (resposta vai enviar uma resposta) // SENDFILE é pra enviar o arquivo, TROCA-SE por RENDER(renderizar) é do nunjucks
// }) // Puxa a página que você quer mandar
// .get("/study", (req, res) => {
//     return res.sendFile(__dirname + "/views/study.html") // O que vai mostrar em tela (resposta vai enviar uma resposta)
// })
// .get("/give-classes", (req, res) => {
//     return res.sendFile(__dirname + "/views/give-classes.html") // O que vai mostrar em tela (resposta vai enviar uma resposta)
// })

//.listen(5500) // Puxa o express, coloca ele pra ouvir e abre na porta 5500;


