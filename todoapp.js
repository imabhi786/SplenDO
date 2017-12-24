var app=angular.module("Todoapp",[]);
app.controller("todoctrl",todoctrl);
app.controller("Mainctrl",Main);


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
    this.delete1=function(index){
        this.del.splice(index,1);
    }
    this.againupdate=function(index){
        this.todos.push (this.del.splice(index,1).toString());

    }
    this.save=function(){
        for(var i=0;i<this.todos.length;i++)
       document.write(this.todos[i]+"<br>");
    }
}

function Main() //dependency injection
{
    var n=new Date();
    var datestring=n.toDateString();
    var timestring=n.toTimeString();
    this.currenttime=timestring;
    this.currentdate=datestring;
    this.update=function(){
        var n=new Date();
        var datestring=n.toDateString();
        var timestring=n.toTimeString();
        this.currenttime=timestring;
        this.currentdate=datestring;
    }
}