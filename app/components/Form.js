var React = require('react');


var Form = React.createClass({

  getInitialState: function(){
    return { searchTerm: "" };
  },
  handleSubmit: function(event){
      event.preventDefault();

      this.props.setTerm(this.state.term);

      var results = [];
      var apiKey = "382b7c0e1b3c49e3b82a7d4aedad98b4";
      console.log(searchTerm.value);

      var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + searchTerm.value;


      $.ajax({
        url: queryUrl,
        method: 'GET',
      }).done(function(data){
        console.log(data.response.docs);
        results.push(data.response.docs);
      })
  },

  render: function(){
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <label>Search Term </label>
          <input type='text' className='form-control' id='searchTerm'></input>
        </div>
        <div className='form-group'>
          <label>Number of Records to Retrieve</label>
          <br></br>
          <input type='number' className='form-control' id='numberOfRecords'></input>
        </div>
        <button className='btn btn-default' type='submit'>Submit</button>
      </form>

    </div>

    )
  }
});

module.exports = Form;
