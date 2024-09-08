import * as yup from "yup"

export const userSchema = yup.object({
  EMAIL: yup.string().email("Formato de email inválido").required("Campo obrigatório"),
  PASSWORD: yup.string().required("Campo obrigatório"),
});