import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { CustomDialogComponent } from "./custom-dialog.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

describe("", () => {
  let fixture: ComponentFixture<CustomDialogComponent>;
  let component: CustomDialogComponent;

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
      declarations: [CustomDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it("should create the DialogComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  function createComponent() {
    fixture = TestBed.createComponent(CustomDialogComponent);
    component = fixture.debugElement.componentInstance;
  }
});
