'use strict';

const React = require('react');
const Material = require('material-ui');
const LeftNav = Material.LeftNav;
const MenuItem = Material.MenuItem;
const Colors = require('material-ui/lib/styles/colors');
const ThemeManager = require('material-ui/lib/styles/theme-manager')();

const LeftNavBar = React.createClass({
  propTypes: {
    menuItems: React.PropTypes.array.isRequired,
    isOpen: React.PropTypes.bool.isRequired
  },
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },
  getChildContext: function() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },
  toggle() {
    this.refs.leftNav.toggle();
  },
  render() {
    console.log(this.props.isOpen);

    return (
      <LeftNav refs="leftNav" menuItems={this.props.menuItems} docked={false} open={this.props.isOpen} />
    );
  }
});

module.exports = LeftNavBar;
