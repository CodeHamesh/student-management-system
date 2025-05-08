import { LightningElement ,track, wire} from 'lwc';
import insertStu from '@salesforce/apex/StudentController.insertStu';
import allStu from '@salesforce/apex/StudentController.allStu';
export default class StudentManagerDeshbord extends LightningElement {
   @track currentSelectedGrad;
   @track allStudata = [];
    getStuValue(event){
        let obj = event.detail
        insertStu({Name:obj.name,Age:obj.age,Grade:obj.grade}).then((res)=>{
            return allStu({ grade: this.currentSelectedGrad || '' })
        }).then((res)=>{
            this.allStudata = res;
        }).catch((err)=>{
            console.log(err);
        })
    }
    selectedgrade(e){
      this.currentSelectedGrad = e.detail; 
      allStu({grade:this.currentSelectedGrad}).then((res)=>{
        this.allStudata = res
        console.log('filllllllll',JSON.stringify(this.allStudata),res);
      }).catch((err)=>{
        console.log('err',err);
      })
    }
     connectedCallback(){
        allStu({ grade: '' }).then((res)=>{
            this.allStudata = res;
            console.log('cb',this.allStudata,res)  
        })
     }

}