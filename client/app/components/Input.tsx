import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  type: string;
}

const Input: React.FC<InputProps> = ({ children, type, ...props }) => {
  return (
    <div className="flex flex-col my-2">
      <label className="text-black font-sans">{children} </label>
      <input
        type={type}
        className="text-black bg-[#f5f6f9] focus:outline-none my-2"
        {...props}
      />
      <div className="border-t border-gray-200"></div>
    </div>
  );
};

export default Input;
