export default {
  time2date(t){
    let toDou=n=>n<10?`0${n}`:`${n}`;

    let oDate=new Date(t);

    return `${oDate.getFullYear()}-${toDou(oDate.getMonth()+1)}-${toDou(oDate.getDate())}`;
  }
}
