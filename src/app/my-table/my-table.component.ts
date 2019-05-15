import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {fromEvent, merge} from 'rxjs';
import {map} from 'rxjs/operators';
import {Comments} from './comments';
import {MyTableService} from './my-table.service';

@Component({
  selector: 'app-my-table',
  templateUrl: './my-table.component.html',
  styleUrls: ['./my-table.component.css']
})
export class MyTableComponent implements OnInit {
  @ViewChild('id') idRef: ElementRef;
  @ViewChild('name') nameRef: ElementRef;
  @ViewChild('email') emailRef: ElementRef;

  tableData: Comments[];
  filteredData: Comments[];
  filterTypes: Map<string, string>;
  currentFilterType: string;

  constructor(private mytableService: MyTableService) {}

  ngOnInit() {
    this.filterTypes = new Map();

    this.mytableService.getTableData().subscribe(
      (res: Comments[]) => {
        this.tableData = this.filteredData = res;
      }
    );
    const inputObservables$ = merge(
      fromEvent(this.idRef.nativeElement, 'keyup'),
      fromEvent(this.emailRef.nativeElement, 'keyup'),
      fromEvent(this.nameRef.nativeElement, 'keyup')
    );

    inputObservables$.pipe(
      map((e: any) => [e.target.name, e.target.value])
    ).subscribe(
      (res: any[]) => {
        this.filterTypes[res[0]] = res[1];
        console.log(this.filterTypes)

        this.filteredData = this.tableData;

        for (const [key, value] of Object.entries(this.filterTypes)) {
          this.filteredData = this.filteredData.filter(
            x => String(x[key]).startsWith(value)
          )
        }
      }
    );

  }

}
