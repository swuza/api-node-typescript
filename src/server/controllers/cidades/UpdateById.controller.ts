/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';

import { validation } from "../../shared/middleware/Validation.middleware";
import { ICidade } from "../../database/models/Cidade.model";


interface IParamsProps {
  id?: number;
};

interface IBodyProps extends Omit<ICidade, 'id'> { }

export const updateByIdValidation = validation((getSchema) => ({
  body: getSchema<IBodyProps>(yup.object().shape({
    nome: yup.string().required().min(3),
  })),
  params: getSchema<IParamsProps>(yup.object().shape({
    id: yup.number().integer().required().moreThan(0),
  })),
}));

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const updateById = async (req: Request<IParamsProps, {}, IBodyProps>, res: Response) => {
  
  if (Number(req.params.id) === 99999) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
     errors: {
       default: 'Registro não encontrado!' 
      } 
    });
    return
  }

  res.status(StatusCodes.NO_CONTENT).send();
  return
};