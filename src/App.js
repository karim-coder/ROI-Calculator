import "./App.css";
import Switch from "react-switch";
import { useState } from "react";
import { GrUp } from "react-icons/gr";
import { Button, Filter } from "./components/Filters";
function App() {
  const [checked, setChecked] = useState(true);
  const [check, setCheck] = useState(true);
  return (
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div className="App">
        <h1 style={{ margin: 0 }}>ROI Calculator</h1>
        <div style={styles.cake_usd}>
          <img
            src="https://findicons.com/files/icons/2010/free_food/128/cake.png"
            style={{ height: 25, width: 25 }}
          />
          <p style={styles.cake}>Cake</p>

          <Switch
            onChange={() => setChecked(!checked)}
            checked={checked}
            checkedIcon={null}
            uncheckedIcon={null}
            onColor="#ffc40c"
          />
          <p style={styles.usd}>USD</p>
        </div>
        <h2 style={styles.usdAmount}>0.000 USD</h2>
        <div style={styles.amount}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button enable={false} text="$1000" />
            <Button enable={false} text="$100" />
          </div>
          <h3 style={styles.cakeAmount}>~CAKE 0.000</h3>
        </div>
        <h3>Timeframe</h3>
        <div style={styles.timeFrame}>
          <Filter enable={true} text="1 Day" />
          <Filter enable={false} text="7 Days" />
          <Filter enable={false} text="30 Days" />
          <Filter enable={false} text="1 Year" />
          <Filter enable={false} text="5 Years" />
        </div>
        <div style={styles.enableAccelerate}>
          <h2 style={{ margin: 0 }}>Enable Accelerated APY</h2>
          <input
            type="checkbox"
            id="switch"
            className="checkbox"
            checked={check}
            onClick={() => setCheck(!check)}
          />
          <label for="switch" className="toggle"></label>
        </div>
        <h2>Select Tier</h2>
        <div style={styles.tier}>
          <Filter enable={true} text="Tier 1" />
          <Filter enable={false} text="Tier 2" />
          <Filter enable={false} text="Tier 3" />
          <Filter enable={false} text="Tier 4" />
          <Filter enable={false} text="Tier 5" />
        </div>
        <h3 style={styles.rateTitle}>ROI at current Rates</h3>
        <h1 style={styles.currentRate}>0.00 USD</h1>
        <h3 style={styles.rateTitle}>~0.000 CAKE + 0.000000 DON</h3>

        <h3 style={styles.hide}>
          Hide Details
          <GrUp style={{ left: "10px", top: "5px", position: "relative" }} />
        </h3>
        <div style={styles.amount} onClick={() => {}}>
          <h2>APY</h2>
          <h2 style={{ color: "#ffc40c" }}>9.0%</h2>
        </div>
        <ul style={styles.apyItem}>
          <li>Calculated based on current rates</li>
          <li>
            All figures are estimates provided for your convenience only, and by
            no means represent guaranteed returns.
          </li>
        </ul>
      </div>
    </div>
  );
}

const styles = {
  cake_usd: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    color: "#888",
  },
  cake: {
    margin: 0,
    marginRight: 10,
    marginLeft: 10,
    fontWeight: "bolder",
    fontSize: 22,
  },
  usd: {
    margin: 0,
    marginLeft: 10,
    fontWeight: "bolder",
    fontSize: 22,
  },
  usdAmount: {
    width: "90%",
    backgroundColor: "#F8F8F6",
    padding: 30,
    borderRadius: 15,
    textAlign: "end",
    border: "3px solid #ECECEC",
  },
  amount: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 0,
  },
  cakeAmount: {
    color: "#888",
    margin: 0,
  },
  timeFrame: {
    display: "flex",
    flexDirection: "row",
    textAlign: "start",
  },
  tier: {
    display: "flex",
    flexDirection: "row",
    textAlign: "start",
  },
  enableAccelerate: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  currentRate: {
    width: "90%",
    backgroundColor: "#F8F8F6",
    padding: 30,
    borderRadius: 15,
    textAlign: "end",
    border: "3px solid #ECECEC",
  },
  apyItem: {
    fontSize: 18,
    fontWeight: "bolder",
    color: "#888",
    margin: 0,
    paddingLeft: 30,
    paddingRight: 10,
  },
  hide: {
    textAlign: "center",
    cursor: "pointer",
  },
  rateTitle: { textAlign: "end", color: "#888" },
};

export default App;
