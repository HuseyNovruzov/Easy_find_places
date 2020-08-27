//background image slider
let bg_img,i;
bg_img = document.querySelector('.bg-img');
i =0;
	setInterval(function slide(){
		let images; 
		images = [
		'images/football.jpeg','images/tennis.jpeg',
		'images/volleyball.jpeg','images/skateboard.jpeg',
		'images/cycling.jpeg','images/basketball.jpeg'];
		bg_img.setAttribute('style','background-image: url('+
			images[i++]+');transition-duration: 3s;');
		if(i>=images.length){
			i = 0;
		}},7000)

let tasker ={
		construct: function(){
			this.variables();
			this.bindEvents();
			this.scanList();
		},
		variables: function(){
			this.open = true;
			this.btns = document.querySelector('.menu-icon');
			this.btnChilds = this.btns.children;
			this.navbar = document.querySelector('.navbar');
			this.underList = document.querySelector('#pagination');
			this.links = document.querySelectorAll('.btn');
			this.body = document.querySelector('.body');
		},
		//open and close mobile menu
		openClose: function(){
			if(this.open){
				this.btnChilds[0].setAttribute('class','top');
				this.btnChilds[1].setAttribute('class','remove');
				this.btnChilds[2].setAttribute('class','bottom');
				this.body.setAttribute('style','overflow: hidden')
				this.navbar.setAttribute('style','left:0');
				this.open = false;
			}
			else{
				this.btnChilds[0].classList.remove("top");
				this.btnChilds[1].classList.remove("remove");
				this.btnChilds[2].classList.remove("bottom");
				this.body.setAttribute('style','overflow: visible')
				this.navbar.setAttribute('style','left: -100%');
				this.open = true;
			}
		},
		bindEvents: function(){
			this.btns.onclick = this.openClose.bind(this);
		},
		// show current active link
		scanList: function(){
		let current;
		for(let i = 0;i<this.links.length;i++){
			links = this.links[i];
			current = this.underList.getElementsByClassName("active");
			links.onclick = this.activate.bind(this,links,current);
		}
	},
		activate: function(links,current){
			current[0].className = current[0].className.replace("active","");
			links.className+=" active";
	}
	}
