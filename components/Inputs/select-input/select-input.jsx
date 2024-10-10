'use client';
import { useEffect, useState } from 'react';

export default function SelectInput({ name, list, register, errors, watch, setValue, ...rest }) {
  const [areas, setAreas] = useState([]);
  const selectedGov = watch('governorate');
  useEffect(() => {
    if (selectedGov) {
      const selectedGovObject = list.find((gov) => gov.name === selectedGov);
      setAreas(selectedGovObject ? selectedGovObject.areas : []);
      setValue('area', '');
    }
  }, [selectedGov, list, setValue]);
  return (
    <>
      <div className='my-4'>
        <select
          className='bg-mpink outline-none rounded-lg border border-gray-300 placeholder:text-gray-400 text-sm font-thin px-3 py-3 w-full text-gray-500 '
          {...rest}
          {...register(name, {
            required: {
              value: true,
              message: 'This Field Is required.',
            },
          })}>
          <option value=''>-- Select Government --</option>
          {list.length > 0
            ? list.map((opt) => (
                <option
                  className='capitalize'
                  value={opt.name}
                  key={opt.id}>
                  {opt.name}
                </option>
              ))
            : null}
        </select>
        {errors && <p className='text-red-400 px-2 text-sm font-light'>{errors[name]?.message}</p>}
      </div>
      <div className='my-4'>
        <select
          className='bg-mpink outline-none rounded-lg border border-gray-300 placeholder:text-gray-400 text-sm font-thin px-3 py-3 w-full text-gray-500 '
          {...rest}
          {...register('area', {
            required: {
              value: true,
              message: 'This Field Is required.',
            },
          })}>
          <option value=''>-- Select Area --</option>
          {areas.map((area) => (
            <option
              className='capitalize'
              value={area.name}
              key={area.id}>
              {area.name}
            </option>
          ))}
        </select>
        {errors && <p className='text-red-400 px-2 text-sm font-light'>{errors[name]?.message}</p>}
      </div>
    </>
  );
}
