import {Component} from '@angular/core'
import {InterestsService} from '../interests.service'

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})

export class MyFilmsComponent {
  public films: Array<any>
  constructor(private interestsService: InterestsService) {
    this.films = interestsService.getFilms();
  }
}
