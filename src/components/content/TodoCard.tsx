import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { BsFillTrash3Fill } from "react-icons/bs";
import { useTodoListsProvider } from "@/context/useTodoListsProvider";

function TodoCard(props: { id: number; title: string; cardType: string }) {
  const listsProvider = useTodoListsProvider();
  const todoCardTransferHandler = (card: HTMLElement | null | undefined) => {
    listsProvider.moveCard(
      card,
      listsProvider.todoList,
      listsProvider.setTodoList,
      listsProvider.doingList,
      listsProvider.setDoingList
    );
  };

  const doingCardLeftTransferHandler = (
    card: HTMLElement | null | undefined
  ) => {
    listsProvider.moveCard(
      card,
      listsProvider.doingList,
      listsProvider.setDoingList,
      listsProvider.todoList,
      listsProvider.setTodoList
    );
  };

  const doingCardRightTransferHandler = (
    card: HTMLElement | null | undefined
  ) => {
    listsProvider.moveCard(
      card,
      listsProvider.doingList,
      listsProvider.setDoingList,
      listsProvider.doneList,
      listsProvider.setDoneList
    );
  };

  const doneCardTransferHandler = (card: HTMLElement | null | undefined) => {
    listsProvider.moveCard(
      card,
      listsProvider.doneList,
      listsProvider.setDoneList,
      listsProvider.doingList,
      listsProvider.setDoingList
    );
  };

  const deleteCardHandler = (e: any) => {
    if (props.cardType == "todo") {
      listsProvider.removeCard(
        e.currentTarget.parentElement?.parentElement,
        listsProvider.todoList,
        listsProvider.setTodoList
      );
      return;
    }
    if (props.cardType == "doing") {
      listsProvider.removeCard(
        e.currentTarget.parentElement?.parentElement,
        listsProvider.doingList,
        listsProvider.setDoingList
      );
      return;
    }
    if (props.cardType == "done") {
      listsProvider.removeCard(
        e.currentTarget.parentElement?.parentElement,
        listsProvider.doneList,
        listsProvider.setDoneList
      );
      return;
    }
  };
  return (
    <Card className="h-45 min-w-32 w-4/6 self-center">
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
      </CardHeader>
      <CardContent
        id={props.id.toString()}
        className="flex flex-col justify-between"
      >
        <div className="self-end flex flex-row gap-[4px]">
          {props.cardType == "todo" && (
            <Button
              className="w-auto h-auto p-[5px]"
              onClick={(e) => {
                todoCardTransferHandler(
                  e.currentTarget.parentElement?.parentElement
                );
              }}
            >
              <GoArrowRight />
            </Button>
          )}
          {props.cardType == "doing" && (
            <>
              <Button
                className="w-auto h-auto p-[5px]"
                onClick={(e) => {
                  doingCardLeftTransferHandler(
                    e.currentTarget.parentElement?.parentElement
                  );
                }}
              >
                <GoArrowLeft />
              </Button>
              <Button
                className="w-auto h-auto p-[5px]"
                onClick={(e) => {
                  doingCardRightTransferHandler(
                    e.currentTarget.parentElement?.parentElement
                  );
                }}
              >
                <GoArrowRight />
              </Button>
            </>
          )}
          {props.cardType == "done" && (
            <Button
              className="w-auto h-auto p-[5px]"
              onClick={(e) => {
                doneCardTransferHandler(
                  e.currentTarget.parentElement?.parentElement
                );
              }}
            >
              <GoArrowLeft />
            </Button>
          )}
          <Button
            className="w-auto h-auto p-[5px]"
            onClick={(e) => {
              deleteCardHandler(e);
            }}
          >
            <BsFillTrash3Fill />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default TodoCard;
