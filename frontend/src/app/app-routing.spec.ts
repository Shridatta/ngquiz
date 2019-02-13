import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./_shared/auth.guard";
import { routes } from "./app-routing.module";

describe("routes", () => {
  it("should contain a route for MyQuiz", () => {
    expect(routes).toContain({
      path: "myquiz",
      loadChildren: "./myquiz/quiz.module#QuizModule",
      canActivate: [AuthGuard]
    });
  });
});

describe("routes", () => {
  it("should contain a route for Admin", () => {
    expect(routes).toContain({
      path: "admin",
      loadChildren: "./questions/questions.module#QuestionsModule"
    });
  });
});

describe("routes", () => {
  it("should contain a route for Quiz", () => {
    expect(routes).toContain({
      path: "quiz",
      loadChildren: "./quiz/quiz.module#QuizModule",
      canActivate: [AuthGuard]
    });
  });
});

describe("routes", () => {
  it("should contain a route for Login", () => {
    expect(routes).toContain({
      path: "login",
      loadChildren: "./auth/auth.module#AuthModule"
    });
  });
});

describe("routes", () => {
  it("should contain a route for App Component", () => {
    expect(routes).toContain({
      path: "",
      component: AppComponent,
      pathMatch: "full"
    });
  });
});
