import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-specials-modal',
  templateUrl: './specials-modal.component.html',
  styleUrls: ['./specials-modal.component.scss'],
})
export class SpecialsModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<SpecialsModalComponent>,
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
