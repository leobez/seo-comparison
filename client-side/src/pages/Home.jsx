import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="text-slate-950">

      {/* CONTEÚDO */}
      <div className='flex-1 p-4 z-10'>

        {/* Intro */}
        <section className='my-1' id='intro'>
          <h1 className='text-xl font-bold'>Comparação de SEO em sites SSR e CSR</h1>
          
          <div>

            <p className='paragraph'>
              Foi determinado que a escolha entre SSR e CSR pode afetar os seguintes aspectos que são relevantes para SEO:
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Compatibilidade com motores de busca;</li>
                <li>Desempenho e usabilidade do site;</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Sendo assim é necessário testar ambos esses aspectos tanto em um site SSR quanto em um CSR, a fim de determinar o impacto que a abordagem escolhida causa em SEO.
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* Compatibilidade */}
        <section className='my-1' id='compatibilidade'>
          <h1 className='text-xl font-bold'>Teste de compatibilidade</h1>
          
          <div>

            <p className='paragraph'>
              O teste de compatibilidade será feito utilizando duas versões desse site: uma SSR e outra CSR.
            </p>

            <p className='paragraph'>
              O site SSR realiza a renderização de todo seu conteudo no lado do servidor antes de ser enviado ao cliente, enquanto o site CSR possui todo seu conteudo renderizado no lado do cliente através da execução de código JavaScript. <Link to='/render'><span className='hover:underline'>Veja mais detalhes aqui.</span></Link>
            </p>

            <p className='paragraph'>
              Ambos os sites serão publicados na Web e então serão indexados nos seguintes motores de busca. 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Google;</li>
                <li>Bing;</li>
                <li>Yahoo!;</li>
                <li>Yandex;</li>
                <li>Baidu;</li>
                <li>DuckDuckGo;</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Com os sites indexados será possível documentar quaisquer problemas de compatibilidade desses motores com contudo renderizado através de código JavaScript. Dessa forma, será possível obter uma boa noção da compatibilidade geral da Web com sites CSR. 
            </p>

            <p className='paragraph'>
              
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* Usabilidade e desempenho */}
        <section className='my-1' id='usabilidade_desempenho'>
          <h1 className='text-xl font-bold'>Testes de usabilidade e desempenho</h1>
          
          <div>
            <p className='paragraph'>
              Desempnho e usabilidade serão mesurados através das seguintes métricas:
            </p>
          </div>

          <div className='paragraph'>
            <ul className='list-disc list-inside pl-4 max-w-xl'>
              <li><span className='italic'>Largest Content Paint</span> (LCP);</li>
              <li><span className='italic'>Interaction to Next Paint</span> (INP);</li>
              <li><span className='italic'>Cumulative Layout Shift</span> (CLS);</li>
              <li><span className='italic'>Speed Index</span> (SI);</li>
              <li><span className='italic'>First Contentful Paint </span> (FCP);</li>
              <li><span className='italic'>Total Blocking Time</span> (TBT);</li>
              <li><span className='italic'>Time to First Byte</span> (TTFB).</li>
            </ul>
          </div> 

          <p className='paragraph'>
            Ao testar todas essas métricas em um site SSR e um CSR será possível obter uma boa noção do impacto que a abordagem de renderização causa no desempnho e usabilidade de um site. <Link to='/render#como_impacta_seo'><span className='hover:underline'>Veja mais detalhes aqui.</span></Link>
          </p> 

        </section>

      </div>
    
    </main>
  );
}

export default Home