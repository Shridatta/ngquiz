import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ResultDialogComponent } from "./result-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";

describe("", () => {
  let fixture: ComponentFixture<ResultDialogComponent>;
  let component: ResultDialogComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDialogModule,
        MatInputModule,
        BrowserAnimationsModule
      ],
      declarations: [ResultDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it("should create the ResultDialogComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it("should render the total questions", () => {
    let fixture = TestBed.createComponent(ResultDialogComponent);
    let total = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".total"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it("should render the correctly answered questions", () => {
    let fixture = TestBed.createComponent(ResultDialogComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".correct"));
    // de = fixture.debugElement.query(By.css('#theid'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it("should render the do you want to play again yes button", () => {
    let fixture = TestBed.createComponent(ResultDialogComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css("#yes-button"));
    // de = fixture.debugElement.query(By.css('#theid'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBeTruthy();
  });

  it("should render the do you want to play again no button", () => {
    let fixture = TestBed.createComponent(ResultDialogComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css("#no-button"));
    // de = fixture.debugElement.query(By.css('#theid'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBeTruthy();
  });

  it("should render the correctly answered questions", () => {
    let fixture = TestBed.createComponent(ResultDialogComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".correct"));
    // de = fixture.debugElement.query(By.css('#theid'));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  function createComponent() {
    fixture = TestBed.createComponent(ResultDialogComponent);
    component = fixture.debugElement.componentInstance;
  }
});
