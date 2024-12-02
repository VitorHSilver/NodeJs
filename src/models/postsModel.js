import conectarAoBanco from '../config/dbconfig.js';
// Conecta ao banco de dados MongoDB usando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts do banco de dados
export async function getTodosPosts() {
     // Obtém o banco de dados 'api-instabytes'
     const db = conexao.db('api-instabytes');
     // Obtém a coleção 'posts'
     const colecao = db.collection('posts');
     // Retorna um array com todos os documentos da coleção
     return colecao.find().toArray();
}

export async function criarPost(novoPost) {
     const db = conexao.db('api-instabytes');
     const colecao = db.collection('posts');
     return colecao.insertOne(novoPost);
}
