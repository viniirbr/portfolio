import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <div className="flex flex-col items-start w-full">
      <label htmlFor={rest.id} className="mb-1 text-white font-bold text-lg">
        {label}
      </label>
      <input
        {...rest}
        className="rounded-md px-2 py-3 font-semibold w-full md:text-lg"
      />
    </div>
  );
}
