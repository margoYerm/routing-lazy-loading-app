import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class AuthService {
    private isAuth = false;

    login() {
        this.isAuth = true;
        console.log('Auth service, login');
    }

    logout() {
        this.isAuth = false;
        console.log('Auth service, logout');
    }

    isAuthenticated(): Promise<boolean> {
        return new Promise(resolve => {
            setTimeout( () => {
                resolve(this.isAuth)
            }, 1000)
        })
    }
}