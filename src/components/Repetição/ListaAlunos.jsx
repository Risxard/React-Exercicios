import React from "react";
import alunos from '../../data/alunos'

export default (props) => {

    const ListaAlunos = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id} {aluno.nome} -> {aluno.nota}
            </li>
        );
    });


    return (
        <div>
            <ul style={{listStyle: "none"}}>
                {ListaAlunos}
            </ul>
        </div>
    )
};