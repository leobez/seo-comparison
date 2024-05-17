import React from 'react'

const Render = async() => {

  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {cache: 'no-store'})
    .then(response => response.json())
    .then(json => json)
    .catch(err => null)

  return (
    <div className='flex'>

      {/* SUMÁRIO */}
      <div className='hidden sm:block sticky w-56 top-0 h-[100vh] border-r border-black p-4 '>
          <div className='font-bold text-lg'>Sumário</div>
          <hr />
          <div>
              <ul className='flex flex-col text-sm'>
                <li className='hover:bg-slate-300 h-10'><a href='#renderizacao' className='h-full w-full flex items-center px-1'>Renderização de páginas</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#ssr' className='h-full w-full flex items-center px-1'>SSR</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#csr' className='h-full w-full flex items-center px-1'>CSR</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#como_impacta_seo' className='h-full w-full flex items-center px-1'>Como impacta SEO</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#referencias' className='h-full w-full flex items-center px-1'>Referências</a></li>
              </ul>
          </div>
      </div>

      {/* CONTEÚDO */}
      <div className='flex-1 p-4'>

        {/* Renderização de páginas web */}
        <section className='my-1' id='renderizacao'>
          
          <div className='flex justify-between'>
            <h1 className='text-xl font-bold'>Renderização de páginas web</h1>
            {res && <span> <abbr title="Elemento renderizado dinâmicamente"> &#x2713; </abbr></span>}
            {!res && <span> <abbr title="Elemento renderizado dinâmicamente, mas a chamada deu erro"> &#10060; </abbr></span>}
          </div>

          <div>

            <p className='paragraph'>
              Para dar prosseguimento a análise proposta neste trabalho, é importante especificar as abordagens de renderização de sites: renderização do lado do servidor (SSR) e renderização do lado do cliente (CSR). Prosseguindo, será tratado como essas abordagens podem impactar SEO.
            </p>

          </div>

        </section>

        <div className='separator'/>

        {/* SSR */}
        <section className='my-1' id='ssr'>
          <h1 className='text-xl font-bold'>SSR</h1>
          
          <div>

            <p className='paragraph'>
              <span className='reference'>Sydorkina (2023)</span> explica que em SSR o código da página é gerado no servidor e então é enviado ao cliente, geralmente um navegador web, cujo único trabalho será executar esse código e exibir a página. A figura a seguir demonstra a sequência de passos executados para a renderização do lado do servidor.
            </p>

            <div className='paragraph flex flex-col gap-1 items-center'>
              <p className='text-center'>Sequência de renderização do lado do servidor</p>
              <img src='/images/SSR.png' alt="Sequência de renderização do lado do servidor" className='sm:w-full lg:w-4/5'/>
              <p className='text-center'>Fonte: <span className='reference'>(Beke, 2018, p. 15)</span></p>
            </div>

            <p className='paragraph'>
              Percebe-se que cliente efetua uma requisição GET para a rota <span className='italic'>/items</span>, fazendo com que o servidor transfira uma representação do recurso desta rota para o cliente. A imagem indica um servidor web dinâmico, visto que esse interage com o banco de dados e utiliza de seus dados para renderizar, isto é, construir um documento HTML, que será então enviado ao cliente, cujo único papel será efetuar o processo de CRP no documento recebido.
            </p>

            <p className='paragraph'>
              <span className='reference'>Vega (2017)</span> determina algumas vantagens e desvantagens para a abordagem SSR. Dentre as vantagens, destacam-se: 
            </p>
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Melhor SEO;</li>
                <li>Carregamento inicial da página mais rápido.</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Já dentre as desvantagens, destacam-se:
            </p>
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Maior número de requisições são feitas;</li>
                <li>Uma renderização mais lenta no geral;</li>
                <li>Páginas são recarregadas por inteiras.</li>
              </ul>
            </div>  

          </div>

        </section>

        <div className='separator'/>

        {/* CSR */}
        <section className='my-1' id='csr'>
          <h1 className='text-xl font-bold'>CSR</h1>
          
          <div>

            <p className='paragraph'>
              <span className='reference'>Vega (2017)</span> explica que a renderização do lado do cliente se trata de renderizar o site utilizando de código JS presente na máquina do cliente. Ou seja, quando o usuário acessa um site, este recebe um documento HTML que serve como base e um arquivo JS que, ao ser executado pelo navegador, irá renderizar os componentes referentes ao site. A figura a seguir demonstra a sequência de passos executados para a renderização do lado do cliente.
            </p>

            <div className='paragraph flex flex-col gap-1 items-center'>
              <p className='text-center'>Sequência de renderização do lado do cliente</p>
              <img src='/images/CSR.png' alt="Sequência de renderização do lado do cliente" className='sm:w-full lg:w-4/5'/>
              <p className='text-center'>Fonte: <span className='reference'>(Beke, 2018, p. 16)</span></p>
            </div>

            <p className='paragraph'>
              Nota-se que o usuário efetua uma requisição GET para a rota <span className='italic'>/index.html</span>, fazendo com que o servidor transfira uma representação do recurso desta rota para o cliente. Este se refere ao documento base HTML, que na maioria das vezes não possui nenhum conteudo, entretanto, possui código JS que será capaz de interagir com APIs. Essas APIs são utilizadas para resgatar informações do servidor, que serão devolvidas ao cliente no formato <span className='italic'>JavaScript Object Notation</span> (JSON) para serem processadas e utilizadas.
            </p>

            <p className='paragraph'>
              Os dados JSON resgatados podem ser utilizados como conteúdo para serem inserido na página, isto é, no documento HTML. Esta inserção de dados é possibilitada através da manipulação da DOM, permitindo realizar mudanças na interface do usuário de maneira incremental. Este conjunto de tecnologias é chamado de <span className='italic'>Dynamic HTML</span> <span className='reference'>(Ollila; Mäkitalo; Mikkonen, 2021, p. 790)</span>. 
            </p>

            <p className='paragraph'>
              <span className='reference'>Vega (2017)</span> determina algumas vantagens e desvantagens para CSR. Dentre as vantagens, destacam-se:  
            </p>
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Interação mais “rica” com o site;</li>
                <li>Renderização mais rápida após o carregamento inicial.</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Já dentre as desvantagens, destacam-se:
            </p>
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>SEO fraca, caso não implementado corretamente;</li>
                <li>Carregamento inicial mais lento.</li>
              </ul>
            </div>  

          </div>

        </section>

        <div className='separator'/>

        {/* Como a renderização pode impactar SEO */}
        <section className='my-1' id='como_impacta_seo'>
          <h1 className='text-xl font-bold'>Como a renderização pode impactar SEO</h1>
          
          <div>

            <p className='paragraph'>
              Como foi determinado pelas vantagens e desvantagens de <span className='reference'>Vega (2017)</span>, além deste fato também ter sido mencionado por <span className='reference'>Sydorkina (2023)</span> e <span className='reference'>Beke (2018, p. 28-29)</span>, a abordagem CSR apresenta SEO ruim em comparação a abordagem SSR, ao menos, caso essa não seja implementada corretamente. Para determinar o porquê de isso acontecer, é importante saber quais fatores impactam SEO, para então determinar quais desses fatores podem ser impactados pela escolha entre SSR e CSR.
            </p>
            
            <p className='paragraph'>
              O fator mais aparente, e possivelmente principal para isto ocorrer é o da compatibilidade com motores de busca. <span className='reference'>Beke (2018, p. 29)</span> menciona como que os robôs, comumente chamados de <span className='italic'>crawlers</span>, de certos motores de busca não são capazes de renderizar código JS, dessa forma, prejudicando a indexação do conteúdo de sites CSR. Esse ponto é ainda complementado por <span className='reference'>Sydorkina (2023)</span>, que diz que que sites SSR são mais “amigáveis” para SEO, visto que estes já apresentam suas informações no formato de texto assim que chegam ao cliente, os tornando legíveis para motores de busca. Sendo assim, “compatibilidade com motores de busca” pode ser classificado como um dos fatores impactados pela escolha entre SSR e CSR e que pode afetar SEO. Mas esse não necessariamente é o único fator. Como foi mencionado por <span className='reference'>Vega (2017)</span>, sites CSR possuem um carregamento inicial mais lento. Isso ocorre pois o navegador precisa fazer o download de todo o arquivo JS para apenas então exibir o conteúdo na página. Entretanto, o mesmo cita que sites CSR apresentam um carregamento mais rápido após o carregamento inicial, além de estes apresentam interações mais “ricas” para os usuários. Esses aspectos, que são voltados para desempenho e usabilidade, também são relevantes para SEO, ao menos, após o surgimento das <span className='italic'>Web Vitals </span> (Métricas da web).
            </p>

            <p className='paragraph direct-long-ref'>
              As Métricas da Web são uma iniciativa do Google para fornecer orientações unificadas para indicadores de qualidade da página da web que são essenciais para oferecer uma ótima experiência do usuário na Web. O objetivo é simplificar a ampla variedade de ferramentas de medição de desempenho disponíveis e ajudar os proprietários de sites a se concentrar nas métricas mais importantes, as Core Web Vitals <span className='reference'>(Walton, 2024)</span>.
            </p>

            <p className='paragraph'>
              <span className='reference'>Firdausi(2024)</span> diz que esse conjunto de métricas, primordialmente, era usado como um indicador de ranqueamento apenas para dispositivos móveis, entretanto, eventualmente, passou a ser usado para o ranqueamento em desktops também, tornando-se um conjunto de métricas fundamental para SEO. As três principais métricas, denominadas <span className='italic'>Core Web Vitals</span> são:
            </p>
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li><span className='italic'>Largest Content Paint</span> (LCP);</li>
                <li><span className='italic'>Interaction to Next Paint</span> (INP);</li>
                <li><span className='italic'>Cumulative Layout Shift</span> (CLS).</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Ademais, outras métricas que não fazem parte das Core Web Vitals, mas ainda assim são relevantes para experiência do usuário, também são mencionadas: 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li><span className='italic'>First Input Delay</span> (FID);</li>
                <li><span className='italic'>Speed Index</span> (SI);</li>
                <li><span className='italic'>First Contentful Paint </span> (FCP);</li>
                <li><span className='italic'>Time to Interactive</span> (TTI);</li>
                <li><span className='italic'>Total Blocking Time</span> (TBT);</li>
                <li><span className='italic'>Time to First Byte</span> (TTFB).</li>
              </ul>
            </div>

            <p className='paragraph'>
              Cada uma dessas métricas mede algo relevante para o desempenho de uma página web, e pelo fato de que SSR e CSR podem impactar o desempenho de uma página, é possível que os valores dessas métricas sejam afetados, o que pode impactar SEO. Sendo assim “desempenho do site” podem ser classificados como um dos fatores que podem ser influenciados pela escolha entre SSR e CSR e que podem impactar SEO.
            </p>

            <p className='paragraph'>
              Para determinar se existem outros fatores além dos mencionados, é possível utilizar de documentações oficiais de motores de busca a fim de averiguar o que estes consideram como relevantes no ranqueamento de sites. O Google oferece uma boa noção dos fatores que este leva em consideração para determinar a classificação de um site em uma busca (Google, 2024): 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Significado da consulta;</li>
                <li>Relevância do conteúdo;</li>
                <li>Qualidade do conteúdo;</li>
                <li>Usabilidade das páginas Web;</li>
                <li>Contexto e configurações.</li>
              </ul>
            </div>

            <p className='paragraph'>
              Percebe-se que a maior parte desses fatores não possuem relação direta com a abordagem de renderização utilizada em um site, isto é, se este utiliza SSR ou CSR. Os fatores de “relevância do conteudo” e “qualidade do conteúdo” estão relacionados ao conteúdo em si, ou seja, as informações apresentadas no site. Já os fatores de “significado da consulta” e “contexto e configurações” estão relacionadas ao usuário, isto é, o que foi pesquisado pelo usuário e quais são as configurações e contexto deste, por exemplo: localização geográfica. Resta então o fator de usabilidade das páginas web, que é algo que pode ser mesurado pelas Web Vitals, dessa forma, enquadra-se no aspecto de “desempenho do site”. 
            </p>

            <p className='paragraph'>
              Determina-se então que os fatores influentes para SEO e que podem ser impactados pela escolha entre SSR e CSR são:
            </p>
          
            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Compatibilidade com motores de busca;</li>
                <li>Desempenho e usabilidade do site.</li>
              </ul>
            </div>

          </div>

        </section>

        <div className='separator'/>

        {/* Referências */}
        <section className='my-1' id='referencias'>
          <h1 className='text-xl font-bold'>Referências</h1>
          
          <div>

            <p className='paragraph'>
              Sydorkina, Anastasiia. Key Differences Between Client-Side, Server-Side and Pre-rendering. 2023. Disponível em: <a href="https://clockwise.software/blog/client-side-vs-server-side-vs-pre-rendering/" target='_blank' className='text-blue-800'>https://clockwise.software/blog/client-side-vs-server-side-vs-pre-rendering/</a>. Acesso em: 08 mai, 2024 às 22:07min.
            </p>

            <p className='paragraph'>
              Beke, Mathias. On the Comparison of Software Quality Attributes for Client-side and Server-side Rendering. University of Antwerp, jun. 2018. Disponível em: <a href="https://denbeke.be/thesis/versions/mathias-beke-final.pdf" target='_blank' className='text-blue-800'>https://denbeke.be/thesis/versions/mathias-beke-final.pdf</a>. Acesso em: 08 mai, 2024 às 21:41min. 
            </p>
            <p className='paragraph'>
              Vega, Cristian. Client-side vs. server-side rendering: why it’s not all black and white. 2017. Disponível em: <a href="https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/" target='_blank' className='text-blue-800'>https://www.freecodecamp.org/news/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d/</a>. Acesso em: 08 mai, 2024 às 22:26min.
            </p>
            <p className='paragraph'>
              Ollila, Risto; Mäkitalo, Niko; Mikkonen, Tommi. Modern Web Frameworks: A Comparison of Rendering Performance. Journal of Web Engineering, vol. 21, n. 3, p. 789-814, Mar. 2022 [ISSN 1544-5976]. Disponível em: <a href="https://journals.riverpublishers.com/index.php/JWE/article/view/7217/11489" target='_blank' className='text-blue-800'>https://journals.riverpublishers.com/index.php/JWE/article/view/7217/11489</a>. Acesso em: 08 mai, 2024 às 21:29min.
            </p>
            <p className='paragraph'>
              Walton, Philip. Web Vitals. 2024. Disponível em: <a href="https://web.dev/articles/vitals?hl=pt-br" target='_blank' className='text-blue-800'>https://web.dev/articles/vitals?hl=pt-br</a>. Acesso em: 08 mai, 2024 às 22:29min.
            </p>
            <p className='paragraph'>
              Firdausi, Maulidina Marlita. What Are Core Web Vitals and How to Measure Them. 2024. Disponível em: <a href="https://www.hostinger.com/tutorials/core-web-vitals" target='_blank' className='text-blue-800'>https://www.hostinger.com/tutorials/core-web-vitals</a>. Acesso em: 08 mai, 2024 às 22:31min.
            </p>

            <p className='paragraph'>
              Google. Como resultados são gerados automaticamente. 2024. Disponível em: <a href="https://www.google.com/search/howsearchworks/how-search-works/ranking-results/" target='_blank' className='text-blue-800'>https://www.google.com/search/howsearchworks/how-search-works/ranking-results/</a>. Acesso em: 08 mai, 2024 às 22:34min.
            </p>

          </div>

        </section>

      </div>

    </div>
  )
}

export default Render