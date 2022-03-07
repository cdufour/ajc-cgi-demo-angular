import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitationComponent } from './citation/citation.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityShowComponent } from './city-show/city-show.component';
import { SwitchComponent } from './switch/switch.component';
import { TextstatsModule } from './textstats/textstats.module';
import { MainComponent } from './textstats/main/main.component';

@NgModule({
  declarations: [
    CitationComponent,
    CityChoiceComponent,
    CityShowComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    TextstatsModule
  ],
  exports: [
    CitationComponent,
    CityChoiceComponent,
    CityShowComponent,
    SwitchComponent,
    MainComponent
  ]
})
export class ExosModule { }
