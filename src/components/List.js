import React from "react";

class List extends React.Component {
	constructor() {
		super();
		this.state = {
			detail: ""
		}
	}

	_closeDetail() {
		$("#details").fadeOut();
		$("body").css("overflow","initial");
	}

	_getDetails(e) {
		e.preventDefault();
		this.setState({ detail: e.target.href });
		$("#detailLoader").show();
		$("#detailsiFrame").on("load", () => {
			$("body").css("overflow","hidden");
			$("#detailLoader").hide();
			$("#details").fadeIn();
		});
	}
	render() {
		var lists = this.props.lists.map((list) => {
			let link = "https://en.wikipedia.org/wiki/" + list.title.replace(/ /g, "_");
			return <li key={list.timestamp} className="list-group-item">
				<h4>
					<a onClick={this._getDetails.bind(this)} href={link} target="_blank">
						{list.title}
					</a>
				</h4>

				<span dangerouslySetInnerHTML={{__html: list.snippet }}></span>
			</li>
		})
		return (
			<div>
				<ul className="list-group">
					{lists}
				</ul>
				
				<div id="detailLoader">
					<img src="infinity.gif"/>
				</div>

				<div id="details" onClick={this._closeDetail.bind(this)}>
					<div className="body">
						<iframe id="detailsiFrame" src={this.state.detail} frameborder="0"></iframe>
					</div>
				</div>
			</div>
		)
	}
}

export default List;