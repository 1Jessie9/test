import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IUserData } from '../interfaces/user-data';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public userData!: IUserData;

    constructor(
        private httpClient: HttpClient,
    ) { }

    async sigIn() {
        try {

        } catch (error) {
            console.log("Error creando usuario", error);
        }
    }

    async login() {
        try {
            const result: any = await firstValueFrom(this.httpClient.get("https://jsonplaceholder.typicode.com/todos/1"));

            this.userData = result;
            return result;
        } catch (error) {
            console.log("Error iniciando sesión", error);
            return null;
        }
    }
}
