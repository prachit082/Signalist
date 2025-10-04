import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface FormInputProps<T extends FieldValues = any> {
  name: keyof T & string;
  label: string;
  placeholder?: string;
  type?: string;
  register: UseFormRegister<T>;
  error?: { message?: string };
  validation?: any;
  disabled?: boolean;
  value?: string | number;
}

const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label htmlFor={name} className="form-label">
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn("form-input", {
          "opacity-50 cursor-not-allowed": disabled,
        })}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-red-500">{error.message}</p>}
    </div>
  );
};
export default InputField;
