import { Router } from 'express';

import { CidadesController } from "./../controllers";



const router = Router();



router.get('/', (_, res) => {
  res.send('Funcionando');
});


router.post('/cidades', CidadesController.create);




export { router };
