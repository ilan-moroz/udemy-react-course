import classes from './TodoItem.module.css';

const TodosItem: React.FC<{
  text: string;
  onClick: React.MouseEventHandler;
}> = props => {
  return (
    <li className={classes.item} onClick={props.onClick}>
      {props.text}
    </li>
  );
};

export default TodosItem;
