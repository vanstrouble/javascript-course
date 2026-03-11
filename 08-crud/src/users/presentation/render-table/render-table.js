import usersStore from "../../store/users-store";
import { showModal } from "../render-modal/render-modal.js";
import "./render-table.css";

let table;

const createTable = () => {
    const table = document.createElement('table');
    const tableHeaders = document.createElement('tr');
    tableHeaders.innerHTML = `
        <th>ID</th>
        <th>Balance</th>
        <th>FirstName</th>
        <th>LastName</th>
        <th>Active</th>
        <th>Actions</th>
    `;
    const tableBody = document.createElement('tbody');
    table.appendChild(tableHeaders);
    table.appendChild(tableBody);
    return table;
}

export const renderTable = (element) => {
    const users = usersStore.getUsers();

    if (!table) {
        table = createTable();
        element.appendChild(table);

        // Add event listener for edit and delete actions
        table.addEventListener('click', (event) => {
            if (event.target.matches('.edit-btn')) {
                handleEditUser(event);
            } else if (event.target.matches('.delete-btn')) {
                handleDeleteUser(event);
            }
        });
    }

    let tableHTML = '';
    users.forEach(user => {
        tableHTML += `
            <tr>
                <td>${user.id}</td>
                <td>${user.balance}</td>
                <td>${user.firstName}</td>
                <td>${user.lastName}</td>
                <td>${user.isActive ? 'Yes' : 'No'}</td>
                <td>
                    <a href="#" data-id="${user.id}" class="edit-btn">Select</a>
                    |
                    <a href="#" data-id="${user.id}" class="delete-btn">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector('tbody').innerHTML = tableHTML;
}

const handleEditUser = (event) => {
    event.preventDefault();
    const userId = event.target.getAttribute('data-id');
    const user = usersStore.getUserById(userId);

    if (user) {
        showModal(user);
    } else {
        alert('User not found');
    }
}

const handleDeleteUser = (event) => {
    event.preventDefault();
    const userId = event.target.getAttribute('data-id');

    if (confirm('Are you sure you want to delete this user?')) {
        // TODO: Implement delete functionality
        console.log('Delete user:', userId);
    }
}
