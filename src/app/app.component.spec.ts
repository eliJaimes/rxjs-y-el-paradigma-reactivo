/* ••[1]••••••••••••••••••••••••• app.component.spec.ts •••••••••••••••••••••••••••••• */

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', (): void => {
  beforeEach(
    (): TestBed =>
      TestBed.configureTestingModule({
        imports: [RouterTestingModule, AppComponent],
      })
  );

  it('should create the app', (): void => {
    const fixture: ComponentFixture<AppComponent> =
      TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'rxjs-y-el-paradigma-reactivo'`, (): void => {
    const fixture: ComponentFixture<AppComponent> =
      TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.componentInstance;
    expect(app.title).toEqual('rxjs-y-el-paradigma-reactivo');
  });

  it('should render title', (): void => {
    const fixture: ComponentFixture<AppComponent> =
      TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'rxjs-y-el-paradigma-reactivo app is running!'
    );
  });
});
