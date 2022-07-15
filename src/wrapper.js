import React from "react";

class Wrapper extends React.Component {
  state = {
    count: 0,
    title: "SubhanAllah♥️",
  };

  reset = () => {
    this.setState({
      count: 0,
      title: "SubhanAllah♥️",
    });
  };

  changeTitle = (value) => {
    const { count } = this.state;
    this.setState({ count: value });
    if (count > 0) {
      if (count > 0 && count <= 32) {
        this.setState({
          title: "SubhanAllah♥️",
        });
      } else if (count > 32 && count <= 65) {
        this.setState({
          title: "Alhamdulillah😊",
        });
      } else if (count > 65 && count <= 98) {
        this.setState({
          title: "Allohu akbar☝️",
        });
      } else if (count === 99) {
        this.setState({
          title:
            "La ilaha illallohu vahdahu la sharika lah, lahul mulku va lahul hamd. Va huva 'ala kulli shayin qodir.🤲",
        });
      } else {
        this.setState({
          title: "allahumma salli ala muhammad wa ala ali muhammad☘",
        });
      }
    } else {
      this.setState({
        title: "SubhanAllah♥️",
      });
    }
  };

  render() {
    const { title } = this.state;

    return (
      <>
        <div className="wrapper">
          <h5>{title}</h5>
          <div className="img">
            <img src={require("./images/e-tasbeeh.png")} alt="e-tasbeeh" />
          </div>
          <span id="number">{this.state.count}</span>
          <button
            onClick={() => this.changeTitle(this.state.count + 1)}
            className="count"
          ></button>
          <button onClick={() => this.reset()} className="reset"></button>
        </div>
      </>
    );
  }
}

export default Wrapper;
