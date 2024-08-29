import { useEffect, useRef, useState } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";
import { animationData } from "./assets/base64s";
const SpineAnimation = () => {
  const [spinePlayer, setSpinePlayer] = useState<SpinePlayer | null>(null);
  const containerRef = useRef(null);

  const handleButton1 = () => {
    spinePlayer?.animationState?.setAnimation(0, "idle_1", false);
    spinePlayer?.play();
  };
  const handleButton2 = () => {
    spinePlayer?.animationState?.setAnimation(0, "idle_gun", false);
    spinePlayer?.play();
  };
  const handleButton3 = () => {
    spinePlayer?.animationState?.setAnimation(0, "hit+EF", false);
    spinePlayer?.play();
  };

  useEffect(() => {
    if (containerRef.current) {
      const spine = new SpinePlayer(containerRef.current, {
        showControls: false,
        atlasUrl: "monkey.atlas",
        jsonUrl: "monkey.json",
        viewport: {
          width: 300,
          height: 300,
        },
        rawDataURIs: animationData.rawDataURIs,
        success: function (player) {
          player?.setAnimation("idle_gun");
        },
        error: (err) => console.error("Failed to load Spine animation:", err),
        preserveDrawingBuffer: false,
        showLoading: false,
        alpha: true, // Enable player translucency
        backgroundColor: "#00000000",
      });
      //   spine?.animationState?.setAnimation(0, "idle_gun", true);
      setSpinePlayer(spine);
    }
  }, []);

  return (
    <>
      {" "}
      <div
        ref={containerRef}
        style={{ width: "100%", height: "100%" }}
      />
      <button onClick={handleButton1}>Idle</button>
      <button onClick={handleButton2}>Gun Idle</button>
      <button onClick={handleButton3}>Shoot</button>
    </>
  );
};

export default SpineAnimation;
