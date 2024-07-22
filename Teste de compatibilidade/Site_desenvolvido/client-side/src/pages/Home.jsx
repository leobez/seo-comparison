const Home = () => {

  return (
    <main className="text-slate-950">
  
      {/* CONTEÚDO */}
      <div className='flex-1 p-4 z-10'>

        {/* Intro */}
        <section className='my-1' id='intro'>

          <div className='flex justify-between'>
            <h1 className='text-xl font-bold'>O impacto da abordagem de renderização em SEO</h1>
          </div>

          <div>

            <p className='paragraph'>
              Foi determinado que a escolha entre SSR e CSR pode afetar os seguintes aspectos que são relevantes para SEO:
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Compatibilidade com motores de busca;</li>
                <li>Desempenho do site;</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Sendo assim, é necessário testar esses aspectos para determinar o impacto que a abordagem escolhida causa em SEO.
            </p>

            <p className='paragraph'>
              Esse site faz parte do teste de compatibilidade.
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* Compatibilidade */}
        <section className='my-1' id='compatibilidade'>

          <p className='text-xl font-bold'>Teste de compatibilidade</p>
          
          <div>

            <p className='paragraph'>
              O teste de compatibilidade consiste em determinar se um motor de busca é compativel com conteudos renderizados através de JS, isto é, se este é capaz de, sem problemas, processar e indexar esses tipos de conteudo. 
            </p>

            <p className='paragraph'>
              Os motores de busca considerados foram esses: 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Google;</li>
                <li>Bing;</li>
                <li>Yahoo!;</li>
                <li>Yandex;</li>
                <li>DuckDuckGo.</li>
              </ul>
            </div> 
            
            <p className='paragraph'>
              Para cada um desses motores um site CSR (esse) foi indexado para posterior teste.
            </p>

          </div>
        </section>

      </div>
    
    </main>
  );
}

export default Home