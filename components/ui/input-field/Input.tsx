import { ChangeEvent } from 'react'

type InputFieldType = {
    htmlFor: string
    id: string
    labelValue: string
    name: string
    type: string
    handleForm: (e: ChangeEvent<HTMLInputElement>) => void
  }

const Input = ({
  htmlFor,
  id,
  labelValue,
  name,
  type,
  handleForm,
}: InputFieldType) => {
  return (
    <div className='flex gap-2 border-b'>
      <label htmlFor={htmlFor}>{labelValue}</label>
      <input
        className='focus:outline-none'
        type={type}
        id={id}
        name={name}
        onChange={handleForm}
      />
    </div>
  )
}

export default Input