import { Component } from "react";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Ronak",
        location: "Noida",
        avatar_url:""
      },
    };
  }

  async componentDidMount() {
    //Api call
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }

  
  render() {

    const {name,location,id,avatar_url}=this.state.userInfo
    return (
      <div>
        <h1 >This is my About page</h1>
        <h2>Name:{" Ronak Jain"}</h2>
        <h2>Location:{location}</h2>
        <h2>ID:{id}</h2>
        <img
          src={avatar_url}
          alt="Description"
          width="300"
          height="200"
        />
        <div>
          <input
            type="text"
            placeholder="Profile count"
            value={this.state.count}
            readOnly
          />
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            inc
          </button>
          <button
            onClick={() => {
              this.setState({ count: this.state.count - 1 });
            }}
          >
            dec
          </button>
        </div>
      </div>
    );
  }
}

export default UserDetails;
