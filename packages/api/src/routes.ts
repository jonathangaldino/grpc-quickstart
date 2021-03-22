import { Router } from 'express';

import * as GreetingsController from './controller/greetings-controller';

const router = Router();

router.post('/greetings', GreetingsController.hello);

export default router;
