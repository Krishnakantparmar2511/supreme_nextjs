import { InputHTMLAttributes } from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  type?: "text" | "email";
  register: UseFormRegister<any>;
  error?: FieldError;
  className?: string;
}

export const TextInput = ({
  name,
  placeholder,
  type = "text",
  register,
  error,
  className,
  ...rest
}: TextInputProps) => {
  return (
    <div className={className}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={`w-full bg-transparent border-b  placeholder-white focus:outline-none transition-colors ${
          error
            ? "border-red-500 focus:border-red-400"
            : "border-white/40 focus:border-white"
        }`}
        aria-invalid={!!error}
        {...rest}
      />
      {error && (
        <p className="text-red-500 text-sm mt-1" role="alert">
          {error.message}
        </p>
      )}
    </div>
  );
};
