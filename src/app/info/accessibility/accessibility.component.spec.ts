// import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
// import { AccessibilityComponent } from './accessibility.component';
// import { TranslateModule } from '@ngx-translate/core';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ThemeService } from '../../shared/theme-support/theme.service';
// import { getMockThemeService } from '../../shared/mocks/theme-service.mock';
// import { ActivatedRoute } from '@angular/router';
// import { ActivatedRouteStub } from '../../shared/testing/active-router.stub';
// import { ThemedAccessibilityComponent } from './themed-accessibility.component';

// describe('AccessibilityComponent', () => {
//   let component: AccessibilityComponent;
//   let fixture: ComponentFixture<AccessibilityComponent>;

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [TranslateModule.forRoot(), AccessibilityComponent],
//       providers: [
//         { provide: ThemeService, useValue: getMockThemeService() },
//         { provide: ActivatedRoute, useValue: new ActivatedRouteStub() },
//       ],
//       schemas: [NO_ERRORS_SCHEMA]
//     })
//     .overrideComponent(AccessibilityComponent, {
//       remove: {
//         imports: [ThemedAccessibilityComponent],
//       },
//     })
//     .compileComponents();
// }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(AccessibilityComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
