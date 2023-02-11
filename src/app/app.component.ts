import { Component } from '@angular/core'
import { InterestsService } from './interests.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InterestsService]
})
export class AppComponent {
  title = 'resume';
  nowdate: Date = new Date();
  books: Array<any> = [
    {author:'Дойл, Артур Конан', booktitle:'Приключения Шерлока Холмса'},
    {author:'Дойл, Артур Конан', booktitle:'Собака Баскервилей'},
    {author:'Дюма, Александр', booktitle:'Граф Монте-Кристо'},
    {author:'Хейли, Артур', booktitle:'Аэропорт'}
  ];
}
