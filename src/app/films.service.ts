import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Film } from "./film";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  constructor(private http: HttpClient) {}

  public getAll(): Observable<Film[]> {
    return this.http.get<Film[]>("https://ghibliapi.herokuapp.com/films");
  }
}
