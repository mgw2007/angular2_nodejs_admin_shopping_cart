import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalApiService} from "../../services/local-api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {LocalBootstrapService} from "../bootstrap/local-bootstrap.service";
declare var $: any;

@Component({
    selector: 'app-product-form',
    templateUrl: './product-form.component.html',
    styles: []
})
export class ProductFormComponent implements OnInit, AfterViewInit {

    productForm: FormGroup;
    productImage: any = null;
    productImageTouched: any = null;
    productId: Number;
    imagesUrl: String;
    uploadImage: String;
    oldProduct: any = null;
    @ViewChild('inputProductImage') inputProductImage: ElementRef;

    constructor(private pageTitle: Title,
                private formBuilder: FormBuilder,
                private localApi: LocalApiService,
                private localBootstrap: LocalBootstrapService,
                private activeRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.imagesUrl = this.localApi.getProductImageUrl();
        this.uploadImage = this.imagesUrl;
        this.productForm = this.formBuilder.group({
            title: ['', [Validators.required, Validators.minLength(4)]],
            description: ['', [Validators.required, Validators.minLength(4)]],
            price: ['', [Validators.required, Validators.pattern(/^(\d+(\.\d+)?)$/)]],
        })

        this.activeRoute.params.subscribe(params => {
            if (params.id) {
                this.pageTitle.setTitle('Edit Product');
                this.localApi.getProduct(params.id).subscribe(e => {
                    this.oldProduct = e;
                    this.productForm.patchValue(this.oldProduct);
                    this.productImage = this.oldProduct.imagePath;
                    this.uploadImage = this.imagesUrl + this.oldProduct.imagePath;
                });
            }
            else {
                this.pageTitle.setTitle('Add Product');
            }

        });
    }

    ngAfterViewInit(): void {
        $(this.inputProductImage.nativeElement).fileinput();
    }

    fileUpload(event: any) {
        var file = event.target.files[0];
        if (file) {
            this.productImageTouched = true;
            if (['image/jpg', 'image/jpeg', 'image/png'].indexOf(file.type) != -1) {
                this.productImage = event.target.files[0];

                let reader: FileReader = new FileReader();
                reader.onload = (e: any) => this.uploadImage = e.target.result;
                reader.readAsDataURL(this.productImage);
            }
        }
    }

    onSubmit() {
        if (!this.productImage || !this.productForm.valid) {
            Object.keys(this.productForm.controls).forEach(key => {
                this.productForm.get(key).markAsTouched();
            });
        }
        else {
            this.localBootstrap.showLoader();
            var product = this.productForm.value;
            let formData: FormData = new FormData();
            for (let key in this.productForm.value) {
                formData.append(key, this.productForm.value[key]);
            }
            if (!this.oldProduct || this.productImage != this.oldProduct.imagePath) {
                formData.append('upload', this.productImage, this.productImage.name);
            }

            if (this.oldProduct) {

                this.localApi.updateProduct(this.oldProduct._id, formData).subscribe(res => {
                    this.localBootstrap.hideLoader();
                    this.localBootstrap.notify({message: 'Product updated successfully', type: 'success'});
                })
            }
            else {
                this.localApi.addProduct(formData).subscribe(res => {
                    this.localBootstrap.hideLoader();
                    this.localBootstrap.notify({message: 'Product added successfully', type: 'success'});
                    this.router.navigate(['/products']);
                })
            }
        }
    }

    goToProductList() {
        this.router.navigate(['/products']);
    }
}
