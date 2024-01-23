
  const getArgs = (args)=>{
  const res = {};
  const [executer, file, ...rest] = args;//rest синтаксис ссылка:https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/rest_parameters

  //проверка на наличие "-" , если он есть, то от значения -s убираем "-"  и "s" сохраняя значение за ними в объект "res"(так же выполнеям проверкку не являеться ли след.елем "-")
  rest.forEach((value, index, array)=>{
    if(value.charAt(0) == '-') {
      if (index == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) != '-') {
        res[value.substring(1)] = array[index + 1]
      } else {
        res[value.substring(1)] = true
      }
    }
    });
    return res;
  }


//импорт функции getArgs() в файл wheather.js
  export {getArgs}

