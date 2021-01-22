import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CadastrarAtivoComponent} from './cadastrar-ativo.component';

describe('CadastrarAtivoComponent', () => {
  let component: CadastrarAtivoComponent;
  let fixture: ComponentFixture<CadastrarAtivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarAtivoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarAtivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
