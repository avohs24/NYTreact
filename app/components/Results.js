var React = require('react');

var Results = React.createClass({

  render: function(){
    return(
    <div>
      <div className='row'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h2 className='panel-title'>Results</h2>
          </div>
          <div className='panel-body'>
            <Results searchTerm={this.props.results}/>
          </div>
        </div>
      </div>
    </div>
    )
  }
})
module.exports = Results;
