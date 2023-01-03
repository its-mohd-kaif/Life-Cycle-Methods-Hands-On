import React, { Component } from "react";
// Child Component
class Child extends Component {
  componentWillUnmount() {
    alert("The child component is hidden now");
  }

  render() {
    return (
      <div>
        <h1>Child Component</h1>
      </div>
    );
  }
}
// Parenet Component
export default class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      flag: false,
      display: true,
    };
    this.themeHandler = this.themeHandler.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  // Uncomment this for check getDerivedStateFromProps

  //   static getDerivedStateFromProps(props) {
  //     return { theme: props.color };
  //   }

  //ComponentDidMount
  componentDidMount() {
    setTimeout(() => {
      this.setState({ theme: "dark" });
    }, 5000);
  }
  //   Toggle Theme Handler
  themeHandler() {
    if (this.state.flag === false) {
      this.setState({ theme: "light", flag: true });
    } else if (this.state.flag === true) {
      this.setState({ theme: "dark", flag: false });
    }
  }
  //   Should Component Update
  shouldComponentUpdate(prevProps, prevState) {
    // return false;
    // For check uncomment this return false statement and comment this return true statement
    return true;
  }
  //   GetSnapShotBeforeUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("PREV", prevState.theme);
  }
  //   ComponentDidUpdate
  componentDidUpdate() {
    console.log("Curr", this.state.theme);
  }
  // Unmount Handler Function
  unmount() {
    this.setState({ display: false });
  }

  render() {
    let component;
    if (this.state.display) {
      component = <Child />;
    }
    return (
      <div className={this.state.theme}>
        <section>
          <h1>Title</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <button onClick={this.themeHandler}>Button</button>
          <br></br>
          <br></br>
          <button onClick={this.unmount}>Unmount</button>
        </section>
        {component}
      </div>
    );
  }
}
