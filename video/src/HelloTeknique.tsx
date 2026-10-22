import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

export const HelloTeknique: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a1a", justifyContent: "center", alignItems: "center" }}>
      <h1 style={{ color: "#fefefe", fontSize: 120, fontFamily: "sans-serif", opacity }}>
        Tek-Nique
      </h1>
    </AbsoluteFill>
  );
};
