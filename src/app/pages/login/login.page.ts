import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    public loginForm: FormGroup;
    public sigInForm: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            document: ['', [Validators.required, Validators.minLength(5)]],
            passwordConfirm: ['', [Validators.required, Validators.minLength(5)]],
        });

        // TODO: fix comparación passwords:
    }

    async ngOnInit() {
        await this.setValidators();
    }

    async setValidators() {
        if (!this.sigInForm) {
            this.loginForm.get('passwordConfirm')?.clearValidators();
        } else {
            this.loginForm.get('passwordConfirm')?.addValidators([Validators.required, Validators.minLength(5)]);
        }
    }

    async changeSegment() {
        this.sigInForm = !this.sigInForm;
        await this.setValidators();
    }

    async onSubmit() {
        const result = await this.authService.login();

        if(result) this.router.navigate(['/tabs/create']);
    }
}
