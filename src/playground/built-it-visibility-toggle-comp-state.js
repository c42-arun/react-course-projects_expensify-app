class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);

        // initialize component state
        this.state = {
            visibility: false
        };

        // don't forget to bind 'this' otherwise 'this' would resolve to undefined inside the handler
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        this.setState(prevState => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
            {this.state.visibility && (
                <div>
                    <p>Hey, here are some details</p>
                </div>
            )}
        </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));