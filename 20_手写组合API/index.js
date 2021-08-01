//shallowReactive(浅的劫持，浅的监视，浅的响应数据)与reactive(深的)

//定义一个reactiveHandler处理对象
const reactiveHandler = {
    //获取目标对象的属性值,target-目标对象，prop-要获取的属性名称
    get(target, prop) {
        if (prop === '_is_reactive') {//不懂
            return true;
        }
        const result = Reflect.get(target, prop);//获取对象对应的属性值
        console.log('拦截了读取数据', prop, result);
        return result;
    },
    //修改目标对象的属性值/为目标对象添加新的属性,value-要设置的值
    set(target, prop, value) {
        const result = Reflect.set(target, prop, value);
        console.log('拦截了修改数据或者是添加数据', prop, value);
        return result;
    },
    //删除某个属性，target-要删除其属性的目标对象，prop-要删除的属性的名称
    deleteProperty(target, prop) {
        const result = Reflect.deleteProperty(target, prop);
        console.log('拦截了删除数据', prop);
        return result;
    },
}

//定义一个shallowReactive函数，传入一个目标对象
function shallowReactive(target) {
//    判断当前的目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {//对象要存在并且类型是object
        return new Proxy(target, reactiveHandler);
    }
//    如果传入的数据是基本类型的数据，那么就直接返回
    return target;
}

//定义一个reactive函数，传入一个目标对象
function reactive(target) {
//    判断当前的目标对象是不是object类型（对象/数组）
    if (target && typeof target === 'object') {//对象要存在并且类型是object
        //对数组或者是对象中所有的数据进行reactive的递归处理
        //先判断当前的数据是不是数组
        if (Array.isArray(target)) {
            //数组的数据要进行遍历操作
            target.forEach((item, index) => {
                target[index] = reactive(item);
            })
        } else {
            //    再判断当前的数据是不是对象
            //    对象的数据也要进行遍历的操作
            Object.keys(target).forEach(key => {
                //keys把对象变成数组
                target[key] = reactive(target[key]);
            })
        }

        return new Proxy(target, reactiveHandler);
    }
//    如果传入的数据是基本类型的数据，那么就直接返回
    return target;
}

//===================================
//定义readonlyHandler处理器
const readonlyHandler = {
    get(target, prop) {
        if (prop === '_is_readonly') {//不懂
            return true;
        }
        const result = Reflect.get(target, prop);//获取对象对应的属性值
        console.log('拦截到了读取数据', prop, result);
        return result;
    },
    set(target, prop, value) {
        console.warn('只能读取数据，不能修改数据或者删除数据');
        return true;//可以见函数reactiveHandler，set返回值value为boolean
    },
    deleteProperty(target, prop) {
        console.warn('只能读取数据，不能删除数据');
        return true;//可以见函数reactiveHandler，deleteProperty返回值value为boolean
    }
}

//定义一个shallowReadonly函数（浅）
function shallowReadonly(target) {
    //判断当前的数据是不是对象
    if (target && typeof target === 'object') {//对象要存在并且类型是object
        return new Proxy(target, readonlyHandler);
    }
    //    如果传入的数据是基本类型的数据，那么就直接返回
    return target
}

//定义一个Readonly函数（深）
function readonly(target) {
    //判断当前的数据是不是对象
    if (target && typeof target === 'object') {//对象要存在并且类型是object
        //判断target是不是数组
        if (Array.isArray(target)) {
            //    遍历数组
            target.forEach((item, index) => {
                target[index] = readonly(item);
            })
        } else {//判断target是不是对象
            //    遍历对象
            Object.keys(target).forEach(key => {
                target[key] = readonly(target[key]);
            })
        }

        return new Proxy(target, readonlyHandler);
    }
    //    如果传入的数据是基本类型的数据，那么就直接返回
    return target
}

//定义一个shallowRef函数
function shallowRef(target) {
    return {
        //保存target数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据');
            return this._value;
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val);
            this._value = val;
        }
    }
}

//定义一个ref函数
function ref(target) {
    target = reactive(target);
    return {
        _is_ref: true,
        //保存target数据保存起来
        _value: target,
        get value() {
            console.log('劫持到了读取数据');
            return this._value;
        },
        set value(val) {
            console.log('劫持到了修改数据，准备更新界面', val);
            this._value = val;
        }
    }
}

//定义一个函数isRef，判断当前的对象是不是ref对象
function isRef(obj) {
    //当前这个对象存在并且_is_ref属性为true时，判断为true
    return obj && obj._is_ref;
}

//定义一个函数isReactive,判断当前的对象是不是reactive对象
function isReactive(obj) {
    //当前这个对象存在并且_is_reactive属性为true时，判断为true
    return obj && obj._is_reactive;
}

//定义一个函数isReadonly,判断当前的对象是不是readonly对象
function isReadonly(obj) {
    return obj && obj._is_readonly;
}

//定义一个函数isProxy,判断当前的对象是不是reactive对象或者是readonly对象
function isProxy(obj) {
    // reactive对象或者是readonly对象返回的都是proxy代理对象
    return isReactive(obj) || isReadonly(obj);
}