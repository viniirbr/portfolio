"use client";
import { EnvelopeSimple } from "@phosphor-icons/react";

export function EmailText() {
  return (
    <div className="flex items-center text-white gap-2">
      <EnvelopeSimple size={38} className="bg-transparent" />
      <h3 className="text-lg font-semibold">
        viniciusribeirodeveloper@gmail.com
      </h3>
    </div>
  );
}
