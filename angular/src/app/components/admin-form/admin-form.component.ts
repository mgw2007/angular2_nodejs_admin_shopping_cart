import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {AsyncValidator, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {LocalApiService} from "../../services/local-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
declare var $: any;

@Component({
    selector: 'app-admin-form',
    templateUrl: './admin-form.component.html',
})
export class AdminFormComponent implements OnInit, AfterViewInit {

    adminForm: FormGroup;
    adminId: Number;
    oldAdminData: any = null;
    @ViewChild('input') input: ElementRef[];
    @ViewChild('input1') input1: ElementRef;
    @ViewChild('input2') input2: ElementRef;
    @ViewChild('input3') input3: ElementRef;
    @ViewChild('input4') input4: ElementRef;

    constructor(private pageTitle: Title,
                private formBuilder: FormBuilder,
                private localApi: LocalApiService,
                private localBootstrap: LocalBootstrapService,
                private activeRoute: ActivatedRoute,
                private router: Router) {
    }

    validateEmailDuplicated() {
        return (control: FormControl) => {
            return this.localApi.checkAdminEmailExist(control.value, this.oldAdminData ? this.oldAdminData._id : '').map(res => {
                if (res.exist) {
                    return {'duplicated': true}
                }
                return null;
            })
        }
    }

    ngOnInit() {
        this.adminForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(4)]],
            email: ['', [Validators.required, Validators.email], [this.validateEmailDuplicated()]],
            password: ['', [Validators.required, Validators.minLength(4)]],
            confirmPassword: ['', [Validators.required]],
            isSuperAdmin: [''],
            roles: this.formBuilder.group({
                admins: ['', [Validators.required]],
                products: ['', [Validators.required]],
                orders: ['', []],
            })
        })

        this.activeRoute.params.subscribe(params => {
            if (params.id) {
                this.pageTitle.setTitle('Edit Admin');
                this.localApi.getAdminData(params.id).subscribe(e => {
                    this.oldAdminData = e;
                    console.log(this.oldAdminData.roles)
                    this.adminForm.patchValue(this.oldAdminData);
                     $('.adminForm').find('input').iCheck('update');
                });
                this.adminForm.controls['password'].clearValidators()
                this.adminForm.controls['password'].setValidators(Validators.minLength(4));
                this.adminForm.controls['confirmPassword'].clearValidators();

            }
            else {
                this.pageTitle.setTitle('Add Admin');
                this.adminForm.patchValue({
                    isSuperAdmin: 1,
                    admins_role: 'view',
                    products_role: 'view'
                });
            }

        });
    }

    ngAfterViewInit(): void {
        $('.adminForm').find('input[type=radio]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        }).on('ifChecked', (event) => {
            // console.log(this.adminForm.controls.roles['controls']);
            this.adminForm.controls.roles['controls'][$(event.target).attr('name')].patchValue($(event.target).val());
        });
        $('.adminForm').find('input[type=checkbox]').iCheck({
            checkboxClass: 'icheckbox_square-blue',
            radioClass: 'iradio_square-blue',
            increaseArea: '20%' // optional
        }).on('ifChanged', (event) => {
            this.adminForm.controls[$(event.target).attr('name')].patchValue($(event.target).prop('checked'));
        })
    }

    onSubmit() {
        if ((this.adminForm.controls['confirmPassword'].value != this.adminForm.controls['password'].value) || !this.adminForm.valid) {
            Object.keys(this.adminForm.controls).forEach(key => {
                this.adminForm.get(key).markAsTouched();
            });
        }
        else {
            this.localBootstrap.showLoader();

            if (this.oldAdminData) {

                this.localApi.updateAdmin(this.oldAdminData._id, this.adminForm.value).subscribe(res => {
                    this.localBootstrap.hideLoader();
                    this.localBootstrap.notify({message: 'Admin updated successfully', type: 'success'});
                })
            }
            else {
                this.localApi.addAdmin(this.adminForm.value).subscribe(res => {
                    this.localBootstrap.hideLoader();
                    this.localBootstrap.notify({message: 'Admin added successfully', type: 'success'});
                    this.router.navigate(['/admins']);
                })
            }
        }
    }
    goToAdminsList() {
        this.router.navigate(['/admins']);
    }

}
