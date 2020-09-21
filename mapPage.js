let dates = {
    construct: function(){
      this.elements();
      this.scanTable();
    },
    elements: function(){
      this.tableDates = document.getElementById('datesTable'); //get tbody
      this.childTable = this.tableDates.children; // get tr elements
    },
    scanTable: function(){
      let dateList, selectBtn, day, freeHour, selectedHour, i=0, j=0, len = this.childTable.length,fullDate;
      fullDate = new Date();
      for(;i<len;i++){
        dateList = this.childTable[i].children; //get th,td elements that is in tr elements
        day = dateList[0];
        selectedHour = dateList[1];
        freeHour = dateList[2];
        selectBtn = dateList[3].children[0];
        if(i<len){
        day.innerText = `${fullDate.getFullYear()}-${fullDate.getMonth()+1}-${fullDate.getDate()}`;
        freeHour.innerText = `${fullDate.getHours()+j}`;
      }
      j++;
      selectBtn.onclick = this.selectTime.bind(this,dateList,fullDate,day,freeHour,selectedHour);
      }
    },
    
    selectTime: function(dateList,fullDate,day,freeHour,selectedHour){
      let obj;
      if(freeHour.innerText!==''){
        selectedHour.innerText = freeHour.innerText;
        freeHour.innerText = '';
        fullDate.setHours(selectedHour.innerText)
        fullDate.setMinutes(0);
        fullDate = fullDate.toISOString();
        console.log(fullDate)
      }
      
    }
  }