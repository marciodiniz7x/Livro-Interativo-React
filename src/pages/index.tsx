export default function Home() {

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

  function iniciarCapa() {

}

  return (
    
    <>

    <div>
      <h1>Principal</h1>
    </div>
    <div>
    <body onLoad={iniciarCapa}>

      <div className="capa">
          
          <h1><span className="destacar-title">Goo</span> <span className="title">O Lamento da Floresta</span></h1>

          <button className="iniciar-leitura sumir">Iniciar</button>

          <div className="particles sumir"></div>
      </div>

      <div className="pages page01 sumir">
          <header>
              <button className="voltar-capa">Voltar à Capa</button>
          </header>
          <div className="conteudo">

          </div>
      </div>

      <div className="pages page02 sumir">
          <header>
              <button className="voltar-capa">Voltar à Capa</button>
          </header>
          <div className="conteudo-page02">

          </div>
      </div>

      </body>
    </div>

    </>
  )
}