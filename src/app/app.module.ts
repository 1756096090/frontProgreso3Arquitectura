import { BrowserModule } from '@angular/platform-browser';
import { NgModule, importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { TranslateModule } from '@ngx-translate/core';
import { ChannelService, ChatClientService, MessageComponent, StreamAutocompleteTextareaModule, StreamChatModule, StreamI18nService } from 'stream-chat-angular';
import { ChatComponent } from './chat/chat.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        AppComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        TranslateModule,
        StreamAutocompleteTextareaModule,
        StreamChatModule,
        NgbModule,
        HttpClientModule
        // HttpClient
    ],
    providers: [importProvidersFrom(TranslateModule.forRoot())],
    bootstrap: [AppComponent]
})
export class AppModule { }
