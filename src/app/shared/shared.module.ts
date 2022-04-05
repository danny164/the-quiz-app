import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from '@app/shared/components';
import { SanitizedHtmlPipe } from '@app/shared/pipes';

const COMPONENTS = [HeaderComponent, FooterComponent];

const DEVEXTREME_MODULES = [];

const PIPES = [SanitizedHtmlPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES],
  imports: [CommonModule, ...DEVEXTREME_MODULES],
  exports: [...DEVEXTREME_MODULES, ...COMPONENTS, ...PIPES],
})
export class SharedModule {}
