import { AnimationPlayer } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-iemcrud',
  templateUrl: './iemcrud.component.html',
  styleUrls: ['./iemcrud.component.css']
})
export class IemcrudComponent {
  public allData: any = [];
  public showFlag: boolean = true;
  public count: number = 1
  public idd: any;
  public un: any;
  public el: any;
  public ps: any;



  onSubmitData(data: any) {
    console.log(data.value);
    if(data.value.id==undefined){
      data.value.id=this.count;
      this.allData.push(data.value);
      if(this.allData.length>0){
        this.showFlag=true;
      }
      this.count++;

      

      }else{
        this.allData.forEach((element:any)=>{
          if(data.value.id=element.id){
            console.log(element);
            element.uname=data.value.uname;
            element.eml=data.value.eml;
            element.pass=data.value.pass;
          }
         });
         console.log(this.allData);
      }
    }
    onDelData(dt:any){
       console.log(dt);
       console.log(this.allData);
       this.allData.forEach((element:any,index:any)=>{
        if (element.id==dt.id){
          this.allData.splice(index,1);
        }
       })
    }
    onUpdateData(dt1:any) {
      console.log(dt1);
      this.idd=dt1.id;
      this.un=dt1.uname;
      this.el=dt1.eml;
      this.ps=dt1.pass;

    }


    onUpdateBtn(dt2:any){}

    

  }
