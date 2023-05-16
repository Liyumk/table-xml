import React from "react";

interface Props {
  onClick: () => void;
  title: string;
}

const Button = ({ onClick, title }: Props) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 rounded-b-sm text-white"
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
