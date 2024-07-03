// what will be logged here?

//Task 1
function getItem(){
    console.log(this);
}
getItem();
// Here(In Function) "this" will refrence global object, it may be window 

//Task 2
const item = {
    title: "Ball",
    getItem1(){
        console.log("this", this);
    }
}
item.getItem1();
// here(In Object) "this" always refrence our object

class Item {
    title = "Ball";
    getItem2() {
        const this_ = this
        [1,2,3].map(function(item){
            console.log(this_)
        })
    }
}
const item2 = new Item();
item2.getItem2()