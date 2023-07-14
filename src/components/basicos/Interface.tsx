import React from "react"

export default function Interface() {

    const handleClick = () => {
        window.location.href = 'http://localhost:3000';
    }

    const reloadClick = () => {
        window.location.href = 'http://localhost:3000';
        setTimeout(() => {
            location.reload();
        }, 100);
    }

    return (
        <div className="body">
            <div className="interface">
                <h1>Escolha o seu Caminho</h1>
                <div className="capitulos-area">
                    <div className="card ato0">
                        <div className="content">
                            <p className="heading">Prólogo:
                            </p><p className="para">
                            O SALGUEIRO ANCESTRAL
                            </p>
                            <button className="btn">Ler este arco</button>
                        </div>
                    </div>
                    <div className="capitulos-todos">

                        <div className="card ato1">
                            <div className="content"
                                onMouseEnter={() => { 
                                    
                                }}
                            >
                                <p className="heading">Pré-história:
                                </p><p className="para">
                                AARDRA
                                </p>
                                <button className="btn">
                                    Ler este arco
                                </button>
                            </div>
                        </div>

                        <div className="card ato2">
                            <div className="content">
                                <p className="heading">Idade Antiga:
                                </p><p className="para">
                                NIRVANA
                                </p>
                                <button className="btn">Ler este arco</button>
                            </div>
                        </div>

                        <div className="card ato3">
                            <div className="content">
                                <p className="heading">Idade Média:
                                </p><p className="para">
                                ANIMA
                                </p>
                                <button className="btn">Ler este arco</button>
                            </div>
                        </div>

                        <div className="card ato4">
                            <div className="content">
                                <p className="heading">Era Industrial:
                                </p><p className="para">
                                IXIS
                                </p>
                                <button className="btn">Ler este arco</button>
                            </div>
                        </div>

                        <div className="card ato5">
                            <div className="content">
                                <p className="heading">Era Moderna:
                                </p><p className="para">
                                GRAVITH
                                </p>
                                <button className="btn">Ler este arco</button>
                            </div>
                        </div>

                        <div className="card ato6">
                            <div className="content">
                                <p className="heading">Futuro Distante:
                                </p><p className="para">
                                ETROS
                                </p>
                                <button className="btn">Ler este arco</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="card ato7">
                        <div className="content">
                            <p className="heading">Ato Final:
                            </p><p className="para">
                            A CASCATA DAS ERAS
                            </p>
                            <button className="btn">Ler este arco</button>
                        </div>
                    </div>
                    
                </div>

                <div className="botoes">
                    <button onClick={handleClick}>Voltar à Capa</button>
                    <button onClick={reloadClick}>Reiniciar Livro</button>
                </div>
            </div>
        </div>
    )
}