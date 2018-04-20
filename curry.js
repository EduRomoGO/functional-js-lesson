const objects = [{ name: 'aa1', surname: 'bb1', id: 1 }, { name: 'aa2', surname: 'bb2', id: 2 }, { name: 'aa3', surname: 'bb3', id: 3 }];
funtion  ppp(o, property) {
    return o[property];
}
objects.map((o,) => ppp());
objects.map(o => o.name);


const get = curry((property, object) => object[property]);
objects.map(get('id')) //= [1, 2, 3]
objects.map(get('name')) //= [1, 2, 3]