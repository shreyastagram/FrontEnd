const done=()=>{
    console.log("BOTH VALID!");
};


//start the callback chain
const getUsername=()=>{
    console.log("Getting username...");
    setTimeout(()=>{
        const username="Shreyash";
        console.log(`Username = ${username}`);

        //validate the username
        console.log("Validating username...");
        if(username&&username !==""){
        console.log("Valid Username!");


        //Next step:Get password
        console.log("Getting password...");
        setTimeout(()=>{
            const password="upgrad"
            console.log(`Password = ${password}`);


            //Validate password
            console.log("Validating password...");
            if(password && password !==""){
                console.log("Valid Password!");

                //Both are valid, so we call done
                done();
            }else{
                console.log("Invalid Password! Please try again!");
            }
            },1000);//1 sec delay for getting password
        }else{
            console.log("Invalid Username! Please try again!");
        }
    },1000);
};
getUsername();