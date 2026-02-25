import './style.css'
import { UsersApp } from './users/users-app'

document.querySelector('#app').innerHTML = `
	<div>
	<a target="_blank">
	</a>
	<a target="_blank">
	</a>
	<h1>Hello World</h1>
	<div class="card">
	</div>
	</div>
`

UsersApp(document.querySelector('.card'))
