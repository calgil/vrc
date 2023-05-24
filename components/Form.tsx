import { Input, SubmitBtn, TextArea } from "@/types/input.type";
import Link from "next/link";
import s from "../styles/components/Form.module.scss";
import { InputBase } from "./InputBase";

type FormProps = {
  children?: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  // action: string;
  inputs: Input[];
  textarea: TextArea;
  submitBtn: SubmitBtn;
  success: boolean;
  error: boolean;
};

export const Form = ({
  children,
  onSubmit,
  // action,
  inputs,
  textarea,
  submitBtn,
  success,
  error,
}: FormProps) => {
  return (
    <div className={s.formContainer}>
      {children}
      <form className={s.form} onSubmit={onSubmit}>
        <div className={s.inputContainer}>
          {inputs.map((input) => (
            <InputBase key={input.name} input={input} />
          ))}
          <textarea
            className={`${s.input} ${s.message}`}
            onChange={textarea.onChange}
            placeholder={textarea.placeholder}
            value={textarea.value}
          ></textarea>
        </div>
        {success && <div className={s.success}>Message sent successfully!</div>}
        {error && <div className={s.error}>Message failed to send</div>}
        <input className={s.submitBtn} type="submit" value={submitBtn.value} />
      </form>
    </div>
  );
};
