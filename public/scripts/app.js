'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleRemoveAllOptions = _this.handleRemoveAllOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleRemoveOption = _this.handleRemoveOption.bind(_this);

    // initialize component state
    _this.state = {
      options: []
    };

    _this.loadData();
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'loadData',
    value: function loadData() {
      try {
        var cachedOptions = localStorage.getItem('options');
        if (cachedOptions) {
          this.state.options = JSON.parse(cachedOptions);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('prevstate', prevState);
      console.log('this.state', this.state);
      if (prevState.options.length !== this.state.options.length) {
        localStorage.setItem('options', JSON.stringify(this.state.options));
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('cwu');
    }
  }, {
    key: 'handleRemoveAllOptions',
    value: function handleRemoveAllOptions() {
      // this.setState(() => {
      //   return {
      //     options: []
      //   }
      // });

      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleRemoveOption',
    value: function handleRemoveOption(optionToRemove) {
      this.setState(function (prevState) {
        return { options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          }) };
      });
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      var random = Math.floor(Math.random() * this.state.options.length);
      var randomOption = this.state.options[random];
      console.log(randomOption);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {

      if (this.state.options.indexOf(option) > -1) {
        return 'Item already exists';
      }

      // this.setState(prevState => {
      //   return {
      //     options: prevState.options.concat(option)
      //   }
      // });

      this.setState(function (prevState) {
        return { options: prevState.options.concat(option) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision App';
      var subtitle = 'Put your life in the hands of a computer.';
      // const options = ['One', 'Dho', 'Tres'];
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, handlePick: this.handlePick }),
        React.createElement(Options, { options: this.state.options, handleRemoveAllOptions: this.handleRemoveAllOptions, handleRemoveOption: this.handleRemoveOption }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

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

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

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

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

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

var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleRemoveAllOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: option, optionText: option, handleRemoveOption: props.handleRemoveOption });
    })
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {this.props.optionText}
//       </div>
//     );
//   }
// }

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText,
    React.createElement(
      'button',
      { onClick: function onClick(e) {
          props.handleRemoveOption(props.optionText);
        } },
      'Remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.state = {
      error: undefined
    };

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.option.value.trim();

      if (option) {
        var error = this.props.handleAddOption(option);

        if (!error) {
          e.target.elements.option.value = '';
        }

        this.setState(function () {
          return { error: error };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'div',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const jsx = (
//   <div>
//     <IndecisionApp />
//   </div>
// )

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
