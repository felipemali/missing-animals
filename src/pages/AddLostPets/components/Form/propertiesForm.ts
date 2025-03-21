export const propertiesTextForm = [
  {
    label: "Foto do pet",
    type: "file",
    accept: "image/*",
    register: "photo",
    placeholder: "",
  },
  {
    label: "Nome",
    type: "text",
    accept: "",
    register: "name",
    placeholder: "Nome do Pet...",
  },
  {
    label: "UF",
    type: "text",
    accept: "",
    register: "UF",
    placeholder: "UF do seu Estado",
  },
  {
    label: "Cidade",
    type: "text",
    accept: "",
    register: "city",
    placeholder: "Nome da Cidade...",
  },
  {
    label: "Rua",
    type: "text",
    accept: "",
    register: "street",
    placeholder: "Nome da Rua...",
  },
  {
    label: "Celular",
    type: "tel",
    accept: "",
    register: "tel",
    placeholder: "(88) 99999-99999",
  },
  {
    label: "Características",
    type: "text",
    accept: "",
    register: "description",
    placeholder: "Raça, Cor...",
  },
];
export const propertiesSelectForm = [
  {
    label: "Tipo de Pet",
    data: ["Cachorro", "Gato", "Outro"],
  },
];
