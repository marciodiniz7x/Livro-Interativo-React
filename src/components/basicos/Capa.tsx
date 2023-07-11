import React from "react";

export default function Capa() {
    const handleClick = () => {
        window.location.href = 'http://localhost:3000/basicos/interface';
    }

    return (
        <body>
            
            <div className="capa">
                <span className={`text-2xl`}>Márcio Diniz</span>
                <h1>A Guerra das Épocas</h1>
                <button onClick={handleClick}>Iniciar Leitura</button>
            </div>

        </body>
    )
}