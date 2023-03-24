import { Input } from "@/types/input.type";
import s from "../styles/components/InputBase.module.scss";

type InputBaseProps = {
  input: Input;
};

export const InputBase = ({ input }: InputBaseProps) => {
  const { type, name, placeholder, required } = input;
  return (
    <input
      className={s.input}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};
