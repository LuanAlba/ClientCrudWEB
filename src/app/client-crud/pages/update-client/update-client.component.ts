import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Subscription} from 'rxjs';
import { ClientService } from '../../clients.service';
import { Client } from '../../models/client';
import { UpdateClientRequest } from '../../models/requests/requests/update-client-request';

@Component({
    selector: 'app-clients-update-client',
    templateUrl: './update-client.component.html'
})
export class UpdateClientComponent implements OnInit {
    entity: Client | any;
    form: any;

    constructor(
        protected formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private service: ClientService,
        public subscription: Subscription) {
    }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            firstName: [this.entity.firstName, [Validators.required]],
            lastName: [this.entity.lastName, [Validators.required]],
            phoneNumber: [this.entity.phoneNumber, [Validators.required]],
            birthDate: [this.entity.birthDate, [Validators.required]],
        });
    }

    async onClickSubmit() {
            var request: UpdateClientRequest = {
                id: this.entity?.id,
                firstName: this.form.firstName.value,
                lastName: this.form.lastName.value,
                phoneNumber: this.form.phoneNumber.value,
                birthDate: this.form.birthDate.value,
            };
    
            this.subscription = this.service.update(request).subscribe(
                () => "Success",(async () => await this.onClickBack()),
                () => "Not possible"
            );
    }

    async onClickBack() {
        await this.router.navigate(['../../listar'], { relativeTo: this.route });
    }
}