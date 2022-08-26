
export const Boton = ({name,ingresarFuncion,claseBtn}) => {
    return (
        <>
            <button className={claseBtn} onClick={ingresarFuncion}>{name}</button>
        </>
    )

}
