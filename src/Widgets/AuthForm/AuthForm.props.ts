import { FieldConfig } from "./Models/FormModels";

export interface AuthFormProps {
  header: string;
  bottomTitle: string;
  bottomLink: {
    text: string;
    url: string;
  };
  buttonText: string;
  fields: FieldConfig[];
  globalValidation?: (
    data: Record<string, string>
  ) => Record<string, string>;
  onSubmit?: (data: Record<string, string>) => void;
  className?: string;
}
