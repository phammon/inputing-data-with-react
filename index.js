
import React from 'react';
import ReactDOM from 'react-dom';

class Input extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			userInput: ''
		}
		this.handleUserInput = this.handleUserInput.bind(this);
		this.clearScreen = this.clearScreen.bind(this);
	}
	handleUserInput(e) {
		this.setState({
			userInput: e.target.value
		});
	}
	clearScreen() {
		this.setState({
			userInput: ''
		});
	}
	render() {
		return (
			<div className="container container-table">
				<div className="row vertical-center-row">
					<div className="text-center col-md-5 col-md-offset-3">
						<h1>Type something in! React will ouput it to the screen!</h1>
						<input value={this.state.userInput} onChange={this.handleUserInput} type="text"/>
							<div style={{ marginTop: '5px' }}>
								<button onClick={this.clearScreen} className="btn btn-primary">Clear Text</button>
							</div>
						<h1>{this.state.userInput}</h1>
					</div>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Input />, document.getElementById('app'));