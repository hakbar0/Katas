export const updateLight = (curLightColour: string) => {
  const lights = {
    green: "yellow",
    yellow: "red",
    red: "green",
  };

  //todo install typescript lint
  return lights[curLightColour];
};
