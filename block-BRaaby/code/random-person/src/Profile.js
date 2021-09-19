import React from 'react';

class Profile extends React.Component {
  render() {
      let text = this.props.text;
    return (
      <section className="bg-primary pt-32 w-200 mx-auto mt-28 shadow-lg">
        <div className="bg-white text-center border-t">
          <img
            className="rounded-full w-36 h-36 object-cover inline-block ring ring-offset-2 ring-white"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <h2 className="text-gray-500 text-lg mt-4">My name is</h2>
          <h1 className="text-4xl mt-2">{text}</h1>
          <div className="text-4xl flex justify-between px-20 mt-8">
            <button className="text-gray-600"  onMouseOver={this.props.handleMouseHover}>
              <i className="fas fa-user" id="name"></i>
            </button>
            <button className="text-gray-600" onMouseOver={this.props.handleMouseHover}>
              <i className="fas fa-envelope-open" id="message" ></i>
            </button>
            <button className="text-gray-600"  onMouseOver={this.props.handleMouseHover}>
              <i className="fas fa-map" id="address"></i>
            </button>
            <button className="text-gray-600"  onMouseOver={this.props.handleMouseHover}>
              <i className="fas fa-phone-alt" id="phone"></i>
            </button>
            <button className="text-gray-600"  onMouseOver={this.props.handleMouseHover}>
              <i className="fas fa-lock" id="password"></i>
            </button>
          </div>
          <button className="px-4 py-1 bg-secondary rounded my-6 " onClick={this.props.handleClick}>
            {this.props.data ? "RANDOM USER" : "Loading..."}
          </button>
        </div>
      </section>
    );
  }
}
export default Profile;
