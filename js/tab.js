window.onload=function(){
	function $(id){
		return document.getElementById(id);
	}
	/*tab change method*/
	function tab(menuId,listId,a1,ul1){
		var tabMenu=$(menuId),
			tabList=$(listId),
			tabAs=tabMenu.getElementsByTagName(a1),
			tabListUl=tabList.getElementsByTagName(ul1);
		var len=tabAs.length;
			for(var i=0;i<len;i++){
				tabAs[i].id=i;
				tabAs[i].onclick=function(){
					for(var i=0;i<len;i++){
						tabAs[i].className=" ";
						tabListUl[i].style.display="none";
					}
					this.className="active";
					tabListUl[this.id].style.display="block";
				}
			}	
	}
	/*calling method*/
	tab("tab-menu","tab-list","a","ul");


}