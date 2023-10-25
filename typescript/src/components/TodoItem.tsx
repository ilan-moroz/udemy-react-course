const TodosItem: React.FC<{ text: string }> = props => {
  return (
    <ul>
      <li>{props.text}</li>
    </ul>
  );
};

export default TodosItem;
