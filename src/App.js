import React from "react";
import Main from "./Main";
import Basic from "./Basic";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    const { paths, l, n } = this.props;
    //ref={this.props.fwd}
    const init = {
      p: "/" + paths["*"], //"everyone in order to be for the people that use it. who decides?"
      l,
      n
    };
    this.state = { ...init, basic: true };
    this.anarchy = React.createRef();
    this.taxes = React.createRef();
  }
  componentDidMount = () => {
    this.assumepath();
  };
  assumepath = () => {
    if (
      ![
        "/",
        "/plaintiff",
        "/recession",
        "/socialcapital",
        "/capitalist",
        "/capitalists",
        "/capitalism",
        "/police",
        "/voting",
        "/bank",
        "/banks",
        "/banksy",
        "/banking",
        "/prop",
        "/props",
        "/property",
        "/capital",
        "/domain",
        "/cukl",
        "/utopia",
        "/utopian",
        "/jobbery",
        "/job",
        "/jobs",
        "/guilds",
        "/guild",
        "/manage",
        "/management",
        "/libs",
        "/lib",
        "/liberals",
        "/liberal",
        "/mod",
        "/mods",
        "/work"
      ].includes(this.state.p)
    ) {
      this.setState({ basic: false });
      // trigger = true;
    }
  };
  componentDidUpdate = (prevProps) => {
    const { paths, l, n } = this.props;
    if (paths !== prevProps.paths) {
      this.setState({
        p: "/" + paths["*"],
        l,
        n
      });
    }
  };
  render() {
    const { basic } = this.state;
    const { p, l, n } = this.state;
    const sp = l.state && l.state.statePathname && l.state.statePathname;
    if (basic) {
      return (
        <Basic setBasic={() => this.setState({ basic: false })} pathname={p} />
      );
    } else
      return (
        <Main
          ref={{ current: { anarchy: this.anarchy, taxes: this.taxes } }}
          lastWidth={this.props.lastWidth}
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
//$NZDJPY
