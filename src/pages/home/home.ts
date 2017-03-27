import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/*
 Generated class for the Rapport page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    private rapport : FormGroup;

    constructor(private formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {

        this.rapport = this.formBuilder.group({
            columnLot: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
            nrInjections: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RapportPage');
    }

}
