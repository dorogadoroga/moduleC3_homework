function createObjWithoutProto() {
    return Object.create(null);
};

let objWithoutProto = new createObjWithoutProto();

console.log(Object.getPrototypeOf(objWithoutProto));




