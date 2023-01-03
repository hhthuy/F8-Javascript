/* 
  HTML DOM là gì?
  ---------------
DOM: Document Object Model
HTML DOM (W3C standard)
Gồm 3 thành phần
  1. Element
  2. Attribute
  3. Text

  * Node
  website (html) -> bowser (mã hóa HTML thành mô hình DOM - thể hiện tất cả các thành phần website) => thay đổi tất cả các thành phần trong website
  Sử dụng Javascript truy cập HTML DOM => thay đổi (element, attribute, text)
  --------------------------------------------------------------------------------------------------------------------------------------------------
*/

/*
  HTML DOM vs DOM API
  -------------------
  Javascript: Browser | Server (Nodejs)
    HTML DOM không phải của Javascript. (document.getElementById)
    Javascript chỉ cung cấp bộ phương tiện để truy xuất HTML DOM mà thôi.
    Bowser: HTML --access--> DOM ---> DOM API (WEB API)
    (API: Application Programming Interface)

*/

/**
 * Document object: 
    represents your web page
    access any element in an HTML page

  -Use the document object to access and manipulate HTML.
  * Finding HTML Elements
      document.getElementById(id)
      document.getElementsByTagName(name)
      document.getElementsByClassName(name)	
  * Changing HTML Elements
      element.innerHTML =  new html content
      element.attribute = new value 
      element.style.property = new style
      element.setAttribute(attribute, value)
  * Adding and Deleting Elements
      document.createElement(element)	
      document.removeChild(element)
      document.appendChild(element)
      document.replaceChild(new, old)
      document.write(text)
  * Adding Events Handlers 
      document.getElementById(id).onclick = function(){code}
  * Finding HTML Objects
      document.anchors
      document.baseURI
      document.cookie
      document.documentElement
      document.documentMode (browser)
      document.documentURI
      document.domain
      document.doctype
      document.head
      document.body
      document.title 
      document.inputEncoding
      document.embeds
      document.forms
      document.images
      document.links
      document.readyState (loading status)
      document.referrer (the linking document)
      document.scripts
      document.strictErrorChecking 
      document.URL 
 */
