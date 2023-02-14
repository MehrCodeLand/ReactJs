class User{
    username = 'mehrshad';
    age = 23 ;

    //1
    SayHi(){
        console.log('Hello World ' + this.username.toUpperCase());
    }
    //2
    sayAge = ()=> {
        console.log('My Age is : ' + this.age);
    }
}

const user = new User();
user.SayHi();