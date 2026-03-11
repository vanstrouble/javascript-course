import './render-modal.css';
import modalHTML from './render-modal.html?raw';

let modal, form;

export const showModal = (user = null) => {
    if (!modal) {
        throw new Error('Modal not initialized. Call renderModal first.');
    }

    // If a user is provided, popular the form
    if (user) {
        populateForm(user);
    } else {
        form?.reset();
    }

    modal.classList.remove('hidden-modal');
};

export const hideModal = () => {
    if (!modal) return;
    modal.classList.add('hidden-modal');
    form?.reset();
};

const populateForm = (user) => {
    if (!form) return;

    form.querySelector('input[name="firstName"]').value = user.firstName || '';
    form.querySelector('input[name="lastName"]').value = user.lastName || '';
    form.querySelector('input[name="balance"]').value = user.balance || 0;
    form.querySelector('input[name="isActive"]').checked = user.isActive || false;
};

export const renderModal = (element, callback) => {
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
    form.addEventListener('submit', async(event) => {
        event.preventDefault();

        try {
            const userData = validateAndExtractFormData(new FormData(form));
            console.log('User data:', userData);

            await callback(userData);

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
