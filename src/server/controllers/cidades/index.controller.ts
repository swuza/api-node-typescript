import * as create from './Create.controller';
import * as getAll from './GetAll.controller';
import * as getById from './GetById.controller';
import * as deleteById from './DeleteById.controller';
import * as updateById from './UpdateById.controller';


export const CidadesController = {
  ...create,
  ...getAll,
  ...getById,
  ...deleteById,
  ...updateById,
};

