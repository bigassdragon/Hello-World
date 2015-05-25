'use strict';

const React = require('react/addons');
const Material = require('material-ui');
const Header = require('./components/headernavbar');
const HideNavBar = require('./components/leftnavbar');

const Main = React.createClass({
	handleNavBar: function (e) {
		console.log('it was clicked');
		this.setState(function () {
			return {
				leftNavisOpen: true
			};
		});
		e.preventDefault();
	},
	getInitialState: function () {
		return {
			leftNavisOpen: false
		};
	},
	render: function () {
		const items = [
			{text: 'Disabled text 1', disabled: true},
			{text: 'Disabled text 2', disabled: true},
		];
		return (
			<div>
				<Header title='Guinea Pigs' handleClick={this.handleNavBar} />
				<HideNavBar menuItems={items} isOpen={this.state.leftNavisOpen} />
			</div>
		);
	}
});

module.exports = Main;
