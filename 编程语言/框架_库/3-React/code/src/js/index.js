function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  // 调用
const element = <Welcome name="sara" />;

ReactDOM.render(
    element,
    document.getElementById('root')
);