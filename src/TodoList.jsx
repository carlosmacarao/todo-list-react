import React, { useState } from 'react';
import './TodoList.css'
import Icone from './assets/react.svg'

function TodoList () {

    const [lista, setLista] = useState([]);
    const [novoItem, setNovoItem] = useState("");

    function adicionaItem (form) {
        //form.preventDefault();

        if (!novoItem) {
            return ;
        }

        setLista([...lista, { text: novoItem, isCompleted: false}])
        setNovoItem("");
        document.getElementById('input-entrada').focus()
    }

    

    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={adicionaItem()}>

                <input onChange={(e) => {setNovoItem(e.target.value)}} type="text" value={novoItem} id="input-entrada" placeholder="Adicione uma tarefa" />

                <button className="add" type="submit">Add</button>

            </form>

            <div className="listaTarefas">
                 {
                    lista.length < 1 
                    ?
                    <img className='icone-central' src={Icone} alt="" /> 
                    : 
                    lista.map((item, index) => (
                        <div className="item">
                        <span>{item.text}</span>
                        <button className="del">Deletar</button>
                        </div>
                    ))
                     
                 }

                <div className="item">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <div className="item completo">
                    <span>Tarefa de exemplo</span>
                    <button className="del">Deletar</button>
                </div>

                <button className="deleteAll">Deletar Todas</button>

            </div>
        </div>
        
    )
}

export default TodoList;