"use client";
import { DetailedHTMLProps, TextareaHTMLAttributes, useState } from "react";

interface Props
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
}

export function TextArea({ label, maxLength, ...rest }: Props) {
  const [charactersLeft, setCharactersLeft] = useState(maxLength);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    rest.onChange?.(event);
    const { value } = event.target;

    if (maxLength) {
      setCharactersLeft(maxLength - value.length);
    }
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <label htmlFor="" className="mb-1 text-white font-bold text-lg">
          {label}
        </label>
        <h4
          className={`mb-1 font-semibold text-sm ${
            charactersLeft && charactersLeft > 0 ? "text-white" : "text-red-500"
          }`}
        >
          {charactersLeft} character
          {charactersLeft && charactersLeft > 1 ? "s" : ""} left
        </h4>
      </div>
      <textarea
        {...rest}
        className="rounded-md px-2 py-3 font-semibold w-full"
        maxLength={maxLength}
        rows={6}
        onChange={handleChange}
      />
    </div>
  );
}
