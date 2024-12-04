import express from 'express';
import routes from './src/route/postsRoute.js';

const app = express();
app.use(express.static('uploads'));
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
     console.log('servidor no ar...');
});
