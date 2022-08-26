import { useReducer, useRef } from "react";
import { Boton } from './Boton';

const ListaTareas = () => {
    const inputRef = useRef();

    const [tasks, dispatch] = useReducer( (state = [], action) => {
        switch(action.type){
            case 'add_task': {
                return [
                    ...state,
                    { id: state.length, title: action.title }
                ]
            }
            case 'remove_task':{
                return state.filter( (task, index) => index !==action.index);
            }
            case 'all_remove':{
                return []
            }
            default: {
                return state;
            }
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputRef.current.value === "" ){

        }else {
            dispatch({
                type: 'add_task',
                title: inputRef.current.value
            })
            inputRef.current.value = "";
        }

    }


    return <>
        <h1 className="titulo">Lista de Tareas</h1>
        <div className="container">
            <form className="formulario" onSubmit={handleSubmit}>
                <label>Ingresar Tarea</label>
                <input type="text"  name="title" ref={inputRef} />
                <Boton claseBtn="agregar" name="Agregar Tarea" type="submit" value="Enviar" />

            </form>
            <Boton name="Borrar Todo" claseBtn="borrar-todo" ingresarFuncion={() => dispatch({type: 'all_remove'})} />
            <div className="tasks">
                {tasks && tasks.map((task, index) => (
                    <div className="task" key={index}>
                        <h2>Tarea</h2>
                        <p>{task.title}</p>
                        <Boton claseBtn="borrar" name="Borrar" ingresarFuncion={() => dispatch({type:'remove_task', index}) } />
                    </div>
                ))}
            </div>
        </div>

    </>

}

export default ListaTareas;