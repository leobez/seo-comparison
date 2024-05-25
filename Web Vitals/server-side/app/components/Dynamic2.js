const Dynamic2 = ({ initialData }) => {

    return (
      <div className='border-2 border-black p-4'>

        <p className='font-bold mb-4'>Conteúdo dinâmico</p>

        <div className='flex flex-col'>

          <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {initialData && initialData.map((content, index) => (
              <div key={`${content.id}${index}`} className='border-2 border-black relative h-64 w-56 p-4 flex flex-col gap-4 overflow-y-auto'>
                <p>ID: {content.id}</p>
                <p className='break-words'>URL: {content.url}</p>
                <p>{content.title}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    )
}


export default Dynamic2;
