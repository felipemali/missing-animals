export const ButtonForm = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-center col-span-2 mt-4">
      <input
        type="submit"
        value={text}
        className="cursor-pointer w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition"
      />
    </div>
  );
};
