var React = require('react');
var Nav = require('Nav');

// var Main = React.createClass({
//     render: function() {
//         return (
//             <div>
//                 <Nav/>
//                 <h2>Main Component</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {  // convert it to state-less functional component using arrow func.
        return (  // removed "this" bc it's no longer in a anonymous func
            <div>
                <Nav/>
                <div className="row">
                    <div className="columns medium-6 large 4 small-centered">
                        {props.children}
                    </div>
                </div>
            </div>
        );
};

module.exports = Main;
