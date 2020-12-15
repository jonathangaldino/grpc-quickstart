import { Router } from 'express';

import * as NameController from './controller/name-controller';

const router = Router();

router.post('/names', NameController.joinNames);

export default router;
