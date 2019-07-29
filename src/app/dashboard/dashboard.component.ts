import { Component, OnInit} from '@angular/core';
import {Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { Consultant } from '../consultant';
import { NgForm } from '@angular/forms';
import { ConsultantService } from '../consultant.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  user: Consultant;
  public appearance = Appearance;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;

	constructor(private userService: ConsultantService, private toastr: ToastrService) {  }


  ngOnInit() { 
    this.resetForm();
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result.formatted_address);
    this.user.lieux = result.formatted_address;
  }

  updatedate(event) {

    this.user.createdAt = new Date(event);
}

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.user = {
      commercial: '',
      partenaire: '',
      client: '',
      lieux: '',
      secteur:'',
      lettre: '',
      info: '',
      commentaire: '',
      adresse: '',
      createdAt: null
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerConsultant(form.value)
      .subscribe((data: any) => {
        if (data) {
          this.resetForm(form);
          this.toastr.success('Consultant registration successful');
          form.reset();
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }
}
