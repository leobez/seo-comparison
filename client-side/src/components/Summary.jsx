const Summary = ({items}) => {

  return (
    <div className='w-56 sticky top-0 h-[100vh] border-r border-black p-4'>
        <div className='font-bold text-lg'>Sumário</div>
        <hr />
        <div>
            <ul className='flex flex-col'>
                {items && Object.entries(items).map((item) => (
                    <li key={item[0]} className='hover:bg-slate-300 h-10'>
                        <a href={`#${item[0]}`} className='h-full w-full flex items-center px-1'>
                            {item[1]}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Summary