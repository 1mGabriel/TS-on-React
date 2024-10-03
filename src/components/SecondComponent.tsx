import {ReactElement} from 'react'
// 3- Desestruturando Props:
interface Props{
    name: String
}

const SecondComponent = (props:Props):ReactElement => {
  return (
    <div>
      <p>Meu segundo Componente</p>
      <p>O nome dele é {props.name}</p>
    </div>
  )
}

export default SecondComponent
