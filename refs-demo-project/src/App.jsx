import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import Sidebar from './components/Sidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleSelectProject = id => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  const handleStartProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = projectData => {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancel = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    project => project.id === projectsState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;

  if (projectsState.selectedProjectId === null)
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />;
  else if (projectsState.selectedProjectId === undefined)
    content = <NoProjectSelected onStartProject={handleStartProject} />;

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onStartProject={handleStartProject}
        projects={projectsState.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
