import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'



const DivLista = styled.div`
        min-height: 100vh;
        display: flex;

        .bg-makenzie{
            width: 50%;
            background-color: royalblue;
            background-image: url('https://www.mackenzie.br/fileadmin/ARQUIVOS/Public/top/midias_noticias/noticias/2020/NOT%C3%8DCIAS_GEST%C3%83O_DE_CONTE%C3%9ADO_2020/Higien%C3%B3polis_SP__145_.jpg');
            background-size: cover;
            background-position: center center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .bg-makenzie img{
            width: 350px;
            display: block;
            padding-bottom: 200px;
        }

        .menu{
            width: 50%;
            background-color: #f3f4f5;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }

        .menu h1{
            margin-bottom: 80px;
            font-size: 3em;
        }

        .menu a{
            display: block;
            max-width: 90%;
            text-decoration: none;
            color: white;
            font-weight: bold;
            background-color: rgb(190, 24, 16);
            border-radius: 10px;
            padding: 20px 30px;
            margin-bottom: 30px;
            transition: all .2s ease-in-out;
        }
        .menu a:hover{
            transform: scale(1.1);
        }

        @media screen and (max-width: 768px) {
            
            
            flex-direction: column;
            

            .bg-makenzie{
                width: 100%;
                height: 30vh;
            }

            .bg-makenzie img{
            max-width: 80%;
            display: block;
            padding-bottom: 20px;
            }

            .menu{
            width: 100%;
            flex-grow: 1;
            justify-content: flex-start;
            }

        .menu h1{
            margin: 20px;
        }

        .menu a{
            text-align: center;
            border-radius: 8px;
            padding: 10px 15px;
            width: 70%;
            margin: 10px auto 10px auto;
            transition: all .2s ease-in-out;
            
        }
        }        
`
    

export default function ListaPesquisadores(){
 
    const [pesquisadores, setPesquisadores] = useState([])
    const [questionarios, setQuestionarios] = useState([])
    const [respostas, setRespostas] = useState([])



    return(
        <DivLista>
            <div className="bg-makenzie">
            <img src="mackenzie-logo.png" alt="Logo Machenzie"/>
            </div>
            <div className="menu">
                <h1>Página principal</h1>
                
                <Link to={`/selecionar`}>Clique aqui para visualizar os cadastros dos pesquisadores</Link><br/>
                <Link to={`/selecionarQuestionario`}>Clique aqui para visualizar os cadastros das questões</Link>
                <Link to={`/selecionarResposta`}>Clique aqui para visualizar as respostas</Link>
            </div>

        </DivLista>
    );
}