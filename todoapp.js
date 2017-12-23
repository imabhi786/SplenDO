var app=angular.module("Todoapp",[]);
app.controller("todoctrl",todoctrl);

function todoctrl(){
    var a;
    this.flagin=false;
    this.todos=[
       
    ];
    this.del=[ 

    ];
    this.add=function(){
        this.todos.push(this.input);
        this.input="";
    }
    this.update=function(){
        this.flagin=!this.flagin;
    }
    this.delete=function(index){
        this.del.push (this.todos.splice(index,1).toString());
    
    }
    this.againupdate=function(index){
        this.todos.push (this.del.splice(index,1).toString());

    }
}