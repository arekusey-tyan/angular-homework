import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})

export class InterestsService {
  constructor() {
  }

  public getMusics(): Array<any> {
    return [
      {name: 'GroTTesque', singl: 'Увертюра'},
      {name: 'GroTTesque', singl: 'Знакомство с миром'},
      {name: 'GroTTesque', singl: 'Первая история'},
      {name: 'GroTTesque', singl: 'Трагедия на полюсе'},
      {name: 'GroTTesque', singl: 'Вторая история'},
      {name: 'GroTTesque', singl: 'Стальное сердце'},
      {name: 'GroTTesque', singl: 'Третья история'},
      {name: 'GroTTesque', singl: 'Видение'},
      {name: 'GroTTesque', singl: 'Возвращение в Таласс'}
    ]
  }

  public getFilms(): Array<any> {
    return [
      {producer: 'Эмир Кустурица', filmname: 'Аризонская мечта'},
      {producer: 'Чарльз Стёрридж', filmname: 'Лэсси'},
      {producer: 'Питер Джексон', filmname: 'Властелин колец: Возвращение короля'},
      {producer: 'Марк Форстер', filmname: 'Волшебная страна'},
      {producer: 'Джулиан Шнабель', filmname: 'Скафандр и бабочка'}
    ]
  }
}
