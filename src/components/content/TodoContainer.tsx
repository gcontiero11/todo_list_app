import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TodoCard from "./TodoCard";
import { CardType } from "@/utils/CardType";

function TodoContainer(props: {
  title: string;
  cardsList: CardType[];
  cardType: string;
}) {
  return (
    <Card className="h-full w-1/3 ">
      <CardHeader>
        <CardTitle className="text-center">{props.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-[15px]">
        {props.cardsList.length > 0 &&
          props.cardsList.map(
            (todo) =>
              !(todo === null || todo === undefined) && (
                <TodoCard
                  key={todo.id}
                  id={todo.id}
                  title={todo.title}
                  cardType={props.cardType}
                />
              )
          )}
      </CardContent>
    </Card>
  );
}

export default TodoContainer;
