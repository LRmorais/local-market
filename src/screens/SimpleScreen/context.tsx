import React, {
  createContext,
  useContext as useReactContext,
} from 'react';

export interface IData {
  teste?: string;
  log?: () => void;
}

const Context = createContext({});
export const useContext = () => useReactContext(Context);

const Provider = (props: any) => {
  const teste = 'teste';

  const log = () => {
    console.log()
  }
 
  const value: IData = {
    log,
    teste
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default Provider;
