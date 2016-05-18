import React from 'react';

export default class SoundCloud extends React.Component {
	constructor(props) {
		super(props);
		this.fetchedTracks = this.fetchedTracks.bind(this)
		this.state = {
			title: '',
			tracks: []
		}
	}

	componentDidMount() {
		window.addEventListener('fetched-tracks', this.fetchedTracks);
	}

	fetchedTracks(event) {
		console.log(event);
		this.setState({tracks: event.data});
	}

	searchSoundCloud() {
		SC.get('/tracks', {
		  q: this.state.title
		}).then(
			function(tracks) {
		  		var event = new Event('fetched-tracks');
	  			event.data = tracks;
	  			window.dispatchEvent(event);
			}
		);
	}

	render() {
		return (
			<div>
				<h1>Search by Track Title</h1>
				<table>
					<thead>
						<tr>
							<th>Title</th>
							<th />
						</tr>
					</thead>
					<tbody>
						{
							this.state.tracks.map(function(track) {
								return (<tr key={track.id}>
									<td>{track.title}</td>
									<td></td>
								</tr>)
							})
						}
					</tbody>
				</table>
				<input type="text" name="title" onChange={(e) => this.setState({ title: e.target.value})} />
				<button type="button" onClick={this.searchSoundCloud.bind(this)}>Search</button>
			</div>
		);
	}
}