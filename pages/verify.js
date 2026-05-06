import { miniKit } from "../lib/miniKit";

export default function Verify() {
  const verifyHuman = async () => {
    try {
      await miniKit.verify({
        action: "humax-verify"
      });

      alert("Verified Human ✅");
    } catch (e) {
      alert("Verification failed");
    }
  };

  return (
    <div style={{ textAlign: "center", paddingTop: 100 }}>
      <h2>Verify as Human</h2>

      <button onClick={verifyHuman}>
        Verify with World ID
      </button>
    </div>
  );
}
