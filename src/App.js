import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";
import NetToGDP from "./net";
//import "./style.css";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
  };
  componentWillUnmount = () => {
    clearTimeout(this.check);
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname !== "/") {
          this.setState({ trigger: true });
        }
        if (this.props.pathname === "/edu") {
          //  window.scroll(0, this.edu.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    return (
      <div
        style={{
          //margin: "5px",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        <div
          onClick={() => {
            window.scroll(0, 100);
            this.setState({ trigger: true });
          }}
          style={{
            display: this.state.trigger ? "none" : "block",
            position: "absolute",
            height: "101%",
            width: "100%",
            backgroundColor: "rgba(20,20,20,.5)"
          }}
        />
        {/*Cenk ".0000001% voter fraud"*/}
        <h4>
          The despondency of labor; Medicare for All mean inflation pennywise
          pound short for supply and labor-demand despondence, false/surrendered
          bid pools and implausible use leases, labor being variable-part sprint
          with material,{space}
          <i>inflation</i>.
        </h4>
        The state is blaming GDP/p growth over time-period/hour on bad
        parenting, age and madness.
        <br />
        <br />
        Anti-communist, collateralized-professional and conflicting interest in
        permitting, contracting, and lendings of monetary-debits (net asset
        values)
        <br />
        <br />
        Nick Carducci - Some credits in International Law (college major) &
        Computer Science, Monmouth University (Graduated 2014)
        <br />
        <br />
        How can a country fulfill its sovereign debt obligations if it is cut
        off from financial institutions?
        <br />
        <br />
        <Cable
          style={{ width: "300px", transform: "scale(-1,1)" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dl.dropboxusercontent.com/s/410s2o75pnght03/marx.jpeg?dl=0"
          }
          float={"right"}
          title="karl marx"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
          iframe={{
            frameBorder: "0",
            allowFullScreen: "",
            allow:
              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }}
        />
        You as a borrower, and third party to others’ borrowings, can claim
        borrower-, foreseeable force majeure, or donee beneficiary, third party
        bid surrendered, -defense, yet nearly 99% of debt is owned domestically,
        so tortiousness is quite often understated in standings’ importance,
        intranationally.
        <br />
        <br />
        No Surrender of Others' Freedom Sample Clauses | Law Insider
        <br />
        <br />
        Sample Contracts and Business Agreements
        <br />
        <br />
        https://www.lawinsider.com/clause/no-surrender-of-others-freedom
        <br />
        <br />
        I can mediate your counties’ debts with your service-accrual. Call
        1–800-Get-Bent
        <br />
        <br />
        try investing in TBT SLV VXX
        <br />
        <br />
        my solution is literally a script (currency/debt)*income every year
        back.
        <br />
        <br />
        Poverty is Food Clothing Shelter Utilities *1.2 for employer
        contributions, imputed mortgage if you have none.
        <br />
        <br />
        Anti-communist, collateralized-professional and conflicting interest in
        permitting, contracting, and borrowings of monetary-debits, Poverty is
        Food Clothing Shelter Utilities *1.2 for employer contributions, imputed
        mortgage if you have none.
        <NetToGDP
          lastWidth={Math.min(600, this.state.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <br />
        <hr />
        <br />
        <Cable
          style={{ width: "100%", height: "300px" }}
          onError={handleScollImgError}
          //img={true}
          src={
            this.state.noyout ? "" : "https://www.youtube.com/embed/nKvUf7F4Xn4"
          }
          float={null}
          title="Dick Morris and the Odessa revolution"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
          iframe={{
            frameBorder: "0",
            allowFullScreen: "",
            allow:
              "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          }}
        />
        <br />
        <br />
        <TwitterTweetEmbed
          style={{
            width: "200px",
            float: "left",
            overflowX: "auto",
            marginRight: "10px"
          }}
          key="1416803308824633347"
          tweetId="1416803308824633347"
        />
        Nick Carducci - Bookie at Book.com.co (2019–present)
        <br />
        <br />
        What would you do if the economy crashed?
        <br />
        <br />
        I’d buy things.
        <br />
        <br />
        Now (2022), life is more important than $12k/64 debt/cash new person a
        year (U.S.) and 2/3 false bid pools and implausible use leases,
        surrendered bids and outrights, excess monetary-debits than
        concurrentable depositary of secured receipts.
        <br />
        <br />
        Life is royaltyable-science, processmaking; free rider immutable and
        rent-free is all Public can ever be, for open ingredient licensure, and
        1/hour-GDP/p reasoning but what else for, and by how else than
        trust-breaking horizontally, by general-income, or surrendered,
        standardized guarantees?
        <br />
        <br />
        Why are men forced to fight but there is more than jobs to fill?
        <br />
        <br />
        “We do a lot of trade with China so we will hurt if they hurt.” Trade is
        1% of GDP (BEA) + imports Aluminum $28.70B (2021); exports Aluminum
        $12.02B (2021, by amount likely matches, for labor is twice as
        expensive, when nominal is positive for equal actual lbs). Give us the
        schematic
        <br />
        <br />
        no one wishes for personal sacrifice, they do not want leases to
        treasury, yet rather platform for dollar owners to sign off and royalty,
        with 11/12 decision.
        <br />
        <br />
        (income/hour)/home is a better metric of poverty than poverty, and
        1/hour-GDP/p of productivity than GDP/hour
        <br />
        <br />
        Mike Huckabee, "they set you up with housing," is imputed mortgages
        actually leased to the treasury.
      </div>
    );
  }
}
