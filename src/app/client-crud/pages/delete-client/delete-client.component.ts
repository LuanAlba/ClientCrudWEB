import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {Subscription} from 'rxjs';
import { ClientService } from '../../clients.service';
import { Client } from '../../models/client';


@Component({
    selector: 'app-client-delete',
    templateUrl: './delete-client.component.html',
})
export class DeleteClientComponent {
    entity: Client | any;
    form: any;

    constructor(
        protected formBuilder: FormBuilder,
        private service: ClientService,
        private router: Router,
        private route: ActivatedRoute,
        public subscriptionSubmit: Subscription) {
    }

    async onClickSubmit() {
        this.subscriptionSubmit = this.service.delete(this.entity.id).subscribe(
            async () => {
                "Deleted"
            },
            () => "Error");
    }

    onClickCancelar() {
        this.router.navigate(['../../listar'], { relativeTo: this.route });
    }
}
