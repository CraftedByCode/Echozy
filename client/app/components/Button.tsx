import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="text-white px-2 py-2 w-20 rounded-full bg-[#0279fb] hover:text-[#0279fb] hover:bg-white active:bg-gray-800 font-sans">
      {children}
    </button>
  );
};

export default Button;
