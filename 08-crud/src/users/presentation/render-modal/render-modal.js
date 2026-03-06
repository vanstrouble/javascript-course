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

        try {
            const userData = validateAndExtractFormData(new FormData(form));
            console.log('User data:', userData);
            // TODO: Save user data
            hideModal();
        } catch (error) {
            alert(error.message);
        }
    });
};

const validateAndExtractFormData = (formData) => {
    const firstName = formData.get('firstName')?.trim();
    if (!firstName) throw new Error('First Name cannot be empty.');

    const lastName = formData.get('lastName')?.trim();
    if (!lastName) throw new Error('Last Name cannot be empty.');

    const balance = formData.get('balance')?.trim();
    if (!balance) throw new Error('Balance cannot be empty.');

    const balanceNumber = Number(balance);
    if (isNaN(balanceNumber)) throw new Error('Balance must be a valid number.');

    return {
        firstName,
        lastName,
        balance: balanceNumber,
        isActive: formData.has('isActive')
    };
};
