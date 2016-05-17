import React from 'react';

export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.onSignIn = this.onSignIn.bind(this)
	}

	componentDidMount() {
		window.addEventListener('google-loaded', this.renderGoogleLoginButton);
		window.addEventListener('google-signin', this.onSignIn);
	}

	componentWillUnmount() {
		delete window["signInCallback"];
	}

	onSignIn(googleUser) {
		console.log("signed in successfully");
		console.log(googleUser);
		let profile = googleUser.getBasicProfile();
		console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
		console.log('Name: ' + profile.getName());
		console.log('Image URL: ' + profile.getImageUrl());
		console.log('Email: ' + profile.getEmail());
	}

	renderGoogleLoginButton(self) {
	    console.log('rendering google signin button')
	    console.log(this);
	    gapi.signin2.render('my-signin2', {
	      'scope': 'https://www.googleapis.com/auth/plus.login',
	      'width': 200,
	      'height': 50,
	      'longtitle': true,
	      'theme': 'light',
	      'onsuccess': this.onSignIn
	    })
	}

	signOut() {
		console.log("signout clicked");
	    var auth2 = gapi.auth2.getAuthInstance();
	    auth2.signOut().then(function () {
	      console.log('User signed out.');
	    });
	}

	render() {
		return (
			<div>
				<div>Please sign into the SoundCound Player App with Google Auth</div>
				<div id="my-signin2"></div>
				<a href="#" onClick={this.signOut}>Sign out</a>
			</div>
		);
	}
}