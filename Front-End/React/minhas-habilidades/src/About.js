import React from "react";

class Sobre extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    { " Leonardo Pestille Leão " }
                </h1>
                <p>
                    { " Estudante de Desenvolvimento Web " }
                </p>
                <h2>Minhas Habilidades</h2>
                <ul>
                    <li>{ " Git "}</li>
                    <li>{" Html "}</li>
                    <li>{" Css "}</li>
                    <li>{" JavaScript "}</li>
                    <li>{" Jest "}</li>
                </ul>
            </div>
        );
    }
}

export default Sobre;