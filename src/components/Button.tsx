import React from "react";

interface Props {
  onClick: () => void;
}

const Button = ({ onClick }: Props) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 rounded-b-sm text-white"
      onClick={onClick}
    >
      Convert
    </button>
  );
};

export default Button;
