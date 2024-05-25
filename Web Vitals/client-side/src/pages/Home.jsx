import Form from '../components/Form';
import Text from '../components/Text';
import Dynamic from '../components/Dynamic';
import Dynamic2 from '../components/Dynamic2';
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
          <Dynamic/> 
          <Form/>
          <Dynamic2/> 
          <Image/>   
          <Text/>    
        </div>

      </div>
    
    </main>
  );
}

export default Home