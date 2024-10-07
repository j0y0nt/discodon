import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoSuggestSearchComponent } from './auto-suggest-search.component';

describe('AutoSuggestSearchComponent', () => {
  let component: AutoSuggestSearchComponent;
  let fixture: ComponentFixture<AutoSuggestSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoSuggestSearchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoSuggestSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
