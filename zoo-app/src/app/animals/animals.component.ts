import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { animal } from '../animal';
import { animalService } from '../animal.service';

@Component({
  selector: 'my-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['../app.component.css', './animals.component.css'],
  providers: [animalService]
})

export class animalsComponent implements OnInit {
  animals: animal[];
  selectedanimal: animal;

  constructor(
    private router: Router,
    private animalService: animalService
  ) { };

  getanimals(): void {
    this.animalService
      .getanimals()
      .then(animals => {
        this.animals = animals.filter((animal) => {
          if (animal.count > 0) return animal; 
        })
      });
  }

  ngOnInit(): void {
    this.getanimals();
  }

  onSelect(animal: animal): void {
    this.selectedanimal = animal;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedanimal.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.animalService.create(name)
      .then(animal => {
        this.animals.push(animal);
        this.selectedanimal = null;
      });
  }

  delete(animal: animal): void {
    this.animalService
      .delete(animal.id)
      .then(() => {
        this.animals = this.animals.filter(h => h !== animal);
        if (this.selectedanimal === animal) {this.selectedanimal = null
        }
      });
  }
}
