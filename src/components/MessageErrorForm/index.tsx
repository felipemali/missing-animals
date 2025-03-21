export const MessageErrorForm = ({ error }: { error: string | undefined }) => {
  if (error) {
    return <p className="text-red-400 text-xs">* {error}</p>;
  } else {
    return;
  }
};
