import React from 'react';
import './Signup.style.scss';
import realEstate from '../../assets/real-estate.png';
import { MainHeader } from '../components/MainHeader';
import { SubHeader } from '../components/SubHeader';
import { Input } from '../components/Input';
import { SubmitButton } from '../components/SubmitButton';
import { Checkbox } from '../components/Checkbox';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewUserSchema, FormData } from '../../model';
import { useStore } from '../../controller';
import { getCity } from '../../utils/getCity';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [value, setValue] = useState('');

  const getValue = (name: any) => {
    getCity(name.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(NewUserSchema),
  });

  const { user, users, addUser } = useStore();

  const submitUserData = (data: FormData) => {
    addUser(data);
    console.log('user added to global state!', data);
  };

  return (
    <div className='signup'>
      <form className='form' onSubmit={handleSubmit(submitUserData)}>
        <MainHeader value='הרשמה :' />
        <SubHeader value='פרטים אישיים:' />
        <div className='inputs-wrapper'>
          <Input
            className='input-container'
            type='text'
            label='שם מלא:'
            mandatory={true}
            registeredValue='fullName'
            register={register}
            error={errors.fullName && 'שם מלא חייב להכיל לפחות 5 אותיות'}
            value={null}
            onChange={null}
          />
          <Input
            className='input-container'
            type='text'
            label='ת.ז'
            mandatory={true}
            registeredValue='userId'
            register={register}
            error={errors.userId && 'נא להקיש ת.ז מלאה (כולל ספרת ביקורת)'}
            value={null}
            onChange={null}
          />
          <Input
            className='input-container last-input-container'
            type='date'
            label='תאריך לידה:'
            mandatory={true}
            registeredValue='birthDate'
            register={register}
            error={errors.birthDate && 'נא להזין תאריך לידה תקין'}
            value={null}
            onChange={null}
          />
        </div>
        <SubHeader value='פרטי התקשרות:' />
        <div className='inputs-wrapper'>
          <Input
            className='input-container'
            type='text'
            label='נייד:'
            mandatory={true}
            registeredValue='phone'
            register={register}
            error={errors.phone && 'נא להזין מספר נייד תקין'}
            value={null}
            onChange={null}
          />
          <Input
            className='input-container'
            type='email'
            label='מייל:'
            mandatory={true}
            registeredValue='email'
            register={register}
            error={errors.email && 'נא להזין כתובת מייל תקינה'}
            value={null}
            onChange={null}
          />
        </div>
        <SubHeader value='כתובת:' />
        <div className='inputs-wrapper'>
          <Input
            className='input-container'
            type='text'
            label='עיר:'
            mandatory={true}
            registeredValue='city'
            register={register}
            error={errors.city && 'נא להזין עיר תקינה'}
            value={value}
            onChange={getValue}
          />
          <Input
            className='input-container'
            type='text'
            label='רחוב:'
            mandatory={true}
            registeredValue='street'
            register={register}
            error={errors.street && 'נא להזין רחוב תקין'}
            value={value}
            onChange={null}
          />
          <Input
            className='input-container last-input-container small-input-container'
            type='text'
            label="מס' בית:"
            mandatory={true}
            registeredValue='houseNumber'
            register={register}
            error={errors.houseNumber && "נא להזין מס' בית תקין"}
            value={value}
            onChange={null}
          />
        </div>
        <div className='checkboxes-wrapper'>
          <Checkbox label='אני מסכים לקבל דיוור במייל ובמסרון' />
          <Checkbox label='אני מסכים לתנאי השירות' />
        </div>
        <SubmitButton className='submit-button' />
      </form>
      <img src={realEstate} alt='' className='signup-form-image' />
    </div>
  );
};

export default Signup;
