import { useEffect, useState } from 'react'

const Dynamic = () => {

    const [data, setData] = useState()

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=50', {cache: 'no-store'})
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    const handleLoadMore = () => {
      fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=8', {cache: 'no-store'})
        .then(response => response.json())
        .then(json => setData((prev) => [...prev, ...json]))
    }

    return (
      <div className='border-2 border-black p-4'>

        <p className='font-bold mb-4'>Conteúdo dinâmico</p>

        <div className='flex flex-col'>

          <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
            {data && data.map((content) => (
              <div key={content.id} className='border-2 border-black relative w-fit'>
                <img src={content.url} alt={content.id} className='h-[220px] w-[220px]'/>
                <p className='text-left p-2 absolute bottom-0 bg-white h-22 border-t-2 border-black text-nowrap whitespace-normal overflow-hidden text-ellipsis w-full'>{content.title}</p>
              </div>
            ))}
          </div>

          <div className='w-full pt-4 grid place-items-center'>
            <button onClick={handleLoadMore} className='border-2 border-black p-2 hover:bg-slate-200 cursor-pointer'>Carregar mais</button>
          </div>

        </div>
      </div>

    )
}

export default Dynamic