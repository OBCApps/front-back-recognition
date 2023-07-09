import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINT_WH } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  private SERVER_WH = API_ENDPOINT_WH ;
  constructor(
    private http: HttpClient
  ) { }

  

  search_secuencial_pq(data : any) {
    return this.http.post(this.SERVER_WH + '/search-secuencial-pq', data);
  }
  Search_by_Range(data : any) {
    return this.http.post(this.SERVER_WH + '/search-secuencial-range', data);
  }
  Rtree_of_all_Window(data : any) {
    return this.http.post(this.SERVER_WH + '/search-rtree-index-all', data);
  }
  KNN__Rtree(data : any) {
    return this.http.post(this.SERVER_WH + '/search-rtree-index-knn', data);
  }
  KNN__Rtree_hight(data : any) {
    return this.http.post(this.SERVER_WH + '/search-knn-hight', data);
  }
}
