import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {Subscription} from 'rxjs';

import { Client } from '../../models/client';
import { ClientService } from '../../clients.service';

@Component({
    selector: 'app-clientes-list-clients',
    templateUrl: './list-clients.component.html'
})
export class ListClientsComponent implements OnInit {
    entity: Client | undefined
    form: any;

    constructor(
        protected formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: ClientService,
        public subscription: Subscription) {
    }

    ngOnInit(): void {
        this.service.list()
    }

    onClickAdd() {
        this.router.navigate(['../add'], { relativeTo: this.route });
    }

    async onClickUpdate(client: Client): Promise<void> {
        await this.router.navigate(['../update', client.id], { relativeTo: this.route });
    }

    onClickDelete(entity: Client) {
        this.entity = entity;
    }
}
