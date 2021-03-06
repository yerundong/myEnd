/*
// ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为【浏览器和服务器】通用的模块解决方案。
// 其模块功能主要由两个命令构成：export和import。
// 而在js运行时会进行三件事：1语法分析  2.预编译  3.解释执行
// ES6 module的语法是静态的，静态的语法意味着可以在【编译时】确定导入和导出，更加快速的查找依赖，但只能写在【模块顶层】
// 使用 import 被导入的变量是只读的，可以理解默认为 const 装饰
// 使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是【引用传递】

【import】导入
 	import可以导出任何一种数据类型
 	路径后缀可以省略
 	import语句会【执行】所加载的模块，如果多次重复执行同一句import语句，那么只会执行一次
 	import命令可以出现在模块的任何位置，只要处于【模块顶层】就可以。如果处于块级作用域内，就会报错
 	import命令具有【提升效果】，会提升到整个模块的头部，首先执行
 	【动态加载】：
 	import和export命令只能在模块的顶层,导致无法在运行时加载模块,无法取代require的动态加载功能。
 	因此，有一个提案(stage3)，建议引入import()函数，完成动态加载。与require类似，但它是异步的，可以使用.then()、.catch()
*/
/*方式一*/
//import {a} from './export';
//console.log(a);

/*方式二:利用as重命名*/
//import {a as _a} from './export';
//console.log(_a);

/*方式三：接受默认导出的变量,2种写法*/
//import {default as b} from './export';
//import _b from './export';
//console.log(b);
//console.log(_b);

/*方式四：整体加载,不需要在export.js里输出整体*/
//exportObj对象包括了export.js文件里的所有变量
import * as exportObj from './export';
//console.log(exportObj);

//导入复合导出的变量
//import * as ka from './export_complex';
//console.log(ka);

/*方式五：只执行export.js*/
import './export';

//require按需加载
if(true){
	let exobj =  require('./export_complex');
//	console.log(exobj)
}
