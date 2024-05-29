import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SloganService } from './slogan.service';
import { Store } from '../../store/Store';
import { ISlogan } from '../../types/types';

describe('SloganService', () => {
  let service: SloganService;
  let httpMock: HttpTestingController;
  let mockStore: jasmine.SpyObj<Store>;

  beforeEach(() => {
    const storeSpy = jasmine.createSpyObj('Store', ['setSlogans']);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SloganService,
        { provide: Store, useValue: storeSpy }
      ]
    });

    service = TestBed.inject(SloganService);
    httpMock = TestBed.inject(HttpTestingController);
    mockStore = TestBed.inject(Store) as jasmine.SpyObj<Store>;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch slogans on initialization', () => {
    const mockSlogans: ISlogan[] = [{ id: 1, slogan: 'Test Slogan', themeId: 1 }];

    service.fetchSlogans();
    const req = httpMock.expectOne('http://localhost:8080/api/slogan');
    expect(req.request.method).toBe('GET');
    req.flush(mockSlogans);

    expect(mockStore.setSlogans).toHaveBeenCalledWith(mockSlogans);
  });

  it('should add a slogan and refresh slogans', () => {
    const newSlogan: ISlogan = { id: 2, slogan: 'New Slogan', themeId: 1 };

    service.addSlogan(newSlogan);
    const postReq = httpMock.expectOne('http://localhost:8080/api/slogan');
    expect(postReq.request.method).toBe('POST');
    postReq.flush(null);

    const getReq = httpMock.expectOne('http://localhost:8080/api/slogan');
    expect(getReq.request.method).toBe('GET');
    getReq.flush([]);
  });

  it('should delete a slogan and refresh slogans', () => {
    const sloganToDelete: ISlogan = { id: 1, slogan: 'Test Slogan', themeId: 1 };

    service.deleteSlogan(sloganToDelete);
    const deleteReq = httpMock.expectOne(`http://localhost:8080/api/slogan/${sloganToDelete.id}`);
    expect(deleteReq.request.method).toBe('DELETE');
    deleteReq.flush(null);

    const getReq = httpMock.expectOne('http://localhost:8080/api/slogan');
    expect(getReq.request.method).toBe('GET');
    getReq.flush([]);
  });
});
