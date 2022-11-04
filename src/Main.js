import React from "react";
import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
import Cable from "./Dropwire";
import NetToGDP from "./net";
import Establishments from "./establishments";
import Revenues from "./revenues";
import Sales from "./sales";
//import "./style.css";
class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //openAbomunista: true,
      //measure: "closedanarchymorals",
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.economics = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
  };
  componentDidUpdate = (prevProps) => {
    const { pathname, basic } = this.props;
    if (
      this.props !== prevProps ||
      basic !== prevProps.basic ||
      pathname !== prevProps.pathname
    ) {
      this.check(pathname);
    }
  };
  check = (pathname) => {
    if (pathname === "/anarchy") {
      this.setState({ measure: "closedanarchymorals" }, () => {
        //another day, scalp indigeonious, boys will be bous
        window.scroll(0, this.props.anarchy.current.offsetTop);
      });
    } else if (pathname === "/taxes") {
      this.setState({ measure: "closedlaborpower" }, () => {
        //another day, scalp indigeonious, boys will be bous
        window.scroll(0, this.props.taxes.current.offsetTop);
      });
    }
    if (pathname === "/plaintiff") {
      window.scroll(0, this.plaintiff.current.offsetTop);
    } else if (pathname === "/recession") {
      window.scroll(0, this.recession.current.offsetTop);
    } else if (pathname === "/socialcapital") {
      window.scroll(0, this.socialcapital.current.offsetTop);
    } else if (pathname === "/police") {
      window.scroll(0, this.police.current.offsetTop);
    } else if (pathname === "/voting") {
      window.scroll(0, this.voting.current.offsetTop);
    } else if (["economics", "econ"].includes(pathname)) {
      window.scroll(0, this.economics.current.offsetTop);
    }
  };
  componentWillUnmount = () => {
    clearTimeout(this.starttime);
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
    } //"abolish exchange value" - CJ
    //social capital estranged from the rollover/expiry individual
    //govrent assert the universal. "'capitaism is small gov ad freedom' so much no"
  };
  render() {
    const handleScollImgError = (e) => {
      if (e.message) {
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
    //console.log(this.props.pathname);
    const laborpower = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedlaborpower" ? "" : 0
    };
    const globalpower = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedanarchymorals" ? "" : 0
    }; //a nice racist, 77 wabc
    const chastitycourt = {
      transition: ".3s ease-in",
      fontSize: this.state.measure === "closedchastitycourt" ? "" : 0
    };
    return (
      <div
        onMouseEnter={() => this.setState({ hoveringNatureControl: false })}
        style={{
          border: "1px solid rgb(200,200,200)",
          overflow: "hidden",
          //margin: "5px",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          width: "100%",
          maxWidth: "600px",
          position: "relative"
        }}
      >
        {/*mimetic value negotiate complied: Silence versus heinous 
        I talk to all sides with great respect
        Subjective no
        Unless it is paid complied
        "if you don't know how solve?" -RG recession moron
        */}
        <div
          style={{
            cursor: "pointer",
            position: "fixed",
            right: "0px",
            bottom: "0px"
          }}
          onClick={() => this.props.setBasic()}
        >
          less
          {/**cardiac problems: Is age not indicative towards death in derivative over blood pressure?
           Was Karl Marx murdered for complaining about social credit?*/}
        </div>
        <b>dictation</b>
        {space}'The first premise of postmodernism is that there are no ‘meta’
        narratives. There is no single history or anthropology or system that
        enables us to know the real.'
        <br />
        <b>advice</b>
        {space}'While this is great news if you’re sick of the blowhard Marxist
        and Republican orators of the workers’ or entrepreneurs’ Coming
        Emancipation, it also leaves us very alone.'
        <br />
        <b>linguistics</b>
        {space}'On the one hand we now have a language to understand that every
        truth coming out of the mouth of our leaders, teachers, and specialists
        is suspect but on the other we are no longer presented with a{space}
        <span style={{ fontSize: "12px" }}>
          Golden Brick Road (GBR){space}
          <a href="https://islamicbanks.quora.com/Is-non-chastity-the-remainder-of-any-catch-all-marriage-asset-dependent-pact-Does-marriage-split-debts-Wouldn-t-love-a">
            towards the world of our desires
          </a>
        </span>
        .' ("Aragon!",{space}
        <i>Anarchy and Nihilism: Consequences: Now is the time!</i>
        )
        <br />
        <div
          style={{
            color: "white",
            backgroundColor: "rgb(85,125,245)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          Mill is clearly right in saying that in general the capital, that is
          applied to support and aid labour in any new industry created by such
          duties, "must have been withdrawn or withheld from some other, in
          which it gave, or would have given, employment to probably about the
          same quantity of labour which it employs in its new occupation." Or,
          to put the argument in a more modern form, such legislation does not
          primâ facie increase either the national dividend or the share of that
          dividend which{space}
          <a href="https://occupywallst.quora.com/What-is-the-relationship-of-economics-and-scarcity-1">
            goes to labour
          </a>
          . For it does not increase the supply of capital; nor does it, in any
          other way, cause the marginal efficiency of labour to rise relatively
          to that of capital.
        </div>
        <b>saver party</b>
        {space}
        <i style={{ color: "cornflowerblue" }}>
          Why do “conservatives” want top company indices to be more
          concentrated?{space}
          <span style={{ color: "lightseagreen" }}>
            Chastity court. Asylum in portugal. Growth (is) no matter if
            spending isn't withstanding tax (Doesn’t a higher deficit cause
            inflationary employment? What do low taxes have to do with
            deflationary employment growth?
            {space}
            <span style={{ color: "salmon" }}>
              Isn’t growth deflationary-employment? Is non-deflationary
              productivity productive?
            </span>
            )
          </span>
        </i>
        {space}
        <br />
        <a href="https://disabilities.quora.com">Covered</a>? Its been{space}
        <a href="https://rolloverinsurance.quora.com">renegade</a>
        {/*renegged */}
        <br />
        fort knox diabetes stuffs, democracy spoofs geohash yet concerns dental
        records and{space}
        <b>video</b>
        {space}
        <i>
          (not degree/cetified experts, desist with 1/12 duly-interested pair
          acquitting from an anarchist's golden road).
          <br />
          Padrones otherwise overbooked non-compete ({/**akin */}abliss) expiry
          future commodity.
        </i>
        <br />
        <br />
        <b>
          bacterial artificial{space}
          <a href="https://stocktwits.com/nmc123/message/491338745">
            chromosomes
          </a>
        </b>
        <br />
        <i>
          “‘Anyone pirate uncharted?’”
          <br />
          Maybe non-deflationary video game don’t retract. Traded leisure for
          luxury.
          <br />
          “Economist new ways to trade ..and communicate. Not a conspiracy
          theory, allowed to say that now[?]”
          <br />
          Conspiracists must start as a desist but for a competent and duly
          incentivized 1/12 randomly selected pair.
          {/**you can(n) please everyone. no promises */}
        </i>
        <h2>
          the socially-necessary apprentice chattel
          {/* (human ruler is more human than institution)
          “Embarrassingly uncontrolled government” MN Norm Coleman
          */}
        </h2>
        <a href="https://www.quora.com/unanswered/Does-raising-rates-make-employment-more-expensive-as-Gary-Cohn-sells">
          <Cable
            style={{ width: "100%" }}
            onError={handleScollImgError}
            img={true}
            src={
              this.state.noyout
                ? ""
                : "https://www.dropbox.com/s/f4053ah6jzd09so/Screen%20Shot%202022-10-17%20at%203.26.54%20PM.png?raw=1"
            }
            float={"left"}
            title="Gary Cohn"
            scrolling={this.state.scrolling}
            fwd={this["scrollImg" + scrollnum()]}
            scrollTopAndHeight={
              this.state.scrollTopAndHeight + window.innerHeight
            }
            scrollTop={this.state.scrollTop}
          />
        </a>
        <a href="https://www.quora.com/When-Karl-Marx-called-for-free-education-to-end-the-patriarchy-did-he-mean-by-bonds">
          When Karl Marx called for free education to end the patriarchy, did he
          mean by bonds?
        </a>
        {space}
        <a href="https://marx.quora.com/Did-Karl-Marx-believe-in-free-education-1">
          Did Karl Marx believe in free education?
        </a>
        <br />
        Only did Marx promote free education as a means to emancipate them from
        their parents, a certain guild of the idle class.
        <br />
        <div
          style={{
            backgroundColor: "grey",
            color: "white",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          In the national struggles of the proletarians of the different
          countries, they point out and bring to the front the common interests
          of the entire proletariat, independently of all nationality.
          <br />
          <br />
          Do you charge us with wanting to stop the exploitation of children by
          their parents? To this crime we plead guilty. But, you say, we destroy
          the most hallowed of relations, when we replace home education by
          social. Free education for all children in public schools. Abolition
          of children’s factory labour in its present form. Combination of
          education with industrial production, &c, &c.
        </div>
        <div
          style={{
            right: "70px",
            position: "absolute"
          }}
        >
          The slaughter of sins
        </div>
        <div
          onClick={() =>
            this.setState({
              measure:
                this.state.measure !== "closedchastitycourt" &&
                "closedchastitycourt"
            })
          }
          style={{
            background: "radial-gradient(black, white)",
            //boxShadow: "0px 0px 5px 1px blue",
            cursor: "pointer",
            transition: ".3s ease-out",
            right: "10px",
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRight: "1px solid",
            borderBottom: "1px solid",
            transform: `rotate(${
              this.state.measure === "closedchastitycourt" ? 45 : 135
            }deg)`
          }}
        />
        <h4>
          <a href="https://unemploymentinsurance.quora.com">Long</a>
          {space}Term{space}
          <a href="https://markethistory.quora.com">Layoffs</a>
        </h4>
        Before you vote,{space}
        <a href="https://kondratiev.quora.com">check</a>
        {space}your 401k{space}
        <a href="https://stocktwits.com/nmc123">plan</a>
        <br />
        <span style={{ ...chastitycourt }}>
          If the Republicans cut taxes faster than spending, do the bonds not
          still surmount the savings in current costs? Do Democrats and
          Republicans not feel guilty for making people with no kids pay
          property tax?{space}
          <i>
            Is in-person instruction ever more effective than proper online
            documentation? Why is education more important than work and open
            source? Is in person instruction better than online because of body
            language or a need to speak with hand motions? If the teacher cannot
            explain it in a paper, how would they perform better in a lecture?
            If they themselves have questions, wouldn't they read?
          </i>
          {space}
          Do we{space}
          <a style={{ color: "darkgreen" }} href="https://2024nj.com/oil">
            need more U.S. oil production
          </a>
          {space}to make up for the physical loss from finance? (
          <a href="http://www.electproject.org/home/voter-turnout">
            Vote your age
          </a>
          )
          <h4 style={{ margin: "4px 0px" }}>
            Commies don't want you to have debt{space}
            <b style={{ color: "grey" }}>
              (don't wan't you to surrender the rights to ownership nor try)
            </b>
            {space}
            <i>
              Doesn’t utility overlap prevent technical competition?{space}
              <b style={{ color: "grey" }}>
                Does a natural resource ever become too broad as a utility does?
              </b>
            </i>
          </h4>
          <div
            style={{
              backgroundColor: "grey",
              color: "white",
              padding: "10px",
              margin: "10px",
              width: "calc(100% - 40px)",
              border: "1px solid"
            }}
          >
            In its positive aims, however, this form of Socialism aspires either
            to restoring the{space}
            <a
              style={{
                color: "white"
              }}
              href="https://vaults.biz/gdp"
            >
              old means of production and of exchange
            </a>
            , and with them the old property relations, and the old society, or
            to cramping the modern means of production and of exchange within
            the framework of the old property relations that have been, and were
            bound to be, exploded by those means. In either case, it is both
            reactionary and Utopian.
            <div
              style={{
                backgroundColor: "white",
                color: "black",
                padding: "10px",
                margin: "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              <a href="https://www.quora.com/Is-a-totalitarian-government-possible-in-a-capitalist-market/answer/Nick-Carducci">
                Utopian socialism
              </a>
              {space}asserts nothing of the kind that which Christian socialism
              versus communism delineates (marriage or monogamy; let alone what
              the latter defines, idlers or begreived labor).
              <div
                style={{
                  backgroundColor: "rgb(225,150,150)",
                  color: "white",
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                <div
                  style={{
                    color: "rgb(200, 230, 240)",
                    backgroundColor: "rgb(10,10,20)",
                    padding: "10px",
                    margin: "10px",
                    width: "calc(100% - 40px)",
                    border: "1px solid",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div>Can we not have a voluntary military?</div>
                  <a
                    href="https://thetax.party"
                    style={{
                      color: "rgb(200, 230, 240)"
                    }}
                  >
                    thetax.party
                  </a>
                  {/**government manage economic mechanism */}
                </div>
                Nothing is easier than to give Christian asceticism a Socialist
                tinge. Has not Christianity declaimed against private property,
                against marriage, against the State? Has it not preached in the
                place of these, charity and{space}
                <a href="https://nickcarducciforsenate.quora.com/What-percentage-of-people-who-are-born-into-poverty-are-able-to-move-out-of-poverty-as-adults-1">
                  poverty
                </a>
                , celibacy and mortification of the flesh, monastic life and
                Mother Church? Christian Socialism is but the holy water with
                which the priest consecrates the heart-burnings of the
                aristocrat.
              </div>
              <div
                style={{
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                "Any Quote for Marx or Engles about the family?
                {/**"clear[ly] as fraud" 
            false campaign only final scopes
            margins, "all goes into wall"
            */}
                <br />
                Is there a quote by marx similar to this one ? 'The forms of
                family ideology...in which the unborn child is expected: it is
                certain in advance that it will bear its Father's name, and will
                therefore have an identity and be irreplaceable. Before its
                birth, the child is therefore always-already a subject'"
              </div>
              <a href="https://realecon.quora.com/Can-a-value-added-share-of-GDP-and-policy-timeline-be-a-recoverable-or-prosecutable-ascertainable-loss">
                Value-added is not an ascertainable loss
              </a>
              ?{space}
              <a href="https://realvelocity.asia">regressive degrowth</a>
              {space}
              <a href="https://www.quora.com/unanswered/Wasnt-Q-right-about-">
                Wasn't Q right about malfeasance?
              </a>
              {space}
              <a href="https://www.quora.com/unanswered/Is-a-checking-to-M2-velocity-of-1-11-not-a-certain-Ponzi-scheme">
                Is a checking to M2 velocity of 1/11 not a certain Ponzi scheme?
              </a>
              {space}
              <a href="https://reddit.com/r/occupywallstreet/comments/wjpzji/china_tried_to_obtain_internal_info_and_build_a/">
                China tried to obtain internal info and build a network of
                informants inside the Federal Reserve, says a new GOP Senate
                report
              </a>
              {space}
              <a href="https://www.quora.com/If-the-government-is-about-to-enforce-a-convict-intranet-doesnt-that-make-Q-right">
                If the government is about to enforce a convict intranet,
                doesn't that make Q right
              </a>
              ?{space}Why is a trade with an expiration not a false bid,
              fraudulent, and thereby illegal?
              <h4
                style={{
                  color: "white",
                  backgroundColor: "rgb(165,75,205)",
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                The new mode of production was, as yet, only at the beginning of
                its period of ascent; as yet it was the normal, regular method
                of production – the only one possible under existing conditions.
                Nevertheless, even then it was producing crying social abuses –
                the herding together of a{space}
                <a
                  href="https://medicatethehomeless.quora.com/Why-do-psychiatrists-say-I-need-medication-when-I-didnt-even-ask-them-on-my-own-accord"
                  style={{
                    color: "white"
                  }}
                >
                  homeless
                </a>
                {space}population in the worst quarters of the large towns; the
                loosening of all traditional moral bonds, of patriarchal
                subordination, of family relations; overwork, especially of
                women and children, to a frightful extent; complete
                demoralization of the working-class, suddenly flung into
                altogether new conditions, from the country into the town, from
                agriculture into modern industry, from stable conditions of
                existence into insecure ones that change from day to day.
              </h4>
              Yet Marx -{space}
              <a href="https://www.marxists.org/archive/marx/works/1867-c1/ch24.htm">
                the bastard
              </a>
              {space}that he was - took the word ‘
              <a href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch03.htm">
                patriarchal
              </a>
              ’ as a given name as a descriptor of trusts of capital that abets
              [“social”] credit. Use the{space}
              <a href="https://www.marxists.org/archive/marx/works/1867-c1/">
                volumes I-III
              </a>
              {space}at the bottom.
              <div
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                Its last words are: corporate guilds for manufacture;
                patriarchal relations in agriculture.
                <br />
                <br />
                Communism as the positive transcendence of private property as
                human self-estrangement, and therefore as the real appropriation
                of the human essence by and for man; communism therefore as the
                complete return of man to himself as a social (i.e., human)
                being – a return accomplished consciously and embracing the
                entire wealth of previous development. This communism, as fully
                developed naturalism, equals humanism, and as fully developed
                humanism equals naturalism; it is the genuine resolution of the
                conflict between man and nature and between man and man – the
                true resolution of the strife between existence and essence,
                between objectification and self-confirmation, between freedom
                and necessity, between the individual and the species. Communism
                is the riddle of history solved, and it knows itself to be this
                solution.
                <br />
                <br />
                Prostitution is only a specific expression of the general
                prostitution of the labourer, and since it is a relationship in
                which falls not the prostitute alone, but also the one who
                prostitutes – and the latter’s abomination is still greater –
                the capitalist, etc., also comes under this head.
                {/**"we have to come together for human rights" "diverse no politics just first responder cause" */}
                <br />
                <br />
                Our bourgeois, not content with having wives and daughters of
                their proletarians at their disposal, not to speak of common
                prostitutes, take the greatest pleasure in seducing each other’s
                wives.
                <br />
                <br />
                Bourgeois marriage is, in reality, a system of wives in common
                and thus, at the most, what the Communists might possibly be
                reproached with is that they desire to introduce, in
                substitution for a hypocritically concealed, an openly legalised
                community of women. For the rest, it is self-evident that the
                abolition of the present system of production must bring with it
                the abolition of the community of women springing from that
                system, i.e., of prostitution both public and private.
                <br />
                <br />
                Just as woman passes from marriage to general prostitution, so
                the entire world of wealth (that is, of man’s objective
                substance) passes from the relationship of exclusive marriage
                with the owner of private property to a state of universal
                prostitution with the community. This type of communism – since
                it negates the personality of man in every sphere – is but the
                logical expression of private property, which is this negation.
              </div>
              <b
                style={{
                  float: "right"
                }}
              >
                <a href="https://realvelocity.asia">realvelocity.asia</a>
              </b>
              What is{space}
              <a href="https://www.quora.com/unanswered/Is-the-written-law-not-usually-argued-about-the-same-in-court-from-time-to-time">
                natural
              </a>
              {space}is not capitalism.
            </div>
            <span style={{ textDecoration: "line-through", color: "silver" }}>
              It is furthermore appropriate to mention at this point the
              extensive introduction of female and child labor, in so far as the
              whole family must produce a larger quantity of surplus-value for
              {space}
              <a href="https://phyletic.quora.com/What-does-it-mean-if-the-demand-curve-has-an-inelastic-slope-1">
                a certain capital than before
              </a>
              {space}[,] even in case the total amount of their wages should
              increase, which is by no means general.
            </span>
            {space}These are the counteracting tendencies, which, while
            effecting a rise in the rate of surplus-value, also tend to decrease
            the mass of surplus-value, and hence the rate of profit produced by
            a certain capital. Mention should also be made here of the
            widespread introduction of female and child labour, in so far as
            {space}
            <a href="https://www.marxists.org/archive/marx/works/1894-c3/ch14.htm">
              the whole family must now perform more surplus-labour for capital
              than before
            </a>
            , even when the total amount of their wages increases, which is by
            no means always the case.
            <div
              ref={this.economics}
              style={{
                color: "white",
                backgroundColor: "rgb(85,125,245)",
                padding: "10px",
                margin: "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              But{space}
              <a href="https://www.yumpu.com/en/document/read/18596138/slave-narratives-library-of-congress/41">
                if the carpet is cleaned
              </a>
              {space}by domestic servants or at steam scouring works, the value
              of the labour spent in cleaning it must be counted in separately;
              for otherwise the results of this labour would be altogether
              omitted from the inventory of those newly- produced commodities
              and conveniences which constitute the real income of the country.
              The work of domestic servants is always classed as "labour" in the
              technical sense; and since it can be assessed en bloc at the value
              of their remuneration in money and{space}
              <a href="https://fred.stlouisfed.org/series/A2013C1A027NBEA">
                in kind
              </a>
              {space}without being enumerated in detail, its inclusion raises no
              great statistical difficulty. There is however some inconsistency
              in omitting the heavy domestic work which is done by women and
              other members of the household, where no servants are kept [nor
              in-kind imputable owner-rents of managerial-profits and
              {space}
              <a href="https://laborproductivity.quora.com/Is-non-deflationary-productivity-productive">
                labor-revenue
              </a>
              ].
              <br />
              <br />
              <span style={{ backgroundColor: "rgb(20,20,50)" }}>
                <i>
                  Wouldn’t a scientist claim as much as they can yet{space}
                  <a
                    style={{ color: "white" }}
                    href="https://microtheory.quora.com/What-are-the-different-types-of-demand-curves-1"
                  >
                    firstly with
                  </a>
                  {space}as much standardized pretenses as possible rather than
                  plagiarize discoveries?
                </i>
                {space}Didn’t{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.quora.com/What-do-economists-say-about-perfectly-inelastic-or-perfectly-elastic-demand-curves/answer/Nick-Carducci"
                >
                  Alfred Marshall
                </a>
                {space}plagiarize Karl Marx?
              </span>
              {space}Isn't public release 'one'-party consent? Why would authors
              require any consent of public release?
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <h2
                onClick={this.props.openNROP}
                style={{
                  cursor: "pointer",
                  textDecoration: "underline",
                  margin: "10px 0px"
                }}
              >
                Natural rate of productivity
              </h2>
              {space}
              <i
                style={{
                  fontSize: "12px"
                }}
              >
                Universal property (crowding powers),
                <br />
                social production (division of labor),
                <br />
                private capital & labor (surplus value)
              </i>
            </div>
            The relationship of private property persists as the relationship of
            the community to the world of things. Finally, this movement of
            opposing universal private property to private property finds
            expression in the brutish form of opposing to marriage (certainly a
            form of exclusive private property) the community of women, in which
            a woman becomes a piece of communal and common property.
            <div
              style={{
                color: "white",
                backgroundColor: "rgb(85,125,245)",
                padding: "10px",
                margin: "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              Social capital is employed by people who do not own it and who
              consequently tackle things quite differently than the owner, who
              anxiously weighs the limitations of his private capital in so far
              as he handles it himself. ...So long as the laws of exchange are
              observed in every single act of exchange the mode of appropriation
              can be completely revolutionised without in any way affecting the
              property rights which correspond to commodity production.{" "}
              <a
                href="https://www.marxists.org/archive/marx/works/1894-c3/ch27.htm"
                style={{
                  color: "white" //not a danger, all punitive
                }}
              >
                Capitalism
              </a>
              {space}
              is private production without the control of private property.
              <div
                onMouseEnter={() =>
                  this.setState({ hoveringNatureControl: true }, () => {
                    clearTimeout(this.hoveringNatureControlTimeout);
                    this.hoveringNatureControlTimeout = setTimeout(() => {
                      this.setState({ hoveringNatureControl: false });
                    }, 5000);
                  })
                }
                style={{
                  //display: "flex",alignSelf: "center",
                  transition: ".3s ease-in",
                  cursor: "pointer",
                  backgroundColor: "white",
                  color: "black",
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)",
                  border: this.state.hoveringNatureControl
                    ? "3px solid red"
                    : "1px solid"
                }}
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "black"
                  }}
                  href="https://www.quora.com/unanswered/Is-the-control-of-private-property-implied-of-labor-as-natural"
                >
                  Is the control of private property implied of labor as
                  natural?
                </a>
              </div>
              In stock companies the function is divorced from capital
              ownership, hence also labour is entirely divorced from ownership
              of means of production and surplus-labour.
              <br />
              <br />
              Aside from the stock-company business, which represents the
              abolition of capitalist private industry on the basis of the
              capitalist system itself and destroys private industry as it
              expands and invades new spheres of production, credit offers to
              the individual capitalist; or to one who is regarded a capitalist,
              absolute control within certain limits over the capital and
              property of others, and thereby over the labour of others.
            </div>
            The contests about wages in Manufacture, pre-suppose manufacture,
            and are in no sense directed against its existence.{space}
            <a href="https://marx.quora.com/Why-would-you-work-for-someone-else">
              The opposition
            </a>
            {space}against the establishment of new manufactures, proceeds from
            the guilds and privileged towns, not from the workpeople.
            <br />
            <br />
            <b
              style={{
                color: "black", //counterfiat artifact synthesis
                backgroundColor: "white"
              }}
            >
              What infrastructure needs to be taxed for?
            </b>
          </div>
        </span>
        <a href="https://www.quora.com/Don-t-you-describe-yourself-as-a-democracy-lover-for-16-protest-of-base-1-12-How-would-a-direct-democracy-even-have-problems-to-solve-if-it-required-absolute-consensus">
          state antagonists
        </a>
        {space}
        This fucking sub is an institution bro.{space}
        <i>Are you a troll?</i>
        {space}One{space}
        <i>
          <b>cannot</b>
          {space}expropriate morals without living in a basement
        </i>
        . What is social politics but economics? Even living has labor.{space}
        <i>
          The factory is where the capitalist hides their profit by sinking
          fixed costs, (steady prices, higher margins by technical advancement).
        </i>
        {space}I cannot listen to people who say, “interests!==morals.” Words
        are objectively not useless in different subjective{space}
        <a href="https://adailyimpeachment.quora.com/Do-anarchists-recognize-Marx-Engels-as-anarchists-1">
          states
        </a>
        .
        <br />
        <br />
        <div
          style={{
            position: "relative",
            display: "block",
            margin: "10px"
          }}
        >
          <span style={{ textDecoration: "underline" }}>
            Some credits in International Law (college major) & Computer
            Science, Monmouth University (Graduated 2014)
          </span>
          <br />
          What is the reason that economists believe that markets are efficient
          at allocating resources even though they are not perfectly
          competitive? Economists do not think in reality, often econometrics
          will assign a certain confidence of error-endogeneity.
          <br />
          <br />
          Say’s law of labor-demand boasts a complementary supply to demand
          perhaps unwittingly, and after many thrusts of short term growth,
          non-inflationary unemployment layoffs are expected if the growth
          wasn’t deflationary from the jump.
          <br />
          <br />
          The state of the art, standard, professional anarchists say progress
          is futile && work/markets will never be proper, yet communists as Marx
          would have it presupposes the natural economy proper for the costs of
          circulation (storage & transport) ordinary profits.
          <br />
          <br />
          <div style={{ borderLeft: "2px solid", padding: "10px" }}>
            Strategic nihilism argues for a new approach to social
            transformation that resembles the burning of a field rather than
            building the new world within the shell of the old or one last push
            by the working class to seize the means of production. (“Aragorn!”)
            <br />
            <br />
            After every revolution marking a progressive phase in the class
            struggle, the purely repressive character of the state power stands
            out in bolder and bolder relief. (K.Marx)
            <br />
            <br />
            Wherever a great deal can be made by the use of money, a great deal
            will be given for the use of it; wherever little can be made by it,
            little will be given. (A.Smith)
          </div>
          <br />
          The Anarchist thinks technological progress has run out, but forgets
          how much unnatural inequality there is to progress through. Certainly
          anarchists don’t want everyone who has built these institutions dead
          after their fields are burned?
        </div>
        <div
          style={{
            right: "70px",
            position: "absolute"
          }}
        >
          Anarchy of the moral
        </div>
        <div
          onClick={() =>
            this.setState({
              measure:
                this.state.measure !== "closedanarchymorals" &&
                "closedanarchymorals"
            })
          }
          style={{
            background: "radial-gradient(black, white)",
            //boxShadow: "0px 0px 5px 1px blue",
            cursor: "pointer",
            transition: ".3s ease-out", //"snowflakes [expropriate individuality]"
            right: "10px",
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRight: "1px solid",
            borderBottom: "1px solid",
            transform: `rotate(${
              this.state.measure === "closedanarchymorals" ? 45 : 135
            }deg)`
          }}
        />
        <h4 ref={this.props.anarchy}>
          Representative of{space}
          <a href="https://www.reddit.com/r/technopopulism/">people. anarchy</a>
          , or apathy?
        </h4>
        <div
          style={{
            ...globalpower
          }}
        >
          <h2>
            Isn’t non-deflationary growth only good if it causes commensurate
            equality by general poverty?
          </h2>
          <div
            style={{
              backgroundColor: "white",
              color: "rgb(20,20,50)",
              position: "relative",
              margin: this.state.measure === "closedanarchymorals" && "10px"
            }}
          >
            I’m an anarchist so I think your ideations are reasonable in this
            economy.
            <br />
            AdFabulous9451{space}
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            {space}
            commie.dev/banking - electronic funds transfer tax You guys forget
            about non-voters whom just want to reverse liabilities and debts
            amortized to total budget constraints (incomecash:debt annually).
            Save the rats{space}
            <span role="img" aria-label="squirrel">
              🐿
            </span>
            {space}trump had me draining the swamp like Obama had Hope. Liberty
            and Uniformity. Right to ownership objectively with landed public
            domain property rights.
            <br />
            <br />
            Medicate the Homeless (moving to work) · Answered by Nick Carducci
            <br />
            <i>Is non-deflationary growth good?</i>
            {space}
            Perhaps if it causes commensurate equality by general poverty.
            <br />
            <br />
            <a href="https://marginalism.uk">Human greedy</a>
            {space}is “
            <i>
              the only retard are{space}
              <b>(developmentally)</b>
              {space}disabled and/or injured
            </i>
            .” Poverty real GDP loss of shrinkflation,{space}
            <a href="https://truncatedwholesaletax.com/">
              benefits from essential institutions
            </a>
            , and jobbery. Social security, work at age nine,{space}
            <i>
              <b>then</b>
              {space}accrual amortization to total budget constraint{space}
              <b>naturalizes</b>
            </i>
            {space}in the political economy.
            <br />
            <br />
            These natural rate increases (of{space}
            <a href="https://vaults.biz/gdp">productivity</a>) are{space}
            <b>
              <i>bad advice</i>
            </b>
            {space}
            r/courttechnology. Real gdp growth according to NBER is
            shrinkflation, benefits from{space}
            <a href="https://truncatedwholesaletax.com/">essential</a>
            {space}institutions, and layoffs.
            <br />
            <br />
            So then is why communists say loitering is not restituted by
            foreclosure and Isn’t non-deflationary growth only good if it causes
            commensurate equality by general poverty?
            <br />
            <br />I long silver because it will be currency in circulation,
            {space}
            <b>
              <i>apes</i>
            </b>
            {space}
            <span role="img" aria-label="laughing">
              😂
            </span>
            . How will I the authoritarian court tech spoof geohash square
            r/vaumoney tax-prep that?
            <br />
            <br />
            <Cable
              style={{ width: "100%", height: "300px" }}
              onError={handleScollImgError}
              //img={true}
              src={this.state.noyout ? "" : "https://leisuretoprefer.com"}
              //float={"left"}
              title="leisure to prefer"
              scrolling={this.state.scrolling}
              fwd={this["scrollImg" + scrollnum()]}
              scrollTopAndHeight={
                this.state.scrollTopAndHeight + window.innerHeight
              }
              scrollTop={this.state.scrollTop}
            />
            Darwin says no to lab theory humanharvest.info 2025 will be worse
            {space}
            <span role="img" aria-label="roller coaster">
              🎢
            </span>
            {space}to boot
            {space}
            <span role="img" aria-label="boot soccer">
              🥾⚽️
            </span>
            .
            <br />
            QE prevents revenuedata.doi.gov default 1:5 U.S. UT NM WY to bonds
            as landed value. These properties should be so circulating and
            constant, to the point of being perfectly matching to which labor
            has no purposeful revenue.
          </div>
          <br />I would therefore prefer to burn Property by a{space}
          <a href="https://www.marxists.org/reference/subject/economics/proudhon/letters/46_05_17.htm">
            slow fire
          </a>
          , rather than give it new strength by making a St Bartholomew’s night
          of the{space}
          <a href="https://commie.dev/props">proprietors</a>.
          <br />
          <br />
          Allegedly moral nihilism{space}
          <a href="https://www.marxists.org/reference/archive/nietzsche/1886/beyond-good-evil/ch05.htm">
            has no morals
          </a>
          , not even individually{space}
          <a href="https://www.reddit.com/r/Anarchy101/comments/xtqdod/if_there_are_no_morals_with_individual_preference/">
            as per relativism
          </a>
          /literally{space}
          <a href="https://www.reddit.com/r/Anarchism/comments/xtlrqp/comment/iqqhvip">
            100% direct democracy
          </a>
          .{this.state.measure === "closedanarchymorals" && <br />}
          {this.state.measure === "closedanarchymorals" && <br />}
          {this.state.measure === "closedanarchymorals" && (
            <button
              onClick={() =>
                this.setState({
                  openAbomunista: !this.state.openAbomunista
                })
              }
            >
              <b>
                Moralistic naturalism: the tracing back of apparently
                emanci­pated, supranatural moral values to their “nature”: i.e.,
                to natural immorality, to natural “utility,” etc. My task is to
                translate the apparently emancipated and denatured moral values
                back into their nature—i.e., into their natural “immorality.”
              </b>
            </button>
          )}
          {space}
          {/**I don't know his name, G-d bless him. */}
          <div
            style={{
              color: "white",
              backgroundColor: "rgb(20,20,50)",
              transition: ".3s ease-in",
              fontSize: this.state.openAbomunista ? "" : "0px"
            }}
          >
            "
            <i>
              'You will not stop me from seeking{space}
              <a
                style={{ color: "white" }}
                href="https://www.anarchistfaq.org/pit/index.html"
              >
                revenge
              </a>
              ?'
            </i>
            {this.state.openAbomunista && <br />}
            Oh, people probably would. It's just the mechanisms anarchists
            propose to prevent such things are fundamentally different.
            {this.state.openAbomunista && <br />}
            But revenge as I say is a very un-anarchist idea in my view. I
            believe true Anarchism must take a nihilistic moral stance, because
            to take any other stance implies an authority to oversee the
            administration of morality. If there are no morals then revenge
            cannot be justified any more than the original act that you're
            seeking revenge for."
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            <i>
              Doesn’t relativism express the same morals as nihilism socially
              yet rhetorically (i.e. ex-sad/happy)? What anarchist is in favor
              of the 11/12 jury, the online desist/damage-indemnity, and/or 50%
              majority crowdfund-taxes to convict representation?
            </i>
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            "nonsensical word salad"
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            <i>That’s subjective.</i>
            {space}It makes no sense to disintegrate moral nihilism and
            relativism unless nihilism is apathetic towards the nation-state
            and/or relativism is for 11/12 referenda majority voting.{space}
            <i>Gtfo of my messages.</i>
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            Doesn't structural anarchism amend itself through deliberative
            actions of the moral?
            <br />
            Perhaps this is the{space}
            <i>
              emboldened (social){space}
              <b>brink</b>
              {space}towards reason
            </i>
            {space}
            for the{space}
            <i>”field-burning”</i>
            {space}
            <a
              style={{ color: "white" }}
              href="https://theanarchistlibrary.org/library/aragorn-anarchy-and-nihilism-consequences#toc8"
            >
              nihilist
            </a>
            {space}
            anarchist:
            <div
              style={{
                backgroundColor: "white",
                color: "rgb(20,20,50)",
                position: "relative",
                margin: this.state.openAbomunista && "10px"
              }}
            >
              The group who is best prepared to take advantage of this
              information is not the group with nothing to lose but the group
              with the most resources to bring to bear. If we are no longer
              interested in combining ourselves with others into shapes that can
              be placed on the board of politics and business, then those who do
              can have the board to themselves.
            </div>
            How many is the anarchist by name alone?{space}
            <i>
              In my opinion this bias of linguistics, dictation, and{space}
              <b>not-necessarily erroneously yet aptly-false</b>
              {space}declarations lends itself to mediation over the internet,
              but I digress.
            </i>
            <div
              style={{
                color: "rgb(200,200,250)",
                backgroundColor: "rgb(20,50,140)",
                width: "max-content",
                maxWidth: "calc(100% - 40px)"
              }}
            >
              {this.state.openAbomunista && (
                <button
                  onClick={() =>
                    this.setState({
                      openAnarchy: !this.state.openAnarchy
                    })
                  }
                >
                  <b>Does subsidy and/or technology help social mobility?</b>
                </button>
              )}
              {space}
              {/**I don't know his name, G-d bless him. */}
              <div
                style={{
                  color: "grey",
                  transition: ".3s ease-in",
                  fontSize: this.state.openAnarchy ? "" : "0px"
                }}
              >
                Licensing/capitalism prevents microdosing for they inflate the
                price and make what would be normal extravagant for
                extraordinary profit
                {this.state.openAbomunista && <br />}
                Always been angry, nietziche, “everyone else is the bummer!”
                {this.state.openAbomunista && <br />}I thought anarchists stood
                for something
                {this.state.openAbomunista && <br />}
                <span style={{ textDecoration: "line-through" }}>
                  self reporting of hallucinations
                </span>
                {space}Insurance money expiry/non-compete
                {this.state.openAbomunista && <br />}
                {this.state.openAbomunista && <br />}
                <a
                  style={{
                    color: "rgb(200,200,250)"
                  }}
                  href="https://marginalleisureutilization.quora.com/What-factors-determine-whether-a-supply-curve-is-flat-or-steeply-bowed-1"
                >
                  Propensity
                </a>{" "}
                is Rogue & Universal
                {this.state.openAbomunista && <br />}
                {this.state.openAbomunista && <br />}
                (1) Do you think “moral relativists” aren’t moral nihilists,
                while being a happy nihilist yourself? If you think
                relativist/nihilist aren’t redundant terms, do you also think
                moral relativists are incapable of majority-jury standard 11/12
                (direct) democracy? (2) Are “moral relativists and nihilists”
                exclusively terms of the art of anarchy alone mostly, for
                all-intents and/or -purposes?
                {this.state.openAbomunista && <br />}I gather either you sad boi
                and/or apathetic on embargoing (edit: nor even might you hold
                “desist” 1/12 untruths, if nihilism=!relativism) all the things.
                {this.state.openAbomunista && <br />}
                <i>
                  Identifiable group of individuals are not as important as the
                  invididual
                </i>
              </div>
            </div>
            {this.state.openAbomunista && <br />}
            Yes and no questions are subjective and/or objective. Yeah, you
            might think relativists are activists/exhibitionary, mood/perception
            on life notwithstanding. I use the trope and hoped you’d talk about
            how Nietzsche is like the happiest guyin the world but really every
            one is bumming him out, rather. “No”, the difference is the mood.
            And that is the trope, the perception-centric reality.
            Archaic-spectre! I then conclude with this that moral relativists
            are activists, in at least to not be apathetic against the
            government while nihilists suffer, then private matters are they at
            least of{space}
            <a
              style={{ color: "white" }}
              href="https://reddit.com/r/moralanarchism"
            >
              the 11/12 desist camp
            </a>
            . :)
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            <i>
              Isn't anarchy utopian as it is expropriation of morals? Won't the
              regressive powers of police stand against the idle class in bolder
              relief as nature is synthesized with normality?
            </i>
            <h1
              style={{
                fontSize: this.state.openAbomunista ? "12px" : ""
              }}
            >
              <a
                style={{ color: "white" }}
                href="https://www.marxists.org/archive/marx/works/1844/manuscripts/comm.htm"
              >
                Vulgar
              </a>
              {space}
              <a
                style={{ color: "white" }}
                href="https://www.quora.com/Are-we-at-present-in-the-death-throes-of-communism/answer/Shayn-M-1"
              >
                loser
              </a>
              <span
                style={{
                  fontSize: this.state.openAbomunista ? "12px" : ""
                }}
              >
                : "Private ownership and control to the abstraction of ownership
                and the professional management of companies,{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.quora.com/Can-you-own-anything-under-communism/answer/Nick-Carducci"
                >
                  govenor
                </a>
                ."
              </span>
            </h1>
            {space}
            <b>
              Isn't a well post-to-comment ratio on Reddit subs a mark of a
              structural antagonist?
            </b>
            {this.state.openAbomunista && <br />}
            {this.state.openAbomunista && <br />}
            Social{space}
            <a
              style={{ color: "white" }}
              href="https://comlib.quora.com/Doesn-t-anarchism-assume-no-rights-because-there-are-no-morals-but-for-an-individuals-or-a-nameless-affinity-groups-re"
            >
              capital
            </a>
            {this.state.openAbomunista && <br />}
            Blasphemous no control.
            {this.state.openAbomunista && <br />}
            <i>
              In a communist society, would people only vote on desist orders
              because every law is already written? How unbiased can a referenda
              poll be but for the legislative text itself? Should empty
              penultimate votes and non-voters be counted as reconciliation (to
              last year's deficit and law) powers to the stealers in ranked
              choice
              {space}
              <a style={{ color: "white" }} href="https://commie.dev/voting">
                voting
              </a>
              ?
            </i>
            {this.state.openAbomunista && <br />}
            <i
              style={{
                color: "navy",
                backgroundColor: "lightcyan",
                width: "max-content",
                maxWidth: "calc(100% - 40px)"
              }}
            >
              {this.state.openAbomunista && (
                <button
                  style={{
                    textDecoration: "underline",
                    backgroundColor: "black",
                    color: "white"
                  }}
                  onClick={() =>
                    this.setState({
                      openTotalRecall: !this.state.openTotalRecall
                    })
                  }
                >
                  A total-recall
                </button>
              )}
              {space}slogan colleague came up with “emulation" as a terse word
              for retaliation in Adam Smith's theory of the Moral. I prefer
              retribution, and this defines moral anarchism to me,
              <div
                style={{
                  backgroundColor: "lightcyan",
                  transition: ".3s ease-in",
                  fontSize: this.state.openTotalRecall ? "" : "0px"
                }}
              >
                for I want more of the (truncated durable geohash square spoof)
                plaintiff jury system (tax) and hate the government. Like, how
                are certificates separate from degrees? Is people without kid
                property tax, for teachers that speak with expressive hand
                gestures? I'm still stuck on if relativists or nihilists are
                delineated by either embargoes or holds, the trope of sadness,
                or they are just redundant wastes of time.
                {this.state.openTotalRecall && <br />}
                {this.state.openTotalRecall && <br />}
                'What is moral anarchism?'
                {this.state.openTotalRecall && <br />}
                {this.state.openTotalRecall && <br />}I made it up because I do
                not understand relativist and nihilist anarchy, unless the
                latter is the trope of sadness (laymen espouse Nietzsche with),
                for we as learned anarchists conclude we generally expropriate
                morals, and under these terms, even libertarians are
                “syndicated” by name instead of affinity and thereby ‘not
                anarchist’. Unless*, relativist anarchists suppose morals in the
                court of law, too. As stated here in the OP, however, moral
                anarchists tax for plaintiffs, in either case. We cannot abide
                certifications nor private properties of production as social
                capital (Marx’s contribution) expanded beyond the individual
                through such amongst expiry, non-compete, secrets, and/or
                risk-making (my contribution).
                {this.state.openTotalRecall && <br />}
                {this.state.openTotalRecall && <br />}
                you wanna give it a shot at delineating the two? Relative morals
                vs none doesn’t affectuate themselves differently, socially. So
                what the heck is the difference, just in your head?
              </div>
            </i>
            <h4
              style={{
                fontSize: this.state.openAbomunista ? "12px" : ""
              }}
            >
              Perhaps the fault of anarchists is deluding themselves of a utopia
              as the leather boot stands on their necks, instead of spoofing
              geohash squares. Oh, am I the individual with morals for the
              anarchists? This logic bewilders me.
            </h4>
            'Anarchism is based on a single principle, which may or may not be
            moral. This principle is that the best structure for human
            organization on the largest scales would distribute power to the
            maximum extent (approaching no structure whatsoever),'
            {this.state.openAbomunista && <br />}
            <div
              style={{
                borderLeft: "2px solid",
                padding: this.state.openAbomunista && "10px"
              }}
            >
              This is how I am communist and you are not. We need an
              organization against socialized capital. If morals are not the
              properties of the state within reason against rationality of
              revenue at all costs, even in a dishonest market, that which even
              still is the crux of the repressionary state that is
              democratically buttressed. That is, my antithesis to the current
              state.
            </div>
            <div
              style={{
                position: "relative",
                display: "block",
                margin: this.state.openAbomunista && "10px"
              }}
            >
              <span style={{ color: "grey" }}>
                u/DecoDecoMan: '…, if you just focus on the structure part
                (which would be the most tangible) you have an amoral belief.
                From both the amoral belief and the moral view of the belief, a
                system of understanding can be approached by applying this
                belief in action in the real world. If there should be no
                hierarchy (a simplification of what anarchism seeks), then how
                should I treat people in my social class?'
              </span>
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              u/AdFabulous9451: I studied markets first, which are social.
              Rationality is revenue above Say’s labor-demand cost threshold.
              So, it’s natural for me to{space}
              <span style={{ color: "salmon" }}>
                profess the moral as Adam Smith did before your merry band of
                anarchists
              </span>
              , and Karl Marx attempted to suggest self-defense requires a
              long-standing court.{space}
              <span style={{ color: "grey" }}>
                I build government technology, and two fold I help the anarchist
                with defending themselves, but helping others defend themselves
                is good for natural productivity.
              </span>
              {space}The hierarchy forms from the human nature, yet of social
              capital.{space}
              <span style={{ color: "salmon" }}>
                What do you call any tooling to prohibit hierarchy as a sort of
                standing-order?
              </span>
              {space}
              Shouldn’t 11/12 proportion vote permit business? Is this not the
              relativist anarchist?{space}
              <span style={{ color: "grey" }}>
                If you cannot answer those, what are your thoughts on Adam
                Smith’s theory of the Moral?
              </span>
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              u/DecoDecoMan: Anarchists, as a whole, did not create a form of
              morality of their own.{space}
              <i>
                Some did, such as Guyau, but they abandoned the obligation and
                sanction most moralities are founded on.
              </i>
              {space}
              <span style={{ color: "grey" }}>
                \nAs such, once again I don't think Adam Smith is relevant in
                this conversation.
              </span>
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              <i>You do not need to prohibit something to oppose it.</i>
              {space}If I oppose oranges am I prohibiting oranges? Prohibition
              is a command, opposition is just the use of force (or, in a
              widespread anarchist society, involves ignoring would-be
              authoritarians).
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              u/AdFabulous9451:{space}
              <span style={{ color: "grey" }}>
                <i>Widespread ignorance to get what you want.</i>
                {space}I’ll have to find the discernment of morals/interests
                command/opposition, perhaps it is also social, as Marx did to
                capital. But the economy is social, and the or
              </span>
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              u/DecoDecoMan: I'm unaware of how what I described can be labelled
              as "widespread ignorance" unless you think any lack of morals is
              "ignorance".
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              u/AdFabulous9451:{space}
              <span style={{ color: "grey" }}>
                I think the difference between your understanding of morals and
                the communists’ is social. Yours is always social.
              </span>
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}I also think all morals as
              you would have it are rational. I ascribe to the positive sum of
              labor skills less machine rent secrets non-compete surrender of
              good will tort for instance… future demand cost sharing of again
              consumer fraud laws. I should stop now so I don’t ask how civil
              business law is settled in anarchy.
              {this.state.openAbomunista && <br />}
              {this.state.openAbomunista && <br />}
              <i>
                Doesn’t the anarchist assume they aren’t prey to the social
                capitalists?
              </i>
              {this.state.openAbomunista && <br />}
              <span style={{ color: "grey" }}>
                The point is that anarchists must stand for their own interests,
                or non-social morals if you will, and therein is the dividing
                factor of relativists and nihilist anarchists, the willingness
                to devise a plan to defend themselves, perhaps exclusively
                socially. Then, nihilists can stake the mantle of never
                organizing.
              </span>
              {space}Else, again, the terms relativist and/or nihilist anarchist
              are redundant. Neither will they then otherwise participate in a
              jury permit system to desist for untruths nor a business’ minimal
              viable duress of “user license”.
            </div>
          </div>
          <div
            style={{
              position: "relative",
              display: "block",
              margin: this.state.openAbomunista && "10px"
            }}
          >
            Is this how we differentiate ourselves,{space}
            <i>
              being mercenaries and/or{space}
              <a href="https://marginalism.uk">workers</a>
            </i>
            ? It is perhaps rather the
            {space}
            <i>
              <b>word</b>
              {space}progress
            </i>
            , admitted:
            <div
              style={
                this.state.measure === "closedanarchymorals"
                  ? {
                      borderLeft: "2px solid",
                      margin: "4px 0px",
                      padding: "10px"
                    }
                  : {}
              }
            >
              The second premise builds on the first.{space}
              <i>
                If history is no longer a ‘true’ story (in the grand epic sense
                that Western Civilization classes or Marxists speak of), then
                {space}
                <b>progress is no longer</b>
                {space}that story[,] extended into the future.
              </i>
              {space}If
              {space}
              <a href="https://theanarchistlibrary.org/library/aragorn-anarchy-and-nihilism-consequences#toc8">
                progress
              </a>
              {space}
              is no longer assumed on the world stage it may be that it wasn’t
              the right mechanism (or meta-narrative) to understand the material
              world, humans’ role in it, or much of anything at all. Where does
              that leave evolution? Isn’t evolution just an idealist-materialist
              ‘proof’ of progress in biological systems?
            </div>
            Marxists assume the capitalist profits by steady prices and
            technological advancement, at least, while Stuart Mill and the rest
            thoughts profits would remain ordinary as markets never compete with
            consumers or make without Say’s labor-demand expiry non-compete
            labor, oh{space}
            <i>no no no</i>:
            <div
              style={
                this.state.measure === "closedanarchymorals"
                  ? {
                      borderLeft: "2px solid",
                      margin: "4px 0px",
                      padding: "10px"
                    }
                  : {}
              }
            >
              James Mill, MacCulloch, Torrens, Senior, John Stuart Mill, and a
              whole series besides, of bourgeois political economists, insist
              that all machinery that displaces workmen, simultaneously and
              necessarily sets free an amount of capital adequate to employ the
              same identical workmen.
            </div>
            Economists (NBER) currently perceive non-inflationary unemployment
            as recessionary:
            <div
              style={
                this.state.measure === "closedanarchymorals"
                  ? {
                      borderLeft: "2px solid",
                      margin: "4px 0px",
                      padding: "10px"
                    }
                  : {}
              }
            >
              The variables the business cycle dating committee typically tracks
              include real personal income minus government transfers,
              employment, various forms of real consumer spending, and
              industrial production.
            </div>
            <div
              style={
                this.state.measure === "closedanarchymorals"
                  ? {
                      borderLeft: "2px solid",
                      margin: "4px 0px",
                      padding: "10px"
                    }
                  : {}
              }
            >
              That portion of the working-class, thus by machinery rendered
              superfluous, i.e., no longer immediately necessary for the
              self-expansion of capital, either goes to the wall in the unequal
              contest of the old handicrafts and manufactures with machinery, or
              else floods all the more easily accessible branches of industry,
              swamps the labour-market, and sinks the price of labour-power
              below its value [if prices do not hold to margins].
            </div>
            So, the anarchist thinks{space}
            <i>technology has run out</i>
            {space}(or is not worth
            {space}
            <i>
              <b>suing</b>
              {space}for
            </i>
            ) but there is{space}
            <i>short term employment assumed to be long term</i>
            {space}when
            {space}
            <i>’non-deflationary growth’</i>
            {space}is begged for by “the{space}
            <i>Laffer curve</i>,”{space}
            <i>(of a free rider immutable plaintiff tax)</i>. The
            Socio-political and thereby economic literature is a mess, but I can
            see a{space}
            <i>
              <b>reasonable</b>
              {space}way out
            </i>
            {space}for at worst damned *optimism* about the{space}
            <a href="https://commie.dev/police">repressive</a>
            {space}state as power verily as ultimate relief.{space}
            <i>
              Truly the commie wishes to make the rich pay for market security,
              while the anarchists wish to do what else but start anew.
            </i>
            <h1
              style={{
                margin:
                  this.state.measure === "closedanarchymorals" && "4px 0px"
              }}
            >
              How does the anarchist emote anticapitalism without structure?
              After the fields have burned, won't the elite technologist
              secretaries remain?
            </h1>
            Strategic nihilism argues for a new approach to social
            transformation that resembles the burning of a field rather than
            building the new world within the shell of the old or one last push
            by the working class to seize the means of production.
          </div>
        </div>
        <div
          style={{
            right: "70px",
            position: "absolute"
          }}
        >
          Anarchy morale
        </div>
        <div
          onClick={() =>
            this.setState({
              measure:
                this.state.measure !== "closedlaborpower" && "closedlaborpower"
            })
          }
          style={{
            background: "radial-gradient(black, white)",
            //boxShadow: "0px 0px 5px 1px blue",
            cursor: "pointer",
            transition: ".3s ease-out",
            right: "10px",
            position: "absolute",
            width: "20px",
            height: "20px",
            borderRight: "1px solid",
            borderBottom: "1px solid",
            transform: `rotate(${
              this.state.measure === "closedlaborpower" ? 45 : 135
            }deg)`
          }}
        />
        <h3>
          labour power{space}
          <a href="https://reddit.com/r/spamanarchy">encroachment</a>
          {space}
          <span style={{ color: "grey", fontWeight: "normal" }}>
            risk capital{space}
            <a href="https://comlib.quora.com/Did-Karl-Marx-have-a-view-on-women-1">
              life game
            </a>
            {space}If a dishonest game isn't considered naturally normal, why
            then is an indirect market?
          </span>
        </h3>
        <div
          style={{
            ...laborpower,
            backgroundColor: "grey",
            color: "white",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)"
          }}
        >
          <b>
            <a
              style={{
                //If a dishonest game isn't considered naturally normal, why then is an indirect market?

                color: "black",
                backgroundColor: "white"
              }}
              href="https://www.marxists.org/archive/marx/works/1880/soc-utop/ch03.htm"
            >
              "The product governs the producers"
            </a>
          </b>
          <br />
          Between capitalist and communist society there lies the period of
          revolutionary transformation of the one to the other. Corresponding to
          this is also a political transition period in which the state can be
          nothing but the revolutionary dictatorship of the proletariat. That,
          in fact, by the word ‘state’ is meat the government machine, or the
          state insofar as it forms a special organism separated from society
          through division of labor, the economic basis of the state.
          <div
            style={{
              backgroundColor: "rgb(50,0,90)",
              border: "3px solid darkslateblue",
              color: "white",
              padding: "5px",
              margin: "5px",
              marginLeft: "0px",
              width: "calc(100% - 16px)"
            }}
          >
            <a
              style={{
                color: "white"
              }}
              href="https://thumbprint.quora.com/What-is-the-majority-opinion-on-Socialism-1"
            >
              That the workers
            </a>
            {space}desire to establish the conditions for co-operative
            production on a social scale, and first of all on a national scale,
            in their own country, only means that they are working to
            revolutionize the present conditions of production, and it has
            {space}
            <a
              style={{
                color: "white"
              }}
              href="https://www.marxists.org/archive/marx/works/1875/gotha/ch03.htm"
            >
              nothing in common with the foundation of co-operative societies
              with state aid
            </a>
            . But as far as the present co-operative societies are concerned,
            they are of value only insofar as they are the independent creations
            of the workers and not proteges either of the governments or of the
            bourgeois.
          </div>
          <span ref={this.props.taxes}>
            Taxes are the economic basis of the government machinery and nothing
            else. It is a truly{space}
            <a href="https://www.marxists.org/archive/marx/works/1849/05/10c.htm">
              Hohenzollern
            </a>
            {space}idea that a{space}
            <a href="https://www.marxists.org/archive/marx/works/1871/letters/71_08_10.htm">
              people
            </a>
            {space}commits a crime in continuing to defend itself once its
            {space}
            <a href="https://commie.dev/police">regular army</a>
            {space}has ceased to exist.
          </span>
          <div
            style={{
              backgroundColor: "white",
              color: "darkslateblue",
              padding: "5px",
              margin: "5px",
              marginLeft: "0px",
              width: "calc(100% - 16px)"
            }}
          >
            Aren’t{space}
            <a href="https://saverparty.quora.com/Why-does-Trump-dislike-ranked-choice-voting-1">
              Republicans
            </a>
            {space}burgeoning financial libertarians?{space}
            <i>
              Is exporting a way for a relatively developed country to save
              money? Is deficit spending a way to save money?
            </i>
            <br />
            <b
              style={{
                color: "black",
                backgroundColor: "white"
              }}
            >
              "Anarchy reigns in socialized production."
            </b>
            <br />
            <span
              style={{
                WebkitTextStroke: "1px orange",
                color: "black"
              }}
            >
              <a href="https://www.quora.com/unanswered/Why-is-marijuana-not-allowed-to-be-driven-with-when-use-has-exceeded-accidents-in-growth">
                How can a marijuana user be considered a psychiatric patient if
                there is recreational use unless the latter also is so
                declarative?
              </a>
            </span>
          </div>
          The executive of the modern state is but a committee for managing the
          common affairs of the whole bourgeoisie. ...The capitalist state
          serves as the managing committee of the bourgeoisie.
          <div
            style={{
              backgroundColor: "white",
              color: "darkslateblue",
              padding: "5px",
              margin: "5px",
              marginLeft: "0px",
              width: "calc(100% - 16px)"
            }}
          >
            Wouldn’t a truncated wholesale durable goods sales tax not only be
            better for workers and savers than spenders but also make the state
            easier to manage as a zero deficit fiscal policy exhibition?
          </div>
          "We want to incentivize people to invest in America," says Stephen
          Moore. Do you like life{space}
          <span role="img" aria-label="salute america">
            🫡🇺🇸
          </span>
          {space}Isn't QT an exercise in futility
          <br />
          <br />
          Should we pay back debts or claim public good will right to own is
          surrendered and/or loitered? Isn’t a fettered economy one with
          ordinary profits?{space}
          <b style={{ color: "grey", backgroundColor: "white" }}>
            Isn’t property production capital? Why should utopia be left
            unfettered?
          </b>
          {space}Isn’t equality a systemic pedantry of socially-mobile
          qualities?{space}
          <i>
            Other than political and banking issues, why do market industry
            sectors move together in prices? Aren’t ordinary profits gained by
            rationality and direct/honest private capital instead of that and
            expiry/non-compete social capital?
          </i>
        </div>
        <div
          style={{
            ...laborpower,
            color: "white",
            backgroundColor: "rgb(50,180,140)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          So long as the laws of exchange are observed in every single act of
          exchange the mode of appropriation can be completely revolutionised
          without in any way affecting the property rights which correspond to
          commodity production.
        </div>
        <div
          style={{
            ...laborpower,
            color: "white",
            backgroundColor: "rgb(180,100,140)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          That portion of the{space}
          <a href="https://www.marxists.org/archive/marx/works/1869/letters/69_11_19-abs.htm">
            working-class
          </a>
          , thus by machinery rendered superfluous, i.e., no longer immediately
          necessary for the self-expansion of capital, either goes to the wall
          in the unequal contest of the old handicrafts and manufactures with
          machinery, or else floods all the more easily accessible branches of
          industry, swamps the labour-market, and{space}
          <span
            style={{
              textDecoration: "line-through"
            }}
          >
            sinks the price of labour-power below its value
          </span>{" "}
          [if prices do not hold to margins].
          <div
            style={{
              backgroundColor: "rgb(50,0,90)",
              border: "3px solid darkslateblue",
              color: "white",
              padding: "5px",
              margin: "5px",
              marginLeft: "0px",
              width: "calc(100% - 16px)"
            }}
          >
            <a
              style={{ color: "white" }}
              href="https://www.marxists.org/archive/marx/works/1881/zasulich/draft-1.htm"
            >
              In order to expropriate
            </a>
            {space}the agricultural producers, it is not necessary to drive them
            from the land, as happened in England and elsewhere; nor to abolish
            communal property by some ukase. If you go and take from the
            peasants more than a certain proportion of the product of their
            agricultural labour, then not even your gendarmes and your army will
            enable you to tie them to their fields. In the last years of the
            Roman Empire some provincial decurions, not peasants but actual
            landowners, fled their homes, abandoned their land, and even sold
            themselves into bondage – all in order to be rid of a property that
            had become nothing more than an official pretext for exerting quite
            merciless pressure over them.
            <br />
            <br />
            After the so-called emancipation of the peasantry, the state placed
            the Russian commune in abnormal economic conditions; and since that
            time, it has never ceased to weigh it clown with the social force
            concentrated in its hands. Exhausted by tax demands, the commune
            became a kind of inert matter easily exploited by traders,
            landowners and usurers. This oppression from without unleashed the
            conflict of interests already present at the heart of the commune,
            rapidly developing the seeds of its disintegration. But that is not
            all. [At the peasant’s expense, it grew as in a hothouse those
            excrescences of the capitalist system that can be most easily
            acclimatised (the stock exchange, speculation, banks, share
            companies, railways), writing off their deficits, advancing profits
            to their entrepreneurs, etc., etc.] At the peasant’s expense, the
            state [lent a hand to] grew in hothouse conditions certain branches
            of the Western capitalist system which, in no way developing the
            productive premises of agriculture, are the best suited to
            facilitate and precipitate the theft of its fruits by un productive
            middlemen. In this way, it helped to enrich a new capitalist vermin
            which is sucking the already depleted blood of the ‘rural commune’.
          </div>
        </div>
        <div
          style={{
            ...laborpower,
            color: "white",
            backgroundColor: "firebrick", //rgb(150,20,50)
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          This ...capitalist mode of production... a mere phase of transition to
          a new form of production. It manifests itself as such a contradiction
          in its effects. It establishes a monopoly in certain spheres and
          thereby requires state interference. It reproduces a new financial
          aristocracy, a new variety of parasites in the shape of promoters,
          speculators and simply nominal directors; a whole system of swindling
          and cheating by means of corporation promotion, stock issuance, and
          stock speculation. It is private production without the control of
          private property.
          <br />
          <br />
          <i style={{ opacity: ".7" }}>
            <a
              style={{
                color: "white"
              }}
              href="https://www.marxists.org/archive/marx/works/1879/letters/79_04_10.htm"
            >
              The system
            </a>
            {space}inaugurated in France by Louis Philippe, of handing over the
            railways to a small band of financial aristocrats, endowing them
            with long terms of possession, guaranteeing the interest{space}
            <b>out of the public pocket</b>, etc., etc., was pushed to the
            utmost limit by Louis Bonaparte, whose regime, in fact, was
            essentially based upon the traffick in railway concessions, to some
            of which he was so kind as to make presents of canals, etc.
            <br />
            <br />
            <a
              style={{ color: "white" }}
              href="https://www.marxists.org/archive/marx/works/1852/18th-brumaire/ch04.htm"
            >
              Whatever
            </a>
            {space}amount of passion and declamation might be employed by the
            party of Order against the minority from the tribune of the National
            Assembly, its speech remained as monosyllabic as that of the
            Christians, whose words were to be: Yea, yea; nay, nay! As
            monosyllabic on the platform as in the press. Flat as a riddle whose
            answer is known in advance. Whether it was a question of the right
            of petition or the tax on wine, freedom of the press or free trade,
            the clubs or the municipal charter, protection of personal liberty
            or regulation of the state budget, the watchword constantly recurs,
            the theme remains always the same, the verdict is ever ready and
            invariably reads: "Socialism!" Even bourgeois liberalism is declared
            socialistic, bourgeois enlightenment socialistic, bourgeois
            financial reform socialistic. It was socialistic to build a railway
            where a canal already existed, and it was socialistic to defend
            oneself with a cane when one was attacked with a rapier.
          </i>
        </div>
        <div
          style={{
            ...laborpower,
            color: "white",
            backgroundColor: "rgb(50,120,220)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          <h2
            style={{
              color: "black",
              backgroundColor: "white"
            }}
          >
            two-parts capital, labor
          </h2>
          The credit system appears as the main lever of over-production and
          over-speculation in commerce solely because the reproduction process,
          which is elastic by nature, is here forced to its extreme limits, and
          is so forced because a large part of the social capital is employed by
          people who do not own it and who consequently tackle things quite
          differently than the owner, who anxiously weighs the limitations of
          his private capital in so far as he handles it himself.
          <br />
          <br />
          The control over social capital, not the individual capital of his
          own, gives him control of social labour. The capital itself, which a
          man really owns or is supposed to own in the opinion of the public,
          becomes purely a basis for the superstructure of credit.
          <br />
          <br />
          <span
            style={{
              fontWeight: "bolder",
              WebkitTextStroke: "1px rgb(240,100,50)"
            }}
          >
            This does not occur when equalisation creates a general rate of
            profit. If prices of commodities in one sphere are below or above
            the price of production (wherein we deliberately leave aside the
            fluctuations attendant upon the various phases of the industrial
            cycle in each and every enterprise) the balance is effected through
            the expansion or curtailment of production, i.e., the expansion or
            curtailment of the masses of commodities thrown on the market by
            industrial capitals — caused by inflow or outflow of capital to and
            from individual spheres of production. It is by this equalisation of
            the average market-prices of commodities to prices of production
            that deviations of specific rates of profit from the general, or
            average, rate of profit are corrected.
          </span>
          <br />
          <br />
          The self-expansion of capital based on the contradictory nature of
          capitalist production permits an actual free development only up to a
          certain point, so that in fact it constitutes an immanent fetter and
          barrier to production, which are continually broken through by the
          credit system. Hence, the credit system accelerates the material
          development of the productive forces and the establishment of the
          world-market. It is the historical mission of the capitalist system of
          production to raise these material foundations of the new mode of
          production to a certain degree of perfection. At the same time credit
          accelerates the violent eruptions of this contradiction — crises — and
          thereby the elements of disintegration of the old mode of production.
          <div
            style={{
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              margin: "10px",
              width: "calc(100% - 40px)",
              border: "1px solid"
            }}
          >
            Doesn't a natural productivity rate require properties to be public?
            Is public socialized property universal private property? Are
            properties sinking fixed costs if they are not capital as in equity
            nor interest?
          </div>
        </div>
        <div
          style={{
            ...laborpower,
            color: "white",
            backgroundColor: "rgb(230,160,0)", //"rgb(245,245,170)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          This is the abolition of the capitalist mode of production within the
          capitalist mode of production itself, and hence a self-dissolving
          contradiction, which prima facie represents a mere phase of transition
          to a new form of production. It manifests itself as such a
          contradiction in its effects. It establishes a monopoly in certain
          spheres and thereby requires state interference. It reproduces a new
          financial aristocracy, a new variety of parasites in the shape of
          promoters, speculators and simply nominal directors; a whole system of
          swindling and cheating by means of corporation promotion, stock
          issuance, and stock speculation. It is private production without the
          control of private property.
        </div>
        Taxes help manage bourgeoisie idle class over industrial [{space}
        <a href="https://nationalsecuritycasino.com">war</a>
        {space}or{space}
        <a href="https://vaults.biz/gdp">butter</a>].
        <h4
          style={{
            color: "white",
            backgroundColor: "rgb(165,75,205)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          Communism{space}
          <a
            style={{
              color: "white"
            }}
            href="https://truncatedwholesaletax.com"
          >
            deprives no man
          </a>
          {space}of the power to appropriate the products of society; all that
          it does is to deprive him of the{space}
          <a
            style={{
              color: "white"
            }}
            href="https://marx.quora.com"
          >
            power to subjugate
          </a>
          {space}the labour of others by means of such appropriations. Vulgar
          socialism (and from it in turn a section of the democrats) has taken
          over distribution as production[, not productive-ward]. After the real
          relation has long been made clear, why retrogress again?
        </h4>
        <a href="https://www.quora.com/How-can-Republicans-who-want-economic-growth-beyond-the-natural-rate-increase-be-called-conservative">
          How can Republicans who want economic growth beyond the natural rate
          increase be called conservative
        </a>
        ? Why is debt to GDP relevant if the velocity of checking is 1/11 of
        M2?. Isn’t a falling debt ratio only marginally better than having none?
        Is there no choice not to borrow to keep up with the exchange value
        costs in excess of individual use by expiry or non-compete agreement
        padrones? Was Trump right about immigration? “Worsening inequality,
        lower growth” "nirvana 50 year lows in unemployment minority so reduced
        inequality" "Orwellian taxes Reagan small business growth is not
        inflationary, and low unemployment is not inflationary, so that the
        economy works for everyone[ but isn’t efficient]." If a torus reactor
        were not prevented by the government to keep us working, would *Larry
        Kudlow* melt into a puddle? "adjustable rate to manage your business"
        dynamic output is naturally 0% per person, or half life ago population
        growth above last period's. *Judy Sheldon* What is a work requirement?
        Isn’t socialism defined by welfare for the injured and developmentally
        disabled alone? Are there non-old age surviving, non-developmentally
        disabled, nor injured people not working? Why can't poor people get
        jobs? We are poor because we won’t take short term employment as only
        inflates. Has homelessness and involuntary residences increased while
        poverty has decreased because they weren’t medicated? Why doesn’t
        government oversight stop social security claims of disability based on
        ‘unkempt hair’?{space}
        <a href="https://www.quora.com/Why-is-Social-Security-claiming-the-injured-are-mentally-ill/answer/Domi-OBrien">
          I wish you people died
        </a>
        . Why is there a worker shortage if we are all working more than ever?
        Will there be credit inflation with commodity money?
        <div
          style={{
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          Isn’t socialism the privatization of capital?
          <div
            style={{
              padding: "10px",
              margin: "10px",
              width: "calc(100% - 40px)"
            }}
          >
            Howard Aitchison:{" "}
            <a href="https://www.quora.com/Isn-t-capitalism-the-socialization-of-capital">
              What you describe is Capitalism
            </a>
            .
            <div
              style={{
                padding: "10px",
                margin: "10px",
                width: "calc(100% - 40px)"
              }}
            >
              <i>
                If anything socialism would be nationalizing capital. However,
                even that is a very poor description of Socialism.
              </i>
              <div
                style={{
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                Nick Carducci:{space}
                <span
                  style={{
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  “5. Centralisation of credit in the hands of the state, by
                  means of a national bank with State capital and an exclusive
                  monopoly. …So long as the laws of exchange are observed in
                  every single act of exchange the mode of appropriation can be
                  completely revolutionised without in any way affecting the
                  property rights which correspond to commodity production.”
                </span>
                {space}industry specific payday royalty contracts
              </div>
              Howard Aitchison:{" "}
              <i>If it is in the hand of the state it is not ‘privatised’.</i>
              <div
                style={{
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                Nick Carducci:{space}
                <span
                  style={{
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  “…social capital is employed by people who do not own it and
                  who consequently tackle things quite differently than the
                  owner, who anxiously weighs the limitations of his private
                  capital in so far as he handles it himself.”
                </span>
                <br />
                <br />
                {space}
                <span
                  style={{
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  “It reproduces a new financial aristocracy, a new variety of
                  parasites in the shape of promoters, speculators and simply
                  nominal directors; a whole system of swindling and cheating by
                  means of corporation promotion, stock issuance, and stock
                  speculation. It is private production without the control of
                  private property.”
                </span>
                <br />
                <br />
                <i>
                  Marx at least describes private properties in the hands of the
                  state insofar as to interfere with monopolies.
                </i>
                {space}
                <span
                  style={{
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  “This is the abolition of the capitalist mode of production
                  within the capitalist mode of production itself, and hence a
                  self-dissolving contradiction, which prima facie represents a
                  mere phase of transition to a new form of production. It
                  manifests itself as such a contradiction in its effects. It
                  establishes a monopoly in certain spheres and thereby requires
                  state interference.”
                </span>
              </div>
              <i>
                Privatisation is turning over the control from the state to
                private ownership.
              </i>
              <br />
              <div
                style={{
                  padding: "10px",
                  margin: "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                <i>
                  Well, I guess you disagree with Marx, myself, and{space}
                  <span
                    style={{
                      textDecoration: "line-through"
                    }}
                  >
                    this guy
                  </span>
                  .
                  <br />
                  <br />
                  <a href="https://www.quora.com/unanswered/Isn-t-capital-mutually-exclusive-of-production-in-terms-of-access-control">
                    Isn’t capital mutually exclusive of production in terms of
                    access control
                  </a>
                  ?
                </i>
                <div
                  style={{
                    padding: "10px",
                    margin: "10px",
                    width: "calc(100% - 40px)",
                    border: "1px solid" //private capital social dick
                  }}
                >
                  Ryan Davidson, Isn’t capitalism the socialization of capital?
                  <br />
                  <br />
                  <i>
                    The Marxist definition of capitalism is that capital is
                    privately owned. So, unless you’re one of those people who
                    defines government ownership as ‘state capitalism’ then no.
                  </i>
                  <div
                    style={{
                      padding: "10px",
                      margin: "10px",
                      width: "calc(100% - 40px)",
                      border: "1px solid"
                    }}
                  >
                    Privatization of capital is communism.{space}
                    <a href="https://www.quora.com/unanswered/Are-properties-sinking-fixed-costs-if-they-are-not-capital-as-in-equity-or-interest">
                      Are properties sinking fixed costs if they are not capital
                      as in equity or interest
                    </a>
                    ?<br />
                    <br />
                    <span
                      style={{
                        backgroundColor: "grey",
                        color: "white"
                      }}
                    >
                      “…social capital is employed by people who do not own it
                      and who consequently tackle things quite differently than
                      the owner, who anxiously weighs the limitations of his
                      private capital in so far as he handles it himself.”
                    </span>
                  </div>
                  “Privatization of capital is communism”
                  <br />
                  <br />
                  Wait, what? I don’t know anyone who defines communism that
                  way.
                </div>
                <span
                  style={{
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  “So long as the laws of exchange are observed in every single
                  act of exchange the mode of appropriation can be completely
                  revolutionised without in any way affecting the property
                  rights which correspond to commodity production.”
                </span>
                <br />
                <br />
                {/**"'[not vote, riot in streets]'" */}
                {space}
                commie.dev
              </div>
              <i>
                It’s not about agreeing or disagreeing, that is what the word
                means.
              </i>
            </div>
            <i>
              private business, industry, and service are the roles in control
              of capital and labor as the two parts in production, a social
              process. so, to privatize production is to socialize capital away
              from labor. the state is to intervene with monopolies, with
              monopolies of actually free-service.
            </i>
          </div>
          …. and to privatize capital is to socialize production
        </div>
        is credit not theft? if not fraud of certain quality{space}
        <a href="https://debentures.quora.com">indemneture</a>
        <a href="https://www.marxists.org/history/etol/newspape/soc-rev-srg/v8n6-mid-mar-1958-SR.pdf">
          <img
            style={{ width: "100%" }}
            src="https://www.dropbox.com/s/cj5zrukehzmk0p4/Screen%20Shot%202022-09-10%20at%209.38.07%20PM.png?raw=1"
            alt="socialist 1958 - https://www.marxists.org/history/etol/newspape/soc-rev-srg/v8n6-mid-mar-1958-SR.pdf"
          />
        </a>
        <h3>
          <a href="https://monopolies.quora.com">state intervention</a>
          {space}in trusts that "build" credit.{space}
          <span style={{ fontSize: "12px" }}>
            Subsidy is not over regulation, but nationwide permits (for the
            environment, not uniform bodily liberty) are.
          </span>
        </h3>
        <div
          style={{
            color: "white",
            backgroundColor: "rgb(165,75,205)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          <h4 style={{ margin: "4px 0px" }}>
            Social capital is our issue, and ground rent is the cost of
            circulation, being storage and transport.
          </h4>
          He is then asked whether merchants' bills of exchange represent
          commodities which have been sold or shipped. He denies that these
          bills{space}
          <a
            style={{ color: "white" }}
            href="https://www.marxists.org/archive/marx/works/1894-c3/ch26.htm"
          >
            represent the value of commodities in the same way that a bank-note
            represents gold
          </a>
          .
          <br />
          <br />
          Aside from the stock-company business, which represents the abolition
          of capitalist private industry on the basis of the capitalist system
          itself and destroys private industry as it expands and invades new
          spheres of production, credit offers to the individual capitalist; or
          to one who is regarded a capitalist, absolute control within certain
          limits over the capital and property of others, and thereby over the
          labour of others.
          <br />
          <br />
          <i>
            '
            <a
              style={{ color: "white" }}
              href="https://www.marxists.org/archive/marx/works/1894-c3/ch26.htm"
            >
              Merchants
            </a>
            , manufacturers, etc., carry on operations much beyond those which
            the use of their own capital alone would enable them to do....
            Capital is rather the foundation upon which a good credit is built
            than the limit of the transactions of any commercial establishment.'
            (Economist, 1847, p. 333.)
          </i>
          <br />
          <br />
          The{space}
          <a
            style={{ color: "white" }}
            href="https://www.marxists.org/archive/marx/works/1894-c3/ch27.htm"
          >
            two characteristics immanent
          </a>
          {space}in the credit system are, on the one hand, to develop the
          incentive of capitalist production, enrichment through exploitation of
          the labour of others, to the purest and most colossal form of gambling
          and swindling, and to reduce more and more the number of the few who
          exploit the social wealth; on the other hand, to constitute the form
          of transition to a new mode of production.
          <br />
          <br />
          The{space}
          <a
            style={{ color: "white" }}
            href="https://www.marxists.org/archive/marx/works/1894-c3/ch21.htm"
          >
            part of the profit paid
          </a>
          {space}to the owner is called interest, which is just another name, or
          special term, for a{space}
          <b>part of the profit given up</b>
          {space}by capital [surrendered-right to return ability] in the process
          of functioning to the owner of the capital, instead of putting it into
          its own pocket.
        </div>
        <h3>
          Karl Marx, the{space}
          <a href="https://hsm.stackexchange.com/questions/140/why-is-price-on-the-vertical-axis-and-quantity-on-the-horizontal-axis">
            macdaddy of supply and demand
          </a>
          <span style={{ fontSize: "12px" }}>
            :{space}
            <a href="https://www.quora.com/unanswered/Doesnt-a-natural-productivity-rate-require-properties-to-be-public">
              Doesn't a natural productivity rate require properties to be
              public
            </a>
            ?{space}
            <a href="https://www.quora.com/unanswered/Wasnt-surplus-value-the-precursor-to-consumer-and-producer-surplus">
              Wasn't surplus value the precursor to consumer and producer
              surplus
            </a>
            ? (artificially-exclusionary, or otherwise{space}
            <a href="https://www.reddit.com/r/realeconomics/comments/wmp0tw/what_are_the_downsides_of_setting_rent_caps_by/">
              substitutive
            </a>
            {space}with{space}
            <a href="https://truncatedproductiontax.quora.com/What-are-the-solutions-to-economic-crisis-according-to-Karl-Marxs-theory-of-communism-1">
              Compuslory
            </a>
            {space}superfluous{space}
            <a href="https://scopes.cc">machinery</a>, inelasticity).{space}
            Fraudulent hour and quality when sold to donee beneficiary
            (non-compete) or by money when sold to customer (out & out).
          </span>
        </h3>
        <h4
          style={{
            color: "white",
            backgroundColor: "rgb(165,75,205)",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          ...capitalistic mode of production in its historical connection and
          its inevitableness during a particular historical period, and
          therefore, also, to present its inevitable downfall; and to lay bare
          its essential character, which was still a secret. This was done by
          the discovery of{space}
          <i>surplus [producer and consumer]-value</i>.
        </h4>
        work harder for deflation{space}
        <a href="https://youtube.com/nickcarduccinj">
          substitutive supply complementary demand
        </a>
        <br />
        <br />
        <div
          style={{
            color: "white",
            transition: ".3s ease-in",
            width: "max-content",
            maxWidth: "calc(100% - 20px)",
            padding: "10px",
            border: "1px solid",
            backgroundColor: "darkslategrey"
          }}
        >
          <h4 style={{ margin: "4px 0px" }}>
            Free{space}
            <a
              style={{
                color: "white"
              }}
              href="https://commie.dev/taxes"
            >
              lawyers
            </a>
            {space}and{space}
            <a
              style={{
                color: "white"
              }}
              href="https://minimalviableduress.quora.com"
            >
              docs
            </a>
            , take the trash out of government all you have are{space}
            <a
              style={{
                color: "white"
              }}
              href="https://commie.dev/police"
            >
              cops
            </a>
            .{space}
            <a
              style={{
                color: "white"
              }}
              href="https://saverparty.xyz"
            >
              <span role="img" aria-label="chipmunk">
                🐿
              </span>
            </a>
            <br />
            Is QE to save the currency from defaulting on revenuedata.doi.gov
            anarchist, Ken? NBER Recession == less (1) shrinkflation, (2)
            employee benefits from essential institutions, and (3)
            non-deflationary employment.
          </h4>
          {/**Maybe the next mudpie will be a non-nuclear magnetic fusion reactor */}
          <h3>1/6 consequences (an)enigma</h3>
          Accounting (lawyers) are split on the issue of tax evasion. I say
          treat billable hours (and 1099-w2 essential institutions) the same.
          Professional-services like accountants and lawyers are sales tax free,
          but the courts impress the little words the little lawyers wrote down
          on little paper(s), to pay surrendered future demand.{space}
          <span style={{ color: "lightskyblue" }}>
            Regulatory scrutiny? Operations are reported for investors, public
            companies don’t have more stringent EULA rules. They just pay
            quarterly profits tax to be public.
          </span>
          {space}
          <span style={{ color: "lime" }}>
            I just smoke pot and tell them to not give me a gun, but{space}
            <a style={{ color: "lime" }} href="https://humanharvest.info">
              good advice
            </a>
            !{space}
            <span role="img" aria-label="stars">
              ✨
            </span>
          </span>
          <br />
          <br />
          <div
            style={{
              color: "white",
              transition: ".3s ease-in",
              width: "max-content",
              maxWidth: "calc(100% - 20px)",
              padding: "10px",
              border: "1px solid",
              backgroundColor: "tan"
            }}
          >
            Transformative Justice instead works with{space}
            <a href="https://theanarchistlibrary.org/library/pranav-jeevan-p-re-imagining-justice-from-punitive-to-transformative">
              consequences rather than punishment
            </a>
            . Consequences are always things that you have to think about within
            the context of the harm that occurs. Difference between consequences
            and punishment is that it doesn’t deprive the person of their basic
            needs for living like food, water, shelter and liberty. Consequences
            focusses on identifying the position of power that person holds and
            removing them from that so that they can’t repeat the horrible
            action they committed. It reminds people that they can no longer
            have the privilege of power if they abuse it.
          </div>
          The punitive law as with the right to own and malarkey (cash flow
          normalcy; Isn’t inflation exclusive of short-term employment in
          national accounting parts alone?) is to be objective, probably best
          encountered as separate charges and WITH dental records upon arrest.
          <br />
          <br />
          <div
            style={{
              color: "black",
              transition: ".3s ease-in",
              width: "max-content",
              maxWidth: "calc(100% - 20px)",
              padding: "10px",
              border: "1px solid",
              backgroundColor: "white"
            }}
          >
            I have been unwilling to leave out of sight the connection between
            our thesis - that Reason governs and has governed the World — and
            the question of the possibility of a Knowledge of God,
          </div>
          <br />
          Yeah well be patient until Allah judges alright but deduction also
          says polytheism is polyphyletic && kinetic expansion is instigated
          potential. So, I’m sold.
          <h4 style={{ margin: "4px 0px" }}>
            Inductive reasoning has (spirit energy confirms a null with a
            question asked). Deductive reasoning 600 years later be
          </h4>
          <h3 style={{ margin: "4px 0px" }}>
            Shouldn't the next mudpie always be a non-nuclear magnetic fusion
            reactor?
          </h3>
        </div>
        But the perfecting of machinery is making human labor superfluous
        <br />
        <br />
        Contractors are labor but for payment installments,{space}
        <a href="https://politics.stackexchange.com/questions/74413/how-is-to-lower-taxes-not-socialist">
          so no
        </a>
        .{space}
        <br />
        <br />
        Education economic stability weekend Family plantation{space}
        <a href="https://truncatedwholesaletax.com">
          corporation (spend it tax-free before the quarter)
        </a>
        .
        <br />
        <br />
        <a href="https://www.quora.com/unanswered/Why-would-business-owners-think-banning-credit-will-hurt-their-businesses-on-net">
          Stephen Moore
        </a>{" "}
        won't stop asking for why Liberal Democrats will not call in to defend
        Biden{space}
        <a href="https://www.quora.com/unanswered/Is-the-Joe-Biden-White-House-delusional-about-targeting-unconscionable-margins-without-a-percentage-nor-subsidiary-limitation">
          fracking more than ever
        </a>
        <br />
        <br />
        Embezzlement fiduciary trafficking for but fine of judges for successful
        appeals & login.gov{space}
        <a href="https://security.stackexchange.com/questions/263758/how-does-tor-work">
          convict intranet
        </a>
        <div>
          <a href="https://politics.stackexchange.com/questions/74727/what-was-adbusters-intent-with-occupy-wall-street-legally">
            adbusters
          </a>
          {space}is{space}
          <a href="https://www.reddit.com/r/occupywallstreet/comments/wlzr29/comment/ijxj389/">
            just maybe not justly "politcal"
          </a>
          <br />
          conservatives hate parts of empire vertical costs
          <br />
          communist proletariat dictatorship non-chattle mercantilism
          <br />
          surplus ability needs ends
          <br />
          <br />
          occupy is just political
          <br />
          <a href="https://open.spotify.com/track/5czZkLGepjburbkbEaCfm4">
            salty{space}
          </a>
          socialist squirrels
          <br />
          no exclusion by corporate subsidy nor yet vulgar socialism but <br />
          for actual injury (including{" "}
          <a href="https://law.stackexchange.com/questions/82673/what-kinds-of-injuries-are-covered-by-social-security?noredirect=1#comment180072_82673">
            sports
          </a>
          ) "dougen anti-marxism, broadenism" MF Varn
          <br />
          ban the governments
        </div>
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/jepe71hu8iuo8ro/Screen%20Shot%202022-04-02%20at%205.33.17%20PM.png?raw=1"
          }
          float={"left"}
          title="Trump propaganda"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        “Stagflation is recession and inflation,” inflation is consumer goods,
        recession is structural implausible use lease 5 condo store
        <h3>
          the{space}
          <a href="https://law.stackexchange.com/questions/82673/what-kinds-of-injuries-are-covered-by-social-security">
            need
          </a>
          {space}for{space}
          <a href="https://rolloverinsurance.quora.com/Why-is-a-bone-marrow-transplant-so-expensive-1">
            rollover insurance
          </a>
        </h3>
        “Meet needs in a timely manner, opinion network is outstanding.” -
        surrendered bid of another is non-compete contracts that are Consumer
        Fraud, at that
        <br />
        <br />
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/mn1ecgo6epfh06c/Screen%20Shot%202022-04-02%20at%205.23.15%20PM.png?raw=1"
          }
          float={"right"}
          title="Trump propaganda"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        Exports are going to cause inflation, actually the dollar will gain
        strength
        <br />
        <br />
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/olnis4fw859xb5f/Screen%20Shot%202022-04-02%20at%205.01.52%20PM.png?raw=1"
          }
          float={"left"}
          title="Trump propaganda"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        Working and saving money, investing in bonds and spending hours
        <h1>
          <a href="https://2024nj.com/nypd">public</a>
          {space}
          <a href="https://2024nj.com/disability">interventions</a>
        </h1>
        <h4>
          "​'We Sell Drugs: The Alchemy Of U.S. Empire' By Suzanna{space}
          <a href="https://teapharmacy.party/drugs">Reiss</a>" - Gary S. Seth
        </h4>
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/i0tzmrvshsuwzrz/Screen%20Shot%202022-04-02%20at%202.59.56%20PM.png?raw=1"
          }
          float={"right"}
          title="Kilmany Dewhart and Dr. McCormick - public interventions"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        Psychiatric overdose of{space}
        <a href="https://2024nj.com/bachelors">fentanyl</a>. All-cause{space}
        <a href="https://youtu.be/Weqb9KrQ-TU?t=21">(?)</a>
        {space}
        hysterics (torts and claims).
        <br />
        <br />
        Stop conflating homelessness and voluntary or involuntary drugs. just
        house them, don't chemically castrate them with Risperidone.
        <br />
        Timeclock unlock sprints, not property just a spot in price if margins
        are non-negative... ​5 condo store.
        <br />
        ​Everyone here for pharma castrating pedo.
        <br />
        <br />
        We need to{space}
        <a href="https://www.quora.com/unanswered/Is-individual-use-in-excess-of-exchange-value-not-when-there-is-consumer-surplus-by-price-control-or-inelastic-labor-for-other-markets">
          starve healthcare, housing and education
        </a>
        , [of] the basis for negotiation; taxes for invoices by nam-your-price
        false bid pool?
        <h4>People hate hypocrisy, 1/hour-GDP/p</h4>
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/el9a21mxfrho4u9/Screen%20Shot%202022-04-02%20at%2012.58.35%20PM.png?raw=1"
          }
          float={"left"}
          title={
            "Tax for invoices or just say surrendered freedom of labor-borne contractor liable in Consumer Fraud too." +
            "Rollover is rational, outright and starve doctors, the foundations of negotiating" +
            " - https://youtu.be/vqLaVdBS31g"
          }
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        "I never understood the lefts'{space}
        <a href="https://fred.stlouisfed.org/graph/?g=NO9n">
          argument against waste
        </a>
        water for prissy refining shipments dilution & natural gas
        fracking/binding Fracking fluid (or frac fluid) is a chemical mixture
        used in drilling operations to increase the quantity of hydrocarbons
        that can be{space}
        <a href="https://magnate.company">extracted</a>."
        <br />
        <div
          style={{
            color: "white",
            backgroundColor: "darkviolet",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          I don't care about the profits, I care about 1/hour-GDP/p economic
          welfare; fuck the{space}
          <span style={{ backgroundColor: "black", color: "white" }}>
            pensions, corporate and treasury loose inventory, pay, but not
            amortize{space}
            <a
              href="https://fred.stlouisfed.org/graph/?g=NLre"
              style={{ color: "white" }}
            >
              outlays to shares and dollar owners
            </a>
            ?
          </span>
        </div>
        <br />
        "They are Educated Ukrainians and they should work for corporates, we
        need to get more people working for cash flow instead of inventory."
        <br />
        <br />
        Everyone,{space}
        <a href="https://fred.stlouisfed.org/graph/?g=NO8z">move back home</a>!
        :D
        <br />
        <br />
        "'Deportation' is not a word Republicans should use, because we can get
        them on pocketbook issues." - Stephen Moore, accounts expendable
        <div
          style={{
            color: "white",
            backgroundColor: "black",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          Homes trail rents by 12 months
          <br />
          Wages and rents are sticky, in terms of cpi, out of pocket, I doubt
          it, pce on the other hand, is growth, employer benefit contributions
          to standardized guaranteed name your loss guap. (
          <a
            href="https://fred.stlouisfed.org/graph/?g=NNUB"
            style={{ color: "white" }}
          >
            science-rents-non-durable cash advances
          </a>
          )
          <br />
          Nancy Tengler
        </div>
        <h4>
          Standardized guarantee schemes taxed and garnished for invoices of
          government/aged owned enterprises; debenture or debit vault share
          security depositary receipt by transaction fee{space}
          <a href="https://vaults.biz/sdr">stooding up</a>?
        </h4>
        "The treatment, no one gets that treatment," by Stepfather says who
        loses money since{space}
        <span
          style={{
            color: "white",
            backgroundColor: "black"
          }}
        >
          inception of his charity-work design-building homes (Consumer Fraud
          Act, estimates as{space}
          <a href="https://qr.ae/pvKyV7" style={{ color: "white" }}>
            options
          </a>
          )
        </span>
        for rich people at a loss since 2003.
        <br />"<a href="https://saverparty.xyz/jesus">Jesus</a>
        {space}died for you," as my mom makes me a dish of chicken and avocado
        is taking my disability as payee for 35.4% slander but actually one of
        {space}
        <a href="https://2024nj.com/disability">16% injured and</a>
        {space}poisoned, ignored, citing 'messy hair' racism. I had just
        completed{space}
        <a href="https://fred.stlouisfed.org/graph/?g=NNGB">
          organizing the economy
        </a>
        {space}after organizing their accounts then studying East Asian Studies
        and Economics, and then Politics, at Johns Hopkins University and Islam,
        Politics and Computer Science at Monmouth University (begrudgement be
        upon Iblis).
        <br />
        <br />
        I couldn't believe people would do this intentionally to eachother, as i
        would receive a D for saying you cannot get interest from principal in
        my Financial Markets and Institution course, and how idiotic GDP =
        E+S+G+nominalTrade+P is (can't find source but GDP/p USED to be taught)
        <br />
        <br />"
        <a href="https://qr.ae/pvKyv6">
          They still slaughter cows in Iran for sin sacrifice
        </a>
        ." I say. "You fucking nut. I’m not making that trade. It’s my money."
        <br />
        <br />I have a Microsoft in my name, you have a{space}
        <span
          style={{
            color: "white",
            backgroundColor: "black"
          }}
        >
          balance sheet to amortize to less than zero, concurrentable for
          checking
        </span>
        <br />
        <br />“<a href="https://qr.ae/pvKy9Z">Debt</a>
        {space}makes for no{space}
        <span style={{ color: "forestgreen" }}>growth</span>.”
        <br />
        <br />
        “It hurts moving up and down,” “I bet.”
        <br />
        <br />
        Government needs to intervene for income equality and{space}
        <span style={{ color: "forestgreen" }}>government structures</span>
        <br />
        “Circumcision is a religious right, but abortion is a matter of life and
        death.” Guarantee scheme free rider mutable is always 1y/-1x elastic for
        1/hour-GDP/p
        <div
          style={{
            color: "white",
            backgroundColor: "forestgreen",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          Freedom opportunity and entrepreneurship, doesn’t want to saddle
          ranchers and small business (average age) $4t in time deposits second
          ten years, work requirement, stop prescriptions and FDA+USPTO for
          naming, and open source. Welfare reform for trust breaking hypocrisy.
          subsidies have their own compounding effect in way of spending,
          program
        </div>
        <br />
        <span
          style={{
            color: "white",
            backgroundColor: "black"
          }}
        >
          Debenture corporate and treasury, loose-inventory
        </span>
        <br />
        <br />
        Support by surrendered freedom to bid of labor-borne, I’m going to
        reverse all the debt, your bills are donee beneficiary collateral or
        cash advance transaction non-durable chargeable
        <div
          style={{
            color: "white",
            backgroundColor: "firebrick",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          {/**atticka shubo, matt eaken */}
          “The rouble is jacking up interest rates to prop up the currency.” -
          CNN Rig-rates to China India and EU ex UK. Can’t force OPEC to add
          supply, then what is inventory? Selling outright?
        </div>
        <a href="https://2024nj.com/plandemic">covid</a>
        {space}calimny assumption, CT scan disability for medicate/
        <a href="https://qr.ae/pvKyv6">castrate</a>
        {space}
        homeless - hysterical name your price torts for closed source
        unilaterally known hazard vig instead of NAMING
        <div
          style={{
            backgroundColor: "cornflowerblue",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h4>**Bo Snerdley clicks**</h4>
          Checking tripled, and debenture already that isn't stood up by
          transaction fees, has{space}
          <span
            style={{
              color: "white",
              backgroundColor: "black"
            }}
          >
            loose-inventory to sell, personal-income default
          </span>
          . $2t-6t $1t households, $1t corporates, and $2t non-profits, which
          how can you be if you have checking or time deposits in account.
          commie.dev that's a lotta gavagoul
        </div>
        <br />
        <a href="https://qr.ae/pvKt09">
          The top 1% have $1t, 50-99% have $1t, bottom $.2t
        </a>
        <br />
        By people there is{space}
        <a href="https://fred.stlouisfed.org/graph/?g=NNzv">$2.2t</a>
        {space}but by household there is $4t
        <br />
        <span style={{ color: "white", backgroundColor: "black" }}>
          Corporates need to outlay their profits
        </span>
        , they have $2t, $4t heads of household
        <br />
        debenture of treasury that can sell inventory then pay who they want
        then default
        <br />
        Never outright for labor costs by hours and most measured by
        1/hour-GDP/p that would make for a nominal positive but{space}
        <a href="https://qr.ae/pvKyC4">actual negative</a>, Savings
        notwithstanding
        <br />
        <br />
        Cdc significance by n=2019-20 sample size is meaningless gave cover for
        trump and Biden to bailout $4t of $30t mortgages to make checking, which
        used to be fungible for $2t currency, that is
        <br />
        Oh you don’t have to pay for anything, but{space}
        <a href="https://fred.stlouisfed.org/graph/?g=NNfM">
          Trump on his way out allowed $4t checking for mortgages
        </a>
        <br />
        <span
          style={{
            color: "white",
            backgroundColor: "black"
          }}
        >
          Corporates need to outlay their profits, then (cash/debt)*income, then
          max-royalty 1/12 vertical-industry-type
        </span>
        , they have $2t, $4t heads of household
        <br />
        $2t municipalities
        <br />
        Self $.5t
        <br />
        <br />
        inflation going up, growth going down means{space}
        <a href="https://qr.ae/pvyL52">standardized guarantee schemes</a>.
        <br />
        save the animals dismantle FDA/USPTO/NIH
        <br />
        30-50% landlord didn't allow pets, they had too many animals, and they
        couldn't afford the cost of food and veterinary care The rest are
        puppymills, and hardly any stray born.
        <br />
        DON'T medicinally castrate pedo! Don't medicate the homeless! Everyone
        {space}
        <a href="https://teapharmacy.party/drugs">concentrate</a>!
        <br />
        <br />
        "The world depends on{space}
        <a href="https://saverparty.xyz/nato">NATO</a>"<br />
        <br />
        Realistic communism is{space}
        <a href="https://qr.ae/pvyLop">
          marxism that prevents lessing inventory
        </a>
        , following engels' outright debentures for sell before default
        <br />
        Esther and Phil: "Guaranteeing" a property by an estimate is not help,
        only voluntary trade of inventory and hours helps...
        <br />
        Put america first doesn't mean to lease science, ric grenell you
        outright, non-concurrentable retard.
        <br />
        <br />
        Nick Carducci - BA in Political Science & Economics, Johns Hopkins
        University (Graduated 2015)
        <br />
        How do markets lead to improved efficiency?
        <br />
        The division of labor and propensities of indifference by skew of
        markets produce an average price that negotiates by hours and inventory,
        for revenue and sales.
        <br />
        <br />
        Poverty threshold is not enough income until thrice expenses with
        employer benefit, standardized guarantee schemes, owner-rents and
        mortgages, imputed, if you don’t have them.
        <br />
        <br />
        We need currency inventory by transaction fees, truncated.
        Bankingisnot.biz.
        <h4>
          on hold: "no liberals called in and defend the Biden energy policy."
        </h4>
        Inventory ut nm wy nwp12 royalty per treasury inventory, vote saver
        truncated production tax or transaction fee inventory currency Saver, no
        standardized guarantee scheme general fund self dealing government bond
        laundering gentrification, instead of leases to treasury, inventory as
        UT NM WY royalty regressive flat flat or truncated production tax for
        free rider immutable sewage gravity toilets police and lawsuits.
        consumers should not lead but hold producers to be subservient to them -
        collateral by 1/12 NAICS and currency & local platform for royalty% and
        drilling,
        <br />
        <br />
        $500k/life false/surrendered labor-borne-demand bid policy necessarily
        costs more in{space}
        <a href="https://occupywallst.quora.com">hours and income over home</a>,
        than it takes in, and incentivizes death.
        <h4>Medicine they need, involuntary commitment</h4>
        "They take the medical goods and put them in their hands, using
        inventory of currency holders. Medicine they need, is why we need the
        ascertainable costs of employer contributions, PCE-CPI" Real GDP is
        inflation of expenses for growth in employer contribution costs.
        <br />
        <br />
        Growth jobs and revenue is expenses and artifact of technological
        deprecation
        <h2
          style={{
            marginRight: "20px",
            float: "right"
          }}
        >
          <a href="https://saltbank.org">world peace</a>
        </h2>
        <br />
        <br />
        Slash is cut muscle as well as fat, scar is just extra skin
        <br />
        <br />
        Trade is World Intellectual Property Organization can only be a
        perpetual motion machine without operational cost of material nor
        variable-part labors' leases, revenues and sales intake. "
        <a href="https://2024nj.com/ssa">Social security</a>
        {space}puts money in an pays for some of the name your price tooled
        things, PCE employer benefits over CPI out-of-pockets." Prosperity is
        income-expenses (revenue-espenses) currency account balance lest
        uncollateralized or surrendered freedoms, instead of 1/12 vertical-lines
        of sales and revenues. Republican plan to reform government and cut
        spending. That's not a flat tax, but{space}
        <span style={{ color: "purple" }}>
          a regressive non-trust-breaking-hypocrisy, tax on Grocers
        </span>
        {space}
        <span role="img" aria-label="umbrella old-euro squirrel bottom-left">
          ☔️👨🏻‍🦳🐿↙️
        </span>
        . Implausible use leases to condos-/storefronts-outright (no imputations
        of SGS, mortgage nor owner-rents, please!)
        <br />
        <br />
        "China has a nothingheimer banking system." wreckless hysteria or
        aggressive? all episodes are rationale!{space}
        <span role="img" aria-label="target">
          🎯
        </span>
        non-compete,{space}
        <span role="img" aria-label="cowguy">
          🤠
        </span>
        free-science open ingredient and{space}
        <span role="img" aria-label="free">
          🆓
        </span>
        naming licensure{" "}
        {/**not even the plus up, trump team and biden team (justices?, agencies) */}
        <br />
        <br />
        Nick Carducci - Econometrist at{space}
        <a href="https://vaults.biz/party">Occupy Wall St</a>
        {space}(2008–present)
        <br />
        How would competition policy undo the wrongs?
        <br />
        Only insofar as labor equates demand does the bid-met-ask become actual.
        The micro-theory of indifferent Supply and Demand, for choice
        market-skew, can be enumerated by price 1y/-1x 1/hour-GDP/population for
        free rider
        <br />
        immutable (debt-spending) credit as income, or mutable tax receipts.
        <br />
        <br />
        relenting money coupon doesn't take money out on net, they actually
        raise rates by watching capacity of{space}
        <a href="https://adailyimpeachment.quora.com">$TBT</a>. Boomers dying on
        time caused non-currency checking (50m/yr+ expected)
        <br />
        <br />
        balanced budget would leave real GDP (GDP - GDP*inflation% of FCSU
        benefits, owner-rents and mortgage imputed, expenses) at structures
        <br />
        bretton woods gold exchange,{space}
        <span style={{ color: "purple" }}>
          transaction fee inventory currency instead
        </span>{" "}
        end success by laborless-demand of rental-income
        <br />
        <br />
        Nick Carducci - policy-drafting software-developer & microeconomist14m
        <br />
        How has the increase of pricing for gasoline affected you personally?
        <br />
        I work from home, but the sales and revenue I bind my inventory and
        hours to is dependent on material and labor getting near me. Good thing
        for open borders, zero tariffs and the open source licensure for the
        realization of the division of labor theory for technological
        advancements, measurable in bunting 1/hour-GDP/p (economic welfare
        a.k.a. efficiency)!
        <br />
        <div
          style={{
            backgroundColor: "grey",
            color: "white",
            padding: "10px",
            margin: "10px",
            width: "calc(100% - 40px)",
            border: "1px solid"
          }}
        >
          Nick Carducci (Originalist at Communism, 2015–present)'s answer to Did
          Karl Marx support open borders? in
          {space}
          <a href="https://marx.quora.com/Did-Karl-Marx-support-open-borders-1">
            Marx
          </a>
          <br />
          Yes, but the problem with immigration are the capitalists that hide
          margin growth in technological advancement, foreclosure-loitering, and
          long-term layoffs therein.
          <br />
          <br />
          The development of the industrial proletariat is, in general,
          conditioned by the development of the industrial bourgeoisie. Only
          under its rule does the proletariat gain that extensive national
          existence which can raise its revolution to a national one, and only
          thus does the proletariat itself create the modern means of
          production, which become just so many means of its revolutionary
          emancipation. Only bourgeois rule tears up the material roots of
          feudal society and levels the ground on which alone a proletarian
          revolution is possible.
          <br />
          <br />
          French industry is more developed and the French bourgeoisie more
          revolutionary than that of the rest of the Continent. But was not the
          February Revolution aimed directly against the finance aristocracy?
          This fact proved that the industrial bourgeoisie did not rule France.
          The industrial bourgeoisie can rule only where modern industry shapes
          all property relations to suit itself, and industry can win this power
          only where it has conquered the world market, for national bounds are
          inadequate for its development. But French industry, to a great
          extent, maintains its command even of the national market only through
          a more or less modified system of prohibitive duties. While,
          therefore, the French proletariat, at the moment of a revolution,
          possesses in Paris actual power and influence which spur it on to a
          drive beyond its means, in the rest of France it is crowded into
          separate, scattered industrial centers, almost lost in the superior
          number of peasants and petty bourgeois. The struggle against capital
          in its developed, modern form — in its decisive aspect, the struggle
          of the industrial wage worker against the industrial bourgeois — is in
          France a partial phenomenon, which after the February days could so
          much the less supply the national content of the revolution, since the
          struggle against capital's secondary modes of exploitation, that of
          the peasant against usury and mortgages or of the petty bourgeois
          against the wholesale dealer, banker, and manufacturer — in a word,
          against bankruptcy — was still hidden in the general uprising against
          the finance aristocracy.
          <hr />
          Are foreclosures restitutive of loitering over third party donee
          beneficiaries' future demands?
          <br />
          Nothing is more understandable, then, than that the Paris proletariat
          sought to secure the advancement of its own interests side by side
          with those of the bourgeoisie, instead of enforcing them as the
          revolutionary interests of society itself, that it let the red flag be
          lowered to the tricolor. The French workers could not take a step
          forward, could not touch a hair of the bourgeois order, until the
          course of the revolution had aroused the mass of the nation, peasants
          and petite bourgeois, standing between the proletariat and the
          bourgeoisie, against this order, against the rule of capital, and had
          forced it to attach itself to the proletarians as its protagonists.
          The workers could buy this victory only through the tremendous defeat
          in June.
          <br />
          Isn’t (hidden) technological advancement how capitalists profit? •
          Isn’t non-deflationary unemployment a non-stagflationary recession?
          <hr />
          If, as Marx says, capitalism will eventually lead to its own downfall,
          why is there still a need for socialism?
          <br />
          Labor seems to run out, even when prices remain steady, yet margins
          expand by technological advancement. Non-deflationary growth is to be
          laid off in the long term. Doesn’t QE prevent 1/5 of the U.S. being
          delivered to bond holders?
          <hr />
          Why did Marx predict the law of falling profits in the long run?
          <br />
          By reading Adam Smith, Marx formulated sociology as a state of being.
          <hr />
          Living labor is expanded productivity, expenses over hour, as it
          happens. Consumers are price takers but for budget constraints and
          ordinal propensities make ordinary profits, but for Social Capital,
          exhibitionary of expiry rent and non-compete secrets. Verily, as more
          capital is wasted on the capitalist does Ricardian’s crowding powers
          bequeath a longer working day of labor utilization.
          <br />
          Tony Horne: 'The collapse of the entire world economy and society
          without replacing would be the biggest ever disaster to hit the human
          race. Marx actually says that in the Communist Manifesto. He calls it
          “the common ruin of the contending classes”. Now we can see what forms
          that might take - global warming, world-wide diseases, nuclear war.'
          <br />
          Isn’t (hidden) technological advancement how capitalists profit? -
          Isn’t non-deflationary unemployment a non-stagflationary recession?
          <br />
          Is there any empirical evidence for Marxist predictions that the rates
          of profit tend to fall? Yes{space}
          <a href="https://fred.stlouisfed.org/graph/?g=UiNu">
            in the cost of living labor, or productivity, we can even see the
            effect in inflation and hours worked, to see velocity actually from
            these endogenous error factors…
          </a>
          {space}Isn’t yesterday’s inflation this week’s growth other than
          dynamically-renaming the charted account?
          <br />
          <div
            style={{
              backgroundColor: "darkslategrey",
              color: "grey",
              padding: "10px",
              margin: "10px",
              width: "calc(100% - 40px)",
              border: "1px solid"
            }}
          >
            How does Karl Marx argue that capitalists are as much victims of the
            capitalist relations of production as are the workers?
            <br />
            THE BOURGEOIS CABINET PAR EXCELLENCE WAS SO UNLUCKY THAT ITS MOST
            RADICAL MEASURE HAD TO BE FRUSTRATED BY THE RADICAL MEMBERS OF THE
            ASSEMBLY OF CONCILIATORS. It was so barren that its whole crusade
            against feudalism merely resulted in a tax increase, which was
            equally odious to all classes, and its entire financial acumen
            brought forth a forced loan: two measures, which ultimately only
            provided subsidies for the campaign of the counter-revolution
            against the bourgeoisie. But the feudal aristocrats were convinced
            of the "nefarious" intentions of the bourgeois cabinet. Thus even
            the financial struggle of the Prussian bourgeoisie against feudalism
            merely proved that owing to its unpopularity and impotence it was
            softly able to collect money against itself and-gentlemen, business
            is business!
          </div>
          ‘Wherever a great deal can be made by the use of money, a great deal
          will be given for the use of it; wherever little can be made by it,
          little will be given.’ (Adam Smith, WON, Vol. I, p. 79)
          <br />
          ‘The rent of land ... is naturally a monopoly price. It is not at all
          proportioned to what the landlord may have laid out upon the
          improvement of the land, or to what he can afford to take; but to what
          the farmer can afford to give.’ (Adam Smith, WON, p. 131.)
          <br />
          That the workers desire to establish the conditions for co-operative
          production on a social scale, and first of all on a national scale, in
          their own country, only means that they are working to revolutionize
          the present conditions of production, and it has nothing in common
          with the foundation of co-operative societies with state aid. But as
          far as the present co-operative societies are concerned, they are of
          value only insofar as they are the independent creations of the
          workers and not proteges either of the governments or of the
          bourgeois.
          <br />
          The contests about wages in Manufacture, pre-suppose manufacture, and
          are in no sense directed against its existence. The opposition against
          the establishment of new manufactures, proceeds from the guilds and
          privileged towns, not from the workpeople. …Its last words are:
          corporate guilds for manufacture; patriarchal relations in
          agriculture. …The money capital formed by means of usury and commerce
          was prevented from turning into industrial capital, in the country by
          the feudal constitution, in the towns by the guild organisation.
          <br />
          ‘For one thing, by keeping secrets in trade if the market is at a
          great distance from those who supply it, that is, by concealing a
          price change, its rise above the natural level. This concealment has
          the effect that other capitalists do not follow him in investing their
          capital in this branch of industry or trade. Then again by keeping
          secrets in manufacture, which enable the capitalist to reduce the
          costs of production and supply his commodity at the same or even at
          lower prices than his competitors while obtaining a higher profit.
          (Deceiving by keeping secrets is not immoral? Dealings on the Stock
          Exchange.) Furthermore, where production is restricted to a particular
          locality (as in the case of a rare wine), and where the effective
          demand can never he satisfied. Finally, through monopolies exercised
          by individuals or companies. Monopoly price is the highest possible.’
          (Adam Smith, WON, Vol. I, pp. 53-54)
          <br />
          ‘The more a commodity comes to be manufactured — the more it becomes
          an object of manufacture — the greater becomes that part of the price
          which resolves itself into wages and profit in proportion to that
          which resolves itself into rent. In the progress of the manufacture of
          a commodity, not only the number of profits increases, but every
          subsequent profit is greater than the foregoing; because the capital
          from which it is derived must always be greater. The capital which
          employs the weavers, for example, must always be greater than that
          which employs the spinners; because it not only replaces that capital
          with its profits, but pays, besides, the wages of weavers; and the
          profits must always bear some proportion to the capital.’ (WON, Vol.
          I, p. 45)
          <hr />
          In the national struggles of the proletarians of the different
          countries, they point out and bring to the front the common interests
          of the entire proletariat, independently of all nationality.
          <hr />
          Do you charge us with wanting to stop the exploitation of children by
          their parents? To this crime we plead guilty. But, you say, we destroy
          the most hallowed of relations, when we replace home education by
          social. Free education for all children in public schools. Abolition
          of children’s factory labour in its present form. Combination of
          education with industrial production, &c, &c.
          <hr />I think every child above the age of nine ought to be employed
          at productive labour a portion of its time, but the way in which they
          are made to work under existing circumstances is abominable.
        </div>
        <br />
        End leasing/rig-rates, for royalties, and allow NWP12 wastewater to be
        <br />
        <br /> relented upon by locals. We have the technology!
        <h4>
          Whistleblowers on jury: the price of money as the way to control the
          economy is absurd. "lend short to make sure the economy doesn't fall
          apart, hello????" Steve Forbes to Larry Kudlow, we would have had
          50-60% bigger by people, expenses and hours per time period if we kept
          historic growth rates of emergencies."
        </h4>
        Nick Carducci - Legal Writer & Software Engineer at Vaults.biz
        (2020–present)
        <br />
        I’m being sued for 1M dollars. 2 years ago I changed lanes without
        checking which resulted in a driver breaking his leg. Geico will only
        pay $25k. I’m 22, in school, no assets, and do Postmates for work. What
        do I do?
        <br />
        Torts cannot put you into debt, at least. These Standardized Guarantee
        Schemes by Geico (forced, to boot) is surrendered bids of
        labor-borne-demand, for expiring premiums, just the same.
        <br />
        <br />
        Rational maturity: 77WABC: "Lying to the public of danger is
        presidential and protective." Success and achievement in rental-income,
        slavery by proxy and choring for corporate tax equals self and
        individual, why?
        <br />
        <br />
        I’m spending my life weening cops off bonds and closed source
        licensures, nobody works for laborless-demand under my rule. Taxes free
        rider mutable is useless, too.
        <br />
        <br />
        50m/yr+ expected deaths worldwide, Dr. Peter Michalos calls pandemic a
        death sentance and is the reason for making checking non-fungible for
        currency.
        <h4>
          "War Machine (n.): kill deserters, destroy buildings, growth of real
          GDP, average of out-of-pocket and standardized guarantee scheme
          premium and impute owner rent mortgage government or structures"
        </h4>
        name your price elastic (
        <a href="https://theharrispoll.com/only-nine-percent-of-u-s-consumers-believe-pharmaceutical-and-biotechnology-companies-put-patients-over-profits-while-only-16-percent-believe-health-insurance-companies-do-according-to-a-harris-pol/">
          73% of 50+ are pro-AARP
        </a>
        )
        <h4>
          if there were no false/surrendered bid pools, implausible use leases,
          Putin wouldn't destroy his own peoples' apartment buildings.
        </h4>
        "Taxes Death and your car breaking down,{space}
        <a href="https://qz.com/1033336/survey-americans-hate-the-health-care-industry-even-more-than-wall-street/">
          is certain
        </a>
        . Protect with price-lock guarantee." Protecting your car with Car
        Shield guaranteed schemes are not trade, artifact of and there by is,
        surrendered freedoms to bid, by labor-borne-demand (metric:
        1/hour-GDP/p). flat GDP/p amongst 3%/yr+ population growth proves that
        is not true.
        <br />
        <br />
        Ultimately inflation is the debasement in the value of the dollar, and
        there is a lot of ways to measure that (wouldn’t it be expenditures
        growth, or per hour, instead of income?)
        <br />
        “Dollar declines because we aren’t paying attention.” Low inflation by
        relenting on interest targeting of natural market is not going to end
        borrowing outright.
        <br />
        GDP/p is inflation, all cause, as collateral in m2 basing, stands
        <br />
        <br />
        The Horseshoe Theory has been posited as the idea that the despondency
        amongst people and their stances on issue-vectors is etymology, or
        miscommunication. For instance, the No-Fly Zone and Pay Debt Off are
        scopes of requirements that just are estimates in naming and material +
        variable-part labor, not low-level, actual, modular, scripts.
        <br />
        <br />
        <Establishments
          lastWidth={Math.min(600, this.props.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        I have invented an alternative to counterfeit in contract, by
        collateral, so to speak, for ascertainable-torts, by 1/12 NAICS industry
        lines of business (name doesn’t matter, yet not payday general income
        for surrendered bid of third part donee labor-borne, currency, demand,
        nor compound, of the same). Otherwise, loitering on surrendered bid for
        implausibly deniably force majeure, and amortizable correction
        (concurrentable, not good-will last traded neighborhood nor
        brand-inventory value, firesale), is malfeasantly permissible, for any
        contractor dream, no surrender of others’ freedom, pointless.
        <h4>
          <a href="https://qr.ae/pGLlsf">minimizing</a>
          {space}the{space}
          <a href="https://micro-theory.com">
            Supply and Demand by Labor despondency
          </a>
        </h4>
        <h3>I WANNA SEE SOME FUCKING ANUS</h3>
        Are they really transporting the fentanyl laced heroine and marijuana in
        their asses or{space}
        <a href="https://teapharmacy.party/drugs">unchecked parcels</a>? They
        are a whole less percentage less criminal, closed source prescription
        and animal testing trust breaking hypocrisy state vig with standing. The
        pandemic caused checking to no longer be fungible for currency
        (commie.dev) which itself is fungible for treasury inventory, we could
        have Hyrnvia share-split; occupy and progressives is global ubi or bust,
        and I don't want to tax the rich for work more for higher prices alone,
        a truncated production tax 2024nj.com/carducci 3% under $2k could pay
        for free rider immutable things like sewage police and lawsuits and
        leases to treasury for citizenship instead of royalty and drilling
        signoff platform for dollar owners is self-deprecation, as is preventing
        the division of labor and laborless-demand. How does Brian Kilmeade know
        crack and hookers are a not a{space}
        <a href="https://comlib.quora.com/Can-you-give-some-examples-of-Karl-Marxs-ideas-in-The-Communist-Manifesto-1">
          good combination
        </a>
        ? Because Hunter Biden admitted kids aren’t safe around him?
        <br />
        <br />
        Vulgar socialism (and from it in turn a section of the democrats) has
        taken over distribution as production[, not productive-ward]. After the
        real relation has long been made clear, why retrogress again?
        <br />
        <br />
        Taxes to help poor (Progressives vs Occupy: global ubi or bust)
        households (and small business vs self and individual renters, mortgages
        imputed in thrice a third percentile) pay for higher energy prices, just
        cut the leases and margins thereafter…. Professor of Political Economy
        University of Sheffield Michael Jacobs, “The rich have no friends so who
        cares?” I am a competing bid and I care, I don’t want to have to{space}
        <a href="https://qr.ae/pGLl8V">work more for price alone</a>
        <br />
        <div
          style={{
            color: "white",
            backgroundColor: "darkviolet",
            borderRadius: "10px",
            margin: "10px",
            padding: "10px"
          }}
        >
          Communism deprives no man of the power to appropriate the products of
          society; all that it does is to{space}
          <a
            href="https://qr.ae/pGLlHZ"
            style={{
              color: "white"
            }}
          >
            deprive him of the power to subjugate the labour of others by means
            of such appropriations
          </a>
          .
        </div>
        <br />
        Debt is duress{space}&bull;{space}
        The bourgeoisie will never sell anything outright
        <Revenues
          lastWidth={Math.min(600, this.props.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        <h4>
          Trading without collateralization nor{space}
          <a href="https://qr.ae/pGLl8V">standardized guarantee schemes</a>
        </h4>
        "Getting a job he doesn't deserve." Oh yeah, thanks
        <br />
        Nick Carducci - BA in Political Science & Economics, Johns Hopkins
        University (Graduated 2015)
        <br />
        "What would you do if you knew the economy was about to crash?"
        <br />
        Originally Answered: "What would you do if the economy crashed?"
        <br />
        (For the new question: I’d sell and work for my own copy, instead of
        currency fungible for state-lands, if I knew concurrent-prices would
        crash, and then:) I’d buy things.
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
        Jimmy Kimmel: "Do you wish you had Apple Care standardized guarantee
        self-dealing general fund name your price employer contributions
        PCE(BEA)-CPI(BLS) margin(profits+savings)?"
        <br />
        <br />
        division of labor, hairdos cannot be discriminate and I do not get
        disability for that but only psychiatry.{space}
        <a href="https://2024nj.com/disability">scapegoating delinquence</a>. I
        am going to kill Greg Murphy, "we have plenty of protections in the
        constitution," WELL IT ISN'T WORKING, WHISTLEBLOWERS OFF JURY DUTY?
        <br />
        <br />
        The Republicans and Democrats just want us to work more, they tax and
        collude
        <br />
        <br />
        ratified by consensus and reason yet appeal fines and variable-part,
        ward of free rider mutable stewardship and immutable truncated
        production tax as per the appropriate services, without oxymoronic equal
        bond-tax nor flat tax to treasury closed-source-vig nor leases of
        dollar-sign off (drilling permits of, royalty subservient to customers,
        not treasury rig-rates, and ) and local-community EPA NWP12 wastewater
        self-ascertainable damages
        <br />
        denomination of “spm” poverty skew, income matching 3rd, rather than
        original “official” thrice expenses;{space}
        <a href="https://micro-theory.com">1/hour-GDP/p</a>
        {space}-{space}
        <a href="https://adailyimpeachment.quora.com">home/(income/hour)</a>
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
              : "https://www.dropbox.com/s/410s2o75pnght03/marx.jpeg?raw=1"
          }
          float={"right"}
          title="karl marx"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
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
        Nick Carducci - Some credits in International Law (college major) &
        Computer Science, Monmouth University (Graduated 2014)
        <br />
        "How is health care a human right?"
        <br />
        Buying settled trade and free schematics without operational (hourly,
        past labor-demand freedoms notwithstanding), costs, like animal testing
        (FDA) nor wastewater ascertainable damages (EPA NWP12, Saver Party) by
        concurrentable, non good will last trade, without accrual but rollover
        is Tranquil and voluntary trade for reason but for 1/hour-GDP/p, and
        free science of non-exclusive answer endeavor copyrights (USPTO).
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
          lastWidth={Math.min(600, this.props.lastWidth)}
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
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
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
        <br />
        <br />
        Y’all for the general fund are too far too the right
        <br />
        <br />
        Home title protection or debt, either way, surrendered general fund and
        guarantee scheme
        <br />
        <br />
        jobs are why there is technological relenting, admitted by the right,
        poverty is lower for income, not hours that expenses lessen when
        laborless-demand expenses-income margins
        <br />
        <br />
        “Planned parenthood can fund themselves,” Lauren Bobart, 600k/yr,
        mandatory testing. Y’all for the general fund are too far too the right.
        Loren bobart wants to fund Ukraine, why? They are forcing people to
        fight especially when there are more people than jobs?
        <br />
        <br />
        They have no skills we need, coming here as total wards of the state,
        only because you gentrify equity
        <br />
        <br />
        Basing GDP/p by collateralization, false bid pools and implausible use
        leases
        <br />
        <br />
        “Democrats want to import poverty,” more people breeds competition and
        so poverty as rated per population is the same, yet hours per time
        period is less with working age labor. Why are they wards of the state?
        Most wards of the state are the elderly, whom scapegoat delinquent
        tax-payer-vacations and general fund self dealings
        <br />
        <br />
        "Too burdensome blood tests?" Mr. Tonko asks the{space}
        <a href="https://2024nj.com/phlebotomists">Phlebotomists</a>
        .<br />
        <br />"
        <a href="https://qr.ae/pGLVpQ">
          Philanthropic funding to really support individuals, as well, when we
          raise the average price
        </a>
        , or scapegoat target margins of a market where{space}
        <a href="https://qr.ae/pGLVNS">supply already doesn't equate demand</a>
        {/**    Compared to standardized guarantee schemes without price controls, 
        it certainly saves money, but only because supply already doesn’t equate labor-demand. 
        Better to ban invoices for surrendered freedom and foreseeable force majeure ascertainable
        standing and tortious grounds */}
        , as a sorted propensity of indifference and labor-borne-budget
        contraints, for the 1/hour-GDP/p plane of Supply and Demand, by
        Microeconomic gaming."
        <br />
        <Cable
          style={{ width: "200px" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/sqf6c2uuuf4kjzg/Screen%20Shot%202022-03-17%20at%201.39.57%20PM.png?raw=1"
          }
          float={"left"}
          title="The Future of Medicine: Legislation to Encourage Innovation and Improve Oversight (Energy and Commerce Committee, Youtube) - https://youtu.be/Oiy0aFXyKzU"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={
            this.state.scrollTopAndHeight + window.innerHeight
          }
          scrollTop={this.state.scrollTop}
        />
        Work to ensure continued acces to medication for all patients by
        invoicing the general fund and leasing corporate profits to the
        treasury.
        <br />
        <br />
        Diseases cannot be designated by artifact, alone, for that may not be
        the cause unless you test exclusively for it with (a) correlations
        (meaningfully-diverse) and endogenoous-debasements (homogeneous, not
        heterogenous or exogeneous correlation-coincidence), from{space}
        <a href="https://brainscan.info">me sure</a>, and in (b)
        population-surveys (significance with assumptions of meaning)
        <h4>
          How to Run a{space}
          <a href="https://teapharmacy.party/drugs">Drug Cartel</a>
          {space}with the Government: Money Laundering 301
        </h4>
        "How do I solve a money debt problem?"
        <br />
        Nick Carducci - Bookkeeper at Household Chores (2006-present)
        <br />
        Money-debt, or borrowings of monetary-debits, financial and monetary
        liability, is best solved by (cash/debt)*income reverse amortization,
        transaction-fee based inventory of treasury (state-lands) or vault share
        consortium, currency with truncated production tax for free rider
        immutable sewage police lawsuits 3% under $2k geohash/month report
        spoofable precinct without closed-source-vig nor general fund
        self-dealing scapegoating elder-delinquency and laborless-demand for
        asset inequality standardized guarantee false bid pool name your price
        tool schemes nor free rider mutable trust breaking, hypocrisy and
        <div style={{ borderLeft: "3px solid", paddingLeft: "5px" }}>
          or else, you know what,
        </div>
        ratification. That means voting for{space}
        <a href="https://2024nj.com/carducci">
          NJ for Nick Carducci U.S. Senate 2024
        </a>
        .
        <br />
        <br />
        As an individual, you can claim borrower defense forseeable force
        majeure, just cite $12k/64, or donee beneficiary defense, that which is
        the actual owner of the dollars (currency, not even fungible for
        checking, because of the global pandemic) promised.
        <br />
        <br />
        As an alternative means of finance, without licensure but for naming and
        open ingredient lists and non-exclusive answers of endeavors, even rare
        disease ARPA-H uses the same input costs, and licensure fees, as well as
        animal life, let alone variable-part, labors’ leases and borrowings, is
        1/12 industry-vertical as “collateral” max-royalty, and of course
        copy-investing for brand- or neighborhood-good will gains.
        <br />
        <br />
        <a href="https://www.lawinsider.com/clause/no-surrender-of-others-freedom">
          No Surrender of Others' Freedom Sample Clauses | Law Insider Sample
          Contracts and Business Agreements
        </a>
        <br />
        <a href="https://studentaid.gov/borrower-defense">
          https://studentaid.gov/borrower-defense
        </a>
        <br />
        <br />
        Actual innovation. Actual labor-borne-demand lest dead-weight of
        1/hour-GDP/p enumerated economic welfare you fucking retarded vet. even
        he is booned by false bid pools, and cannot comment on funding, as
        politicians can only own currency and concurrentable commodities, lest
        abstain.
        <br />
        Reasonable doubt for policy and permit requires an alternative.
        <br />
        Small and mid-sized biotech companies are forced to shut down because of
        operations, and the technology is thereby banned or rent-seeken by the
        government trust. We require the review documents, for reasons you know
        (or else).
        <br />
        <br />
        durable approval is dissmissive of all of FDA, NIH and USPTO; (1) naming
        and (2) open ingredient lists for (a) less exclusivity
        <br />
        <br />
        Mind you, I am a developer for bookkeeping software, that believes a
        transaction-fee based currency is the future - now that USD is fungible
        for treasury inventory (at least 23% of oil-wells in America are
        “federally-leased” back to us through corporations instead of dollar
        royalty and drilling sign off, to be subservient to customers). Debt is
        the cause of inflation, that is the rationale that the Federal Reserve
        provides for raising rates. Why do that pennywise short for a pound
        cowardice? Just work for demand in real time without a money ‘market’ by
        “collateral” as NAICS industry-designations as tortious for revenue for
        max-royalty, undisbursed.
        <br />
        <br />
        <h4>
          <a href="https://saverparty.xyz/global">global</a>; jail don't{space}
          <a href="https://www.quora.com/unanswered/Is-government-not-fining-judges-for-successful-appeals-not-evidence-of-fiduciary-embezzlement">
            reward
          </a>
          {space}
          negligence as would one not the idle class
        </h4>
        <Sales
          lastWidth={Math.min(600, this.props.lastWidth)}
          style={{
            paddingBottom: "15px",
            backgroundColor: "rgb(190,150,180)"
          }}
        />
        What do you think about the Fed raising interest rates for the first
        time since 2018?
        <br />
        Patrick O'Connor - former State Representative (1979-1983)
        <br />
        Too little, too late. True inflation (including food and fuel) is a
        shade under 17%. That needs to be crushed FAST or we are screwed.
        <br />
        <br />
        <h4>
          The rationale is to compel less borrowing by the government? Why would
          we allow borrowing at all with{space}
          <a href="https://2024nj.com/carducci">
            truncated production tax NJ for Nick Carducci U.S. Senate 2024
          </a>
          {space}on the horizon - (debt/cash)*income, geohash/mo spoofable
          precinct. Future collateral is 1/12 vertical-industry designation for
          max-royalty, no surrender of others’ freedoms to bid, as
          labor-borne-demand.
        </h4>
        Patrick O'Connor: "Can you translate that word salad into standard
        English?"
        <br />
        <br />
        non monetary-lending corporate and household checking are up, but the
        self employed aren't included in the economy.{space}
        <a href="https://www.ssa.gov/oact/progdata/taxRates.html">
          Corporate tax free
        </a>
        , and As you can know, I've led my life as far away from credit as
        income as possible. I am making a bank to have checking that is fungible
        for currency.
        <br />
        <br />
        I know Amazon's income is credit/good-will, insurance (false bid pool
        loss non-insulated-from-donee-beneficiary nor concurrentable investment
        bank), and I can only imagine what else. Would you like to make
        accommodations so I am not a hypocrite and contributing to the $12k/64
        debt/cash per person a year over Savers' land-exploration rights, $ (20%
        of U.S.)?
        <br />
        <br />
        Likely not, given checking is not fungible for currency anymore, due to
        the pandemic. I can’t associate with people that suffer such basis rate
        fallacy, as excess was less than expected, unless Amazon will try to
        explain to me that sewage causes Alzheimer’s, people were once negative
        years old and wrinkles isn’t an artifact of natural age of death. Nick
        Carducci.sh
        <br />
        <br />
        Nick Carducci - Econometrist at Occupy Wall St
        <br />
        How do you calculate the inflation rate over time?
        <br />
        There are multiple inflations, that which uses employer contributions
        gains in demand by standardized guarantee schemes (PCE, BEA), or
        out-of-pocket costs (CPI, BLS).
        <br />
        Your /time-period can be any x-axis, yet 5%/yr+ is homes, 7.5%/yr+ is
        bonds debt and currency, 2%/yr+ (cpi+pce)/2.
        <br />
        real GDP/yr+ growth is government and structures expenditures, minus the
        growth of personal consumption expenditures, which include general fund
        standardized guarantee false bid pool name your price, -scapegoat, for
        supply already not equating labor-demand price controls yet still
        invoice begotten self-dealing and surrendered freedom of labor-demands’
        bids, “funds.”
        <br />
        <br />
        "Does Obamacare save money?"
        <br />
        Compared to standardized guarantee schemes without price controls, it
        certainly saves money, but only because supply already doesn’t equate
        labor-demand. Better to ban invoices for surrendered freedom and
        foreseeable force majeure ascertainable standing and tortious grounds.
      </div>
    );
  }
}
export default React.forwardRef((props, ref) => {
  //console.log(ref.current);
  return (
    <App
      /*anarchy={ref.current.anarchy}*/
      {...["anarchy", "taxes"].reduce(
        (refs, field) => ({ ...refs, [field]: ref.current[field] }),
        {}
      )}
      {...props}
    />
  );
});
