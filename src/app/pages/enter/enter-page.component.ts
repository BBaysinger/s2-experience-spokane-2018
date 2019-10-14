import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AbstractPageComponent } from 'src/app/pages/shared/abstract-page.component';
import { CanvasAnimation } from 'src/app/pages/shared/util-canvasAnimation';
import { AnimFood } from './anim-food';
import { PageService } from 'src/app/pages/shared/page.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 's2es-enter-page',
  templateUrl: './enter-page.component.html',
  styleUrls: [
    './enter-page.component.sass',
    '../shared/all-pages.sass',
    '../shared/all-pages-animations.sass',
    './enter-page.animations.sass'
  ]
})
export class EnterPageComponent extends AbstractPageComponent implements OnInit {

  entryForm: FormGroup;
  inited = false;

  @ViewChild('animCanvas') canvas: ElementRef;
  @ViewChild('animCanvasWrapper') canvasWrapper: ElementRef;

  constructor(
    private readonly pageService: PageService,
    private readonly http: HttpClient,
    private readonly formBuilder: FormBuilder,
  ) {
    super(pageService);

    this.entryForm = new FormGroup({
      first: new FormControl(),
    });

    (window as any).localJsonpCallback = () => {
      this.entryForm.reset({
        firstName: '',
        lastName: '',
        email: '',
        instagram: '',
        company: '',
        title: '',
      });
    };
  }

  // TODO: This gives a HttpResponseError, even though it is identical to what Joe has here that works without errors:
  // http://staging.seven2.net/seven2/experience_spokane/joe-test/
  // The data populates as expected, even with the error.
  onSubmit() {
    const url = 'https://script.google.com/macros/s/AKfycbyRrxv8Ri-GRpuXqWXo2inCPzmAE8mG6Q8oQIGPmUeMaGbD5jCn/exec?';
    const q: string[] = [];
    const company = this.entryForm.get('company').value + ',' + this.entryForm.get('title').value;
    const name = this.entryForm.get('firstName').value + ',' + this.entryForm.get('lastName').value;
    q.push('name=' + name);
    q.push('email=' + this.entryForm.get('email').value);
    q.push('instagram=' + this.entryForm.get('instagram').value);
    if (company.length > 1) {
        q.push('company=' + company);
    }
    q.push('prefix=localJsonpCallback');
    const uri = url + q.join('&');
    this.http.jsonp(uri, 'localJsonpCallback').subscribe(function (val) {
        console.log(val);
    });
  }

  /**
   * Since this is not supported on MS browsers.
   */
  placeholderShown(id: string): boolean {
    if (this.inited) {
      if (this.entryForm.get(id).value !== null) {
        return !this.entryForm.get(id).value.length;
      } else {
        // I don't know why this is null.
        // throw new Error(id);
        // return false;
      }
    }
  }

  setupForm() {

    const v = Validators;

    this.entryForm = this.formBuilder.group({

      firstName: ['', [v.minLength(2), v.required]],
      lastName: ['', [v.minLength(2), v.required]],
      email: ['', [v.email, v.required]],
      instagram: ['', [v.minLength(2), v.required]],
      company: [''],
      title: [''],
      agree: [false, v.requiredTrue],

    });
  }

  /**
   *
   */
  ngOnInit() {

    super.ngOnInit();

    this.setupForm();

    // TODO: This needs to be started with runOutsideAngular!!!
    const test = new CanvasAnimation({
      canvas: this.canvas.nativeElement,
      wrapper: this.canvasWrapper.nativeElement,
      animClass: AnimFood,
      exportRootName: 'experienceSpokane_food',
      scaleToWidth: true,
    });

    this.inited = true;

  }

}
