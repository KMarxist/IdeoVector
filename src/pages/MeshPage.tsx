import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';
import '@material/mwc-icon-button';
import { IoAddCircleOutline } from 'solid-icons/io';

const MeshPage: Component = () => {
  const [persons, setPersons] = createStore();
  return (
    <div class="max-w-none p-4 card">
      <h1>Mesh Page</h1>
      <mwc-icon-button class="text-green-600">
        <IoAddCircleOutline />
      </mwc-icon-button>
    </div>
  );
};

export default MeshPage;
