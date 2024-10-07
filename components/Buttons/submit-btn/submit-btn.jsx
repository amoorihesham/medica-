export default function SubmitButton({ text }) {
  return (
    <button
      type='submit'
      className='bg-mBlue w-full text-white capitalize text-md py-2 rounded-lg hover:bg-cyan-800 transition-colors duration-200 mt-10'>
      {text}
    </button>
  );
}
