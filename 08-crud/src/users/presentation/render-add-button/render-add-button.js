import './render-add-button.css';
import { showModal } from '../render-modal/render-modal.js';

export const renderAddButton = (element) => {
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.classList.add('add-button', 'rectangular');

    element.append(addButton);
    addButton.addEventListener('click', () => {
        showModal();
    })
};
