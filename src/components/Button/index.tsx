type ButtonProps = {
  text: string;
};
export const Button = ({ text }: ButtonProps) => {
  return (
    <button className="btn border-2 border-solid border-orange-500 btn-soft w-full max-w-1/2 bg-transparent text-neutral rounded-full p-6">
      {text}
    </button>
  );
};
