import { Component } from '@angular/core'
import { InterestsService } from '../interests.service'

@Component({
  selector: 'app-my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})

export class MyMusicComponent{
  public musics: Array<any>
  constructor(private interestsService: InterestsService) {
    this.musics = interestsService.getMusics();
  }
}
