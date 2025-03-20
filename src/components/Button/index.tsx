import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text: string;
};
export const Button = ({ text }: ButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      className="btn border-2 border-solid border-orange-500 btn-soft w-full max-w-1/2 bg-transparent text-neutral rounded-full p-6 flex"
      onClick={() => navigate(`/adicionar-pet`)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>

      <span>{text}</span>
    </button>
  );
};
