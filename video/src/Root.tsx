import { Composition } from "remotion";
import { HelloTeknique } from "./HelloTeknique";

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="HelloTeknique"
      component={HelloTeknique}
      durationInFrames={90}
      fps={30}
      width={1080}
      height={1080}
    />
  );
};
