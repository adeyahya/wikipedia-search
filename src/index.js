import React from "react";
import {render} from "react-dom";
window.$ = window.jQuery = require("jquery");
require("./sass/app.scss");

import WikiForm from "./components/WikiForm.js";

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<header className="page-header">
							<h1 className="text-center">
								Wikipedia <small>using React.js</small>
							</h1>
						</header>
						<br/>

						<WikiForm/>
					</div>
				</div>
			</div>
		)
	}
}

render(<App/>, document.getElementById("root"));