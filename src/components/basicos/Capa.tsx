import React from "react"


export default function Capa() {

    // Cria os olhos de Goo na capa
    const gooEyes = document.createElement('div');
    gooEyes.classList.add('goo-eyes');

    const olho1 = document.createElement('div');
    olho1.classList.add('olho1', "eyes");

    const olho2 = document.createElement('div');
    olho2.classList.add('olho2', 'eyes');

    gooEyes.appendChild(olho1);
    gooEyes.appendChild(olho2);

    return (
        // Página Inteira
        <div className={`
            flex justify-center
            w-screen h-screen bg-white
        `}>

            {/* Capa */}
            <div className="capa">
                <h1>
                    <span className="destacar-title">Goo</span> <span className="title">O Lamento da Floresta
                    </span>
                </h1>

                <button className="iniciar-leitura sumir">Iniciar</button>

                <div className="goo-eyes"></div>

                <div className="particles sumir"></div>
            </div>
        </div>
    )
}