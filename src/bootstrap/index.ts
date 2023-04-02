import expressLoader from "./express-loader";
import iocLoader from "./ioc-loader";

export const bootstrap = async () => {
  const container = await iocLoader();
  await expressLoader(container);
};
