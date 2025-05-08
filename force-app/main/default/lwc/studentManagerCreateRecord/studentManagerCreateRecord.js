import { LightningElement } from 'lwc';

export default class StudentManagerCreateRecord extends LightningElement {
    name='';
    age='';
    grade='';
    nameValue(e){
    this.name = e.target.value
    }
    ageValue(e){
        this.age = e.target.value
    }
    gradeValue(e){
        this.grade = e.target.value
    }
    addStu(e){
    let arr = ['1st','2nd','3rd','4th','5th'];
    if (arr.includes(this.grade) && this.name != '') {
        this.dispatchEvent(new CustomEvent('studentvalue',{detail:{name:this.name,age:this.age,grade:this.grade}}));
        this.name = ''
        this.grade = ''
        this.age = ''
    }else{
        alert('plz enter a valid name and grade, Grade => 1st 2nd 3rd 4th 5th')
    }
    }

}