import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
  ],
  exports: [DragDropModule, CdkDropListGroup, CdkDropList, CdkDrag],
})
export class MaterialModule {}
