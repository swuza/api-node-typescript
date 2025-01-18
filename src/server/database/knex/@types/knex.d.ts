/* eslint-disable @typescript-eslint/no-empty-object-type */

import { ICidade } from "../../models/Cidade.model";


declare module 'knex/types/tables' {
  interface Tables {
    cidade: ICidade
    // pessoa: Pessoa;
    // usuario: Usuario;
  }
};