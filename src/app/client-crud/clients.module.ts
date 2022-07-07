import {NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientsComponent } from './clients.component';
import { ClientsRoutingModule } from './clients.routing.module';
import { ClientService } from './clients.service';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { DeleteClientComponent } from './pages/delete-client/delete-client.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';


@NgModule({
    imports: [
        ClientsRoutingModule,
        FormsModule
    ],
    declarations: [
        ClientsComponent,
        AddClientComponent,
        UpdateClientComponent,
        DeleteClientComponent
    ],
    providers: [
        ClientService
    ],
    exports: [
    ]
})
export class ClientsModule {
}
