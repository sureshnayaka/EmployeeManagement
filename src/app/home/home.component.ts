import { Component } from '@angular/core';
import { HomeViewDetialsComponent } from './home-view-detials/home-view-detials.component';
import { MaterialModule } from '../core/material/material.module';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    imports: [HomeViewDetialsComponent, MaterialModule],
    standalone: true
})
export class HomeComponent {
    showFiller = false;

}
