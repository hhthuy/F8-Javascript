/*
  JavaScript HTML DOM Elements
----------------------------
HTML DOM:
  1. Element: ID, class, tag, CSS selector, HTML collection
  2. Attribute
  3. Text
  */

console.log("----Get element methods-----")
 
//ID
var headingNode = document.getElementById('title');
console.log(headingNode)//<h1 id="title">Elements</h1>

//class
var headingsNode = document.getElementsByClassName('heading2');
console.log(headingsNode)//HTMLCollection(1) [h2.heading2]

//Tag
var headingTagsNode = document.getElementsByTagName('h2');
console.log(headingTagsNode)//HTMLCollection(4) [h2.heading2, h2.heading21, h2.heading21, h2.heading21]
//console.log(headingTagsNode[1])
//CSS selector
var heading1CSSNode = document.querySelector('.heading2')
console.log(heading1CSSNode) //<h2 class="heading2">HTML DOM Elements 1</h2>

var heading11CSSNode1 = document.querySelector('.box .heading21')
console.log(heading11CSSNode1)//<h2 class="heading21">HTML DOM Elements 11</h2>

var heading11CSSNode = document.querySelector('.box .heading21:last-child')
console.log(heading11CSSNode)//<h2 class="heading21">HTML DOM Elements 13</h2>

//HTML collection
console.log(document.forms['frm1'])//h1#heading
console.log(document.anchors)//HTMLCollection [a, youtube: a]
document.getElementById("myImage").innerHTML = "Image number: " + document.images.length;
//h1#heading

console.log("----Get element methods 2 -----")

//C1: 
var listItem = document.querySelectorAll('.box-1 li')
console.log(listItem)//NodeList(3) [li, li, li]

//C2
//Công việc 1: Sử dụng tới "boxNode"
var boxNode = document.querySelector('.box-1')
console.log(boxNode)//NodeList(1) [div.box-1]
//Công việc 2: Sử dụng tới các li elements là con .box-1
console.log(boxNode.querySelectorAll('li'))//NodeList(3) [li, li, li]
console.log(boxNode.getElementsByTagName('li'));//HTMLCollection(3) [li, li, li]
console.log(boxNode.getElementsByTagName('p'));//HTMLCollection [p]
console.log(boxNode.querySelector('p'));//<p>Text paragraph</p>

console.log("----Get element methods 3 -----")
// 1. getElementById() => <1element>
// 2. getElementsByClassName() => HTMLCollection
// 3. getElementsByTagName() => HTMLCollection
// 4. querySelector() => <1element>
// 5. querySelectorAll() => NodeList
// 6. HTML Selector 
// 7. document.write()


//Phân biệt <Element> , HTMLCollection, NodeList
//Element: co id, class, selectAll,
//HTMLCollection: [index: classCha.classCon] = 0: h2.heading2
//NodeList: 

//BT: Lấy h3 element,h4 element,h5 element
//C1
var element1 = document.querySelector('#element1');
console.log(element1);//<p id="element1">BT: Lấy h3 element,h4 element,h5 element</p>
//C2
//getElementsByTagName -> HTMLCollection [h4] 0: h4 -> [0] 
var h3Element = document.getElementsByTagName('h3')[0]
console.log(h3Element)//<h3>Element</h3>
var h4Element = document.getElementsByTagName('h4')[0]
console.log(h4Element)//<h4>HTMLCollection</h4>
var h5Element = document.getElementsByTagName('h4')[0]
console.log(h5Element)//<h5>NodeList</h5>

document.write('End')

