import { miniKit } from "../lib/miniKit";
import { useState } from "react";

export default function Home() {
  const connectWallet = async () => {
    await miniKit.connect();
    alert("Wallet Connected ✅");
  };

  return (
    <div style={styles.container}>
      <h1>HUMAX</h1>

      <button onClick={connectWallet} style={styles.btn}>
        Connect Wallet
      </button>

      <a href="/verify">Verify Human</a>
      <br />
      <a href="/claim">Claim Reward</a>
    </div>
  );
}

const styles = {
  container: { textAlign: "center", paddingTop: 100 },
  btn: { padding: 10, marginTop: 20 }
};
