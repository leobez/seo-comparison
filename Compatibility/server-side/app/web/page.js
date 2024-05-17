import React from 'react'

const Web = () => {

  return (
    <div className='flex relative'>

      {/* SUMÁRIO */}
      <div className='hidden sm:block sticky w-56 top-0 h-[100vh] border-r border-black p-4 '>
          <div className='font-bold text-lg'>Sumário</div>
          <hr />
          <div>
              <ul className='flex flex-col text-sm'>
                <li className='hover:bg-slate-300 h-10'><a href='#web' className='h-full w-full flex items-center px-1'>Web</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#linguagens_da_web' className='h-full w-full flex items-center px-1'>Linguagens da Web</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#html' className='h-full w-full flex items-center px-1'>HTML</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#css' className='h-full w-full flex items-center px-1'>CSS</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#javascript' className='h-full w-full flex items-center px-1'>JavaScript</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#http' className='h-full w-full flex items-center px-1'>HTTP</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#servidor_web' className='h-full w-full flex items-center px-1'>Servidor web</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#servidor_web_estatico' className='h-full w-full flex items-center px-1'>Servidor web estático</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#servidor_web_dinamico' className='h-full w-full flex items-center px-1'>Servidor web dinâmico</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#navegador_web' className='h-full w-full flex items-center px-1'>Navegador web</a></li>
                <li className='hover:bg-slate-300 h-10'><a href='#referencias' className='h-full w-full flex items-center px-1'>Referências</a></li>
              </ul>
          </div>
      </div>

      {/* CONTEÚDO */}
      <div className='flex-1 p-4 z-10'>

        {/* Renderização de páginas web */}
        <section className='my-1' id='web'>
          <h1 className='text-xl font-bold'>Web</h1>
          
          <div>

            <p className='paragraph'>
              Responsável por interconectar dispositivos e pessoas ao redor do mundo todo, a internet revolucionou o mundo do computador e da comunicação. Esta foi projetada para ser ou servir uma infraestrutura geral na qual novas aplicações poderiam ser desenvolvidas em cima. Aplicações com os mais diversos fins, tais como: Correio eletrônico, transferência de arquivos, comunicação por voz, entre diversos outros (Leiner et al., 1997, p. 102 e 104).
            </p>

            <p className='paragraph'>
              Entretanto, dentre as aplicações desenvolvidas para a internet, a que mais chamou a atenção do público geral foi a Web. O provável motivo disto é o fato de a Web funcionar por demanda, isto é, os usuários podem requisitar o conteúdo que quiserem, quando quiserem, que estes o irão receber, diferente das transmissões de rádio ou televisão, em que o usuário deveria sintonizar no momento específico que o provedor disponibilizasse o conteúdo de seu interesse (Kurose; Ross, 2009, p. 72).
            </p>

            <p className='paragraph'>
              Lins (2013, p. 24) define a Web como um espaço de rede em que as informações são documentos de hipertexto, ou seja, documentos que apresentam conteúdos e referências para outros conteúdos. Essas referências podem apontar:
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Para outro local no mesmo documento, chamados de páginas;</li>
                <li>Para outras páginas localizadas no mesmo local de rede, chamados de sites; </li>
                <li>Para outras páginas de outros sites.</li>
              </ul>
            </div>  

            <p className='paragraph'>
              Kurose e Ross (2009, p. 48) dizem que essa tecnologia foi criada entre 1989 e 1991, época em que o programador suíço Tim Berners Lee e seus companheiros haviam desenvolvido as versões iniciais de quatro componentes essenciais para a Web: Hypertext markup language (HTML), Hypertext transfer protocol (HTTP), um servidor web e um navegador web. Esses componentes são cruciais para o entendimento de como a Web funciona e serão elaborados nas subseções seguintes.
            </p>
          </div>
        </section>

        <div className='separator'/>

        {/* Linguagens da Web */}
        <section className='my-1' id='linguagens_da_web'>
          <h1 className='text-xl font-bold'>Linguagens da Web</h1>
          
          <div>

            <p className='paragraph'>
              Além da linguagem de marcação HTML, existem outras duas linguagens muito importantes no contexto da Web, que são: Cascading Style Sheets (CSS) e JavaScript (JS), os quais serão explicadas nas subseções seguintes.
            </p>
          </div>
        </section>

        {/* HTML */}
        <section className='my-1' id='html'>
          <h1 className='text-xl font-bold'>HTML</h1>
          
          <div>
            <p className='paragraph'>
              HTML é o código usado para estruturar uma página Web e seu conteúdo. Utilizando dos elementos HTML, identificados por tags, é possível delimitar ou agrupar partes do conteúdo para que este apareça ou atue de diferentes formas. A figura a seguir demonstra um exemplo de código HTML (MDN Web Docs, 2024).
            </p>
            <div className='paragraph flex flex-col gap-1 items-center'>
              <p className='text-center'>Exemplo de código HTML</p>
              <img src='/images/html.png' alt="HTML" className='min-w-[200px] min-h-[200px]'/>
              <p className='text-center'>Fonte: <span className='reference'>(W3Schools, 2024)</span></p>
            </div>
          </div>

        </section>

        {/* CSS */}
        <section className='my-1' id='css'>
          <h1 className='text-xl font-bold'>CSS</h1>
          
          <div>

            <p className='paragraph'>
              CSS é a linguagem usada para especificar a forma como documentos, tal como HTML, são apresentados. Isto é feito através do uso de regras de CSS, que especificam certas características dos elementos, como: cor, tamanho, posição etc. Essas regras são aplicadas aos elementos HTML e determinam o seu estilo. A figura a seguir demonstra um exemplo de código CSS (MDN Web Docs, 2024).
            </p>
            <div className='paragraph flex flex-col gap-1 items-center'>
              <p className='text-center'>Exemplo de código CSS</p>
              <img src='/images/css.png' alt="CSS" className='min-w-[200px] min-h-[200px]'/>
              <p className='text-center'>Fonte: <span className='reference'>(W3Schools, 2024)</span></p>
            </div>
          </div>

        </section>

        {/* JS */}
        <section className='my-1' id='javascript'>
          <h1 className='text-xl font-bold'>JavaScript</h1>
          
          <div>

            <p className='paragraph'>
              JS é uma linguagem de programação conhecida majoritariamente por ser a linguagem de scripts na Web. Segundo dados de W3Techs (2024), JS é utilizado em 98.8% dos sites como uma linguagem do lado do cliente.
            </p>
            
            <p className='paragraph'>
              Sendo uma linguagem de programação, esta oferece diversas funcionalidades uteis, tais como: armazenamento em variáveis, operações lógicas, execução de código em resposta a determinados eventos etc. Ademais, além das funcionalidades básicas de uma linguagem de programação, JS também pode ser utilizado para alterar documentos HTML e CSS de uma página Web, proporcionando dinamismo as páginas (MDN Web Docs, 2024). “Um dos motivos da ascensão de scrip-ting é que este permite interfaces de usuário ricas e responsivas para aplicações Web” (Ollila; Mäkitalo; Mikkonen, 2021, p. 790, tradução nossa).
            </p>
            
            <p className='paragraph'>
              Tratando de JS, é importante mencionar também os frameworks JS, que facilitaram o desenvolvimento de aplicações web mais dinâmicas e interativas. Frameworks consistem em bibliotecas que definem uma maneira na qual um software será desenvolvido, oferecendo assim previsibili-dade e homogeneidade durante o desenvolvimento deste. Os frameworks JS são comumente conhecidos como Client-side frameworks e, dentre os diversos que existem, aqueles que são mais utilizados são: Ember, Angular, Vue e React (MDN Web Docs, 2024).
            </p>

          </div>
        </section>

        <div className='separator'/>

        {/* HTTP */}
        <section className='my-1' id='http'>
          <h1 className='text-xl font-bold'>HTTP</h1>
          
          <div>

            <p className='paragraph'>
              HTTP é a base de qualquer troca de dados na Web. Se trata do protocolo que permite a obtenção de recursos, como documentos de hipertexto, imagens, vídeos, scripts entre outros, através de uma comunicação cliente-servidor. As mensagens enviadas pelo cliente, geralmente um vegador, são chamadas de solicitações ou requisições, enquanto as mensagens que o servidor envia para o cliente são chamadas de respostas (MDN Web Docs, 2024). Para realizar uma requisição é necessário especificar o propósito dessa. Isto é feito através dos métodos HTTP, como os méto-dos GET e POST, que são utilizadas para recuperação e processamento de alguma informação, respectivamente, além de outros métodos (RFC 9110, 2022).
            </p>
          </div>
        </section>

        <div className='separator'/>

        {/* SERVIDOR WEB */}
        <section className='my-1' id='servidor_web'>
          <h1 className='text-xl font-bold'>Servidor web</h1>
          
          <div>

            <p className='paragraph'>
              Como já foi citado anteriormente, a Web se baseia em uma comunicação de cliente e servidor. O servidor, na maioria das vezes, se trata de um computador tal como o do cliente, entretanto, com algumas particularidades. Yeager e McGrath, (1996, p. 20) descrevem os principais aspectos de um servidor web: 
            </p>

            <div className='paragraph'>
              <ul className='list-disc list-inside pl-4 max-w-xl'>
                <li>Plataforma: se trata do hardware, sistema operacional e software de rede que fazem parte do servidor;</li>
                <li>Software: o software que efetivamente receberá e decodificará as requisições, e, a partir destas, enviará respostas;</li>
                <li>Informação: aquilo que o servidor efetivamente envia.</li>
              </ul>
            </div> 

            <p className='paragraph'>
              Um servidor deve ficar ativo de forma contínua, esperando por requisições de usuários na inter-net. Quando uma requisição é recebida, é estabelecido uma conexão entre “portas”, que são uma abstração que proporcionam um jeito simples e genérico de criar e usar conexões de rede. Estas portas determinam exatamente o tipo de recurso que está sendo requisitado, e, através des-tas, o recurso é enviado ao cliente. Desta forma, as únicas operações que um software de servi-dor web precisa, obrigatoriamente, ser capaz de realizar é a de ler e escrever em uma determinada porta, visto que todo o processo complexo de gerenciamento de conexão de rede é escondido atrás das abstrações provenientes do sistema operacional e do software de rede, referentes a pla-taforma do servidor (Yeager; McGrath, 1996, p. 20 - 21).
            </p>

            <p className='paragraph'>
              Estes servidores podem ser classificados de duas maneiras: servidores web estáticos e servidores web dinâmicos, que serão abordadas nas subseções seguintes.  
            </p>

          </div>

        </section>

        {/* Servidor web estático */}
        <section className='my-1' id='servidor_web_estatico'>
          <h1 className='text-xl font-bold'>Servidor web estático</h1>
          
          <div>

            <p className='paragraph'>
              Existem os servidores web estáticos, que são as versões mais simples de um servidor Web. Estes são chamados de estáticos pois “[...] o servidor envia seus arquivos tal como foram criados e armazenados (hospedados) ao navegador.” (MDN Web Docs, 2024).
            </p>

          </div>
          
        </section>

        {/* Servidor web dinâmico */}
        <section className='my-1' id='servidor_web_dinamico'>
          <h1 className='text-xl font-bold'>Servidor web dinâmico</h1>
          
          <div>

            <p className='paragraph'>
              Também existem os servidores web dinâmicos, que são servidores capazes de realizar alterações nos próprios arquivos antes que estes sejam enviados ao cliente. Estes são semelhantes aos servidores Web estáticos, porém, interagem com alguns softwares adicionais, como por exemplo, um banco de dados (MDN Web Docs, 2024).
            </p>

            <p className='paragraph direct-long-ref'>
              Um banco de dados é uma coleção organizada de informações - ou dados - estruturadas, normalmente armazenadas eletronicamente em um sistema de computador. Um banco de dados é geralmente controlado por um sistema de gerenciamento de banco de dados (DBMS). Juntos, os dados e o DBMS, juntamente com os aplicativos associados a eles, são chamados de sistema de banco de dados, geralmente abreviados para apenas banco de dados (Oracle, 2024).
            </p>

            <p className='paragraph'>
              Beke (2018, p. 18) complementa que, a fim de proporcionar dinamismo as páginas, os servidores precisam se comunicar com softwares adicionais e diz que isso foi possibilitado com o surgimento do padrão Common Gateway Interface (CGI). 
            </p>

            <p className='paragraph direct-long-ref'>
              [...] CGI é uma simples interface para executar programas externos, softwares ou gateways em um servidor de informações de maneira independente da plataforma. Atualmente, os servidores de informações apoiados são servidores HTTP (RFC 3875, 2004, tradução nossa).
            </p>

            <p className='paragraph'>
              Este conjunto de tecnologias permite a distribuição de documentos dinâmicos, que geralmente possuem alguma base, no caso, um modelo de página HTML (HTML Template), porém, em que o conteudo da página de fato seja populado dinamicamente por informações do banco de dados (MDN Web Docs, 2024).
            </p>
          </div>
          
        </section>

        <div className='separator'/>

        {/* NAVEGADOR WEB */}
        <section className='my-1' id='navegador_web'>
          <h1 className='text-xl font-bold'>Navegador web</h1>
          
          <div>

            <p className='paragraph'>
              Com a conceptualização da Web, ficou claro a necessidade de um software que facilitasse o acesso aos endereços dos servidores web e exibisse os conteúdos requisitados de forma intuitiva e fácil. Um navegador web tem justamente esse propósito.
            </p>

            <p className='paragraph direct-long-ref'>
              Sua tecnologia e seu design permitiam mostrar a página de conteúdo do sítio de modo agradável e navegar entre as informações por meio das referências, os hyperlinks, campos nos quais o usuário poderia clicar com um mouse para deslocar-se a outras páginas ou sítios (Lins, 2013, p. 24)
            </p>


            <p className='paragraph'>
              Para o usuário, o ato de acessar uma página da Web se trata de um simples ato de digitar uma URL no navegador e acessá-la. Entretanto, para o navegador, existe uma série de ações que devem ser realizadas a fim de exibir o conteúdo requisitado. 
            </p>

            <p className='paragraph'>
              Após a conexão entre cliente e servidor ter sido estabelecida, conforme o navegador recebe os pacotes referente ao documento solicitado, é iniciado um processo chamado de Critical Rendering Path (CRP), que se trata da sequência de passos que o navegador deve executar para converter todo o código HTML, CSS e JS nos pixels da tela que representam o site (MDN Web Docs, 2024). 
            </p>

          </div>

        </section>

        <div className='separator'/>

        {/* REFERENCIAS */}
        <section className='my-1' id='referencias'>
          <h1 className='text-xl font-bold'>Referências</h1>
          
          <div>

            <p className='paragraph'>
              Leiner, Barry M.; Cerf, Vinton G.; Clark, David D.; Kahn, Robert E.; Kleinrock, Leonard; Lynch, Daniel C.; Postel, Jon; Roberts, Lawrence G.; Wolff, Stephen S. The Past and Future History of the Internet. Communications of the ACM, vol. 40, n. 2, p. 102-108, Fev. 1997 [ISSN 0001-0782]. Disponível em: <a href="https://dl.acm.org/doi/pdf/10.1145/253671.253741" target='_blank' className='text-blue-800'>https://dl.acm.org/doi/pdf/10.1145/253671.253741</a>. Acesso em: 08 mar, 2024 às 10:50min.
            </p>

            <p className='paragraph'>
              Kurose, James F.; Ross, Keith W. Redes de computadores e a internet: Uma abordagem Top-Down (5ª edição). 2010. Pearson Education. Trad. Opportunity Translations. Disponível em: <a href="https://www.facom.ufu.br/~sequincozes/referencias/kurose2010.pdf" target='_blank' className='text-blue-800'>https://www.facom.ufu.br/~sequincozes/referencias/kurose2010.pdf</a>. Acesso em: 10 mar, 2024 às 16:43min.
            </p>

            <p className='paragraph'>
              Lins, Bernardo Felipe Estellita. A evolução da internet: uma perspectiva histórica. Caderno Aslegis, n. 48, p. 11-45, jan.-abr. 2013 [ISSN 1677-9010]. Disponível em: <a href="https://www.belins.eng.br/ac01/papers/aslegis48_art01_hist_internet.pdf" target='_blank' className='text-blue-800'>https://www.belins.eng.br/ac01/papers/aslegis48_art01_hist_internet.pdf</a>. Acesso em: 09 mar, 2024 às 11:05min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. HTML básico. 2023. Disponível em: <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics" target='_blank' className='text-blue-800'>https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics</a>. Acesso em: 08 mar, 2024 às 10:48min.
            </p>

            <p className='paragraph'>
              W3Schools. HTML. HTML Basic Examples. 2024. Disponível em: <a href="https://www.w3schools.com/html/html_basic.asp" target='_blank' className='text-blue-800'>https://www.w3schools.com/html/html_basic.asp</a>. Acesso em: 08 mar, 2024 às 10:56min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. O que é CSS? 2023. Disponível em: <a href="https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps/What_is_CSS" target='_blank' className='text-blue-800'>https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps/What_is_CSS</a>. Acesso em: 08 mar, 2024 às 11:00min.
            </p>

            <p className='paragraph'>
              W3Schools. CSS. CSS Tutorial. 2024. Disponível em: <a href="https://www.w3schools.com/css/" target='_blank' className='text-blue-800'>https://www.w3schools.com/css/</a>. Aces-so em: 08 mar, 2024 às 10:59min.
            </p>

            <p className='paragraph'>
              W3Techs. Historical yearly trends in the usage statistics of client-side programming lan-guages for websites. 2024. Disponível em: <a href="https://w3techs.com/technologies/history_overview/client_side_language/all/y" target='_blank' className='text-blue-800'>https://w3techs.com/technologies/history_overview/client_side_language/all/y</a>. Acesso em: 08 mai, 2024 às 21:20min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. O que é JavaScript? 2023. Disponível em: <a href="https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target='_blank' className='text-blue-800'>https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/What_is_JavaScript</a>. Acesso em: 08 mar, 2024 às 11:20min.
            </p>

            <p className='paragraph'>
              Ollila, Risto; Mäkitalo, Niko; Mikkonen, Tommi. Modern Web Frameworks: A Comparison of Rendering Performance. Journal of Web Engineering, vol. 21, n. 3, p. 789-814, Mar. 2022 [ISSN 1544-5976]. Disponível em: <a href="https://journals.riverpublishers.com/index.php/JWE/article/view/7217/11489" target='_blank' className='text-blue-800'>https://journals.riverpublishers.com/index.php/JWE/article/view/7217/11489</a>. Acesso em: 08 mai, 2024 às 21:29min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. Introduction to client-side frameworks. 2024. Disponível em: <a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction" target='_blank' className='text-blue-800'>https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Introduction</a>. Acesso em: 09 abr, 2024 às 22:10min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. Uma visão geral do HTTP. 2023. Disponível em: <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview" target='_blank' className='text-blue-800'>https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Overview</a>. Acesso em: 08 mar, 2024 às 11:01min.
            </p>

            <p className='paragraph'>
              RFC 9110. HTTP Semantics. Internet Engineering Task Force (IETF), jun. 2022 [ISSN 2070-1721]. Disponível em: <a href="https://www.rfc-editor.org/rfc/rfc9110#name-introduction" target='_blank' className='text-blue-800'>https://www.rfc-editor.org/rfc/rfc9110#name-introduction</a>. Acesso em: 10 mar, 2024 às 10:09min.
            </p>

            <p className='paragraph'>
              Yeager, Nancy J.; McGrath, Robert E. Web Server Technology. Morgan Kaufmann, 1996. Disponível em: <a href="https://books.google.com.br/books?id=0jExRH3_-hQC&printsec=frontcover" target='_blank' className='text-blue-800'>https://books.google.com.br/books?id=0jExRH3_-hQC&printsec=frontcover</a>. Acesso em: 08 mai, 2024 às 21:36min. 
            </p>

            <p className='paragraph'>
              MDN Web Docs. O que é um servidor web (web server)? 2023. Disponível em: <a href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server" target='_blank' className='text-blue-800'>https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server</a>. Acesso em: 10 mar, 2024 às 22:58min.
            </p>

            <p className='paragraph'>
              Oracle. O que é um Banco de Dados? 2024. Disponível em: <a href="https://www.oracle.com/br/database/what-is-database/" target='_blank' className='text-blue-800'>https://www.oracle.com/br/database/what-is-database/</a>. Acesso em: 08 mar 2024 às 10:43min. 
            </p>

            <p className='paragraph'>
              Beke, Mathias. On the Comparison of Software Quality Attributes for Client-side and Server-side Rendering. University of Antwerp, jun. 2018. Disponível em: <a href="https://denbeke.be/thesis/versions/mathias-beke-final.pdf" target='_blank' className='text-blue-800'>https://denbeke.be/thesis/versions/mathias-beke-final.pdf</a>. Acesso em: 08 mai, 2024 às 21:41min. 
            </p>

            <p className='paragraph'>
              RFC 3875. The Common Gateway Interface (CGI) Version 1.1. The Internet Society, out. 2004. Disponível em: <a href="https://www.rfc-editor.org/rfc/rfc3875.html#section-1.1" target='_blank' className='text-blue-800'>https://www.rfc-editor.org/rfc/rfc3875.html#section-1.1</a>. Acesso em: 12 mar, 2024 às 22:32min.
            </p>

            <p className='paragraph'>
              MDN Web Docs. Critical Rendering Path. Disponível: <a href="https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" target='_blank' className='text-blue-800'>https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path</a>. Acesso em: 10 mar, 2024 às 18:09min. 
            </p>

          </div>
        </section>
      </div>

    </div>
  )
}

export default Web