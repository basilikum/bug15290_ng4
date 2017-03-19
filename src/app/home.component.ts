import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Rx';

@Component({
    selector: 'cmm-home',
    template: `
    <h1>{{ item }}</h1>
    <a [routerLink]="['']" [queryParams]="{i: item}">Change Query Params</a>
    `
})
export class HomeComponent implements OnInit, OnDestroy {

    private dataSub : Subscription;

    item = 0;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.dataSub = this.route.data.subscribe((data: { i: number }) => {
            console.log('new item', data.i);
            this.item = data.i;
        });
    }

    ngOnDestroy() {
        this.dataSub.unsubscribe();
    }
}
