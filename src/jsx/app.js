const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRouter;
const Link = Router.Link;
const Router = Router.Route;
const RouteHandler = Router.RouteHandler;

const HelloWorld = require('./hello');

let App = React.createClass({
	render() {
		return (
			<div className="nav">
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
	React.render(<Handler/>, document.body);
});
