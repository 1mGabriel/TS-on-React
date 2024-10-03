import { createContext } from "react";
import "./App.css";
import Destruction, { Category } from "./components/Destruction";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";
import Context from "./components/Context";

// Type:
type textOrNull = string | null;

// Context:
interface IAppContext {
  language:string,
  framework:string,
  projects:number
}

 export const appContext = createContext <IAppContext | null>(null)

function App() {
  //1- Declaração de variaveis:
  const name: string = "Gabriel";
  const age: number = 23;
  const isWorking: boolean = false;
  //
  //2 - Funções em componentes:
  const userGreeting = (name: string): string => {
    return `Olá ${name}`;
  };
  //
  // Type:
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  mySecondText = "Opa";
  //

  // Context

  const contextValue:IAppContext = {
    language : "Javascript",
    framework: "Express",
    projects: 5
  }

  return (
    <appContext.Provider value={contextValue}>
    <div>
      <h1>Ts com react</h1>
      <h2>Meu nome {name}</h2>
      <h2>Minha idade {age}</h2>
      {!isWorking ? <h2>Não trabalho</h2> : <h2>Trabalho</h2>}
      <h3>{userGreeting(name)}</h3>
      <hr />
      <FirstComponent />
      <hr />
      {/* // 3- Desestruturando Props: */}
      <SecondComponent name="Gabriel" />
      <hr />
      {/* // 3- Desestruturando Props: */}
      <Destruction
        title="Primeiro Post"
        content="Algum conteudo"
        commentsQty={10}
        tags={["TS", "JS"]}
        category={Category.TS}
      />
      <Destruction
        title="Segundo Post"
        content="Outro conteudo"
        commentsQty={4}
        tags={["Python"]}
        category={Category.P}
      />
      <hr />
      {/* States */}
      <State />
    </div>
    <hr />
    <Context/>
    </appContext.Provider>
  );
}

export default App;
