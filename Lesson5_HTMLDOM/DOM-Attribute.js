/*
HTML DOM:
  1. Element: ID, class, tag, CSS selector, HTML collection
  2. Attribute: id="", class="", title="",lang="",name="",content=""
  3. Text
*/
console.log('-----Attribute node & Text node-----')
/**
 * 1. Element node: tag (DOM): <a>,<p>,<h1>,<img>
 * 2. Attribute node: attribute (thẻ mở tag): id="", class="", title="",lang="",name="",content=""
 * 2. Text node: Text
 */

console.log('----------DOM attribute----------')
/**
 * Add Attribute: 
 *  1. addAttributeh2.id="heading2"; => attribute mặc định
 *  2. addAttributeh2.setAttribute('id','heading2') => attribute tùy biến
 */
//get element
var addAttributeh2 = document.querySelector('h2')
console.log(addAttributeh2);
//add attribute in element - 2 ways
addAttributeh2.lang="en";
addAttributeh2.title="Heading-h2";
addAttributeh2.className="title-class";
addAttributeh2.setAttribute('id','heading2')
addAttributeh2.setAttribute('data2','Data-h2')//attribute tùy biến (data2)-> setAttribute()

// if element exits in DOM -> getAttribute()
console.log(addAttributeh2.getAttribute('class'))
console.log(addAttributeh2.getAttribute('title'))
console.log(addAttributeh2.getAttribute('data2'))
//


console.log("----InnerText vs textContent Property---") 
/**
 * Text Attribute 
 * 
 *  1. innerText: (element node)những thứ được nhìn thấy trên trang web (trả về các text node nhin thay tren browser trong element Node)
 *  2. textContent: (exits: element node, text node) những thứ mình nhìn thấy trong html dom(trả về tất cả các text node ben trong element Node)
 */

var textHeadingElement = document.querySelector('.heading-text')
// Get Text content
console.log(textHeadingElement.innerText)//DOM: Heading Text
console.log(textHeadingElement.textContent)//DOM: Heading Text

// Update Text content: "Heading Text" => "New Heading Text"
textHeadingElement.innerText = "New Heading Text"; //Chorme: New Text
textHeadingElement.textContent = "New Heading Text"; //Chorme: New Text 

//innerText vs textContent
var textDivElement = document.querySelector('.text')
console.log("Inner Text: "+ textDivElement.innerText)
console.log("Text Content: "+textDivElement.textContent)

console.log('-----InnerHTML vs OuterHTML Property-----')
/**
 * Node Attribute 
 * 1. innerHTML: 
 *        add element node in other element
 *        add text node, attribute in element
 *        get html content
 * 2. outerHTML
 *        
 *            
 */
//Add element in (div.box-innerHTML) empty element 
var boxElement = document.querySelector('.box-innerHTML')//get element node (box element) 
boxElement.innerHTML ='<h1 title="Heading">Heading InnerHTML</h1>';//(Browser) add element node in other element,add text node, attribute in element (add h1 vap div)
console.log(document.querySelector('.box-innerHTML h1').innerText)//(DOM) Heading InnerHTML
console.log(boxElement.innerHTML)//<h1 title="Heading">Heading InnerHTML</h1> (get html content)


//Get element in (div.box-outerHTML) element  
var boxElement1 = document.querySelector('.box-outerHTML')
boxElement.outerHTML ="<span>Test</span>";//ghi de <div class="box-outerHTML">

console.log("----- Thực hành sử dụng InnerHTML #1------")
/**
 * viết hàm render nhận vào 1 tham số là html, 
 * hàm render sẽ có nhiệm vụ chèn giá trị của html vào trong thẻ ul đã cho trước.
 */
 function render(html) {
  var ul = document.querySelector('ul')
  ul.innerHTML = html;
}

render(`
  <li>Khóa học HTML</li>
  <li>Khóa học JS</li>
  <li>Khóa học PHP</li>
`)
console.log("----- Thực hành sử dụng InnerHTML #2------")
/**
 * Viết hàm render có 1 tham số courses, hàm render sẽ thêm các item của mảng courses để tạo thành 1 danh sách các khóa học trên giao diện.
 */

//  var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']
// function render(courses) {
//     var newCoure = courses.map(function(e){
//     return `<li>${e}</li>`
// });
//     var relust = document.querySelector('ul')
//     relust.innerHTML = newCoure.join('')
//  }
 
//  render(courses)