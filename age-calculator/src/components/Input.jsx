
function Input(props) {

  const { name, id, type, value, onChange, placeholder } = props;
  return <div className='w-full flex flex-col justify-center'>
    <label 
      htmlFor = { id } 
      className = 'text-xs text-smoke-grey font-bold tracking-widest py-1' 
    >
      { name }
    </label>
    <input 
      className = 'w-full border border-smoke-grey rounded outline-none p-2 text-lg font-bold hover:border-purple'
      type = { type } 
      name = { name } 
      value = { value === '--' ? '' : value }
      placeholder = { placeholder } 
      id = { id } 
      onChange = { onChange }
    />
  </div>
}

export default Input;