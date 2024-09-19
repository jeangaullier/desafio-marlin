import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaNoticiaComponent } from './atualiza-noticia.component';

describe('AtualizaNoticiaComponent', () => {
  let component: AtualizaNoticiaComponent;
  let fixture: ComponentFixture<AtualizaNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaNoticiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

