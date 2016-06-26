import React from "react";
import List from "./List.js";

class WikiForm extends React.Component {
	constructor() {
		super();
		this.state = {
			lists: []
		}
	}

	_handleSubmit(e) {
		e.preventDefault();
		this.setState({lists: []})
		$("#loader").fadeIn();
		$.ajax({
			url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + this.refs.keyword.value + "&prop=info&inprop=url&utf8=&format=json",
			dataType: 'jsonp',
			success: function(response) {
				$("#loader").fadeOut();
				console.log(response.query.search);
				this.setState({lists: response.query.search})
			}.bind(this)
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={this._handleSubmit.bind(this)}>
					<div className="input-group">
						<input ref="keyword" type="text" className="form-control input-lg" placeholder="Keywords"/>
						<span className="input-group-btn">
							<button type="submit" className="btn btn-primary btn-lg">
								Search
							</button>
						</span>
					</div>			
				</form>
				<br/>

				<div id="loader">
					<img src="/infinity.gif" width="70px"/>
				</div>

				<List lists={this.state.lists}/>
			</div>
		)
	}
}

export default WikiForm;