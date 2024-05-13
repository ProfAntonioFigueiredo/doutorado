import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaEdit, FaTrash} from 'react-icons/fa'

const DivLista = styled.div`
    width:100%;
    min-height: 100vh;
    padding: 50px;
    /* margin: auto; */
    font-family:Arial;
    background-image: url('https://img.freepik.com/premium-photo/ultra-minimalistic-red-lines-ppt-background-simple-black-paper-perfect-presentations_804788-2214.jpg');
    background-size: cover;
    background-position: center center;

    h1{
        color: white;
        text-align: center;
        padding: 25px;
        padding-top: 40px;
    }

    .btn--pesquisar{
        text-decoration:none;
        margin-bottom:20px;
        background-color:rgb(16, 154, 14);
        color: white;
        display:inline-block;
        border-radius: 10px;
        padding: 15px 20px;
        transition: all .2s ease-in-out;
    }
    
    
    .btn--pesquisar:hover{
        transform: scale(1.1);
    }
    
    .btn--voltar{
        text-decoration:none;
        margin-bottom:20px;
        background-color:rgb(24, 59, 163);
        color: white;
        display:inline-block;
        border-radius: 10px;
        padding: 15px 20px;
        transition: all .2s ease-in-out;
    }

    .btn--voltar:hover{
        transform: scale(1.1);
    }
    

    .table--control{
        
        margin: auto;
        overflow-x: auto;
        width: 100%;
    }

    table{
        width: 100%; 
        min-width: 900px; 
        margin: auto;
    }

    .col--btn{
        width: 80px;
    }

    thead tr{background-color: rgb(146, 18, 12); color: white;}
    thead tr th{padding: 10px;}
    tbody tr:nth-child(2n-1){background-color: #fff;}
    tbody tr:nth-child(2n){background-color: #ccc;}
    tbody tr td{padding:10px;}
    tbody tr :nth-child(4){text-align:center; font-size: 20px}



    tbody tr td a{
        background-color: none;
        margin-bottom: 5px; 
        margin-right: 10px; 
        color: blue
    }
    tbody tr td button{color: red; background-color:none; border:none; font-size:18px}

    tfoot tr td{text-align:center; background-color:#333; color:white;padding:10px}

    .fim{
        text-align: right; padding: 10px;
    }
`
    

export default function ListaPesquisadores(){

    const [pesquisadores, setPesquisadores] = useState([])

useEffect(()=>{
    fetch("http://localhost:8080/07-WebApi/api/pesquisador/").then((resp)=>{
    return resp.json();
    }).then((resp)=>{
        setPesquisadores(resp)
    }).catch((error)=>{
        console.log(error)
    })
},[])

//PARA DELETAR

    const handleDelete =(id)=>{
        fetch(`http://localhost:8080/07-WebApi/api/pesquisador/${id}`,{
            method:"delete"
    }).then(()=>{
        window.location = "/"
    }).catch((error)=>{
        console.log(error)
    })
    }

    return(
        <DivLista>
        <h1>Lista Pesquisadores</h1>
        <Link to="/incluir" className='btn--pesquisar'>Inserir Pesquisador</Link>
        <div className='table--control'>
        <table >
            <colgroup>
                <col />
                <col />
                <col />
                <col className='col--btn'/>
            </colgroup>
            <thead>
                <tr>
                    <th>Nome</th><th>Nível</th><th>Ação</th><th></th>
                </tr>
            </thead>
            <tbody>
                {pesquisadores.map((pesquisador)=>(
                    <tr key={pesquisador.codigo}>
                        <td>{pesquisador.nome}</td>
                        <td>{pesquisador.nivel}</td>
                        <td>
                        <Link to={`/editar/${pesquisador.codigo}`}><FaEdit /></Link>
                        <button onClick={handleDelete.bind(this, pesquisador.codigo)}><FaTrash/></button>
                        
                        </td>
                    </tr>
                ))}
            </tbody>
            
            <tfoot>
                <tr>
                    <td colSpan={'4'}>Pesquisadores</td>
                </tr>
            </tfoot >            
        </table>
        </div>
        <div className="fim">
            <Link to={`/`} className='btn--voltar'>Voltar para o portal</Link>
        </div>
        </DivLista>
        
    );
}