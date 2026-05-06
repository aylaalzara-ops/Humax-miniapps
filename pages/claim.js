import { useState } from "react";

export default function Claim() {
  const [claimed, setClaimed] = useState(false);

  const claimReward = () => {
    if (claimed) {
      alert("Already claimed ❌");
      return;
    }

    setClaimed(true);
    alert("You received 10 HUMAX ✅");
  };

  return (
    <div style={{ textAlign: "center", paddingTop: 100 }}>
      <h2>Claim Reward</h2>

      <button onClick={claimReward}>
        Claim 10 HUMAX
      </button>
    </div>
  );
}
