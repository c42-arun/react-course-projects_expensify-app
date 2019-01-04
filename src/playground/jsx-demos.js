console.log('App.js is running!');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const appRoot = document.getElementById('app');

const onRemoveAll = () => {
  app.options.length = 0;
  render();
};

const onFormSubmit = (e) => {
  e.preventDefault();
  console.log(e.target);
  console.log(e.target.elements.option.value);

  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(e.target.elements.option.value);
    e.target.elements.option.value = '';

    render();
  }
};

// const numbers = [5, 67, 700];
const onMakeDecision = () => {
  const random = Math.floor(Math.random() * app.options.length);
  const randomOption = app.options[random];
  alert(randomOption);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {(app.options && app.options.length > 0) ? "Here are your options" : "No options"}
      <button onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
          app.options.map(option => {
            return <li key={option}>{option}</li>
          })
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();