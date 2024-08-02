
const signup = async (e)=>{
    e.preventDefault()
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email,password);
    
    try{
    const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
    await result.user.updateProfile({
        displayName : "user"
    })
     
    createusercollection(result.user)
    await result.user.sendEmailVerification()
    console.log(result)
    alert(`wellcome ${result.user.email}`)
    }catch (error) {
        console.log(error);
        alert(error.message)

    
    }
    email.value = ""
    email.password = ""
    }
    

const login = async (e)=>{
    e.preventDefault()
        const email = document.getElementById("login_email").value;
        const password = document.getElementById("login_password").value;
        // console.log(email,password);
    
    // try{
    // const result = await firebase.auth().signInWithEmailAndPassword(email, password);
    // console.log(result);
    // alert(`user is successfully login ${result.user.email} `)
    // }catch (error) {
    //     console.log(error);
    //     alert("valid_password")
    
    // }
    try {
        const result = await firebase.auth().signInWithEmailAndPassword(email, password);
        console.log(result);
        alert(`user is successfully login ${result.user.email}`)
     } catch (error) {
        // console.log(error);
        alert("err.message")
     }
    email.value = ""
    email.password = ""
    }

    const logout = () =>{
        firebase.auth().signOut()
    const userdocRef = firebase.auth().onAuthStateChanged((user) => {
        if(user){
            getuserinfoRealtime(user.uid)
            console.log(user);
        }else{
            console.log(`user successfully signout`);
            alert(`user successfully signout`)
            getuserinfoRealtime(null)
        }
        
    });
}