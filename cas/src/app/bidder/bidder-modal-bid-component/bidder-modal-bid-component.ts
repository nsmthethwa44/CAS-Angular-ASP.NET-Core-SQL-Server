import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { BidService } from '../../services/bid-service';

@Component({
  selector: 'app-bidder-modal-bid-component',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bidder-modal-bid-component.html',
  styleUrl: './bidder-modal-bid-component.scss'
})
export class BidderModalBidComponent {
@Input() isVisible = false;
@Input() auctionId!:  number | null;
bidForm: FormGroup;

  constructor(private fb: FormBuilder, private bidSer: BidService) {
    this.bidForm = this.fb.group({
      price: ['', [Validators.required]]
    });
  }

onSubmit() {
  if (this.bidForm.valid && this.auctionId) {
      Swal.fire({
          title: 'Bidding...',
                allowOutsideClick: false,
                didOpen: () => Swal.showLoading()
       })
       this.closeIsVisible();
      const data = { auctionId: this.auctionId, price: this.bidForm.value.price };
      console.log("data:", data)
      this.bidSer.placeBid(data).subscribe({
          next: () => {
             Swal.fire({
              icon: 'success',
              title: 'Bid Successfully',
              text: 'Bid placed successfully!',
              timer: 1800,
              showConfirmButton: false
              });
          },
          error: (err) => {
            console.log(err.error?.message)
            Swal.fire({
              icon: 'error',
              title: 'Car bid error',
              text: err.error?.message || 'Failed to place a bid.',
              timer: 1800,
              showConfirmButton: false
              });
          }
        });
    }
}

  closeIsVisible(): void {
    this.isVisible = false;
  }
}
