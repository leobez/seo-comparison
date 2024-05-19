import React from 'react'
import Form from '../components/Form';
import Text from '../components/Text';
import Dynamic from '../components/Dynamic';
import Image from '../components/Image';

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
          <Image/>   {/* 571kb worth of image */}
          <Dynamic/> {/* 1 api call -> 8 elements with img rendered */}
          <Text/>    {/* 10kb worth of text */}
          <Dynamic/> {/* 1 api call -> 8 elements with img rendered */}
          <Text/>    {/* 10kb worth of text */}
          <Dynamic/> {/* 1 api call -> 8 elements with img rendered */}
          <Form/>    {/* 1 form */}
        </div>

      </div>
    
    </main>
  );
}

export default Home