"use client";

import React from "react";

interface TextInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-5 py-3 text-white bg-zinc-800/60 backdrop-blur-sm border border-zinc-700 rounded-xl placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 text-lg shadow-md ${className}`}
    />
  );
};

export default TextInput;

