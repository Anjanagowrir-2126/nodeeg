#to create Database

use SchoolLibrary

switched to db SchoolLibrary    //output

#to create a collection and insert values

db.Books.insert({
  "title" : "Introduction to Science",
  "author" : "Dr.Smith",
  "available" : "true"
})


{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a7d6cd229c29060872f1e73')     //output
  }
}

#to show collection 

show collections

Books               //output

#to drop collection

db.Books.drop() 

true               //output

#to drop Database

db.dropDatabase()
 
{ ok: 1, dropped: 'SchoolLibrary' }             //output
SchoolLibrary
Selection deleted


