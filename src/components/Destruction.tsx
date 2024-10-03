import {ReactElement} from 'react'
// 3- Desestruturando Props:
interface Props{
    title: string
    content: string
    commentsQty: number
    tags: string[]

    // enum

    category: Category
  }

  export enum Category{
    JS = "JavaScript",
    TS = "TypeScript",
    P = "Python"
  }

const Destruction = ({title, content, commentsQty, tags, category}: Props):ReactElement => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentarios: {commentsQty}</p>
      {tags.map(tag =>(
        <span>#{tag}</span>
      ))}
      <h4>Categoria: {category}</h4>
    </div>
  )
}

export default Destruction
