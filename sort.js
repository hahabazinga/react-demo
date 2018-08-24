/*
function quickSort(item, left, right) {
    var index;
    if (item.length > 1) {
        index = partition(item, left, right);
        console.log('privotIndex', index)
        if(left < index - 1){
            quickSort(item, left, index - 1);
        }
        if(index < right){
            quickSort(item, index, right);
        }
    }
    return item;
}
function partition(item, left, right) {
    var provit = item[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while(i <= j){
        while(item[i] < provit){
            i++;
        }
        while(item[j] > provit){
            j--;
        }
        if(i <= j){

            [item[i], item[j]] = [item[j], item[i]];
            console.log(item[i],item[j], item)
            i++;
            j--;

        }
    }
    console.log(i,j)
    return i;
}
var arr = [1,4,5,3,2];
quickSort(arr, 0, arr.length-1);
console.log(arr);


function quicksort(arr, left, right) {
    var len = arr.length;
    if (len > 1) {
        var index = partition(arr, left, right);
        if (left < index - 1) {
            quickSort(arr, left, index - 1);
        }
        if (index < right) {
            quickSort(arr, index, right);
        }
    }
    return arr;
}
function partition(arr, left, right) {
    var priovt = arr[Math.floor((left + right) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (arr[i] < priovt) {
            i++;
        }
        while (arr[j] > priovt) {
            j--
        }
        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++;
            j--;
        }
    }
    return i;
}*/
/*
// this、作用域
var length = 10;
function fn() {
    var length = 3
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function(fn) {
        fn();
        arguments[0]();
    }
};

obj.method(fn, 1);*/

/*
var viewportHeight = el.getBoundingClientRect().top // 距离当前视窗的高
var heightTop = document.documentElement.scrollTop || document.body.scrollTop;
var scrollHeight = el.getBoundingClientRect().top + heightTop // 距离文档左上的高

var supportPageOffset = window.pageXOffset !== undefined; //pageXOffset支持主流浏览器
var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat"); // 是否为标准模式，标准模式下使用document.documentElement.scrollTop,怪异模式下使用document.body.scrollTop
var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft;

if(window.pageYOffset){//这一条滤去了大部分， 只留了IE678

}else if(document.documentElement.scrollTop ){//IE678 的非quirk模式

}else if(document.body.scrolltop){//IE678 的quirk模式

}*/

/*
// proxy + Reflect 实现图片的懒加载
const createImgProxy = (img, loadingImg, realImg) => {
    let hasLoaded = false
    const virtualImg = new Image()
    virtualImg.src = realImg
    virtualImg.onload = () => {
        Reflect.set(img, 'src', realImg)
        hasLoaded = true
    }
    return new Proxy(img, {
        get(obj, prop) {
            if (prop === 'src' && !hasLoaded) {
                return loadingImg
            }
            return obj[prop]
        }
    })
}

const image = new Image()
const imgProxy = createImgProxy(image, './loading.gif', './pic.png')
document.body.appendChild(image)
*/

// proxy + reflect 实现节流

const createThrottleProxy = (fn, rate) => {
    let last = Date.now() - rate
    return new Proxy(fn, {
        apply(target, context, args) {
            if (Date.now() - last > rate) {
                Reflect.apply(target, context, args)
                last = Date.now()
            }
        }
    })
}

const handler = () => console.log('get')
const handlerProxy =  createThrottleProxy(handler, 1000)
document.addEventListener('scroll', handlerProxy)



