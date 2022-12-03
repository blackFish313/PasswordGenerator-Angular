import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  password=""
  length=0;
  includeLetters=false;
  includeNumbers=false;
  includeSymbols=false;

  onButtonClick(){
    
     const numbers='123456789'
     const letters='abcdefghijklmnopqrstuvwxyz'
     const symbols='!@#$%^&*()'

     let validChars=""
     if(this.includeLetters){
      validChars+=letters;
     }
     if(this.includeNumbers){
      validChars+=numbers;
     }
     if(this.includeSymbols){
      validChars+=symbols;
     }

     let generatePassword="";

     for(let i=0; i<this.length;i++){
      const index=Math.floor(Math.random()*validChars.length); // 0 - and validchards-length
      generatePassword+=validChars[index];
     }

     this.password=generatePassword;

  }// onButton


  onChangeUseLetters(){
    this.includeLetters=!this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols=!this.includeSymbols;
  }

  onChangeLength(value:Event){
    const target=event?.target as HTMLInputElement;
    const parsedValue=parseInt(target.value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue;
      console.log(this.length)
    }
   
  }



}//class
