import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { OAuthService } from "angular-oauth2-oidc";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RootComponent } from "./root.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

describe("", () => {
  let fixture: ComponentFixture<RootComponent>;
  let component: RootComponent;

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
      declarations: [RootComponent],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ]
    }).compileComponents();
  });

  it("should create the RootComponent", () => {
    createComponent();
    expect(component).toBeTruthy();
  });

  it("should have the router outlet", () => {
    let fixture = TestBed.createComponent(RootComponent);
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });

  function createComponent() {
    fixture = TestBed.createComponent(RootComponent);
    component = fixture.debugElement.componentInstance;
  }
});
