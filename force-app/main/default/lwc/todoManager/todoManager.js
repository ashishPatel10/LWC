import { LightningElement,track } from 'lwc';

export default class TodoManager extends LightningElement {
    time="8:15 pm";
    greeting ="Good Evening";
    @track todos = [];

    connectedCallback(){
        this.getTime();

        setInterval(()=>{
            this.getTime()
        },1000)
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time=`${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;
       
        this.setGreeting(hour);
    }
    getHour(hour){
        return hour ===0 ? 12 : hour>12 ? (hour-12) : hour;
    }

    getMidDay(hour){
        return hour>=12 ? "PM" : "AM";
    }
    getDoubleDigit(min){
        return min<10 ? "0"+min : min;
    }
    setGreeting(hour){
        if(hour<12){
            this.greeting="Good Morning..!!";
        } else if(hour >=12 && hour<17){
            this.greeting="Good Afternoon..!!"
        }
        else{
            this.greeting="Good Evening..!!"
        }
    }

    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        console.log(inputBox.value);
        const todo = {
                        todoId:this.todos.length,
                        todoName:inputBox.value,
                        done:false,
                        todoDate: new Date()
                    }
        this.todos.push(todo);
        inputBox.value="";
    }

}