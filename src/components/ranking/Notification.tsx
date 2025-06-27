import { useState } from "react";

import img1 from "@assets/image/notistep1.png";
import img2 from "@assets/image/notistep2.png";
import img3 from "@assets/image/notistep3.png";

const images = [img1, img2, img3];

const Notification = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  if (step > 2) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
      onClick={step === 2 ? onClose : undefined}
    >
      <div
        style={{
          background: "transparent",
          borderRadius: 20,
          padding: 24,
          maxWidth: 340,
          width: "90vw",
          position: "relative",
          textAlign: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[step]}
          alt={`notification-step-${step + 1}`}
          style={{ width: "100%", borderRadius: 16 }}
        />
        {step === 0 && (
          <button
            style={{
              marginTop: 24,
              background: "#fff",
              width: "100%",
              height: "50px",
              borderRadius: "24px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#2E302D",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            다 읽었어요
          </button>
        )}
        {step === 1 && (
          <button
            style={{
              marginTop: 24,
              background: "#fff",
              width: "100%",
              height: "50px",
              borderRadius: "24px",
              fontSize: "20px",
              fontWeight: 700,
              color: "#2E302D",
              border: "none",
              cursor: "pointer",
            }}
            onClick={handleNext}
          >
            다 읽으셨나요?
          </button>
        )}
      </div>
    </div>
  );
};

export default Notification;
