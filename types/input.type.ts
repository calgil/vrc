export type Input = {
  name: string;
  placeholder: string;
  type: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TextArea = {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export type SubmitBtn = {
  value: string;
};
