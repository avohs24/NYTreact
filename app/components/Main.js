var React = require('react');

// var Results = require('./Results');
// var Saved = require('./components/Saved');
var Form = require('./Form');

var Main = React.createClass({

  getInitialState: function(){
    return{ searchTerm: "", numberOfRecords: "", saved: [] };
  },

  setTerm: function(term){
    this.setState({ searchTerm: term });
  },
    render: function(){
      return (
        <div>
          <div className='row'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h2 className='panel-title'>Search</h2>
              </div>
              <div className='panel-body'>
                <Form search={this.state.handleSubmit} setTerm={this.setTerm}/>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h2 className='panel-title'>Results</h2>
              </div>
              <div className='panel-body'>
                {/* <Results searchTerm={this.state.results}/> */}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h2 className='panel-title'>Saved</h2>
              </div>
              <div className='panel-body'>
                {/* <Saved /> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  });

  module.exports = Main;
