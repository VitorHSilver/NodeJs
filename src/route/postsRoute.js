import express from 'express';
import multer from 'multer';
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from '../controllers/postsController.js';
import cors from 'cors';

const corsOptions = {
     origin: 'http://localhost:8000',
     optionsSucessStatus: 200,
};
// Configura o armazenamento para arquivos carregados
const storage = multer.diskStorage({
     destination: function (req, file, cb) {
          // Define o diretório de destino para os uploads.
          // Certifique-se de que este diretório existe e tem permissões de escrita para o processo do servidor.
          cb(null, 'uploads/');
     },
     filename: function (req, file, cb) {
          // Mantém o nome original do arquivo carregado
          cb(null, file.originalname);
     },
});

// Cria uma instância do middleware Multer com o armazenamento configurado
const upload = multer({ dest: './uploads', storage });

// Função para definir rotas na aplicação Express
const routes = (app) => {
     // Habilita o parsing de dados JSON no corpo das requisições
     app.use(express.json());
     app.use(cors(corsOptions));

     // Rota GET para listar todos os posts (implementação em postsController.js)
     app.get('/posts', listarPosts);

     // Rota POST para criar um novo post (implementação em postsController.js)
     app.post('/posts', postarNovoPost);

     // Rota POST para upload de imagem
     // - 'upload.single('imagem')': configura o upload para receber apenas um arquivo
     //   com o nome de campo 'imagem' no formulário
     // - uploadImagem: função manipuladora do upload (implementação em postsController.js)
     app.post('/upload', upload.single('imagem'), uploadImagem);

     app.put('/upload/:id', atualizarNovoPost);
};

export default routes;
