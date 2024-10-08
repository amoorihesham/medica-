export default function CheckInput({ name, text, register, errors, ...rest }) {
  return (
    <div className='my-4'>
      <div className='flex items-center gap-2'>
        <input
          id='checkInput'
          type='checkbox'
          className='w-5 h-5 text-blue-600 bg-mpink border-gray-300 rounded'
          {...rest}
          {...register('acceptTerms', {
            required: {
              value: true,
              message: 'You must agree to the terms and conditions.',
            },
          })}
        />
        <label
          htmlFor='checkInput'
          className='text-sm text-gray-800'>
          {text}
        </label>
      </div>
      {errors && <p className='text-red-400 px-2 text-sm font-light'>{errors[name]?.message}</p>}
    </div>
  );
}
