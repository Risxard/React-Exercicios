import './App.css'
import React from 'react'


import Mega from './components/Mega/Mega'
import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from "./components/comunicacao/IndiretaPai.jsx"
import Card from './components/layout/Card'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar';
import TabelaProdutos from './components/Repetição/TabelaProdutos';
import ListaAlunos from './components/Repetição/ListaAlunos';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import Familia from './components/basicos/Familia';
import Aleatorio from './components/basicos/Aleatorio';
import Fragmento from './components/basicos/Fragmento';
import ComParametro from './components/basicos/ComParametro';
import Primeiro from './components/basicos/Primeiro';



export default (props) => {
    return (
        <div id='App'>
            <h1>Fundamentos React</h1>

            <div className='Cards'>


                <Card titulo="#13 - Desafio MegaSena" color='#D8BFD8'>
                    <Mega></Mega>
                </Card>
                
                <Card titulo="#12 - Contador" color='#85659E '>
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="#11 - Componente Controlado (Input)" color='#85929E '>
                    <Input></Input>
                </Card>

                <Card titulo="#10 - Comunicação Indireta" color='#58D68D'>
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="#09 - Comunicação Direta" color='#800000'>
                    <DiretaPai></DiretaPai>

                </Card>

                <Card titulo="#08 - Renderização condicional" color='#E0B0FF'>
                    <ParOuImpar numero={21}></ParOuImpar>
                    <UsuarioInfo usuario={{ nome: 'Fernando' }} ></UsuarioInfo>

                </Card>

                <Card titulo="#07 - Desafio Repetição" color='#EFB7CE'>
                    <TabelaProdutos></TabelaProdutos>
                </Card>

                <Card titulo="#06 - Repetição" color='#5D3FD3 '>
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="#05 - Componentes com Filhos" color='#AF7AC5 '>
                    <Familia sobrenome="Silva ">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Ana" />
                        <FamiliaMembro nome="Gustavo" />
                    </Familia>
                </Card>

                <Card titulo="#04 - Desafio Aleatório" color='#FFBF00'>
                    <Aleatorio min={1} max={60} />
                </Card>

                <Card titulo="#03 - Fragmento" color='#9FE2BF'>
                    <Fragmento />
                </Card>

                <Card titulo="#02 - Desafio Com Parametro" color='#6495ED'>
                    <ComParametro
                        titulo="Situação do aluno"
                        aluno="Pedro Silva"
                        nota={9.3}
                    />
                </Card>

                <Card titulo="#01 - Primeiro Desafio" color='#DE3163'>
                    <Primeiro />
                </Card>
            </div>

        </div>
    );
}