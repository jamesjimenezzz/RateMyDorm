import React from "react";

interface LabelFormProps {
  children: React.ReactNode;
  className?: string;
}

const LabelForm = ({ children, className }: LabelFormProps) => {
  return <p className={`text-sm font-[500] ${className}`}>{children}</p>;
};

export default LabelForm;
