import { Component, OnInit } from '@angular/core';
import { SessionService} from "../shared/session.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userType: string | null | undefined;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.userType = this.sessionService.getUserType();
    alert("le usertype est: " +this.userType);
  }

}
