import './style.css'
import { UsersApp } from './users/users-app'

document.querySelector('#app').innerHTML = `
	<div>
		<h1>WEB CRUD</h1>
		<div class="card"></div>
	</div>
`

UsersApp(document.querySelector('.card'))
