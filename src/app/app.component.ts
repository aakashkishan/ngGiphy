import { Component } from '@angular/core';

import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Declare and Initialize the required variables.
  // Title of the Project.
  title = 'ngGiphy';

  // The Search is to be appended to this absolute URL / Link.
  private link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';

  // Declaring an Http Object.
  http: Http;

  // Declare an array gifs to store the obtained gifs after the Search.
  gifs = [];

  // Constructor
  constructor(http: Http) {
    // Initializing the previously declared Http Object.
    this.http = http;
  }

  giphySearch(giphy: HTMLInputElement) {
    // Appending the search to the absolute URL / Link.
    var giphyLink = this.link + giphy.value;

    this.http
            // Http Request is sent
            .request(giphyLink)
            // Subscribe method gives a Response Object as callback
            .subscribe( function (response: Response) {

              // Initialize the gifs array.
              this.gifs = response.json().data;

              // Log the response.
              console.log(this.gifs);

            });

  }
}
