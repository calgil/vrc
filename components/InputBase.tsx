import { Input } from "@/types/input.type";
import s from "../styles/components/InputBase.module.scss";

type InputBaseProps = {
  input: Input;
};

export const InputBase = ({ input }: InputBaseProps) => {
  const { type, name, placeholder, required, value, onChange } = input;
  return (
    <input
      className={s.input}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
    />
  );
};
