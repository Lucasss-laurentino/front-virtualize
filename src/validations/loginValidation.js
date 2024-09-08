import * as yup from "yup"

export const userSchema = yup.object({
  EMAIL: yup.string().email("Formato de email inválido").required("Campo obrigatório"),
  NOME_EMPRESA: yup.string().min(3, "Nome muito curto").max(10, "Nome muito grande").required("Campo obrigatório"),
  PASSWORD: yup.string().min(6, "Senha muito curta").max(20, "Senha muito longa").required("Campo obrigatório"),
  CONFIRM_PASSWORD: yup.string().oneOf([yup.ref('PASSWORD'), null], 'As senhas precisam ser iguais').required("Campo obrigatório")
});

export const createUserSchema = yup.object({
  EMAIL: yup.string().email("Formato de email inválido").required("Campo obrigatório"),
  PASSWORD: yup.string().min(6, "Senha muito curta").max(20, "Senha muito longa").required("Campo obrigatório"),
});