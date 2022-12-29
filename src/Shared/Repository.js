import { container } from "./Container";

export default class Repository {
  constructor() {}
  load = () => {
    return container.get("anything").message();
  };
}
export const repository = new Repository();
