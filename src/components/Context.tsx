import {useContext} from 'react'
import {appContext} from "../App"
const Context = () => {

    const details = useContext(appContext)

  return (
 <>
 {details && (
    <div>
        <h2>Lingaugem: {details.language}</h2>
        <h4>FW: {details.framework}</h4>
        <p>QTD: {details.projects}</p>
    </div>
 )}
 </>
  )
}

export default Context
