import './render-modal.css';
import modalHTML from './render-modal.html?raw';

let modal, form;

export const showModal = () => {
    if (!modal) {
        throw new Error('Modal not initialized. Call renderModal first.');
    }
    modal.classList.remove('hidden-modal');
};

export const hideModal = () => {
    if (!modal) return;
    modal.classList.add('hidden-modal');
    form?.reset();
};

export const renderModal = (element) => {
    if (modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.classList.add('modal-container', 'hidden-modal');

    element.appendChild(modal);

    form = modal.querySelector('form');

    // Close modal on overlay click
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            hideModal();
        }
    });

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // TODO: Handle form data
        console.log('Form submitted');
        hideModal();
    });
};
