import express from 'express';
// 3000 é a porta padrao é para servidor
const app = express();
app.listen(3000, () => {
     console.log('servidor estudando');
});
app.get('/api', (req, res) => {
     res.status(200).send('Rota inicial');
});
