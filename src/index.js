import React from 'react'
import { render } from 'react-dom'
import Login from './components/Login'
import SoundCloud from './components/SoundCloud'

render(
	<div>
		<Login />
		<SoundCloud />
	</div>,
	document.getElementById('app')
)