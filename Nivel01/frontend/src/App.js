import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Headers';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Thiago Stival"
    });

    const project = response.data;

    setProjects([...projects, project]);
  };

  return (
    <>
      <Header title="Projects" />

      <ul>
        {projects.map(project => <li key={project.id}>{project.title}</li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}

export default App;