import styles from "./CardList.module.scss";
import cn from "classnames";
import ProjectList from "./Components/ProjectList/ProjectList";
import { CardListProps } from "./CardList.props";

export default function CardList({
  cardList,
  className,
  ...props
}: CardListProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let SelectedCardList: React.ComponentType<any> | null = null;

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
