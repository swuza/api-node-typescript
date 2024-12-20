import { Request, Response } from "express";
//import { StatusCodes } from "http-status-codes";
import * as yup from 'yup';


interface ICidade {
  nome: string;
};

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
});

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
let validatedData: ICidade | undefined = undefined;

  try {
    validatedData = await bodyValidation.validate(req.body);
  } catch (error) {
    const yupError = error as yup.ValidationError;

    res.json({
      errors: {
        default: yupError.message,
      }
    });
    return
  }

  console.log(validatedData);





  
  res.send('create!');
  return
};
