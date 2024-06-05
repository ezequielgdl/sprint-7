import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { StarshipsService } from '../../services/starships.service';
import { Film } from '../../interfaces/starships';

describe('FilmsComponent', () => {
  let component: FilmsComponent;
  let fixture: ComponentFixture<FilmsComponent>;
  let starshipsService: jasmine.SpyObj<StarshipsService>;

  const mockFilms: string[] = [
    'https://swapi.dev/api/films/1/',
    'https://swapi.dev/api/films/2/',
  ];

  const mockFilmsData: Film[] = [
    {
      title: 'A New Hope',
      episode_id: 4,
      director: 'George Lucas',
      release_date: '1977-05-25',
      opening_crawl: '',
      producer: '',
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: '',
      edited: '',
      url: '',
    },
    {
      title: 'The Empire Strikes Back',
      episode_id: 5,
      director: 'Irvin Kershner',
      release_date: '1980-05-21',
      opening_crawl: '',
      producer: '',
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: '',
      edited: '',
      url: '',
    },
  ];

  beforeEach(async () => {
    const starshipsServiceSpy = jasmine.createSpyObj('StarshipsService', [
      'getFilmsDetails',
    ]);
    starshipsServiceSpy.getFilmsDetails.and.returnValue(of(mockFilmsData));

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [FilmsComponent],
      providers: [{ provide: StarshipsService, useValue: starshipsServiceSpy }],
    }).compileComponents();

    starshipsService = TestBed.inject(
      StarshipsService
    ) as jasmine.SpyObj<StarshipsService>;
    fixture = TestBed.createComponent(FilmsComponent);
    component = fixture.componentInstance;
    component.films = mockFilms;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // nivell 3
  it('should call getFilmsDetails on ngOnInit', () => {
    component.ngOnInit();
    expect(starshipsService.getFilmsDetails).toHaveBeenCalledWith(mockFilms);
    component.filmsData$.subscribe((filmsData) => {
      expect(filmsData).toEqual(mockFilmsData);
    });
  });
});
