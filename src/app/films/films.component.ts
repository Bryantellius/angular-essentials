import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "../film";
import { FilmsService } from "../films.service";

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.css"],
})
export class FilmsComponent implements OnInit {
  public films!: Observable<Film[]>;

  constructor(private filmsService: FilmsService) {}

  ngOnInit(): void {
    this.films = this.filmsService.getAll();
  }
}
