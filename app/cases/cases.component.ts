import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.css']
})
export class CasesComponent implements OnInit {
  name = 'Angular';
 
  // API FOR CASES DATA
  apiUrl = 'http://localhost:8000/api/cases';

  constructor(public http: HttpClient) {}

  // REQUEST FOR DATA ON CLICK OF THE CASES LINK
  onRequest() {
    this.http.get(this.apiUrl).subscribe((data) => {
      console.log('data', data);
      var people = data.data;
      caseDataInfo = [...this.people]; 
    }),
      (err) => {
        console.log(err);
      };
  }

   sort(column: string) {
    // Adding my sort functionality to each row 
  }

  ngOnInit() {
  }
}

