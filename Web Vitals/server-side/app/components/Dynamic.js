'use client'

import { useState } from 'react';

async function getComments(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`, { cache: 'no-store' });
  
  console.log(response)

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
 
  return response.json();
}

const Dynamic = ({initialData}) => {

    const [data, setData] = useState(initialData);
    const [comments, setComments] = useState([])

    const handleComments = async (id) => {
      try {
        const newData = await getComments(id);

        if (newData.length === 0) {
          alert('Não há comentários.')
          return;
        }

        setComments([...newData]);
        
      } catch (error) {
          console.error('Error fetching data:', error);
      }
    }

    const handleCloseComments = async () => {
      setComments([])
    }

    return (
      <div className='border-2 border-black p-4'>

        <p className='font-bold mb-4'>Conteúdo dinâmico</p>

        <div className='flex gap-4 relative'>

          <div className='flex flex-col'>

            <div className='grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {data && data.map((content) => (

                <div key={content.id} className='border-2 border-black relative h-96 w-full max-w-xs'>

                  <div className='h-5/6 p-2 relative flex flex-col gap-4'>
                    
                    <div className='flex justify-between'>
                      <p>Id: {content.id}</p>
                    </div>

                    <p className='truncate max-w-full flex-shrink-0 font-bold'>
                      {content.title}
                    </p>

                    <p className='h-48 overflow-y-auto'>
                      {content.body}
                    </p>

                    <button className='w-full p-2 border-2 border-black hover:bg-slate-200' onClick={() => handleComments(content.id)}>
                      Comentários...
                    </button>

                  </div>

                  <div className='h-1/6 border-t-2 border-black p-2 grid place-items-center'>
                    <p className='truncate max-w-full flex-shrink-0 '>
                      UserId: {content.userId}
                    </p>
                  </div>

                </div>

              ))}
            </div>

          </div>
          
          {/* Comments */}
          {comments.length > 0 && 
            <div className='h-full w-full bg-white z-10 p-2 absolute flex flex-col gap-4'>

              <div className='flex justify-between'>
                <p className='font-bold border-black'>Comments</p>
                <button className='text-2xl border-2 border-black py-2 px-4 hover:text-red-600 hover:border-red-600' onClick={handleCloseComments}>X</button>
              </div>

              <div className='flex flex-col gap-4'>
                {comments.map(comment => (
                  <div key={comment.id}>
                    <p className='font-bold'>{comment.postId}.{comment.id}) - {comment.email}</p>
                    <p className='font-bold'>{comment.name}</p>
                    <p>{comment.body}</p>
                  </div>
                ))}
              </div>
            </div>
          }

        </div>

      </div>
    )
}


export default Dynamic;
