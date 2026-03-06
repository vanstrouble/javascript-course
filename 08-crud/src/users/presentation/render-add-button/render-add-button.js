import './render-add-button.css';

export const renderAddButton = (element) => {
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.classList.add('add-button', 'rectangular');

    element.append(addButton);
    addButton.addEventListener('click', () => {
        throw new Error('Not implemented');
    })
};
