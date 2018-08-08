import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boucle',
  templateUrl: './boucle.component.html',
  styleUrls: ['./boucle.component.css']
})
export class BoucleComponent {
  nomCours: String = '';
       listCours = [
                      {id: 1, title: 'Laravel'},
                      {id: 2, title: 'angular'},
                      {id: 3, title: 'symfony'},
                    ];

                    addCour(cour) {
                           this.listCours.push({id: this.listCours.length + 1, title: cour});
                           this.nomCours = '';
                    }
}
