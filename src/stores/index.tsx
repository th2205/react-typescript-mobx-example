import React, { useContext, createContext } from "react";
import { Countner } from "./counter";
import { Todo } from "./todo";
import { Cat } from "./catStore";

type RootStateValue = {
  counter: Countner;
  todo: Todo;
  cat: Cat;
};

const StoreContext = createContext<RootStateValue>({} as RootStateValue);

export const StoreProvider = ({ children }: { children: JSX.Element }) => {
  const store = {
    counter: new Countner(),
    todo: new Todo(),
    cat: new Cat(),
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
