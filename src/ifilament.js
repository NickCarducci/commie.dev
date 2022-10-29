import React from "react";
import App from "./App";
import Basic from "./Basic";
var trigger = false; //,
//basic = true;
//var pathname, navigate, statePathname;
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { basic: true };
    this.anarchy = React.createRef();
  }
  componentDidMount = () => {
    this.assumepath();
  };
  assumepath = () => {
    if (this.props.p !== "/") {
      this.setState({ basic: false });
      // trigger = true;
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.plhs === prevProps.plhs) {
    }
  };
  render() {
    const { basic } = this.state;
    const { p, l, n, sp } = this.props;
    if (basic) {
      return <Basic setBasic={() => this.setState({ basic: false })} />;
    } else
      return (
        <App
          ref={{ current: { anarchy: this.anarchy } }}
          setBasic={() => {
            console.log("set: ", basic);
            this.setState({ basic: true });
          }}
          //location={location}key={key}
          pathname={p}
          navigate={n} //history={history} `history.push()` now (router v6) just `navigate()`
          basic={basic}
          statePathname={sp}
          openNROP={() => {
            this.setState({ basic: true });
            window.scrollTo(0, 0);
          }}
        />
      );
  }
}
class Filament extends React.Component {
  state = {};
  render() {
    const { paths, l, n } = this.props;
    return (
      <Index
        ref={this.props.fwd}
        p={"/" + paths["*"]}
        l={l}
        n={n}
        sp={l.state && l.state.statePathname && l.state.statePathname}
      />
    );
  }
}
export default React.forwardRef((props, ref) => (
  <Filament fwd={ref} {...props} />
));
