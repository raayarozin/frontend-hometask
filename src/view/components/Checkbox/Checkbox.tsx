import React from 'react';
import './Checkbox.style.scss';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewUserSchema } from '../../../model';

export interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(NewUserSchema),
  });

  return (
    <div className='checkbox-container'>
      <input type='checkbox' defaultChecked={true} />
      <label className='checkbox-form-label'>{label}</label>
    </div>
  );
};

export default Checkbox;
