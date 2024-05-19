import React, { useState } from 'react'

const Form = () => {

    const [input1, setInput1] = useState()
    const [input2, setInput2] = useState()
    const [input3, setInput3] = useState()
    const [input4, setInput4] = useState()
    const [msg, setMsg] = useState([])

    const handleSubmit = (e) => {

        e.preventDefault()

        let msg = []

        if (input1 === undefined || input1 === null) {
            msg.push('Entre o input1')
        }
        if (input2 === undefined || input2 === null) {
            msg.push('Entre o input2')
        }
        if (input3 === undefined || input3 === null) {
            msg.push('Entre o input3')
        }
        if (input4 === undefined || input4 === null) {
            msg.push('Entre o input4')
        }

        if (msg.length === 0) {
            setMsg(['Tudo ok.'])
        } else {
            setMsg(msg)
        }
 
    }

    return (
        <form className='flex flex-col gap-4 border-2 border-black p-4 w-full sm:w-[500px]' onSubmit={handleSubmit}>
            <p className='font-bold'>Formulário</p>
            <div className='flex gap-2'>
                <label htmlFor="Input1 w-full">Input1</label>
                <input type="text" name='Input1' className='border-black border w-full' onChange={(e) => setInput1(e.target.value)}/>
            </div>
            <div className='flex gap-2 w-full'>
                <label htmlFor="Input2">Input2</label>
                <input type="text" name='Input2' className='border-black border w-full' onChange={(e) => setInput2(e.target.value)}/>
            </div>
            <div className='flex gap-2 w-full'>
                <label htmlFor="Input3">Input3</label>
                <input type="text" name='Input3' className='border-black border w-full' onChange={(e) => setInput3(e.target.value)}/>
            </div>
            <div className='flex gap-2 w-full'>
                <label htmlFor="Input4">Input4</label>
                <textarea name="Input4" id="Input4" className='border border-black min-h-28 w-full' onChange={(e) => setInput4(e.target.value)}></textarea>
            </div>
            <div className='flex gap-2'>
                <input type="submit" value="Enviar" className='border-2 border-black p-2 hover:bg-slate-200 cursor-pointer'/>
                <input type="reset" value="Apagar" className='border-2 border-black p-2 hover:bg-slate-200 cursor-pointer'/>
            </div>
            <div className=''>
                {msg.length > 0 && msg.map((m, index) => (
                    <div key={index} className='font'>
                        {m}
                    </div>
                ))}
            </div>
        </form>
    )
}

export default Form