import { Component } from '@angular/core';
import { Copyright } from "../copyright/copyright";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Copyright],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

}
