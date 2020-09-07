"use strict";
let tasker = {
	
		parallax: function(){
			lax.setup() // init

			const updateLax = () => {
			lax.update(window.scrollY)
			window.requestAnimationFrame(updateLax)
		}
			window.requestAnimationFrame(updateLax)
		},

		variables: function(){
			this.open = true;
			this.btns = document.querySelector('.menu-icon');
			this.btnChilds = this.btns.children;
			this.navbar = document.querySelector('.navbar');
			this.underList = document.querySelector('#pagination');
			this.links = document.querySelectorAll('.btn');
			this.completeBody = document.body;
		},
		//open and close mobile menu
		openClose: function(){
			if(this.open){
				this.btnChilds[0].setAttribute('class','top');
				this.btnChilds[1].setAttribute('class','remove');
				this.btnChilds[2].setAttribute('class','bottom');
				this.completeBody.setAttribute('style','overflow: hidden')
				this.navbar.setAttribute('style','left:0');
				this.open = false;
			}
			else{
				this.btnChilds[0].classList.remove("top");
				this.btnChilds[1].classList.remove("remove");
				this.btnChilds[2].classList.remove("bottom");
				this.completeBody.setAttribute('style','overflow: visible')
				this.navbar.setAttribute('style','left: -100%');
				this.open = true;
			}
		},
		bindEvents: function(){
			this.btns.onclick = this.openClose.bind(this);
		},
		// show current active link
		scanList: function(){
		let current,i=0,len = this.links.length,actLink;
		for(;i<len;i++){
			actLink = this.links[i];
			current = this.underList.getElementsByClassName("active");
			actLink.onclick = this.activate.bind(this,actLink,current);
			
		}
	},
		activate: function(actLink,current){
			current[0].className = current[0].className.replace("active","");
			actLink.className+=" active";
	}
	}

