function DisplayText({ value, text}) {
  return <div className='flex'>
    <p>
      <span className='text-purple text-[2.5rem] xs:text-[3rem] font-bold'>{ value }</span>
      <span>{' '}</span>
      <span className="text-black text-[2.5rem] xs:text-[3.5rem] font-bold">{ text }</span></p>
  </div>
}

export default DisplayText;