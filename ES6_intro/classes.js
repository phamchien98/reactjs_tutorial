class Member {
  constructor() {
    this.name = "Pham Thi Chien";
  }

  memberName() {
    return this.name;
  }
}

class User extends Member {
  constructor(name, age) {
    super(name);
    this.age = 22;
  }

  memberInfo() {
    return this.memberName() + '  Tuổi:' + this.age;
  }
}
var x = new User();
console.log(x.memberInfo());