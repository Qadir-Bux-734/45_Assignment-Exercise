// Seeing the World: Think of at least five places in the world you’d like to visit.

// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its
// order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


 let places:string[]=["Europe", "China ", "Canada","Japan","Russia"]
  //Original Order    
 console.log(`Orginal Order:`,places);
   // Alphabetical Order by sorting    

       console.log(`Alphabetcal Order:`,[...places].sort());
    //original Order
     console.log(`Original Order:`, places);
  // Reverse the sort order reversed 
    console.log(`Reverse Order:`, [...places].sort().reverse());
 //original Places
    console.log(`Original Order:`, places);
    // Reverse the original order
    places.reverse()
    console.log(`Reverse order:`,places);
    //again Reverse,  (reverse order in original order)
    places.reverse()
    console.log(`original order:`,places);
    // sorting the original order
    places.sort()
    console.log(`Alphabetical order:`,places);
     //change The sorting order in reverse order
     places.reverse()
    console.log(`Reverse Alphabetical order:`,places);
     //change reverse order in alphabetical order