import { Component, OnInit } from '@angular/core';

import { animal } from '../animal';
import { animalService } from '../animal.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  animals: animal[] = [];

  constructor(private animalService: animalService) { }

  ngOnInit(): void {
    this.animalService
      .getanimals()
      .then(animals => this.animals = animals);
  }
}