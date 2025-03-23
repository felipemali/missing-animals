import imageCompression from "browser-image-compression";
import { supabase, supabaseUrl } from "../supabase/supabaseClient";

const options = {
  maxSizeMB: 1,
  maxWidthOrHeight: 800,
  useWebWorker: true,
};
export const sendImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
  const file = event.target.files?.[0];

  console.log("file image:", file);

  if (!file) return;

  try {
    const compressedFile = await imageCompression(file, options);

    const filePath = `images/${compressedFile.name}`;
    const { data, error } = await supabase.storage
      .from("images")
      .upload(filePath, compressedFile);

    if (error) throw error;

    // const imageUrl = data?.path
    //   ? `${supabaseUrl}/storage/v1/object/public/${data.path}`
    //   : "";
    const imageUrl = data?.path
      ? `${supabaseUrl}/storage/v1/object/public/images/${filePath}`
      : "";

    console.log("Imagem comprimida e enviada com sucesso!", imageUrl);
    return imageUrl;
  } catch (error) {
    console.error("Erro ao comprimir ou enviar imagem:", error);
    return undefined;
  }
};
