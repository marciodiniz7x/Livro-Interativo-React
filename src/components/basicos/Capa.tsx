import React, { useEffect } from "react";

export default function Capa() {

    useEffect(() => {
        document.title = 'A Guerra das Épocas'
    })

    const handleClick = () => {
        window.location.href = 'http://localhost:3000/basicos/interface';
    }

    return (
        <div className="body">
            <div className="capa">
                <span className='autor'>Márcio Diniz</span>
                <h1>A Guerra das Épocas</h1>
                <button onClick={handleClick}>Iniciar Leitura</button>
            </div>
        </div>
    )
}