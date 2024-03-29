import { ChangeEvent } from 'react';

type InputFieldType = {
  htmlFor: string;
  id: string;
  labelValue: string;
  name: string;
  type: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  handleChange,
}: InputFieldType) => {
  return (
    <div className='flex gap-2 border-none bg-transparent outline-none w-full'>
      <label htmlFor={htmlFor}></label>
      <input
        className='focus:outline-none bg-transparent'
        type={type}
        id={id}
        name={name}
        onChange={handleChange}
        placeholder={labelValue}
      />
    </div>
  );
};

export default Input;
