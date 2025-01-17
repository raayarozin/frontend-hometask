import React from 'react';
import './Input.style.scss';
import { FormData } from '../../../model';
import { UseFormRegister } from 'react-hook-form';

export interface InputProps {
  className: string;
  type: string;
  label: string;
  mandatory: boolean;
  registeredValue: string | any;
  register: UseFormRegister<FormData>;
  error: string | undefined;
}

const Input: React.FC<InputProps> = ({
  className,
  type,
  label,
  mandatory,
  registeredValue,
  register,
  error,
}) => {
  return (
    <div className={className}>
      <label className='form-label'>
        {mandatory && <span>*</span>}
        {label}
      </label>
      <input
        type={type}
        {...register(registeredValue)}
        className={error ? 'error-input' : ''}
      />
      {error && <span className='error-msg'>{error}</span>}
    </div>
  );
};

export default Input;
