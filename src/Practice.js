//talked about Objects in JavaScript. 
const person = {
    name: 'Nrandon',
    //if have function inside of object makes it a method
    walk: function() {},
    //both of these ways work to define a method in an object. 
    //the talk method is the cleaner way to accomplish this. 
    talk() {}
};

person.talk();
person.name = '';
const targetMember = 'name';
person[targetMember.valueOf] = 'John'