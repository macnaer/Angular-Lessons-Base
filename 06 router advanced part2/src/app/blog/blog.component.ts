import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"]
})
export class BlogComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  PostsArray = [
    {
      id: 1,
      title: "Функциональное мышление. Часть 1",
      post:
        "В этой серии статей вы познакомитесь с основными принципами функционального программирования и поймёте, что значит «мыслить функционально» и как этот подход отличается от объектно-ориентированного или императивного программирования.",
      author: "Habr"
    },
    {
      id: 2,
      title: "Функциональное мышление. Часть 2",
      post:
        "Друзья, продолжаем разбираться в функциональном программировании. Во второй части из этой серии статей вы познакомитесь с основными принципами этой парадигмы разработки и поймёте, как этот подход отличается от объектно-ориентированного или императивного программирования.",
      author: "Habr"
    },
    {
      id: 3,
      title: "Функциональное мышление. Часть 3",
      post:
        "Подъехала третья часть из серии статей по функциональному программированию. Сегодня мы расскажем обо всех типах этой парадигмы и на примерах покажем их использование. Подробнее о примитивных типах, обобщенных типах и многом другом под катом!",
      author: "Habr"
    },
    {
      id: 4,
      title: "Функциональное мышление. Часть 4",
      post:
        "После небольшого экскурса в базовые типы, мы можем снова вернуться к функциям. В частности, к ранее упомянутой загадке: если математическая функция может принимать только один параметр, то как в F# может существовать функция, принимающая большее число параметров? Подробнее под катом!",
      author: "Habr"
    }
  ];
}