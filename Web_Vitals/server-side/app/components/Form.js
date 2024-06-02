'use client'

import { useState } from 'react'

async function post(title, body) {

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
   
    return response.json();
}

const Form = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [msg, setMsg] = useState([])

    const handleSubmit = async() => {

        let msg = []

        if (title === undefined || title === null || title === '') {
            msg.push('Entre o titulo.')
        }
        if (body === undefined || body === null || body === '') {
            msg.push('Entre o corpo.')
        }

        if (msg.length === 0) {
    
            try {
                const res = await post(title, body)
                console.log(res)
                setMsg(['Post criado.'])
            } catch (error) {
                consnole.log(error)
            }
            
        } else {

            setMsg(msg)

        }
 
    }

    return (
        <form className='flex flex-col gap-4 border-2 border-black p-4 w-full sm:w-[500px]' action={handleSubmit}>
            <p className='font-bold'>Formulário</p>

            <div className='flex gap-2'>
                <label htmlFor="title w-full">Título:</label>
                <input type="text" name='title' className='border-black border w-full p-2' onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <div className='flex gap-2 w-full'>
                <label htmlFor="body">Corpo:</label>
                <textarea name="body" id="body" className='border border-black min-h-28 w-full p-2' onChange={(e) => setBody(e.target.value)}/>
            </div>

            <div className='flex gap-2'>
                <input type="submit" value="Enviar" className='border-2 border-black p-2 hover:bg-slate-200 cursor-pointer'/>
                <input type="reset" value="Apagar" className='border-2 border-black p-2 hover:bg-slate-200 cursor-pointer'/>
            </div>

            <div>
                {msg.length > 0 && msg.map((m, index) => (
                    <div key={index} className='font-bold'>
                        {m}
                    </div>
                ))}
            </div>

        </form>
    )
}

export default Form