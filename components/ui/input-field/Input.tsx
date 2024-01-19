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
    <div className='flex gap-2 bg-transparent outline-none w-full my-2 border-b-[1px] border-[#888]'>
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
