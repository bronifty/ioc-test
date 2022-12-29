import FakeDependency from "./FakeDependency";
import RealDependency from "./RealDependency";

class Container {
  _mode;

  constructor() {
    this._mode = "unset";
  }

  get() {
    switch (this._mode) {
      case "fake":
        return new FakeDependency();
      case "real":
        return new RealDependency();
      default:
        throw new Error("Container mode not set");
    }
  }

  set mode(newMode) {
    this._mode = newMode;
  }
}

export const container = new Container();
