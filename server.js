const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'form'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL');
});

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Rota GET para servir o arquivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota POST para processar o formulário
app.post('/submit', (req, res) => {
    const { nome, email, senha, idade } = req.body;
    const query = `INSERT INTO usuarios (nome, email, senha, idade) VALUES (?, ?, ?, ?)`;

    connection.query(query, [nome, email, senha, idade], (err, result) => {
        if (err) throw err;
        res.send('Dados inseridos com sucesso!');
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});