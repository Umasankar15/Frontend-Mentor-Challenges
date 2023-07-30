
import { useState } from 'react';
import DisplayText from './components/DisplayText';
import Input from './components/Input';
import MainSection from './components/MainSection';

function App() {
   const [ day, setDay ] = useState('');
   const [ month, setMonth ] = useState('');
   const [ year, setYear ] = useState('');
   // const [ error, setError ] = useState({});
   const [ result, setResult ] = useState({days: '--', months: '--', years: '--'});

   const onChangeDay = (event) => {
      const { value } = event.target;
      if(value <= 31 ) {
         setDay(value);
      }
   };

   const onChangeMonth = (event) => {
      const { value } = event.target;
      if(value <= 12 ) {
         setMonth(value);
      }
   }

   const onChangeYear = (event) => {
      const { value } = event.target;
      setYear(value);
   }

   // Dummy implementation right now
   const onClickCalculateDifference = () => {
      setResult({days: '--', months: '--', years: '--'});
   }

   return <MainSection >
      <section className='flex items-center gap-x-4 max-w-xs'>
         <Input type="text" name={'DAY'} placeholder={'DD'} value={day} onChange={onChangeDay} />
         <Input type="text" name={'MONTH'} value={month} placeholder={'MM'} onChange={onChangeMonth} />
         <Input type="text" name={'YEAR'} value={year} placeholder={'YYYY'} onChange={onChangeYear} />
      </section>
      <div className='flex justify-center items-center py-4 md:py-0'>
         <span className='border h-0 w-full'></span>
         <button className='rounded-full bg-purple p-4 w-fit' onClick={onClickCalculateDifference}>
            <img src="/assets/icon-arrow.svg" alt="arrow-icon" className='w-12 md:w-8 object-contain' />
         </button>
         <span className='border h-0 w-full md:hidden'></span>
      </div>
      <section className='flex flex-col justify-center'>
            <DisplayText value={result.years} text={"years"} />
            <DisplayText value={result.months} text={"months"} />
            <DisplayText value={result.days} text={"days"} />
      </section>
   </MainSection>
}

export default App
