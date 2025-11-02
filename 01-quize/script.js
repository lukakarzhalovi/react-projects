let array = [10, 25, 42, 50, 110, 21, 12];

const res = array
	.filter(el => el % 5 == 0)
	.filter(el => el % 2 == 0)
	.reduce((acc, num) => acc + num , 0);

console.log(res)

const date1 = new Date("Thu Jan 11 2024 14:00:00 GMT+0400");
const date2 = new Date("Sun Jan 31 2024 15:00:00 GMT+0400");
let result =  weekComparison(date1, date2);
console.log(result)


function weekComparison (date1, date2){
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  function getWeekStart(d) {
    const weekDay = d.getDay(); 
    const montDay = d.getDate(); 
    const diff = montDay - weekDay + (weekDay === 0 ? -6 : 1); 
    return new Date(d.getFullYear(), d.getMonth(), diff);
  }

  const weekStart1 = getWeekStart(d1);
  const weekStart2 = getWeekStart(d2);


  return weekStart1.getFullYear() === weekStart2.getFullYear() &&
  		 weekStart1.getMonth() ===  weekStart2.getMonth() &&
		 weekStart1.getDate() === weekStart2.getDate()
}