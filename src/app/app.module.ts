import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxEmojiPickerModule  } from '../../projects/ngx-emoji-picker/src/lib/ngx-emoji-picker.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxEmojiPickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
