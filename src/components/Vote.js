import React from 'react';

export default React.createClass({
  getPair: function() {
    return this.props.pair || [];
  },
  isDisabled: function() {
    return !!this.props.hasVoted;
  },
  hasVotedFor: function(entry) {
    return this.props.hasVoted === entry;
  },
  render: function() {
    return <div className="voting">
      {
        this.getPair().map(entry =>
          <button
            className="btn btn-success btn-lg"
            key={entry}
            disabled = {this.isDisabled()} 
            onClick={
              (e) => { 
                if(!this.isDisabled()){ 
                  this.props.vote(entry);
                } 
              }
            }>
            <div>{entry}</div>
            {
              this.hasVotedFor(entry) ? <div className="label">Voted</div> : null 
            }
          </button>
        )
      }
    </div>;
  }
});