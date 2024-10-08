export default function SelectInput({ name, list, register, errors, ...rest }) {
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
          {list?.length > 0
            ? list.map((opt) =>
                opt.areas.map((area) => (
                  <option
                    className='capitalize'
                    value={area.name}
                    key={area.id}>
                    {area.name}
                  </option>
                ))
              )
            : null}
        </select>
        {errors && <p className='text-red-400 px-2 text-sm font-light'>{errors[name]?.message}</p>}
      </div>
    </>
  );
}
