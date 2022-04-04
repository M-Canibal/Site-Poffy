const Database = require("sqlite-async")  // importar o sqlite

function execute (db) {
    // !Criar as tabelas do banco de dados
    return db.exec(`
        CREATE TABLE IF NOT EXISTS proffys (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            name TEXT,
            avatar TEXT,
            whatsapp TEXT,
            bio TEXT
        );

        CREATE TABLE IF NOT EXISTS classes (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            subject INTEGERs,
            cost TEXT,
            proffy_id INTEGER
        );

        CREATE TABLE IF NOT EXISTS class_schedule (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            class_id INTEGER,
            weekday INTEGER,
            time_from INTEGER,
            time_to INTEGER
        );
    `)
}

// id (nome da coluna) TIPO INTEIRO, CHAVE PRIMÁRIA (Identificador único de cada id), auto incremental
// Última coluna cadastrada não leva vírgula

// !Usado apenas para abrir o arquivo
module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // open para o abrir o banco de dados , .then(declarar função)

