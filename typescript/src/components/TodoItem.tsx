import classes from './TodoItem.module.css';

const TodosItem: React.FC<{
  text: string;
  onRemoveTodo: React.MouseEventHandler;
}> = props => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>
      {props.text}
    </li>
  );
};

export default TodosItem;
