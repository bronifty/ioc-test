import { repository } from "./Repository";

export default class Presenter {
  constructor() {}
  load = () => {
    return { message: repository.load() };
  };
}
export const presenter = new Presenter();
