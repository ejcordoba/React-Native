
export const BasicFunctions = () => {

    const addTwoNumber = ( a:number, b:number ): string => {
        //return (a + b).toString();
        return `${ a + b }`;
    }


  return (
    <>
        <h3>Funciones</h3>
        <span>El resultado de sumar: { addTwoNumber(3,8) }</span>
    </>
  )
}
