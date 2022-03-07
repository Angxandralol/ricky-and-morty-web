import { Component, OnInit } from '@angular/core';
import { ApiRMService } from '../../services/api-rm.service';
import { CharacterInfo } from '../../models/CharacterInfo';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {

  private numberRandom = Math.ceil(Math.random()*826);
  public character : CharacterInfo;

  constructor(private apiService: ApiRMService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getInfoRandomCharacter();
    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  private getInfoRandomCharacter() {
    this.apiService.getRandomCharacter(this.numberRandom).subscribe( res => {
      this.character = res as CharacterInfo;
    })
  }

}
