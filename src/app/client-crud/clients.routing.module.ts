import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ClientsComponent } from './clients.component';
import { AddClientComponent } from './pages/add-client/add-client.component';
import { ListClientsComponent } from './pages/list-clients/list-clients.component';
import { UpdateClientComponent } from './pages/update-client/update-client.component';


const routes: Routes = [
    {path: '', redirectTo: 'list', pathMatch: 'full'},
    {
        path: '', component: ClientsComponent,
        children: [
            {path: 'list', component: ListClientsComponent},
            {path: 'add', component: AddClientComponent},
            {path: ':id/update', component: UpdateClientComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientsRoutingModule {
}
