import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroNoticiaComponent } from './cadastro-noticia.component';

describe('CadastroNoticiaComponent', () => {
  let component: CadastroNoticiaComponent;
  let fixture: ComponentFixture<CadastroNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
