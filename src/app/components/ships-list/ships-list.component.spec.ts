import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { ShipsListComponent } from './ships-list.component';
import { StarshipsService } from '../../services/starships.service';
import { of, throwError } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { StarshipList } from '../../interfaces/starships';

describe('ShipsListComponent', () => {
  let component: ShipsListComponent;
  let fixture: ComponentFixture<ShipsListComponent>;
  let service: jasmine.SpyObj<StarshipsService>;
  let starshipList: StarshipList;

  beforeEach(waitForAsync(() => {
    const starshipsServiceSpy = jasmine.createSpyObj('StarshipsService', [
      'getStarshipsList',
    ]);

    TestBed.configureTestingModule({
      imports: [CommonModule, RouterTestingModule],
      providers: [{ provide: StarshipsService, useValue: starshipsServiceSpy }],
    }).compileComponents();

    service = TestBed.inject(
      StarshipsService
    ) as jasmine.SpyObj<StarshipsService>;

    starshipList = {
      count: 0,
      results: [
        {
          name: 'Starship 1',
          model: 'Model 1',
          manufacturer: '',
          cost_in_credits: '',
          length: '',
          max_atmosphering_speed: '',
          crew: '',
          passengers: '',
          cargo_capacity: '',
          consumables: '',
          hyperdrive_rating: '',
          MGLT: '',
          starship_class: '',
          pilots: [],
          films: [],
          created: '',
          edited: '',
          url: '',
        },
        {
          name: 'Starship 2',
          model: 'Model 2',
          manufacturer: '',
          cost_in_credits: '',
          length: '',
          max_atmosphering_speed: '',
          crew: '',
          passengers: '',
          cargo_capacity: '',
          consumables: '',
          hyperdrive_rating: '',
          MGLT: '',
          starship_class: '',
          pilots: [],
          films: [],
          created: '',
          edited: '',
          url: '',
        },
      ],
      next: 'next-url',
    };
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipsListComponent);
    component = fixture.componentInstance;
    service.getStarshipsList.and.returnValue(of(starshipList));
    fixture.detectChanges();
  });

  // Nivell 3

  it('should load starships and update the state correctly', () => {
    component.loadStarships();

    expect(component.loading).toBe(true);
    expect(service.getStarshipsList).toHaveBeenCalledWith(
      component.currentPage
    );

    service.getStarshipsList(component.currentPage).subscribe(() => {
      expect(component.starships.length).toBe(2);
      expect(component.starships[0].name).toBe('Starship 1');
      expect(component.starships[1].name).toBe('Starship 2');
      expect(component.next).toBe('next-url');
      expect(component.loading).toBe(false);
    });
  });

  it('should handle error and set loading to false', () => {
    service.getStarshipsList.and.returnValue(
      throwError(() => new Error('error'))
    );

    component.loadStarships();

    expect(component.loading).toBe(true);

    service.getStarshipsList(component.currentPage).subscribe({
      error: () => {
        expect(component.loading).toBe(false);
      },
    });
  });
});
