import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent,
  OptionsComponent,
} from '@app/shared/components';
import { SanitizedHtmlPipe } from '@app/shared/pipes';

const COMPONENTS = [HeaderComponent, FooterComponent, OptionsComponent];

const DEVEXTREME_MODULES = [];

const PIPES = [SanitizedHtmlPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, ...DEVEXTREME_MODULES],
  exports: [...DEVEXTREME_MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
