import { useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTodoListsProvider } from "@/context/useTodoListsProvider";

function AddCard() {
  const listsProvider = useTodoListsProvider();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addCardClickHandler = () => {
    const value = inputRef.current?.value || "";
    if (value !== "") {
      listsProvider.addCard(
        value,
        listsProvider.lastId,
        listsProvider.setLastId
      );
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    }
  };

  return (
    <div className="flex flex-row justify-around gap-[15px]">
      <Input type="text" ref={inputRef} className="" />
      <Button
        type="submit"
        className="bg-primary text-white"
        onClick={(e) => {
          e.preventDefault();
          addCardClickHandler();
        }}
      >
        Adicionar
      </Button>
    </div>
  );
}

export default AddCard;
