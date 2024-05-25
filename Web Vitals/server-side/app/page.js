import Dynamic from './components/Dynamic';
import Image from './components/Image';
import Form from './components/Form';
import Text from './components/Text';
import Dynamic2 from './components/Dynamic2';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=100', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

async function getData2() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=100', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  return response.json()
}

export default async function Home() {

  const initialData = await getData()
  const initialData2= await getData2()

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
            <Dynamic initialData={initialData} />
            <Form/>
            <Dynamic2 initialData={initialData2} />
            <Image/>  
            <Text/>    
          </div>

        </div>

    </main>
  );
}
