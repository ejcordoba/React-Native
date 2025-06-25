

export const BasicTypes = () => {
  
const name:string = 'Eduardo';
const age: number = 43;
const isActive: boolean = true;

const powers: string[] = ['React','ReactNative','Angular','Vue','Qwik'];

//powers.push('Next')
return (
    <>
        <h3>Tipos básicos</h3>
        { name } {age} { isActive ? 'true':'false'}
        <br/>
        {powers.join(', ')}
    </>
  )
}
