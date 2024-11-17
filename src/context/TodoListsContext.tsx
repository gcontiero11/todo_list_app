import { createContext, useState, ReactNode } from "react";
import { CardType } from "../utils/CardType";

interface TodoListsContextType {
  lastId: number;
  setLastId: (newId: number) => void;

  todoList: CardType[];
  setTodoList: (newList: CardType[]) => void;

  doingList: CardType[];
  setDoingList: (newList: CardType[]) => void;

  doneList: CardType[];
  setDoneList: (newList: CardType[]) => void;

  moveCard: (
    card: HTMLElement | null | undefined,
    currentList: CardType[],
    currentListSetter: (newList: CardType[]) => void,
    nextList: CardType[],
    nextListSetter: (newList: CardType[]) => void
  ) => void;

  removeCard: (
    cardElement: HTMLElement | null | undefined,
    currentList: CardType[],
    setCurrentList: (newList: CardType[]) => void
  ) => void;

  addCard: (
    title: string,
    lastId: number,
    setLastId: (newId: number) => void
  ) => void;
}

export const TodoListsContext = createContext<TodoListsContextType | undefined>(
  undefined
);

export const TodoListsProvider = ({ children }: { children: ReactNode }) => {
  const [lastId, setLastId] = useState(4);
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Tusca",
    },
    {
      id: 2,
      title: "Lavar louça",
    },
    {
      id: 5,
      title: "Estudar",
    },
  ]);
  const [doingList, setDoingList] = useState([
    {
      id: 4,
      title: "Lavar Banheiro",
    },
  ]);
  const [doneList, setDoneList] = useState([
    {
      id: 3,
      title: "Arrumar a Cama",
    },
  ]);

  const addCard = (
    title: string,
    lastId: number,
    setLastId: (newId: number) => void
  ) => {
    let newTodoList = [...todoList];
    const newCard = {
      id: lastId + 1,
      title: title,
    };
    setLastId(lastId + 1);
    newTodoList.push(newCard);
    setTodoList(newTodoList);
  };

  const moveCard = (
    cardElement: HTMLElement | null | undefined,
    currentList: CardType[],
    setCurrentList: (newList: CardType[]) => void,
    nextList: CardType[],
    setNextList: (newList: CardType[]) => void
  ) => {
    if (!cardElement || cardElement === undefined) {
      console.log("cardElement is null or undefined");
      return;
    }
    const currentIndex = currentList.findIndex(
      (card) => card.id === Number.parseInt(cardElement.id)
    );
    const cardToMove = currentList[currentIndex];
    const newCurrentList = [...currentList];
    newCurrentList.splice(currentIndex, 1);
    const newNextList = [...nextList];
    newNextList.push(cardToMove);
    setCurrentList(newCurrentList);
    setNextList(newNextList);
  };

  const removeCard = (
    cardElement: HTMLElement | null | undefined,
    currentList: CardType[],
    setCurrentList: (newList: CardType[]) => void
  ) => {
    if (!cardElement || cardElement === undefined) {
      console.log("cardElement is null or undefined");
      return;
    }
    const currentListAux = [...currentList];
    const currentIndex = currentListAux.findIndex(
      (card) => card.id === Number.parseInt(cardElement.id)
    );
    currentListAux.splice(currentIndex, 1);
    setCurrentList(currentListAux);
  };

  return (
    <TodoListsContext.Provider
      value={{
        lastId,
        setLastId,
        todoList,
        setTodoList,
        doingList,
        setDoingList,
        doneList,
        setDoneList,
        moveCard,
        addCard,
        removeCard,
      }}
    >
      {children}
    </TodoListsContext.Provider>
  );
};
