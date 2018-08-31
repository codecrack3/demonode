import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  
  constructor(private meta: Meta) { 
    // const url = window.location.href;
    this.meta.updateTag({ property: 'og:title', content: 'Contact Us' });
    // this.meta.updateTag({ property: 'og:url', content: `${url}` });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:description', content: 'Let us know your thoughts...' });
    this.meta.updateTag({ property: 'og:image', content: 'https://www.hatchquarter.com.au/assets/images/OG.jpg' });
  }

  ngOnInit() {
  }

}
