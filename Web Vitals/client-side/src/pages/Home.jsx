import React from 'react'
import Form from '../components/Form';
import Text from '../components/Text';
import Dynamic from '../components/Dynamic';
import Image from '../components/Image';
import Image2 from '../components/Image2';

const Home = () => {
  return (
    <main className="text-slate-950">

      {/* CONTEÚDO */}
      <div className='flex-1 p-4 z-10'>

        {/* Intro */}
        <section className='my-1' id='intro'>
          
          <h1 className='text-xl font-bold'>Comparação de SEO em sites SSR e CSR</h1>

          <p className='paragraph'>
            Teste de desempenho.
          </p>

        </section>  

        <div className='separator'/>
        
        <div className='flex flex-col gap-4'>
          <Image/>   
          <Text/>    
          <Image2/>
          <Dynamic/> 
          <Form/>    
        </div>

      </div>
    
    </main>
  );
}

export default Home