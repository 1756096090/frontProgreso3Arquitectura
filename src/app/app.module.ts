import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { ChannelService, ChatClientService, MessageComponent, StreamAutocompleteTextareaModule, StreamChatModule, StreamI18nService } from 'stream-chat-angular';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LogInComponent } from './log-in/log-in.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        LogInComponent,
        LoginModalComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        TranslateModule.forRoot(),
        StreamAutocompleteTextareaModule,
        StreamChatModule,
        NgbModule,
        CommonModule,
        HttpClientModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
