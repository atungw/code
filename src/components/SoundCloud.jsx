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

	playTrack(uri) {
		console.log("play");
		console.log(uri);
		var widgetIframe = document.getElementById('sc-widget'),
        widget  = SC.Widget(widgetIframe);
        console.log(widget);
        widget.load(uri, {auto_play: true});
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
				<iframe id="sc-widget" width="100%" height="166" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url=http%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F1848538&show_artwork=true"></iframe>	
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
							this.state.tracks.map(track => {
								return (
									<tr key={track.id}>
										<td onClick={this.playTrack.bind(this, track.uri)}>{track.title}</td>
										<td></td>
									</tr>
								)
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