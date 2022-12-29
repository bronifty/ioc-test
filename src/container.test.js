import { container } from "./Shared/Container";
import { presenter } from "./Shared/Presenter";

beforeEach(() => {
  container.mode = "fake";
});

test("renders learn react link", () => {
  expect(presenter.load().message).toBe("fake message");
});
