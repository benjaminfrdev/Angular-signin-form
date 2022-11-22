import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AuthorComponent } from './author/author.component';
import { AuthorListComponent } from './author/author-list/author-list.component';
import { AuthorDetailComponent } from './author/author-detail/author-detail.component';
import { FormsModule } from '@angular/forms';
import { ToggleComponent } from './toggle/toggle.component';
import { FlexComponent } from './flex/flex.component';
import { TabContainerComponent } from './tab-container/tab-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AuthorComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
    FlexComponent,
    TabContainerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
