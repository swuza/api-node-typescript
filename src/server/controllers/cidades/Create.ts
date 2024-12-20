import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
//import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface ICidade {
  nome: string;
  estado: string;
};

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(2),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body, {abortEarly: false});
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const errors: Record<string, string> = {};
  
    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message;
    });

    res.status(StatusCodes.BAD_REQUEST).json({ errors });
    return
  }

  console.log(validatedData);





  
  res.send('create!');
  return
};
