// const React = require('react');
const Router = require('react-router');
const NotFoundRoute = Router.NotFoundRoute;
const DefaultRoute = Router.DefaultRoute;
const Link = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const Redirect = Router.Redirect;

const HelloWorld = require('./hello');

let App = React.createClass({
	render: function () {
		return (
			<div>
				<Link to="app">Home</Link>
				<Link to="Hello">Hello</Link>

				<RouteHandler />
			</div>
		);
	}
});

let routes = (
	<Route name="app" path="/" handler={App}>
		<Route name="Hello" path="/hello" handler={HelloWorld} />
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('pages'));
});
