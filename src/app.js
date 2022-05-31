import { LightningElement } from "lwc";

export default class App extends LightningElement {

  selected={};
  correctAnswers = 0;
  isSubmitted=false;
  questions=[
  {
      id:"1",
      query: "Which one of the following is NOT a template loop?",
      options:{
        a:"for:each",
        b:"iterator",
        c:"map loop"
    }, 
    answer: "c"
  },
    {
      id:"2",
      query: "Which of the files is invalid for a LWC component folder?",
      options:{
        a:".svg",
        b:".apex",
        c:".js"
    }, 
    answer: "b"
  },
    {
      id:"3",
      query: "Which of the following is NOT a directive?",
      options:{
        a:"for:each",
        b:"if:true",
        c:"@track"
    }, 
    answer: "c"
  }
]
  get all(){
    return !(Object.keys(this.selected).length === this.questions.length);
  }
  get allCorrect(){
    return `slds-text-heading_large ${this.questions.length === this.correctAnswers?
    'slds-text-color_sucess' : 'slds-text-color_error'}`;
  } 

    changeHandler(event){
      /*Shorthand for 
      * const name = event.target.name;
      * const value = event.target.value;
      */
      const{name,value} = event.target;
      this.selected={...this.selected, [name]:value}
    }

    submitHandler(event){
      event.preventDefault();
      let correct = this.questions.filter(item=>this.selected[item.id] === item.answer);
      this.correctAnswers = correct.length;
      this.isSubmitted = true;
    }


    resetHandler(){
      this.selected={}
      this.correctAnswers=0;
      this.isSubmitted = false;
    }
}
