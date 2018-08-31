import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private meta: Meta) { 
    this.meta.updateTag({ property: 'og:title', content: 'ahihi' });
    // this.meta.updateTag({ property: 'og:url', content: `${url}` });
    this.meta.updateTag({ property: 'og:type', content: 'ahihi' });
    this.meta.updateTag({ property: 'og:description', content: 'ahihi' });
    this.meta.updateTag({ property: 'og:image', content: 'ahihi' });
  }
}
