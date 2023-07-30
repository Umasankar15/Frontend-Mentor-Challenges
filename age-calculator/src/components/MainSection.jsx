
function MainSection({ children }) {
  return <main className='w-full h-full flex items-center justify-center'>
    <section className='p-6 m-4 rounded-t-3xl rounded-bl-3xl rounded-br-[5rem] xs:rounded-br-[9rem] bg-White w-full max-w-lg'>
      { children }
    </section>
  </main>
}

export default MainSection;