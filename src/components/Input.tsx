import React from "react";

interface IInputProps {
  name: any;
  label: string;
  register: any;
}

const Input: React.FC<IInputProps> = ({ label, register, name }) => {
  return (
    <label>
      {label} <br />
      <input
        className="client-input"
        name={name}
        id={name}
        {...register(name, {
          required: "поле обязательно к заполнению",
          minLength: {
            value: 5,
            message: "минимум 5 символов",
          },
        })}
      />
    </label>
  );
};

export default Input;
