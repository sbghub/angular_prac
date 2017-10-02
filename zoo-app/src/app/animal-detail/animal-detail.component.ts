import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { animal } from '../animal';
import { animalService } from '../animal.service';

@Component({
  selector: 'animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class animalDetailComponent implements OnInit {
  animal: animal;

  constructor(
    private animalService: animalService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.animalService.getanimal(+params.get('id')))
      .subscribe(animal => this.animal = animal);
  }

  save(): void {
    this.animalService.update(this.animal)
      .then(() => this.redirect('animals'));
  }

  goBack(): void {
    this.location.back();
  }

  redirect(pagename: string) {
    this.router.navigate(['/' + pagename]);
  }
}