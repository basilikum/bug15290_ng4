import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class ItemResolver implements Resolve<number> {

    constructor() {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<number> {
        console.log('resolve');
        return Observable.of(Math.floor(Math.random() * 100));
    }
}
