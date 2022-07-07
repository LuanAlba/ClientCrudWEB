import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientService } from '../../clients.service';
import { Client } from '../../models/client';
import { AddClientRequest } from '../../models/requests/requests/add-client-request';

@Component({
    selector: 'app-client-add-client',
    templateUrl: './add-client.component.html'
})
export class AddClientComponent implements OnInit {
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
        this.form = this.formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, [Validators.required]],
            phoneNumber: [null, [Validators.required]],
            birthDate: [null, [Validators.required]],
            fullName: [null, [Validators.required]],
        });
    }

    async onClickSubmit() {
        var request: AddClientRequest = {
            firstName: this.form.firstName.value,
            lastName: this.form.lastName.value,
            phoneNumber: this.form.phoneNumber.value,
            birthDate: this.form.birthDate.value,
        };

        this.subscription = this.service.add(request).subscribe(
            () => "Success",(async () => await this.onClickBack()),
            () => "Not possible"
        );
    }

    async onClickBack() {
        await this.router.navigate(['../list'], { relativeTo: this.route });
    }
}
