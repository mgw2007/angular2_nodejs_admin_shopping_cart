import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalApiService} from "../../services/local-api.service";
import {FlashMessagesService} from "angular2-flash-messages";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styles: []
})
export class AddProductComponent implements OnInit {

    productForm: FormGroup;
    productImage: any = null;
    productImageTouched: any = null;
    productId: Number;
    imagesUrl: String;
    uploadImage: String;
    oldProduct: any = null;

    constructor(private pageTitle: Title,
                private formBuilder: FormBuilder,
                private localApi: LocalApiService,
                private flashMsgService: FlashMessagesService,
                private activeRoute: ActivatedRoute,
                private router: Router,) {
    }

    ngOnInit() {
        this.imagesUrl = this.localApi.getProductImageUrl();
        this.uploadImage = this.imagesUrl;
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
            this.productForm = this.formBuilder.group({
                title: ['', [Validators.required, Validators.minLength(4)]],
                description: ['', [Validators.required, Validators.minLength(4)]],
                price: ['', [Validators.required, Validators.pattern(/^(\d+(\.\d+)?)$/)]],
            })
        });
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
                this.flashMsgService.show('Product updated successfully', {cssClass: 'alert-success', timeout: 3000});
            })
        }
        else {
            this.localApi.addProduct(formData).subscribe(res => {
                this.flashMsgService.show('Product added successfully', {cssClass: 'alert-success', timeout: 3000});
                this.router.navigate(['/products']);
            })
        }
    }

    goToProductList()
    {
        this.router.navigate(['/products']);
    }
}
