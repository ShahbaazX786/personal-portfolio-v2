type WeightConfig = {
  type: "weight";
  min: number;
  max: number;
  base?: number;
  intensity: number;
};

type ColorConfig = {
  type: "color";
  from: string;
  to: string;
  base?: string;
  intensity: number;
};

export type AnimationConfig = WeightConfig | ColorConfig;
