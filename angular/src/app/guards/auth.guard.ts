import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {RouteDef} from "@angular/compiler-cli/src/ngtools_impl";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        if (this.authService.loggedIn()) {
            return true;
        }
        else {
             this.router.navigate(['/login']);
             return false;
        }

    }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('chiled')
        console.log(route.params)
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
             this.router.navigate(['/login']);
             return false;
        }

    }

}