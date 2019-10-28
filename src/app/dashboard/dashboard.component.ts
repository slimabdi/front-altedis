import { Component, OnInit} from '@angular/core';
import {Appearance} from '@angular-material-extensions/google-maps-autocomplete';
import PlaceResult = google.maps.places.PlaceResult;
import { Consultant } from '../consultant';
import { ConsultantService } from '../consultant.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {
  user: Consultant;
  public appearance = Appearance;
  registerForm: FormGroup;
  public zoom: number;
  public latitude: number;
  public longitude: number;
  public selectedAddress: PlaceResult;
// tslint:disable-next-line:indent
	constructor(private userService: ConsultantService, private toastr: ToastrService, private formBuilder: FormBuilder) {  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      createdAt: ['', Validators.required],
      commercial: ['', Validators.required],
      lieux: ['', Validators.required],
      secteur: ['', Validators.required],
      info: ['', Validators.required],
      partenaire: [''],
      client: ['']
  });
  }

  onAutocompleteSelected(result: PlaceResult) {
    console.log('onAutocompleteSelected: ', result.formatted_address);
    this.user.lieux = result.formatted_address;
  }

  updatedate(event) {

    this.user.createdAt = new Date(event);
}

  OnSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.userService.registerConsultant(this.registerForm.value)
      .subscribe((data: any) => {
        if (data) {
          this.toastr.success('Consultant registration successful');
        } else {
          this.toastr.error(data.Errors[0]);
        }
      });
  }
}
