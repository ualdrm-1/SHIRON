# SHIRON - regular landing site for a construction company
The only interesting thing is its well-developed **cross-platform** support, as well as a couple of **animation elements** in popup windows.
## Popup feedback:
```html
        ...
        <!--classes that contain a popup window-->
        <div class="popup-overlay" id="popupOverlay">
            <div class="popup">
                ...
            </div>
        </div>
        ...
```
```css
    /*some styles that affect animation*/
    .popup-overlay {
    ...
    visibility: hidden;
    opacity: 0;
    position: fixed;
    left: 0;
    top: 0;
    transition: opacity 0.4s, visibility 0.4s;
    ...
}
.popup-overlay.open {
    visibility: visible;
    opacity: 1;
}
.popup {
    ...
    transform: scale(0);
    transition: transform 0.4s;
}
```
```javascript
//scripts for the animation itself (opening/closing)
document.getElementById("elem2rightside").addEventListener("click", function() {
    document.getElementById("popupOverlay").classList.add("open");
});

function closePopup() {
    document.getElementById("popupOverlay").classList.remove("open");
}

document.getElementById("popupOverlay").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});
document.querySelector('.custom-checkbox').addEventListener('click', function() {
    const checkbox = document.getElementById('consent');
    checkbox.checked = !checkbox.checked;
    this.style.backgroundColor = checkbox.checked ? 'white' : 'transparent';
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Форма отправлена!");
    closePopup();
});
```
## WhatsApp(button):
```html
    ...
    <!--classes that contain a whatsapp button-->
    <div class="whatsapp-button pulse" id="whatsappButton">
        <img src="image/whatsapp.png" alt="WhatsApp"/>
    </div>
    ...
```
```css
.whatsapp-button.pulse {
    animation: pulse 2s infinite; /*timing*/
}

@-webkit-keyframes pulse { 
    /*special styles to create button pulsation animation*/
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
    }
    70% {
        -webkit-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.4);
    }
    100% {
        -webkit-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}
@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 1);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
    }
    70% {
        -moz-box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.4);
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
    }
    100%{
        -moz-box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
}

#whatsappButton{
  transition: transform 1s;   
}
#whatsappButton:hover{
  transform: scale(1.3); /*hover zoom animation*/
}
.whatsapp-button::before {
    ...
    min-width: calc(300px + 12px);
    min-height: calc(60px + 12px);
    box-shadow: 0 0 60px rgba(0,255,203,.64);
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: all .3s ease-in-out 0s;
    ...
}
```
## Whatsapp(popup):
```html
    <div class="whatsapp-overlay" id="whatsapp-overlay"> 
        <!--classes that contain a whatsapp popup-->
        ...
    </div>
```
```css
    ...
    .whatsapp-popup.open { /*styles for opening animation*/
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, -50%);
    }
    ...
```
```js
    //scripts for open/close popup
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Форма отправлена!");
        closePopup();
    });

    document.getElementById("whatsappButton").addEventListener("click", function() { 
        document.getElementById("whatsappPopup").classList.add("open"); 
        document.getElementById("whatsapp-overlay").classList.add("open");
        document.body.style.overflow = 'hidden'; 
    }); 
    function closeWhatsAppPopup() { 
        document.getElementById("whatsappPopup").classList.remove("open"); 
        document.getElementById("whatsapp-overlay").classList.remove("open");
        document.body.style.overflow = ''; 
    } 
```

## Mobile version
There is nothing special for mobile versions - essentially the fonts and indents have been reduced in size, but the animation elements have remained the same.
## Photos
