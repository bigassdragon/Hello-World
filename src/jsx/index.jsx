// const React = require('react');
const React = require('react');
const Router = require('react-router');
const NotFoundRoute = Router.NotFoundRoute;
const DefaultRoute = Router.DefaultRoute;
const Link = Router.Link;
const Route = Router.Route;
const RouteHandler = Router.RouteHandler;
const Redirect = Router.Redirect;
const injectTapEventPlugin = require("react-tap-event-plugin");

const HelloWorld = require('./hello');
const Main = require('./main');

injectTapEventPlugin();

// let App = React.createClass({
// 	render: function () {
// 		return (
// 			<div>
// 				<Link to="app">Home</Link>
// 				<Link to="Hello">Hello</Link>

// 				<RouteHandler />
// 			</div>
// 		);
// 	}
// });

let routes = (
	<Route name="main" path="/" handler={Main}>
		<Route name="Hello" path="/hello" handler={HelloWorld} />
	</Route>
);

Router.run(routes, function (Handler) {
	React.render(<Handler/>, document.getElementById('pages'));
});
