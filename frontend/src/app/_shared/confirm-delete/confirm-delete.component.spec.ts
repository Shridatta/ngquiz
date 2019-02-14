import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ConfirmDeleteComponent } from "./confirm-delete.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";

describe("", () => {
  let fixture: ComponentFixture<ConfirmDeleteComponent>;
  let component: ConfirmDeleteComponent;

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
      declarations: [ConfirmDeleteComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it("should create the ConfirmDeleteComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it("should render the question in the Confirm Delete", () => {
    let fixture = TestBed.createComponent(ConfirmDeleteComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".questionname"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it("should render the answer in the Confirm Delete", () => {
    let fixture = TestBed.createComponent(ConfirmDeleteComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css(".answer"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).not.toBeNull();
  });

  it("should render the Yes button in the Confirm Delete", () => {
    let fixture = TestBed.createComponent(ConfirmDeleteComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css("#yes-button"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBeTruthy();
  });

  it("should render the No button in the Confirm Delete", () => {
    let fixture = TestBed.createComponent(ConfirmDeleteComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css("#no-button"));
    let el: HTMLElement = de.nativeElement;
    expect(el.innerText).toBeTruthy();
  });

  function createComponent() {
    fixture = TestBed.createComponent(ConfirmDeleteComponent);
    component = fixture.debugElement.componentInstance;
  }
});
