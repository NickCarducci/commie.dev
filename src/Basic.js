import React from "react";
import Cable from "./Dropwire";
import { UAParser } from "ua-parser-js";

export default class Basic extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    this.state = {
      //donor: true,
      trigger: false,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
    this.plaintiff = React.createRef();
    this.recession = React.createRef();
    this.socialcapital = React.createRef();
    this.police = React.createRef();
    this.voting = React.createRef();
    this.banking = React.createRef();
    this.property = React.createRef();
    this.domain = React.createRef();
    this.cukl = React.createRef();
    this.jobbery = React.createRef();
    this.utopia = React.createRef();
    this.job = React.createRef();
    this.guild = React.createRef();
    this.liberal = React.createRef();
    this.mod = React.createRef();
    this.work = React.createRef();
  }
  componentDidMount = () => {
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);
    const { pathname } = this.props;
    clearTimeout(this.starttime);
    this.starttime = setTimeout(() => {
      this.check(pathname);
    }, 500);
    document.addEventListener("snipcart.ready", (eh) => {
      //var count = window.Snipcart.api.items.count();console.log("snipcart: ", count);
      console.log(eh);
    });
    /*window.SnipcartSettings = {
      publicApiKey:
        "YmM2ZGQ2OWEtOTMwNS00ZDkwLWEyYWMtZGE0Y2EyNGQxZDQwNjM4MDMxODkxNTczMjM4ODMw",
      loadStrategy: "on-user-interaction",
      modalStyle: "side"
    };*/
  };
  check = (pathname) => {
    if (!["/"].includes(pathname)) {
      this.setState({ donor: false }, () => {
        if (pathname === "/plaintiff") {
          window.scroll(0, this.plaintiff.current.offsetTop);
        } else if (pathname === "/recession") {
          window.scroll(0, this.recession.current.offsetTop);
        } else if (
          [
            "/socialcapital",
            "/capitalist",
            "/capitalists",
            "/capitalism"
          ].includes(pathname)
        ) {
          window.scroll(0, this.socialcapital.current.offsetTop);
        } else if (pathname === "/police") {
          window.scroll(0, this.police.current.offsetTop);
        } else if (pathname === "/voting") {
          window.scroll(0, this.voting.current.offsetTop);
        } else if (
          ["/banking", "/banks", "/bank", "/banksy"].includes(pathname)
        ) {
          window.scroll(0, this.banking.current.offsetTop);
        } else if (
          ["/prop", "/props", "/property", "/capital"].includes(pathname)
        ) {
          window.scroll(0, this.property.current.offsetTop);
        } else if (pathname === "/domain") {
          window.scroll(0, this.domain.current.offsetTop);
        } else if (pathname === "/cukl") {
          window.scroll(0, this.cukl.current.offsetTop);
        } else if (["/utopia", "/utopian"].includes(pathname)) {
          window.scroll(0, this.utopia.current.offsetTop);
        } else if (["/job", "/jobs", "/jobbery"].includes(pathname)) {
          window.scroll(0, this.jobbery.current.offsetTop);
        } else if (["/guild", "/guilds"].includes(pathname)) {
          window.scroll(0, this.guild.current.offsetTop);
        } else if (
          ["/lib", "/libs", "/liberal", "/liberals"].includes(pathname)
        ) {
          window.scroll(0, this.liberal.current.offsetTop);
        } else if (["/mod"].includes(pathname)) {
          window.scroll(0, this.mod.current.offsetTop);
        } else if (["/work"].includes(pathname)) {
          window.scroll(0, this.work.current.offsetTop);
        }
      }); //whom dumb (happens, me)
    } else this.setState({ america: true });
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
  componentWillUnmount = () => {
    //window.Snipcart.api.modal && window.Snipcart.api.modal.close();
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
  }; //authority is unique for payment for the transaction requires it,
  //but for instance a distributed database for a death registry, would not
  //acheive trustlessness by the same methods

  //maintain peasant, rollover insurance (squirrel)
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
    if (this.state.donor) {
      return (
        <div
          style={{
            border: "1px solid rgb(200,200,200)",
            overflow: "hidden",
            //margin: "5px",
            fontFamily: "Nunito, sans serif",
            wordBreak: "break-word",
            textAlign: "left",
            width: "100%",
            maxWidth: "600px",
            position: "relative"
          }}
        >
          <div
            style={{
              display: "flex",
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              top: "0px",
              cursor: "pointer"
            }}
          >
            <div onClick={() => this.setState({ donor: false })}>back</div>
            {space}&bull;{space}
            <div
              style={{
                cursor: "pointer"
              }}
              onClick={async () => {
                //if (!window.Snipcart.api.cart)
                //return console.log(window.Snipcart.api);
                //window.Snipcart.api.cart.start().then((cart) => {
                //const { cart, customer } = window.Snipcart.api;
                //return null;
                return null;
                /*return await fetch(
                  "https://snipcart.backbank.workers.dev/", //"https://vault-co.in" /*{"Content-Type": "application/json"}* /
                  {
                    headers: {
                      "Content-Type": "application/json",
                      "Access-Control-Request-Headers": [
                        "Origin",
                        "Content-Type",
                        "Referer"
                      ],
                      "Access-Control-Request-Method": "POST"
                    },
                    method: "POST",
                    body: `{}`
                  }
                )
                  .then(async (r) => await r.json())
                  .then(async (r) => {
                    return console.log(r.data);
                  })
                  .catch((err) => console.log(err.message));

                if (!window.Snipcart) return console.log(window.Snipcart);
                const { cart } = window.Snipcart.api;
                //const user = customer.signin(); console.log("user: ", user);
                console.log("cart: ", cart); //window.Snipcart.api.items.add({}).then(() => window.Snipcart.api.cart.get());
                this.setState({ cart /*, currency: cart.currency()* / }, () => {
                  cart.items
                    .add({
                      id: "DONATION",
                      name: "Donation",
                      description: "basic donation",
                      url:
                        window.location.href !== "https://h0u8vv.csb.app/"
                          ? "/"
                          : "https://h0u8vv.csb.app/",
                      price: "39.00",
                      quantity: 1,
                      stackable: true,
                      categories: [
                        "support",
                        "charity",
                        "education",
                        "open source"
                      ],
                      customFields: [
                        {
                          name: "Basic Donation",
                          options: "30|80[+50.00]",
                          value: "30",
                          required: true
                        }
                      ],
                      metadata: {
                        key: "value"
                      }
                    })
                    .then(async () => {
                      //window.Snipcart.api.modal.show();
                      await fetch(
                        "https://snipcart.backbank.workers.dev/", //"https://vault-co.in" /*{"Content-Type": "application/json"}* /
                        { "Content-Type": "application/json" }
                      )
                        .then(async (r) => await r.json())
                        .then(async (r) => {
                          return console.log(r.data);
                          await fetch("https://app.snipcart.com/api/orders", {
                            headers: {
                              //https://support.snipcart.com/t/hiding-api-keys/325/4
                              /*Hiding API Keys
                              Can anyone tell me if it’s necessary to hide API Keys from being visibile in source code, and 
                              if so, what the most non-technical way to do that would be?
                              Hey @howtodothis, It’s totally fine to have your public API key in your site source. 
                              This API key only gives access to a subset of API endpoints and 
                              can’t be used to access any private information from your account.
                              If you need to use a secret API key though, it should never be exposed in your frontend and 
                              should only be used in server to server communications. Most of our users will write serverless functions that 
                              act as a proxy between their applications and our API.

                              Any plans to tokenize this? Then the window.Snipcart logic can be on the client.
                              Later that evening I realized the api-reference can make its own scope and 
                              the api in the client (use case) doesn’t require an Authorization header.* /
                              Authorization: `Basic ${btoa(r.data)}:`,
                              Accept: "application/json"
                            }
                          });
                        });
                    });
                });*/
              }}
            >
              <a href="https://venmo.com/nickcarducci">donate</a>
              {/**https://cash.app/$vaumoney fee business - no other bank?
              Circle,
              Can I fund my account personally? I’ve managed to open a Vaumoney account
              on cash app, but would like to avoid the percentage payout if I can.
              Perhaps I can just spend exempt, non-connected contributions from
              this account too, but I will probably fund usdc omnibus gateway deposit
              from my personal, directly. I likely will not use the payments api,
              and perhaps not even the payout api until I need to. Best, Nick Carducci
              
              */}
            </div>
          </div>
          Why did Friederik Engels, a capitalist factory owner with a nice
          bourgeois lifestyle, sponsor/coauthor Karl Marx in developing the
          economic analysis that led to the foundation of Communism, under which
          his factory would be confiscated by the state?
          <br />
          Monopolies aren’t efficient for his cost basis.{space}diminishing
          disutility return and utility{space}
          <a href="https://marginalism.uk/utilty">marginalism.uk</a>
          <br />
          <i>
            The apprentices are, as we shall see, quite as badly off under the
            small employers as under the manufacturers, with the single
            difference that they, in turn, may become small employers, and so
            attain a certain independence – that is to say, they are at best
            less directly exploited by the bourgeoisie than under{space}
            <a href="https://www.marxists.org/archive/marx/works/1845/condition-working-class/ch09.htm">
              the factory system
            </a>
            . Thus these small employers are neither genuine proletarians, since
            they live in part upon the work of their apprentices, nor genuine
            bourgeois, since their principal means of support is their own work.
            <br />A man who cultivates his own garden at his own expense, is at
            once the possessor of land, capital, and industry, and exclusively
            enjoys the profits of proprietor,{space}
            <a href="https://mises.org/library/treatise-political-economy">
              capitalist
            </a>
            , and labourer.
            <br />
            His whole stock, therefore, is distinguished into two parts. That
            part which, he expects, is to afford him this revenue, is called
            {space}
            <a href="https://www.marxists.org/reference/archive/smith-adam/works/wealth-of-nations/book02/ch01.htm">
              his capital
            </a>
            . The other is that which supplies his immediate consumption;
          </i>
          <h3>Landed property and the disutility dialectic</h3>
          The property in them is of higher pretensions than that of the land,
          which may generally be traced up to an act of spoliation; for it is
          hardly possible to show an instance, in which its ownership has been
          legitimately transmitted from the first occupancy. It ranks higher
          than the right of the capitalist also; for even taking it for granted,
          that this latter has been acquired without any spoliation whatever,
          and by the gradual accumulations of ages, yet the succession to it
          could not have been established without the aid of legislation, which
          aid may have been granted on conditions. Yet, sacred as the property
          in the faculties of industry is, it is constantly infringed upon, not
          only in the flagrant abuse of personal slavery, but in many other
          points of more frequent occurrence.
          <h2>
            After capital, landed property would be dealt with. After that, wage
            labour.{space}
            <a href="https://www.marxists.org/archive/marx/works/1857/grundrisse/ch05.htm">
              All three presupposed, the movement of prices
            </a>
            , as circulation now defined in its inner totality.
          </h2>
        </div>
      );
    } else
      return (
        <div
          style={{
            border: "1px solid rgb(200,200,200)",
            overflow: "hidden",
            //margin: "5px",
            fontFamily: "Nunito, sans serif",
            wordBreak: "break-word",
            textAlign: "left",
            width: "100%",
            maxWidth: "600px",
            position: "relative" //my feow americans, "sniffs"
            //democracy not perishable, for the world and the kids, not the past
            //no bones nor candle
            /**
           * no bones nor candle about it, democracy is non-perishable
           * recession = long term unemployment utes!
           * stand for. unknown factor
           * physical cost to production and profit or ground rent
           *
           * fixed development / human tech dict
           * techno experts
           *
           * social production , "commodification of identities" (Jason Myles),
           * less natural for to be commodification should be technological
           *
           * il lock your ass down if minimal viable duress, babe [FBI threat sex(?)]
           *
           * is the king not the apprentice executioner of the state
           *
           * the natural folded poni
           * 
           * 39% government over insurance, 95% occupy 
           * 
           * living-labor = ordinary profit expiry labor rollover commodity
           * 
           * honest and direct - ordinary option profit
           * 
           * import the wise aand ripe - padreeee
           * 
           * prices are well-known, priced out negative elastic grade leisure prostituted
           * 
        short term employment paid
        <br />
        only prostitution of leisure is no consent when fasit foreign governor
        (in natural state)
        <br />
        they are here (already)
        <br />
        Enslave the homeless and immigrants in the natural ordinary rate less
        short term employment lackeys
        <br />
        borrowers make the natural rate normalize higher
        <br />
        do i need to have a kid to have a spif-n-span living labor?
        <br />
        Make capital and labor redundant (as machine superfluous)
        <br />
        Time, capital, or labor, choose 2<br />
        Natty power to from the factory !<br />
        Y’all choosing capital. Productivity per day needs to go down. New world
        order saltbank.org
        <br />
        There is not enough living labor and any more to be short term and
        inflationary marginally ordinarily stateless communism representation
        not corporation
        <br />
        Time, capital, labor
        <br />
        Abilities
        <br />
        Molar Natty Power (shit they living right,{space}
        <a href="https://saverparty.xyz/global">muh customs</a>, losing our
        commodties by treasurey or net exports) Special powers priced out
        <br />
        LLol call the cops on donation to foundations ...that \[...]he lives outta?
        rent  from the consumer 
        Do you like this? Only G-d saves these days. Bad advice about the prophet pbuh causes starvation.
        The divining line is that only civilians can punch a car burglar in the face. 
        Normal productivity == living labor. C=U+K+L_
        Isn't a plaintiff’s attorney a free rider immutable service for the public good will void of surrendering?
        what if boy is shlub, iran want electric car
        generous mistakes, Isn’t the gerontocracy and/or soft labor apparent from skill-based income inequality?
        Labor as all of capital production
        Isn’t money/technology elastic towards inelasticity as supply/budget is cumulatively/individually a price maker?
        Why can’t Americans buy Venezuelan oil?
        ("hired 'reason', now go 'do'") dictated script, "some words" (scopes.cc, scopebook.quora.com)
        implied niches of genius
        incredible chutzpah
        "mr.met flips off" like lil buddy (gremlin)
        broke at a higher level expenses and not working (lazy/soft)
        How is deviance delineated from incompetence to stand trial? (last meal was a speech)
        This is why welfare for anyone but the injured is worse than usufruct mutual aid.

        contract exchange imports

        zombie physiological nonsense humanharvest.info
           */
          }}
        >
          <div
            style={{
              display: "flex",
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              top: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.setState({ donor: true })} //Unlike Velocity Rate
          >
            donate
          </div>
          Already tax breaks for getting out of debt. Would out-of-pocket
          payments be tax-free if there were no insurance? They admit by policy
          the accelerating(ly)-inflation(ary) effects.
          <br />
          White House to refinance student loans with pipe.
          <h4>
            There is no cdc statistician that is paid by{space}
            <a href="https://humanharvest.info">another industry</a>.
          </h4>
          Joint accounts can standardized guarantees; right to trade but not
          contract.{space}
          <a href="https://jester.com.co">Retarded</a>
          {space}by ability or action; let ability determine your needs
          <br />
          Maybe sue the government as a whole by international associations; at
          least, war is ok for human right; currency is deeds.
          <h3>
            contract exchange imports{space}
            <span role="img" aria-label="side-splitting laughter">
              🤣
            </span>
            {space}Bonds are safe assets, implausible use ascertained universal
            harm 1031 scoped proprietorship rental income
          </h3>
          Commie is GOP, just more{space}
          <a href="https://vaults.biz/immi">imports</a>
          {space}until{space}
          <a href="https://saverparty.xyz/global">sound vault share</a>. Do you
          agree with economists that deflation is worse than inflation? Do you
          agree with Jerome Powell that 2% annual inflation helps Americans?
          <h3>
            Does the government need to{space}
            <a href="https://vau.money/login">spend in line with crime</a>?
          </h3>
          Windfall layoffs: real, non deflationary layoffs, no questions asked (
          <a href="https://quant.stackexchange.com/questions/74289/are-stablecoins-stable-if-the-merchant-processor-uses-fiat-currencies-or-insuran">
            2015
          </a>
          ). Expiring commodities and scalped schedules, combines budget
          constraints and consumer fraud independent non regular but custom and
          closed or else open.
          <h3>
            Let ability garner needs: Don’t contracts make non-deflationary
            investment layoffs in the long term?
          </h3>
          Is a convenient yield for compulsory extra-indemnity amelioration of
          plaintiff taxes deadly?{space}
          <a href="https://reddit.com/r/thetaxparty">Uniform Liberty</a>
          <br />
          <br />
          ​I've found stolen purchase contract splits the party (and human
          action is{space}
          <a href="https://thepolicestate.quora.com/Is-getcovered-NJ-gov-nurse-scheduling-and-southwest-airline-pilot-scheduling-pricing-mandated-to-be-ameliorated-per-diem">
            a scheduling issue
          </a>
          ).
          <br />
          personal fiduciary account lmao.
          <br />
          Recession without inflation should make it easier to hired
          <br />
          <br />
          T0: human action deflates investment. more kuznets; contracts
          <br />
          <br />
          Is inflation, deflation, or foreclosure instead of reverse service and
          repo the cause of the Great Depression?
          <br />
          <br />
          dance to boycott credit f the working class generally. Isn't CEO pay a
          fraction of the value added as a share of GDP by finance (90%
          principal over down payment)?{space}
          <b>Are prices the purpose of microeconomic utility?</b>
          {space}They went back for them (Was{space}
          <a href="https://truncatedwholesaletax.com">slavery</a>
          {space}made from colonizing-British).
          <br />
          <br />
          We want to save in land property deeds, which necessitates plausible
          use leases and seasonal contracts. Technologists: Isn't academia
          inability to define things (their outcome life Product use to benefit)
          once a reaosn for personal insanity?
          <br />
          <br />
          <h3 style={{ float: "left", margin: "4px 0px" }}>
            <a href="https://saltbank.quora.com">What went wrong?</a>
            <br />
            r/sayists
          </h3>
          <h3 style={{ float: "right", margin: "4px 0px" }}>r/VoteCommunism</h3>
          capitalism is risky money.{space}
          <a href="https://occupyrepublicans.quora.com/Why-do-we-need-to-cut-the-deficit-1">
            cut the deficit?
          </a>
          {space}
          how many mudpies can one{space}
          <a href="https://leisuretoprefer.com">like</a>? How many cookies can
          you eat? Doesn't dynamic use substitute itself? Communism is a verb
          that has no{space}
          <a href="https://commie.dev/anarchy">contract</a>. Equal and full
          measure,{space}
          <a href="https://vaults.biz/gdp">1820-1870</a>
          <br />
          <br />
          pick one, merchants only lessen either storage and transport or
          surplus, zero sum still otherwise, then.
          <br />
          <br />
          Why do the rich entrepreneurs need more spending according to Keynes,
          too?
          <br />
          <br />
          Why does the Federal Reserve{space}
          <a href="https://census.quora.com/Why-is-our-population-so-large-and-what-can-be-done-to-reduce-it-1">
            feel the need
          </a>
          {space}to expand money stock to population growth?
          <br />
          <br />
          If a politician cannot be an economist because they have better
          economic ideas, shouldn't economists just drop dead already?
          <br />
          <br />
          Why does the University of Chicago say subsidy is required for rich
          entrepreneurs?
          <br />
          <br />
          Don't Republicans usually trade border control for more spending when
          it comes to the debt ceiling?
          <br />
          <br />
          Were there African slaves working in the U.S. before America's
          Revolutionary War? Didn't slavery start again then in 1820 until 1870?
          <br />
          <br />
          <i>
            Is inflation discriminatory? Is inflation measured either by a
            survey of packaged goods and/or new monetarily-measured uses for the
            same life?
          </i>
          <br />
          <br />
          {/**don't pity the fool "biden canceled my student debt" autumn leaves [pool] */}
          Why wouldn't it be rational and reasonable to hate the older
          generations for causing inflation?
          <br />
          <br />
          Aren’t Occupy Wall Street protesters terrorists over the value added
          of the financial industry as individuals now?
          <div
            onClick={() => this.setState({ america: false })}
            style={{ fontSize: this.state.america ? "0px" : "" }}
          >
            65 average donor, they work so hard for the{space}
            <a href="https://www.reddit.com/r/Anarchy101/comments/yh9sh8/comment/iuedq4t">
              jobbery
            </a>
            {this.state.america && (
              <h4>
                Rankings, or approval eliminations, are both{space}
                <a href="https://www.reddit.com/r/occupywallstreet/comments/z0wvvp/stop_compulsory_will_2024/">
                  choices
                </a>
                , not these godforsaken{space}
                <i>
                  <a href="https://marginalism.uk">dynamic votes</a>
                </i>
                .
              </h4>
            )}
            Why is there a $2,900 individual/multi-candidate, $2,000
            {space}
            <a href="https://truncatedwholesaletax.com">candidate-committee</a>,
            and $5,000 political action committee personal donation limit?
            <br />
            <br />
            Good will{space}
            <a href="https://vau.money">tensions</a>
            {space}is a fountain that pays down. Why is government envisaged on
            the bottom?{space}
            <span style={{ color: "grey" }}>
              (Keynesian 2% made product tensions of disutility without{space}
              <a href="https://leisuretoprefer.com">leisure</a>
              {space}
              nor equality “United we bargain, divided we fall.”
            </span>
            <br />
            <br />I want deflation or equality for Keynes
            <h2>
              <a href="https://saverparty.xyz">The Monetarist Treatise</a>:
              Gross durable and non-perishable domestic and foreign investment
              labor purchases{space}
              <a href="https://www.reddit.com/r/sayists/comments/yqtfb2/would_jeanbaptiste_say_be_silent_about_the_united/">
                diminishing use propensity
              </a>
              {space}yet for rationality making revenue benefit and/or{space}
              <a href="https://marginalism.uk">utility</a>
              {space}
              through exclusion of strong, workable, hard working{space}
              <a href="https://micro-theory.com">substitutes</a>’ collateral
              barter by a truncated duty tax.
            </h2>
            <div
              style={{
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 22px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              <h3>anything state (away from average)</h3>
              Because his target Duhring is focused on physical coercion — from
              which he views economic dynamics as secondary — Engels must of
              course sneer that this isn’t new and in turn evangelize for the
              totally amazing, totally new Marxist theory which is framed as
              saying the exact reverse. Structures of social power — and
              specifically force — must flow from and be shaped by the economic.
              The tail wags the dog. But isn’t power just about material
              interests? This is another Engels claim:
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              ’Subjugation has always been — to use Herr Dühring’s elegant
              expression — a “stomach-filling agency” (taking stomach-filling in
              a very wide sense), but never and nowhere a political grouping
              established “for its own sake”.’ [William Gillis, Anti-Engels (or
              Anti-Anti-Duhring Aktion), 2021]
            </div>
            {!this.state.america && <br />}
            Would you like another job or mudpie?
            <h2>
              it's a big circus! (the anti anti synthesis: corpus linguistics)
              jester.com.co Brave New World and Anti- Intellectualism?
              u/38incihesap
            </h2>
            <h1>
              Why does the U.S. involuntarily commit people who want to kill
              themselves but not{space}
              <a href="https://bankingisnot.biz">others</a>?{space}
              <i style={{ color: "grey" }}>
                What does wishing for someone's death mean for the trolley
                problem?
              </i>
              {space}
              <span style={{ color: "linen" }}>
                Should a business owner be able to express dissatisfaction with
                the ability for people to live?
                {/**"gang association", "named riot", "known to be violent" */}
              </span>
              {space}
              <span
                ref={this.domain}
                style={{ color: "white", WebkitTextStroke: ".5px black" }}
              >
                Isn't a death wish only harmless by the existing powerless?
              </span>
              {space}Is there a stakeholder duty for private business? (Public
              Domain)
            </h1>
            association with gangs,{space}
            <a href="https://generalmaintenanceunit.quora.com">known to be</a>
            {space}violent (proactive{space}
            <a href="https://regcops.quora.com">policing</a>)
            {this.state.america ? (
              <h4 style={{ fontSize: "14px" }}>
                <a href="https://goprovider.xyz">Go Provider</a>
              </h4>
            ) : (
              <div
                style={{
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 22px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid"
                }}
              >
                {!this.state.america && (
                  <Cable
                    style={{ height: "300px" }}
                    onError={handleScollImgError}
                    //img={true}
                    src={
                      this.state.noyout
                        ? ""
                        : "https://www.youtube.com/embed/7Jy9JyrukCY?start=142"
                    }
                    float={"right"}
                    title="Capitalist https://youtu.be/7Jy9JyrukCY?t=142"
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + scrollnum()]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop} //"kicked out, too strong, helped other people with their work. 1'31" Hans Niemann (Lex F.)
                  />
                )}
                {/**
              I don’t want to pick a source in case it’s a baddie but you can see many. 
              >Reasons for Short-Term Commitment or Involuntary Hospitalization. Suicidal thoughts and feelings; Risk of immediate danger in hurting ...
              https://www.google.com/search?q=is+self+ideation+of+suicide+cause+for+involuntary+commitmentI was involuntarily committed for 
              stalking my ex (for a several months, she never said to stop or no) and making a move on another girl, but not touching her. When I was at the 
              Hackensack Meridian NJ psych ward, another kid told a cop about being so depressed that he wanted to die after making a drink for a girl and 
              her reporting that he tried to intoxicate her against her will. Mixed signals will be the death of us. */}
                (we need less healthcare)
                <br />
                Is the desire to commit a crime legal? If so, isn’t motive only
                punitive thereafter? Isn’t a better mental health service paid
                for? Doesn’t the capitalization of healthcare cause worse
                outcomes? Shouldn’t John Catsimitidis be involuntarily committed
                for buying a radio station to call for a fatwa against
                socialists? Is real non-deflationary employment the proper
                outcome of education? Is the government alone allowed to make
                threats? Wouldn't a doctor be homeless without patients?
                Wouldn't a doctor be homeless without patients? Wouldn't a cop
                and/or judge be homeless without crime?
                {space}
                <span style={{ color: "navy" }}>
                  Aren’t classical liberals anti-finance?
                </span>
                {space}Why is wishing your own life away a reason for
                involuntary commitment but not others? Is it legal to wish for
                the death of yourself if you are a socialist?
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Would I rather imprison the ideation of others’ death with (1) a
                timestamp by a convict intranet made by the{space}
                <a href="https://quora.com/topic/U-S-General-Services-Administration">
                  U.S. General Services Administration
                </a>
                {space}(
                <i>
                  so non-convicts might be able to{space}
                  <a href="https://virtualid.quora.com">
                    <b>plan an attack</b>
                  </a>
                </i>
                ), or otherwise (2) on radio/tv/one party audio recording with
                the words “going to” instead of “drop dead”
                {space}
                <i>cyber bullying</i>? Yes, but only after my psych ward
                brethren are free to ideate suicide and behave illicitly.
                <h3>
                  state contractors: A jester’s nightmare is an anti synthesis
                  (you should have put more in escrow then you right loon)
                </h3>
                <div
                  ref={this.jobbery}
                  style={{
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 22px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  <i>
                    The compulsory powers of municipalities have made it easy to
                    carry out any great work for a town without difficulty or
                    loss of time
                  </i>
                  {space}but
                  {space}
                  <b>great works</b>
                  {space}are a poor compensation for other serious evils.{space}
                  <b>Great debts</b>
                  {space}
                  have been{space}
                  <b>accumulated</b>;{space}
                  <i>the burden of rates has become grievous to be borne</i>;
                  possession of power has become{space}
                  <i>
                    a matter of{space}
                    <b>political</b>
                  </i>
                  {space}party,{space}
                  <i>with all its innumerable evils</i>; great monopolies are
                  beginning to occupy the ground, -- and let it be remembered
                  that all systems, once authoritatively adopted, standing the
                  way of new discoveries and improvements, -- jobbery is said to
                  exist; the divine right of some to direct the manner in which
                  the resources of others shall be used has more and more become
                  a fixed national idea; and we have all, poor and rich alike
                  been prevented from learning the fruitful lesson of
                  voluntarily combining to supply our own special wants in our
                  own special fashions. (Auberon Molyneux Herbert,{space}
                  <a href="https://oll-resources.s3.us-east-2.amazonaws.com/oll3/store/titles/906/0486_Bk.pdf">
                    The Right and Wrong of Compulsion by the State
                  </a>
                  )
                </div>
                Would technologists be homeless without problems?{space}
                <i>
                  No. After the technologist’s job is done we do not seek more.
                </i>
                <h3 style={{ margin: "4px 0px" }}>
                  Why do you think humans evolved to dispel virus? Rather than
                  supposing a proposition, perhaps we should deduce the
                  induction. u/populartire_92: Where do "dormant" viruses hide
                  in the body? A virus that causes no symptoms but that is
                  indeed in the body and could "activate" at any time. Where in
                  the body do these viruses hide? Is the immune system aware of
                  them? Are antibodies produced around the clock just because
                  its inside of you and your body knows about it (if it does).
                  Surly the virus roots "hides" somewhere as it would not
                  survive just floating around the bloodstream.{space}
                  <i>
                    What about something like HPV/Herpes that always outbreak in
                    the same region? Is there a infected cell in that region the
                    body never destroys or a virus connected to a nerve in the
                    region?
                  </i>
                </h3>
                u/Dr_Orgueil: This question is broad and there is still a lot
                that we don’t know about this topic, but I’ll do my best.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                The basic answer though is that Herpes viruses and retroviruses
                (like HIV) integrate into your genome. They go through periods
                of time where they are replicating and producing lots of viruses
                that go on to infect other cells. They also have “dorment”
                periods where they are still part of your genome but aren’t
                producing much virus.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Antibodies are generally for the surface portions of a virus.
                When dormant it is just the coding sequence, not an actual virus
                that is hiding out.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Different viruses infect different cell types. Herpes infects
                neural cells. HIV infects immune cells. After integration, the
                viral genome is part of the cells genome.{space}
                <i>
                  Every time a cell replicates the viral genome replicates with
                  it.
                </i>
                {space}Rather or not it is transcribing to produce actual
                viruses or an active infection/outbreak varies.
                <br />
                <br />
                This is a very generalized answer for a very broad question. I
                hope that it helps!
              </div>
            )}
            <h2>observational vs assertive science</h2>
            So after finished Brave New World, something in my mind. I believed
            all of the evil, state, hierarchy, bourgeois, exploitation, is came
            from money. Money was the source of evil. Then I realised something.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Isn't science the worst form of despotism? You can always justify
            opression and greed in scientific despotism. You can always exploit
            people if it is scientificly beneficial. You can always put barriers
            in people's mind if it's not{space}
            <i style={{ color: "cornflowerblue" }}>realistic</i>.
            {!this.state.america && <br />}
            {!this.state.america && <br />}I think this way about technology
            (guild) and rollover insurance (future). As science is gud. Bamf is
            the anti-Intellectual!
            {!this.state.america && <br />}
            u/onedayitwillbedaisy: [deleted]
            {/**
            You bring up Brave New World, anti-intellectualism, despotism, exploitation, 
            money, science, greed and oppression. But I don't see an actual question. */}
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            u/38incihesap: Isn't science is a despotic system?
            {/**it's a big circus! 
      
             I'll do anything for an apple pie
      
            rationality dissurrendered depreciation against deprecation*/}
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Probably people who vie from Hegel. Antisynthesis is anti-science.
            <br />
            u/onedayitwillbedaisy: [deleted]
            {/**
              I don't think so. Who do you think is holding science's absolute power? */}
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            If “Roger Bacon (1214 - 1284) is credited as the first scholar to
            promote inductive reasoning as part of the scientific method,” Hegel
            should be for deductive reasoning by throws of contention.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <div
              style={{
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 22px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              The enquiry into the essential destiny of Reason{space}
              <i>
                [logic induces, but when it doesn't the dialectic deduces, i.e.
                "Election induction is just talk. The failure to deduce (a) null
                confirmation is not exculpatory that “we didn’t lose” or "we
                won" without{space}
                <b>distributed data systems</b>. Induction of{space}
                <a href="https://actuaries.quora.com">reproducible</a>
                {space}facts aren't{space}
                <a href="https://epiology.quora.com">artifacts</a>, and
                artifacts are{space}
                <a href="https://sewageisamatterofdomesticviolence.quora.com">
                  irreproducible
                </a>
                {space}by{space}
                <a href="https://phyletic.quora.com">deduction</a>.]
              </i>
              {space}— as far as it is considered in reference to the World — is
              identical with the question, what is the ultimate design of the
              World? And the expression implies that that design is destined to
              be realised. Two points of consideration suggest themselves:
              first, the import of this design — its abstract definition; and
              secondly, its realisation.
            </div>
            {/**woke malarkey;  */}
            <i
              style={{
                color: "grey"
              }}
            >
              Can one short their industry? (Negation: deduction by null
              confirmation). Change teams; to short oneself is to induce
              deduction by null confirmation (science).
            </i>
            <h1>Doesn't deductive reasoning follow inductive logic?</h1>
            Sociology is the study of roles with duties/competence. Isn't
            deranged being incapable to reconcile artifacts? Doesn't the right
            wing think there is a lag to government spending? Wasn't inflation
            correlated with corporate profits and labor productivity? Doesn't
            Kayleigh McEnany think real employment is real inflation? Will Trump
            claim credit for industry-specific payday loans? Did Trump tell
            people to go home before January 6th, 2021?
            <h2>
              <a href="https://thumbprint.quora.com/Free-good-will-https-www-quora-com-Arent-paying-publishers-alone-allowed-to-prohibit-certain-ideas-answer-Franklin-V">
                Free Good Will
              </a>
              {space}Doesn't capitalism use induction? Doesn't capitalism induce
              fixed costs? Doesn't capitalism refrain from deduction?
            </h2>
            Hegel is assertive to the scientific method. In statistics we call
            this
            {space}
            <i>null confirming</i>
            {space}rather than{space}
            <a href="https://humanharvest.info">
              artifactual bias “confirming” fallacy
            </a>
            .{!this.state.america && <br />}
            u/onedayitwillbedaisy: [deleted]
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Nobody. Are you talking to yourself or are you no one right now? I’m
            setting the corpus linguistics straight. your comments end up being
            noise when I am done with them
            {!this.state.america && <br />}
            u/onedayitwillbedaisy: [deleted]
            {!this.state.america && <br />}
            {!this.state.america && <br />}I feel you the plagiarist.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Wouldn't a cop and/or judge be homeless without crime? Wouldn't a
            farmer and/or chef be homeless without hunger? Wouldn't firepeople
            be homeless without house fires? Wouldn't a doctor be homeless
            without patients? Should courts continue to use testimony as
            evidence? Do the homeless need Kendra's law?
            <h4>Would technologists be homeless without problems?</h4>
            No.{space}
            <span style={{ color: "cornflowerblue" }}>
              After the technologist’s job is done we do not seek more.
            </span>
            {space}
            <i>
              How many stories can be told by omission? I’ll do anything for
              apple pie. The question is not how many mudpies you have, but what
              you can do with them.
            </i>
            {!this.state.america && <br />}
            <div
              style={{
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 22px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              Monetary theory has no ideological content. It deals with a
              scientific question—how a particular social contrivance works. It
              may surprise most readers to learn that, in today’s terminology,
              Karl Marx could be labeled a “monetarist”—a term that is
              currently, if incorrectly, regarded as almost synonymous with
              “conservative” or “pro free market.” (Milton Friedman,{space}
              <a href="https://miltonfriedman.hoover.org/internal/media/dispatcher/214245/full">
                Marx and Money
              </a>
              , 27 October 1980. p. The Newsweek/Daily Beast Company, p. 95;
              Hoover Inst.)
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              As money develops into international money, so the commodity-owner
              becomes a cosmopolitan. The cosmopolitan relations of men to one
              another originally comprise only their relations as
              commodity-owners. Commodities as such are indifferent to all
              religious, political, national and linguistic barriers. (Marx,
              {space}
              <a href="https://www.marxists.org/archive/marx/works/1859/critique-pol-economy/appx1.htm">
                Critique
              </a>
              {space}of Political Economy)
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Marx made a fundamental distinction, in this regard, between the
              classical political economists and the “vulgar economists” who
              came after them. Smith, James Mill and Ricardo had developed their
              scientific political economy without fear of its revolutionary
              implications, because industrial capital was still the progressive
              underdog in a revolutionary struggle against the unearned income
              of feudal landlords and chartered monopolists. But that situation
              came to an end with the capitalists’ acquisition of political
              power. (Kevin Carson, Studies in{space}
              <a href="https://theanarchistlibrary.org/library/kevin-carson-studies-in-mutualist-political-economy">
                Mutualist
              </a>
              {space}Political Economy)
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Capital must work, as it were, in concert with industry; and this
              concurrence is what I call the productive agency of capital. (Say,
              Political Economy)
            </div>
            <h2>
              But capital obtains this ability only by constantly sucking in
              living labour as its soul, vampire-like. {space}
              <i style={{ color: "cadetblue" }}>
                So it is induced. A non-extractible ponzi scheme - When testing
                inductions{space}
                <b>for reproducible-artifacts</b>, use the same extractible
                endogenous controls, et voila intractable-induction.
              </i>
            </h2>
            Student loan bailout is treasury bond bailout. revenuedata.doi.gov
            BLM - QE{space}
            <span
              style={{
                color: "cadetblue"
              }}
            >
              Why wouldn't https://api.congress.gov/bill be able to sort by last
              instead of latest action already? This is what Thumbprint will
              need.
            </span>
            {space}
            <b>
              Why does the right wing say a majority of people want to decrease
              {space}
              <a href="https://medicatethehomeless.quora.com">immigration</a>
              {space}when 52% Republicans, 67% Independents/non-voters, and 83%
              Democrats don’t?
            </b>
            <div
              style={{
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 22px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              {this.state.america && (
                <h3
                  style={{
                    margin: "4px 0px"
                  }}
                >
                  Only labor produces value because everything else is{space}
                  <i>found</i>.{space}
                  <i>
                    Can we not take in immigrants because of real
                    non-deflationary principal and interest over collateral?
                  </i>
                  {space}What is sovereign independence worth? Isn't a contract
                  legal until proven otherwise? Does political asylum span the
                  same standing as self-defense?
                </h3>
              )}
              Laws may perpetuate a particular means of production, e.g., land,
              in certain families. These laws acquire economic significance only
              if large-scale landed property is in keeping with the social mode
              of production, as for instance in Britain. Agriculture was carried
              on in France on a small scale, despite the existence of large
              estates, which were therefore parcelled out by the Revolution. But
              is it possible, e.g., by law, to{space}
              <a href="https://markethistory.quora.com/What-is-the-evidence-that-ancient-Greeks-practiced-communism-as-described-by-Karl-Marx-and-Friedrich-Engels-in-The-Comm-1">
                perpetuate the division of land into small lots
              </a>
              ? Landed property tends to become concentrated again despite these
              laws. The influence exercised by laws on the preservation of
              existing conditions of distribution, and the effect they thereby
              exert on production has to be examined separately.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              The Germanic barbarians, whose traditional mode of production was
              agriculture with the aid of serfs and who lived scattered over the
              countryside, could the more easily adapt the Roman provinces to
              their requirements because the concentration of landed property
              carried out there had already uprooted the older agricultural
              relations.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              An adult cannot become a child again, or he becomes childish. But
              does the naivete of the child not give him pleasure, and does not
              he himself endeavour to reproduce the child's veracity on a higher
              level? There are rude children and precocious children. Many of
              the ancient peoples belong to this category.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              The Greeks were normal children. The charm their art has for us
              does not conflict with the immature stage of the society in which
              it originated. On the contrary its charm is a consequence of this
              and is inseparably linked with the fact that the immature social
              conditions which gave rise, and which alone could give rise, to
              this art cannot recur.
              {!this.state.america && <br />}
              {!this.state.america && <br />}… wine, metal work developing
              almost into a fine art … among the Greeks and Romans, the full
              development of money, which is presupposed in modern bourgeois
              society, appears only in the period of their dissolution.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              The amount of money required as means of payment thus depends not
              on the aggregate amount of payments which are due to be made
              simultaneously, but on the degree of their concentration and on
              the size of the balance left over after the negative and positive
              amounts have been offset against one another. Special devices for
              this type of balancing arise even if no credit system has been
              evolved, as was the case in ancient Rome.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Where chains of payments and an artificial system for adjusting
              them have been developed, any upheaval that forcibly interrupts
              the flow of payments and upsets the mechanism for balancing them
              against one another suddenly turns money from the nebulous
              chimerical form it assumed as measure of value into hard cash or
              means of payment.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              This sudden transformation of the credit system into a monetary
              system adds theoretical dismay to the actually existing panic, and
              the agents of the circulation process are overawed by the
              impenetrable mystery surrounding their own relations.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              No production['s] possible without an instrument of production,
              even if this instrument is only the hand. No production without
              stored-up, past labour, even if it is only the facility gathered
              together and concentrated in the hand of the savage by repeated
              practice. Capital is, among other things, also an instrument of
              production, also objectified, past labour. Therefore capital is a
              general, eternal relation of nature; that is, if I leave out just
              the specific quality which alone makes ‘instrument of production’
              and ‘stored-up labour’ into capital.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              These deductions from the "undiminished" proceeds of labor are an
              economic necessity, and their magnitude is to be determined
              according to available means and forces, and partly by computation
              of probabilities, but they are in no way calculable by equity.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Moreover by its need for repetition consumption leads to the
              {space}
              <a href="https://www.marxists.org/archive/marx/works/1857/grundrisse/ch01.htm">
                perfection of abilities
              </a>
              {space}evolved during the first process of production and converts
              them into skills.{space}
              <i>
                Consumption accomplishes the act of production only in
                completing the product as product by dissolving it, by consuming
                its independently material form, by raising the inclination
                developed in the first act of production, through the need for
                repetition, to its finished form; it is thus not only the
                concluding act in which the product becomes product, but also
                that in which the producer becomes producer.
              </i>
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              As regards whole societies, distribution seems to precede
              production and to determine it in yet another respect, almost as
              if it were a pre-economic fact. A conquering people divides the
              land among the conquerors, thus imposes a certain distribution and
              form of property in land, and thus determines production. Or it
              enslaves the conquered and so makes slave labour the foundation of
              production. Or a people rises in revolution and smashes the great
              landed estates into small parcels, and hence, by this new
              distribution, gives production a new character. Or a system of
              laws assigns property in land to certain families in perpetuity,
              or distributes labour [as] a hereditary privilege and thus
              confines it within certain castes. In all these cases, and they
              are all historical, it seems that distribution is not structured
              and determined by production, but rather the opposite, production
              by distribution.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              In the shallowest conception, distribution appears as the
              distribution of products, and hence as further removed from and
              quasi-independent of production. But before distribution can be
              the distribution of products, it is: (1) the distribution of the
              instruments of production, and (2), which is a further
              specification of the same relation, the distribution of the
              members of the society among the different kinds of production.
              (Subsumption of the individuals under specific relations of
              production.)
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Production creates the objects which correspond to the given
              needs; distribution divides them up according to social laws;
              exchange further parcels out the already divided shares in accord
              with individual needs; and finally, in consumption, the product
              steps outside this social movement and becomes a direct object and
              servant of individual need, and satisfies it in being consumed.
              Thus production appears as the point of departure, consumption as
              the conclusion, distribution and exchange as the middle, which is
              however itself twofold, since distribution is determined by
              society and exchange by individuals. The person objectifies
              himself in production, the thing subjectifies itself in the
              person; in distribution, society mediates between production and
              consumption in the form of general, dominant determinants; in
              exchange the two are mediated by the chance characteristics of the
              individual.
            </div>
            <h1 style={{ lineHeight: "12px" }}>
              <a href="https://marginalism.uk">Marginalism.uk</a>
              {space}
              <span
                style={{
                  fontSize: this.state.america ? "0px" : "12px"
                }}
              >
                This real inflation is called the technology guild in our
                lexicon. The merchant and manufacturers are the most malleable
                in this variable capital.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                <div
                  ref={this.guild}
                  style={{
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 22px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  The contests about wages in Manufacture, pre-suppose
                  manufacture, and are in no sense directed against its
                  existence. The opposition against the establishment of new
                  manufactures, proceeds from the guilds and privileged towns,
                  not from the workpeople. …Its last words are: corporate guilds
                  for manufacture; patriarchal relations in agriculture. …The
                  money capital formed by means of usury and commerce was
                  prevented from turning into industrial capital, in the country
                  by the feudal constitution, in the towns by the guild
                  organisation.
                  {!this.state.america && <br />}
                  {!this.state.america && <br />}
                  For one thing, by keeping secrets in trade if the market is at
                  a great distance from those who supply it, that is, by
                  concealing a price change, its rise above the natural level
                  [of fixed/constant no-more deflationary tech].
                </div>
                {!this.state.america && <br />}
                Service work is how the aristocracy becomes the bourgeoisie,
                albeit perhaps begrudgingly, however you’d not know it in the
                initial throws of opulence until globalization deludes our
                conditioning of growth to leisure.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                <div
                  style={{
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 22px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  Just as industrial capital realises only such profits as
                  already exist in the value of commodities as surplus-value, so
                  merchant's capital realises profits only because the entire
                  surplus-value, or profit, has not as yet been fully realised
                  in the price charged for the commodities by the industrial
                  capitalist. …Merchant’scapital, therefore, participates in
                  levelling surplus-value to average profit, although it does
                  not take part in its production.
                </div>
                {!this.state.america && <br />}
                Traders aid in globalized efficiency. The expansion of capital
                into the future is capitalist, with socialized capital.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                <b>
                  Do commercial property owners hold the key to poverty ? If
                  not, what would happen if they cut leases by 50% on commercial
                  spaces that have been vacant for more than a year ?
                </b>
                {!this.state.america && <br />}
                $800b/yr of $23t/yr commercial structures are built for these
                purposes, and again that amount for residential structures.
                $2.7t/yr is then spent on residential leases, and $1.2t/yr is on
                the commercial-kind.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                This of course would grant cheaper mudpies without leasing, the
                surrender of future demand. A more efficient rather than
                productive society, even really productive society, would
                increase poverty surely, because the skewed rate of income below
                a third national expense strata (or 3x average food) would widen
                from the income equality/competition.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                The only way to emancipate (the mass of) people from poverty, an
                average of operating rates, is to allow for capitalism, which
                pays soft labor. If living labor is paid their circulative
                ground rent costs and constant reproductive capital (without
                expiry), poverty will increase generally, and lessen per
                capita/centile.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                <div
                  style={{
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 22px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  The quantity of actual material, in which the value of the
                  constant capital is incorporated, is altogether irrelevant to
                  the formation of value and the rate of profit, which varies
                  inversely to this value no matter what the ratio of the
                  increase or decrease of the value of constant capital to the
                  mass of material use-value which it represents. It is
                  different with variable capital. It is not the value it has,
                  not the labour incorporated in it, that matter at this point,
                  but this value as a mere index of the total labour that it
                  sets in motion and which is not expressed in it — the total
                  labour, whose difference from the labour expressed in that
                  value, hence the paid labour, i.e., that portion of the total
                  labour which produces surplus-value, is all the greater, the
                  less labour is contained in that value itself. (Marx, Capital
                  III.1 Profit [to] Surplus)
                </div>
                {!this.state.america && <br />}
                Social ground rent is fine. No expiration, nor future demand
                surrendered. For instance, industry-specific max-royalty payday
                loans will replace interest and principal over collateral, as
                consumer protection (overtime implied change orders) will falter
                to contracting technology r/scopebook.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Social capital is our issue, and ground rent is the cost of
                circulation, being storage and transport.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                <div
                  style={{
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 22px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  He is then asked whether merchants' bills of exchange
                  represent commodities which have been sold or shipped. He
                  denies that these bills represent the value of commodities in
                  the same way that a bank-note represents gold.
                  {!this.state.america && <br />}
                  {!this.state.america && <br />}
                  Aside from the stock-company business, which represents the
                  abolition of capitalist private industry on the basis of the
                  capitalist system itself and destroys private industry as it
                  expands and invades new spheres of production, credit offers
                  to the individual capitalist; or to one who is regarded a
                  capitalist, absolute control within certain limits over the
                  capital and property of others, and thereby over the labour of
                  others.
                  <i>
                    ’Merchants, manufacturers, etc., carry on operations much
                    beyond those which the use of their own capital alone would
                    enable them to do. …Capital is rather the foundation upon
                    which a good credit is built than the limit of the
                    transactions of any commercial establishment.'
                  </i>
                  {space}(Economist, 1847, p. 333.)
                </div>
              </span>
            </h1>
            <h4 style={{ margin: "0px", marginTop: "8px" }}>
              Would there be QE if the treasury owned no land?
              {/**​a trope in my def is ableism */}
            </h4>
            <div
              style={{
                color: "black",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 22px)",
                padding: !this.state.america && "10px",
                border: "1px solid",
                backgroundColor: "linen" //we know how it is made. eula, exclusion beyond 11/12
                //2/23 crazy unduly incentivized until proven otherwise
              }}
            >
              Communism is quite incomprehensible to our saint because the
              communists do not oppose egoism to selflessness or selflessness to
              egoism, nor do they express this contradiction theoretically
              either in its sentimental or ‘it its high-flown ideological form;
              they rather demonstrate its material source, with which it
              disappears of itself. The communists do not preach morality at
              all, as Stirner does so extensively. They do not put to people the
              moral demand: love one another, do not be egoists, etc.; on the
              contrary, they are very well aware that egoism, just as much as
              selflessness, is in definite circumstances a necessary form of the
              self-assertion of individuals.
            </div>
            {this.state.america && (
              <h3>
                Isn’t communism’s namesake reproductive commodity capital by
                labor without machine rent?{space}
                <span style={{ color: "grey" }}>
                  Don’t we "need" employment to make up for machine rent until
                  {space}
                  <a href="https://www.quora.com/How-have-socialist-and-communist-societies-been-developed-in-practice/answer/Nick-Carducci">
                    leisure
                  </a>
                  {space}
                  runs out?
                </span>
              </h3>
            )}
            How can market rates peak when the national account balance is
            negative? Can only the government borrow at the federal funds?
            Wouldn't homes be built notwithstanding mortgages?{space}
            <i>Ponzi consumer fraud protection is not business.</i>
            {this.state.america && (
              <h3>
                Why do{space}
                <a href="https://www.reddit.com/r/realeconomics/comments/ybef0w/what_do_economists_know_now_that_they_didnt_50/">
                  economists
                </a>
                {space}following Alfred Marshall perceive capital as physical
                assets instead of the{space}
                <a href="https://www.instagram.com/p/CkBS7n7LAJH/">
                  revenue-affording account
                </a>
                ?
              </h3>
            )}
            <h2
              style={{
                color: "cadetblue",
                margin: "4px 0px"
              }}
            >
              Don’t modern political scientist students read British? Hasn't the
              economic gambit been run by{space}
              <a href="https://saverparty.quora.com/How-is-profit-made-without-harm-1">
                19th century sociologists
              </a>
              ?{space}
              <i>
                What does this mean for the utility of education and our
                respective expectations for growth in the industry of fields?
              </i>
            </h2>
            Wouldn't checkable deposits less concentration behoove the
            pensioner?
            {space}
            <i>
              “Not really honesty without a choice [risk, game-made].” - Josh
              Howie
            </i>
            <div
              style={{
                color: "white",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                padding: !this.state.america && "10px",
                border: "1px solid",
                backgroundColor: "cornflowerblue"
              }}
            >
              <h1 style={{ margin: "4px 0px" }}>
                Non-perishable (durable) communism
              </h1>
              <h4 style={{ margin: "4px 0px" }}>
                I shall pay no more attention to the alternating variations of
                that value, than to the fluctuations of the relative value of
                both to
                {space}
                <a href="https://federalreserve.quora.com/Doesn-t-QE-prevent-1-5-of-the-U-S-being-delivered-to-bond-holders">
                  all other commodities
                </a>
                .
              </h4>
              <hr />
              “The condition of consumers at large, and consequently, amongst
              them, of the class of labourers affected by the innovation, is
              improved by the reduced value of the product that class was
              occupied upon. Besides, it would be vain to attempt to avoid the
              transient evil, consequential upon the intervention of a new
              machine, by prohibiting its "employment. If beneficial, it is or
              wiIl be introduced somewhere or other f its products will be
              cheaper than those of labour conducted on the old principle; and
              sooner or later that cheapness will run away with the consumption
              and demand. Had the cotton spinners on the old principle, who
              destroyed tile spinning-jennies on their introduction into
              Normandy, in 1783, succeeded in their object. France must have
              abandoned the cotton manufacture; every body would have bought the
              foreign article, or used some substitute; and the spinners of
              Normandy, who, in the end, most of them, found employment in the
              new establishments, would have been yet worse off for employment."
              (Say,
              {space}
              <i>Political Economy</i>)
            </div>
            {this.state.america && (
              <h3>
                If the GDP/yr to debt ratio is 1:1,{space}
                <a href="https://saverparty.xyz/nato">velocity</a>
                {space}of checking 1/10th m2, and debt outstanding 40 times
                checking, wouldn’t it take 400 years to pay off and more by the
                skew of income and{space}
                <a href="https://saverparty.xyz/global">indebtedness</a>
                {space}inequality?
              </h3>
            )}
            The{space}
            <a href="https://english.stackexchange.com/questions/282494/is-there-a-special-rule-for-using-the-word-gild-and-guild-as-verb-or-noun">
              guilded
            </a>
            {space}age
            <h3 ref={this.work} style={{ margin: "4px 0px" }}>
              Isn't technical growth deflationary while dynamic efficiency
              retractable?
            </h3>
            What is the use of education but secrets?{space}
            <a
              style={{ backgroundColor: "navy", color: "white" }}
              href="https://www.marxists.org/archive/marx/iwma/documents/1868/machinery-speech.htm"
            >
              Marx: work at 9 years of age
            </a>
            . Isn't the national poverty rate a measure of equality? Can’t an
            individual have a higher propensity to socially mobilize when
            poverty is common and all unemployment is inflationary? Aren’t
            homeowners loitering without restitution to savers by foreclosure?
            Isn’t the housing shortage caused by principal and interest above
            collateral? Hasn't capitalism caused the labor shortage?
            <br />
            <span style={{ backgroundColor: "navy", color: "skyblue" }}>
              <span style={{ backgroundColor: "salmon", color: "black" }}>
                growth is non-deflationary employ
              </span>
              {space}Didn't the Biden White House do a poor job with help to
              small business, the reopening of schools, and having shots in arms
              to regain jobs given the growth was not deflationary? Otherwise,
              what is the point of growth?
            </span>
            <br />
            rich salt neolibs 86 degrees/licensure class for WIPO (choose/vote
            your age)
            <br />
            is the anarchist-commie microeconomist contributor{space}
            <a href="https://beingstable.quora.com/When-did-inflation-end-1">
              crazy
            </a>
            ?
            <br />
            Is deflationary principal and interest above collateral real
            deflation? Doesn’t collateral take budget constraints without
            principal nor interest?
            <h2 style={{ margin: "4px 0px" }}>
              Non-
              <a href="https://adailyimpeachment.quora.com/Will-stimulus-help-business-and-the-cost-of-living">
                deflationary
              </a>
              {space}employment{space}
              <a href="https://census.quora.com/Isnt-the-national-poverty-rate-a-measure-of-equality-Can-t-an-individual-have-a-higher-propensity-to-socially-mobilize">
                retracts
              </a>
            </h2>
            <span style={{ backgroundColor: "skyblue" }}>
              <i>sociology is the study of roles</i>
              <br />
              management is ordinary, too
            </span>
            <br />
            <span
              style={{
                fontWeight: "normal",
                color: "white",
                backgroundColor: "black"
              }}
            >
              What is a sustainable growth rate? Wouldn't all excess non-
              <a
                style={{ color: "white" }}
                href="https://marx.quora.com/What-did-John-Stuart-Mill-and-Karl-Marx-agree-on-1"
              >
                deflationary
              </a>
              {space}
              employment be unsustainable by living definition?
            </span>
            {space}
            <i>
              Doesn’t a higher deficit cause inflationary employment? What do
              low taxes have to do with deflationary employment growth?
            </i>
            {space}
            <b>
              Is economic growth non-inflationary or deflationary employment?
            </b>
            {space}Isn’t non-deflationary unemployment a non-stagflationary
            recession?{space}
            <span style={{ color: "lightseagreen" }}>
              Isn’t a structure bought by an individual always “investment”
              while equipment, a “durable good”?
            </span>
            {space}Does the cost of{space}
            <a href="https://commie.dev/anarchy">living</a>
            {space}include employee benefits and exclude investment?
            <h4 style={{ margin: "4px 0px" }}>
              When a case proceeds, doesn’t a pair of acquitting jury members
              make the other not incompetent? Why would juries not handle{space}
              <a href="https://nickcarducciforsenate.quora.com/Should-the-U-S-reinstate-the-Glass-Steagall-Act-1">
                business permits
              </a>
              ?{space}
              <span style={{ color: "grey" }}>
                Why aren’t business permits made for end user license
                agreements? What prejudices and/or{space}
                <a href="https://regcops.quora.com/Aren-t-hospitals-impersonating-cops-when-they-involuntarily-commit-someone-based-on-a-testimonial-charge">
                  biases
                </a>
                {space}might a juror have without a certain financial interest
                beyond the plaintiff's will?
              </span>
            </h4>
            <h4 style={{ margin: "4px 0px" }}>
              police{space}
              <a href="https://thetax.party">state</a>
              {space}vs baker act{space}(dental records and video{space}
              <a href="https://humanharvest.info">or oz</a>)
            </h4>
            <span>
              Could GDP pay off debt even though most of it is credit income?
              <br />
              <i>
                Wouldn’t the UK take 50 years of current credit income to pay
                off its debts? Isn’t their investment outlook only relatively
                solid?
                {space}
                <span
                  style={{
                    fontWeight: "normal",
                    color: "white",
                    backgroundColor: "black"
                  }}
                >
                  How does an economy ever work its way out of debt without
                  suspending any more and wasting a lifetime on past demand?
                </span>
              </i>
              {space}
              <span style={{ color: "rgb(196, 180, 84)" }}>
                Don’t low taxes commensurately cause growth by non-private
                deficit spending QE?{space}
                <b style={{ backgroundColor: "navy" }}>
                  Does Say's law of labor demand not profess that rising costs
                  are from interest rates alone? Shouldn't all short-term growth
                  retract if it is non-deflationary to be considered long-term?
                </b>
              </span>
              {space}
              <span style={{ color: "firebrick" }}>
                Are taxes to instill investment in global synchronized QE?
              </span>
            </span>
            <br />
            <span style={{ backgroundColor: "blueviolet", color: "white" }}>
              Negotiations for asserting the universal between essential
              institutions and between quarter employee benefits for corporate
              taxes.{space}
              <i>
                Word salad{space}
                <a
                  style={{ color: "white" }}
                  href="https://rolloverinsurance.quora.com/Aren-t-hospitals-impersonating-cops-when-they-involuntarily-commit-someone-based-on-a-testimonial-charge"
                >
                  101
                </a>
                .
              </i>
            </span>
            {space}Why does the NHS have a waiting list? Wouldn’t a private
            healthcare market with a ban on insurance prevent overloaded
            appointments, extraordinary profits, professional inequality, and an
            unnatural labor shortage?
            {space}
            <span
              style={{
                fontWeight: "normal",
                color: "white",
                backgroundColor: "black"
              }}
            >
              Are foreclosures restitutive of loitering over third party donee
              beneficiaries' future demands?
            </span>
            <h4 style={{ margin: "4px 0px" }}>
              <a href="https://nlihc.org/era-dashboard">
                30 day max implausible use
              </a>
              {space}
              <i>is</i>
              {space}ascertainable.
              {space}
              <span style={{ color: "grey" }}>
                Why does Social Security give my parents my disability
                insurance?
              </span>
              {space}Why is lying without a plaintiff a high crime and/or
              misdemeanor? Wouldn't age and/or psychosis reasonably cause a
              similar victimless departure from reality?{space}
              <i style={{ color: "grey" }}>
                Isn’t diagnosis testimony an ethical{space}
                <a href="https://nickcarducciforsenate.quora.com/Would-you-vote-for-Nick-Carducci-in-order-to-determine-those-who-conflate-youth-drugs-crime-guns-and-or-car-accident">
                  problem
                </a>
                ?
              </i>
            </h4>
            What is the cause to the effect? Doesn't effect mean artifact,
            alone, "the economy, stupid?" &bull;{space}
            <a href="https://www.quora.com/unanswered/Is-a-threat-via-telecommunications-rather-acquitting-versus-said-online">
              kill me
            </a>
            .{space}
            <i>
              Are we really not allowed to call the cause an affect but we can
              use cause as a verb from the hip?
            </i>
            {space}If inflation were from the population, would it plunge into
            living labor{space}
            <a href="https://fred.stlouisfed.org/graph/?g=US9p">quarterly</a>?
            Isn't growth above inflation shrinkflation survey errors, income
            in-kind business costs, and long-term layoffs?{space}
            <span style={{ color: "cornflowerblue" }}>
              Won't the assets Alex Jones must sell depreciate the market? Why
              is this grounds if proceeds from the event is not even in
              proportion to the amount of relative time spent on citing the
              crazy victim's mother who blessed the shooter to Heaven?
            </span>
            {space}
            <i>
              Does the right want lower corporate taxes for higher employee
              benefit incentives?&nbsp;
            </i>
            {space}
            <span
              style={{
                fontWeight: "normal",
                color: "white",
                backgroundColor: "black"
              }}
            >
              Isn’t sharing of living costs social capital but for game-made
              risks?
            </span>
            {space}
            <h4 style={{ margin: "4px 0px" }}>
              Is budget a burden in socialized capital?Isn’t lending with
              interest and/or foreclosure a dishonest risk and surrendering the
              bid of a third party donee beneficiary?{space}
              <i style={{ color: "grey" }}>
                Why don't credit income earners feel foolish for{space}
                <a href="https://marx.quora.com/What-is-the-source-of-profit-according-to-Karl-Marxs-theory-1">
                  budget-making
                </a>
                ?
              </i>
            </h4>
            <h1 style={{ margin: "4px 0px" }}>
              advancement-profit-hidden-inflation-growth{space}
              <i style={{ fontSize: "16px" }}>
                Is the antichrist's{space}
                <a href="https://saltbank.org">negation</a>
                {space}christ (
                <a href="https://phyletic.quora.com/What-would-a-Marxist-say-to-an-anarchist-1">
                  necessarily
                </a>
                ) to{space}
                <a href="https://saverparty.xyz/jesus">slaughter</a>?
              </i>
            </h1>
            <h4 style={{ margin: "4px 0px" }}>
              Occupy Republicans · (
              <a href="https://asyluminportugal.quora.com">claims</a>) How does
              greed play a part in inflation?
            </h4>
            <h4 style={{ margin: "4px 0px" }}>
              15% GOP, 39% non voters, 52% universal{space}
              <a
                style={{ color: "white", backgroundColor: "black" }}
                href="https://www.quora.com/unanswered/Why-would-citizens-allow-the-government-to-surrender-their-future-demand"
              >
                over pub/priv surrendered future demand
              </a>
              .{space}
              <span style={{ fontWeight: "normal" }}>
                Isn’t technical advancement in emerging markets the source of
                growth with steady prices?
              </span>
              {space}
              Long term short term employment unemployment is recessionary?
              {space}
              <span
                style={{
                  fontWeight: "normal",
                  color: "white",
                  backgroundColor: "black"
                }}
              >
                It failed to deflate.
              </span>
              {space}
              ​I think Glass Steagall were implemented today no lending
              borrowings if it didn't then.{space}
              <span
                style={{
                  fontWeight: "normal",
                  color: "white",
                  backgroundColor: "black"
                }}
              >
                ​We are running out of labor reserves.
              </span>
            </h4>
            Deficit or safety?{space}
            <i>Democrats and republicans make.</i>
            <div style={{ backgroundColor: "firebrick", color: "white" }}>
              Isn't a recession a loss of non-deflationary employment and
              anymore inflationary is just that, while anymore deflationary is
              technological advancement in competition less dynamic efficiency
              and any more non-deflationary growth is square footage?
              <hr />
              Productivity by profits, employee benefits, and shrinkflation are
              growth that would otherwise be inflation. …A recession recovery is
              an increase of non-deflationary employment. …A structural growth
              is [an increase in] deflationary employment. Real gdp is merely (a
              fulcrum) to assess employment growth as either recessionary or
              structural by productivity less labor productivity. DO NOT ATTEMPT
              TO USE ALL (GROSS) PURCHASES FOR NORMALIZING THE
              NON-ACCELERATING-INFLATION RATE OF (NATURAL) UNEMPLOYMENT. Real
              GDP is only of non-zero growth (until living labour exhausts its
              reserve army) or degrowth, when profits, employee benefits, and
              shrinkflation [or margin by fixed costs sinking technically
              competitive advancements (re: not necessarily “dynamic
              efficiencies” for luxury but price declines)] are counted in GDP
              deflator. I guess I might try{space}
              <a
                style={{ color: "lightskyblue" }}
                href="https://www.quora.com/How-is-capitalism-bad-for-society/answer/Nick-Carducci"
              >
                deducting CPI from GDP again…
              </a>
              <hr />
              <div style={{ backgroundColor: "lightseagreen" }}>
                Isn’t the GDP Price Deflator incorrect in that Real GDP growth
                doesn’t account for layoffs, shrinkflation, cost to revenue
                employee benefits in surveys, nor between essential
                institutions? Wouldn’t deflating GDP be done without steady
                price profits?
                <hr />
                Does the right mean by “work requirements” an assumption that
                employers will hire the able bodied and literate? Why does the
                state always assume things about{space}
                <a href="https://2024nj.com/disability">us</a>?
              </div>
              <hr />
              Isn’t hard currency borrowing and fractional reserve lending
              objectively the same? Do torts that force the sale of assets, not
              fruits from the crime, not crash the market? Isn’t the only profit
              beyond barter to be made by expiry, non-compete, secrecy, and/or
              shared-capital? Aren’t bookmakers and contractors more honest than
              the integrated-marketing, investment-and-payment platform? Are
              Whips pollsters or what? Isn’t a multiple season contract a
              non-compete agreement? Doesn’t universal healthcare work because
              private insurance doesn’t? If a physician cannot rollover
              insurance, why don’t they settle for an individual’s capacity to
              pay and take their budget constraints? Isn’t rollover insurance a
              non-compete agreement?
              <hr />
              Are non-compete agreements legal or exclusionary? Isn’t a warranty
              a surrendering of someone else’s future demand? Why would
              inflation be natural? Isn’t non-inflationary income reproductive?
              Does employment deflate like technology? Isn’t the only valuable
              income non-inflationary? Why don’t economists consider
              non-deflationary employment inflationary? Isn’t good will
              accounting non-concurrentable speculation? Will a corporate tax
              increase not incentivize more employee benefits?
              <br />
              Is the labor shortage a more worrisome measure than utilization
              for the longevity of humanity? Doesn’t service for living
              reproduce production while future demand, dishonest, and/or
              risk-sharing is not? Doesn’t a capitalist’s income falter in
              production for such requires more work to be done afterwards
              immediately thereafter? Do professional sports players feel silly
              working for cost bearing services like banks since they would be
              playing without, or do they not much have a choice than what the
              league media does? Isn’t the employment short term beyond the real
              GDP by inflation though cost survey bound shrinkflation, cost to
              revenue employee benefits, and quarterly profits? Why does net
              worth include good will? Tort will. Profit beyond barter is
              social.
              <hr />
              What is the point of raising rates if there is not enough
              available checkable deposits to reconcile the balance? How can I
              sue Connecticut for the money they require of Alex Jones beyond
              his cash assets?
              <hr />
              If a dishonest game isn't considered naturally normal, why then is
              an indirect market? Doesn't spending negate the balance sheet? How
              can one profess to wish for less spending no matter the balance?
              Can't a politician with an investment in the index funds be
              considered insider traders by the weight of subsidiaries? Can a
              competitor be an inside trader? How does the anarchist act against
              social capital without their own discernment of morals? If the
              dollar is fiat, do bonds own the treasury? Don’t leftist
              libertarians wish for a civil business court direct democracy of
              sorts? Are anarchists protesters?
              <hr />
              Would a hard money activist be satiated by mutual forgiveness for
              loitering surrendered future demands? What is the difference
              between hard money without a reserve requirement and lending the
              borrowed-, circulating-coin?
            </div>
            <h4>balance less good will, surrendered tort</h4>
            Top 3m people have $300k and top 400 have $300m Maybe 50k each $30m.
            cash:debt * annual icome is all I can offer the wise. social
            security is like debt, rolling good will. developmentally disabled
            (non-speaking) and injured (malarkey notwithstanding).
            <br />
            Non compete agreement payday padrone
            <h2>deduct employed from real gdp for square footage</h2>
            <i>
              I can make the rich pay the most for the cops. The deal war or
              butter for plaintiff tech{space}
              <b>I’ll only force sale of winnings after crime</b>
            </i>
            {space}
            Inflation in profits, employment benefits, and shrinkflation or tech
            guild on their own fixed costs is growth in the corporate economy.
            {space}
            <i>
              What is the point of raising rates if there is not enough
              available checkable deposits to reconcile the balance?
            </i>
            <br />
            {!this.state.america && (
              <Cable
                style={{ width: "100%", maxWidth: "200px" }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/ft5aoght8erkrsf/Screen%20Shot%202022-10-12%20at%209.49.07%20AM.png?raw=1"
                }
                float={"right"}
                title="gbnews"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop} //"kicked out, too strong, helped other people with their work. 1'31" Hans Niemann (Lex F.)
              />
            )}
            <h2 style={{ margin: "4px 0px", lineHeight: "12px" }}>
              The anarchy of{space}
              <a href="https://www.quora.com/What-was-Karl-Marxs-explanation-of-social-inequality-in-his-theory-of-historical-materialism/answer/Nick-Carducci">
                sanity
              </a>
              {space}
              <span style={{ fontSize: this.state.america ? "0px" : "12px" }}>
                Why do we monetarily tighten when the good will exceeds the
                concurrentable balance?{space}
                <span style={{ color: "grey" }}>
                  How would a housing crisis lose voters unless the youth
                  continue not to want to be competitive in the workplace after
                  {space}
                  <a href="https://www.marxists.org/archive/marx/iwma/documents/1868/machinery-speech.htm">
                    about 9
                  </a>
                  ?
                </span>
                {space}
                <i>The public deficit is the price the gerontocracy makes.</i>
                {space}
                <i>Yes</i>, inelasticity has a maximum marginal product revenue
                but for the market industry (or cumulative product for one firm)
                total the unitary demand is the last trade maximum.
                {space}
                <span style={{ color: "grey" }}>
                  Perfectly unitary would be assumed by equal opportunity &
                  rationality between Say’s labor-earned demand.
                </span>
                {space}
                <i>
                  Doesn't capitalism require pensions to work for people as it
                  happens in reality? Doesn't the increase of living labor prove
                  it is a failure?
                </i>
                {space}&bull;{space}Isn't economic growth shrinkflation,
                profits, and/or employee benefits as surveyed-prices{space}
                <a
                  style={{ color: "red" }} //last against sidelines look in (to remain onside from spot)
                  href="https://regcops.quora.com/Doesnt-capitalism-require-pensions-to-work-for-people-as-it-happens-in-reality-Doesnt-the-increase-of-living-labor-pr"
                >
                  less
                </a>
                {space}actual?
                {space}
                <span style={{ color: "cornflowerblue" }}>
                  Why does the National Bureau of Economic Research count
                  inflation in employee benefits, profits, and shrinkflation as
                  growth?
                </span>
                {space}Why is welfare given to anyone but the injured and
                developmentally disabled? Why must benefits rise with inflation?
                Isn't inflation unnatural?
                {space}
                <span style={{ fontSize: "15px" }}>
                  If inflation weren’t a survey wouldn’t growth be inflation
                  unless we are overeating? When are costs “profits” except
                  individually? Isn’t the cost of living a sum of prices?{space}
                  <span style={{ color: "grey" }}>
                    Doesn’t the maximum general rate of poverty equate potential
                    income equality?
                  </span>
                  {space}
                  <span style={{ color: "cadetblue" }}>
                    <i>
                      Doesn’t social welfare increase GDP by inflation and
                      slower, lower-quality outcomes? Is there a merit to having
                      economic inequality?
                    </i>
                    {space}Nominally growing (
                    <span style={{ color: "grey" }}>
                      out of{space}
                      <a href="https://census.quora.com">poverty</a>
                    </span>
                    ), shrinking powers (
                    <span style={{ color: "grey" }}>
                      of labor productivity's cost to revenue
                    </span>
                    ).
                  </span>
                </span>
              </span>
            </h2>
            <h2 style={{ margin: "4px 0px", lineHeight: "12px" }}>
              Aren’t the old rather sloth-like{space}
              <span
                style={{
                  fontSize: this.state.america ? "0px" : "12px" /**no br */
                }}
              >
                since we today work more than ever?{space}
                <i>
                  Do hard money activists want to hold the individual lender
                  from lending borrowed funds as a bank?
                  {space}
                  <span style={{ color: "grey" }}>
                    Otherwise, how is their policy proposal different than the
                    status quo borrowing the circulating hard money?
                  </span>
                </i>
                {space}Do these people not care about labor-earned?{space}
                <i>
                  Would a hard money activist be satiated by mutual forgiveness
                  for loitering surrendered future demands?
                </i>
                {space}
                <span style={{ color: "grey" }}>
                  What is the difference between hard money without a reserve
                  requirement and borrowing the circulating coin?
                </span>
                {space}Why do each surveys, technological competition, and
                dynamic efficiency make growth from prices by shrinkflation,
                profits, and/or employee benefits, respectively?
              </span>
            </h2>
            <h4
              style={{
                color: "white",
                backgroundColor: "rgb(165,75,205)",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              Anarchy morale, relativist in the public good will right to own.
              <br />
              <a
                style={{
                  color: "lightsalmon"
                }}
                href="https://www.youtube.com/watch?v=W-Vv1vysGzE&t=0s"
              >
                The right-left divide now can be discerned by investment in the
                public deficit{" "}
                <span role="img" aria-label="top-right">
                  {" "}
                  ↗️
                </span>
                private deficit
                <span role="img" aria-label="bottom-right">
                  ↘️
                </span>
                {space}tax
                <span role="img" aria-label="bottom-left">
                  ↙️
                </span>
                spend{" "}
                <span role="img" aria-label="top-left">
                  ↖️
                </span>
              </a>
              <br />
              <a
                style={{
                  color: "lightsalmon"
                }}
                href="https://igg.me/occupywallstreet"
              >
                The repressive power of the police stands in bolder relief.
              </a>
              {space}We hate the{space}
              <a
                style={{
                  color: "lightsalmon"
                }}
                href="https://generalmaintenanceunit.quora.com"
              >
                government and like the cops/advocates
              </a>
              {space}protecting those who{space}
              <span style={{ color: "cornflowerblue" }}>
                cannot afford civil business lawyers. This realistic coalition
                is amongst mostly non-voters
              </span>
              , the far-right, and far-left is on the r/antifinance line.
            </h4>
            {space}
            <i>
              'Do people ever mistake you for a libertarian?
              <br />
              I've noticed that some people have a tendency to hear anarchist
              criticism of the state and think it comes from a{space}
              <b>libertarian</b>
              {space}
              perspective (specifically referring to the subset of Republicans
              who appropriated the word). Or even worse, they think it makes you
              a "conservative" in general. Does this happen to you?'
            </i>
            <br />
            <span
              style={{
                transition: ".3s ease-in", //how's
                fontSize: this.state.openProtesters ? "" : "0px",
                width: "max-content",
                maxWidth: "calc(100% - 40px)"
              }}
            >
              <button
                style={{
                  backgroundColor: "black",
                  color: "white"
                }}
                onClick={() =>
                  this.setState({
                    openProtesters: !this.state.openProtesters
                  })
                }
              >
                Are anarchists protestors when they have no{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.quora.com/unanswered/Isnt-the-named-U-S-federal-vaccination-policy-mandate-a-riot-of-private-citizens"
                >
                  name
                </a>
                ?
              </button>
              {this.state.openProtesters && <br />}
              <i>
                u/Lylathevegan: I more often than not get mistaken for a USSR
                fan because I'm a communist. If anyone has ever mistaken me for
                a "right-libertarian" they've never brought it up. I have had
                people tell me that just by virtue of being an anarchist I'm
                right wing (from leftists believe it or not), which is really
                just mind boggling.
                {this.state.openProtesters && <br />}
                u/Publictheatreisgood: That’s really odd that{space}
                <a href="https://commie.dev/anarchy">
                  a supposedly leftist would call you right wing for being
                  anarchist
                </a>
                . The whole principle of communism is stateless, classless,
                moneyless. With stateless and classless also being key
                principles of anarchism.
              </i>
              {this.state.openProtesters && <br />}
              Obviously non-anarchist lefties like welfare for the non
              developmentally disabled nor injured (from gov). Anarchist lefties
              either are nihilistic (and have nothing to do with politics) or
              want to ban finance.
              {this.state.openProtesters && <br />}
              <i>
                u/WilfredSGriblePible: 'Are you asking if every anarchist
                protests, or if every protestor is an anarchist?'
              </i>
              {this.state.openProtesters && <br />}
              Why would you not present how they are different here? May I
              suggest anarchists that protest are relativists, and nihilists
              will not? I cannot abide by the sadistic trope of Nietzsche after
              glancing at his work recently.
            </span>
            <h4 style={{ margin: "4px 0px" }}>
              'What is the labour theory of value? How does it relate to
              capitalism according to Karl Marx and Adam Smith?'
            </h4>
            Capital is a matter of accounts, that can be expropriated as the
            moral.
            <h4 style={{ margin: "4px 0px" }}>
              Why aren't relative living conditions asylum-making?
            </h4>
            <i>
              Why do Republicans have a problem with rainbow fentanyl? Aren’t
              the consumers of rainbow fentanyl aware?{space}
              <span style={{ color: "grey" }}>
                Why must the government administer a drug for it to be legal?
                Does the media count the depletion of strategic oil reserves as
                production? Isn't the Biden energy policy an inventory deficit?
                When reports say we are down 1m barrels a day, do they count the
                strategic oil reserves as produced oil?
              </span>
            </i>
            <br />
            <span
              style={{
                color: "cadetblue"
              }}
            >
              Isn’t switching insurances to save proof of a net cost towards the
              end product? Why do we permit this prisoners’ dilemma in public
              policy?
            </span>
            <br />
            <span
              style={{
                color: "salmon"
              }}
            >
              Isn’t educational success a measure of hand gestures in the age of
              the internet? How does the working class own portfolios if the
              bottom 90% have $5k on average in cash?
            </span>
            <br />
            <span style={{ color: "rgb(196, 180, 84)" }}>
              What does membership to the UN entail but a constitutional embargo
              of otherwise modularly-offensive war crimes as self defense, and
              isn’t the right to ownership as the defined-‘slavery’ surrendering
              future demand (and/or loitering)?
            </span>
            <h4 style={{ margin: "4px 0px" }}>
              What is it about capitalism that creates hierarchies and class
              distinctions?
            </h4>
            <i>
              BA in Political Science & Economics, Johns Hopkins University
              (Graduated 2015)
            </i>
            <br />
            <span
              style={{
                color: "cadetblue"
              }}
            >
              Social capital by expiry, non-compete, secrets, and/or
              risk-sharing instead of creation.
            </span>
            <br />
            <span
              style={{
                color: "salmon"
              }}
            >
              Surrendered good will as the right to own for extraordinary living
              labor.
            </span>
            <br />
            <span style={{ color: "rgb(196, 180, 84)" }}>
              And a capital-estranged worker by the properties of production.
              {/**https://wholesalesupplydemand.quora.com/What-is-merchant-capitalism-1 */}
            </span>
            <h4 style={{ margin: "4px 0px" }}>
              When people speak of{space}
              <a href="https://realecon.quora.com">growth</a>, do they mean
              extraordinary return as inflation above costs?{space}
              <i style={{ color: "grey" }}>
                Isn't wage growth inflation, cost surveys notwithstanding for
                shrinkflation, profits, and employment benefit costs to revenue
                between quarters?
              </i>
              {space}Isn't extraordinary profit expiry, non-compete, secrets,
              and/or risk sharing of future demand instead of making a game?
            </h4>
            Surrendered freedom to own (-in) the{space}
            <a href="https://census.quora.com">public good will</a>.{space}
            Don't the best companies compete on technology and treat prices as
            complementary? Is QE an exercise in{space}
            <a href="https://saverparty.xyz">utility</a>?
            <h4 style={{ margin: "4px 0px" }}>
              Why are Wall St. scared of losing their jobs when they only
              inflate living labor?
            </h4>
            Is extraordinary profits by expiry/non-compete/secrets self-stunting
            shareholders of the concentrated market stock (
            <a href="https://federalreserve.quora.com">
              good will non-concurrentable market value above
              concurrentable-fair
            </a>
            )? the best for shareholders?
            <br />
            Paycheck and job inflation/ leisure shrinkflation{space}
            <i style={{ color: "grey" }}>
              Doesn’t less service work count as technical{space}
              <a href="https://froth.quora.com">deflation</a>? How else can the
              CPI survey include gross domestic purchases?
            </i>
            {space}Does education cause technical deflation?{space}
            <i style={{ color: "grey" }}>
              Does the best education require body language or open/proper
              {space}
              <a href="https://bureau.quora.com">documentation</a>?
            </i>
            {space}Aren’t education subsidies elastic for secrets?{space}
            <i style={{ color: "grey" }}>
              In a{space}
              <a href="https://marx.quora.com">communist</a>
              {space}society, would people only vote on desist orders because
              every law is already written?
            </i>
            {space}Is atomicity debatable?{space}
            <i style={{ color: "grey" }}>
              Isn't money elastic to price as the individual is elastic to
              {space}
              <a href="https://epiology.quora.com">nature</a>?
            </i>
            {space}Isn't wage growth inflation, cost surveys notwithstanding for
            shrinkflation, profits, and employment benefit costs to revenue?
            {space}
            <i style={{ color: "grey" }}>
              Why do Republicans think fentanyl users aren’t voluntarily
              overdosing and{space}
              <a href="https://parcelpolice.quora.com">blame China</a>
              {space}without evidence?
            </i>
            {space}Why is{space}
            <a href="https://cdlf.quora.com">J.P. Morgan Chase</a>
            {space}worried about a recession but their decadal soft-labor
            inflation made long-term growth?{space}
            <i style={{ color: "grey" }}>
              Less accrual good will, "tighten belt", "full employment
              recession, poorer without a job?" 'Judge' Wienberg.
            </i>
            {space}"'Unknown impacts of quantitative tightening' [(we know there
            isn't enough money)] hurt every business."{space}
            <i style={{ color: "grey" }}>
              What is the difference between a university and a state
              certification?
            </i>
            <h4 style={{ margin: "4px 0px" }}>
              Do{space}
              <a
                style={{ color: "rgb(195, 151, 103)" }}
                href="https://scopebook.quora.com/Do-software-developers-usually-promise-more-than-they-can-achieve-before-withholding-the-partial-products-and-or-keeping"
              >
                software developers
              </a>
              {space}usually promise more than they can achieve before
              withholding the partial products and/or keeping the escrow and
              wages?{" "}
              <i style={{ color: "grey" }}>
                Are escrow and/or partial products delivered upon the
                dissolution of a general “half now, the other half later”
                contract?
              </i>
              {space}Doesn’t free of charge mean you already paid and/or have no
              choice in paying?
            </h4>
            Didn’t Glass Steagall force commercial banks to borrow for loans
            instead of lend deposits?{space}
            <i>
              Was an investment not allowed to be called, “savings”, nor bonds,
              an “investment”?
            </i>
            {space}
            <span style={{ color: "firebrick" }}>
              <a href="https://vaults.quora.com/Do-commercial-banks-lend-borrowings-Are-there-even-any-commercial-banks-that-don-t-hold-deposits-at-all">
                Do commercial banks lend borrowings?
              </a>
              {space}Are there even any commercial banks that don’t hold
              deposits, at all?
            </span>
            {space}
            <span style={{ color: "darkgreen" }}>
              <i>Other than integrated marketing</i>, why might a commercial
              bank that{space}
              <b>
                lends income and profits from borrowings from its central bank
              </b>
              {space}
              also perform as a transaction-fee based payment processor?
            </span>
            {space}
            <a style={{ color: "navy" }} href="https://vau.money">
              Wouldn't Glass Steagall have be successful in separating
              commercial banking from investments if a natural return on capital
              storage were rather transaction-fees and not deposits that's
              called "savings" from investment?
            </a>
            {space}
            <i>'no return is the highest risk'</i>
            <h4 style={{ margin: "4px 0px" }}>
              <span style={{ fontWeight: "normal" }}>
                Isn't student loan relief a treasury bond bailout that the
                American people, in fact, do not want?
              </span>
              {space}
              Bernie Sanders: "No full-time worker in this country should be
              living in poverty. None."{space}
              <span style={{ fontWeight: "normal" }}>
                <i>A third of the nation will always be living in poverty</i>
                {space}
                <span role="img" aria-label="face palm">
                  🤦🏽‍♂️
                </span>
                .{space}
                <span style={{ color: "lightskyblue" }}>
                  Poverty = income rate below third national despondency of
                  living expenses (FCSU).
                </span>
              </span>
            </h4>
            <i>
              Why would there be a deficit of inbound competition but for
              accounts of social capital?
            </i>
            {space}Isn’t a recession always in long-term employment but for
            technical short-term inefficiencies?
            <br />
            <span>
              <span
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openLoitering ? "" : "0px",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)"
                }}
              >
                <button
                  style={{
                    textDecoration: "underline",
                    backgroundColor: "black",
                    color: "white"
                  }}
                  onClick={() =>
                    this.setState({
                      openLoitering: !this.state.openLoitering
                    })
                  }
                >
                  Loitering
                </button>
                {space}
                The{space}
                <a href="https://insurancebenefits.quora.com/Is-term-life-insurance-for-the-customer-s-benefit-1">
                  aggregate consumer
                </a>
                {space}is harmed moreso than a spread profit’s game of chance,
                because life is not a game. Rather than creating a risk for the
                game, the risk is shared, causing the payout to increase price
                of an already existing market instead of adding to a new one as
                a casino and/or horse-racing would
              </span>
              , or{space}
              <i>
                abet a recovery/structural (recessionary-/dynamic-gap) procedure
              </i>
            </span>
            <h4 style={{ margin: "4px 0px" }}>
              Natural Rate of{space}
              <a href="https://comlib.quora.com/Wouldnt-the-natural-rate-of-interest-be-confirmed-by-deflationary-investment-as-a-percentage-of-consumption">
                Capital Interest Return
              </a>
              {space}
              <span style={{ color: "grey" }}>
                (return to capital{space}
                <b>as</b>
                {space}
                <i>Labor as all of capital production</i>)
              </span>
            </h4>
            <div style={{}}>
              <span
                style={{ backgroundColor: "rgb(196, 180, 84)" }}
                //"rgb(255, 87, 51)"
              >
                Isn’t socially-expanded capital amended by expirations and/or
                exclusions? Isn’t a price gain, ‘labor’, and not-ever a per
                capita quantity increase of capital but for socially-expanded
                capital?
              </span>
            </div>
            {space}
            <i>
              Wouldn’t a recession of long-term employment be without outbound
              inflation?
            </i>
            {space}Isn’t wage growth always short-term employment but for
            dynamic long-term efficiency?
            {this.state.america && (
              <h3 style={{ margin: "4px 0px", backgroundColor: "salmon" }}>
                Wouldn't the Federal Reserve be unable to reverse split
                checkable deposits into the balance good will value? Isn't the
                Federal Reserve operating as a treasury debit surplus? Won't
                "savings" repossess these electronic funds without QE?
              </h3>
            )}
            {this.state.america && (
              <h4 style={{ margin: "4px 0px" }}>
                "Interest rate{space}
                <a href="https://www.quora.com/In-the-context-of-a-Great-Depression-would-it-be-possible-or-make-sense-for-everyone-to-forgive-each-other-s-debt-and-start-over/answer/Nick-Carducci">
                  basis
                </a>
                "
              </h4>
            )}{" "}
            <a href="https://census.quora.com/Would-cementing-the-entire-world-appease-the-structural-growthers">
              Doesn’t structural growth turn into a technical efficiency but for
              rental investment?
            </a>
            <h4 style={{ margin: "4px 0px" }}>
              What's the difference between the below-full employment
              equilibrium and the recessionary gap? Is it just the equilibrium
              factor?
            </h4>
            The recessionary gap assumes the economy is currently in
            equilibrium, and below-full employment equilibrium assumes it was
            before.{space}
            <i>
              However, equilibrium can be lower, before short-term inflationary
              employment becomes the “natural”/fair long-term rate of
              production.
            </i>
            {space}
            <a href="https://www.quora.com/unanswered/Doesn-t-inflation-of-prior-years-get-confused-as-growth">
              Doesn’t inflation of prior years get confused as growth?
            </a>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            The reserve army of labor is that power{space}
            <span style={{ color: "rgb(165,75,205)" }}>[foresaken]</span>
            {space}in{space}
            <span style={{ color: "rgb(165,75,205)" }}>[a]</span>
            {space}short term employment
            <span style={{ color: "rgb(165,75,205)" }}>
              ['s personal return]
            </span>
            .{space}
            <i>
              Capitalist economists assume recessions can happen at the natural
              rate of unemployment, but Communists believe recessions can only
              happen when short term employment is already there to poorly pick
              up the slack with self-extended social capital accounts.
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            The{space}
            <i>equilibrium factor</i>
            {space}is apparent{space}
            <b>at all points</b>
            {space}along the
            {space}
            <i>recessionary gap, this gap</i>
            {space}being{space}
            <b>the difference</b>
            {space}between expenditure that is assumed to natural and less, as
            ever (the{space}
            <i>
              <a href="https://www.investopedia.com/terms/b/belowfullemploymentequilibrium.asp">
                Aggregate Expenditure graph
              </a>
              {space}
              has output to inflation discounted production)
            </i>
            .
            {!this.state.america && (
              <a href="https://www.investopedia.com/terms/b/belowfullemploymentequilibrium.asp">
                <Cable
                  style={{ width: "100%" }}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/4wi512m0fk5lvn3/Screen%20Shot%202022-10-07%20at%2010.59.51%20AM.png?raw=1"
                  }
                  //float={"left"}
                  title="https://www.investopedia.com/terms/b/belowfullemploymentequilibrium.asp"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </a>
            )}
            <i style={{ backgroundColor: "lightgrey" }}>
              Right now, we have an unnatural rate of unemployment lower than
              normal, historically, due to so much inflationary short term
              social capital account revenue, before our snapshot analysis
              assumes the natural rate of long-term unemployment, inflationary
              only thereafter (and deflationary employment, as short-term would
              like it but for the price taking bid for labor supply).
            </i>
            {space}
            <b>
              Isn’t naturally new unemployment unnatural unless starting from a
              dynamic gap in real GDP?
            </b>
            <br />
            <br />A recession (a real loss of the GDP rate) is inflationary
            unemployment, and this only happens to long-term employment, either
            to be recovered from or empowered by uncrowding short-term
            employment.
            {space}
            <i>
              Less long-term expenditure and more will employ recessionary and
              dynamic equilibrium, respectively.
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            When recessions (or stagflation) happen, long-term employment is
            lost because inflation occurs commensurately with unemployment.
            Starting from a dynamic/luxury growth gap, however, a recession is
            {space}
            <i>still</i>
            {space}a loss of long term employment, leaving only short term.
            {space}
            <i>
              Any deflationary affectations more than unemployment is considered
              a loss of short term employment.
            </i>
            {space}
            <b>
              Any inflationary affectations more than new unemployment is
              certainly short term employment remaining, or gained on-net.
            </b>
            {space}An affect with commensurate inflation and degrowth exactly is
            a natural recession on competitive, technical grounds.{space}
            <i>
              Any more can be acclaimed to be short term employment, on-net.
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Isn’t production growth over demand{space}
            <i>technically better than</i>
            {space}inventory growth{space}
            <b>for a lower total cumulative average price</b>?
            <br />
            Not necessarily will a lower price occur, but yes.{space}
            <i>
              Technical efficiency is the complementary covalency of supply and
              demand, so the technical betters are in price now, not later…
            </i>
            {space}Does subsidy and/or technology help social mobility? The
            problem with subsidy is that{space}
            <a href="https://bankingisnotabusiness.quora.com/Why-did-Marx-predict-the-law-of-falling-profits-in-the-long-run-1">
              labor (in comparison to capital) are already the price takers
            </a>
            .
            <br />
            <div
              style={{
                backgroundColor: "rgb(200,100,170)",
                margin: !this.state.america && "10px",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 40px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              <h4 style={{ color: "white", margin: "4px 0px" }}>
                What happens to equilibrium price and quantity when the market
                supply curve shifts right or left?
              </h4>
              <div
                style={{
                  boxShadow: "inset 0px 0px 5px 5px green",
                  backgroundColor: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)",
                  padding: !this.state.america && "10px",
                  border: "3px solid"
                }}
              >
                Depending on the consistency/propensity of demand, a shift of
                dynamic-complementary demand{space}
                <i>
                  (on the long-term plane of unemployment to cardinal price
                  change comparisons without aggregate dynamic efficiency nor
                  recessionary gaps)
                </i>
                {space}right happens when income-budget is relieved.
                <div
                  style={{
                    backgroundColor: "rgb(200,100,170)",
                    margin: !this.state.america && "10px",
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 40px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid"
                  }}
                >
                  <h4 style={{ color: "white", margin: "4px 0px" }}>
                    <span
                      style={{
                        color: "mediumaquamarine",
                        WebkitTextStroke: ".8px linen"
                      }}
                    >
                      Is wage growth being inflation politics?
                    </span>
                    {space}•{space}
                    <i>
                      Isn’t the gerontocracy and/or soft labor apparent from
                      skill-based income inequality?
                    </i>
                    {!this.state.america && <br />}
                    {!this.state.america && <br />}
                    'Why does an increase in income shift the demand curve for
                    goods to the right but not for money?'
                  </h4>
                  <div
                    style={{
                      boxShadow: "inset 0px 0px 5px 5px green",
                      backgroundColor: "white",
                      transition: ".3s ease-in",
                      width: "max-content",
                      maxWidth: "calc(100% - 40px)",
                      padding: !this.state.america && "10px",
                      border: "3px solid"
                    }}
                  >
                    Isn’t a price gain, ‘labor’, and not-ever a per capita
                    quantity increase of capital but for socially-expanded
                    capital? In short, money is universal and a market that
                    shifts right with new money is assumed to be complementary
                    to the individual’s general budget.
                  </div>
                  <h4 style={{ color: "white", margin: "4px 0px" }}>
                    An increase of income will allow for more demand of a
                    complementary goods{space}
                    <i>
                      (or, perhaps the budget constraint is relieved by
                      technology in the other market to afford more)
                    </i>
                    .
                  </h4>
                </div>
                However, a relieved budget constraint by price taking on (i) the
                whole of living, (ii) a new margin, or (iii) surrendered
                technology will cost more for the same, and cardinal price being
                so (such that it is), the y-axis is implicitly $% change.
              </div>
              <h4 style={{ color: "white", margin: "4px 0px" }}>
                Isn’t money/technology elastic towards inelasticity as
                supply/budget is cumulatively/individually a price maker? •
                {space}
                <i>
                  Doesn’t price being cardinal imply that the intercept can be
                  negative?
                </i>
                <br />
                <br />
                Demand earned by other markets is Say’s law, so much like
                Ricardo’s crowding of powers in accounts receivable versus paid.
              </h4>
              ‘If the reward should at any time be less than what was requisite
              for this purpose, the deficiency of hands would soon raise it; and
              if it should at any time be more, their excessive multiplication
              would soon lower it to this necessary rate. The market would be so
              much understocked with labour in the one case, and so much
              overstocked in the other, as would soon force back its price to
              that proper rate which the circumstances of the society required.’
              (Smith)
              <br />
              <div
                style={{
                  backgroundColor: "white",
                  margin: !this.state.america && "10px",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid"
                }}
              >
                ’Wherever a great deal can be made by the use of money, a great
                deal will be given for the use of it; wherever little can be
                made by it, little will be given.’ (Adam Smith, WON, Vol. I, p.
                79)
                <br />
                <br />
                ’The more a commodity comes to be manufactured — the more it
                becomes an object of manufacture — the greater becomes that part
                of the price which resolves itself into wages and profit in
                proportion to that which resolves itself into rent. In the
                progress of the manufacture of a commodity, not only the number
                of profits increases, but every subsequent profit is greater
                than the foregoing; because the capital from which it is derived
                must always be greater. The capital which employs the weavers,
                for example, must always be greater than that which employs the
                spinners; because it not only replaces that capital with its
                profits, but pays, besides, the wages of weavers; and the
                profits must always bear some proportion to the capital.’ WON,
                Vol. I, p. 45)
              </div>
              It is furthermore appropriate to mention at this point the
              extensive introduction of female and child labor, in so far as the
              whole family must produce a larger quantity of surplus-value for a
              certain capital than before [,] even in case the total amount of
              their wages should increase, which is by no means general.
              <br />
              <br />
              That portion of the working-class, thus by machinery rendered
              superfluous, i.e., no longer immediately necessary for the
              self-expansion of capital, either goes to the wall in the unequal
              contest of the old handicrafts and manufactures with machinery, or
              else floods all the more easily accessible branches of industry,
              swamps the labour-market, and sinks the price of labour-power
              below its value [if prices do not hold to margins].
            </div>
            Marx invented social capital as extended nature, surplus value was
            Adam Smith and substitutive supply by earned demand, Jean Baptiste
            Say. Say also used the word expiry nicely here as the pain-point of
            social capital in rent as investment:
            <br />
            <div
              style={{
                margin: !this.state.america && "10px",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 40px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              ’Indeed, the tenant himself may improve the ground at his own
              expense; but he only derives the profit from this capital for the
              duration of his lease, with the expiry of which it remains with
              the proprietor of the land;’
            </div>
            Isn’t production growth over demand{space}
            <i>for a lower total cumulative average price</i>
            {space}technically{space}
            <b>better than inventory growth</b>?{space}
            <i>
              Does inventory growth even matter for technical efficiency while
              the consumer is a price taker beyond their budget constraints by
              expiration and/or non-compete?
            </i>
            <br />
            <br />
            <i>
              Funds to treasury with the most developed salt - spoof docket
              plaintiff tax.
            </i>
            {space}Isn't borrowing surrendering the public good will of the
            right to own?{space}
            <b>
              Aren't the rentier, machine-rent secret makers (to sell in terms
              of accounting capital)?
            </b>
            <br />
            <i>
              less and less{space}
              <a href="https://commie.dev/socialcapital">capitalists</a>
            </i>
            {space}
            <span role="img" aria-label="pirate flag">
              🏴‍☠️
            </span>
            {space}the anarchists of production{space}
            <span role="img" aria-label="light bulb">
              💡
            </span>
            &nbsp;
            <i>
              Isn't real growth short-term inflation but for square footage?
              Isn't that{space}
              <a href="https://www.quora.com/Are-conservatives-against-annexation">
                finite
              </a>
              ?
              {/* as pilgrims or I guess market concentration living labor power.*/}
            </i>
            {space}
            <i>
              In the Hegelian dialectic model, isn't synthesis the embrace of
              the antithesis as the new thesis? Isn’t competition the antithesis
              to industry inequality?
            </i>
            {space}Isn't antithesis and synthesis the scientific method? Aren't
            treaty obligations in United Nation member relations surrendering
            third party rights for citizen-subjects to own their own labor?
            <h2
              style={{
                color: "grey",
                margin: "4px 0px"
              }}
            >
              <i>
                Ricardian crowding-out (of{space}
                <a href="https://kondratiev.quora.com/Don-t-universities-doctors-and-machine-rent-secret-price-makers-each-have-a-conflict-of-interest-not-to-be-clear-co">
                  "powers"
                </a>
                {space}[
                <a href="https://nickcarducciforsenate.quora.com/Is-there-any-appeal-of-Marxism-today-1">
                  to return
                </a>
                ])
              </i>
            </h2>
            {!this.state.america && (
              <div
                style={{
                  margin: !this.state.america && "10px",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid"
                }}
              >
                <h4
                  style={{
                    margin: "4px 0px"
                  }}
                >
                  Don’t universities, doctors, and machine rent secret makers
                  each have a conflict of interest not to be clear, concise, and
                  comprehensive?
                </h4>
                <i>
                  Clear, concise and comprehensive are adjectives that do not
                  apply to your question.
                  <br />
                  <br />
                  1. What are secret makers?
                  <br />
                  2. To whom do you think universities and doctors rent these
                  secret makers?
                  <br />
                  3. If these secret makers are secret to any extent, why do you
                  think universities and doctors will want to speak about their
                  secrets in any clear, concise or comprehensive manner?
                </i>
                <br />
                <br />
                isn't technical competition not-for-profit enough?
                <a href="https://www.digitalocean.com/community/pages/write-for-digitalocean">
                  <Cable
                    style={{ width: "100%" }}
                    onError={handleScollImgError}
                    img={true}
                    src={
                      this.state.noyout
                        ? ""
                        : "https://www.dropbox.com/s/5kdxkja38uhzlxz/Screen%20Shot%202022-10-05%20at%207.07.44%20PM.png?raw=1"
                    }
                    float={"left"}
                    title="https://www.digitalocean.com/community/pages/write-for-digitalocean"
                    scrolling={this.state.scrolling}
                    fwd={this["scrollImg" + scrollnum()]}
                    scrollTopAndHeight={
                      this.state.scrollTop + window.innerHeight
                    }
                    scrollTop={this.state.scrollTop}
                  />
                </a>
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Perhaps you do not understand how prices are made by{space}
                <a href="https://theanarchistlibrary.org/library/kevin-carson-studies-in-mutualist-political-economy">
                  social supply (variable capital)
                </a>
                {space}but for budget constraints (constant capital).
                {space}
                <span style={{ color: "lightskyblue" }}>
                  Isn’t the fact of 65% mortgage and 35% rent proof of coercion
                  to use finance?
                </span>
                {space}in Saver Party{space}
                <span style={{ color: "chocolate" }}>
                  Are my parents spending my money for their mortgage as it
                  happens?
                </span>
                {space}Does an open source technologist make prices? Doesn’t a
                technologist make prices? How are you trying to make rent?
              </div>
            )}
            <div
              style={{
                margin: "4px 0px"
              }}
            >
              <b>
                "Is there any empirical evidence for Marxist predictions that
                the rates of profit tend to fall?"
              </b>
              {space}
              <i>
                How does one have "access" to capital when capital is return
                ability?
              </i>
            </div>
            Yes in{space}
            <a href="https://fred.stlouisfed.org/graph/?g=UiNu">
              the cost of living labor
            </a>
            , or{space}
            <a href="https://vau.money">
              <i>productivity</i>
            </a>
            , we can even see the effect in inflation and hours worked
            <i>
              , to see velocity actually from these endogenous error factors…
            </i>
            Isn’t yesterday’s inflation this week’s growth other than
            dynamically-renaming the charted account?{space}
            <a
              style={{ color: "green" }}
              href="https://draintheswamp.quora.com/When-is-outsourcing-not-cheaper-for-Americans"
            >
              When is outsourcing not cheaper for Americans?
            </a>
            <div
              style={{
                margin: !this.state.america && "10px",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 40px)",
                padding: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              <h4
                style={{
                  margin: "4px 0px"
                }}
              >
                Isn’t ‘dynamic’ competition income equality while technical,
                real growth of square footage barter?
              </h4>
              <i>
                <a href="https://www.youtube.com/watch?v=APQAosdUKiM">
                  Nonsense questions
                </a>
              </i>
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              Do you even work in the economics field?
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              <i>
                I buy and sell equities and futures for a living. Arcane
                questions in this general forum are unproductive. This youtube
                piece is interesting if you’re a student academic prepping for a
                test. It doesn’t make you valuable to others if you can’t ask
                questions average people or voters can understand.
              </i>
              {!this.state.america && <br />}
              {!this.state.america && <br />}I disparage propaganda for free, I
              am advocate for public good will accounting like
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              <h4
                style={{
                  margin: "4px 0px"
                }}
              >
                Is money lending one of the riskiest businesses In the world
                today?
              </h4>
              No because even labor has{space}
              <a href="https://www.quora.com/unanswered/When-does-one-have-skin-in-the-game">
                skin in the game
              </a>
              {space}but lending has interest and/or foreclosure while the
              borrower loiters. technical microeconomics is the price axis,
              dynamic is utility (I gather) which I argue is leisure universally
              and others (keynes-hicks IS-LM) argue credit causes utility by
              consumption and export of the physical
              <div
                style={{
                  margin: !this.state.america && "10px",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)",
                  padding: !this.state.america && "10px",
                  border: "1px dashed"
                }}
              >
                <h4 style={{ color: "blue", margin: "4px 0px" }}>
                  When will the government encroachment into living labor stop?
                </h4>
                Doesn't the CPI{space}
                <i>survey</i>
                {space}miss shrinkflation? Why is{space}
                <a href="https://saverparty.quora.com/When-is-outsourcing-not-cheaper-for-Americans">
                  physical
                </a>
                -<a href="https://saverparty.xyz/global">loss</a>
                {space}and/or hour not cost to economists? Why is an increase of
                consumption favorable to economists?
              </div>
              <span style={{ color: "mediumslateblue" }}>
                Why does Elise Stefanik think private investment in the deficit
                is better than federal reserve QE?
              </span>
              {space}Doesn't the collapse of the Dow Jones mean the market is
              becoming less concentrated? Isn’t variable capital short term
              labor? Isn’t{space}
              <a href="https://www.youtube.com/watch?v=APQAosdUKiM">dynamic</a>
              {space}efficiency renaming variable capital? '[What does “free
              rider immutable{space}
              <a
                ref={this.plaintiff}
                href="https://www.reddit.com/r/thumbprint/comments/xvdsnt/man_without_insurance_killed_by_police_after/"
              >
                plaintiff
              </a>
              {space}tax” mean to you?]'{space}
              <span style={{ color: "firebrick" }}>
                Does a justice system without reproducible evidence require the
                threat of indictment for lying under oath not to to convict with
                witness testimony and observable injury? What is the risk of the
                plaintiff{space}
                <a href="https://commie.dev/anarchy">
                  changing the criminal subject
                </a>
                ?
              </span>
            </div>
            <h4
              style={{
                margin: "4px 0px"
              }}
            >
              What conscious effects might become of us with NAIRU
              'inflationary' unemployment as opposed to 'deflationary' square
              footage?
            </h4>
            <a href="https://economics.stackexchange.com/questions/52927/short-term-real-velocity-growth-types">
              How does the labor theory of value explain exploitation under
              capitalism
            </a>
            ?
            <br />
            Labor theory concerns production, for commodity capital is a
            variable (short-term) exchange in excess of constant capital
            return-ability to account for nature as an ordinary profit{space}
            <a href="https://courttechnology.quora.com/Was-nihilism-defined-after-Friedrich-Nietzsche-s-Natural-History-of-Morals-mention-of-anarchist-dogs">
              above
            </a>
            {space}machine long run growth of a (rollover/wage-expiry
            ex-commodity-expiry/non-compete){space}
            <a href="https://kondratiev.quora.com/Isn-t-unfettered-capitalism-expiry-non-compete-1">
              natural square footage
            </a>
            {space}barter unordinary short term.{space}
            <i>
              Wouldn’t marginal utility equal marginal cost constantly and
              complementary were it not for unordinary revenue?
            </i>
            {space}Is
            {space}
            <a href="https://www.reddit.com/r/thumbprint/comments/xtrn6q/arent_moral_nihilists_against_collective/">
              retaliation
            </a>
            {space}the great law dictated by Nature? Is the long-term only
            {space}
            <a href="https://markethistory.quora.com/What-were-Karl-Marx-John-Keynes-and-Adam-Smith-s-contributions-to-economics-1">
              natural
            </a>
            ? Isn’t forfeiting the public good will surrendered freedom to own
            from extraordinary product revenue profits by expiry/non-compete?
            {space}
            <i style={{ backgroundColor: "black", color: "white" }}>
              How isn't the law of diminishing return instead complementary with
              utility if '
              <a
                style={{ color: "white" }}
                href="https://saverparty.quora.com/What-is-the-evidence-for-and-against-Adam-Smiths-theory-of-the-invisible-hand-1"
              >
                return
              </a>
              ' is a{space}
              <a
                style={{ color: "white" }}
                href="https://economics.stackexchange.com/questions/52801/is-marginal-rate-of-substitution-always-positive"
              >
                constant revenue after cost
              </a>
              ?
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <h4
              style={{
                margin: "4px 0px"
              }}
            >
              The Universal{space}
              <a style={{ color: "black" }} href="https://leisuretoprefer.com">
                Leisure to Prefer
              </a>
              {space}Utility
              <span style={{ color: "grey" }}>
                , as constant is to variable-social.
              </span>
            </h4>
            Shouldn’t growth discount a lifetime compound inflation rate to
            {space}
            <a href="https://froth.quora.com/What-does-growth-have-to-do-with-inflation-1">
              atone
            </a>
            {space}
            itself to be an increase of real velocity already? When did costs
            become social instead of commodity capital?
            <h2 style={{ marginBottom: "0px" }}>
              <a href="https://www.quora.com/How-did-Marx-conceive-of-the-relationship-between-capital-and-labor-What-does-he-mean-when-he-talks-about-alienation/answer/Nick-Carducci">
                Capital
              </a>
              : an account's return in accordance with ability to afford this
              revenue{space}
              <a href="https://froth.quora.com/What-does-growth-have-to-do-with-inflation-1">
                <i style={{ color: "seagreen" }}>after</i>
              </a>
              {space}costs.
            </h2>
            Why would conservatives suggest the market of supply and demand are
            not individuals but firms?
            <br />
            <br />
            {!this.state.america && (
              <Cable
                style={{ width: "200px", maxWidth: "100%", height: "300px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.youtube.com/embed/UiprxrmHhbQ"
                }
                float={"left"}
                title="https://youtu.be/UiprxrmHhbQ" //7Jy9JyrukCY"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
            If one is not bartering in trade, are they overeating? Isn’t real
            enterprise growth inflation still, but for non-deflationary square
            footage barter?{space}
            <i>
              <span style={{ textDecoration: "underline" }}>
                Wouldn’t real square footage growth per capita be good/effective
                by labor if the inflation discount interpolated less ground
                rent, storage exclusion, and{space}
                <a href="https://thetax.party">
                  <span style={{ color: "pink" }}>encampment</span>
                  {space}cost
                </a>
                {space}to revenue employee benefits for exempt institutions and
                essential industries?
              </span>
              {space}If one is not bartering in trade, aren’t they overeating
              and/or -consuming non durable goods and services? Doesn’t real
              growth come from new accounts and/or shrinkflation?
            </i>
            {space}
            <span style={{ color: "cornflowerblue" }}>
              If inflation is in the price per square, is growth in price per
              living unless such investment commensurately deflates in the next
              period?
            </span>
            {space}If inflation is exclusively an increase of price per molar
            mass of each living requirement, why wouldn’t an increase of
            physical consumption and/or export also be?{space}
            <b>
              If inflation accounts for shrinkflation and/or cost to revenue and
              profit bundles, wouldn’t an increase of real consumption also be
              considered inflation in terms of living?
            </b>
            {space}Isn’t the cost of living actually growth either by inflation
            and/or real growth of physical consumption and/or export?
            {space}
            <i>
              Isn’t real growth in square footage appropriate barter (at best)?
              Isn’t real growth in services generally inappropriate?
            </i>
            {space}
            Isn’t exclusively square footage yet consumption and/or investment
            not only durable but indestructible save pollution?{space}
            <b>
              Doesn’t effective real growth have to be deflationary and/or
              indestructible?
            </b>
            {space}Does real square footage growth consumption and/or investment
            help without deflation?
            <br />
            <hr />
            In this day and age, are you not in favor{space}
            <a href="https://islamicbanks.quora.com/Is-it-wrong-to-break-up-with-your-boyfriend-if-he-wont-sign-a-prenup-1">
              of the government as a parent
            </a>
            ? Once a new matter of rent has been produced for more than a year,
            how can one tell if it is recessionary or normal to lose it once
            again?
            <hr />
            <h2
              style={{
                margin: "4px 0px"
              }}
            >
              Rent: the constant raw capital-material power cost lives towards
              feature-based service worker machine dynamism.
            </h2>
            {this.state.america && (
              <h3
                style={{
                  margin: "4px 0px"
                }}
              >
                Can rent prove technical deflationary investment?
              </h3>
            )}
            We are to own the constant raw material as earnings to be the
            natural extent of variable part living labor exchange value.{space}
            <i>
              Constant{space}
              <b>capital costs</b>
              {space}are the factors of production less machine rents.
            </i>
            <div
              style={{
                color: "white",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                padding: !this.state.america && "10px",
                border: "1px solid",
                backgroundColor: "grey"
              }}
            >
              As an example combination where a manufacturer himself makes a
              part of his former constant capital, or where previously the raw
              material passed as constant capital out of his sphere of
              production into a second sphere, and he now himself gives it the
              second [labor] form—this always only amounts to a concentration of
              profits[]. (Karl Marx, TSV.4.9: Ganilh and Ricardo on Net Revenue.
              Ganilh as Advocate of a Diminution of the Productive Population;
              Ricardo as Advocate of the Accumulation of Capital and the Growth
              of Productive Forces)
            </div>
            <h4
              style={{
                margin: "4px 0px"
              }}
            >
              <a href="https://www.quora.com/unanswered/Isn-t-the-limit-to-growth-non-perishable-durable-goods-forgeable-unless-somehow-service-workers-aren-t-considered-price-but-output">
                Does the NBER confuse service worker income as output?
              </a>
            </h4>
            Why does NBER call{space}
            <span
              style={{
                color: "blue"
              }}
            >
              deflationary
            </span>
            {space}technologically competitive non-accelerating inflation rate
            of unemployment ‘recession’? Why would subsidy need to replace NBER
            ‘recessionary’ service worker unemployment caused by deflationary
            technological competition? Isn’t recessionary unemployment
            acceleratingly inflationary and not deflationary nor otherwise as
            NBER would have it? Why is deflationary or even equivalently
            inflationary unemployment at all considered NBER ‘recessionary’?
            {space}
            <a
              style={{
                color: "teal",
                WebkitTextStroke: ".5px black"
              }}
              href="https://realecon.quora.com/Why-is-deflationary-unemployment-considered-an-NBER-recession-1"
            >
              Why is deflationary unemployment considered an NBER ‘recession’?
            </a>
            {space}What exactly is real income minus transfers, real spending,
            industrial production, and employment? Can the NBER tell the
            difference in a ‘recession’ between a loss of technological living
            labor and dynamic service work? Isn’t real spending and income less
            transfers just an annual discount of inflation?{space}
            <span
              style={{
                color: "teal",
                WebkitTextStroke: ".5px black"
              }}
            >
              Why does the NBER argue against ‘recessions’ to atomic structural
              employment and spending?
            </span>
            {space}Isn’t real economic growth dynamic and feature-based service
            work in excess of living labor and technical competition? Is
            inflationary service worker machine rent retirement ‘NBER’
            recessionary?
            {space}
            <i>
              Shouldn’t the growth of the economy exclude and/or discount for
              inflationary short-term employed service worker machine rent?
              Shouldn’t the growth of the economy be measured in physical
              consumption of durable goods?
            </i>
            {space}Why is deflationary or even equivalently inflationary
            unemployment at all considered NBER ‘recessionary’?{space}
            <i>
              Isn’t recessionary unemployment acceleratingly inflationary and
              not deflationary nor otherwise as NBER would have it?
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Isn't generous deflationary technological competition less subsidy
            and/or inflationary dynamic competition that either bears out to
            long-term employment or not? Isn’t the{space}
            <span
              style={{
                color: "blue"
              }}
            >
              deflationary
            </span>
            {space}entrepreneur a part of technological competition and the
            productive, dynamic competition?{space}
            <b>
              Why would a “self-taught” technologist not always report their
              research struggles?
            </b>
            {space}Does success require work these days?{space}
            <i>Isn’t corpus linguistics the void of bad advice?</i>
            {space}Doesn’t the economic prospect of growth extend to inventory
            surplus of non-perishable durable goods alone? Isn’t when{space}
            <span
              style={{
                color: "blue"
              }}
            >
              deflation occurs commensurately with growth of long-term
              unemployment
              {space}
              <b>“direct technological competition”</b>
            </span>
            {space}rather than “indirect dynamic competition” of feature-based
            inflationary short-term employment?
            <br />
            <br />
            <i>
              Is inflation slower than unemployment growth still considered an
              NBER ‘recession’?
            </i>
            {space}
            <b>
              Isn’t an NBER ‘recession’ inflationary long-term unemployment?
            </b>
            {space}
            Isn’t an NBER ‘recession’ inflationary short-term employment?{space}
            <span
              style={{
                color: "teal",
                WebkitTextStroke: ".5px black"
              }}
            >
              Why is an equivalently inflationary loss of spending for a living
              per capita considered an NBER 'recession'?
            </span>
            {space}
            <i>
              Is a{space}
              <span
                style={{
                  color: "blue"
                }}
              >
                deflationary
              </span>
              {space}unemployment’s loss of short-term employment still
              considered an NBER ‘recession’? Isn’t an NBER 'recession' reading
              an equivalent exchange of inflation and unemployment?
            </i>
            {space}Can't an NBER ‘recession’ be avoided by a{space}
            <span
              style={{
                color: "blue"
              }}
            >
              deflationary
            </span>
            {space}loss of short term employment?
            <h4
              style={{
                margin: "4px 0px"
              }}
            >
              <a href="https://federalreserve.quora.com/What-is-the-relationship-between-the-Federal-Reserve-cutting-rates-and-inflation-1">
                Does Art Laffer think there is no deficit?
              </a>
            </h4>
            I think the laffer curve is as useless as you think my questions
            make fundamental sense to not ignore. I live in the real world and I
            have no use for the laffer curve if it cannot adjust to inflation.
            At the very least, you say it is good enough. We call this
            half-baked and not a viable theorem of powers to production factors.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <a href="https://www.quora.com/Does-Art-Laffer-think-there-is-no-deficit/answer/J-Reynolds-15">
              You
            </a>
            {space}misunderstand lifetime means to the basis period of inflation
            instead of annual to discount productivity for velocity of living
            consumption and investment.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            The natural rate of productivity normalizes as it happens, but
            technological competition deflates while dynamic competition imposes
            complementary luxury market-demand.
            <h4 style={{ margin: "4px 0px" }}>
              <i>
                Isn't the revenue generated by the deficit the endogenous error
                of the Laffer Curve?
              </i>
              {space}
              <span style={{ color: "grey" }}>
                Does the Laffer Curve account for inflation? Shouldn't tax rates
                increase commensurately with inflation and interest together?
                {space}
                <a
                  href="https://draintheswamp.quora.com"
                  style={{
                    color: "green"
                  }}
                >
                  Is a deficit better than tariffs let alone taxes? Are tariffs
                  better than taxes if there is a deficit?
                </a>
                {space}Is it best to replace corporate profit and cost to
                revenue taxes with tariffs? Isn't the revenue generated by the
                deficit the endogenous error of the Laffer Curve?
              </span>
              {space}Doesn’t the Laffer Curve encourage a higher deficit by
              assuming a nation’s revenue comes from an equivalent free rider
              immutable tax rate alone?
            </h4>
            <h2
              style={{
                margin: "4px 0px"
              }}
            >
              Measure of consumption has basis of natural ordinal living labor
              propensity of sunk ground and machine rent or ordinary profit and
              surplus value from price taking.
            </h2>
            Is a machine a technology leased? Isn't generosity more deflationary
            technological competition than subsidy or even inflationary dynamic
            competition that may bear long-term employment or not? Doesn’t a pay
            to play scheme prevent a generous pay as you go model? Is a generous
            pricing model advisably pay as you go?
            <div
              style={{
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                padding: !this.state.america && "10px",
                border: "1px dashed"
              }}
            >
              <a href="https://www.quora.com/What-are-increasing-and-decreasing-marginal-returns/answer/Nick-Carducci">
                <i>
                  Aren't consumers price makers only insofar that they have
                  budget constraints?
                </i>
              </a>
              {space}No. The real “price making” impact comes from consumers
              deciding to buy one product, at one price point, over another. If
              there are 5 competing products in a market, at 5 different price
              points, and one of those products get an 80% market share, then
              the consumers have become price makers.{space}
              <i>
                Can you confirm that the price making/taking dipole is not
                [considering] price as in cost?
              </i>
              <div
                style={{
                  margin: !this.state.america && "10px",

                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)",
                  padding: !this.state.america && "10px",
                  border: "1px dashed"
                }}
              >
                <b>
                  When the price of a substitute goes up, what happens to supply
                  and demand?
                </b>
                <br />
                Supply and demand of your x-axis lest you are looking cardinal
                by cardinal %/% derivation Marginal Rate of Substitution with
                price in slope/gradient is in reaction to the price of the other
                good or service market becoming more expensive the skew so then
                not complementary to living is of the propensity to substitute
                in living consumption for, so supply will and should shortly
                follow as a price taker for their complementary in a luxury or
                substitutionary in any way positive by marginal individual firm
                of industry. Short term employment is the price taken making of
                labor.
              </div>
            </div>
            {/*produced enough for the whole world (production individually expiry
        labor rollover commodity*/}
            <i>
              Friends,{space}
              <a href="https://youtube.com/shorts/P5c8eAUNAVI">colleagues</a>,
              {space}
              <span role="img" aria-label="usa flag">
                🇺🇸
              </span>
            </i>
            <br />
            Isn't the natural rate of productivity unlike unemployment in that
            it is nominal already instead of estimated? Do agricultural
            subsidies secure food for landlords? Can investing in climate
            resilient agriculture not be mandated by building permits? Doesn’t
            the marginal rate of substitution commit itself during periods in
            time series? Which countries objectify its people? Is borrowing part
            of the process of natural commerce? Albeit marginal by time
            inflation is bad, isn’t inflation over a half life the worst?
            Wouldn’t a marginal rate of substitution between two goods in the
            derivative(%/%) rather than complementary in the ordinal(x) and
            cardinal(y) predict a curved set of individual propensities for
            exchange above or at a natural rate of unemployment? Don’t
            Republicans and Democrats want New Jersey residents to take
            mortgages? If degrowth is deflationary, isn't dynamic degrowth
            operationally efficient? Doesn’t technology increase the natural
            rate of unemployment non-dynamically but for entertainment?{space}
            <i>
              Isn’t spending implicitly government outlay because private
              investment and consumption is durable goods and service workers?
            </i>
            {space}
            <span
              ref={this.cukl}
              style={{
                color: "purple"
              }}
            >
              Isn’t the official NBER ‘recession’ the loss of any amount of
              effective jobs with a matching non-accelerating inflation rate per
              leisure utility?
            </span>
            <br />
            <br />
            rent, from the consumer - marginal productivity causes a natural
            rate decrease
            <h2>
              Normal{space}
              <a href="https://froth.app">productivity</a>
              {space}== living labor. C=U+K+L
            </h2>
            <b>
              Utility/(
              <a href="https://comlib.quora.com/Can-you-be-a-libertarian-Marxist-1">
                proper-debit
              </a>
              ), Kapital/(hour), Labor/(hour)
              <br />
              &nbsp;&nbsp;&bull;{space}(derivation of a series of periods and/or
              spaces)
            </b>
            {!this.state.america && (
              <a href="https://phyletic.quora.com/What-does-it-mean-if-the-demand-curve-has-an-inelastic-slope-1">
                <Cable
                  style={{ width: "100%" }}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    //10 refrigerator charge, 20x
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/q8javduhinov1pa/Screen%20Shot%202022-10-05%20at%205.47.43%20PM.png?raw=1"
                  }
                  float={"left"}
                  title="https://politics.stackexchange.com/questions/76012/isnt-the-optimal-tax-rate-more-dependent-on-technical-inefficiencies-including"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </a>
            )}
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <i>
              Isn’t the reserve army of workers rather the long-term employed?
            </i>
            {space}Isn’t the Laffer curve fallacious during the crowding out of
            long-term employment?
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Does consumption velocity lower the cost of living because people
            can only save inventory of non-perishable durable goods?{space}
            <span
              style={{
                color: "green"
              }}
            >
              Is a growth of living production at all useful for deflationary
              gross private investment? Does growth mean gross private
              investment to government and consumer spending as a part of the
              whole? Why is growth patriotic?{space}
              <b>Would Dick Morris give a black person a gun permit?</b>
            </span>
            {space}How is{space}
            <a href="https://bureau.quora.com/Is-rent-always-an-investment-1">
              rent
            </a>
            {space}not investment in national accounting?
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <i>
              If growth is gross private investment, is living production growth
              not?{space}
              <span style={{ color: "purple" }}>
                If a nation's exports are less than theirimports only nominally,
                do they not profit in arbitrage by that power?
              </span>
            </i>
            {space}Does the productivity of chores require extrapolation?
            {space}
            <i>
              Doesn't the productivity of chores require interpolative
              imputation and extrapolation by lifetime ago hours worked?
            </i>
            {space}Isn’t normal growth extrapolated inflation a half-life ago?
            Does inflation a lifetime ago matter?{space}
            <i>Isn't the capitalist's ground rent, machine rent?</i>
            {space}Isn’t the Libnode service after a decade of Node.js admitted
            bad advice evidence of intent to profit on server farm cloud service
            machine rents?{space}
            <i>
              Why don’t{space}
              <a href="https://github.com/NickCarducci/mastercard-backbank-node-zero-trust">
                people make their own server farms with Cloudflared in
                competition with
              </a>
              {space}Azure, Google Cloud Platform, and Amazon Web Services?
            </i>
            {space}Aren't contractors part of the labor movement for exchange
            without machine rents? Isn’t universal private production exclusive
            of machine rents?
            <div
              style={{
                color: "white",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                padding: !this.state.america && "10px",
                border: "1px solid",
                backgroundColor: "grey"
              }}
            >
              There is nothing{space}
              <a href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch19.htm">
                original
              </a>
              {space}in ‘the constant value of labour’ (Malthus, The Measure of
              Value, 29).
              <div
                style={{
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 20px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid",
                  backgroundColor: "cornflowerblue"
                }}
              >
                If the{space}
                <a href="https://www.quora.com/What-is-the-Marxist-theory-of-liberty/answer/Nick-Carducci">
                  reward
                </a>
                {space}should at any time be less than what was requisite for
                this purpose, the deficiency of hands would soon raise it; and
                if it should at any time be more, their excessive multiplication
                would soon lower it to this necessary rate. The market would be
                so much understocked with labour in the one case, and so much
                overstocked in the other, as would soon force back its price to
                that proper rate which the circumstances of the society
                required.
                <br />
                <br />
                Equal quantities of labour, at all times and places, may be said
                to be of equal value to the labourer. In his ordinary state of
                health, strength, and spirits; in the ordinary degree of his
                skill and dexterity, he must always lay down the same portion of
                his ease, his liberty, and his happiness. (Adam Smith, Wealth of
                Nations, 1.5)
              </div>
            </div>
            <h1
              style={{
                margin: "4px 0px"
              }}
            >
              "UBI for{space}
              <a href="https://www.youtube.com/watch?v=XeiUoElIAuw">
                Homeless People
              </a>
              ."
            </h1>
            <h4 style={{ float: "right", margin: "4px 0px" }}>
              <a href="https://brainscan.info">brainscan.info</a>
            </h4>
            Expiry labor and commodity rollover for machine dipolarity.
            <br />
            Homeless naturally-boycotting credit as income.{space}
            <i>
              We need advocates, not collective nor expiry class action (Every
              borrow is a tiny ponzi)
            </i>
            .{space}Aren't consultants as susceptible to rent by capital return
            as merchants in the credit superstructure? (Who is the{space}
            <a href="https://landlordliquidity.quora.com">inkeeper</a>?). Why
            don't we hold landlords and amortize accrual first before paying
            them with UBI and utility assistance? Why do we allow housing and
            urban development to rent{space}
            <a href="https://impausibleuselandlords.quora.com">
              living structures
            </a>
            {space}back to us? Why would one pay a financial service more in
            their earnings than such an equally skilled working day does require
            in sum?
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            machine-rent = "means[] still[] get their cut" - Stuart Edwards
            {!this.state.america && <br />}
            wealth = (concentraton / equality) of good will
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            Why does the{space}
            <a href="https://saverparty.xyz/poverty">poverty</a>
            {space}rate assume everyone has two kids? 30 day lease, 5/landlord.
            <div
              style={{
                transition: ".3s ease-in",
                width:
                  //maxWidth:
                  "calc(100% - 40px)",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              Tax benefits for years of cost to revenue exemptions 1099
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              If that wasn't skewed towards a home with a single kid 1/3 stay
              with
              {space}
              <a href="https://www.goldmansachs.com/insights/archive/millennials/">
                parents until 40 now
              </a>
              {/*space}wtf it just causes the number to be fucked up*/}. Stop
              with the white picket fence patriarchy.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              <i>Everyone has two kids.</i>
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              It's just not natural; we need{space}
              <a href="https://thetax.party">a police state</a>
              {space}thetax.party.{" "}
              <i>
                <b>shake</b>
                {space}it
              </i>
            </div>
            Machine rent technologist's proprietary guild.
            <h1>Molar Natty Power (living labor)</h1>
            public health my &bull;&bull;&bull;
            &bull;&bull;&bull;&bull;&bull;... Borrowers cause the natural
            increase, not luxury nor{space}
            <a href="https://saverparty.xyz/poverty">
              mental heathcare dynamic demand
            </a>
            . Borrower. And it isn't real(ized).
            <h3>competition with the (general) consumer</h3>
            <i>
              Isn’t the birth rate dependent on living labor? Is all supply not
              voluntary with expiry labor surrendered but for rollover
              commodities sinking carrying costs to the buyer but for qualified
              quality indemnity{space}
              <a href="https://scopes.cc">amelioration</a>? Is the natural rate
              increase not per capita? Is a natural rate decrease not also
              natural? Isn't immigration being jailed internationally
              standardized unnatural? Isn't a recession naturally inflationary
              unemployment? Isn’t acquiring skills the only positive sum basis
              to trade in living labor value? What obvious political reasons
              want the economy and inequality to grow? Why is economic growth
              favored to saving?
              {space}
              <a href="https://thetax.party">Is there a tax party</a>? When does
              taking on debt not raise the real natural rate per hour? Is the
              new cost to revenue, profits, and personal income a velocity or
              price increase? Shouldn’t economists call employee benefits cost
              to revenue? Why is there a backdoor for consumer devices but not
              brokers? Do older workers help deflation? Does the government
              assume we all have two kids?{space}
              <a href="https://vaults.biz">What ages aren’t working</a>?
            </i>
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <div
              style={{
                transition: ".3s ease-in", //"Shouldn't Joe Biden be institutionalized? 'We beat pharma this year,
                //well I am sick and tired of smart guys. There is nothng we can do. not a single thing,
                //maybe be on talk radio, no character, endurance, strength'"
                //what can a citizen do if the cops ignore crimes?
                /**
             * MEETING OF OCTOBER 1, 1867, around the publishing date of Capital
             * 
             * https://www.marxists.org/history/international/iwma/pdfs/iwma-sep66-sep68.pdf
             * The report of this meeting, published in The Bee-Hive No. 312,
              October 5, 1867, cites a letter from the Tailors’ Society of Cologne
              founded on the initiative of the Cologne section of the International. The letter says: “The preliminary programme which we
              have issued is as follows: 1. The establishment of sick benefit
              clubs, and their consolidation into a general assurance union.
              2. A relief fund for members out of work and travelling. 3. The
              establishment of offices affording information respecting the
              demand for labour. We consider these three points as a means
              to rally the tailors to unite, and to give the Association to be
              formed a legal status within the Prussian dominion. Our ultimate
              aim is the foundation of productive associations.” The letter was
              addressed to Eccarius.

              Citizen Jung in the chair.
              The Minutes of the previous meeting were read and confirmed.
              The General Secretary ** read a letter from Birmingham,
              the writer of which asked for the addresses of the Continental secretaries for the Rev. Neil to transmit peace addresses.
              The Council took no action upon the matter.
              A letter was read from the tailors of Cologne asking for
              the Rules of the English Tailors’ Association and little advice for the guidance of a tailors’ congress to be held on the
              14th of October at Leipzig to establish an amalgamation
             */
                //fontSize: this.state.openDiminution ? "" : "0px",
                //"max-content",
                width:
                  //maxWidth:
                  "calc(100% - 40px)",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                border: "1px solid"
              }}
            >
              <b>
                <a href="https://www.quora.com/What-is-the-Marxist-theory-of-liberty/answer/Nick-Carducci">
                  liberty
                </a>
              </b>
              <br />
              Whether it was a question of the right of petition or the tax on
              wine, freedom of the press or free trade, the clubs or the
              municipal charter, protection of personal liberty or regulation of
              the state budget, the watchword constantly recurs, the theme
              remains always the same, the verdict is ever ready and invariably
              reads: "Socialism!" Even bourgeois liberalism is declared
              socialistic, bourgeois enlightenment socialistic, bourgeois
              financial reform socialistic. It was socialistic to build a
              railway where a canal already existed, and it was socialistic to
              defend oneself with a cane when one was attacked with a rapier.
              {!this.state.america && <br />}
              {!this.state.america && <br />}
              <a href="https://www.marxists.org/archive/marx/works/1872/03/fictitious-splits.htm">
                [T]he reactionary
              </a>
              {space}press of Paris and Moscow, of London and New York,
              denounced the resolution on working-class policy as containing
              such dangerous designs — the Times accused it &ldquo;of coolly
              calculated audacity&rdquo;— that it would outlaw the International
              with all possible speed. On the other hand, the resolution that
              dealt a blow at the fraudulent sectarian sections gave the
              international police a long-awaited excuse to start a noisy
              campaign ostensibly for the unrestricted autonomy of the workers
              whom it professed to protect against the despicable despotism of
              the General Council and the Conference. The working class felt
              itself so &ldquo;heavily oppressed&rdquo;, indeed, that the
              General Council received from Europe, America, Australia, and even
              the East Indies reports about the admission of new members and the
              formation of new sections.
              <hr />
              <div
                ref={this.police}
                style={{
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 20px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid",
                  backgroundColor: "firebrick"
                }}
              >
                <a
                  style={{ color: "lightskyblue" }}
                  href="https://www.marxists.org/archive/marx/works/1871/civil-war-france/ch05.htm"
                >
                  After every revolution
                </a>
                {space}marking a progressive phase in the class struggle, the
                purely
                {space}
                <a href="https://www.marxists.org/archive/marx/works/1865/letters/65_01_30.htm">
                  repressive
                </a>
                {space}character of the state power stands out in bolder and
                bolder relief.
                <div>
                  <i>
                    How would a Marxist society deal with crime and punishment?
                  </i>
                  {space}
                  Given white collar crime is held, burglary, robbery, rape,
                  injury, and homicide are also due recompense. However,
                  punitive damages are of an incompetent state.{space}
                  <i>
                    Don't hold yourself back gents: Do some economical outcomes
                    instead of productivity for once. (income vs outcome)
                  </i>
                </div>
                Are the censors excluded from the historical whole? Are they
                unaffected by the spirit of a time? Unfortunately, it may be so,
                but what man of sound mind would not rather pardon sins of the
                nation and the time in the press than sins against the nation
                and the time in the censorship?
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Of course, if freedom of the press were all in all it would make
                all other functions of a nation, and the nation itself,
                superfluous. (Karl Marx, On Freedom of the Press:{space}
                <a href="https://marxists.architexturez.net/archive/marx/works/1842/free-press/ch02.htm">
                  Opponents of a Free Press
                </a>
                , 1842)
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Felled wood is wood that has been worked on. The natural
                connection with property has been replaced by an artificial one.
                Therefore anyone who takes away felled wood takes away property
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                In the case of fallen wood, on the contrary, nothing has been
                separated from property. It is only what has already been
                separated from property that is being separated from it.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Indeed, you punish the gathering of fallen wood more severely
                than the theft of wood, for you punish it already by declaring
                it to be theft, a punishment which you obviously do not
                pronounce on the actual theft of wood. You should have called it
                murder of wood and punished it as murder. The law is not exempt
                from the general obligation to tell the truth. It is doubly
                obliged to do so, for it is the universal and authentic exponent
                of the legal nature of things. Hence the legal nature of things
                cannot be regulated according to the law; on the contrary, the
                law must be regulated according to the legal nature of things.
                But if the law applies the term theft to an action that is
                scarcely even a violation of forest regulations, then the law
                lies, and the poor are sacrificed to a legal lie.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                When the privileged classes appeal from legal right to their
                customary rights, they are demanding instead of the human
                content of right, its animal form, which has now lost its
                reality and become a mere animal mask. (Karl Marx, Rheinische
                Zeitung, No. 298, Supplement:{space}
                <a href="https://marxists.architexturez.net/archive/marx/works/1842/10/25.htm">
                  Debates on the Law on Thefts of Wood
                </a>
                , October 25 1842
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Punishment as such, the restoration of the law, which must
                certainly be distinguished from restitution of the value and
                compensation for loss, the restoration of private property, is
                transformed from a public punishment into a private
                compensation, the fines going not to the state treasury, but to
                the private coffers of the forest owner.
                {!this.state.america && <br />}
                {!this.state.america && <br />}
                Barbaric peoples order the payment of a definite monetary
                compensation (atonement money) to the injured person for a
                definite crime. The notion of public punishment arose only in
                opposition to this view, which regards a crime merely as an
                injury to the individual, but the people and the theory have yet
                to be discovered which are so complacent as to allow an
                individual to claim for himself both the private punishment and
                that imposed by the state. (Karl Marx, op.cit. 305, November 1
                1842){/**is this a good reason to be insane */}
              </div>
              {this.state.america && (
                <h3>
                  <i style={{ color: "grey" }}>Your enemies will remain</i>
                  {space}extraversive.{space}
                  <a href="https://thetaxparty.com">Spoof democracy</a>{" "}
                </h3>
              )}
              <div
                ref={this.property}
                style={{
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 20px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid",
                  backgroundColor: "darkslategrey"
                }}
              >
                <i>
                  It’s like Proudhon took Rousseau's social contract literally,
                  to which the contracts and letters of intent were synonymous
                  instead of a warning to beckon{space}
                  <span style={{ color: "grey" }}>
                    (in their binding differentiation)
                  </span>
                  .
                </i>
                <h3 style={{ margin: "4px 0px" }}>
                  <a
                    style={{ color: "lightskyblue" }}
                    href="https://www.academia.edu/40237388/The_Role_of_Contract_in_Anarchist_Ideology"
                  >
                    The Role of the Contract
                  </a>
                </h3>
                <div
                  style={{
                    borderLeft: "1px dotted",
                    padding: !this.state.america && "10px"
                  }}
                >
                  As with Proudhon, Bakunin defended the absolute right of each
                  group to secede from the federation, but unlike Proudhon[,] he
                  did not vitiate this right by allowing for majority rule over
                  a recalcitrant minority. For Bakunin, ‘no obligation in
                  perpetuity is acceptable to human justice.’ The sole penalty
                  reserved for the allegedly disobedient group is expulsion from
                  the federation [to Proudhon].
                </div>
                <div
                  style={{
                    color: "white",
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 20px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid",
                    backgroundColor: "darkslategrey"
                  }}
                >
                  SINCE no man has a natural authority over his fellow, and
                  force creates no right, we must conclude that conventions form
                  the basis of all legitimate authority among men.
                  <br />
                  <br />
                  Suppose for a moment that this so-called "right" exists. I
                  maintain that the sole result is a mass of inexplicable
                  nonsense. For, if force creates right, the effect changes with
                  the cause: every force that is greater than the first succeeds
                  to its right. As soon as it is possible to disobey with
                  impunity, disobedience is legitimate; and, the strongest being
                  always in the right, the only thing that matters is to act so
                  as to become the strongest.{space}
                  <a
                    style={{ color: "lightskyblue" }}
                    href="https://www.marxists.org/reference/subject/economics/rousseau/social-contract/ch01.htm#009"
                  >
                    But what kind of right is that which perishes when force
                    fails?
                  </a>
                  {space}If we must obey perforce, there is no need to obey
                  because we ought; and if we are not forced to obey, we are
                  under no obligation to do so. Clearly, the word "right" adds
                  nothing to force: in this connection, it means absolutely
                  nothing.
                  <br />
                  <br />
                  War is constituted by a relation between things, and not
                  between persons; and, as the state of war cannot arise out of
                  simple personal relations, but only out of real relations,
                  private war, or war of man with man, can exist neither in the
                  state of nature, where there is no constant property, nor in
                  the social state, where everything is under the authority of
                  the laws.
                  <br />
                  <br />
                  Indeed, if there were no prior convention, where, unless the
                  election were unanimous, would be the obligation on the
                  minority to submit to the choice of the majority? How have a
                  hundred men who wish for a master the right to vote on behalf
                  of ten who do not? The law of majority voting is itself
                  something established by convention, and presupposes
                  unanimity, on one occasion at least.
                  <br />
                  <br />
                  Finally, each man, in giving himself to all, gives himself to
                  nobody; and as there is no associate over whom he does not
                  acquire the same right as he yields others over himself, he
                  gains an equivalent for everything he loses, and an increase
                  of force for the preservation of what he has.
                </div>
                <h3>
                  Question is: Why don't{space}
                  <a
                    style={{ color: "white" }}
                    href="https://commie.dev/anarchy"
                  >
                    anarchists
                  </a>
                  {space}burn the buildings down?
                </h3>
                Consequences. Yet also, rationality of emancipating the property
                from the proprietor:
                <br />
                <br />
                <div style={{ borderLeft: "1px dotted", paddingLeft: "10px" }}>
                  The paradox of value first appears, in fact, in the works of
                  St Augustine, who in The city of God (IX: 16) noted that there
                  was a great disparity between how one might evaluate things
                  ‘according their own merits’ (by which standard plants are
                  clearly superior to stones, animals to plants, humans to
                  animals) and how humans value them: we would much rather have
                  bread or gold in our house than mice or fleas; people will
                  often spend more money for a horse or jewel than for a slave.
                  For Augustine, this was a result of our fallen nature, because
                  of which we are cursed with endless physical needs and
                  desires. These distort our perceptions. We come to see things
                  through our own needs (use value) rather than their absolute
                  worth, their position on the Great Chain of Being and, hence,
                  proximity to God.
                </div>
                <br />
                Karl Marx amended Jevon’s use value theory with the individual,
                and Alfred Marshall took plagiarized marginalism from there.
                Everyone grafted J.B.Say to their own slogans for property and
                capital (re: property is theft)
                <br />
                <br />
                <div style={{ borderLeft: "1px dotted", paddingLeft: "10px" }}>
                  At present it is enough to have a distinct conception, that,
                  without it, industry could produce nothing.{space}
                  <i
                    style={{
                      color: "lightskyblue"
                    }}
                  >
                    Capital{space}
                    <a
                      style={{ color: "lightskyblue" }}
                      href="https://marginalism.uk"
                    >
                      must work
                    </a>
                    , as it were, in concert with industry
                  </i>
                  ; and this concurrence is what I call the productive agency of
                  capital. Yet, sacred as the property in the{space}
                  <a
                    style={{ color: "white" }}
                    href="https://www.quora.com/Are-insurance-companies-profits-illegal/answer/Nick-Carducci"
                  >
                    faculties of industry
                  </a>
                  {space}is, it is{space}
                  <a
                    style={{ color: "white" }}
                    href="https://www.reddit.com/r/Anarchism/comments/yfvo1c/comment/iu6yzlg/"
                  >
                    constantly infringed upon
                  </a>
                  , not only in the flagrant abuse of personal slavery, but in
                  many other points of more{space}
                  <a
                    style={{ color: "white" }}
                    href="https://leisuretoprefer.com"
                  >
                    frequent occurrence
                  </a>
                  .
                </div>
                <br />
                Ultimately, David Graeber sets up the anarchist stage for
                consequences of{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.quora.com/Is-capitalism-fair-How-is-it-legal/answer/Nick-Carducci"
                >
                  fiduciary
                </a>
                /fiscal/donee beneficiary{space}
                <a
                  style={{ color: "white" }}
                  href="https://laundering.quora.com"
                >
                  crime
                </a>
                . Robert Graham went through the role of the contract in the
                third party to surrendered objective future right to own
                contract latter-fashion.
                <br />
                <br />
                <div style={{ borderLeft: "1px dotted", paddingLeft: "10px" }}>
                  If all individuals are values unto themselves (an idea which
                  he traces back to Christian ideas about the value of the
                  immortal soul), none can be treated as intrinsically superior
                  to any other. It is this which has allowed the market, as the
                  sphere of individual self-realisation, to become the
                  hierarchically dominant, highest sphere, to which art,
                  religion, science and politics are all
                  {space}
                  <a
                    style={{ color: "white" }}
                    href="https://markethistory.quora.com/What-is-the-evidence-that-ancient-Greeks-practiced-communism-as-described-by-Karl-Marx-and-Friedrich-Engels-in-The-Comm-1"
                  >
                    increasingly subordinate
                  </a>
                  .
                </div>
                <h3>
                  So (then),{space}
                  <a
                    style={{ color: "white" }}
                    href="https://ordinary-times.com/2010/10/13/studies-in-mutualist-political-economy-part-i-labor-theories-of-value/"
                  >
                    mudpies
                  </a>
                  ?
                </h3>
                <div style={{ borderLeft: "1px dotted", paddingLeft: "10px" }}>
                  u/
                  <a
                    style={{ color: "white" }}
                    href="https://www.reddit.com/r/explainlikeimfive/comments/2be32x/comment/cj4j52v/"
                  >
                    kouhoutek
                  </a>
                  : But if I build a crappy house, that is not much different
                  from a mudpie, not matter how much labor I put into it, and
                  its value is not the same as the expertly build house you made
                  with the same amount of labor. The argument is that value has
                  a quality independent of labor, the mudpie is just on the far
                  end of that continuum.
                </div>
                <br />
                You shouldn’t think of the bad in terms of problems solved but
                leisure utilization. If your problem is non-deflationary, aren’t
                you creating problems?{space}
                <i
                  style={{
                    color: "lightskyblue"
                  }}
                >
                  One man’s non-deflationary “dynameically-efficient” job is
                  another’s real inflation.
                </i>
                <br />
                <br />
                <a
                  style={{ color: "white" }}
                  href="https://theanarchistlibrary.org/library/kevin-carson-studies-in-mutualist-political-economy"
                >
                  <b style={{ borderLeft: "1px dotted", paddingLeft: "10px" }}>
                    Leisure is, other things being equal, preferred to travail
                  </b>
                </a>
                .
                <br />
                <br />A non-deflationary job (if the person likes what they do)
                without a just return by inflation (as one works more under a
                pseudonym to account for their hours and how they spent
                themselves) is what (else) but a luxury at best and throwing
                money away at first, but variable capital is always this way,
                until it deflates as so promised by the economist PhDs.{space}
                <i
                  style={{
                    color: "lightskyblue"
                  }}
                >
                  One man’s luxury is another’s real inflation.
                </i>
              </div>
              <b>
                <a href="https://www.imdb.com/video/vi791460889/?playlistId=tt0050022">
                  replicative competition
                </a>
                {space}Doesn't spending negate the balance sheet? How can one
                profess to wish for less spending no matter the balance?
              </b>
              <div
                style={{
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 20px)",
                  padding: !this.state.america && "10px",
                  border: "1px solid",
                  backgroundColor: "cadetblue"
                }}
              >
                Time to leisure, Capital machine rent, and Labor wage through
                time should account for general equilibrium from a tax rate
                variable.
                <br />
                <a href="https://www.quora.com/What-is-nominal-GDP/answer/Nick-Carducci">
                  <b>
                    <i>What is nominal GDP?</i>
                  </b>
                </a>
                <br />A rate of consumption, investment, and either{space}
                <a href="https://www.quora.com/unanswered/Aren-t-net-exports-either-arbitrage-loss-and-or-physical-export">
                  arbitrage loss or physical export
                </a>
                ; a rate of production.
                <br />
                <br />
                <div
                  style={{
                    color: "white",
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 20px)",
                    padding: !this.state.america && "10px",
                    border: "1px solid",
                    backgroundColor: "cadetblue"
                  }}
                >
                  I{space}
                  <a href="https://leisuretoprefer.com">prefer</a>
                  {space}to include rent and premiums in investment, while
                  durable goods, structures, and government is consumption.
                  <br />
                  <br />
                  If a nation's exports are less than their{space}
                  <a href="https://saverparty.xyz/global">
                    imports only nominally
                  </a>
                  , do they not{space}
                  <a href="https://2024nj.com/oil">profit in arbitrage</a>
                  {space}by that power?
                </div>
                <br />
                <i>
                  Productivity is GDP/h rated by a periodical time series or
                  otherwise.
                  <br />
                  <br />
                  Nominal GDP can be discounted by annual inflation to assess
                  the non-accelerating inflation rate of unemployment changes
                  being deflationary technological or inflationary dynamic
                  competition in its absolute growth, or lifetime absolute
                  inflation of the absolute-whole rate.
                </i>
                <br />
                <br />
                Service worker deflationary unemployment as well as inflationary
                employment are short-term employment or coming into such from
                long-term.
              </div>
              <span ref={this.recession} style={{ color: "mediumseagreen" }}>
                Is a recession not considered{space}
                <a href="https://federalreserve.quora.com/Is-the-capitalization-of-a-bank-either-more-dependent-on-the-required-reserve-ratio-or-central-bank-funds-rate-1">
                  structurally-dynamic degrowth
                </a>
                {space}of short-term employment because we discount growth of
                expenses for hours worked by price survey instead of overall?
                Wouldn’t rather lower expenses per living labor be
                productive/efficient?
              </span>
            </div>
            <i>
              <a href="https://www.marxists.org/archive/marx/works/1845/condition-working-class/ch10.htm">
                Simply because
              </a>
              {space}they must protest against every reduction, even if dictated
              by necessity; because they feel bound to proclaim that they, as
              human beings, shall not be made to bow to social circumstances,
              but social conditions ought to yield to them as human beings;
              because silence on their part would be a recognition of these
              social conditions, an admission of the right of the bourgeoisie to
              exploit the workers in good times and let them starve in bad ones.
              Against this the working-men must rebel so long as they have not
              lost all human feeling, and that they protest in this way and no
              other, comes of their 'being practical English people, who express
              themselves in action, and do not, like German theorists, go to
              sleep as soon as their protest is properly registered and placed
              ad acta, there to sleep as quietly as the protesters themselves.
              The active resistance of the English working-men has its effect in
              holding the money-greed of the bourgeoisie within certain limits,
              and keeping alive the opposition of the workers to the social and
              political omnipotence of the bourgeoisie, while it compels the
              admission that something more is needed than Trades Unions and
              strikes to break the power of the ruling class. But what gives
              these Unions and the strikes arising from them their real
              importance is this, that they are the first attempt of the workers
              to abolish competition. They imply the recognition of the fact
              that the supremacy of the bourgeoisie is based wholly upon the
              competition of the workers among themselves; i.e., upon their want
              of cohesion. And precisely because the Unions direct themselves
              against the vital nerve of the present social order, however
              one-sidedly, in however narrow a way, are they so dangerous to
              this social order. The working- men cannot attack the bourgeoisie,
              and with it the whole existing order of society, at any sorer
              point than this. If the competition of the workers among
              themselves is destroyed, if all determine not to be further
              exploited by the bourgeoisie, the rule of property is at an end.
              Wages depend upon the relation of demand to supply, upon the
              accidental state of the labour market, simply because the workers
              have hitherto been content to be treated as chattels, to be bought
              and sold. The moment the workers resolve to be bought and sold no
              longer, when, in the determination of the value of labour, they
              take the part of men possessed of a will as well as of
              working-power, at that moment the whole Political Economy of today
              is at an end.
              <br />
              <br />
              The laws determining the rate of wages would, indeed, come into
              force again in the long run, if the working-men did not go beyond
              this step of abolishing competition among themselves. But they
              must go beyond that unless they are prepared to recede again and
              to allow competition among themselves to reappear. Thus once
              advanced so far, necessity compels them to go farther; to abolish
              not only one kind of competition, but competition itself
              altogether, and that they will do.
              <br />
              <br />
              The workers are coming to perceive more clearly with every day how
              competition affects them; they see far more clearly than the
              bourgeois that competition of the capitalists among themselves
              presses upon the workers too, by bringing on commercial crises,
              and that this kind of competition, too, must be abolished. They
              will soon learn how they have to go about it.
            </i>
            <h1>
              How can a borrower earn interest without making a{space}
              <a href="https://vaults.biz">Ponzi</a>
              {space}scheme? Why do American universities consider natural rate
              increases good for business? Shouldn’t the cost to revenue between
              quarterly reporting times be taxed as profit already? Shouldn’t
              the
              {space}
              <a href="https://humanharvest.info">
                non-developmentally disabled
              </a>
              {space}nor injured{space}
              <a href="https://2024nj.com/disability">
                stop receiving SSDI OASI already
              </a>
              ? Isn’t the IS-LM curve model “trickle-down economics”?{space}
              <span
                style={{
                  color: "grey"
                }}
              >
                Do MAGA supporters want to end social security?
              </span>
              {space}
              <span
                style={{
                  textDecoration: "line-through"
                }}
              >
                Should conservatives stand up to Marxist’s rollover premium into
                copay?
              </span>
              {space}(
              <i>
                Why does Monica Crowley think the federal deficit is affordable
                if there are private investors? Isn't quality indemnity
                amelioration consumer protection living labor short term when
                expiry is that of the named service or commodity requirement?
              </i>
              ) Isn’t Karl Marx a cursory view into Adam Smith? Can one boycott
              finance in 2022?
              {space}
              <span
                style={{
                  color: "red"
                }}
              >
                What is the point of Know Your Customer with Patriot Act back
                doors?
              </span>
              {space}
              <i
                style={{
                  color: "blue"
                }}
              >
                (Is private business correspondence technically possible today
                without breaking the Patriot Act?)
              </i>
              {space}Aren’t the homeless and immigrants criminal for
              trespassing? Does permanent supportive housing and foster care
              unbar curfews? Are deranged and insane people criminal? Is
              insanity thinking politically differently from the standard or
              having multiple unreconcilable ideas? Is insanity natural? Isn’t
              the normal presentation of something our natural perception? Don’t
              criminals make a bad name for the insane? Is there a natural
              amount of mentally ill? Is it a matter of nature or nurture?
              {space}
              <span
                style={{
                  color: "orange"
                }}
              >
                Isn’t insanity always caused by society?
              </span>
              {space}Why’s drug addiction and mental illness relevant to natural
              homelessness? Is insanity living on the streets due to the general
              increase? Is the unnatural growth of the homeless and depression
              because they boycott finance? If homelessness and permanent
              supportive housing are growing faster than the natural rate, is
              the United States justified in enslaving illegal immigrants?
              Shouldn’t the natural rate of living labor productivity be still
              for a lifetime before the homeless are conscripted already?
              Doesn't naturalization normalize by annual excess{space}
              <span
                style={{
                  color: "rgb(170,80,220)"
                }}
              >
                (rates)
              </span>
              ? Does Mehmet Oz have nerves of steel?
            </h1>
            <i>
              The peasants, disappointed in all their hopes, crushed more than
              ever by the low level of grain prices{space}
              <a href="https://www.quora.com/unanswered/Are-Ireland-landlords-not-affecting-the-Dutch-farmer-policy">
                on the one hand
              </a>
              , and by the growing burden of taxes and mortgage debts on the
              other, began to bestir themselves in the departments. They were
              answered by a drive against the schoolmasters, who were made
              subject to the clergy, by a drive against the mayors, made subject
              to the prefects, and by a system of espionage to which all were
              made subject. In Paris and the large towns reaction itself has the
              physiognomy of its epoch and challenges more than it strikes down.
              In the countryside it becomes dull, coarse, petty, tiresome, and
              vexatious, in a word, the gendarme. One comprehends how three
              years of the regime of the gendarme, consecrated by the regime of
              the priest, were bound to demoralize immature masses.
              <h2>
                <a href="https://www.marxists.org/archive/marx/works/1844/manuscripts/needs.htm">
                  Human Requirements
                </a>
                {space}and Division of Labor Under the Rule of Private Property
                and Under Socialism. Division of Labor in Bourgeois Society
              </h2>
              We have proceeded from the premises of political economy. We have
              accepted its language and its laws. We presupposed private
              property, the separation of labor, capital and land, and of wages,
              profit of capital and rent of land – likewise division of labor,
              competition, the concept of exchange value, etc. On the basis of
              political economy itself, in its own words, we have shown that the
              worker sinks to the level of a commodity and becomes indeed the
              most wretched of commodities; that the wretchedness of the worker
              is in inverse proportion to the power and magnitude of his
              production; that the necessary result of competition is the
              accumulation of capital in a few hands, and thus the restoration
              of monopoly in a more terrible form; and that finally the
              distinction between capitalist and land rentier, like that between
              the tiller of the soil and the factory worker, disappears and that
              the whole of society must fall apart into the two classes –
              property owners and propertyless workers.
              <br />
              <br />
              For the fall in the rate of interest is a necessary consequence
              and result of industrial development. The extravagant rentier’s
              means therefore dwindle day by day in inverse proportion to the
              increasing possibilities and pitfalls of pleasure. Consequently,
              he must either consume his capital, thus ruining himself, or must
              become an industrial capitalist.
              <br />
              <br />
              On the other hand, there is a direct, constant rise in the rent of
              land as a result of the course of industrial development;
              nevertheless, as we have already seen, there must come a time when
              landed property, like every other kind of property, is bound to
              fall within the category of profitably selfreproducing capital39 –
              and this in fact results from the same industrial development.
              Thus the squandering landowner, too, must either consume his
              capital, and thus be ruined, or himself become the farmer of his
              own estate – an agricultural industrialist.
              <br />
              <br />
              <div
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openDiminution ? "" : "0px",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)"
                }}
              >
                <button
                  onClick={() =>
                    this.setState({
                      openDiminution: !this.state.openDiminution
                    })
                  }
                >
                  The Diminution
                </button>
                {space}in the interest on money, which Proudhon regards as the
                annulling of capital and as a tendency to socialize capital, is
                therefore directly rather only a symptom of the total victory of
                working capital over squandering wealth – i.e., the
                transformation of all private property into industrial capital.
                It is a total victory of private property over all those of its
                qualities which are still in appearance human, and the complete
                subjection of the owner of private property to the essence of
                private property – labor. To be sure, the industrial capitalist
                also takes his pleasures. He does not by any means return to the
                unnatural simplicity of need; but his pleasure is only a
                side-issue – recreation – something subordinated to production;
                at the same time it is a calculated and, therefore, itself an
                economical pleasure. For he debits it to his capital’s expense
                account, and what is squandered on his pleasure must therefore
                amount to no more than will be replaced with profit through the
                reproduction of capital. Pleasure is therefore subsumed under
                capital, and the pleasure-taking individual under the
                capital-accumulating individual, whilst formerly the contrary
                was the case. The decrease in the interest rate is therefore a
                symptom of the annulment of capital only inasmuch as it is a
                symptom of the growing domination of capital – of the
                estrangement which is growing and therefore hastening to its
                annulment. This is indeed the only way in which that which
                exists affirms its opposite.
                <br />
                <br />
                The quarrel between the political economists about luxury and
                thrift is, therefore, only the quarrel between that political
                economy which has achieved clarity about the nature of wealth,
                and that political economy which is still afflicted with
                romantic, anti-industrial memories. Neither side, however, knows
                how to reduce the subject of the controversy to its simple
                terms, and neither therefore can make short work of the other.
                <br />
                <br />
                Moreover, rent of land qua rent of land has been overthrown,
                since, contrary to the argument of the Physiocrats which
                maintains that the landowner is the only true producer, modern
                political economy has proved that the landowner as such is
                rather the only completely unproductive rentier. According to
                this theory, agriculture is the business of the capitalist, who
                invests his capital in it provided he can expect the usual
                profit. The claim of the Physiocrats – that landed property, as
                the sole productive property, should alone pay state taxes and
                therefore should alone approve them and participate in the
                affairs of state – is transformed into the opposite position
                that the tax on the rent of land is the only tax on unproductive
                income, and is therefore the only tax not detrimental to
                national production. It goes without saying that from this point
                of view also the political privilege of landowners no longer
                follows from their position as principal tax-payers.
                <br />
                <br />
                Everything which Proudhon conceives as a movement of labor
                against capital is only the movement of labor in the
                determination of capital, of industrial capital, against capital
                not consumed as capital, i.e., not consumed industrially. And
                this movement is proceeding along its triumphant road – the road
                to the victory of industrial capital. It is clear, therefore,
                that only when labor is grasped as the essence of private
                property, can the economic process as such be analyzed in its
                real concreteness.
                <br />
                <br />
                Society, as it appears to the political economist, is civil
                society in which every individual is a totality of needs and
                only exists for the other person, as the other exists for him,
                insofar as each becomes a means for the other. The political
                economist reduces everything (just as does politics in its
                Rights of Man) to man, i.e., to the individual whom he strips of
                all determinateness so as to class him as capitalist or worker.
                <br />
                <br />
                The division of labor is the economic expression of the social
                character of labor within the estrangement. Or, since labor is
                only an expression of human activity within alienation, of the
                manifestation of life as the alienation of life, the division of
                labor, too, is therefore nothing else but the estranged,
                alienated positing of human activity as a real activity of the
                species or as activity of man as a species-being.
                <br />
                <br />
                As for the essence of the division of labor – and of course the
                division of labor had to be conceived as a major driving force
                in the production of wealth as soon as labor was recognized as
                <br />
                <br />
                Production does not simply produce man as a commodity, the human
                commodity, man in the role of commodity; it produces him in
                keeping with this role as a mentally and physically dehumanised
                being. – Immorality, deformity, and dulling of the workers and
                the capitalists. – Its product is the self-conscious and
                self-acting commodity ... the human commodity.... Great advance
                of Ricardo, Mill, etc., on Smith and Say, to declare the
                existence of the human being – the greater or lesser human
                productivity of the commodity – to be indifferent and even
                harmful. Not how many workers are maintained by a given capital,
                but rather how much interest it brings in, the sum-total of the
                annual savings, is said to be the true purpose of production.
                <br />
                <br />
                It was likewise a great and consistent advance of modern English
                political economy, that, whilst elevating labour to the position
                of its sole principle, it should at the same time expound with
                complete clarity the inverse relation between wages and interest
                on capital, and the fact that the capitalist could normally only
                gain by pressing down wages, and vice versa. Not the defrauding
                of the consumer, but the capitalist and the worker taking
                advantage of each other, is shown to be the normal relationship.
                <br />
                <br />
                The relations of private property contain latent within them the
                relation of private property as labour, the relation of private
                property as capital, and the mutual relation of these two to one
                another. There is the production of human activity as labour –
                that is, as an activity quite alien to itself, to man and to
                nature, and therefore to consciousness and the expression of
                life – the abstract existence of man as a mere workman who may
                therefore daily fall from his filled void into the absolute void
                – into his social, and therefore actual, non-existence. On the
                other hand, there is the production of the object of human
                activity as capital – in which all the natural and social
                characteristic of the object is extinguished; in which private
                property has lost its natural and social quality (and therefore
                every political and social illusion, and is not associated with
                any apparently human relations); in which the selfsame capital
                remains the same in the most diverse natural and social
                manifestations, totally indifferent to its real content. This
                contradiction, driven to the limit, is of necessity the limit,
                the culmination, and the downfall of the whole private-property
                relationship.
                <br />
                <br />
                It is therefore another great achievement of modern English
                political economy to have declared rent of land to be the
                difference in the interest yielded by the worst and the best
                land under cultivation; to have [exposed] the landowner's
                romantic illusions – his alleged social importance and the
                identity of his interest with the interest of society, a view
                still maintained by Adam Smith after the Physiocrats; and to
                [have] anticipated and prepared the movement of the real world
                which will transform the landowner into an ordinary, prosaic
                capitalist, and thus simplify and sharpen the contradiction
                [between capital and labour] and. hasten its resolution. Land as
                land, and rent as rent, have lost their distinction of rank and
                become insignificant capital and interest – or rather, capital
                and interest that signify only money.
                <br />
                <br />
                <div
                  style={{
                    color: "white",
                    backgroundColor: "rgb(10,10,20)",
                    transition: ".3s ease-in",
                    fontSize: this.state.openTCL ? "" : "0px",
                    width: "max-content",
                    maxWidth: "calc(100% - 40px)"
                  }}
                >
                  <button
                    style={{
                      transition: ".3s ease-in",
                      fontSize: this.state.openDiminution ? "" : "0px",
                      opacity: this.state.openDiminution ? 1 : 0
                    }}
                    onClick={() =>
                      this.setState({
                        openTCL: !this.state.openTCL
                      })
                    }
                  >
                    Time, Capital, Labor
                  </button>
                  {space}
                  The distinction between capital and land, between profit and
                  rent, and between both and wages, and industry, and
                  agriculture, and immovable and movable private property – this
                  distinction is not rooted in the nature of things, but is a
                  historical distinction, a fixed historical moment in the
                  formation and development of the contradiction between capital
                  and labour. In industry, etc., as opposed to immovable landed
                  property, is only expressed the way in which [industry] came
                  into being and the contradiction to agriculture in which
                  industry developed. This distinction only continues to exist
                  as a special sort of work – as an essential, important and
                  life-embracing distinction – so long as industry (town life)
                  develops over and against landed property (aristocratic feudal
                  life) and itself continues to bear the feudal character of its
                  opposite in the form of monopoly, craft, guild, corporation,
                  etc., within which labour still has a seemingly social
                  significance, still the significance of the real community,
                  and has not yet reached the stage of indifference to its
                  content, of complete being-for-self, i. e., of abstraction
                  from all other being, and hence has not yet become liberated
                  capital.
                  <br />
                  <br />
                  But liberated industry, industry constituted for itself as
                  such, and liberated capital, are the necessary development of
                  labour. The power of industry over its opposite is at once
                  revealed in the emergence of agriculture as a real industry,
                  while previously it left most of the work to the soil and to
                  the slave of the soil, through whom the land cultivated
                  itself. With the transformation of the slave into a free
                  worker – i.e., into a hireling – the landlord himself is
                  transformed into a captain of industry, into a capitalist – a
                  transformation which takes place at first through the
                  intermediacy of the tenant farmer. The tenant farmer, however,
                  is the landowner's representative – the landowner's revealed
                  secret: it is only through him that the landowner has his
                  economic existence – his existence as a private proprietor –
                  for the rent of his land only exists due to the competition
                  between the farmers.
                  <br />
                  <br />
                  Thus, in the person of the tenant farmer the landlord has
                  already become in essence a common capitalist. And this must
                  come to pass, too, in actual fact: the capitalist engaged in
                  agriculture – the tenant – must become a landlord, or vice
                  versa. The tenant's industrial hucksterism is the landowner's
                  industrial hucksterism, for the being of the former postulates
                  the being of the latter.
                  <br />
                  <br />
                  But mindful of their contrasting origin, of their line of
                  descent, the landowner knows the capitalist as his insolent,
                  liberated, enriched slave of yesterday and sees himself as a
                  capitalist who is threatened by him. The capitalist knows the
                  landowner as the idle, cruel, egotistical master of yesterday;
                  he knows that he injures him as a capitalist, but that it is
                  to industry that he owes all his present social significance,
                  his possessions and his pleasures; he sees in him a
                  contradiction to free industry and to free capital – to
                  capital independent of every natural limitation. This
                  contradiction is extremely bitter, and each side tells the
                  truth about the other. One need only read the attacks of
                  immovable on movable property and vice versa to obtain a clear
                  picture of their respective worthlessness. The landowner lays
                  stress on the noble lineage of his property, on feudal
                  souvenirs or reminiscences, the poetry of recollection, on his
                  romantic disposition, on his political importance, etc.; and
                  when he talks economics, it is only agriculture that he holds
                  to be productive. At the same time he depicts his adversary as
                  a sly, hawking, carping, deceitful, greedy, mercenary,
                  rebellious, heartless and spiritless person who is estranged
                  from the community and freely trades it away, who breeds,
                  nourishes and cherishes competition, and with it pauperism,
                  crime, and the dissolution of all social bonds, an extorting,
                  pimping, servile, smooth, flattering, fleecing, dried-up rogue
                  without honour, principles, poetry, substance, or anything
                  else. (Amongst others see the Physiocrat Bergasse, whom
                  Camille Desmoulins flays in his journal, Révolutions de France
                  et de Brabant; see von Vincke, Lancizolle, Haller, Leo,
                  Kosegarten and also Sismondi.)
                  <br />
                  <br />
                  [See on the other hand the garrulous, old-Hegelian theologian
                  Funke who tells, after Herr Leo, with tears in his eyes how a
                  slave had refused, when serfdom was abolished, to cease being
                  the property of the gentry. See also the patriotic visions of
                  Justus Möser, which distinguish themselves by the fact that
                  they never for a moment ... abandon the respectable,
                  petty-bourgeois "home-baked", ordinary, narrow horizon of the
                  philistine, and which nevertheless remain pure fancy. This
                  contradiction has given them such an appeal to the German
                  heart.- Note by Marx.]
                  <br />
                  <br />
                  Movable property, for its part, points to the miracles of
                  industry and progress. It is the child of modern times, whose
                  legitimate, native-born son it is. It pities its adversary as
                  a simpleton, unenlightened about his own nature (and in this
                  it is completely right), who wants to replace moral capital
                  and free labour by brute, immoral violence and serfdom. It
                  depicts him as a Don Quixote, who under the guise of
                  bluntness, respectability, the general interest, and
                  stability, conceals incapacity for progress, greedy
                  self-indulgence, selfishness, sectional interest, and evil
                  intent. It declares him an artful monopolist; it pours cold
                  water on his reminiscences, his poetry, and his romanticism by
                  a historical and sarcastic enumeration of the baseness,
                  cruelty, degradation, prostitution, infamy, anarchy and
                  rebellion, of which romantic castles were the workshops.
                  <br />
                  <br />
                  It claims to have obtained political freedom for everybody; to
                  have loosed the chains which fettered civil society; to have
                  linked together different worlds; to have created trade
                  promoting friendship between the peoples; to have created pure
                  morality and a pleasant culture; to have given the people
                  civilised needs in place of their crude wants, and the means
                  of satisfying them. Meanwhile, it claims, the landowner – this
                  idle, parasitic grain-profiteer – raises the price of the
                  people's basic necessities and so forces the capitalist to
                  raise wages without being able to increase productivity, thus
                  impeding [the growth of] the nation's annual income, the
                  accumulation of capital, and therefore the possibility of
                  providing work for the people and wealth for the country,
                  eventually cancelling it, thus producing a general decline –
                  whilst he parasitically exploits every advantage of modern
                  civilisation without doing the least thing for it, and without
                  even abating in the slightest his feudal prejudices. Finally,
                  let him – for whom the cultivation of the land and the land
                  itself exist only as a source of money, which comes to him as
                  a present - let him just take a look at his tenant farmer and
                  say whether he himself is not a downright, fantastic, sly
                  scoundrel who in his heart and in actual fact has for a long
                  time belonged to free industry and to lovely trade, however
                  much he may protest and prattle about historical memories and
                  ethical or political goals. Everything which he can really
                  advance to justify himself is true only of the cultivator of
                  the land (the capitalist and the labourers), of whom the
                  landowner is rather the enemy. Thus he gives evidence against
                  himself. [Movable property claims that] without capital landed
                  property is dead, worthless matter; that its civilised victory
                  has discovered and made human labour the source of wealth in
                  place of the dead thing. (See Paul Louis Courier, Saint-Simon,
                  Ganilh, Ricardo, Mill, McCulloch and Destutt de Tracy and
                  Michel Chevalier.)
                  <br />
                  <br />
                  The real course of development (to be inserted at this point)
                  results in the necessary victory of the capitalist over the
                  landowner – that is to say, of developed over undeveloped,
                  immature private property – just as in general, movement must
                  triumph over immobility; open, self-conscious baseness over
                  hidden, unconscious baseness; cupidity over self-indulgence;
                  the avowedly restless, adroit self-interest of enlightenment
                  over the parochial, worldly-wise, respectable, idle and
                  fantastic self-interest of superstition; and money over the
                  other forms of private property.
                  <br />
                  <br />
                  Those states which sense something of the danger attaching to
                  fully developed free industry, to fully developed pure
                  morality and to fully developed philanthropic trade, try, but
                  in vain, to hold in check the capitalisation of landed
                  property.
                  <br />
                  <br />
                  Landed property in its distinction from capital is private
                  property – capital – still afflicted with local and political
                  prejudices; it is capital which has not yet extricated itself
                  from its entanglement with the world and found the form proper
                  to itself – capital not yet fully developed. It must achieve
                  its abstract, that is, its pure, expression in the course of
                  its cosmogony.
                  <br />
                  <br />
                  The character of private property is expressed by labour,
                  capital, and the relations between these two. The movement
                  through which these constituents have to pass is:
                  <br />
                  <br />
                  First. Unmediated or mediated unity of the two.
                  <br />
                  <br />
                  Capital and labour are at first still united. Then, though
                  separated and estranged, they reciprocally develop and promote
                  each other as positive conditions.
                  <br />
                  <br />
                  [Second.] The two in opposition, mutually excluding each
                  other. The worker knows the capitalist as his own
                  non-existence, and vice versa: each tries to rob the other of
                  his existence.
                  <br />
                  <br />
                  [Third.] Opposition of each to itself. Capital = stored-up
                  labour = labour. As such it splits into capital itself and its
                  interest, and this latter again into interest and profit. The
                  capitalist is completely sacrificed. He falls into the working
                  class, whilst the worker (but only exceptionally) becomes a
                  capitalist. Labour as a moment of capital – its costs. Thus
                  the wages of labour - a sacrifice of capital.
                  <br />
                  <br />
                  Splitting of labour into labour itself and the wages of
                  labour. The worker himself a capital, a commodity.
                  <br />
                  <br />
                  Clash of mutual contradictions.
                  <br />
                  <br />A{space}
                  <a
                    style={{ color: "white" }}
                    href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch04.htm"
                  >
                    pauper
                  </a>
                  , like a capitalist (rentier), lives on the revenue of the
                  country. He does not enter into the production costs of the
                  product, and consequently Monsieur Ganilh would call him a
                  representative of exchangeable value. Ditto, for a criminal
                  who is fed in prison. A large part of the “unproductive
                  labourers”, holders of State sinecures, etc., are simply
                  respectable paupers.
                </div>
              </div>
            </i>
            <div
              style={{
                color: "black",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid",
                backgroundColor: "rgb(240,230,250)"
              }}
            >
              <a href="https://www.quora.com/unanswered/Was-Marx-the-first-person-to-use-the-word-rentiers">
                <h4 style={{ margin: "4px 0px" }}>
                  Was Marx the first person to use the word ‘rentiers’?
                </h4>
              </a>
              (Balihar Sanghera): In classical political economy, landowners and
              financiers were depicted as passive and useless individuals, who
              added empty pricing to the cost of living and doing business. They
              extracted economic rent without effort or justice by virtue of
              having property rights that entitled them to an income. Adam Smith
              (1776) observed: ‘As soon as the land of any country has all
              become private property, the landlords, like all other men, love
              to reap where they never sowed, and demand a rent even for its
              natural produce’ (book 1, chapter 6, section 8). Landowners did
              not work, but depended on tenants and farmers to produce a
              surplus, part of which was extracted as rent. It was unearned
              income.
              <br />
              <br />
              John Stuart Mill (1848) also criticized landowners: ‘[The
              landlords] grow richer, as it were in their sleep, without
              working, risking or economizing. What claim have they, on the
              general principle of social justice, to this accession of riches?’
              (book 5, chapter 2, section 5). Landowners were viewed as idle and
              unproductive, undeserving of their income. In contrast,
              capitalists and workers were characterized as entrepreneurial and
              productive, because they contributed to wealth creation by
              producing new commodities.
              <br />
              <br />
              John Maynard Keynes (1936: book 6, chapter 24, section 2) made
              similar remarks in his criticisms on financiers: ‘Interest today
              rewards no genuine sacrifice, any more than does the rent of land.
              The owner of capital can obtain interest because capital is
              scarce, just as the owner of land can obtain rent because land is
              scarce.’ Landowners and financiers extracted income merely on the
              basis of their ownership of scarce assets. In advocating ‘the
              euthanasia of the rentier, of the functionless investor’ (ibid.),
              Keynes recognized that they just added costs to the production of
              goods and services, thereby damaging the economy’s
              competitiveness. (
              <a href="https://journals.sagepub.com/doi/full/10.1177/0539018420943077">
                Sage
              </a>
              )
            </div>
            <h4>The aware technologist focuses on ground-rent.</h4>
            <i>
              Marx in Private Property and Communism quotes Adam Smith on land
              per agriculture. Marx uses it for debt and I for insurance,
              quarterly cost to revenue and profit commercial capital is ground
              rent that is actually a cost of storage and tranportation in the
              commodity (vault debit) proper in excess.
            </i>
            {space}
            <b>
              <a
                href="https://leisuretoprefer.com"
                style={{
                  color: "black"
                }}
              >
                The Leisure to Prefer
              </a>
              :
            </b>
            {space}
            The only positive sum is the division of labor not ground rent of
            the land. Ground rent is actually storage and transportation costs
            of the commodity proper. Are the injured and non-speaking
            developmentally disabled a joke to the Social Security office?
            <h4>Inelastic individual demand is supply as labor earned.</h4>
            <i>
              A technology guild yet not a guild of technologists would be
              natural and substitutive of common universal fixed sinking costs.
              Substitutive propensity complements demand if product revenue
              equates those fixed startup costs for the individual intermediate
              or average cost per.
              {/**"'hey, egghead experts are in charge.'"  Alex Hochuli on 'technopopulism'
        "broad distrust civic institutions voluntary [necessitates]"

        geohashing and crowdfunding 
        "refines examing oneself, ['politics should be somber and depressing']"
        "memes aren't politics [in this fashion]"
        */}
            </i>
            {space}
            <b>War on drugs, terror, geohashing:</b>
            {space}
            Natural monopolies do not occur because natural is use of the
            technological guild. Safest to whom but the capitalist does the
            commodity have no motive to be overproduced in wards to destroy its
            market.
            {/**can't buy off with growth more zero  */}
            <h1>
              The <a href="https://realvelocity.asia">Natural Rate</a> of{" "}
              <a href="https://data.oecd.org/lprdty/gdp-per-hour-worked.htm">
                Production
              </a>
              :
              {/**looking to get back into racism, idk if i have time, ok let me know */}
            </h1>
            <b>"Stagflation is less productivity yet net higher prices."</b>
            {space}
            Is the natural rate of the cost of living less labor time not the
            mean of profits, wages, and expenses between quarters of businesses?
            <br />
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              But with the development of industry, the proletariat not only
              increases in number; it becomes concentrated in greater masses,
              its strength grows, and it feels that strength more. The various
              interests and conditions of life within the ranks of the
              proletariat are more and more equalised, in{space}
              <a
                style={{ color: "white" }}
                href="https://www.marxists.org/archive/marx/works/1848/communist-manifesto/ch01.htm"
              >
                proportion
              </a>
              {space}as machinery obliterates all distinctions of labour, and
              nearly everywhere reduces wages to the same low level. The growing
              competition among the bourgeois, and the resulting commercial
              crises, make the wages of the workers ever more fluctuating. The
              increasing improvement of machinery, ever more rapidly developing,
              makes their livelihood more and more precarious; the collisions
              between individual workmen and individual bourgeois take more and
              more the character of collisions between two classes. Thereupon,
              the workers begin to form combinations (Trades’ Unions) against
              the bourgeois; they club together in order to keep up the rate of
              wages; they found permanent associations in order to make
              provision beforehand for these occasional revolts. Here and there,
              the contest breaks out into riots.
              <br />
              <div
                style={{
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid",
                  backgroundColor: "white"
                }}
              >
                "The only way to fight for a proper working day" have morphed to
                fine working use tech living wage by hour for the whole of our
                preferred universal leisure.
              </div>
              <a
                href="https://www.marxists.org/archive/marx/works/1885-c2/ch06.htm"
                style={{ color: "white" }}
              >
                Advance capital
              </a>
              {space}
              creates neither product nor value[, but] reduces pro{space}
              <i>tanto</i>
              {space}the dimensions in which the advanced capital functions
              productively[,] as though one part of the product were transformed
              into a machine which buys and sells the rest of the product [and]
              brings about a reduction of the product. It does not participate
              in the productive process, although it can diminish the
              labour-power, etc., spent on circulation[, and so it] constitutes
              merely a part of the costs of circulation.
              <br />
              <br />
              The average rate of interest prevailing in a certain country — as
              distinct from the continually fluctuating market rates — cannot be
              determined by any law. In this sphere there is no such thing as a
              natural rate of interest in the sense in which economists speak of
              a natural rate of profit and a natural rate of wages.
              <br />
              <br />
              The credit system appears as the main lever of over-production and
              over-speculation in commerce solely because the reproduction
              process, which is{space}
              <i>
                <b>elastic by nature</b>
              </i>
              , is here forced to its extreme limits, and is so forced because a
              large part of the social capital is employed by people who do not
              own it and who consequently tackle things quite differently than
              the owner, who anxiously weighs the limitations of his private
              capital in so far as he handles it himself.
              <br />
              <br />
              {/**session nodes good enough. Q was right. Patriot parole intranet is late */}
              [T]he natural conditions of [the direct producer's] labour, above
              all the soil cultivated by him, must be productive enough, in a
              word, the natural productivity of his labour must be big enough to
              give him the possibility of retaining some surplus-labour over and
              above that required for the satisfaction of his own indispensable
              needs.
              {/**useless premium to gold for skimping electronic fund transfer tax. Thetax.party */}
              <br />
              <br />
              The bourgeoisie finds itself involved in a constant battle. At
              first with the aristocracy; later on, with those portions of the
              bourgeoisie itself, whose interests have become antagonistic to
              the progress of industry; at all time with the bourgeoisie of
              foreign countries. In all these battles, it sees itself compelled
              to appeal to the proletariat, to ask for help, and thus, to drag
              it into the political arena. The bourgeoisie itself, therefore,
              supplies the proletariat with its own elements of political and
              general education, in other words, it furnishes the proletariat
              with weapons for fighting the bourgeoisie.
            </div>
            rollover minutes of fixed subscription costs - generous is
            individual use costs, or without expiry. “What difference at this
            point does it make.” Minimal viable duress cost to revenue. State
            spending is 50% deficit so.
            {!this.state.america && <br />}
            The dollar is all we have the poor and not because of UT NM WY
            {!this.state.america && <br />}
            And not for the free labor because only does charity of welfare
            happen for bondage.
            {!this.state.america && <br />}
            {!this.state.america && <br />}
            <b>
              Will economic growth in physical inventory or ordinary consumption
              by machine or man be right for the British people?
            </b>
            {space}
            Aren't{space}
            <a href="https://www.quora.com/Do-the-British-not-break-into-their-own-oil-reserves-because-the-desert-has-less-to-be-destroyed-or-the-labor-is-too-expensive/answer/Neil-Naessens">
              northerners
            </a>
            {space}paid more because that’s the{space}
            <a href="https://www.quora.com/unanswered/Why-is-a-trade-deficit-unfortunate-with-a-poor-efficiency-coefficience">
              real physical
            </a>
            {space}it calls for.{space}
            <a href="https://saverparty.xyz/global">Too-expensive-labor</a>
            {space}to apply. Why are Tories for energy bill intervention before
            reversing their debt?
            <br />
            Simply creating destruction, efficiency per hour for profit. Isn’t
            MAGA indifference of the world? Can’t plumbing be filtered in the
            home? How does a marginal home price deflate? How does good will
            cause deflation? Are we to kill{space}
            <a href="https://saverparty.xyz/jesus">Messiah</a>
            {space}
            <i>(Without Christ the lamb, there is no guilt)</i>? Does economic
            nationalism as “efficiency per hour” not rather require lower
            profits as expense per hour productivity? Why is a trade deficit
            unfortunate with a poor efficiency
            {space}
            <a href="https://saverparty.xyz/global">coefficience</a>? How is
            outsource dependency a foreign issue?{space}
            <a href="https://www.quora.com/unanswered/Is-physical-resource-depletion-economic-utility">
              Is physical resource depletion economic utility?
            </a>
            {space}
            <a href="https://www.quora.com/unanswered/Is-physical-exports-not-self-stunting-as-per-an-individuals-use">
              Is physical exports not self stunting as per an individual's use?
            </a>
            <span style={{ display: "flex" }}>
              <h4 style={{ margin: "8px" }}>Is expense per hour efficient?</h4>{" "}
              <i>-isms, ism</i>
            </span>
            <i>
              <a
                href="https://www.youtube.com/watch?v=D43NASit-J0"
                style={{ color: "black" }}
              >
                Capitalism
              </a>
              {space}necessarily controls property by socializing equity.
            </i>
            <br />
            Social capital (the anarchy of production) is uncontrolled property.
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              …social capital is employed by people who do not own it and who
              consequently tackle things quite differently than the owner, who
              anxiously weighs the limitations of his private capital in so far
              as he handles it himself.
            </div>
            Social production rather{space}
            <i>privatizes property</i>
            {space}as capital instead of production, …{space}
            <i>by making the properties of production, public</i>, and{space}
            <a href="https://saltbank.org" style={{ color: "black" }}>
              the end product, private
            </a>
            .
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              This ...capitalist mode of production... is private production
              without the control of private property. … a monopoly in certain
              spheres and thereby requires state interference. So long as the
              laws of exchange[
              {space}
              <i>honest and direct mechanism design</i>] are observed in every
              single act of exchange[,] the mode of appropriation can be
              completely revolutionized[,] without in any way affecting the
              property rights which correspond to commodity production.
            </div>
            To privatize the properties of production is social capital, a
            certain anarchy of production.{space}
            <a href="https://www.quora.com/Will-I-be-ostracized-if-I-say-if-you-don-t-vote-for-me-you-ain-t-Chinese-as-a-Marxist-running-in-NJ-for-U-S-Senate">
              Is debt, insurance, and rent “free enterprise”
            </a>
            ?{!this.state.america && <br />}
            <span>
              The <a href="https://humanharvest.info">Natural Rate</a> vs. IS-LM
            </span>
            {!this.state.america && <br />}
            Overeating[-by time] implied [, implied] by real growth, or the
            subsummation of deflation by shrinkflation, a velocity not by a
            molar weight to water. A fee may make for a larger social credit
            capital exchange value fee, for such is access (yes, the 'access'
            of) from the individual use exchange in excess of use.
            <span style={{ display: "flex" }}>
              {!this.state.america && (
                <h4 style={{ margin: "8px" }}>certain technology guild</h4>
              )}
              {space}
              <i
                style={{
                  fontSize: "12px"
                }}
              >
                physical cost to production
                <br />+ profit or ground rent
              </i>
            </span>
            <div
              style={{
                backgroundColor: "grey",
                color: "white",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              <i style={{ backgroundColor: "hotpink" }}>
                Wherever a great deal can be made by the use of money, a great
                deal will be given for the use of it; wherever little can be
                made by it, little will be given. (Adam Smith, WON, Vol. I, p.
                79)
              </i>
              <br />
              <br />
              <i>
                The rent of land ... is naturally a monopoly price. It is not at
                all proportioned to what the landlord may have laid out upon the
                improvement of the land, or to what he can afford to take; but
                to what the farmer can afford to give. (Adam Smith, WON, p.
                131.)
              </i>
              <br />
              <br />
              The contests about wages in Manufacture, pre-suppose manufacture,
              and are in no sense directed against its existence.{space}
              <a href="https://marx.quora.com/Why-would-you-work-for-someone-else">
                The opposition
              </a>
              {space}against the establishment of new manufactures, proceeds
              from the guilds and privileged towns, not from the workpeople.
              …Its last words are: corporate guilds for manufacture; patriarchal
              relations in agriculture. …The money capital formed by means of
              usury and commerce was prevented from turning into industrial
              capital, in the country by the feudal constitution, in the towns
              by the guild organisation.
              <div
                ref={this.mod}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                <div
                  style={{
                    color: "white",
                    backgroundColor: "cornflowerblue",
                    float: "right"
                  }}
                >
                  NEW okay: Go die not drop dead (1/10/2022)
                </div>
                Political Treatise then Rousseau
                <h4 style={{ margin: "4px 0px" }}>The Anti-Mod</h4>
                Abide. Hate - Non-developmentally nor injuriously disabled
                innuendo.
                <br />
                One Time Commercial Ads. Repetitive & Commercial Ad - A
                recurring commercial advertisement.
                <br />
                Inblock. Harassment - Threat with a timestamp (or without, until
                psych wards and prisons are separated).
              </div>
              <i>
                For one thing, by keeping{space}
                <a href="https://www.marxists.org/archive/marx/works/1869/letters/69_11_29-abs.htm">
                  secrets
                </a>
                {space}in trade if the market is at a great distance from those
                who supply it, that is, by concealing a price change, its rise
                above the natural level. This concealment has the effect that
                other capitalists do not follow him in investing their capital
                in this branch of industry or trade. Then again by keeping
                secrets in manufacture, which enable the capitalist to reduce
                the costs of production and supply his commodity at the same or
                even at lower prices than his competitors while obtaining a
                higher profit. (Deceiving by keeping secrets is not immoral?
                {space}
                <a href="https://virtualid.quora.com/Isn-t-insider-information-allowed-when-there-are-political-office-holds-reports-to-abstain-and-a-comment-box-in-the-brok">
                  Dealings
                </a>
                {space}on the Stock Exchange.) Furthermore, where production is
                restricted to a particular locality (as in the case of a rare
                wine), and where the effective demand can never he satisfied.
                Finally, through monopolies exercised by individuals or
                companies. Monopoly price is the highest possible. (Adam Smith,
                WON, Vol. I, pp. 53-54)
                <br />
                <br />
                Other fortuitous causes which can raise the profit on capital:
                the acquisition of new territories, or of new branches of trade,
                often increases the profit on capital even in a wealthy country,
                because they withdraw some capital from the old branches of
                trade, reduce competition, and cause the market to be supplied
                with fewer commodities, the prices of which then rise: those who
                deal in these commodities can then afford to borrow at a higher
                rate of interest. (Adam Smith, WON, Vol. I, p. 83)
              </i>
              <br />
              <br />
              Moreover, the larger the concern, and with it the number of hands,
              the greater the loss and inconvenience caused by every conflict
              between master and men; and thus a new spirit came over the
              masters, especially the large ones, which taught them to avoid
              unnecessary squabbles, to acquiesce in the existence and power of
              Trades Unions, and finally even to discover in strikes — at
              opportune times — a powerful means to serve their own ends. The
              largest manufacturers, formerly the leaders of the war against the
              working-class, were now the foremost to preach peace and harmony.
              {space}
              <span style={{ fontSize: "12px" }}>
                And for a very good reason, The fact is, that all these
                concessions to justice and philanthropy were nothing else but
                means to accelerate the concentration of capital in the hands of
                the few, for whom the niggardly extra extortions of former years
                had lost all importance and had become actual nuisances; and to
                crush all the quicker and all the safer their smaller
                competitors who could not make both ends meet without such
                perquisites. Thus the development of production on the basis of
                the capitalistic system has of itself sufficed — at least in the
                leading industries, for in the more unimportant branches this is
                far from being the case — to do away with all those minor
                grievances which aggravated the workman’s fate during its
                earlier stages. And thus it renders more and more evident the
                great central fact, that the cause of the miserable condition of
                the working class is to be sought, not in these minor
                grievances, but in the Capitalistic System itself. The
                wage-worker sells to the capitalist his labor-force for a
                certain daily sum.
              </span>
              {space}After a few hours’ work he has reproduced the value of that
              sum; but the substance of his contract is, that he has to work
              another series of hours to complete his working day; and the value
              he produces during these additional hours of surplus labor is
              surplus value which costs the capitalist nothing but yet goes into
              his pocket. That is the basis of the system which tends more and
              more to split up civilized society into a few Vanderbilts, the
              owners of all the means of production and subsistence, on the one
              hand, and an immense number of wage-workers, the owners of nothing
              but their labor-force, on the other. And that this result is
              caused, not by this or that secondary grievance, but by the system
              itself — this fact has been brought out in bold relief by the
              development of Capitalism in England since 1847.
              <br />
              <br />
              <i style={{ backgroundColor: "hotpink" }}>
                The more a commodity comes to be manufactured — the more it
                becomes an object of manufacture — the greater becomes that part
                of the price which resolves itself into wages and profit in
                proportion to that which resolves itself into rent. In the
                progress of the manufacture of a commodity, not only the number
                of profits increases, but every subsequent profit is greater
                than the foregoing; because the capital from which it is derived
                must always be greater. The capital which employs the weavers,
                for example, must always be greater than that which employs the
                spinners; because it not only replaces that capital with its
                profits, but pays, besides, the wages of weavers; and the
                profits must always bear some proportion to the capital. (WON,
                Vol. I, p. 45)
              </i>
              <br />
              <br />
              <div
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openconstantLiving ? "" : "0px",
                  color: "white",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)"
                }}
              >
                <button
                  onClick={() =>
                    this.setState({
                      openconstantLiving: !this.state.openconstantLiving
                    })
                  }
                >
                  Constant Living
                </button>
                As a general rule, labourers cannot co-operate without being
                brought together: their assemblage in one place is a necessary
                condition of their co-operation. Hence wage-labourers cannot
                co-operate, unless they are employed simultaneously by the same
                capital, the same capitalist, and unless therefore their
                labour-powers are bought simultaneously by him. The total value
                of these labour-powers, or the amount of the wages of these
                labourers for a day, or a week, as the case may be, must be
                ready in the pocket of the capitalist, before the workmen are
                assembled for the process of production. The payment of 300
                workmen at once, though only for one day, requires a greater
                outlay of capital, than does the payment of a smaller number of
                men, week by week, during a whole year. Hence the number of the
                labourers that co-operate, or the scale of co-operation,
                depends, in the first instance, on the amount of capital that
                the individual capitalist can spare for the purchase of
                labour-power; in other words, on the extent to which a single
                capitalist has command over the means of subsistence of a number
                of labourers.
                <br />
                <br />
                And as with the variable, so it is with the constant capital.
                For example, the outlay on raw material is 30 times as great,
                for the capitalist who employs 300 men, as it is for each of the
                30 capitalists who employ 10 men. The value and quantity of the
                instruments of labour used in common do not, it is true,
                increase at the same rate as the number of workmen, but they do
                increase very considerably. Hence, concentration of large masses
                of the means of production in the hands of individual
                capitalists, is a material condition for the co-operation of
                wage-labourers, and the extent of the co-operation or the scale
                of production, depends on the extent of this concentration.
                <br />
                <br />
                Within the{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch04.htm"
                >
                  productive
                </a>
                {space}class itself commercial middlemen will have multiplied,
                but in particular those engaged in machine construction, railway
                construction, mining and excavation; moreover, in agriculture
                labourers engaged in stock-raising will have increased in
                number, and also those employed in producing chemical and
                mineral materials for fertilisers, etc. Further, the farmers who
                grow raw materials for industry will have risen in number, in
                proportion to those producing means of subsistence; and those
                who provide fodder for cattle, in proportion to those who
                produce means of subsistence for people. As the constant capital
                grows, so also does the proportionate quantity of the total
                labour which is engaged in its reproduction. Nevertheless, the
                part [of the population] directly producing means of
                subsistence, although its number declines, ||368| produces more
                products than before. Its labour is more productive. While for
                the individual capital the fall in the variable part of the
                capital as compared with the constant part takes the direct form
                of a reduction in the part of the capital expended in wages, for
                the total capital—in its reproduction—this necessarily takes the
                form that a relatively greater part of the total labour employed
                is engaged in the reproduction of means of production than is
                engaged in the production of products themselves—that is, in the
                reproduction of machinery (including means of communication and
                transport and buildings), of auxiliary materials (coal, gas,
                oil, tallow, leather belting, etc.) and of plants which form the
                raw material for industrial products. Relatively to the
                manufacturing labourers, agricultural labourers will decline in
                number. Finally the luxury, labourers will increase in number,
                since the higher revenue will consume more luxury products.
                <br />
                <br />
                The variable capital is resolved into revenue, firstly wages,
                secondly profit. If therefore capital is conceived as something
                contrasted with revenue, the constant capital appears to be
                capital in the strict sense: the part of the total product that
                belongs to production and enters into the costs of production
                without being individually consumed by anyone (with the
                exception of draught cattle). This part may originate entirely
                from profit and wages. In the last analysis, it can never
                originate from these alone; it is the product of labour, but of
                labour which regarded the instrument of production itself as
                revenue, as the savage did the bow. But once transformed into
                constant capital, this part of the product is no longer
                resolvable into wages and profit, although its reproduction
                yields wages and profit. A part of the product belongs to this
                part. Each subsequent product is the product of this past labour
                and of present labour. The latter can only be continued in so
                far as it returns a part of the total product to production. It
                must replace the constant capital in kind. If it grows more
                productive, it replaces the product, but not its value, reducing
                this value as a result. If it grows less productive, it raises
                its value. In the first case the aliquot part drawn by past
                labour from the total product falls; in the second case it
                rises. In the first case the living labour becomes more
                productive, in the second, less productive.
                <br />
                <br />
                The factors which reduce the costs of the constant capital, also
                include improved raw materials. For example, it is not possible
                to make the same quantity of twist in the same time both from
                good and from had raw cotton, leaving entirely out of account
                the relative quantity of waste, etc. Hence the importance of the
                quality of seed, etc.
                <br />
                <br />
                An example of the first: the linking together of spinning and
                weaving. An example of the second: the mine owners of
                Birmingham, who took over the complete process of making iron,
                which had formerly been divided between a number of
                entrepreneurs and owners.
              </div>
              <div
                style={{
                  backgroundColor: "cornflowerblue",
                  color: "white",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                His whole stock, therefore, is distinguished into two parts.
                That part which,{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.marxists.org/reference/archive/smith-adam/works/wealth-of-nations/book02/ch01.htm"
                >
                  he expects
                </a>
                , is to afford him this revenue, is called his capital. The
                other is that which supplies his immediate consumption; and
                which consists either, first, in that portion of his whole stock
                which was originally reserved for this purpose; or, secondly, in
                his revenue, from whatever source derived, as it gradually comes
                in; or, thirdly, in such things as had been purchased by either
                of these in former years, and which are not yet entirely
                consumed; such as a stock of clothes, household furniture, and
                the like.
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                Ordinary is not competitive from time to time.
                <br />
                <br />
                When machinery is added, verily is it non-deflationary growth
                (of employment) until proven otherwise. Variable capital is of
                the sustenance of (commodity/machine-capital making) labor in
                Marxiety, the short-term employment that is long term in dynamic
                efficiency in modern econ (I will only attest video games as
                such non-inflationary long term employment growth account/in
                terms of living overall). Fixed capital is what you made of it.
                This idea is that of the commodity versus the manager and
                service worker, only useful in their circulative ability to
                obtain countenance.
                <div
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    padding: !this.state.america && "10px",
                    margin: "4px 0px",
                    width: "calc(100% - 40px)",
                    border: "1px solid"
                  }}
                >
                  Fixed capital, as we saw, circulates as value only to the
                  degree that it is used up or consumed as use value in the
                  production process. But the time in which it is consumed and
                  in which it must be reproduced in its form as use value
                  depends on its relative durability. Hence its durability, or
                  its greater or lesser perishability – the greater or smaller
                  amount of time during which it can continue to perform its
                  function within the repeated production processes of capital –
                  this aspect of its use value here becomes a form-determining
                  moment, i.e. a determinant for capital as regards its form,
                  not as regards its matter. The necessary reproduction time of
                  fixed capital, together with the proportion of the total
                  capital consisting of it, here modify, therefore, the turnover
                  time of the total capital, and thereby its realization.
                </div>
                “Capital” is not structures, equipment, personal durable goods,
                nor intellectual property, but rather constant capital by raw
                material of account cardinally in seriatim (normal-assumed
                constant capital, a natural rate of productivity, expenses to
                hour from the last period of observation). This is in line with
                Adam Smith,{space}
                <a href="https://marginalism.uk">J.B.Say</a>, and probably not
                Alfred Marshall.
              </div>
              The quantity of actual material, in which the value of the
              constant capital is incorporated, is altogether irrelevant to the
              formation of value and the rate of profit, which varies inversely
              to this value no matter what the ratio of the increase or decrease
              of the value of constant capital to the mass of material use-value
              which it represents. It is different with{space}
              <a
                style={{ color: "white" }}
                href="https://www.marxists.org/archive/marx/works/1894-c3/ch03.htm"
              >
                variable capital
              </a>
              . It is not the value it has, not the labour incorporated in it,
              that matter at this point, but this value as a mere index of the
              total labour that it sets in motion and which is not expressed in
              it — the total labour, whose difference from the labour expressed
              in that value, hence the paid labour, i.e., that portion of the
              total labour which produces surplus-value, is all the greater, the
              less labour is contained in that value itself.
              <div
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.opensimpleReproduction ? "" : "0px",
                  backgroundColor: "grey",
                  color: "white",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)"
                }}
              >
                <button
                  onClick={() =>
                    this.setState({
                      opensimpleReproduction: !this.state.opensimpleReproduction
                    })
                  }
                >
                  simple reproduction
                </button>
                He advances to himself (
                <a
                  style={{ color: "white" }}
                  href="https://www.marxists.org/archive/marx/works/1885-c2/ch20_01.htm"
                >
                  immaterial
                </a>
                {space}whether out of his own pocket or by means of credit from
                the pocket of somebody else) money in anticipation of
                surplus-value still to be snatched by him; but in doing so he
                also advances a circulating medium for the realisation of
                surplus-value to be realised later. If, on the contrary, the
                business has been running regularly for a longer period payments
                and receipts are distributed over different terms throughout the
                year. But one thing continues uninterruptedly, namely, the
                consumption of the capitalist, which anticipates, and whose
                volume is computed on a definite proportion of, the customary or
                estimated revenue. With every portion of commodities sold, a
                portion of the surplus-value to be produced annually is also
                realised. But if during the entire year only as much of the
                produced commodities is sold as is required to replace the
                constant and variable capital-values contained in them, or if
                prices were to fall to such an extent that only the advanced
                capital-value contained in the entire annual commodity-product
                should be realised on its sale, then the anticipatory character
                of the expenditure of money in expectation of future
                surplus-value would be clearly revealed. If our capitalist
                fails, his creditors and the court investigate whether his
                anticipated private expenditures were in proper proportion to
                the volume of his business and to the receipt of surplus-value
                usually or normally corresponding to it.
                <br />
                <br />
                So far as the entire capitalist class is concerned, the
                proposition that it must itself throw into circulation the money
                required for the realisation of its surplus-value
                (correspondingly also for the circulation of its capital,
                constant and variable) not only fails to appear paradoxical, but
                stands forth as a necessary condition of the entire mechanism.
                For there are here only two classes: the working-class disposing
                only of its labour-power, and the capitalist class, which has a
                monopoly of the social means of production and money. It would
                rather be a paradox if the working-class were to advance in the
                first instance from its own resources the money required for the
                realisation of the surplus-value contained in the commodities.
                But the individual capitalist makes this advance only by acting
                as a buyer, expending money in the purchase of articles of
                consumption or advancing money in the purchase of elements of
                his productive capital, whether of labour-power or means of
                production. He never parts with his money unless he gets an
                equivalent for it. He advances money to the circulation only in
                the same way as he advances commodities to it. He acts in both
                instances as the initial point of their circulation.
                <br />
                <br />
                The actual process is obscured by two circumstances:
                <br />
                <br />
                1) The appearance in the process of circulation of industrial
                capital of merchant’s capital (the first form of which is always
                money, since the merchant as such does not create any “product”
                or “commodity”) and of money-capital as an object of
                manipulation by a special kind of capitalists.
                <br />
                <br />
                2) The division of surplus-value – which must always be first in
                the hands of the industrial capitalist – into various
                categories, as vehicles of which there appear, aside from the
                industrial capitalist, the landlord (for ground-rent), the
                usurer (for interest), etc., furthermore the government and its
                employees, rentiers, etc. These gentry appear as buyers
                vis-à-vis the industrial capitalist and to that extent as
                converters of his commodities into money; they too throw “money”
                pro parte into the circulation and he gets it from them. But it
                is always forgotten from what source they derived it originally,
                and continue deriving it ever anew.
              </div>
            </div>
            Does John M. Keynes not think the{space}
            <a href="https://www.quora.com/unanswered/Isnt-Keynes-and-barter-dichotomous">
              liquidity
            </a>
            {space}of credit begets output elastically? Should FEMA and the EPA
            collect rainwater in vault money? If a torus reactor were not
            prevented by the government to keep us working, would Larry Kudlow
            melt into a puddle?{space}
            <i>Does 'the' not imply a past affectation?</i>
            {space}Isn’t marginal “individual” and utility “use”? Is growth
            (naturally) life? (Is labor not to be against growth?) Isn’t
            productivity by hour just the natural rate of velocity real
            (discounting) notwithstanding? If a motive is not for punitive
            damages, is the investigation not extrajudicial? Are user experience
            designers to press the mass corpus linguistic intelligence as a
            politician will? Is individual use in excess of exchange, -value,
            not when there is consumer surplus by price control or inelastic
            labor for other markets? Is the most generous pricing scheme not by
            individual use versus social exchange, -value, fees? A fee may make
            for a larger social credit capital exchange value fee, for such is
            access from the individual use. Isn’t a falling debt ratio only
            marginally better than having none? Is there no choice not to borrow
            to keep up with the exchange value costs in excess of individual use
            by expiry or non-compete agreement padrones? Would a{space}
            <a href="https://saverparty.xyz/racists">Native American</a>
            {space}be against cooking{space}
            <a href="https://podcasts.apple.com/us/podcast/subcontracting-marginal-profits/id1629354788?i=1000569483654">
              horse meat
            </a>
            ? ‘The’ may describe such evidence and/or asserting predictions from
            historical reference, too.{space}
            Does 'affectation' not imply the subject is "one of many causes"
            rather than "one of the{space}
            <a href="https://www.quora.com/unanswered/Can-something-have-multiple-causes-polyphyletically-or-do-bivariate-results-always-prove-endogenous-coefficience-in-error">
              effectuations
            </a>
            "? Is the historically-borrowed "Luddite" class not eternally rather
            called 'short-term employment'?
            {/**sue dilligence value */} Are Karl Marx and John M. Keynes not
            diametrically opposed? Isn't the IS-LM Hicks-Keynes model for
            credit? Isn't Keynes and barter dichotomous? Isn’t barter
            accomplished with commodity money? Isn’t the social capital that
            Karl Marx wants to ban specifically debt, rent, and insurance? Are
            Democrats or Marxists going to ban the use of debt?... liquidity of
            credit! fraud
            <h3>
              <a href="https://www.quora.com/unanswered/Don-t-democrats-need-to-choose-between-Keynes-and-Marx">
                Don’t democrats need to choose between Keynes and Marx?
              </a>
            </h3>
            Keynes believes commodity output or leisure is borne of credit, but
            rather Marxists call this surplus value. Economists call it
            inelasticity or producer surplus. Consumer surplus is price controls
            over{" "}
            <a href="https://www.quora.com/unanswered/Isn-t-inflation-by-money-elastic-inelasticity">
              inelastic
            </a>{" "}
            labor or existing quantity.
            <br />
            <div
              style={{
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)"
              }}
            >
              {/**granting lifetime machine there is nothing but "unfair opulence" James Fauntleroy RBN */}
              <i>
                I press it is Third party donee beneficiary and am building
                software for industry specific payday royalty contracts (alt
                Islamic Banks, i | o | pipe.io early mover competition to my
                Vaults). I also have software to steward overtime implied change
                orders, etc. Scopebook scopes.cc.
              </i>
              <h4>Supply means demand needs</h4>
              {/*Yea? */}As the fixed startup{space}
              <a href="https://www.quora.com/unanswered/Is-natural-not-substitutive-supply-to-Karl-Marx-insofar-that-the-laborer-is-in-charge-of-their-own-capital">
                sunk
              </a>
              {space}costs of another or of course as one’s own sustenance
              rather than goods sold.{space}
              <span
                style={{
                  color: "rgb(130,130,130)"
                }}
              >
                Healthcare expenses{space}
                <a
                  href="https://truncatedwholesaletax.com"
                  style={{
                    color: "rgb(130,130,130)"
                  }}
                >
                  need to be taxed
                </a>
                ,{space}
                <i>
                  unless, of course, the whole of 'non-durable goods nor
                  services' are exempt
                </i>
                , and gifts of non-regular business to boot,{space}
                <b>discount/damages implied, but for advice, notwithstanding</b>
                , not made ‘free’ nor treated as a commodity of sunk costs that
                actually aren’t sunk but{space}
                <a href="https://www.quora.com/unanswered/Is-expiring-trade-and-or-non-compete-agreement-duress-not-social-capital">
                  expire
                </a>
                . Social capital is fraud: if not by expiring
                {space}
                <a
                  href="https://rolloverinsurance.quora.com"
                  style={{
                    color: "rgb(130,130,130)"
                  }}
                >
                  collective
                </a>
                , by
                {space}
                <a
                  href="https://www.quora.com/unanswered/Why-do-we-the-people-allow-loans-if-the-top-400-have-a-1-40-cash-debt-3-2t-worth-and-therefore-their-cash-is-200m-person"
                  style={{
                    color: "rgb(130,130,130)"
                  }}
                >
                  bills
                </a>
                .{space}
                <b>
                  Does one 'have' healthcare if the labor rolls over and
                  commodities expire?{space}
                  <b>
                    <a href="https://github.com/NickCarducci/mastercard-backbank-node-zero-trust">
                      Machine rent
                    </a>
                  </b>
                </b>
                <div
                  style={{
                    color: "white",
                    backgroundColor: "rgb(195, 151, 103)",
                    padding: !this.state.america && "10px",
                    margin: !this.state.america && "10px",
                    width: "calc(100% - 40px)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between"
                    }}
                  >
                    Aren’t contractors liable for subcontractors?
                    <a href="https://scopes.cc" style={{ color: "white" }}>
                      Scopebook scopes.cc
                    </a>
                  </div>
                  <div
                    style={{
                      backgroundColor: "cornflowerblue",
                      color: "black",
                      padding: !this.state.america && "10px",
                      margin: !this.state.america && "10px",
                      width: "calc(100% - 40px)",
                      border: "1px solid" //not only "often" but every time "the minority view is true" for every truth, of course
                    }}
                  >
                    Only insofar as they approve their work. A contractor,
                    however, does not have the liability of the subcontractor’s
                    work as it happens, just as the subcontractor is not to be
                    held to a _ (a certain reprisable, ameliorable, and
                    indemnifiable quality or “standard”). Forget the word.
                    “Immolable”-like. Why are estimates and warranty treated as
                    property in New Jersey courts (Consumer Fraud Act vs. Third
                    Party Donee Beneficiary), especially when inflation or
                    deflation is grounds for unemployment benefits?
                    <br />
                    <br />
                    Ameliorate indemnity is to _ (“Bring up to standard”) of
                    rollover labor and expiry commodity{space}
                    <a
                      style={{ color: "white" }}
                      href="https://thirdpartybeneficiary.quora.com"
                    >
                      donee beneficiary
                    </a>
                    {space}(but for the other way around expiring labor and
                    rollover commodity). To indemnify amelioration likely
                    compensates by restitution, which can only be for
                    escrowed-bets or spoils by industry to the capital revenue
                    for a terse ordinary claim of deposits, less carrying costs
                    or ground rent.
                  </div>
                  <div
                    style={{
                      backgroundColor: "grey",
                      color: "white",
                      padding: !this.state.america && "10px",
                      margin: !this.state.america && "10px",
                      width: "calc(100% - 40px)",
                      border: "1px solid" //not only "often" but every time "the minority view is true" for every truth, of course
                    }}
                  >
                    [A landlord's] revenue costs them neither labor nor care,
                    but comes to them, as it were, of its own accord, and
                    independent of any plan or project of their own. (
                    <a
                      style={{ color: "white" }}
                      href="https://nickcarducciforsenate.quora.com/Was-Adam-smith-a-socialist-1"
                    >
                      Adam Smith
                    </a>
                    , WON, Vol. I, p. 230.)
                  </div>
                </div>
                <a href="https://www.quora.com/Will-Democrats-ban-finance">
                  Will Democrats ban finance
                </a>
                ? edit: Is expiring 'trade' and/or non-compete agreement duress
                not "social capital"?
                <br />
                <br />
                Natural monopolies do not exist because{space}
                <a
                  href="https://www.quora.com/Why-do-people-take-jobs-instead-of-starting-their-own-service"
                  //some other time then https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch19.htm
                  //https://www.marxists.org/archive/marx/works/1844/manuscripts/comm.htm
                >
                  natural
                </a>
                {space}implies fixed costs sink as they do for everyone.{" "}
                <i style={{ color: "grey" }}>
                  What would create a natural monopoly?
                </i>
              </span>
            </div>
            Is the historically-borrowed "
            <a href="https://magnate.company">Luddite</a>" class not eternally
            rather called '
            <a href="https://www.instagram.com/p/CiIHJrVMuOL/">
              short-term employment
            </a>
            '?
            <br />
            <h3 style={{ wordWrap: "normal", margin: "10px 0px" }}>
              <a href="https://www.quora.com/unanswered/Isn-t-the-lower-birth-rate-indicative-of-an-expensive-natural-rate-of-productivity">
                Isn’t the lower birth rate indicative of an expensive natural
                rate of productivity?
              </a>
              {space}
              How can one be sure IQ drops 10% for smoking weed before 20
              without reliving the same life?
            </h3>
            <b>epitome of political</b>
            <br />
            Politics is what is going on or at worse corruption and at best a
            solution. To be a 501(c) (3), is one not without political bias
            unless conforming to a standard? Does “not political” mean
            ‘standardized’?
            <br />
            <hr />
            Was Karl Marx not sarcastic over the mess of socialist factions
            without a scientifically sociological by role nor mediative answer?
            <div
              ref={this.utopia}
              style={{
                backgroundColor: "white",
                color: "black",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)",
                border: "1px solid"
              }}
            >
              The press has already frequently mentioned Marx's intention to sum
              up the results of his many years' studies in a critique of the
              whole of political economy to date and thereby to provide the
              scientific basis for socialist aspirations which neither Fourier
              nor Proudhon nor even Lassalle had been able to do.
            </div>
            <hr />
            {!this.state.america && (
              <Cable
                style={{ width: "100%", height: "600px" }}
                onError={handleScollImgError}
                //img={true}
                src={this.state.noyout ? "" : "https://vaults.biz/gdp"}
                float={null}
                title="https://vaults.biz/gdp"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
            <br />
            <br />
            The remaking ground
            <h3 style={{ wordWrap: "normal", margin: "10px 0px" }}>
              <a href="https://www.quora.com/Isn-t-socialism-defined-by-welfare-for-the-injured-and-developmentally-disabled-alone">
                Isn’t socialism defined by welfare for the injured and
                developmentally disabled alone?
              </a>
            </h3>
            {!this.state.america && (
              <div
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid"
                }}
              >
                Top 400 $300m top 3m $300k{space}
                <span
                  style={{
                    transition: ".3s ease-in",
                    border: ".5px solid grey",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  In order to entice the money out of that pocket, our friend's
                  commodity must, above all things, be a use-value to the owner
                  of the money.
                </span>
                <br />
                <br />
                <b
                  style={{
                    float: "right"
                  }}
                >
                  <a href="https://vaults.biz/gdp">vaults.biz/gdp</a>
                </b>
                <button
                  onClick={() =>
                    this.setState({
                      openCheckingLiving: !this.state.openCheckingLiving
                    })
                  }
                >
                  Advanced living
                </button>
                <br />
                <div
                  style={{
                    transition: ".3s ease-in",
                    fontSize: this.state.openCheckingLiving ? "" : "0px",
                    border: ".5px solid grey",
                    backgroundColor: "grey",
                    color: "white"
                  }}
                >
                  He takes as an example the{space}
                  <a
                    style={{
                      color: "white"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1877/anti-duhring/ch10.htm"
                  >
                    case
                  </a>
                  {space}of a labourer in any branch of industry, who works
                  daily eight hours for himself — that is, in producing the
                  value of his wages — and the following four hours for the
                  capitalist, in producing surplus-value, which immediately
                  flows into the pocket of the capitalist. In this case, one
                  would have to have at his disposal a sum of values sufficient
                  to enable one to provide two labourers with raw materials,
                  instruments of labour and wages, in order to pocket enough
                  surplus-value every day to live on as well as one of his
                  labourers. And as the aim of capitalist production is not mere
                  subsistence but the increase of wealth, our man with his two
                  labourers would still not be a capitalist.
                  <br />
                  <br />
                  Credit depends on the confidence that the exploitation of wage
                  labor by capital, of the proletariat by the bourgeoisie, of
                  the petty bourgeois by the big bourgeois, will continue in the
                  traditional manner.{space}
                  <i>
                    Hence any political move of the proletariat, whatever its
                    nature, unless it takes place under the direct command of
                    the bourgeoisie, shakes this trust, impairs credit.
                  </i>
                  {space}
                  <a
                    style={{
                      color: "white"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1867-c1/ch11.htm"
                  >
                    A third law results from the determination, of the mass of
                    the surplus-value produced, by the two factors: rate of
                    surplus-value and amount of variable capital advanced.
                  </a>{" "}
                  In the production of a definite mass of surplus-value,
                  therefore the decrease of one factor may be compensated by the
                  increase of the other. Nevertheless, the compensation of a
                  decrease in the number of labourers employed, or of the amount
                  of variable capital advanced by a rise in the rate of
                  surplus-value, or by the lengthening of the working-day, has
                  impassable limits.
                  {space}
                  <span style={{ color: "lightgrey" }}>
                    ...It is immediately obvious that in a country like{space}
                    <a
                      style={{
                        color: "lightgrey"
                      }}
                      href="https://www.marxists.org/archive/marx/works/1852/18th-brumaire/ch04.htm"
                    >
                      France
                    </a>
                    , where the executive power commands an army of officials
                    numbering more than half a million individuals and therefore
                    constantly maintains an immense mass of interests and
                    livelihoods in the most absolute dependence; where the state
                    enmeshes, controls, regulates, superintends, and tutors
                    civil society from its most comprehensive manifestations of
                    life down to its most insignificant stirrings, from its most
                    general modes of being to the private existence of
                    individuals;{space}
                    <i
                      style={{
                        fontSize: this.state.openCheckingLiving ? "14px" : "0px"
                      }}
                    >
                      where through the most extraordinary centralization this
                      parasitic body acquires a ubiquity, an omniscience, a
                      capacity for accelerated mobility, and an elasticity which
                      finds a counterpart only in the helpless dependence, the
                      loose shapelessness of the actual body politic — it is
                      obvious that in such a country the National Assembly
                      forfeits all real influence when it loses command of the
                      ministerial posts, if it does not at the same time
                      simplify the administration of the state, reduce the army
                      of officials as far as possible, and, finally, let civil
                      society and public opinion create organs of their own,
                      independent of the governmental power.
                    </i>
                    {space}
                    <span style={{ color: "white" }}>
                      But it is precisely with the maintenance of that extensive
                      state machine in its numerous ramifications that the
                      material interests of the French bourgeoisie are
                      interwoven in the closest fashion. Here it finds posts for
                      its surplus population and makes up in the form of state
                      salaries for what it cannot pocket in the form of profit,
                      interest, rents, and honorariums.
                      {space}
                      <span style={{ backgroundColor: "cadetblue" }}>
                        On the other hand, its political interests compelled it
                        to increase daily the repressive measures and therefore
                        the resources and the personnel of the state power,
                        while at the same time it had to wage an uninterrupted
                        war against public opinion and mistrustfully mutilate,
                        cripple, the independent organs of the social movement,
                        where it did not succeed in amputating them entirely.
                      </span>
                    </span>
                    {space}
                    <span
                      style={{
                        fontSize: this.state.openCheckingLiving ? "12px" : "0px"
                      }}
                    >
                      Thus the French bourgeoisie was compelled by its class
                      position to annihilate, on the one hand, the vital
                      conditions of all parliamentary power, and therefore,
                      likewise, of its own, and to render irresistible, on the
                      other hand, the executive power hostile to it.
                    </span>
                  </span>
                </div>
              </div>
            )}
            {!this.state.america && (
              <div
                ref={this.liberal}
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  position: "relative",
                  height: "400px",
                  overflowY: "auto",
                  overflowX: "hidden",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid" //vote your age [squirrel]
                  //would you as a ranked choice voter vote approval condorcet for all your rankings, or are your eliminated choices
                  //hopefully useless towards that winner?
                  //Isn't communism complementary supply in balance with made-demand
                  //Isn't communism individual poverty stricken equality without the imbalances of non-complementary supply with made-demand?
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    padding: !this.state.america && "10px",
                    width: "calc(100% - 20px)"
                  }}
                >
                  Third, funds for those unable to work, etc., in short, for
                  what is included under so-called{space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1875/gotha/ch01.htm"
                  >
                    official poor relief
                  </a>
                  {space}today.
                  <br />
                  <br />
                  Any distribution[,] whatever of the means of consumption[,] is
                  only a consequence of the distribution[s] of the conditions of
                  production themselves. The latter distribution, however, is a
                  feature of the mode of production itself.{space}
                  <i>
                    The capitalist mode of production, for example, rests on the
                    fact that the material conditions of production are in
                    {space}
                    <b>
                      the hands of nonworkers in the form of property in capital
                      and land
                    </b>
                    , while the masses are only owners of the personal condition
                    of production, of labor power. If the elements of production
                    are so distributed, then the present-day distribution of the
                    means of consumption results automatically.
                  </i>
                  {space}If the material conditions of production are the{space}
                  <b>co-operative property of the workers themselves</b>
                  , then there likewise results a distribution of the means of
                  consumption different from the present one.
                  <br />
                  <br />
                  The labour-power withdrawn from the market by wear and tear
                  and death, must be continually{space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1867-c1/ch06.htm"
                  >
                    replaced by, at the very least, an equal amount
                  </a>
                  {space}of fresh labour-power. Hence the sum of the means of
                  subsistence necessary for the production of labour-power must
                  include the means necessary for the labourer’s substitutes,
                  i.e., his children, in order that this race of peculiar
                  commodity-owners may perpetuate its appearance in the market.
                  <br />
                  <br />
                  That work beyond 12 hours has a tendency to undermine the
                  health of the workingman, and so leads to premature old age
                  and death, to the great injury of families of working-men,
                  thus deprived of the care and
                  {space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1867-c1/ch10.htm"
                  >
                    support of the head of the family
                  </a>
                  {space}when most required.
                  <br />
                  <br />
                  No more can the surplus fund of this class [arise] from the
                  sale of commodities or their mutual exchanges among the
                  different capitalists of this class. …The{space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch19.htm"
                  >
                    sinking
                  </a>
                  {space}fund itself can, indeed, be used for accumulation in
                  the interval when the wear and tear of the machine is shown in
                  the books, but does not actually affect its work[; this is to
                  say that compounding-linearly does a rate find]. But in any
                  case, the demand for labour created in this way is much
                  smaller than if the whole capital invested in machinery were
                  laid out in wages, instead of merely the annual wear and tear.
                  <br />
                  <br />
                  Since profit here assumes the pure form of interest,
                  undertakings of this sort are still possible if they yield
                  bare interest, and this is one of the causes, stemming the
                  fall of the general rate of profit, since such undertakings,
                  in which the ratio of constant capital to the variable is so
                  enormous, do not necessarily enter into the equalisation of
                  the general rate of profit.
                  <br />
                  <br />
                  In natural economy proper, when no part of the agricultural
                  product, or but a very insignificant portion, enters into the
                  process of circulation, and then only a relatively small
                  portion of that part of the product which represents the
                  landlord’s revenue, as, e.g., in many Roman latifundia, or
                  upon the villas of Charlemagne, or more or less during the
                  entire Middle Ages (see Vinçard, Histoire du travail), the
                  product and surplus-product of the large estates consists by
                  no means purely of products of agricultural labour.
                  <br />
                  <br />
                  In fact, this rent{space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://truncatedwholesaletax.com"
                  >
                    in kind
                  </a>
                  , so far as it is rent not merely in name but also in essence,
                  is exclusively determined by the excess of the price of the
                  product over its price of production. Only it presupposes that
                  this variable is a constant magnitude. But it is such a
                  comforting reflection that the product in kind should suffice,
                  first, to maintain the labourer, secondly, to leave the
                  capitalist tenant farmer more food than he needs, and finally,
                  that the remainder should constitute the natural rent.
                  <br />
                  <br />
                  Compared with labour rent, the producer rather has more room
                  for action to gain time for surplus-labour whose product shall
                  belong to himself, as well as the product of his labour which
                  satisfies his indispensable needs. Similarly, this form will
                  give rise to greater differences in the economic position of
                  the individual direct producers. At least the possibility for
                  such a differentiation exists, and the possibility for the
                  direct producer to have in turn acquired the means to exploit
                  other labourers directly.
                  <br />
                  <br />
                  <div
                    style={{
                      color: "white",
                      transition: ".3s ease-in",
                      width: "max-content",
                      maxWidth: "calc(100% - 20px)",
                      padding: !this.state.america && "10px",
                      border: "1px solid",
                      backgroundColor: "cornflowerblue"
                    }}
                  >
                    The{space}
                    <a href="https://www.marxists.org/reference/archive/smith-adam/works/wealth-of-nations/book01/ch08.htm">
                      liberal reward
                    </a>
                    {space}of labour, by enabling them to provide better for
                    their children, and consequently to bring up a greater
                    number, naturally tends to widen and extend those limits. It
                    deserves to be remarked, too, that it necessarily does this
                    as nearly as possible in the proportion which the demand for
                    labour requires. If this demand is continually increasing,
                    the reward of labour must necessarily encourage in such a
                    manner the marriage and multiplication of labourers, as may
                    enable them to supply that continually increasing demand by
                    a continually increasing population.
                    <br />
                    <br />
                    It is in this manner that the demand for men, like that for
                    any other commodity, necessarily regulates the production of
                    men; quickens it when it goes on too slowly, and stops it
                    when it advances too fast. It is this demand which regulates
                    and determines the state of propagation in all the different
                    countries of the world, in North America, in Europe, and in
                    China; which renders it rapidly progressive in the first,
                    slow and gradual in the second, and altogether stationary in
                    the last.
                  </div>
                  <br />
                  Here, as in the earlier form of labour rent,{space}
                  <a
                    style={{
                      color: "lightskyblue"
                    }}
                    href="https://www.marxists.org/archive/marx/works/1894-c3/ch47.htm"
                  >
                    ground-rent
                  </a>
                  {space}is the normal form of surplus-value, and thus of
                  surplus-labour, i.e., of the entire excess labour which the
                  direct producer must perform gratis, hence actually under
                  compulsion although this compulsion no longer confronts him in
                  the old brutal form — for the benefit of the owner of his
                  essential condition of labour, the land.
                </div>
              </div>
            )}
            How can Marxists work in the government if exchange as individual
            use value is to be stateless? Was the communist manifesto not the
            intervention in natural monopolies?
            <br />
            <br />
            Nick Carducci's (Originalist at Communism, 2015–present) answer to
            Do you agree with any of Karl Marx's ideas? in Nick Carducci for
            Senate "You can't win if you don't have a party backing you."
            <br />
            <div
              style={{
                color: "white",
                backgroundColor: "rgb(22,22,222)",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)"
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <span>
                  The Commodity-Supply{space}
                  <a
                    href="https://saltbank.org"
                    style={{
                      color: "white" //oh what of it, "dave chapell and the foo fighters"
                    }}
                  >
                    Proper
                  </a>
                </span>
                <a href="https://vaults.biz/party" style={{ color: "white" }}>
                  vaults.biz
                </a>
              </div>
              <div
                style={{
                  backgroundColor: "grey",
                  color: "white",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid" //not only "often" but every time "the minority view is true" for every truth, of course
                }}
              >
                The commodity-supply is in that case not a prerequisite of
                uninterrupted sale, but a consequence of the impossibility of
                selling the goods. The costs are the same, but since they now
                arise purely out of the form, that is to say, out of the
                necessity of transforming the commodities into money and out of
                the difficulty of going through this metamorphosis, they do not
                enter into the values of the commodities but constitute
                deductions, losses of value in the realisation of the value.
                <br />
                <br />
                <i>
                  In so far as money is a medium of circulation, ‘the quantity
                  of it which circulates can never be employed individually; it
                  must always circulate’. (Storch.) The individual can employ
                  money only by divesting himself of it, by positing it as being
                  for others, in its social function. This, as Storch correctly
                  remarks, is a reason why the material of money ‘should not be
                  indispensable to human existence’, in the manner of such
                  things as hides, salt, etc., which serve for money among some
                  peoples. For the quantity that is in circulation is lost to
                  consumption. Hence, firstly, metals [enjoy] preference over
                  other commodities as money, and secondly, the precious metals
                  preference over those which useful as instruments of
                  production. It is characteristic of the economists that Storch
                  expresses this thusly: the material of money should should
                  ‘have direct value but on the basis of an artificial need‘.
                  Artificial need is what the economist calls, firstly, the
                  needs which arise out of the social existence of the
                  individual; secondly, those which do not flow from its naked
                  existence as a natural object. This shows the inner, desperate
                  poverty which forms the basis of bourgeois wealth and of its
                  science.
                </i>
                <br />
                <br />
                As is{space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://www.marxists.org/archive/marx/works/1894-c3/pref.htm"
                >
                  known
                </a>
                , the sale of a commodity consists in the fact that its owner
                relinquishes its use value and puts its exchange value into his
                pocket.
                <br />
                <br />
                <div
                  style={{
                    transition: ".3s ease-in",
                    fontSize: this.state.openDiminution ? "" : "0px",
                    width: "max-content",
                    maxWidth: "calc(100% - 40px)"
                  }}
                >
                  <button
                    onClick={() =>
                      this.setState({
                        openDiminution: !this.state.openDiminution
                      })
                    }
                  >
                    The Diminution
                  </button>
                  {space}
                  This{space}
                  <a
                    style={{ color: "white" }}
                    href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch06.htm"
                  >
                    would
                  </a>
                  {space}upset the whole relationship between wage-labour and
                  capital, and destroy the economic justification of
                  surplus-value. The result of the process is in fact that the
                  fund from which the capitalist pays the wage-labourer is
                  nothing but the latter’s own product, and that therefore
                  capitalist and labourer actually share the product in aliquot
                  parts. But this actual result has absolutely nothing to do
                  with the transaction between capital and wage [-labour](on
                  which rests the economic justification of surplus-value, the
                  justification founded on the laws of commodity exchange
                  itself). What the capitalist buys is the temporary right to
                  dispose of labour-power; he only pays for it when this
                  labour-power has taken effect, materialised itself in a
                  product. Here, as in all cases where money functions as means
                  of payment, purchase and sale precede the real handing over of
                  the money by the buyer. But the labour belongs to the
                  capitalist after that transaction, which has been completed
                  before the actual process of production begins. The commodity
                  which emerges as product from this process belongs entirely to
                  him. He has produced it with means of production belonging to
                  him and with labour which he has bought and which therefore
                  belongs to him, even though it has not yet been paid for. It
                  is the same as if he had not consumed anyone else’s labour in
                  the production of the commodity.
                  <br />
                  <br />
                  The profit that the capitalist makes, the surplus-value which
                  he realises, springs precisely from the fact that the labourer
                  has sold to him not labour realised in a commodity, but his
                  labour-power itself as a commodity. If he had confronted the
                  capitalist in the first form, as a possessor of commodities,
                  the capitalist would not have been able to make any profit, to
                  realise any surplus-value, since according to the law of value
                  exchange is between equivalents, an equal quantity of labour
                  for an equal quantity of labour. The capitalist’s surplus
                  arises precisely from the fact that he buys from the labourer
                  not a commodity but his labour-power itself, and this has less
                  value than the product of this labour-power, or, what is the
                  same thing, realises itself in more materialised labour than
                  is realised in itself. But now, in order to justify profit,
                  its very source is covered up, and the whole transaction from
                  which it springs is repudiated. Because in fact—once the
                  process is continuous—the capitalist only pays the labourer
                  out of his own product, the labourer is only paid with a part
                  of his own product, and the advance is therefore a mere
                  pretence, we are now told that the labourer has sold his share
                  in the product to the capitalist, be fore it has been
                  converted into money.{space}
                  <i>
                    (Perhaps before it was capable of being converted into
                    money, for although the workman’s labour had materialised
                    itself in a product, it may be that only one part of the
                    vendible commodity has as yet been realised, for example,
                    [only] part of a house.)
                  </i>
                  {space}So the capitalist is no longer owner of the product,
                  and thereby the whole process through which he has
                  appropriated another’s labour gratis is invalidated. Now
                  therefore owners of commodities confront each other. The
                  capitalist has money, and the labourer sells him not his
                  labour-power but a commodity, namely, the part of the product
                  in which his own labour is realised.
                  <br />
                  <br />
                  He [the labourer] will now say to the capitalist: “Of these 5
                  lbs. of twist, say three-fifths represent constant capital.
                  They belong to you. Two-fifths, that is, 2 lbs., represent my
                  newly-added labour. Therefore you have to pay me the 2 lbs. So
                  pay me the value of 2 lbs.” And thereby he would pocket not
                  only the wages but also the profit, in short, a sum of money
                  equal to the quantity of labour newly added by him and
                  materialised in the form of the 2 lbs.
                  <br />
                  <br />
                  “Everybody realises how important it is to determine the price
                  of coins correctly, especially in a country like England,
                  where the government with splendid generosity coins money
                  gratuitously” (Mr. Müller apparently assumes that the members
                  of the British government defray the costs of minting out of
                  their own pocket)
                  <br />
                  <br />
                  The{space}
                  <a
                    style={{ color: "white" }}
                    href="https://marxists.org/archive/marx/works/1867-c1/ch03.htm"
                  >
                    leap
                  </a>
                  {space}taken by value from the body of the commodity, into the
                  body of the gold, is, as I have elsewhere called it, the salto
                  mortale of the commodity. If it falls short, then, although
                  the commodity itself is not harmed, its owner decidedly is.
                  The social division of labour causes his labour to be as
                  one-sided as his wants are many-sided. This is precisely the
                  reason why the product of his labour serves him solely as
                  exchange-value. But it cannot acquire the properties of a
                  socially recognised universal equivalent, except by being
                  converted into money. That money, however, is in some one
                  else’s pocket. In order to entice the money out of that
                  pocket, our friend’s commodity must, above all things, be a
                  use-value to the owner of the money. For this, it is necessary
                  that the labour expended upon it, be of a kind that is
                  socially useful, of a kind that constitutes a branch of the
                  social division of labour. But division of labour is a system
                  of production which has grown up spontaneously and continues
                  to grow behind the backs of the producers. The commodity to be
                  exchanged may possibly be the product of some new kind of
                  labour, that pretends to satisfy newly arisen requirements, or
                  even to give rise itself to new requirements. A particular
                  operation, though yesterday, perhaps, forming one out of the
                  many operations conducted by one producer in creating a given
                  commodity, may to-day separate itself from this connexion, may
                  establish itself as an independent branch of labour and send
                  its incomplete product to market as an independent commodity.
                  The circumstances may or may not be ripe for such a
                  separation. To-day the product satisfies a social want.
                  Tomorrow the article may, either altogether or partially, be
                  superseded by some other appropriate product. Moreover,
                  although our weaver’s labour may be a recognised branch of the
                  social division of labour, yet that fact is by no means
                  sufficient to guarantee the utility of his 20 yards of linen.
                  If the community’s want of linen, and such a want has a limit
                  like every other want, should already be saturated by the
                  products of rival weavers, our friend’s product is
                  superfluous, redundant, and consequently useless. Although
                  people do not look a gift-horse in the mouth, our friend does
                  not frequent the market for the purpose of making presents.
                  But suppose his product turn out a real use-value, and thereby
                  attracts money? The question arises, how much will it attract?
                  No doubt the answer is already anticipated in the price of the
                  article, in the exponent of the magnitude of its value. We
                  leave out of consideration here any accidental miscalculation
                  of value by our friend, a mistake that is soon rectified in
                  the market. We suppose him to have spent on his product only
                  that amount of labour-time that is on an average socially
                  necessary. The price then, is merely the money-name of the
                  quantity of social labour realised in his commodity. But
                  without the leave, and behind the back, of our weaver, the
                  old-fashioned mode of weaving undergoes a change. The
                  labour-time that yesterday was without doubt socially
                  necessary to the production of a yard of linen, ceases to be
                  so to-day, a fact which the owner of the money is only too
                  eager to prove from the prices quoted by our friend’s
                  competitors. Unluckily for him, weavers are not few and far
                  between. Lastly, suppose that every piece of linen in the
                  market contains no more labour-time than is socially
                  necessary. In spite of this, all these pieces taken as a
                  whole, may have had superfluous labour-time spent upon them.
                  If the market cannot stomach the whole quantity at the normal
                  price of 2 shillings a yard, this proves that too great a
                  portion of the total labour of the community has been expended
                  in the form of weaving. The effect is the same as if each
                  individual weaver had expended more labour-time upon his
                  particular product than is socially necessary. Here we may
                  say, with the German proverb: caught together, hung together.
                  All the linen in the market counts but as one article of
                  commerce, of which each piece is only an aliquot part. And as
                  a matter of fact, the value also of each single yard is but
                  the materialised form of the same definite and socially fixed
                  quantity of homogeneous human labour. [17]
                  <br />
                  <br />
                  We see then, commodities are in love with money, but “the
                  course of true love never did run smooth.” The quantitative
                  division of labour is brought about in exactly the same
                  spontaneous and accidental manner as its qualitative division.
                  The owners of commodities therefore find out, that the same
                  division of labour that turns them into independent private
                  producers, also frees the social process of production and the
                  relations of the individual producers to each other within
                  that process, from all dependence on the will of those
                  producers, and that the seeming mutual independence of the
                  individuals is supplemented by a system of general and mutual
                  dependence through or by means of the products.
                  <br />
                  <br />
                  The division of labour converts the product of labour into a
                  commodity, and thereby makes necessary its further conversion
                  into money. At the same time it also makes the accomplishment
                  of this transubstantiation quite accidental. Here, however, we
                  are only concerned with the phenomenon in its integrity, and
                  we therefore assume its progress to be normal. Moreover, if
                  the conversion take place at all, that is, if the commodity be
                  not absolutely unsaleable, its metamorphosis does take place
                  although the price realised may be abnormally above or below
                  the value.
                </div>
              </div>
              There will be a premium to deposits of natural-value, relative to
              others to boot, by{space}
              <a
                style={{
                  color: "white"
                }}
                href="https://www.quora.com/unanswered/In-microeconomics-aren-t-all-goods-and-services-priced-by-weight-and-quality"
              >
                weight
              </a>
              , for then such barter without electronic transfer funds is not
              sanctioned in{space}
              <a
                href="https://thetax.party"
                style={{
                  color: "white"
                }}
              >
                tax
              </a>
              .
              {/**Somali Shilling "regime change, genocide" "populist, activist" advocate
        
            perishable economy Ukraine Israel


        */}
              Consequence tort is limited international court{space}
              <a href="https://thumbprint.quora.com">tech.. I cannot</a>
              {space}abide to chastity{space}
              <a href="https://courttechnology.quora.com">court</a>
              <i>go for leisure. one man hobby job another real inflation</i>
              <h2>
                Wouldn’t silver take circulation value made price upon
                commoditization of capital? Would this require tax free barter
                from electronic funds transfers?{space}
                <i
                  style={{
                    color: "navy"
                  }}
                >
                  Wouldn't a durable goods tax miss barter of durable goods with
                  a premium not deposited? Wouldn’t gold then circulate more
                  proportionally to the rest?
                </i>
              </h2>
              <div
                ref={this.banking}
                style={{
                  backgroundColor: "grey",
                  color: "white", //"consensus but not entity-indicate [exhibit]"
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px", //"certain experts on the *future*" policy,
                  width: "calc(100% - 40px)",
                  border: "1px solid" //not only "often" but every time "the minority view is true" for every truth, of course
                }}
              >
                <div
                  style={{
                    backgroundColor: "grey",
                    color: "white",
                    padding: !this.state.america && "6px",
                    margin: !this.state.america && "6px",
                    width: "calc(100% - 40px)",
                    border: "1px dotted"
                  }}
                >
                  <h4>HumanHarvest.info</h4>
                  Circle, Can I fund my account personally? I’ve managed to open
                  a Vaumoney account on cash app, but would like to avoid the
                  percentage payout if I can. Perhaps I can just spend exempt,
                  non-connected contributions from this account too, but I will
                  probably fund usdc omnibus gateway deposit from my personal,
                  directly. I likely will not use the payments api, and perhaps
                  not even the payout api until I need to. Best, Nick Carducci
                </div>
                <br />
                The{space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://www.marxists.org/archive/marx/works/1857/grundrisse/ch04.htm"
                >
                  specific gravity
                </a>
                {space}of gold and silver, to contain much weight in a
                relatively small volume, as compared with other metals, repeats
                itself in the world of values so that it contains much value
                (labour time) in relatively small volume. The labour time,
                exchange value realized in it, is the specific weight of the
                commodity. This makes the precious metals particularly suited
                for service in circulation (since one can carry a significant
                amount of value in the pocket) and for accumulation, since one
                can secure and stockpile a great amount of value in a small
                space. Gold does not turn into something else in the process,
                like iron, lead etc. Remains what it is.
              </div>
              The{space}
              <a
                style={{ color: "white" }}
                href="https://www.quora.com/Marx-said-property-is-theft-Is-this-true-of-private-property/answer/Nick-Carducci"
              >
                (<i>dis</i>)help
              </a>
              {space}only does in the aggregate, for the plunderer maintains the
              use value less their own limits and the marginal propensity. No, a
              plunderer more enters as the profiteer does, not nearly the
              firesale of diminished value by (the natural) sinking fixed cost
              propensity.
              <br />
              Growth of people or (compounding-linearly) real velocity physical
              consumption waste (by depositor-credit liquidity?)
            </div>
            {!this.state.america && (
              <Cable
                style={{ width: "100%" }}
                onError={handleScollImgError}
                img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.dropbox.com/s/eictojshp7yqpju/ron%20paul%20liberty%20report%20prices.png?raw=1"
                }
                float={"left"}
                title="Trump propaganda (liberty report, save america == revenuedata.doi.gov"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
            dangerous irresponsible. Can an improper procedure not be fraudulent
            nor violent? Why do courts force sale over technical mistakes but
            not legal ones?
            <br />
            frusterating. Is the most generous pricing scheme not by individual
            use versus social exchange, -value, fees?
            <br />
            Is individual use in excess of exchange, -value, not when there is
            consumer surplus by price control or inelastic labor for other
            markets?
            <div
              style={{
                color: "white",
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)", //christian guilt (a condition)
                border: "1px solid", //freedom freedom of speech Trump right conservative
                backgroundColor: "rgb(22, 93, 49)"
              }}
            >
              What would{space}
              <a
                style={{ color: "white" }}
                href="https://phyletic.quora.com/Are-social-sciences-just-stupid-fake-sciences-1"
              >
                you
              </a>
              {space}do for an{space}
              <a style={{ color: "white" }} href="https://2024nj.com/bachelors">
                apple pie
              </a>
              ?
              <h2>
                <a
                  style={{ color: "white" }}
                  href="https://www.law.cornell.edu/cfr/text/12/5.20"
                >
                  Discount Window Sponsorship for the Office of the Comptroller
                  of the Currency (How to get a Bank Identification Number in
                  the
                  {space}
                  <i>United States of America</i>)
                </a>
                {space}
                <a
                  style={{ color: "white" }}
                  href="https://regcops.quora.com/If-witnesses-plead-the-fifth-can-they-still-be-forced-to-testify-if-they-are-granted-immunity-1"
                >
                  uhm
                </a>
                {space}
                <a href="https://reddit.com/r/courttechnology">democracy</a>
              </h2>
              <div
                style={{
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid",
                  backgroundColor: "rgb(252, 255, 179)"
                }}
              >
                Individual use of one's natural daycamp
                <h2 style={{ wordWrap: "normal", marginTop: "0px" }}>
                  Isn’t marginal “
                  <a href="https://www.marxists.org/archive/marx/works/1844/manuscripts/comm.htm">
                    individual
                  </a>
                  ” and utility “
                  <a href="https://www.marxists.org/archive/marx/works/1894-c3/ch16.htm">
                    use
                  </a>
                  ”?
                </h2>
                The first positive annulment of private property – crude
                communism – is thus merely a manifestation of the vileness of
                private property, which wants to set itself up as the positive
                community system.
                <br />
                <br />
                On the one hand, therefore, it is only when the objective world
                becomes everywhere for man in society the world of man’s
                essential powers – human reality, and for that reason the
                reality of his own essential powers – that all objects become
                for him the objectification of himself, become objects which
                confirm and realise his{space}
                <a href="https://markethistory.quora.com/What-did-Marx-mean-by-socially-necessary-labor-time-1">
                  individuality
                </a>
                {space}(
                <i>
                  The real value of a commodity is, however, not its individual
                  value, but its social value; that is to say, the real value is
                  not measured by the labour-time
                </i>
                ), become his objects: that is, man himself becomes the object.
                The manner in which they become his depends on the nature of the
                objects and on the nature of the essential power corresponding
                to it; for it is precisely the determinate nature of this
                relationship which shapes the particular, real mode of
                affirmation.
              </div>
              "
              <a
                style={{
                  color: "white"
                }}
                href="https://www.quora.com/unanswered/When-Karl-Marx-said-The-real-value-of-a-commodity-is-however-not-its-individual-value-but-its-social-value-that-is-to-say-the-real-value-is-not-measured-by-the-labour-time-was-he-not-talking-about-the-surplus"
              >
                Indeed
              </a>
              , the tenant himself may improve the ground at his own expense;
              but he only derives the profit from this capital for the duration
              of his lease, with the{space}
              <a
                style={{
                  color: "white"
                }}
                href="https://www.quora.com/When-Karl-Marx-called-for-free-education-to-end-the-patriarchy-did-he-mean-by-bonds"
              >
                expiry
              </a>
              {space}of which it remains with the proprietor of the land;" (J.B.
              Say)
              <br />
              <br />
              “What makes land productive is the capital employed in
              agriculture. The landowner contributes nothing to it. He only
              exists to pocket rent, which does not constitute a part of the
              profit on his capital, neither is it the product of labour nor
              that of the productive power of the soil, but the effect of the
              price of the agricultural products, which is increased by the
              competition of the consumers…” etc. (
              <a
                style={{ color: "white" }}
                href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch23.htm"
              >
                Ricardian
              </a>
              )
              <br />
              <br />
              With such{space}
              <a
                style={{ color: "white" }}
                href="https://www.marxists.org/archive/marx/works/1894-c3/pref.htm"
              >
                astonishing dexterity
              </a>
              , solves by sleight of hand the question which he had declared
              insoluble ten years previously. Unfortunately, he did not let us
              into the secret wherefrom the “unproductive capital” obtained the
              power to squeeze out of the industrialists their extra profit in
              excess of the average rate of profit, and to retain it in its own
              pocket, just as the landowner pockets the tenant’s surplus-profit
              as ground-rent. Indeed, according to him it would be the merchants
              who would raise a tribute analogous to ground-rent from the
              industrialists, and would thereby bring about an average rate of
              profit. Commercial capital is indeed a very essential factor in
              producing the general rate of profit, as nearly everybody knows.
              <h2>
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://www.quora.com/unanswered/When-Adam-Smith-said-The-rent-of-land-therefore-considered-as-the-price-paid-for-the-use-of-the-land-is-naturally-a-monopoly-price-It-is-not-at-all-proportioned-to-what-the-landlord-may-have-laid-out-did-he-propose"
                >
                  When Adam Smith said, “The rent of land, therefore, considered
                  as the price paid for the use of the land, is naturally a
                  monopoly price. It is not at all proportioned to what the
                  landlord may have laid out” did he propose such like 30 day
                  max leases
                </a>
                ? When {space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://www.quora.com/unanswered/When-Adam-Smith-said-The-landlords-labor-of-other-people-not-only-rises-with-the-real-value-of-the-produce-but-the-proportion-of-his-share-the-rise-in-its-real-price-requires-no-more-labor-did-he-propose-such-like"
                >
                  Adam Smith said
                </a>
                , "The [landlord's] labor of other people, not only rises with
                the real value of the produce, but the proportion of his share
                [,] …the rise in its real price, requires no more labor" did he
                propose such like{space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://landlordliquidity.quora.com"
                >
                  30 day
                </a>
                {space}max{space}
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://implausibleuseleases.quora.com"
                >
                  leases
                </a>
                ?
              </h2>
              <div
                style={{
                  color: "black",
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)",
                  border: "1px solid",
                  backgroundColor: "rgb(252, 255, 179)"
                }}
              >
                <i>
                  Moreover in large works the whole of this labor is committed
                  to some principal clerk, whose salary bears no regular
                  proportion to the capital of which he oversees the management.
                  And although the labor of the proprietor is here reduced
                  almost to nothing, he still demands profits in proportion to
                  his capital. (Adam Smith, WON, Vol. I, p. 43)
                  <br />
                  <br />
                  “The real value of the landlord’s share, his real command of
                  the labor of other people, not only rises with the real value
                  of the produce, but the proportion of his share to the whole
                  produce rises with it. That produce, after the rise in its
                  real price, requires no more labor to collect it than before
                  [nor even less as would be at the non-accelerating inflation
                  rate of unemployment]. A smaller proportion of it will,
                  therefore, be sufficient to replace, with the ordinary profit,
                  the stock which employs that labor. A greater proportion of it
                  must, consequently, belong to the landlord.” (Adam Smith, WON,
                  Vol. I, pp. 228-29.)
                  {/**
              For instance, “say they,* of the price of a piece of lace, one part merely
              replaces what the labourer consumed, and the other part is only transferred
              from one man’s pocket <i.e., that of the landlord> to another’s” (An
              Inquiry into those Principles, respecting the Nature of Demand and the
              Necessity of Consumption, lately advocated by Mr. Malthus, etc., London,
              1821, p. 96).
              The view of Adam Smith and his followers that the accumulation of capital is 
              due to personal stinting and saving and selfdenial of the capitalists also originates
              from the view of the Physiocrats that profit (including interest) is merely revenue for the
              consumption of the capitalists. They could say this because they
              only regarded land rent as the true economic, so to speak legitimate, source of accumulation.
              https://www.marxists.org/archive/marx/works/subject/tsv/tsv-v1.pdf
              */}
                </i>
                <h4
                  style={{
                    margin: "6px 0px"
                  }}
                >
                  Ordinary ground rent toward maintenance
                </h4>
                <span style={{ textDecoration: "underline" }}>
                  What is the lowest rate of profit?
                </span>
                {space}
                <i>
                  The lowest rate of ordinary profit on capital must always be
                  something more than what is sufficient to compensate the
                  occasional losses to which every employment of stock is
                  exposed. It is this surplus only which is neat or clear
                  profit. The same holds for the lowest rate of interest. (Adam
                  Smith, WON, Vol. I, p. 86)
                </i>
                <br />
                <br />
                <span style={{ textDecoration: "underline" }}>
                  And what the highest?
                </span>
                {space}
                <i>
                  The highest rate to which ordinary profits can rise is that
                  which in the price of the greater part of commodities eats up
                  the whole of the rent of the land, and reduces the wages of
                  labor contained in the commodity supplied to the lowest rate,
                  the bare subsistence of the laborer during his work. The
                  worker must always be fed in some way or other while he is
                  required to work; rent can disappear entirely. For example:
                  the servants of the East India Company in Bengal. (Adam Smith,
                  WON, Vol. I, pp. 86-87){" "}
                </i>
                <br />
                <br />
                In adjusting the terms of the lease, the landlord endeavors to
                leave him no greater share of the produce than what is
                sufficient to keep up the stock from which he furnishes the
                seed, pays the labor, and purchases and maintains the cattle and
                other instruments of husbandry, together with the ordinary
                profits of farming stock in the neighborhood. (Adam Smith, WON,
                Vol. I, pp. 130-31)
              </div>
              <div
                style={{
                  transition: ".3s ease-in",
                  fontSize: this.state.openlandedCapital ? "" : "0px",
                  color: "white",
                  width: "max-content",
                  maxWidth: "calc(100% - 40px)"
                }}
              >
                <button
                  onClick={() =>
                    this.setState({
                      openlandedCapital: !this.state.openlandedCapital
                    })
                  }
                >
                  Landed Capital
                </button>
                Landed property is{space}
                <a
                  style={{ color: "white" }}
                  href="https://www.marxists.org/archive/marx/works/1894-c3/ch37.htm"
                >
                  based
                </a>
                {space}on the monopoly by certain persons over definite portions
                of the globe, as exclusive spheres of their private will to the
                exclusion of all others. With this in mind, the problem is to
                ascertain the economic value, that is, the realisation of this
                monopoly on the basis of capitalist production. With the legal
                power of these persons to use or misuse certain portions of the
                globe, nothing is decided. The use of this power depends wholly
                upon economic conditions, which are independent of their will.
                The legal view itself only means that the landowner can do with
                the land what every owner of commodities can do with his
                commodities. And this view, this legal view of free private
                ownership of land, arises in the ancient world only with the
                dissolution of the organic order of society, and in the modern
                world only with the development of capitalist production. It has
                been imported by Europeans to Asia only here and there. In the
                section dealing with primitive accumulation (Buch I, Kap. XXIV
                [English edition: Part VIII. — Ed].), we saw that this mode of
                production presupposes, on the one hand, the separation of the
                direct producers from their position as mere accessories to the
                land (in the form of vassals, serfs, slaves, etc.), and, on the
                other hand, the expropriation of the mass of the people from the
                land. To this extent the monopoly of landed property is a
                historical premise, and continues to remain the basis of the
                capitalist mode of production, just as in all previous modes of
                production which are based on the exploitation of the masses in
                one form or another. But the form of landed property with which
                the incipient capitalist mode of production is confronted does
                not suit it. It first creates for itself the form required by
                subordinating agriculture to capital. It thus transforms feudal
                landed property, clan property, small peasant property in mark
                communes — no matter how divergent their juristic forms may be —
                into the economic form corresponding to the requirements of this
                mode of production. One of the major results of the capitalist
                mode of production is that, on the one hand, it transforms
                agriculture from a mere empirical and mechanical
                self-perpetuating process employed by the least developed part
                of society into the conscious scientific application of
                agronomy, in so far as this is at all feasible under conditions
                of private property; that it divorces landed property from the
                relations of dominion and servitude, on the one hand, and, on
                the other, totally separates land as an instrument of production
                from landed property and landowner — for whom the land merely
                represents a certain money assessment which he collects by
                virtue of his monopoly from the industrial capitalist, the
                capitalist farmer; it dissolves the connection between
                landownership and the land so thoroughly that the landowner may
                spend his whole life in Constantinople, while his estates lie in
                Scotland. Landed property thus receives its purely economic form
                by discarding all its former political and social embellishments
                and associations, in brief all those traditional accessories,
                which are denounced, as we shall see later, as useless and
                absurd superfluities by the industrial capitalists themselves,
                as well as their theoretical spokesmen, in the heat of their
                struggle with landed property. The rationalising of agriculture,
                on the one hand, which makes it for the first time capable of
                operating on a social scale, and the reduction ad absurdum of
                property in land, on the other, are the great achievements of
                the capitalist mode of production. Like all of its other
                historical advances, it also attained these by first completely
                impoverishing the direct producers.
                <br />
                <br />
                Before we proceed to the problem itself, several more
                preliminary remarks are necessary to avoid misunderstanding.
                <br />
                <br />
                The prerequisites for the capitalist mode of production
                therefore are the following: The actual tillers of the soil are
                wage labourers employed by a capitalist, the capitalist farmer
                who is engaged in agriculture merely as a particular field of
                exploitation for capital, as investment for his capital in a
                particular sphere of production. This capitalist farmer pays the
                landowner, the owner of the land exploited by him, a sum of
                money at definite periods fixed by contract, for instance,
                annually (just as the borrower of money-capital pays a fixed
                interest), for the right to invest his capital in this specific
                sphere of production. This sum of money is called ground-rent,
                no matter whether it is paid for agricultural land, building
                lots, mines, fishing grounds, or forests, etc. It is paid for
                the entire time for which the landowner has contracted to rent
                his land to the capitalist farmer. Ground-rent, therefore, is
                here that form in which property in land is realised
                economically, that is, produces value. Here, then, we have all
                three classes — wage-labourers, industrial capitalists, and
                landowners constituting together, and in their mutual
                opposition, the framework of modern society.
                <br />
                <br />
                Capital may be fixed in the land, incorporated in it either in a
                transitory manner, as through improvements of a chemical nature,
                fertilisation, etc., or more permanently, as in drainage canals,
                irrigation works, leveling, farm buildings, etc. Elsewhere I
                have called the capital thus applied to land la
                terre-capital.[28] It belongs to the category of fixed capital.
                The interest on capital incorporated in the land and the
                improvements thus made in it as an instrument of production can
                constitute a part of the rent paid by the capitalist farmer to
                the landowner, but it does not constitute the actual
                ground-rent, which is paid for the use of the land as such — be
                it in a natural or cultivated state. In a systematic treatment
                of landed property, which is not within our scope, this part of
                the landowner's revenue would have to be discussed at length.
                But a few words about it will suffice here. The more transitory
                capital investments, which accompany the ordinary production
                processes in agriculture, are all made without exception by the
                capitalist farmer. These investments, like cultivation proper in
                general, improve the land,[30] increase its output, and
                transform the land from mere material into land-capital when the
                cultivation is carried on more or less rationally, i.e., when it
                is not reduced to a brutal spoliation of the soil, as was in
                vogue, e.g., among the former slave-holders in the United
                States; however, the gentlemen landowners secure themselves
                against such practice by contract. A cultivated field is worth
                more than an uncultivated one of the same natural quality. The
                more permanent fixed capital investments, which are incorporated
                in the soil and used up in a longer period of time, are also in
                the main, and in some spheres often exclusively, made by the
                capitalist farmer. But as soon as the time stipulated by
                contract has expired — and this is one of the reasons why with
                the development of capitalist production the landowners seek to
                shorten the contract period as much as possible — the
                improvements incorporated in the soil become the property of the
                landowner as an inseparable feature of the substance, the land.
                In the new contract made by the landowner he adds the interest
                for capital incorporated in the land to the ground-rent itself.
                And he does this whether he now leases the land to the
                capitalist farmer who made these improvements or to some other
                farmer. His rent is thus inflated; and should he wish to sell
                his land (we shall see immediately how its price is determined),
                its value is now higher. He sells not merely the land but the
                improved land, the capital incorporated in the land for which he
                paid nothing. Quite aside from the movements of ground-rent
                itself, here lies one of the secrets of the increasing
                enrichment of landowners, the continuous inflation of their
                rents, and the constantly growing money-value of their estates
                along with progress in economic development. Thus they pocket a
                product of social development created without their help —
                fruges consumere nati. [Horace, Epistles, Book I, Epistles 2,
                27. — Ed]. But this is at the same time one of the greatest
                obstacles to a rational development of agriculture, for the
                tenant farmer avoids all improvements and outlays for which he
                cannot expect complete returns during the term of his lease.
              </div>
              <h3>
                <a
                  style={{
                    color: "white"
                  }}
                  href="https://www.quora.com/unanswered/Might-Adam-Smiths-theory-of-unordinary-profit-rent-not-be-applied-to-insurance-as-Karl-Marx-did-to-debt"
                >
                  Might Adam Smith's theory of unordinary profit rent not be
                  applied to insurance as Karl Marx did to debt?
                </a>
              </h3>
              This ...capitalist mode of production... a mere phase of
              transition to a new form of production. It manifests itself as
              such a contradiction in its effects. It establishes a monopoly in
              certain spheres and thereby requires state{space}
              <b>interference</b>. It reproduces a new financial aristocracy, a
              new variety of parasites in the shape of promoters, speculators
              and simply nominal directors; a whole system of swindling and
              cheating by means of corporation promotion, stock issuance, and
              stock speculation. It is private production without the control of
              private property. The contests about wages in Manufacture,
              pre-suppose manufacture, and are in no sense directed against its
              existence. The opposition against the establishment of new
              manufactures, proceeds from the{space}
              <b>guilds</b>
              {space}and privileged towns, not from the workpeople.“
              <a
                style={{
                  color: "white"
                }}
                href="https://www.quora.com/unanswered/How-did-Karl-Marx-reconcile-the-division-of-skills-and-individual-use-trading-labor-with-his-stance-Confiscation-of-the-property-of-all-emigrants-and-rebels"
              >
                <h2>
                  How did Karl Marx reconcile state intervention for monopolists
                  with “Confiscation of the property of all emigrants and
                  rebels?”
                  {/**ellie honag and erica cnn: hectic */}
                </h2>
              </a>
            </div>
            <div>
              Lut was merely{space}
              <a href="https://github.com/NickCarducci/NickCarducci#readme">
                THE
              </a>
              {space}exclusive time-period ref of polytheism.
              <br />
              <br />
              7 dates a morning
              <br />
              “And from the fruits of the palm trees and grapevines you take
              intoxicant and good provision.” (An-Nahl 16:67)
              <br />
              <br />
              “O you who believe! Do not approach to prayers with a mind
              befogged, until you can understand all that you say.” (An-Nahl
              4:43)
              <br />
              <br />
              “O believers! Intoxicants, gambling, idols, and drawing lots for
              decisions1 are all evil of Satan’s handiwork. So shun them so you
              may be successful.” (Al-Ma’idah 5:90)
              <br />
              <br />
              Did someone ask for a political scientist’s new world shahada to
              test legal ethics universally of all whistleblowers to embargo?
              <br />
              <br />
              Remember that Allah knows{space}
              <a href="https://www.quora.com/unanswered/Is-the-abrogation-by-the-cousins-of-Muhammad-PBUH-not-shirk">
                best
              </a>
              {space}and all boundaries are not of a{space}
              <a href="https://www.quora.com/How-many-messiahs-are-there">
                messiah
              </a>
              .
              <h3>
                O believers! Do not enter any house other than your own until
                you have asked for permission and greeted its occupants. This is
                best for you, so perhaps you will be mindful. (An-Nur 24:27)
                <br />
                <br />
                Give full measure, and cause no loss ˹to others˺. Weigh with an
                even balance, and do not defraud people of their property. Nor
                go about spreading corruption in the land. And fear the One Who
                created you and ˹all˺ earlier peoples. (Ash-Shu’ara 26:181–4)
                <br />
                <br />
                This is certainly a revelation from the Lord of all worlds,
                which the trustworthy spirit ˹Gabriel˺ brought down into your
                heart ˹O Prophet˺—so that you may be one of the warners— in a
                clear Arabic tongue. And it has indeed been ˹foretold˺ in the
                Scriptures of those before. (Ash-Shu’ara 26:192–6)
              </h3>
              <h2>
                And the people of Moses made in his absence, out of their
                ornaments, the image of a calf (for worship). It had a sound (as
                if it was mooing). Did they not see that it could neither speak
                to them nor guide them to the way? They took it for worship and
                they were Dthalimun (wrong-doers). [Noble Quran 7:148] In the
                absence of Moses, his people made from their ˹golden˺ jewellery
                an idol of a calf that made a lowing sound. Did they not see
                that it could neither speak to them nor ˹even˺ guide them to the
                ˹Right˺ Path? Still they took it as a god and were wrongdoers.
                (7:148)
              </h2>
              <h3>
                ˹Remember˺{space}
                <span style={{ color: "grey" }}>
                  when he questioned his father and his people
                </span>
                , “<i>What are these statues to which you are so devoted?</i>”
                (21:52)
                <br />
                They replied, “
                <span style={{ color: "grey" }}>
                  We found our forefathers worshipping them.
                </span>
                ” (21:53)
                <br />
                He responded, “
                <span style={{ color: "cornflowerblue" }}>
                  Indeed, you and your forefathers have been clearly astray.
                </span>
                ” (21:54)
              </h3>
              Those who take full measure ˹when they buy˺ from people, but give
              less when they measure or weigh for buyers. (83:2) Do such people
              not think that they will be resurrected for a tremendous Day— the
              Day ˹all˺ people will stand before the Lord of all worlds? But no!
              The wicked are certainly bound for Sijjîn1 ˹in the depths of
              Hell˺— and what will make you realize what Sijjîn is?—a fate
              ˹already˺ sealed.
              <br />
              <br />
              Give those you have consummated marriage with their due dowries.
              (4:24) As for female and male fornicators, give each of them one
              hundred lashes, and do not let pity for them make you lenient in
              ˹enforcing˺ the law of Allah, if you ˹truly˺ believe in Allah and
              the Last Day. (24:2)
              {/**
          "only to see something to improve"
          bind the fraudulent neck
          pray for blessings
          killed for else 7 dates https://islamicbanks.quora.com/
          What verse in the Quran clearly states that drinking alcohol is strictly forbidden?https://quran.com/16/67?translations=31,85,20,95,101,84,22,21,17,18,83,28
          
          
          Isn’t Orthodox a belief in a single G-d without prophets?
          If most of the world believes in multiple G-ds or Abrahamic religions with miracles, burnt offerings, and witchcraft, are they all not mentally insane?
          Do all Abrahamic religions really believe witchcraft works if they were allowed to do it?

          Aren’t polytheism and the Abrahamic religions insanity?
          Did you also lose your Abrahamic religion when you found out slaughter cleanses sin?
          tw: Flog borrowers loitering, greenfield pay daddy -> paydayt.com ... idolotry non-decadency punishment less prophet

          If Islam promises virgins, is marriage not because of male depravity under polytheism, much less an ethical thing?
          mahrtalaq means to not rape - without surplusmercantilism

          Lut was merely a time of polytheism

          Are northerners paid more because that’s the real physical it calls for. Too expensive labor to apply
          Simply creating destruction, efficiency per hour for profit
          
          savings and loans, "jesus saves... at first national bank" rachel thompson ggalloway yt show

          necks==slave/conscript? https://www.quora.com/unanswered/Are-conscripts-nor-even-the-military-not-slaves-for-their-duress-neer-do-well
          */}
              <br />
              <br />
              "If some of you do believe in what I have been sent with while
              others do not, then be patient until Allah judges between us. He
              is the Best of Judges." (7:87)
              <br />
              <br />
              "As for male and female thieves, cut off their hands for what they
              have done -a deterrent from Allah. And Allah is Almighty, All-
              Wise. But whoever repents after their wrongdoing and mends their
              ways, Allah will surely turn to them in forgiveness. Indeed, Allah
              is All-Forgiving, Most Merciful." (5:38)
            </div>
            <h1>
              Isn’t the birth rate dependent on living labor?
              <hr />
            </h1>
            <i>
              Isn’t misrepresenting Karl Marx on the socialism of capital
              "capitalism"
              {space}
              <span
                style={{
                  textDecoration: "line-through"
                }}
              >
                akin to raping his carcass
              </span>
              {space}bad advice?
            </i>
            {space}So, cops cannot punch car burgulars? (carface dimon like
            floyd)
            {space}
            <i>
              capitalism has money without commodity, vertical quality indemnity
              amelioration implied.
            </i>
            <br />
            Why does Karl Marx want to ban{space}
            <a href="https://www.quora.com/Isn-t-the-social-capital-that-Karl-Marx-wants-to-ban-specifically-debt-rent-and-insurance">
              social capital
            </a>
            ? Inflation happens by social guild. Isn’t debt, rent, and insurance
            the cause of{space}
            <a href="https://www.quora.com/unanswered/If-inflation-is-not-caused-by-interest-versus-industry-specific-debentures-what-is">
              inflation
            </a>
            ?
            <br />
            {/**reproducibits 
        
        */}
            <div
              style={{
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)"
              }}
            >
              Is debt, insurance, and rent “free enterprise?”
              <div
                style={{
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                Is it possible to create non labor based Value?
                <div
                  style={{
                    padding: !this.state.america && "10px",
                    margin: !this.state.america && "10px",
                    width: "calc(100% - 40px)"
                  }}
                >
                  <a href="https://www.reddit.com/r/Marxism/comments/wt17lt/comment/il2qi1k/">
                    labeats
                  </a>
                  : You might be interested in reading the “Marxist value
                  theorists” like Kozo Uno and Thomas Sekine.
                  <br />
                  <br />
                  On a close reading of Capital it’s clear Marx understood the
                  dynamic where like, a commodity is only worth what someone
                  else was willing to pay for it — exchange is necessary to
                  realize value. You can’t just put more hours into the coat
                  you’re making and expect it to be “worth” double.
                  <br />
                  <br />
                  Also, the value theorists are good at stressing the importance
                  of relative surplus value — you mentioned only absolute SV,
                  which is when you’re required to work longer than it takes to
                  pay your wages. But relative SV is what really makes the world
                  go round —
                  <br />
                  <br />
                  For example, why offshore industry from America to Vietnam or
                  from Germany to the Balkans, since labor is labor wherever you
                  go? Because the cost of social reproduction is cheaper in
                  those countries — workers just don’t need as much money (in
                  USD or Deutschmarks), because their countries are poorer, so
                  they have less hot domestic competition for purchasing
                  commodities locally. This differential is something
                  international firms churn into profit.
                  <br />
                  <br />
                  A lot of that stuff is in Vol 3, and I think the
                  financialization / parasitic capital stuff might be too, but
                  I’m less strong on that.
                  <br />
                  <br />
                  IMO the thing to remember with labor theory of value is that
                  it’s not meant to be a mathematical model for explaining
                  price, it’s a philosophical fact: however much money the
                  stockbroker makes, if he couldn’t take it to the grocery store
                  and the clothing store to buy what he needs to live, then he
                  would be naked and starving — Marx reminds us that (a)
                  production is always social, that’s the “material” aspect of
                  the economy, and (b) nothing can happen without labor. Even
                  fruit needs to be picked — the natural world does not present
                  humanity with ready-to-eat food and ready-to-wear clothes, or
                  a set of “animal instincts” we can follow to get them
                </div>
                <br />
                <hr />
                RedDragon1917:{" "}
                <i>
                  Marx understood the dynamic where like, a commodity is only
                  worth what someone else was willing to pay for it — exchange
                  is necessary to realize value
                </i>
                <br />
                <br />
                Yes, exchange is necessary to realise value but value is created
                solely by workers in the production process depending on the
                Socially necessary labor time. Not through other's subjective
                preference. That is a completely different contending value
                theory espoused by the Austrians.
                <br />
                <br />
                <i>
                  You can’t just put more hours into the coat you’re making and
                  expect it to be “worth” double.
                </i>
                <br />
                <br />
                Actually yes, if the socially necessary labor time to produce a
                coat did double, so would its value. If the business didn't
                increase prices accordingly, it would never be able to cover
                it's costs.
                <br />
                <br />
                There is extensive evidence to prove that value is dependent on
                labor time. The subjective theory of value is unfalsifiable, nor
                can it predict anything.
              </div>
              <br />
              <hr />
              AdFabulous9451: If value is not measurable it is also subjective
              to the worker, due for imputations of chores, like. I try to say
              Marx is the founder of Microeconomics, to which surplus value is
              inelasticity of the supply curve over otherwise complementary
              demand, that which enables producer and consumer surplus from
              marginal product revenue over fixed (startup) costs diminishing
              (sinking).
            </div>
            <h4>
              Isn’t inflation by money "
              <a href="https://www.quora.com/unanswered/Does-elastic-not-mean-run-over-rise">
                elastic
              </a>
              -inelasticity?" Can subsidies providing support for certain
              industries help afford others when labor substitution is
              inelastic?
            </h4>
            <h3>
              <a href="https://www.quora.com/How-can-Republicans-who-want-economic-growth-beyond-the-natural-rate-increase-be-called-conservative">
                Is peacetime expansion conservative?
              </a>
              {space}&bull;{space}
              <a href="https://www.quora.com/How-are-the-youngest-millennials-lazy-when-we-earn-half-and-work-twice-as-much-as-the-oldest-ones">
                How are the youngest millennials lazy when we earn half and work
                twice as much as the oldest ones?
              </a>
              {space}&bull;{space}
              <a href="https://vaults.biz">
                <span role="img" aria-label="bank">
                  🏦
                </span>
              </a>
              {space}
              &bull;{space}
              <a href="https://saltbank.org">
                <span role="img" aria-label="atm">
                  🏧
                </span>
              </a>
            </h3>
            Why is Matt Schlapp, the Conservative PAC founder, saying that a
            recession of expenses is bad for{space}
            <a href="∫https://www.quora.com/unanswered/Is-a-technologists-utilitarian-job-to-displace-other-peoples-valued-jobs">
              abjectly useless ["short-term"] displaced
            </a>
            {space}jobs?
            <h1>
              Is 'natural' not substitutive markets to Karl Marx insofar that
              the laborer is in charge of their own capital?
            </h1>
            Richard Stephens: Actually read Marx.
            <div
              style={{
                padding: !this.state.america && "10px",
                margin: !this.state.america && "10px",
                width: "calc(100% - 40px)"
              }}
            >
              Socialism is when the working class seizes the means of
              production.
              <br />
              <br />
              Communism is a stateless society, any country claiming it is
              communist is an oxymoron.
              <br />
              <br />
              This is true socialism/communism in the same sense H₂O is true
              water. That is to say Sulphuric Acid H₂SO₄ has all the properties
              of water but we would not call it water or drink it, because it’s
              not water. The Eastern Block was never socialist and were under
              occupation by the Russian Empire.
              <br />
              <br />
              <div
                style={{
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                I do say communism is utilitarian socialism (industry/idle) but
                asserted anti-
                <a href="https://www.quora.com/Do-Democrats-and-Republicans-not-feel-guilty-for-making-people-with-no-kids-pay-property-tax">
                  patriarchy
                </a>
                {space}and{space}
                <a href="https://economics.stackexchange.com/questions/52505/education-s-natural-marginal-affectation-over-employment">
                  finance
                </a>
                {space}(as opposed to christian socialism).
                <br />
                <br />
                <a href="https://www.marxists.org/archive/marx/works/1844/manuscripts/comm.htm">
                  Private Property and Communism
                </a>
                <br />
                <br />
                <i>
                  Communism as the positive transcendence of private property as
                  human self-estrangement, and therefore as the real
                  appropriation of the human essence by and for man; communism
                  therefore as the complete return of man to himself as a social
                  (i.e., human) being – a return accomplished consciously and
                  embracing the entire wealth of previous development. This
                  communism, as fully developed naturalism, equals humanism, and
                  as fully developed humanism equals naturalism; it is the
                  genuine resolution of the conflict between man and nature and
                  between man and man – the true resolution of the strife
                  between existence and essence, between objectification and
                  self-confirmation, between freedom and necessity, between the
                  individual and the species. Communism is the riddle of history
                  solved, and it knows itself to be this solution.
                </i>
                <br />
                <br />
                cntl+f ‘
                <a href="https://www.marxists.org/archive/marx/works/download/pdf/Economic-Philosophic-Manuscripts-1844.pdf">
                  nature
                </a>
                '
                <br />
                <br />
                <i>
                  “’This rent may be considered as the produce of those powers
                  of nature, the use of which the landlord lends to the farmer.
                  It is greater or smaller according to the supposed extent of
                  those powers, or in other words, according to the supposed
                  natural or improved fertility of the land. It is the work of
                  nature which remains after deducting or compensating
                  everything which can be regarded as the work of man.’ (Adam
                  Smith, WON, Vol. I, pp. 324-25.) ‘The rent of land, therefore,
                  considered as the price paid for the use of the land, is
                  naturally a monopoly price. It is not at all proportioned to
                  what the landlord may have laid out upon the improvement of
                  the land, or to what he can afford to take; but to what the
                  farmer can afford to give.’ (Adam Smith, WON, p. 131.) Of the
                  three original classes, that of the landlords is the one
                  “whose revenue costs them neither labor nor care, but comes to
                  them, as it were, of its own accord, and independent of any
                  plan or project of their own’. (Adam Smith, WON, Vol. I, p.
                  230.)”
                </i>
              </div>
              <i>
                Even Malthus recognises overpopulation as a necessity of modern
                industry, though, after his narrow fashion, he explains it by
                the absolute over-growth of the labouring population, not by
                their becoming relatively supernumerary.
                {/**he banied about with everybody */}
              </i>
              <div
                style={{
                  padding: !this.state.america && "10px",
                  margin: !this.state.america && "10px",
                  width: "calc(100% - 40px)"
                }}
              >
                '
                <a href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch19.htm">
                  But it is evident
                </a>
                {space}that all cannot be in the middle. Superior and inferior
                parts are in the nature of things absolutely necessary,'
                {space}
                <i>naturally there can be no mean without extremes</i>,
                'strikingly beneficial. If no man could hope to rise, or fear to
                fall in society; if industry did not bring with it its reward,
                and indolence its punishment; we could not expect to see that
                animated activity in bettering our condition, which now forms
                the master-spring.'{space}
                <i>
                  (Malthus: Principles of Population, 303; Prévost, 112).
                  <br />
                  <br />
                  Thus there must be lower classes in order that the upper ones
                  may fear to fall and there must be upper classes in order that
                  the lower ones may hope to rise. In order that indolence may
                  carry its own punishments the worker must be poor and the
                  rentier and the landlord, so beloved of Malthus, must be rich.
                  But what does Malthus mean by the reward of industry? As we
                  shall see later, he means that the worker must perform part of
                  his labour without an equivalent return. A wonderful stimulus,
                  provided the “reward” and not hunger were the stimulus. What
                  it all boils down to is that a worker may hope to exploit
                  other workers some day.
                  <br />
                  <br />
                  Rousseau says:
                </i>
                {space}'The more monopoly spreads, the heavier do the chains
                become for the exploited.'
                <br />
                <br />
                <i>
                  A{space}
                  <a href="https://www.marxists.org/archive/marx/works/1863/theories-surplus-value/ch03.htm">
                    definite quantity of living labour
                  </a>
                  {space}does not command the same quantity of materialised
                  labour, or a definite quantity of labour materialised in a
                  commodity commands a greater quantity of living labour than is
                  contained in the commodity itself. But as Adam Smith quite
                  correctly takes as his starting-point the commodity and the
                  exchange of commodities, and thus the producers initially
                  confront each other only as possessors of com­modities,
                  sellers of commodities and buyers of commodities, he therefore
                  discovers (so it seems to him) that in the exchange between
                  capital and wage-labour, materialised labour and living
                  labour, the general law at once ceases to apply, and
                  commodities(for labour too is a commodity in so far as it is
                  bought and sold) do not exchange in proportion to the
                  quantities of labour which they represent. Hence he concludes
                  that labour-time is no longer the immanent measure which
                  regulates the exchange-value of commodities, from the moment
                  when the conditions of labour confront the wage-labourer in
                  the form of landed property and capital. He should on the
                  contrary, as Ricardo rightly points out, have drawn the
                  opposite conclusion, that the expressions “quantity of labour”
                  and “value of labour” are now no longer identical, and that
                  therefore the relative value of commodities, although
                  determined by the labour-time contained in them, is not
                  determined by the value of labour, since that was only correct
                  so long as the latter expression remained identical with the
                  former. Later on, when we deal with Malthus, we can show how
                  wrong and absurd it would be, even when the labourer
                  appropriated his own product, i. e., the value of his own
                  product, to make this value or the value of labour the measure
                  of value, in the same sense in which labour-time or labour
                  itself is the measure of value and the value-creating element.
                  For even in that case the labour which can be bought with a
                  commodity cannot serve as a measure in the same sense as the
                  labour contained in it. One would be merely an index to the
                  other.
                  <b />
                  <b />
                  In any case Adam Smith feels the difficulty of deducing the
                  exchange between capital and labour from the law that
                  determines the exchange of commodities, since the former
                  apparently rests on quite opposite and contradictory
                  principles. And indeed the contradiction could not be solved
                  so long as capital was set directly against labour instead of
                  against labour-power. Adam Smith was well aware that the
                  labour-time expended on the reproduction and maintenance of
                  labour-power is very different from the labour which it [
                  <a href="https://www.marxists.org/archive/marx/works/1857/grundrisse/ch09.htm">
                    i. e., labour-power itself
                  </a>
                  ] can perform.{/**"bear title" */}
                </i>
              </div>
            </div>
            <i>
              ...through the protective tariff system and the steadily growing
              domestic market the workers must be exposed to a prosperity no
              trace of which has been seen here in Europe for years now (except
              in Russia, where, however, the bourgeois profit by it and not the
              workers).
            </i>
            <b>
              Who believes in{space}
              <a href="https://adailyimpeachment.quora.com/Did-Karl-Marx-invent-communism-1">
                Karl Marx
              </a>
              's ideas today?
            </b>
            {space}
            <i>
              Doesn’t the non-voting left always wish to conserve living labour
              while the American left wish to extend it? Don’t Republicans wish
              to conserve the legal, fiscal, and financial institutions?
            </i>
            {space}Isn’t finance and trading with brokerage personally
            identifiable information soft work?{space}
            <i>Isn’t social capital expiry, non-compete, and/or secret?</i>
            <div
              style={{
                color: "white",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                padding: !this.state.america && "10px",
                border: "1px solid",
                backgroundColor: "cadetblue"
              }}
            >
              <b>
                <a href="https://saverparty.xyz/global">Saver</a>
                {space}Party
              </b>
              {space}
              <i>does</i>. Proprietary production doesn’t sink machine rents
              into explicit lifetime real productivity per capita. That’s just
              not natural, and certainly not ordinary. Honest and direct
              mechanism design requires that labor expires and commodities
              rollover. Isn’t propriety what one will offer?
              <div
                style={{
                  position: "relative",
                  textAlign: "right",
                  backgroundColor: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 20px)",
                  border: "1px solid",
                  color: "black"
                }}
              >
                <b
                  style={{
                    color: "white",
                    top: "-20px",
                    position: "absolute",
                    width: "max-content",
                    right: "0px"
                  }}
                >
                  equal people
                </b>

                <div
                  style={{
                    color: "white",
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 0px)",
                    border: "1px solid",
                    backgroundColor: "cadetblue"
                  }}
                >
                  Naturally so ordinally does the individual have consumption
                  that they make and devise trade with to a positive sum for
                  skills, yet the exchange value is more than the labor required
                  for living, a sort of 3 part function of production with wage
                  or labor productivity, machine rent and leisure time.
                </div>
              </div>
              Consumption = Utility + Kapital + Labour
              <br />
              Labour = pay rate per hour
              <br />
              Kapital = fixed rent per working day
              <br />
              Utility = leisure per working day
              <br />
              inequality to be guided by non-accelerating inflation rate of
              unemployment
              <iframe
                title="Bad Advice: Karl Marx and the cromulent malthusian Great Reset Virtual-Key, keyBox episode"
                //allowTransparency="true"
                height="300"
                width="100%"
                style={{ border: "none", minWidth: "min(100%, 430px)" }}
                scrolling="no"
                //dataName="pb-iframe-player"
                src="https://www.podbean.com/player-v2/?from=embed&i=jh99b-12a2b24-pb&square=1&share=1&download=1&fonts=Arial&skin=2baf9e&font-color=ffffff&rtl=0&logo_link=episode_page&btn-skin=1b1b1b&size=300"
                allowFullScreen=""
              ></iframe>
              Why is{space}
              <a href="https://humanharvest.info">baby boomer</a>
              {space}retirement a problem for{space}
              <a href="https://vaults.biz/party">long-term unemployment</a>
              {space}if they do not do manual labor anyway? When is short-term
              employment hard labor? Shouldn’t Biden launch his patriot parole
              program already? Do{space}
              <a href="https://secretary.quora.com/Are-heroes-of-countries-explorers-or-nationalists">
                Republicans and Democrats
              </a>
              {space}like stimulus policies of showing previous income for
              business and individuals respectively?{space}
              <i>
                When is real dynamic demand growth not waste in excess of
                non-inflationary marginal utility? When does taking on debt not
                raise the real natural rate per hour?
              </i>
              {space}Isn’t '<a href="https://thetax.party">propriety</a>' what
              one will offer? Isn't propriety individually disposable? Should
              {space}
              <i>
                <a href="https://www.quora.com/unanswered/What-evidence-needs-to-be-gathered-during-bond">
                  harassing
                </a>
                {space}
                speedboats
              </i>
              {space}be{space}
              <a href="https://thumbprint.us">
                shot down in certain international waters
              </a>
              ? Does being a property owner and worker in a land in 2022 require
              them to fight for the{space}
              <a href="https://saverparty.xyz/racists">government</a>
              {space}military{space}
              <a href="https://regcops.quora.com">and/or police</a>? If I have
              personal debts and I get a capital gain, why wouldn't I just
              reinvest instead?{space}
              <i>
                If rent, debt, and insurance prevents the rights of ownership,
                and such is the UN international law definition of slavery, how
                is capitalism not slavery?
              </i>
              {space}Isn't it true that while Adam Smith attacked landlords,
              Karl Marx attacked lenders?{space}
              <h2 style={{ lineHeight: "10px" }}>
                Aren't insurers next?{space}
                <i
                  style={{
                    fontSize: "12px"
                  }}
                >
                  ‘Without coercion, without the need to have a ‘job’ to get
                  what one needs and wants, many employments would{space}
                  <a href="https://theanarchistlibrary.org/library/anarqxista-goldman-a-handbook-for-anarchist-insurrection">
                    disappear—the whole bureaucracy of insurance companies
                  </a>
                  , for instance.’
                </i>
              </h2>
              <div
                style={{
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 0px)",
                  border: "1px solid",
                  backgroundColor: "cadetblue"
                }}
              >
                <a
                  style={{ position: "absolute" }}
                  href="https://www.quora.com/How-do-you-define-communism-can-you/answer/Nick-Carducci"
                >
                  K+L=P
                </a>
                <a href="https://saverparty.xyz">
                  <h4
                    style={{
                      //transform: "translateX(40px)",
                      margin: "4px 0px",
                      textAlign: "center",
                      width: "calc(100%)"
                    }}
                  >
                    Assert the Universal
                  </h4>
                </a>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-around"
                  }}
                >
                  <div style={{ width: "80px" }}>Insurance</div>
                  <div style={{ width: "70px" }}>Advice</div>
                  <div style={{ width: "70px" }}>Tort</div>
                </div>
                How would Florida residents save money and/or profit with
                hurricane insurance if they all share the risk? How does the
                sharing of risk differ from a game of risk?{space}
                <b
                  style={{
                    color: "rgb(252, 115, 5)",
                    WebkitTextStroke: "1px rgb(14, 82, 143)"
                  }}
                >
                  How does insurance save people money?{space}
                  <a
                    style={{
                      color: "rgb(252, 115, 5)",
                      WebkitTextStroke: "1px rgb(14, 82, 143)"
                    }}
                    href="https://venmo.com/nickcarducci"
                  >
                    Doesn’t it require another cardinal rating than price like
                    interest?
                  </a>
                  {space}Isn’t that a dead weight loss?
                </b>
                {space}
                Shouldn’t insurance be illegal for sharing-, instead of
                creating-, risk already? Shouldn’t warranty be illegal for the
                expiration-based surrendered public good will right to own?
                Can’t one say “no guarantee” on every advert to abscond bad
                advice indictments? What are some examples of when hazards are
                implied and not? Would inventory management not be liable for
                purpose (storage) as shipping would be (transit)? Will the
                government only help you with civil suits if you have money?
                {space}
                <span
                  style={{
                    backgroundColor: "rgb(29,161,242)"
                  }}
                >
                  How would a business be liable for bad advice given by their
                  customers rather than their employees?
                </span>
                {space}Why would conservatives suggest the market of supply and
                demand are not individuals but firms?{space}
                <b
                  style={{
                    color: "chocolate",
                    WebkitTextStroke: "1px lightsalmon"
                  }}
                >
                  Isn’t the animal’s right to disown operating intravenously,
                  chemically, or genetically just as well to stop as the
                  human-animal’s right to try?
                </b>
                {space}Why is it that for drugs to be legal, the government has
                to administer them?{space}
                <i style={{ color: "lightgrey" }}>
                  Does the “know your customer” policy allow a company to make a
                  blacklist for alleged mis-/disinformation? Don’t they need to
                  win a desist order before fining them for bad advice? Wouldn’t
                  a terms of service surrender the public good will otherwise?
                </i>
                {space}How is the sharing of risk or loitering factored into
                price taking budget constraints?{space}
                <i style={{ color: "lightsteelblue" }}>
                  Isn't the shared risk of human consequences as a game
                  indirectly and/or dishonestly fraudulent chance?
                </i>
                {space}
                <span style={{ color: "lightgrey" }}>
                  Isn't the honest mechanism design void of indirect mechanisms?
                  {space}
                  <i style={{ color: "lightsteelblue" }}>
                    Why would brokers sell data if they weren't using it to
                    cheat? Is it schizophrenic to suggest that online brokerages
                    sell personally identifiable user data to trade against?
                    Would showing the volume on bid or ask make it too easy for
                    retail traders? Isn’t finance and trading with brokerage
                    personally identifiable information soft work?
                  </i>
                  {space}Doesn’t a game become indirect and/or dishonest when
                  chance is fraudulent?
                </span>
                {space}How do you differentiate the demand curve from the demand
                schedule?
                <div
                  style={{
                    color: "white",
                    transition: ".3s ease-in",
                    width: "max-content",
                    maxWidth: "calc(100% - 0px)",
                    border: "1px solid",
                    backgroundColor: "cadetblue"
                  }}
                >
                  The demand curve is the what the demand schedule is top to
                  bottom, rather left to right, by ordinal propensity for the
                  market and the value ascertained by such preferences in
                  cardinal price. Doesn’t price being cardinal imply that the
                  intercept can be negative?
                </div>
                How does the will and/or request to drop dead at a specific time
                and place compare to a death threat in which someone says they
                are going to make it happen? Isn’t the only credible threat by
                prior offenders if death wishes are abetted?
                <br />
                <br />
                'Can I be a communist and vote? Many communists that I’ve met
                online are very against voting as they see it as a form of
                imperialism.
                {
                  space /**
            isn't lawyering the art of{space}<a href="https://commie.dev/plaintiff">poignant</a>
            {space}<a href=https://phyletic.quora.com/What-are-the-uses-of-logic-in-economics-1">factors</a>? */
                }
                <i>
                  <a href="https://electiontechnology.quora.com/What-is-the-percentage-of-people-who-want-universal-healthcare-1">
                    Are they right
                  </a>
                  ?
                </i>
                '
                <br />
                If the communist line is the democrat line, to you, then vote
                democrat. Otherwise,{space}
                <a href="https://electiontechnology.quora.com/Do-you-think-people-should-have-to-pay-for-healthcare-1">
                  vote communist
                </a>
                {space}when it is called saver party to confuse a lot of people
                into understanding communism.{space}
                <i>
                  If 39% of non-voters, 54% of democrats, and 15% of republicans
                  would take government healthcare over the insurance companies
                  (PEW), while 95%, 52%, and 19% respectively support occupy, do
                  57% non-voters wish to ban insurance companies of any kind?
                </i>
              </div>
              {space}If the old mode of production is still{space}
              <a href="https://saverparty.xyz/global">feudalism</a>
              {space}without machine rents, isn’t the oldest mode of production
              without land rents, still?{space}
              <i
                style={{
                  color: "burlywood"
                }}
              >
                Isn't the old mode of production classless by ordinary machine
                rent?
              </i>
              {space}
              <i>
                Why can’t Americans buy Venezuelan{space}
                <a href="https://2024nj.com/oil">oil?</a>
                {space}Isn't American oil expensive because of labor?
              </i>
              {space}Wouldn’t less exports lower living expenses and physical
              resource depletion for a developed economy?{space}
              <i
                style={{
                  color: "peachpuff"
                }}
              >
                Isn't a nation's independence a matter of taxes and/or debts?
              </i>
              {space}If teachers have to worry about illegal immigrant children,
              isn't that an indictment on American fiscal policy?{space}
              <i
                style={{
                  color: "peachpuff"
                }}
              >
                Are dependents usually the only difference between divorce court
                and business partner litigation? Is marriage like a catch-all
                for joint assets won during the arrangement by either party? If
                so, would the justice system require chastity to dissolve?
              </i>
              {space}Won't underdeveloped countries be{space}
              <a href="https://truncatedwholesaletax.com">made rich</a>
              {space}by the U.S. allowing trade?
            </div>
            "Prayers can defeat the military," - Mike Pompeo. Are communists
            safe in America? Was Alex Jones right to question the Sandy Hook
            victim's mother after he said her son's killer is in heaven?
            <h4 style={{ margin: "4px 0px" }}>
              Is CPI better than the GDP deflator?
            </h4>
            <a href="https://commie.dev/recession">Real GDP</a>, the denominator
            of the GDP deflator, is found by subtracting the same{space}
            <i>bundle of CPI</i>
            {space}(yet{space}
            <b>with some employee-benefits as{space}</b>,{space}
            <i>the actual calculation is abstracted by this space’s namesake</i>
            ). It also{space}
            <i>
              allegedly excludes imports yet for the equation would then read
              purchases instead of product plus exports then, and being in both
              GDP and real GDP, the impact of international trade on each would
              cancel anyway
            </i>
            .{" "}
            <i>
              The real discrepancy between CPI and GDP/realGDP is abstracted
            </i>
            , but you can be sure they both measure out-of-pocket, after-income,
            expenses, yet the latter (GDP) measures less growth by a portion of
            employee-benefits’ appreciation (
            <a href="https://www.quora.com/Is-wage-growth-being-inflation-politics">
              Is wage growth being inflation politics?
            </a>
            ) that shows it grows slower, but that actually grows faster in
            <i>side the whole of</i>
            {space}(if you find) GDP-GDPI-Government-
            <a href="https://saverparty.xyz/poverty">
              Food-Clothing-Shelter-Utilities-(1.2x for healthcare)
            </a>
            .
            <br />
            <br />
            core without food and gas, also pce{space}
            <a href="https://occupywallst.quora.com/What-is-the-difference-between-a-company-and-a-corporation-1">
              cost-to-revenue
            </a>
            . Are home sales good if inflation is higher?
            <br />
            <br />
            <span
              style={{ backgroundColor: "lightsalmon" }}
              ref={this.socialcapital}
            >
              <a href="https://bankingisnotabusiness.quora.com/Is-money-lending-one-of-the-riskiest-businesses-In-the-world-today-1">
                How can a business go out of business?
              </a>
              {space}Can a political science bachelor with a minor in economics
              be charged with insider trading without the comment box in their
              brokerage platforms?{space}
              <i>
                How can foreclosure restore the damages of loitering, interest,
                and principal over collateral?
              </i>
            </span>
            {space}
            <i>
              What does raising in a meaningful way mean for private bond
              investors? Isn't there{space}
              <a href="https://www.quora.com/What-does-Social-Capital-mean-to-you/answer/Nick-Carducci">
                more good will for treasury bonds outstanding{space}
              </a>
              {space}versus{space}
              <a href="https://marx.quora.com">outright</a>
              {space}than checkable deposits?
            </i>
            {space}Wouldn’t lending have to stop completely to ever make the
            paying down of all public and private debt at all possible within 50
            years?
            {space}
            <b
              style={{
                WebkitTextStroke: "1px lightblue"
              }}
            >
              Wouldn’t amortizing accrual be better for us than crashing home
              prices?
            </b>
            {space}Doesn't someone{space}
            <a href="https://comlib.quora.com/What-do-you-understand-by-social-capital-1">
              invest in currency by exchanging
            </a>
            {space}for it rather than hoping default will come before accrual
            amortization? The U.S. wants us to flip currencies? The great law of
            {space}
            <a href="https://scopebook.quora.com/What-is-a-plaintiff-1">
              nature
            </a>
            {space}is retaliation (or retribution). I want capitalists to drop
            dead I guess. I have been
            {space}
            <a href="https://www.quora.com/unanswered/Were-communists-always-safe-in-America">
              wished death for
            </a>
            {space}being{space}
            <a href="https://www.quora.com/How-do-you-define-communism-can-you/answer/Nick-Carducci">
              communist
            </a>
            .
            <br />
            <br />
            {!this.state.america && (
              <Cable
                style={{ width: "200px", maxWidth: "100%", height: "300px" }}
                onError={handleScollImgError}
                //img={true}
                src={
                  this.state.noyout
                    ? ""
                    : "https://www.youtube.com/embed/nKvUf7F4Xn4"
                }
                float={"left"}
                title="https://youtu.be/nKvUf7F4Xn4" //7Jy9JyrukCY"
                scrolling={this.state.scrolling}
                fwd={this["scrollImg" + scrollnum()]}
                scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                scrollTop={this.state.scrollTop}
              />
            )}
            <span style={{ backgroundColor: "lightsalmon" }}>
              The only compromise between communists and capitalists is
              cash:debt * annual income. "Accrual amortization".
            </span>
            {space}Surrendered freedom (good will/ concurrentable ownership is
            public property and private capital).{space}
            <i>No secrets</i>. Propriety honest/direct not expiry/non-compete
            nor life/game risk source.{space}
            <a href="https://reddit.com/r/spananarchy">
              Spam is insanity, not unique ads
            </a>
            .{space}
            <i>
              Multiply when sort does
              <span
                style={{
                  textDecoration: "line-through"
                }}
              >
                <a href="https://twitter.com/frothanalysis/status/1428797720546906113">
                  n't
                </a>
              </span>
              {space}matter.
            </i>
            {space}
            <span
              ref={this.voting}
              style={{ color: "white", backgroundColor: "rgb(29,161,242)" }}
            >
              Shuffle mail{space}
              <a style={{ color: "white" }} href="https://thumbprint.us">
                before call yo
              </a>
              .Third party of non-voters do NOT want RCV faction-shifting away
              from Explicit approval reconciliating budget voting!
            </span>
            {space}But really vote Free Rider{space}
            <a href="https://commie.dev/plaintiff">Immutable Plaintiff</a>
            {space}Truncated Wholesale Durable Goods Geohash Spoof Square Tax.
            Anarchists stand for{space}
            <a href="https://reddit.com/r/moralanarchism">
              expropriating morals
            </a>
            .{space}
            <a href="https://rumble.com/v1nd86s-escalation-after-crimea-bridge-blast-russia-hits-back.html">
              'Everyone count paper.'
            </a>
            {space}Why is government storage more reliable than mail. More
            retarted than my non-speaking cousin (get the{space}
            <a href="https://disabilities.quora.com">anti-social</a>
            {space}off{space}
            <a href="https://2024nj.com/ssa">SSDI</a>).{space}
            <i>Don't vote</i>.
            <br />
            {!this.state.america && (
              <a href="https://virtualid.quora.com">
                <Cable
                  style={{ width: "100%" }}
                  onError={handleScollImgError}
                  img={true}
                  src={
                    this.state.noyout
                      ? ""
                      : "https://www.dropbox.com/s/sacnanoy31ttx2a/finra%20neuralink.png?raw=1"
                  }
                  float={null}
                  title="finra neuralink" //7Jy9JyrukCY"
                  scrolling={this.state.scrolling}
                  fwd={this["scrollImg" + scrollnum()]}
                  scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
                  scrollTop={this.state.scrollTop}
                />
              </a>
            )}
            <div
              style={{
                padding: !this.state.america && "10px",
                color: "white",
                transition: ".3s ease-in",
                width: "max-content",
                maxWidth: "calc(100% - 20px)",
                border: "1px solid",
                backgroundColor: "cadetblue"
              }}
            >
              <div
                style={{
                  borderLeft: "2px solid",
                  padding: !this.state.america && "10px",
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 22px)",
                  border: "1px solid",
                  backgroundColor: "cadetblue"
                }}
              >
                u/slapdash78: Classical liberalsm does not prescribe how rights
                agencies are funded.
              </div>
              <br />
              That would imply a non-neoliberalism classical liberalism. Why not
              just own the difference and move on? You can't have a big tent.
              It's deranged.
              <br />
              <br />
              The tax payers who do so under no compulsion are interested in the
              market fervors (e.g. FDI and imports). Absolute anarchy must
              suspend the general state, relative anarchy might suppose
              predilective modicum synthesis, I like. We induce every deduction.
              r/moralanarchism.
              <br />
              <br />
              <div
                style={{
                  borderLeft: "2px solid",
                  padding: !this.state.america && "10px",
                  color: "white",
                  transition: ".3s ease-in",
                  width: "max-content",
                  maxWidth: "calc(100% - 22px)",
                  border: "1px solid",
                  backgroundColor: "cadetblue"
                }}
              >
                Very few men out of the whole number of us are{space}
                <a href="https://2024nj.com/carducci">strictly</a>
                {space}honest and truthful, but the politician has far greater
                hindrances in these respects than other men. He is bound to
                think as his party thinks; he is bound to think in such a way
                that he shall get a sufficient number of votes to give him the
                seat or the influence that he desires. He has mortgaged his own
                judgment and his own sense of what is right to the oppressive
                necessity that he shall be in agreement with others.
              </div>
              <br />
              Yeuh. Science is not an inductive artifactual standard method,
              rather it deduces from trial and error. Always. Imo.{space}
              <i>(1/6 opulent modicum)</i>
              {/* */}
              <br />
            </div>
            People are walking around, going food shopping,{space}
            <a href="https://beingstable.quora.com/Are-vigilantes-non-institutional-advocates">
              with mental illness
            </a>
            <h3 style={{ margin: "4px 0px" }}>
              <a href="https://marginalism.uk/class">Marginalism.uk</a>
            </h3>
          </div>
          <div
            style={{
              position: "fixed", //salt bank vaults royalty stewardship
              right: "0px", //living commodities at the equator
              bottom: "0px",
              cursor: "pointer"
            }}
            onClick={() => this.props.setBasic()}
          >
            more
          </div>
        </div>
      );
  }
}
