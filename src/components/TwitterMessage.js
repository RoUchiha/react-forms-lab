import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: "",
      chars: this.props.maxChars
    };
  }
  handleChange = (event) => {
    this.setState({
      tweet: event.target.value
    })
    this.setState({
      chars: (this.state.chars - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event) => this.handleChange(event)} 
        type="text" name="message" id="message" 
        value={this.state.tweet} />
        <p>{this.state.chars}</p>
      </div>
    );
  }
}

export default TwitterMessage;
