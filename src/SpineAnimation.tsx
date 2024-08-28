import { useEffect, useRef, useState } from "react";
import { SpinePlayer } from "@esotericsoftware/spine-player";
// import monkeyAtlas from "./assets/animations/monkey.atlas";
// import monkeyJson from "./assets/animations/monkey.json";
// import monkeyPng from ".assets/animations/images/monkey.png";
const SpineAnimation = () => {
  const [spinePlayer, setSpinePlayer] = useState<SpinePlayer | null>(null);
  const containerRef = useRef(null);

  const handleButton1 = () => {
    spinePlayer?.animationState?.setAnimation(0, "idle_gun", false);
    spinePlayer?.play();
  };
  const handleButton2 = () => {
    spinePlayer?.animationState?.setAnimation(0, "idle_1", false);
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
        atlasUrl: "./assets/animations/monkey.atlas",
        jsonUrl: "./assets/animations/monkey.json",
        success: function (player) {
          player?.setAnimation("idle_gun");
        },
        error: (err) => console.error("Failed to load Spine animation:", err),
        preserveDrawingBuffer: false,
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
      <button onClick={handleButton1}>Button 1</button>
      <button onClick={handleButton2}>Button 2</button>
      <button onClick={handleButton3}>Button 3</button>
    </>
  );
};

export default SpineAnimation;
