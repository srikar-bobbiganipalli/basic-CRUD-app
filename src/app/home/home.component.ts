import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
export interface Element {
  title: string;
  id: number;
  type: string;
  description: string;
  toggle?: boolean
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  displayedColumns: string[] = ['id', 'title', 'type', 'description', "actions"];
  dataSource: Element[] = [];
  toggle = false;
  constructor(private apiService: ApiService) {
  
  }

  ngOnInit(): void {
    this.apiService.getAllElements().subscribe((res: any) => {
      this.dataSource = [];
        res.forEach((element: any) => {
          this.dataSource.push({
            title: element.title,
            id: element.id,
            type: element.type,
            description: element.description,
            toggle: false
          })
        });
    })
  }

  onChange(event: any) {
    if (event.value !== 'All') {
      this.apiService.getOnlySelectedElements(event.value).subscribe((res: any) => {
        this.dataSource = [];
        res.forEach((element: any) => {
          this.dataSource.push({
            title: element.title,
            id: element.id,
            type: element.type,
            description: element.description,
            toggle: false
          })
        });
      })
    } else {
      this.apiService.getAllElements().subscribe((res: any) => {
        this.dataSource = [];
          res.forEach((element: any) => {
            this.dataSource.push({
              title: element.title,
              id: element.id,
              type: element.type,
              description: element.description,
              toggle: false
            })
          });
      })
    }
}

deleteByID(obj: any) {
  this.apiService.deleteElementById(obj.id).subscribe((res: any) => {
    console.log("successfully Deleted")
    this.onChange('All')
  })
}

editById(obj: any) {
  const data = {
    title: obj.title,
    id: obj.id,
    type: obj.type,
    description: obj.description,
  }
  this.apiService.editElementById(obj.id, data).subscribe((res: any) => {
    console.log("successfully Updated")
    obj.toggle = false;
  })
}
}
