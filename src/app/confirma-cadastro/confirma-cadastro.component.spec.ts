import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaCadastroComponent } from './confirma-cadastro.component';

describe('ConfirmaCadastroComponent', () => {
  let component: ConfirmaCadastroComponent;
  let fixture: ComponentFixture<ConfirmaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
