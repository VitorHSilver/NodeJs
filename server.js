import express from 'express';
// 3000 é a porta padrao é para servidor

const posts = [
     {
          id: 1,
          descricao: 'Uma foto teste',
          imagem: 'https://placecats.com/millie/300/150',
     },
     {
          id: 2,
          descricao: 'Gato brincando com um novelo de lã',
          imagem: 'https://placecats.com/millie/300/151',
     },
     {
          id: 3,
          descricao: 'Gatinho dormindo em uma caixa',
          imagem: 'https://placecats.com/millie/300/152',
     },
     {
          id: 4,
          descricao: 'Gato olhando pela janela',
          imagem: 'https://picsum.photos/id/237/200/300',
     },
     {
          id: 5,
          descricao: 'Gato comendo ração',
          imagem: 'https://placecats.com/millie/300/154',
     },
     {
          id: 6,
          descricao: 'Gato preto em um beco',
          imagem: 'https://placecats.com/millie/300/155',
     },
];

const app = express();
app.use(express.json());
app.listen(3000, () => {
     console.log('servidor estudando');
});
app.get('/posts', (req, res) => {
     res.status(200).json(posts);
});

function buscarPostPorId(id) {
     return posts.findIndex((post) => {
          return post.id === Number(id);
     });
}

app.get('/posts/:id', (req, res) => {
     const index = buscarPostPorId(req.params.id);
     res.status(200).json(posts[index]);
});
