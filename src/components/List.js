import React from "react";

class List extends React.Component {
	render() {
		var lists = this.props.lists.map((list) => {
			let link = "https://en.wikipedia.org/wiki/" + list.title.replace(/ /g, "_");
			return <li key={list.timestamp} className="list-group-item">
				<h4>
					<a href={link} target="_blank">
						{list.title}
					</a>
				</h4>

				<span dangerouslySetInnerHTML={{__html: list.snippet }}></span>
			</li>
		})
		return (
			<ul className="list-group">
				{lists}
			</ul>
		)
	}
}

export default List;