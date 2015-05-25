'use strict';

const React = require('react');
const Material = require('material-ui');
const AppBar = Material.AppBar;
const Colors = require('material-ui/lib/styles/colors');
const ThemeManager = require('material-ui/lib/styles/theme-manager')();

const HeaderNavBar = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    handleClick: React.PropTypes.func.isRequired
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  render() {
    return (
      <AppBar title={this.props.title} onLeftIconButtonTouchTap={this.props.handleClick} />
    );
  }
});

module.exports = HeaderNavBar;
