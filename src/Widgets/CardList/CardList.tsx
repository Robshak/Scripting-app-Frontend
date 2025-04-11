import styles from "./CardList.module.scss";
import cn from "classnames";
import ProjectList from "./Components/ProjectList/ProjectList";
import { CardListProps } from "./CardList.props";

export default function CardList({
  cardList,
  className,
  ...props
}: CardListProps) {
  // Define a more specific type for the component
  let SelectedCardList: React.ComponentType<{cardList: typeof cardList; className?: string}> | null = null;

  if (cardList.type == "projects") {
    SelectedCardList = ProjectList;
  }

  return (
    <>
      {}
      {SelectedCardList && (
        <SelectedCardList
          cardList={cardList}
          className={cn(styles["projects-list"], className)}
          {...props}
        />
      )}
    </>
  );
}
