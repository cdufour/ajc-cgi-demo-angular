import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main/main.component';
import { LettercountComponent } from './lettercount/lettercount.component';
import { WordcountComponent } from './wordcount/wordcount.component';

@NgModule({
  declarations: [
    MainComponent,
    LettercountComponent,
    WordcountComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MainComponent]
})
export class TextstatsModule { }
