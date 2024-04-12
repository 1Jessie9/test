import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    ) {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(5)]],
            document: ['', [Validators.required, Validators.minLength(5)]],
            passwordConfirm: ['', [Validators.required, Validators.minLength(5)]],
        });

        // TODO: fix comparación passwords:
        // { validators: this.matchPassword('password', 'passwordConfirm')
    }

    async ngOnInit() {
        console.log('here')
    }

    async setValidators() {
        if (this.sigInForm) {
            this.loginForm.get('passwordConfirm')?.clearValidators();
        } else {
            this.loginForm.get('passwordConfirm')?.addValidators([Validators.required, Validators.minLength(5)]);
        }
    }

    async changeSegment() {
        this.sigInForm = !this.sigInForm;
        await this.setValidators();
    }

    async matchPassword(password: string, passwordConfirm: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[password];
            let passwordConfirmInput = group.controls[passwordConfirm];

            if (passwordInput.invalid || passwordInput.value != passwordConfirmInput.value) {
                // Valores no coinciden
                return passwordConfirmInput.setErrors({ notEquivalent: true });
            } else {
                return passwordConfirmInput.setErrors(null);
            }
        }
    }

    async onSubmit() {
        await this.authService.login();
    }
}
