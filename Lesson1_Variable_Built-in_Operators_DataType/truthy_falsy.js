//Bai 37 -Truthy và Falsy là gì?
/**
 * Truthy - to bool is true
 * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
 * Giá trị 1, ['BMW'], { name: 'Miu' } và 'hi' :là Truthy vi chuyển sang Boolean -> nhận được giá trị true.
 */
 console.log(Boolean(1))//true
 console.log(Boolean['BMW'])//true
 console.log(Boolean({name: 'Miu'}))//true
 
 console.log(!!'hi')//true (!: PD, !! PD+PD=KD)
 console.log(!!['Mercedes']) // true
 console.log(!!1) // true
 
 var cars = [] // Dù là mảng "rỗng" vẫn là truthy
 if (!cars) {
     //"Tại sao lại không lọt vào đây?"
 }
 /**
  * Falsy - to bool is false
  * Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
  * Trong Javascript có 6 giá trị sau được coi là Falsy:
  * - false
  * - 0 (số không)
  * - '' or "" (chuỗi rỗng)
  * - null 
  * - undefined
  * - NaN
  */
  console.log(!!false) // false
  console.log(!!0) // false
  console.log(!!'') // false
  console.log(!!null) // false
  console.log(!!undefined) // false
  console.log(!!NaN) // false
  /**
   * Ngoài 6 giá trị đã đề cập tới ở phần Falsy thì toàn bộ các giá trị khác đều là Truthy, kể cả những giá trị sau:
   * '0' (một chuỗi chứa số không)
   * ' ' (một chuỗi chứa dấu cách)
   * 'false' (một chuỗi chứa từ khóa false)
   * [] (một array trống)
   * {} (một object trống)
   * function(){} (một hàm “trống”)
   */
 