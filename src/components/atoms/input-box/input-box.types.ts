export interface InputBoxProps {
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  maxWidth: number;
  minValue: number;
  maxValue: number;
  required?: boolean;
  pattern?: string;
  patternErrorMessage?: string;
  handleChange?: (value: string) => void;
}

export interface InputBoxError {
  errorMessage: string;
  type: "required" | "maxLength" | "minLength" | "pattern";
}