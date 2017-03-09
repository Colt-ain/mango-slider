
function Slider(name, number) {
    this.name = name;
    this.number = number;
    this.left = "0px";
    this.ShowNow = 0;
    this.sliderOffset = [];
    this.slideNumber = document.querySelector(".slider-container-" + this.number).querySelector(".slider").querySelector(".slider-slides").getElementsByTagName('img').length;
    this.leftbutton =
        document.querySelector(".slider-container-" + this.number).querySelector(".leftbutton");
    this.rightbutton =  document.querySelector(".slider-container-" + this.number).querySelector(".rightbutton");
    this.firstBub = document.querySelector(".slider-container-" + this.number).querySelector(".slider-controls").querySelector(".slider-controls-btn-1");
    this.secondBub = document.querySelector(".slider-container-" + this.number).querySelector(".slider-controls").querySelector(".slider-controls-btn-2");
    this.thirdBub = document.querySelector(".slider-container-" + this.number).querySelector(".slider-controls").querySelector(".slider-controls-btn-3");
    // назначение стилей начало
    document.querySelector(".slider-container-" + this.number).style.width = "100%";
    document.querySelector(".slider-container-" + this.number).style.position = "relative";
    document.querySelector(".slider-container-" + this.number).querySelector(".slider").style.position = "relative";

    document.querySelector(".slider-container-" + this.number + " .slider ").style.overflow = "hidden";
    // document.querySelector(".slider-container-" + this.number + " .slider  .slider-slides").querySelectorAll(".slides").style.cssFloat = "left";

    this.leftbutton.style.position = "absolute";
    this.leftbutton.style.zIndex = "100";
    this.leftbutton.style.top = "0px";
    this.leftbutton.style.bottom = "0px";
    this.leftbutton.style.cursor = "pointer";
    this.rightbutton.style.position = "absolute";
    this.rightbutton.style.zIndex = "100";
    this.rightbutton.style.top = "0px";
    this.rightbutton.style.left = "85%";
    this.rightbutton.style.width = "15%";
    this.rightbutton.style.bottom = "0px";
    this.rightbutton.style.cursor = "pointer";
    // назначение стилей конец
    this.imgWidth = function() {
        // функция для подсчета ширины img в зависимости от количества слайдов
        var that = this;
        for (var i = 0; i < that.slideNumber; i++) {
            document.querySelector(".slider-container-" + that.number).querySelector(".slider").querySelector(".slider-slides").querySelector(".slides" + ":nth-child(" + (i + 1) + ")").style.width = 100 / this.slideNumber + "%";
        }
    };
    this.sliderWidth = function() {
        // функция подсчета ширины всего блока с img от количества слайдов
        document.querySelector(".slider-container-" + this.number).querySelector(".slider").querySelector(".slider-slides").style.width = this.slideNumber * 100 + "%";
    };
    this.slideMake = function() {
        for (var i = 0; i < this.slideNumber; i++) {
            this.sliderOffset.push(-i * 100 + '%');
        }
        console.log(this.sliderOffset);
    };
    this.slideLeft = function() {
        var that = this;
        this.leftbutton.onclick = function() {
            --that.ShowNow;

            if(that.ShowNow < 0) {
                that.ShowNow = that.slideNumber - 1;
            }
            console.log(that.ShowNow);
            that.lightBubs(that.ShowNow);
            document.getElementById(that.name).style.left = that.sliderOffset[that.ShowNow];
        }
    };
    this.slideRight = function() {
        var that = this;
        this.rightbutton.onclick = function() {
            ++that.ShowNow;
            if(that.ShowNow > that.slideNumber -1) {
                that.ShowNow = 0;
            }
            console.log(that.ShowNow);
            that.lightBubs(that.ShowNow);

            document.getElementById(that.name).style.left = that.sliderOffset[that.ShowNow];
        }
    };

    this.clickBubs = function() {
        var that = this;
        this.firstBub.onclick = function() {
            if (that.ShowNow === 0) {
                return;
            } else {
            that.ShowNow = 0;
            document.getElementById(that.name).style.left = that.sliderOffset[that.ShowNow];
            that.lightBubs(that.ShowNow);
            }
        };
        this.secondBub.onclick = function() {
            if (that.ShowNow === 1) {
                return;
            } else {
            that.ShowNow = 1;
            document.getElementById(that.name).style.left = that.sliderOffset[that.ShowNow];
            that.lightBubs(that.ShowNow);
            }
        };
        this.thirdBub.onclick = function() {
            if (that.ShowNow === 2) {
                return;
            } else {
                that.ShowNow = 2;
            document.getElementById(that.name).style.left = that.sliderOffset[that.ShowNow];
            that.lightBubs(that.ShowNow);
            }
        };
    };
    this.lightBubs = function() {
        for (var i = 0; i < this.slideNumber; i++) {
            if (this.ShowNow == 0) {
                this.firstBub.classList.add("active");
                this.secondBub.classList.remove("active");
                this.thirdBub.classList.remove("active");
            } else if (this.ShowNow == 1) {
                this.firstBub.classList.remove("active");
                this.secondBub.classList.add("active");
                this.thirdBub.classList.remove("active");
            } else if (this.ShowNow == 2) {
                this.firstBub.classList.remove("active");
                this.secondBub.classList.remove("active");
                this.thirdBub.classList.add("active");
            }
        }
    };
}







var slider1 = new Slider("slider1", 1);
slider1.imgWidth();
slider1.sliderWidth();
slider1.slideMake();
slider1.clickBubs();
slider1.lightBubs();
slider1.slideLeft();
slider1.slideRight();
slider1.lightBubs();

var slider2 = new Slider("slider2", 2);
slider2.imgWidth();
slider2.sliderWidth();
slider2.slideMake();
slider2.clickBubs();
slider2.lightBubs();
slider2.slideLeft();
slider2.slideRight();
slider2.lightBubs();

var slider3 = new Slider("slider3", 3);
slider3.imgWidth();
slider3.sliderWidth();
slider3.slideMake();
slider3.clickBubs();
slider3.lightBubs();
slider3.slideLeft();
slider3.slideRight();
slider3.lightBubs();
