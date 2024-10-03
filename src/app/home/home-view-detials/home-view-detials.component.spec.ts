import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewDetialsComponent } from './home-view-detials.component';

describe('HomeViewDetialsComponent', () => {
  let component: HomeViewDetialsComponent;
  let fixture: ComponentFixture<HomeViewDetialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeViewDetialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeViewDetialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
