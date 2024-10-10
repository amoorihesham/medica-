export default function CustomInput({ name, register, rules, errors, ...rest }) {
  return (
    <div className='my-4'>
      <input
        className='bg-mpink outline-none rounded-lg border border-gray-300 placeholder:text-gray-400 text-sm font-thin px-3 py-3 w-full text-gray-500 '
        {...rest}
        {...register(name, rules)}
      />
      {errors && <p className='text-red-400 px-2 text-sm font-light'>{errors[name]?.message}</p>}
    </div>
  );
}
