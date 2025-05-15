'use client';
import { ChangeEvent, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, id, className = '', ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-1 font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={
          `border border-gray-300 rounded px-3 py-2
           focus:outline-none focus:ring-2 focus:ring-indigo-300 ` +
          className
        }
        {...rest}
      />
    </div>
  );
}
