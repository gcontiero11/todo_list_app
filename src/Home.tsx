import TodoContainer from "@/components/content/TodoContainer";
import AddCard from "@/components/content/AddCard";
import { useTodoListsProvider } from "./context/useTodoListsProvider";

export default function Home() {
  const listsProvider = useTodoListsProvider();
  const { todoList, doingList, doneList } = listsProvider;

  return (
    <div className="grid grid-rows-[auto_1fr] gap-[10px] h-full">
      <AddCard />
      <div className="row-start-2 row-span-1 w-full h-full flex flex-direction-row justify-around gap-[15px]">
        <TodoContainer title="A Fazer" cardsList={todoList} cardType="todo" />
        <TodoContainer title="Fazendo" cardsList={doingList} cardType="doing" />
        <TodoContainer title="Concluído" cardsList={doneList} cardType="done" />
      </div>
    </div>
  );
}
