import * as Yup from "yup";

export const schema = Yup.object().shape({
  petType: Yup.string()
    .oneOf(["cachorro", "gato", "outro"], "Selecione um tipo de pet válido") // Valida apenas esses valores
    .required("Tipo de pet é obrigatório"),
  name: Yup.string()
    .min(3, "O nome deve ter pelo menos 3 caracteres")
    .max(10, "O nome pode ter no máximo 50 caracteres")
    .required("* Nome obrigatório"),
  tel: Yup.string()
    .min(9, "O número deve ter pelo menos 9 caracteres")
    .max(9, "O múmero pode ter no máximo 9 caracteres")
    .required("* Nome obrigatório"),
  description: Yup.string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres")
    .max(200, "A descrição pode ter no máximo 200 caracteres")
    .required("* Descrição obrigatória"),
  city: Yup.string()
    .min(2, "A cidade deve ter pelo menos 2 caracteres")
    .required("* Cidade obrigatória"),
  UF: Yup.string()
    .min(2, "A UF deve ter pelo menos 2 caracteres")
    .max(2, "A UF deve ter apenas 2 caracteres")
    .required("* UF obrigatória"),
  street: Yup.string().min(2, "A Rua deve ter pelo menos 2 caracteres"),
  // .required("* Rua obrigatória"),
});
