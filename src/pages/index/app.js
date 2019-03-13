/********************************
 * @file: home page
 * @desc: overview react multi page app
 * @author: leinov
 * @date:2018-12-06
 *******************************/

import React, { Component } from "react";
import Nav from "component/nav";
import Footer from "component/footer"
export default class App extends Component {
	render() {
		return (
			<div>
				<Nav />
				<div className="main index column is-8">
					duuliy 即将改编为新的工程化
				</div>
				<Footer />
			</div>
			
		);
	}
}
