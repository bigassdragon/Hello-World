'use strict';

const React = require('react/addons');
// const Material = require('material-ui');
// const RaisedButton = Material.RaisedButton;

const Hello = React.createClass({
	render: function () {
		return (
			<div className="hello"><p>Hello React!!!</p></div>
		);
	}
});

module.exports = Hello;
