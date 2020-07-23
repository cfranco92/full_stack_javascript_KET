import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatComponent } from './components/chat/chat.component';
import { WebSocketService } from './services/web-socket.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
