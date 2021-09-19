import React from 'react';
import Profile from './Profile';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: null,
      text: '',
    };
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, text:data.results[0].name.title+" "+data.results[0].name.first}));
  }
  handleMouseHover = (event) => {
    let id = event.target.id;
    let user = this.state.data.results[0];
    // eslint-disable-next-line default-case
    switch (id) {
      case 'address':
        this.setState({
          text: `${user.location.street.number}, ${user.location.street.name}`,
        });
        break;
      case 'message':
        this.setState({ text: user.email });
        break;
      case 'phone':
        this.setState({ text: user.phone });
        break;
      case 'password':
        this.setState({ text: user.login.password });
        break;
    }
  };
  handleClick = () => {
    this.setState({data:null})
    this.componentDidMount()
  }
  render() {
    return (
      <main>
        <Profile
          data={this.state.data}
          handleMouseHover={this.handleMouseHover}
          handleClick = {this.handleClick}
          text={this.state.text}
        />
      </main>
    );
  }
}

export default App;
