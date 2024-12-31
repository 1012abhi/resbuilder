import React from 'react';
import { useParams } from 'react-router-dom';
import Template1 from './Template1';
import Template2 from './Template2';

const templates = {
  template1: Template1,
  template2: Template2,
};

const DynamicTemplate = () => {
  const { id } = useParams();
  console.log(id);
  
  // Check if the template exists in the templates map
  const ComponentToRender = templates[id];

  return ComponentToRender ? (
    <ComponentToRender />
  ) : (
    <div>Template not found</div>
  );
};

export default DynamicTemplate;