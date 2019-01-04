class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveAllOptions = this.handleRemoveAllOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleRemoveOption = this.handleRemoveOption.bind(this);

    // initialize component state
    this.state = {
      options: []
    }

    this.loadData();
  }

  loadData() {
    try {
      const cachedOptions = localStorage.getItem('options');
      if (cachedOptions) {
        this.state.options = JSON.parse(cachedOptions);
      }
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('prevstate', prevState);
    console.log('this.state', this.state);
    if (prevState.options.length !== this.state.options.length) {
      localStorage.setItem('options', JSON.stringify(this.state.options));
    }
  }

  componentWillUnmount() {
    console.log('cwu');
  }

  handleRemoveAllOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   }
    // });

    this.setState(() => ({ options: [] }));
  }

  handleRemoveOption(optionToRemove) {
    this.setState(prevState => ( {options: prevState.options.filter(option => option !== optionToRemove)} ));
  }

  handlePick() {
    const random = Math.floor(Math.random() * this.state.options.length);
    const randomOption = this.state.options[random];
    console.log(randomOption);
  }

  handleAddOption(option) {

    if (this.state.options.indexOf(option) > -1) {
      return 'Item already exists';
    }

    // this.setState(prevState => {
    //   return {
    //     options: prevState.options.concat(option)
    //   }
    // });

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life in the hands of a computer.';
    // const options = ['One', 'Dho', 'Tres'];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />

        <Options options={this.state.options} handleRemoveAllOptions={this.handleRemoveAllOptions} handleRemoveOption={this.handleRemoveOption}/>
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >What should I do?</button>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >What should I do?</button>
    </div>
  );
}

// class Options extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleRemoveAllOptions}>Remove All</button>
//         {this.props.options.map((option) => <Option key={option} optionText={option} handleRemoveOption={this.props.handleRemoveOption}/>)}
//       </div>
//     );
//   }
// }

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleRemoveAllOptions}>Remove All</button>
      {props.options.map((option) => <Option key={option} optionText={option} handleRemoveOption={props.handleRemoveOption}/>)}
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {props.optionText}
      <button onClick={(e)=> {props.handleRemoveOption(props.optionText)}}>Remove</button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: undefined
    };

    this.handleAddOption = this.handleAddOption.bind(this);
  }
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      const error = this.props.handleAddOption(option);

      if (!error) {
        e.target.elements.option.value = '';
      }
      
      this.setState(() => ({ error }));
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// )

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));