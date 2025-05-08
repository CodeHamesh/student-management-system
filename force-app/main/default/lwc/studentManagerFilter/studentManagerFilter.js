import { LightningElement ,track} from 'lwc';

export default class StudentManagerFilter extends LightningElement {
    @track selectedGrade = ''; // user selected value
    gradeOptions = [
        {label:'All',value:''},
        { label: '1st', value: '1st' },
        { label: '2nd', value: '2nd' },
        { label: '3rd', value: '3rd' },
        { label: '4th', value: '4th' },
        { label: '5th', value: '5th' },
    ];
    handleGradeChange(e){
       this.selectedGrade =  e.detail.value
       this.dispatchEvent(new CustomEvent('selectedgrade',{detail:this.selectedGrade}));
    }

}