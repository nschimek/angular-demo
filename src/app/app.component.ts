import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngrx-code-reuse-demo';

  readonly test = 'hello world!';

  ngOnInit(): void {
    console.log("Hello world!");
  }
}
