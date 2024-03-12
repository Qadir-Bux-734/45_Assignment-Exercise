// One of your guests can't make it to the dinner, so you need to send out a new set of invitations with a replacement guest.

 let myFriends:string[]=["Qadir", "Shahid", "Wajid","Mir"]
 
  let unableToAttend:string="Wajid"
     console.log(`${unableToAttend} can't make it to dinner. `)  
     //Replace the newguest    
        let newguest="Hamid";
        myFriends[myFriends.indexOf(unableToAttend)]=newguest;

    // new invitation
        myFriends.forEach(name1=>{
        console.log(`Dear ${name1}! would you like to join me for dinner?`)
        });