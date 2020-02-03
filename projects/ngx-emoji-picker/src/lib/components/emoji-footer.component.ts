import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'emoji-footer',
  styleUrls: ['../styles/emoji-footer.scss'],
  template: `
  <footer class="emoji-footer">
      <emoji-search (search)="searchEmitter.emit($event)"></emoji-search>
  </footer>
  `
})

export class EmojiFooterComponent {

  @Output('search') searchEmitter = new EventEmitter<string>()
  constructor() { }
}
