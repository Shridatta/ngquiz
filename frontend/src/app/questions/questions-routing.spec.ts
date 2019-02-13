import { routes } from "../questions/questions-routing.module";
import { AddQuestionComponent } from "./add-question/add-question.component";
import { QuestionsComponent } from "./questions/questions.component";
import { CanDeactivateGuard } from "./can-deactivate.guard";

describe("routes", () => {
  it("should contain a route for Questions Component", () => {
    expect(routes).toContain({
      path: "questions",
      component: QuestionsComponent
    });
  });
});

describe("routes", () => {
  it("should contain a route for adding a component", () => {
    expect(routes).toContain({
      path: "question/add",
      component: AddQuestionComponent,
      canDeactivate: [CanDeactivateGuard]
    });
  });
});

describe("routes", () => {
  it("should contain a route for adding a component", () => {
    expect(routes).toContain({
      path: "question/edit",
      component: AddQuestionComponent,
      canDeactivate: [CanDeactivateGuard]
    });
  });
});
