import { Component }  from "@angular/core";

@Component({
  selector: 'app-hello-world',
  template: '<button>Guardar</button> <h1>{{count}}</h1>',
  styles: [`
  button {
    color: blue;
  }
  h1 {
    font-size: 12pt;
  }
  `]
})

export class helloWorlComponent {
  title = 'Soy un boton';
  count = 0
}
