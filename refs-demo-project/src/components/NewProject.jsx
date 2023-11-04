import { useRef } from 'react';
import Input from './Input';

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const titleInput = title.current.value;
    const descInput = desc.current.value;
    const dueDateInput = dueDate.current.value;

    onAdd({
      title: titleInput,
      description: descInput,
      dueDate: dueDateInput,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-slate-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" ref={title} type="text" />
        <Input label="Description" isTextarea ref={desc} />
        <Input label="Due Date" ref={dueDate} type="date" />
      </div>
    </div>
  );
};

export default NewProject;
