import * as React from "react";
import { PullToRefresh } from "antd-mobile";

function genData() {
  const dataArr = [];
  for (let i = 0; i < 20; i++) {
    dataArr.push(i);
  }
  return dataArr;
}

class TestPullRefresh extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      refreshing: false,
      down: true,
      height: (document as any).documentElement.clientHeight,
      data: [],
    };
  }

  public componentDidMount() {
    setTimeout(
      () =>
        this.setState({
          height: 20,
          data: genData(),
        }),
      0,
    );
  }

  public handleRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      this.setState({ refreshing: false });
    }, 1000);
  }

  public getScrollContainer = () => {
    return <div>Hello</div>;
  }

  public render() {
    return (
      <div>
        <PullToRefresh
          damping={60}
          style={{
            height: this.state.height,
            overflow: "auto",
          }}
          indicator={this.state.down ? {} : { deactivate: "上拉可以刷新" }}
          direction={this.state.down ? "down" : "up"}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        >
          {this.state.data.map((i: number) => (
            <div key={i} style={{ textAlign: "center", padding: 20 }}>
              {this.state.down ? "pull down" : "pull up"} {i}
            </div>
          ))}
        </PullToRefresh>
      </div>
    );
  }
}

export default TestPullRefresh;
