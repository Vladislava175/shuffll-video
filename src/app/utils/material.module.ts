import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    DragDropModule,
    CdkDropListGroup,
    CdkDropList,
    CdkDrag,
    MatButtonModule,
    MatIconModule,
  ],
})
export class MaterialModule {}
