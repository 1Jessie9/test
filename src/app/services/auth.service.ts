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
            await fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(async (response) => response.json())
                .then(async (result) => {
                    console.log(result)
                    this.userData = {
                        id: result.id,
                        title: result.title,
                    };
                });

            return true;
        } catch (error) {
            console.log("Error iniciando sesión", error);
            return null;
        }
    }
}
