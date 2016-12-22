const React = require('react');
const ReactDOM = require('react-dom');

class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h2>{this.props.name}</h2>
        <p>Speed: {this.props.speed}</p>
        <p>Rockets: {this.props.rockets}</p>       
        <p>Colors: {this.props.colors.join(', ')}</p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
};

ReactDOM.render(
  <Spaceship name="Millennium Falcon" />,
  document.getElementById('main')
);

require('../test/index-test.js'); // Leave this in!

module.exports = Spaceship;
