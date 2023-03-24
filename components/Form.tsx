import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import Link from "next/link";
import s from "../styles/components/Form.module.scss";
import { InputBase } from "./InputBase";

type FormProps = {
  children?: React.ReactNode;
  inputs: Input[];
  textarea: TextArea;
  submitBtn: SubmitBtn;
};

export const Form = ({ children, inputs, textarea, submitBtn }: FormProps) => {
  return (
    <div className={s.formContainer}>
      {children}
      <form className={s.form}>
        <div className={s.inputContainer}>
          {inputs.map((input) => (
            <InputBase key={input.name} input={input} />
          ))}
          <textarea
            className={`${s.input} ${s.message}`}
            placeholder={textarea.placeholder}
          ></textarea>
        </div>
        <input className={s.submitBtn} type="submit" value={submitBtn.value} />
      </form>
    </div>
  );
};
