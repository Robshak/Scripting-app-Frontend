export interface FieldConfig {
  name: string;
  type: string;
  placeholder: string;
  validation?: (value: string) => string | null;
}
