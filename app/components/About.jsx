var React = require('react');
var {Link} = require('react-router');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

var About = (props) => { // State-less function
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is the about page. This app gives you the weather!
                I have built this for a online course.</p>
            <p>Here are some of the tools I used:</p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This
                        was the Javascript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> -
                        I used Open Weather Map to search for weather data by city name.
                </li>
            </ul>
        </div>
    );
};

module.exports = About;
